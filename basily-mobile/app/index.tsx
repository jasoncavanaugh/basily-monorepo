import { auth_client } from "@/lib/auth-client";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Index() {
  const [assets] = useAssets([require("../assets/images/logo.png")]);

  return (
    <View className="flex h-[100vh] flex-col pt-8 md:flex-row md:items-center md:justify-center md:py-4">
      <View className="flex flex-col items-start justify-center gap-3 rounded-lg px-4 py-8 md:h-[100%] md:w-[50%] md:gap-6 md:p-16">
        <View className="flex flex-row gap-2">
          <View className="h-12 w-12">
            {assets ? (
              <Image
                style={{ flex: 1, width: "100%" }}
                source={assets[0].uri}
                alt="Wth"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
            ) : null}
          </View>
          <View className="flex items-center gap-2">
            <Text className="text-6xl font-medium tracking-wide">BASILY</Text>
          </View>
        </View>
        <Text className="text-base text-slate-700 dark:text-white md:text-2xl md:text-lg">
          A minimalistic expense tracker
        </Text>
        <Pressable
          className="rounded-full bg-squirtle px-3 py-1 text-sm font-semibold text-white shadow-sm shadow-blue-300 hover:brightness-110 w-20 md:w-24 dark:bg-rengar md:px-6 md:py-2 md:text-3xl md:text-lg"
          onPress={() => {
            void auth_client.signIn.social(
              {
                provider: "github",
                callbackURL: `exp://192.168.1.150:8081/expenses`,
                errorCallbackURL: `exp://192.168.1.150:8081/sign-in`,
              },
              {
                onRequest: () => {
                  // set_sign_in_loading(true);
                },
                onError: () => {
                  // alert("Something went wrong");
                  // set_sign_in_loading(false);
                },
              },
            );
          }}
        >
          <Text className="text-white font-semibold">Sign In</Text>
          {/* {sign_in_loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text className="text-white font-semibold">Sign In</Text>
          )} */}
        </Pressable>
      </View>
    </View>
  );
}
