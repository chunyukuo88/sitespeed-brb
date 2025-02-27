import { input } from '@inquirer/prompts';
import processUrl from "../processing/processUrl.js";

export async function queryUserForUrl(prompt) {
  const answer = await input({ message: prompt });
  processUrl(answer);
  console.log(answer);
}
