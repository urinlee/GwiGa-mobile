import { Screen } from "@/components/Layout/Screen";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Home() {
  return (
    <Screen>
      <Text>Home</Text>
      <Pressable
        onPress={() => {
          router.push("/auth/welcome");
        }}
      >
        <Text>register</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/auth/register/first");
        }}
      >
        <Text>first</Text>
      </Pressable>
    </Screen>
  );
}
