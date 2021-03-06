<template>
  <div id="zakonodaja">
    <div v-if="$options.cardData.parlaState && $options.cardData.parlaState.generator" class="row legislation-list">
      <div class="session-list-generator">
        <div class="col-md-12 filters">
          <ul class="button-filters">
            <striped-button
              v-for="(filter, index) in filters"
              @click.native="selectFilter(filter)"
              color="sds"
              :key="index"
              :selected="filter === currentFilter"
              :small-text="filter"
            />
          </ul>

          <div class="filter text-filter">
            <div class="filter-label">Išči po naslovu</div>
            <p-search-field v-model="textFilter"></p-search-field>
          </div>

          <div class="filter month-dropdown">
            <div class="filter-label">Matično delovno telo</div>
            <p-search-dropdown
              :items="allworkingBodies"
              :placeholder="inputPlaceholder"
              :alphabetise="false">
            </p-search-dropdown>
          </div>

          <div class="filter only-abstracts">
            <input id="only-abstracts" type="checkbox" v-model="onlyAbstracts" class="checkbox" />
            <label for="only-abstracts">Samo s povzetki</label>
          </div>
        </div>
      </div>
    </div>
    <inner-card
      :header-config="headerConfig"
      :columns="columns"
      :items="processedData"
      :current-sort="currentSort"
      :current-sort-order="currentSortOrder"
      :select-sort="selectSort"
      :info-text="infoText"
      :generated-card-url="generatedCardUrl"
    />
  </div>

</template>

<script>
  import common from 'mixins/common';
  import StripedButton from 'components/StripedButton.vue';
  import PSearchField from 'components/SearchField.vue';
  import PSearchDropdown from 'components/SearchDropdown.vue';
  import dateParser from 'helpers/dateParser';
  import InnerCard from './innerCard.vue';

  export default {
    components: {
      StripedButton,
      PSearchField,
      InnerCard,
      PSearchDropdown,
    },
    mixins: [common],
    name: 'Zakonodaja',
    data() {

      // get all working bodies from result data
      let allworkingBodies = this.$options.cardData.data.results.map(x => x.mdt).filter((x) => { return x.id > 0; });
      // prepare for dropdown ui component
      allworkingBodies = allworkingBodies.map(
        wb => ({ id: wb.id, label: wb.name, selected: false})
      );
      // remove duplicates
      allworkingBodies = allworkingBodies.map(JSON.stringify).reverse().filter(function (e, i, a) {
        return a.indexOf(e, i+1) === -1;
      }).reverse().map(JSON.parse)

      return {
        // id: this.$options.cardData.data.session.id,
        data: this.$options.cardData.data.results,
        filters: ['Zakoni', 'Akti'],
        currentFilter: this.$options.cardData.parlaState.filter || 'Zakoni',
        currentSort: 'updated',
        currentSortOrder: 'desc',
        textFilter: '',
        workingBodies: [],
        headerConfig: {
          circleIcon: 'og-list',
          heading: '&nbsp;',
          alternative: this.$options.cardData.cardData.altHeader === 'true',
          title: this.$options.cardData.cardData.name,
        },
        allworkingBodies,
        onlyAbstracts: false,
      };
    },
    computed: {
      inputPlaceholder() {
        return this.selectedWorkingBodies.length ? `izbranih: ${this.selectedWorkingBodies.length}` : 'izberi';
      },
      selectedWorkingBodies() {
        return this.allworkingBodies.filter(wb => wb.selected).map(wb => wb.id);
      },
      columns: () => [
        { id: 'name', label: 'Ime', additionalClass: 'small-text' },
        { id: 'epa', label: 'EPA', additionalClass: 'narrow' },
        { id: 'updated', label: 'Sprememba' },
        // { id: 'workingBody', label: 'Matično delovno telo', additionalClass: 'small-text' },
        { id: 'result', label: 'Status', additionalClass: '' },
      ],
      infoText () {
        const tabText = true === 'Zakoni' ? 'zakonov' : 'aktov';
        let html = `<p class="info-text lead">Seznam vseh ${tabText}, o katerih so v tem sklicu glasovali na sejah Državnega zbora in ustrezajo uporabniškemu vnosu (naslov, matično delovno telo).</p>`;
        html += '<p class="info-text heading">METODOLOGIJA</p>';

        const link = this.currentFilter === 'Zakoni'
          ? 'https://www.dz-rs.si/wps/portal/Home/deloDZ/zakonodaja/vObravnavi/predlogiZakonov/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivT39gy2dDB0N_D18DA08PQIcDbwtnIwN3I30wwkpiAJKG-AAjgb6BbmhigDW2mUM/dz/d5/L2dBISEvZ0FBIS9nQSEh'
          : 'https://www.dz-rs.si/wps/portal/Home/deloDZ/zakonodaja/vObravnavi/predlogiAktov/!ut/p/z1/04_Sj9CPykssy0xPLMnMz0vMAfIjo8zivT39gy2dDB0N_D18DA08PQIcDbwtnIwNLMz0wwkpiAJKG-AAjgb6BbmhigAUeAnK/dz/d5/L2dBISEvZ0FBIS9nQSEh/';
        html += `<p class="info-text text">Podatke o sejah pridobivamo iz spletnega mesta <a class="funblue-light-hover" href="${link}">DZ RS</a>.</p>`;

        return html;
      },
      generatedCardUrl() {
        const state = {};
        state.type = this.currentFilter;

        if (this.textFilter.length > 0) state.text = this.textFilter;
        // @todo probably needs a good fix
        if (this.selectedWorkingBodies.length) state.wb = this.selectedWorkingBodies;

        return `https://glej.parlameter.si/${this.$options.cardData.cardData.group}/${this.$options.cardData.cardData.method}/?state=${encodeURIComponent(JSON.stringify(state))}&altHeader=true&customUrl=${encodeURIComponent('https://analize.parlameter.si/v1/s/getAllLegislation/')}`;
      },
      processedData () {
        const filterLegislation = (legislation) => {
          const textMatch = this.textFilter === '' || legislation.text === null || legislation.text.toLowerCase().indexOf(this.textFilter.toLowerCase()) > -1;
          const typeMatch = this.currentFilter === '' | legislation.classification === (this.currentFilter === 'Zakoni' ? 'zakon' : 'akt');
          const wbMatch = this.selectedWorkingBodies.length === 0 || this.selectedWorkingBodies.includes(legislation.mdt.id);
          const onlyAbstractsMatch = !this.onlyAbstracts || legislation.abstractVisible;

          return textMatch && typeMatch && wbMatch && onlyAbstractsMatch;
        }

        const sortedAndFilteredLegislation = this.data.filter(filterLegislation).sort((A, B) => {
          let a,b;

          switch (this.currentSort) {
            case 'name':
              a = A.text;
              b = B.text;
              return a.toLowerCase().localeCompare(b.toLowerCase());
              break;
            case 'updated':
              a = dateParser(A.date).getTime();
              b = dateParser(B.date).getTime()
              if (a < b) {
                return -1;
              } else if (a > b) {
                return 1;
              }
              return 0;
              break;
            case 'workingBody':
              a = A.mdt_text;
              b = B.mdt_text;
              return a.localeCompare(b, 'sl');
              break;
            case 'result':
              a = A.result || 'v obravnavi';
              b = B.result || 'v obravnavi';
              return a.toLowerCase().localeCompare(b.toLowerCase());
              break;
            case 'epa':
              a = parseInt(A.epa || '0-VII');
              b = parseInt(B.epa || '0-VII');
              return a - b;
              break;
            default:
              return 0;
              break;
          };
        });

        if (this.currentSortOrder === 'desc') sortedAndFilteredLegislation.reverse();

        return sortedAndFilteredLegislation;
      }
    },
    methods: {
      selectSort(sortId) {
        if (this.currentSort === sortId) {
          this.currentSortOrder = this.currentSortOrder === 'asc' ? 'desc' : 'asc';
        } else {
          this.currentSort = sortId;
          this.currentSortOrder = 'asc';
        }

        // this.measurePiwik('', sortId, this.currentSortOrder);
      },
      selectFilter(filter) {
        this.currentFilter = filter;
        // this.measurePiwik(filter, '', '');
      },
      measurePiwik(filter, sort, order) {
        if (typeof measure === 'function') {
          if (sort !== '') {
            measure('s', 'session-sort', `${sort} ${order}`, '');
          } else if (filter !== '') {
            measure('s', 'session-filter', filter, '');
          }
        }
      },
    },
  };
