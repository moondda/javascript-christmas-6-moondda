import { MissionUtils } from "@woowacourse/mission-utils";
import { parseOrder } from "./function";
const InputView = {
  async readDate() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
        );
        const input_to_num = Number(input);

        console.log(input_to_num, input, "dd");

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
  async readMenu() {
    while (true) {
      try {
        const inputMenu = await MissionUtils.Console.readLineAsync(
          "주문하실 메뉴를 메뉴와 개수를 알려 주세요."
        );

        // parseOrder 함수에서 발생하는 에러 처리
        try {
          const menu_object = parseOrder(inputMenu);
          console.log(menu_object);
          break; // 유효한 주문이 들어온 경우 루프 탈출
        } catch (error) {
          throw new Error(error.message);
        }
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  },
};

export default InputView;
