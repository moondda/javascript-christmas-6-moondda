import { MENU_DATA } from "./data";
function parseOrder(input) {
  const orders = input.split(",");

  const orderObjects = [];

  // 각 주문을 순회하며 객체로 변환하여 배열에 추가
  orders.forEach((order) => {
    const [menu, quantity] = order.trim().split("-");

    // quantity를 숫자로 변환
    const parsedQuantity = parseInt(quantity, 10);

    // quantity가 숫자가 아니라면 에러 처리
    if (isNaN(parsedQuantity)) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }

    const orderObject = {
      menu: menu.trim(),
      quantity: parsedQuantity, // 변환된 숫자로 저장
    };
    orderObjects.push(orderObject);
  });

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

    // 주어진 메뉴명과 일치하는 메뉴 찾기
    const foundMenu = MENU_DATA.find((item) => item.name === menu);

    totalPrice += foundMenu.price * quantity;
  });

  return totalPrice;
}

function saleForDday(day) {
  let dday_sale_price = 0;
  if (day <= 25 && day >= 1) dday_sale_price = 1000 + (day - 1) * 100;
  return dday_sale_price;
}

function saleForWeekday(day, total_menu) {
  const weekday = [
    3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
    31,
  ];
  const dessert = ["초코케이크", "아이스크림"];
  const SALE_PRICE = 2023;
  if (weekday.includes(day)) {
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
  }

  return 0;
}

export {
  parseOrder,
  formatMenu,
  calculatePriceBeforeBenefit,
  saleForDday,
  saleForWeekday,
};
