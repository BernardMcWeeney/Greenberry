/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  AWS_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  FROM_EMAIL_ADDRESS: string;
  TO_EMAIL_ADDRESS: string;
}

declare namespace App {
  interface Locals extends Runtime {}
}
