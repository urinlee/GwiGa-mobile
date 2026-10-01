import {
    Check,
    CircleDollarSign,
    LucideIcon,
    SquareText,
} from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemeButton } from "../UI/ThemeButton";
import { ThemeText } from "../UI/ThemeText";

interface IconType {
  icon: LucideIcon;
  iconFrameColor: string;
  iconColor: string;
}

const IconTypes: Record<string, IconType> = {
  MANUAL: {
    icon: Check,
    iconFrameColor: "#62a870",
    iconColor: "#ffffff",
  },
  PAYMENT: {
    icon: CircleDollarSign,
    iconFrameColor: "#f5a623",
    iconColor: "#ffffff",
  },
  SURVEY: {
    icon: SquareText,
    iconFrameColor: "#4a90e2",
    iconColor: "#ffffff",
  },
};

interface ActiveItemProps {
  activeName: string;
  groupName: string;
  remainingDays: string;
  iconTypes?: keyof typeof IconTypes;

  onPress?: () => void;
  onShortcutPress?: () => void;
}

export function ActiveItem({
  iconTypes = "MANUAL",
  ...props
}: ActiveItemProps) {
  const { icon: Icon, iconFrameColor, iconColor } = IconTypes[iconTypes];
  return (
    <Pressable style={styles.Container} onPress={props.onPress}>
      <View style={styles.LeftContainer}>
        <View>
          <View style={[styles.IconFrame, { backgroundColor: iconFrameColor }]}>
            <Icon color={iconColor} strokeWidth={3} size={14} />
          </View>
        </View>
        <View>
          <View style={styles.Title}>
            <ThemeText style={styles.ActiveName}>{props.activeName}</ThemeText>
            <ThemeText style={styles.RemainingDays}>
              {props.remainingDays}
            </ThemeText>
          </View>
          <View style={styles.SubTitle}>
            <ThemeText theme={"placeholder"} style={styles.GroupNameText}>
              {props.groupName}
            </ThemeText>
          </View>
        </View>
      </View>
      <View>
        <ThemeButton
          theme="secondary"
          style={styles.shortcutButton}
          onPress={props.onShortcutPress}
        >
          <ThemeText theme={"placeholder"} style={styles.shortcutButtonText}>
            바로가기
          </ThemeText>
        </ThemeButton>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 9,
  },
  IconFrame: {
    padding: 4,
    marginRight: 6,
    backgroundColor: "#9bdda8",
    borderRadius: 8,
  },
  Title: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  ActiveName: {
    paddingVertical: 2,
    fontSize: 17,
    fontWeight: "bold",
  },
  RemainingDays: {
    fontSize: 10,
    marginBottom: 2,
  },
  SubTitle: {
    paddingLeft: 2,
  },
  GroupNameText: {
    fontSize: 9,
  },
  shortcutButton: {
    padding: 10,
    borderRadius: 8,
  },
  shortcutButtonText: {
    fontSize: 8,
    fontWeight: "800",
  },
});
