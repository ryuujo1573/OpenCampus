export async function hmac(secret: string, salt: string) {
  const enc = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw", // raw format of the key - should be Uint8Array
    enc.encode(salt),
    {
      // algorithm details
      name: "HMAC",
      hash: { name: "SHA-512" },
    },
    false, // export = false
    ["sign", "verify"] // what this key can do
  );

  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(secret));
  const b = new Uint8Array(signature);
  const str: string = Array.prototype.map
    .call(b, (x) => x.toString(16).padStart(2, "0"))
    .join("");

  return str;
}
