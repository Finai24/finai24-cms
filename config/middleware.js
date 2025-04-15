module.exports = ({ env }) => ({
  settings: {
    session: {
      enabled: true,
      keys: env.array('APP_KEYS'),
    },
  },
});
