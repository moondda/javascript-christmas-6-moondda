import { MissionUtils } from "@woowacourse/mission-utils";
import {
  calculatePriceBeforeBenefit,
  saleForDday,
  saleForWeekday,
  saleForStarDay,
  getBadge,
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

    return dday_sale;
  },
  printWeekdaySale(day, menuObjects) {
    const weekday_sale = saleForWeekday(day, menuObjects);
    if (weekday_sale != 0)
      MissionUtils.Console.print(
        `평일 할인: -${weekday_sale.toLocaleString()}원`
      );
    return weekday_sale;
  },
  printWeekendSale(day, menuObjects) {
    const weekend_sale = saleForWeekend(day, menuObjects);
    if (weekend_sale != 0)
      MissionUtils.Console.print(
        `주말 할인: -${weekend_sale.toLocaleString()}원`
      );
    return weekend_sale;
  },
  printStarDaySale(day) {
    const star_day_sale = saleForStarDay(day);
    if (star_day_sale)
      MissionUtils.Console.print(
        `특별 할인: -${star_day_sale.toLocaleString()}원`
      );
    return star_day_sale;
  },
  printFreeGiftEvent(price) {
    const free_gift_sale = 25000;
    if (price > 120000) {
      MissionUtils.Console.print("증정 이벤트: -25,000원");
      return free_gift_sale;
    } else return 0;
  },
  printTotalBenefit(dday_sale_price, week_sale_price, star_day_sale_price) {
    const total_benefit =
      dday_sale_price + week_sale_price + star_day_sale_price;

    if (total_benefit)
      MissionUtils.Console.print(
        `<총혜택 금액>\n-${total_benefit.toLocaleString()}원\n`
      );
    else MissionUtils.Console.print("없음\n<총혜택 금액>\n0원\n");
    return total_benefit;
  },
  printAfterBenefitPrice(price_before_benefit, total_benefit) {
    const final_price = price_before_benefit - total_benefit;
    console.log(price_before_benefit, total_benefit);
    MissionUtils.Console.print(
      `<할인 후 예상 결제 금액>\n${final_price.toLocaleString()}원\n`
    );
    return final_price;
  },
  printBadge(total_benefit) {
    const badge = getBadge(total_benefit);
    MissionUtils.Console.print(`<12월 이벤트 배지>\n${badge}\n`);
  },
};

export default OutputView;
