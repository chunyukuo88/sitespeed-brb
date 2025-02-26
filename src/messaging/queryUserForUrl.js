import { input } from '@inquirer/prompts';

export async function queryUserForUrl(prompt) {
  const answer = await input({ message: prompt });
  console.log(answer);
}
