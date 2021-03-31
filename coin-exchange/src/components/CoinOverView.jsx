import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Heading from "../ui/Heading";
import InlineList from "../ui/InlineList";
import CoinDashlet from "./CoinDashlet";

class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="비트코인" priceLabel="7,216,000원" />
          <CoinDashlet name="이더리움" priceLabel="3,216,000원" />
          <CoinDashlet name="두잇코인" priceLabel="15,000원" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default CoinOverview;
