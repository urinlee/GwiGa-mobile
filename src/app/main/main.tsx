import { AppScreen } from "@/components/Layout/AppScreen";
import { ActiveItem } from "@/components/Main/ActiveItem";
import { CardHeader } from "@/components/UI/CardHeader";
import { ThemeCard } from "@/components/UI/ThemeCard";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, View } from "react-native";

export default function MainScreen() {
  const Color = useAppTheme();
  return (
    <AppScreen backgroundColor={Color.background.subtle}>
      <ThemeCard backgroundTheme="default">
        <CardHeader title="액티브" />
        <View style={{ flexDirection: "column" }}>
          <ActiveItem
            activeName="활동"
            groupName="기본 그룹"
            remainingDays={"2일 남음"}
          />
          <ActiveItem
            iconTypes="PAYMENT"
            activeName="활동"
            groupName="기본 그룹"
            remainingDays={"3일 남음"}
          />
          <ActiveItem
            iconTypes="SURVEY"
            activeName="활동"
            groupName="기본 그룹"
            remainingDays={"5일 남음"}
          />
          <ActiveItem
            iconTypes="MANUAL"
            activeName="활동"
            groupName="기본 그룹"
            remainingDays={"남은 일 없음"}
            onShortcutPress={() => {
              console.log("Shortcut pressed");
            }}
            onPress={() => {
              console.log("Item pressed");
            }}
          />
        </View>
      </ThemeCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
