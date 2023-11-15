import { MissionUtils } from "@woowacourse/mission-utils";
import { parseOrder, getDateError } from "./function";
const InputView = {
  async readDate() {
    let date;
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(
          "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
        );
        const input_to_num = Number(input);
        getDateError(input_to_num);
        date = input_to_num;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return date;
  },
  async readMenu() {
    let menu;
    while (true) {
      try {
        const inputMenu = await MissionUtils.Console.readLineAsync(
          "주문하실 메뉴를 메뉴와 개수를 알려 주세요."
        );

        try {
          const menu_object = parseOrder(inputMenu);
          menu = menu_object;
          break;
        } catch (error) {
          throw new Error(error.message);
        }
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return menu;
  },
};

export default InputView;
