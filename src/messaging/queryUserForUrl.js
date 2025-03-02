import { input } from '@inquirer/prompts';
import { processUrl } from "../processing/processUrl.js";

export async function queryUserForUrl(prompt) {
  const apiKey = process.env.GOOGLE_API_KEY;
  return console.log('processUrl() - apiKey', apiKey);

  const answer = await input({ message: prompt });
  const data = await processUrl(answer);
  try {
    if (data?.lighthouseResult?.audits) {
      console.log(data.lighthouseResult.audits['largest-contentful-paint']);
      console.log(data.lighthouseResult.audits['cumulative-layout-shift']);
      console.log(data.lighthouseResult.audits['first-contentful-paint']);
      console.log(data.lighthouseResult.audits['total-blocking-time']);
    }
    console.log('Data exists, but you are parsing it wrong:');
    console.log(data);
  } catch (error) {
    console.error('There was a problem parsing the data.', error);
  }
}
