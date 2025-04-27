import { createHandler } from "$fresh/server.ts";
import { render } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/types.ts";

import Home from "./routes/index.tsx";

export const handler: Handlers = {
  GET(req, ctx) {
    return render(req, ctx, Home);
  },
};

export default handler;