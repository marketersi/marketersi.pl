import axios from 'axios';
import { track, FORM_BY_ENDPOINT } from '@/components/analytics/track';
import { oczyscOdpowiedz } from './oczyscTresci';

export const axiosInstance = axios.create({
  baseURL: 'https://superadmin.marketersi.pl',
  headers: {},
});

// Pomiar: każde udane wysłanie formularza (POST) to zdarzenie generate_lead w GA4.
axiosInstance.interceptors.response.use((response) => {
  try {
    const method = (response.config?.method || '').toLowerCase();
    const url = (response.config?.url || '').replace(/^\//, '');
    if (method === 'post') {
      const form = FORM_BY_ENDPOINT[url] || url;
      track('generate_lead', { form_name: form, page_path: typeof window !== 'undefined' ? window.location.pathname : '' });
    }
  } catch (e) {}
  return response;
});

// SEO etap 1 (8.10.2026): czyści treści z panelu z cudzych referencji Owocnych
// i ustawia pozycjonowanie "Google i AI". Opis w oczyscTresci.ts.
axiosInstance.interceptors.response.use((response) => {
  try {
    if ((response.config?.method || 'get').toLowerCase() === 'get') {
      response.data = oczyscOdpowiedz(response.config?.url || '', response.data);
    }
  } catch (e) {}
  return response;
});
