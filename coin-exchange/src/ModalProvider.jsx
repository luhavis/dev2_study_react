import TradeCoinPage01 from "./components/TradeCoinPage01";
import { TRADE_COIN_MODAL } from "./constants/modals";
import TradeCoinPageContainer from "./containers/TradeCoinPageContainer";
import createProvider from "./ui/Modal/create";

export default createProvider({
  // [TRADE_COIN_MODAL]: TradeCoinPage01,
  [TRADE_COIN_MODAL]: TradeCoinPageContainer,
});
