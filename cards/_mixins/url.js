export default {
  computed: {
    url() {
      const cardData = this.$root.$options.cardData.cardData;
      return `https://glej.uk.parlameter.si/${cardData.group}/${cardData.method}/`;
    }
  },
  methods: {
    encodeQueryData (data) {
      return '?' + Object.keys(data)
        .reduce((a, k) => {
          a.push(k + '=' + encodeURIComponent(data[k]));
          return a;
        },[])
        .join('&')
    }
  }
};
