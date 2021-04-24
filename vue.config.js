module.exports = {
  publicPath: "./",
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/assets/css/_variables.scss";
          @import "~@/assets/css/_mixins.scss";
        `,
      },
    },
  },
};
