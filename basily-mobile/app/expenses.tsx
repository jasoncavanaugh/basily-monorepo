import { auth_client } from "@/lib/auth-client";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Expenses() {
  const session_qry = auth_client.useSession();
  const router = useRouter();

  useEffect(() => {
    const is_authed =
      session_qry.data && session_qry.data.session && session_qry.data.user;
    // const authed_redirect = redirect_if === "authorized" && is_authed;
    // const unauthed_redirect = redirect_if === "unauthorized" && !is_authed;
    // if (authed_redirect || unauthed_redirect) {
    if (!is_authed) {
      void router.push("/");
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session_qry.isPending, session_qry.isRefetching]);

  return (
    <View>
      <Text>Expenses</Text>
    </View>
  );
}
