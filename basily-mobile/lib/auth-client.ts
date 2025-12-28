import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

export const auth_client = createAuthClient({
  baseURL: "http://localhost:3000", // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      scheme: "basily-mobile",
      storagePrefix: "basily-mobile",
      storage: SecureStore,
    }),
  ],
});
