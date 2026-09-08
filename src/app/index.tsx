import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <Button title="회원가입" onPress={() => router.push("/auth/register")} />
    </View>
  );
}
