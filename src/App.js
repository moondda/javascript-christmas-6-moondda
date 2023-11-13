import InputView from "./InputView";
import OutputView from "./OutputView";
import { isWeekEnd } from "./function";

class App {
  async run() {
    OutputView.printStart();
    const day = await InputView.readDate();
    const total_menu = await InputView.readMenu();
    console.log(total_menu);
    // await InputView.readMenu();
    await OutputView.printPreview();
    await OutputView.printMenuHeader();
    await OutputView.printMenu(total_menu);
    await OutputView.printBeforeBenefitPriceHeader();
    const price_before_benefit = await OutputView.printBeforeBenefitPrice(
      total_menu
    );
    await OutputView.printFreeGift(price_before_benefit);
    await OutputView.printBenefitHeader();
    await OutputView.printDdaySale(day);
    if (isWeekEnd) await OutputView.printWeekdaySale(day, total_menu);
    if (!isWeekEnd) await OutputView.printWeekendSale(day, total_menu);
    await OutputView.printStarDaySale(day);
    await OutputView.printFreeGiftEvent(price_before_benefit);
  }
}

export default App;
