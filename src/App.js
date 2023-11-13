import InputView from "./InputView";
import OutputView from "./OutputView";

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
  }
}

export default App;
