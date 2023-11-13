import { MissionUtils } from "@woowacourse/mission-utils";
import { calculatePriceBeforeBenefit } from "./function";
const OutputView = {
  printStart() {
    MissionUtils.Console.print(
      "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다."
    );
  },
  printPreview() {
    MissionUtils.Console.print(
      "12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n"
    );
  },
  printMenuHeader() {
    MissionUtils.Console.print("<주문 메뉴>");
  },
  printMenu(menuObjects) {
    menuObjects.forEach(({ menu, quantity }) => {
      MissionUtils.Console.print(`${menu} ${quantity}개`);
    });
  },
  printBeforeBenefitPriceHeader() {
    MissionUtils.Console.print("<할인 전 총주문 금액>");
  },
  printBeforeBenefitPrice(menuObjects) {
    const price = calculatePriceBeforeBenefit(menuObjects);
    MissionUtils.Console.print(`${price.toLocaleString()}원\n`);
  },
  printBenefitHeader() {
    MissionUtils.Console.print("<혜택 내역>");
  },
};

export default OutputView;
