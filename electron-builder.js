module.exports = {
  appId: "com.test.play",
  productName: "TEST",
  copyright: "Copyright © 2020 TEST",
  directories: {},
  files: [
    // realm
    "!node_modules/realm/android${/*}",
    "!node_modules/realm/build${/*}",
    "!node_modules/realm/node-addon-api${/*}",
    "!node_modules/realm/react-native${/*}",
    "!node_modules/realm/scripts${/*}",
    "!node_modules/realm/src${/*}",
    "!node_modules/realm/vendor${/*}",
    "!node_modules/realm/dependencies.list",
    "!node_modules/realm/LICENSE",
    "!node_modules/realm/react-native.config.js",
    "!node_modules/realm/realm.gypi",
    "!node_modules/realm/RealmJS.podspec",
    "!node_modules/realm/target_defaults.gypi",
  ],
  linux: {
    target: ["AppImage"],
    category: "AudioVideo",
    desktop: {
      name: "TEST",
    },
  },
  mac: {
    category: "public.app-category.entertainment",
    hardenedRuntime: true,
    gatekeeperAssess: false,
  },
};
