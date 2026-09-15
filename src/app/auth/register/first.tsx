import { WelcomeScreen } from "@/components/Layout/WelcomeScreen";
import { EditableAvatar } from "@/components/UI/Avatar";
import { BottomButton } from "@/components/UI/BottomButton";
import { StatusText } from "@/components/UI/StatusText";
import { ThemeText } from "@/components/UI/ThemeText";
import { ThemeTextInput } from "@/components/UI/ThemeTextInput";
import { UserValidation } from "@/constants/validation";
import { useSinglePage } from "@/hooks/useSinglePage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Keyboard, StyleSheet, View } from "react-native";

const UserNameValidation = UserValidation.pick({ name: true });

export default function first() {
  const { page, setPage, NextPage, PrevPage, pageData } = useSinglePage(
    0,
    1,
    0,
    {
      0: {
        onFocus: () => {},
      },
      1: {
        onFocus: () => {
          setPage(0);
        },
      },
    },
  );
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(UserNameValidation),
  });

  const onNextButton = (data: any) => {
    // TODO: 재검사 후 서버 전송
    // 단, 유효성 검사는 클라이언트에서만 하면 안됨
    Keyboard.dismiss();
    NextPage();
  };

  const onPrevButton = () => {
    PrevPage();
  };

  return (
    <WelcomeScreen>
      <View style={styles.Container}>
        <View style={styles.Content}>
          {page === 1 && (
            <>
              <ThemeText theme="secondary" style={styles.msg}>
                프로필 사진도 바꿀 수 있어요{":)"}
              </ThemeText>
              <EditableAvatar
                size={160}
                uri="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"
              />
            </>
          )}
          {page === 0 && (
            <ThemeText theme="secondary" style={styles.msg}>
              닉네임을 알려주세요!
            </ThemeText>
          )}
          <Controller
            control={control}
            name={"name"}
            render={({ field: { onChange, value } }) => (
              <ThemeTextInput
                style={{
                  width: "80%",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  textAlign: "center",
                }}
                onChangeText={onChange}
                value={value}
                onPressIn={pageData?.onFocus}
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
            onPress={handleSubmit(onNextButton)}
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
