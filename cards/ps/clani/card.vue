<template>
  <card-wrapper
    :id="$options.cardData.cardData._id"
    class="card-scroll"
    :card-url="url"
    :header-config="headerConfig">

    <div slot="info">
      <p class="info-text lead">Seznam vseh članov poslanske skupine.</p>
      <p class="info-text heading">METODOLOGIJA</p>
      <p class="info-text">
        Imena ter slike poslancev, ki predstavljajo posamezno poslansko skupino, črpamo s <a href="http://www.dz-rs.si/wps/portal/Home/ODrzavnemZboru/KdoJeKdo/PoslanskeSkupine" class="funblue-light-hover">spletnega mesta DZ</a>. Prikazani so samo trenutno aktivni poslanci.
      </p>
    </div>

    <div id="clani" class="card-scroll__wrapper">
      <person-list class="person-list" :people="data.results" />
    </div>
  </card-wrapper>
</template>

<script>
import common from 'mixins/common';
import scroll from 'mixins/scroll';
import { partyOverview } from 'mixins/contextUrls';
import { partyTitle } from 'mixins/titles';
import PersonList from 'components/PersonList.vue';

export default {
  components: { PersonList },
  mixins: [common, scroll, partyOverview, partyTitle],
  name: 'ClaniPoslanskeSkupine',
  data() {
    return {
      data: this.$options.cardData.data,
    };
  },
  computed: {
    headerConfig() {
      return {
        circleIcon: 'og-list',
        heading: '&nbsp;',
        subheading: '7. sklic parlamenta',
        alternative: this.$options.cardData.cardData.altHeader === 'true',
        title: this.$options.cardData.cardData.name,
        headerClass: 'filters--shadow',
        headerClassApply: this.card.shouldShadow
      }
    },
  },
  mounted() {
    this.card.shadowElement = 'people';
    if (document) {
      document.getElementById(this.card.shadowElement).addEventListener('scroll', this.checkScrollPosition);
    }
  },
};
</script>

<style lang="scss">
  .person-list .person {
    padding: 8px 16px;
  }
  .card-scroll {

    .card-content {
      margin: 0;
      padding: 0;
    }

    .card-scroll__wrapper {
      margin: 0;
    }
  }
</style>

<style lang="scss" scoped>
.person-list {
  max-height: 100%;
  overflow-y: auto;
}
</style>
