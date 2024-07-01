module.exports = {
    async rewrites() {
      return [
        {
          source: '/our-process/:step', // Dynamic route pattern
          destination: '/our-process/step', // Actual page to render
        },
      ]
    },
  }