import Constants from 'expo-constants';
import { Platform } from 'react-native';

/**
 * HealthHub Patient Mobile API Configuration
 * Backend runs via Laravel: `php artisan serve --host=0.0.0.0 --port=8000`
 */
export function resolveHostIp(): string {
  // 1. Host from Expo dev server (automatic when scanning QR on iPhone/Android on Wi-Fi)
  const hostUri =
    Constants.expoConfig?.hostUri ||
    (Constants as any)?.manifest2?.extra?.expoGo?.debuggerHost ||
    (Constants as any)?.manifest?.debuggerHost;

  if (hostUri) {
    const hostIp = hostUri.split(':')[0];
    if (hostIp && hostIp !== 'localhost' && hostIp !== '127.0.0.1') {
      return hostIp;
    }
  }

  // 2. Linking URI fallback e.g. exp://10.10.60.227:8081
  const linkingUri = (Constants as any)?.linkingUri;
  if (typeof linkingUri === 'string' && linkingUri.includes('//')) {
    const withoutProto = linkingUri.split('//')[1];
    const ip = withoutProto.split(':')[0].split('/')[0];
    if (ip && ip !== 'localhost' && ip !== '127.0.0.1') {
      return ip;
    }
  }

  // 3. Current active local LAN Wi-Fi IP
  return '10.10.60.227';
}

function resolveApiBaseUrl(): string {
  const envUrl = process.env.EXPO_PUBLIC_API_URL;
  if (envUrl && !envUrl.includes('10.120.3.140') && !envUrl.includes('[IP_ADDRESS]')) {
    return envUrl;
  }

  const hostIp = resolveHostIp();
  if (hostIp) {
    return `http://${hostIp}:8000/api`;
  }

  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:8000/api';
  }

  return 'http://10.10.60.227:8000/api';
}

export function resolveWebPortalUrl(): string {
  if (process.env.EXPO_PUBLIC_WEB_URL) {
    return process.env.EXPO_PUBLIC_WEB_URL;
  }
  const ip = resolveHostIp();
  return `http://${ip}:3000`;
}

export const API_BASE_URL = resolveApiBaseUrl();
export const WEB_PORTAL_URL = resolveWebPortalUrl();
