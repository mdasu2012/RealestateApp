import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'RealEstateApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    GoogleMaps: {
      apiKey: 'AIzaSyB8_FE-DEpI9AJY1C3-sVqi-cYFOseRhCY',
    },
  },
};

export default config;
