#!/usr/bin/env node
import {initialGreeting} from "./messaging/initialGreeting.js";

export async function main() {
  initialGreeting();
}

await main();