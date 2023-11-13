import { MissionUtils } from "@woowacourse/mission-utils";
const InputView = {
  async readDate() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
        );
        const input_to_num = Number(input);

        if (isNaN(input_to_num))
          throw new Error("[ERROR] 숫자로만 입력해주세요");

        if (input_to_num < 1 || input_to_num > 31)
          throw new Error(
            "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요"
          );
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  },
  // ...
};

export default InputView;
