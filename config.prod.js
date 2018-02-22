module.exports = {
  port            : 7004,
  serverTimeout   : 600000,
  db              : {
    name: 'parladb',
    url: 'mongodb://localhost/',
    user: `${process.env.MONGO_USERNAME}`,
    password: `${process.env.MONGO_PASSWORD}`,
  },
  urls            : {
    analize : 'https://analize.uk.parlameter.si.si', // DATA URL BASE
  },
  apiPrefix       : '/api',
  ogCapturePath   : '/home/parlauser/parlassets/og_cards',
  ogRootUrl       : 'http://cdn.uk.parlameter.si/og_cards/', // root url for OG images
  cardCapturePath : '/home/parlauser/card_captures', // where cards are stored
};
