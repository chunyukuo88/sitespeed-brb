import fetch from 'node-fetch';

export default async function fetcher(url){
  console.count('fetcher()');
  try {
    const response = await fetch(url);
    const asJson = await response.json();
    return asJson;
  } catch(error){
    console.error('fetcher() - There was an  error:\n', error);
  }
}
