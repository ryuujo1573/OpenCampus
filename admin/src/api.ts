import * as Ory from "@ory/client";


export const api = new Ory.FrontendApi(
  new Ory.Configuration({
    basePath: process.env.KRATOS_BASE_URL ?? "https://playground.projects.oryapis.com",
  })
);
