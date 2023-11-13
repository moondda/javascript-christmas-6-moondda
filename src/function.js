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

export { parseOrder };
