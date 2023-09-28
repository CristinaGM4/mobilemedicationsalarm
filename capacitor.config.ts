import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.guapachacortes.alarmmobile',
  appName: 'alarmmobile',
  webDir: 'dist/alarmmobile',
  server: {
    androidScheme: 'https'
  }
};

export default config;
