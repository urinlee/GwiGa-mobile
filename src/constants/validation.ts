import { z } from "zod";

export const UserValidation = z.object({
  name: z
    .string()
    .min(1, "이름을 입력해주세요.")
    .max(8, "이름은 8자 이하로 입력해주세요.")
    .regex(
      /^[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+$/,
      "이름은 한글, 영어, 숫자만 사용할 수 있습니다.",
    ),
});
