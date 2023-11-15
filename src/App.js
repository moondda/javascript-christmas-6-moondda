import InputView from "./InputView";
import OutputView from "./OutputView";
import { isWeekEnd } from "./function";

class App {
  async run() {
    const { day, total_menu } = await this.getInputs();
    const price_before_benefit = await this.printFormattedInputs(total_menu);

    await OutputView.printFreeGift(price_before_benefit);
    const total_benefit = await this.printBenefits(
      day,
      total_menu,
      price_before_benefit
    );
    await OutputView.printAfterBenefitPrice(
      price_before_benefit,
      total_benefit
    );
    await OutputView.printBadge(total_benefit);
  }

  async getInputs() {
    const day = await InputView.readDate();
    const total_menu = await InputView.readMenu();
    return { day, total_menu };
  }

  async printFormattedInputs(total_menu) {
    await OutputView.printPreview();
    await OutputView.printMenu(total_menu);
    await OutputView.printBeforeBenefitPriceHeader();
    const price_before_benefit = await OutputView.printBeforeBenefitPrice(
      total_menu
    );
    return price_before_benefit;
  }

  async printBenefits(day, total_menu, price_before_benefit) {
    await OutputView.printBenefitHeader();
    const dday_sale_price = await OutputView.printDdaySale(day);
    let week_sale_price;
    if (isWeekEnd(day))
      week_sale_price = await OutputView.printWeekdaySale(day, total_menu);
    else week_sale_price = await OutputView.printWeekendSale(day, total_menu);

    const star_day_sale_price = await OutputView.printStarDaySale(day);
    await OutputView.printFreeGiftEvent(price_before_benefit);

    const total_benefit = await OutputView.printTotalBenefit(
      dday_sale_price,
      week_sale_price,
      star_day_sale_price
    );

    return total_benefit;
  }
}

export default App;
