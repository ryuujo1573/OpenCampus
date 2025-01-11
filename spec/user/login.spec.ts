import { createClient } from "admin/client";
import { hmac } from "./hmac";

describe("user system", () => {
  it("login by password", async () => {
    const secret = "1919810";
    const salt = "yajyuu";

    const client = createClient("http://localhost:8787");
    console.error(client);

    const resp = await client.user.login.$post({
      form: {
        uid: "114514",
        password: await hmac(secret, salt),
      },
    });

    const data = await resp.json();
    console.error(data);
  });
});

