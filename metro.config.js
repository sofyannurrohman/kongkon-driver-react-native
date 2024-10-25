const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [...assetExts, 'png'].filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

// Merge configurations
const mergedConfig = mergeConfig(defaultConfig, config);

// Export with NativeWind configuration
module.exports = withNativeWind(mergedConfig, {input: './global.css'});
