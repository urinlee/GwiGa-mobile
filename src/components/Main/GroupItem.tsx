import { useAppTheme } from "@/hooks/useAppTheme";
import { Megaphone } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "../UI/Divider";
import { ThemeText } from "../UI/ThemeText";
import { ThemeView } from "../UI/ThemeView";

const MAX_NOTICE_MESSAGE_LENGTH = 14;

interface GroupItemProps {
  groupName: string;
  activeEventCount: number;
  pendingActiveCount: number;
  newEventCount: number;
  noticeMessage: string;
  noticeDate: string;
  unreadNoticeCount: number;
}

export function GroupItem({
  groupName,
  activeEventCount,
  pendingActiveCount,
  newEventCount,
  noticeMessage,
  noticeDate,
  unreadNoticeCount,
}: GroupItemProps) {
  const colors = useAppTheme();
  const noticeCharacters = Array.from(noticeMessage);
  const noticePreview =
    noticeCharacters.length > MAX_NOTICE_MESSAGE_LENGTH
      ? `${noticeCharacters.slice(0, MAX_NOTICE_MESSAGE_LENGTH).join("")}...`
      : noticeMessage;

  return (
    <View>
      <View>
        <ThemeText style={styles.eventTitle}>{groupName}</ThemeText>
      </View>
      <View style={styles.activeContainer}>
        <ActiveDetail
          label="참여중인 이벤트"
          count={activeEventCount}
          color={"#467c40"}
        />
        <Divider orientation="vertical" style={styles.activeDivider} />
        <ActiveDetail
          label="해야하는 액티브"
          count={pendingActiveCount}
          color={"#b1a874"}
        />
        <Divider orientation="vertical" style={styles.activeDivider} />
        <ActiveDetail
          label="새로운 이벤트"
          count={newEventCount}
          color={"#636463"}
        />
      </View>
      <ThemeView style={styles.noticeRow} theme="subtle">
        <Megaphone size={15} color={colors.text.brand} />
        <View style={styles.noticeDetails}>
          <View style={styles.noticeMessageRow}>
            <ThemeText
              style={styles.noticeMessage}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {noticePreview}
            </ThemeText>
            {unreadNoticeCount > 0 && (
              <View
                style={[
                  styles.unreadBadge,
                  { backgroundColor: colors.status.error.background },
                ]}
              >
                <Text
                  style={[
                    styles.unreadBadgeText,
                    { color: colors.status.error.text },
                  ]}
                >
                  {unreadNoticeCount}
                </Text>
              </View>
            )}
          </View>
          <ThemeText theme="placeholder" style={styles.noticeDate}>
            {noticeDate}
          </ThemeText>
        </View>
      </ThemeView>
    </View>
  );
}

const styles = StyleSheet.create({
  eventTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 7,
  },
  noticeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  noticeDetails: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 8,
  },

  noticeMessageRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },

  noticeMessage: {
    flexShrink: 1,
    fontSize: 13,
  },

  unreadBadge: {
    minWidth: 17,
    height: 17,
    borderRadius: 9,
    marginLeft: 6,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadBadgeText: {
    fontSize: 10,
    fontWeight: "700",
  },
  noticeDate: {
    fontSize: 10,
    marginLeft: 10,
  },

  activeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    marginHorizontal: 10,
    marginBottom: 7,
  },
  activeDivider: {
    height: 28,
    alignSelf: "center",
  },
});

function ActiveDetail({
  label,
  color,
  count,
}: {
  label: string;
  color?: string;
  count: number;
}) {
  return (
    <View style={ActiveStyle.ActiveDetailContainer}>
      <Text
        style={[ActiveStyle.ActiveDetailLabel, { color: color ?? "black" }]}
      >
        {label}
      </Text>
      <Text
        style={[
          ActiveStyle.ActiveDetailText,
          { color: color ?? "black", fontWeight: "600" },
        ]}
      >
        {count} 개
      </Text>
    </View>
  );
}

const ActiveStyle = StyleSheet.create({
  ActiveDetailContainer: {
    flex: 1,
    alignItems: "center",
    gap: 6,
  },
  ActiveDetailLabel: {
    fontWeight: "600",
    fontSize: 12,
  },
  ActiveDetailText: {
    fontWeight: "600",
    fontSize: 10,
  },
});
