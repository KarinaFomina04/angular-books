import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'angular-books',
  webDir: 'dist/angular-books', // "www"
  server: {
    androidScheme: 'https'
  }
};

export default config;
