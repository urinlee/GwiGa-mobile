import {
    VerificationMethodCard,
    type VerificationMethodCardProps,
} from "@/components/Auth/VerificationMethodCard";
import { WelcomeScreen } from "@/components/Layout/WelcomeScreen";
import { BottomButton } from "@/components/UI/BottomButton";
import { GoBackHeader } from "@/components/UI/GoBackHeader";
import { ThemeText } from "@/components/UI/ThemeText";
import { Fonts } from "@/constants/theme";
import { ScrollView, StyleSheet, View } from "react-native";

interface VerificationMethod extends VerificationMethodCardProps {
  id: string;
}

// 인증 수단을 추가하고 onPress에 해당 인증 시작 동작을 연결합니다.
const VERIFICATION_METHODS: readonly VerificationMethod[] = [
  {
    id: "pass",
    title: "Pass 인증",
    description:
      "한번 인증하면 실명, 전화번호, 나이를 자동으로 제출 할 수 있어요!",
    imageSource: {
      uri: "https://play-lh.googleusercontent.com/CV3XR7OqcyIbdCn7gB9IuxH2zLWsD2c4-uvM4ZfinnpPc1SNhFWng3riU8a24K5ooWEPRCTzOjPgVU09Kh1UVw",
    },
  },
];

export default function RegisterVerificationScreen() {
  return (
    <WelcomeScreen>
      <View style={styles.container}>
        <GoBackHeader />
        <ThemeText theme="brand" style={styles.title}>
          인증
        </ThemeText>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.methodList}
        >
          {VERIFICATION_METHODS.map(({ id, ...method }) => (
            <VerificationMethodCard key={id} {...method} />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <ThemeText style={styles.skipHint}>지금은 넘어갈 수 있어요</ThemeText>
          <BottomButton label="끝낼래요" />
        </View>
      </View>
    </WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  content: {
    flex: 1,
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "900",
    fontFamily: Fonts.sans,
  },
  methodList: {
    gap: 12,
    paddingBottom: 16,
  },
  footer: {
    gap: 10,
  },
  skipHint: {
    fontSize: 16,
    textAlign: "center",
  },
});
