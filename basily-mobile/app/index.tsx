import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Index() {
  const [assets, error] = useAssets([require("../assets/images/logo.png")]);
  console.log("assets", assets, error);

  return (
    <View className="flex h-[100vh] flex-col pt-8 md:flex-row md:items-center md:justify-center md:py-4">
      <View className="flex h-[20%] flex-col items-start justify-center gap-3 rounded-lg  px-4 py-8 md:h-[100%] md:w-[50%] md:gap-6 md:p-16">
        <View className="flex items-center gap-2">
          <View style={styles.container}>
            {assets ? (
              <Image
                style={styles.image}
                source="https://picsum.photos/seed/696/3000/2000"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
            ) : (
              <Text>Nope</Text>
            )}
          </View>
          <Text className="text-6xl font-medium tracking-wide">BASILY</Text>
        </View>
        <Text className="text-base text-slate-700 dark:text-white md:text-2xl md:text-lg">
          A minimalistic expense tracker
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
/*
    <div className="flex h-[100vh] flex-col pt-8 md:flex-row md:items-center md:justify-center md:py-4">
      <div className="flex h-[20%] flex-col items-start justify-center gap-3 rounded-lg  px-4 py-8 md:h-[100%] md:w-[50%] md:gap-6 md:p-16">
        <Logo />
        <p className="text-base text-slate-700 dark:text-white md:text-2xl md:text-lg">
          A minimalistic expense tracker
        </p>
        <button
          className="rounded-full bg-squirtle px-3 py-1 text-sm font-semibold text-white shadow-sm shadow-blue-300 hover:brightness-110 dark:bg-rengar md:px-6 md:py-2 md:text-3xl md:text-lg"
          onClick={() =>
            void auth_client.signIn.social({
              provider: "github",
              callbackURL: `${FRONTEND_URL}/expenses`, 
              errorCallbackURL: `${FRONTEND_URL}/sign-in`,
            })
          }
        >
          Sign In
        </button>
      </div>
      <BasilPreview />
    </div>

*/
