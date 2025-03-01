import fetcher from './fetcher.js';

export async function processUrl(urlString){
  const command = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlString}&strategy=mobile`;
  const response = await fetcher(command)
};
