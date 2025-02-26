#!/usr/bin/env node
import {initialGreeting} from "./messaging/initialGreeting.js";
import messages from "./messaging/messages.js";
import {queryUserForUrl} from "./messaging/queryUserForUrl.js";

export async function main() {
  initialGreeting(messages.initialGreeting);
  await queryUserForUrl(messages.queryUserForUrl);
}

await main();