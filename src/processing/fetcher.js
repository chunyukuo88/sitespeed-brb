import fetch from 'node-fetch';

const spoofedCurlHeaders = {
  'User-Agent': 'curl/7.68.0',
  'Accept': '*/*'
};

export default async function fetcher(url){
  const response = await fetch(url, {headers: spoofedCurlHeaders});
  const asText = await response.text();
  console.log(asText);
}
