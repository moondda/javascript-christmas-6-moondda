import InputView from "./InputView";
import OutputView from "./OutputView";

class App {
  async run() {
    OutputView.printStart();
    InputView.readDate();
  }
}

export default App;
