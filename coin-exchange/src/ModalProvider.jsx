import TradeCoinPage01 from "./components/TradeCoinPage01";
import { TRADE_COIN_MODAL } from "./constants/modals";
import createProvider from "./ui/Modal/create";

export default createProvider({
  [TRADE_COIN_MODAL]: TradeCoinPage01,
});
