import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

//For some reason, auth_client.useSession doesn't work in my expo app
export const auth_client = createAuthClient({
  baseURL: "http://localhost:3000", // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      cookiePrefix: "better-auth",
      disableCache: true,
      scheme: "better-auth",
      storagePrefix: "better-auth",
      storage: SecureStore,
    }),
  ],
});
