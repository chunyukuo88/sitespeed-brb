import fetcher from './fetcher.js';

export async function processUrl(urlString){
  console.count('processUrl()');
  try {
    // const apiKey = `AIzaSyDQfQwMV2wNG3x0xVZR7hFA_x60HzDg-Uc`;
    const apiKey = process.env.GOOGLE_API_KEY;
    console.log('processUrl() - apiKey', apiKey);
    const command = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlString}&strategy=mobile&key=${apiKey}`;
    const responseAsJson = await fetcher(command);
    return responseAsJson;
  } catch (error) {
    console.count('processUrl() - There was an  error:');
    console.error(error);
  }
}
