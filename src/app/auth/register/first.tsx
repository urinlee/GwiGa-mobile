import { WelcomeScreen } from "@/components/Layout/WelcomeScreen";
import { BottomButton } from "@/components/UI/BottomButton";
import { StatusText } from "@/components/UI/StatusText";
import { ThemeText } from "@/components/UI/ThemeText";
import { ThemeTextInput } from "@/components/UI/ThemeTextInput";
import { UserValidation } from "@/constants/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

export default function first() {
  const UserNameValidation = UserValidation.pick({ name: true });
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(UserNameValidation),
  });

  const onSubmit = (data: any) => {
    // TODO: 재검사 후 서버 전송
    // 단, 유효성 검사는 클라이언트에서만 하면 안됨
  };

  return (
    <WelcomeScreen>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <ThemeText theme="secondary" style={styles.msg}>
            닉네임을 알려주세요!
          </ThemeText>
          <Controller
            control={control}
            name={"name"}
            render={({ field: { onChange, value } }) => (
              <ThemeTextInput
                style={{ width: "80%" }}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
        <View style={{ minHeight: 100, justifyContent: "flex-end" }}>
          {errors.name && (
            <StatusText
              status="error"
              style={{ marginTop: 10, textAlign: "center" }}
            >
              {errors.name.message}
            </StatusText>
          )}
          <BottomButton
            label="다음"
            disabled={!isValid}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
  },
  Content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  msg: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
