import fetch from 'node-fetch';

// const spoofedCurlHeaders = {
//   'User-Agent': 'curl/7.68.0',
//   'Accept': '*/*'
// };

export default async function fetcher(url){
  console.count('fetcher()');
  try {
    // const response = await fetch(url, {headers: spoofedCurlHeaders});
    const response = await fetch(url);
    const asJson = await response.json();
    return asJson;
  } catch(error){
    console.error('fetcher() - There was an  error:\n', error);
  }
}
