import fetcher from './fetcher.js';
import 'dotenv/config';

const buildCompleteUrl = (urlFromUser) => {
  const key = process.env.GOOGLE_API_KEY;
  return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlFromUser}&strategy=mobile&key=${key}`;
};

export async function processUrl(urlString){
  console.count('processUrl()');
  try {
    const url = buildCompleteUrl(urlString);
    const responseAsJson = await fetcher(url);
    return responseAsJson;
  } catch (error) {
    console.count('processUrl() - There was an  error:');
    console.error(error);
  }
}
