module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    development: {},
    production: {
      plugins: ["transform-remove-console"],
    },
  },
  plugins: [
    ["module:react-native-dotenv"],
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
      },
    ],
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@styles": "./src/styles",
          "@utils": "./src/utils",
        },
      },
    ],
    ["react-native-reanimated/plugin"],
  ],
};
