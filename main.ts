/// <reference no-default-lib="true" />
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./deno.json" assert { type: "json" };

await start(manifest, config);