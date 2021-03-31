import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import InlineList from "../ui/InlineList";
import Button from "../ui/Button";
import Text from "../ui/Text";
import Input from "../ui/Input";
import Form from "../ui/Form";
import Select, { Option } from "../ui/Select";

class TransactionSearchFilter extends PureComponent {
  render() {
    const { initValues } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} initValues={initValues}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                검색
              </Text>
              <Select
                name="code"
                label="코인 코드"
                onChange={onChange}
                value={values["code"]}
              >
                <Option label="선택해주세요" value="" />
                <Option label="비트코인(BTX)" value="BTX" />
                <Option label="이더리움(ETH)" value="ETH" />
                <Option label="두잇코인(DOIT)" value="DOIT" />
              </Select>
              <Input
                name="currentPrice_gte"
                label="최소 거래가"
                onChange={onChange}
                value={values["currentPrice_gte"]}
              />
              <Input
                name="currentPrice_lte"
                label="최대 거래가"
                onChange={onChange}
                value={values["currentPrice_lte"]}
              />
              <Button type="submit" primary>
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

TransactionSearchFilter.propTypes = {};

export default TransactionSearchFilter;
