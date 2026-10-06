import { AppScreen } from "@/components/Layout/AppScreen";
import { ActiveItem } from "@/components/Main/ActiveItem";
import { GroupItem } from "@/components/Main/GroupItem";
import { CardHeader } from "@/components/UI/CardHeader";
import { ThemeCard } from "@/components/UI/ThemeCard";
import { useAppTheme } from "@/hooks/useAppTheme";
import { StyleSheet, View } from "react-native";

const sampleNoticeProps = {
  noticeMessage: "어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고",
  unreadNoticeCount: 1,
  noticeDate: "2024-06-05",
};

const groups = [
  {
    id: "basic",
    groupName: "기본 그룹",
    activeEventCount: 13,
    pendingActiveCount: 13,
    newEventCount: 13,
    ...sampleNoticeProps,
  },
  {
    id: "study",
    groupName: "스터디 그룹",
    activeEventCount: 8,
    pendingActiveCount: 3,
    newEventCount: 2,
    ...sampleNoticeProps,
  },
  {
    id: "project",
    groupName: "프로젝트 그룹",
    activeEventCount: 4,
    pendingActiveCount: 1,
    newEventCount: 0,
    ...sampleNoticeProps,
  },
];

export default function MainScreen() {
  const Color = useAppTheme();
  return (
    <AppScreen backgroundColor={Color.background.subtle}>
      <View style={{ gap: 16 }}>
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
        <ThemeCard backgroundTheme="default">
          <CardHeader title="그룹" />
          <View style={{ flexDirection: "column", gap: 16 }}>
            {groups.map(({ id, ...group }) => (
              <GroupItem key={id} {...group} />
            ))}
          </View>
        </ThemeCard>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({});
