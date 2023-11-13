import InputView from "./InputView";
import OutputView from "./OutputView";

class App {
  async run() {
    OutputView.printStart();
    await InputView.readDate();
    await InputView.readMenu();
  }
}

export default App;
