<template>
  <card-wrapper
    class="card-scroll"
    :id="$options.cardData.cardData._id"
    :card-url="url"
    :header-config="headerConfig">

    <div slot="info">
      <p class="info-text lead">Pregled osnovnih informacij poslanske skupine.</p>
      <p class="info-text heading">METODOLOGIJA</p>
      <p class="info-text">Vsebine za to kartico smo pridobili s spletnega mesta DZ RS (poslanska skupina, starost, članstva v delovnih telesih) in s spletnega mesta DVK (število prejetih glasov). Za ostale vsebine smo se obrnili na PR službe poslanskih skupin. Podatke so nam posredovali iz NSi, SD, (takrat še) ZaAB in ZL. SMC so nas usmerili na svoje spletno mesto, SDS pa na spletno mesto državnega zbora. Manjkajoče podatke smo pridobili s pomočjo iskalnika Google in jih za morebitne popravke pred objavo ponudili vsem poslanskim skupinam.</p>
    </div>

    <question-list :questionDays="data.results" />
  </card-wrapper>
</template>

<script>
import common from 'mixins/common';
import scroll from 'mixins/scroll';
import { memberOverview } from 'mixins/contextUrls';
import { memberTitle } from 'mixins/titles';
import QuestionList from 'components/QuestionList.vue';

export default {
  name: 'PoslanskaVprasanjaInPobudePoslanca',
  mixins: [common, scroll, memberOverview, memberTitle],
  components: { QuestionList },
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
    this.card.shadowElement = 'questions';
    if (document) {
      document.getElementById(this.card.shadowElement).addEventListener('scroll', this.checkScrollPosition);
    }
  },
};
</script>

<style lang="scss">
  .card-content {
    padding: 0;

    .card-scroll__wrapper {
      margin: 0;
    }

    .date {
      padding: 10px 20px;
    }
    ul {
      margin: 0 20px !important;
    }
  }
</style>