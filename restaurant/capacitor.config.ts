import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'restaurant',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
