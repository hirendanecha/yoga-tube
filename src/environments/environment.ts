const url = 'https://api.tube.yoga';
const webUrl = 'https://tube.yoga/';
const tubeUrl = 'https://video.tube.yoga/'
// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.tube.yoga',
  siteKey: '0x4AAAAAAAUwBojCBa1YQfJt',
  secretKey: '0x4AAAAAAAUwBhIek0zdK4eShLRfbRAOAUQ',
};
