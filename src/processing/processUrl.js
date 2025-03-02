import fetcher from './fetcher.js';
import 'dotenv/config';

export async function processUrl(urlString){
  console.count('processUrl()');
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const command = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlString}&strategy=mobile&key=${apiKey}`;
    const responseAsJson = await fetcher(command);
    return responseAsJson;
  } catch (error) {
    console.count('processUrl() - There was an  error:');
    console.error(error);
  }
}
