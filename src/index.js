#!/usr/bin/env node
import {initialGreeting} from "./messaging/initialGreeting.js";
import messages from "./messaging/messages.js";

export async function main() {
  initialGreeting(messages);
}

await main();