import fetch from 'node-fetch';

export default async function fetcher(url){
  const response = await fetch(url);
  const asText = await response.text();
  console.log(asText);
}
