import { MissionUtils } from "@woowacourse/mission-utils";
import {
  calculatePriceBeforeBenefit,
  saleForDday,
  saleForWeekday,
} from "./function";
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
    return price;
  },
  printFreeGift(price) {
    if (price < 120000) MissionUtils.Console.print("<증정 메뉴>\n없음");
    else MissionUtils.Console.print("<증정 메뉴>\n샴페인 1개");
  },
  printBenefitHeader() {
    MissionUtils.Console.print("<혜택 내역>");
  },
  printDdaySale(day) {
    const dday_sale = saleForDday(day);
    if (dday_sale != 0)
      MissionUtils.Console.print(
        `크리스마스 디데이 할인: -${dday_sale.toLocaleString()}원`
      );
  },
  printWeekdaySale(day, menuObjects) {
    const weekday_sale = saleForWeekday(day, menuObjects);
    if (weekday_sale != 0)
      MissionUtils.Console.print(
        `평일 할인: -${weekday_sale.toLocaleString()}원`
      );
  },
  printWeekendSale(day, menuObjects) {
    const weekend_sale = saleForWeekend(day, menuObjects);
    if (weekend_sale != 0)
      MissionUtils.Console.print(
        `주말 할인: -${weekend_sale.toLocaleString()}원`
      );
  },
};

export default OutputView;
