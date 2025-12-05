import { createAuthClient } from "better-auth/react";
import { BASE_URL } from "./constants";
export const auth_client = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: BASE_URL,
  // // disableDefaultFetchPlugins: true,
  // fetchOptions: {
  //   customFetchImpl: fetch,
  // }
});
