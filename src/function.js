import { MissionUtils } from "@woowacourse/mission-utils";
import { MENU_DATA } from "./data";
function parseOrder(input) {
  const orders = input.split(",");

  const orderObjects = [];
  let totalQuantity = 0;

  // 각 주문을 순회하며 객체로 변환하여 배열에 추가
  orders.forEach((order) => {
    const [menu, quantity] = order.trim().split("-");
    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity)) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }

    const orderObject = {
      menu: menu.trim(),
      quantity: parsedQuantity,
    };

    orderObjects.push(orderObject);
    totalQuantity += parsedQuantity;
  });
  if (totalQuantity > 20)
    throw new Error(
      "[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다."
    );
  return orderObjects;
}

function formatMenu(menuObjects) {
  return menuObjects
    .map(({ menu, quantity }) => `${menu} ${quantity}개`)
    .join(", ");
}

function calculatePriceBeforeBenefit(total_menu) {
  let totalPrice = 0;

  total_menu.forEach((order) => {
    const { menu, quantity } = order;
    const foundMenu = MENU_DATA.find((item) => item.name === menu);
    totalPrice += foundMenu.price * quantity;
  });

  if (totalPrice < 10000)
    MissionUtils.Console.print(
      "총주문 금액 10,000원 이상부터 이벤트가 적용됩니다"
    );

  return totalPrice;
}

function saleForDday(day) {
  let dday_sale_price = 0;
  if (day <= 25 && day >= 1) dday_sale_price = 1000 + (day - 1) * 100;
  return dday_sale_price;
}

function isWeekEnd(day) {
  const weekend = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
  if (weekend.includes(day)) return true;
  else return false;
}

function saleForWeekday(day, total_menu) {
  const dessert = ["초코케이크", "아이스크림"];
  const SALE_PRICE = 2023;

  const dessertCount = total_menu.reduce((count, order) => {
    if (dessert.includes(order.menu)) {
      return count + order.quantity;
    }
    return count;
  }, 0);

  if (dessertCount > 0) {
    const totalDiscount = dessertCount * SALE_PRICE;
    return totalDiscount;
  }

  return 0;
}

function saleForWeekend(day, total_menu) {
  const main = ["티본스테이크", "바비큐립", "해산물파스타", "크리스마스파스타"];
  const SALE_PRICE = 2023;

  const main_count = total_menu.reduce((count, order) => {
    if (main.includes(order.menu)) {
      return count + order.quantity;
    }
    return count;
  }, 0);

  if (main_count > 0) {
    const totalDiscount = main_count * SALE_PRICE;
    return totalDiscount;
  }

  return 0;
}

function saleForStarDay(day) {
  const star_day = [3, 10, 17, 24, 31];
  const SALE_PRICE = 1000;
  if (star_day.includes(day)) return SALE_PRICE;
  return 0;
}

function getBadge(benefit) {
  if (benefit >= 5000 && benefit < 10000) return "별";
  if (benefit >= 10000 && benefit < 20000) return "트리";
  if (benefit >= 20000) return "산타";
  return "없음";
}

function getDateError(input_to_num) {
  if (isNaN(input_to_num) || !Number.isInteger(input_to_num))
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  if (input_to_num < 1 || input_to_num > 31)
    throw new Error(
      "[ERROR] 날짜는 1일부터 31일까지입니다. 다시 입력해주세요."
    );
}

export {
  parseOrder,
  formatMenu,
  calculatePriceBeforeBenefit,
  saleForDday,
  isWeekEnd,
  saleForWeekday,
  saleForWeekend,
  saleForStarDay,
  getBadge,
  getDateError,
};