</script>

<style lang="scss">
  @import '~parlassets/scss/breakpoints';
  @import '~parlassets/scss/colors';


  .legislation-list {
    padding: 0;

    a {
      color: #009cda;
    }

    .dropdown-filter.search-dropdown { height: 51px; }

    .item .column {
      &:first-child {
        font-family: "Roboto Slab", sans-serif;
      }
    }

    .column{
      font-size: 16px;

      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) .text {
        @include respond-to(mobile) {
          display:none;
        }
      }

      &:nth-child(3) {
        @include respond-to(desktop) {
          padding-left: 40px;
        }
      }

      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) .text {
        font-size: 16px !important;
      }

      &.small-text {
        font-size: 14px;
      }


      &:last-child {
        .outcome .text {
          min-width: 92px;

          @include respond-to(mobile) {
            min-width: 75px;
          }
        }
      }
    }


    .filters {
      padding: 0;
      .dropdown-filter {
        @include respond-to(desktop) { margin-left: 10px; }

        margin-right: 0;
      }

      $label-height: 26px;

      display: flex;

      .striped-button {
        width: 50%;
        height: 51px;
      }

      .filter-label {
        font-size: 14px;
        font-weight: 300;
        line-height: $label-height;

      }

      .month-dropdown {
        width: 100%;

        @include respond-to(desktop) {
          margin-left: 10px;
          width: 26%;
        }

        .search-dropdown {

        }

        .filter-label {
          margin-left: 10px;
        }
      }

      .text-filter {
        @include respond-to(desktop) {
          width: 26%;
          margin-left: 10px;
        }

        width: 100%;

        .text-filter-input {
          background-image: url('https://cdn.parlameter.si/v1/parlassets/icons/search.svg');
          background-size: 24px 24px;
          background-repeat: no-repeat;
          background-position: right 9px center;
          border: 1px solid #c8c8c8;
          font-size: 16px;
          height: 51px;
          line-height: 27px;
          outline: none;
          padding: 12px 42px 12px 14px;
          width: 100%;
        }
      }

      .search-dropdown-input {
        padding-top: 11px;
        padding-bottom: 11px;
      }

      .button-filters {

        @include respond-to(desktop) {
          flex: 0;
          margin-top: $label-height;
        }

        .striped-button {
          @include respond-to(mobile) { width: 49%; }
          @include respond-to(desktop) { width: 140px; }

          &:first-child {
            @include respond-to(desktop) { margin-right: 10px; }
          }
        }
      }

      .only-abstracts {
        padding-top: 40px;
        padding-left: 10px;

        @include respond-to(mobile) {
          padding-top: 10px;
          padding-left: 0;
          margin-bottom: -5px;
        }
      }

    }
  }

  .button-filters {
    .striped-button {
      background-color: #f0f0f0;
    }
  }

</style>
