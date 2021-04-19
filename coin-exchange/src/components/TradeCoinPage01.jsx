import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Text from "../ui/Text";
import Spacing from "../ui/Spacing";
import Input from "../ui/Input";
import Button from "../ui/Button";
import InlineList from "../ui/InlineList";
import Form from "../ui/Form";
import { Consumer as Modal } from "../ui/Modal/context";
import Api from "../Api";
import { createTransaction } from "../actions/transactionActions";

class TradeCoinPage01 extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values, closeModal) {
    const { name, code } = this.props;
    const formValues = {
      ...values,
      code,
      name,
    };

    createTransaction(formValues, closeModal);
  }

  render() {
    const { name, price, type } = this.props;
    const typeName = type === "sell" ? "판매" : "구매";
    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={(values) => this.handleSubmit(values, closeModal)}
            initValues={{ currentPrice: price }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {" "}
                    {name} {typeName}
                  </Text>

                  <Spacing bottom={2}>
                    <Input
                      name="currentPrice"
                      label="금액"
                      value={values["currentPrice"]}
                      onChange={onChange}
                    />
                  </Spacing>

                  <Spacing bottom={2}>
                    <Input
                      name="amount"
                      label="수량"
                      value={values["amount"]}
                      onChange={onChange}
                    />
                  </Spacing>

                  <InlineList spacingBetween={1}>
                    <Button primary>{typeName}</Button>
                    <Button onPress={closeModal}>취소</Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
    );
  }
}

TradeCoinPage01.propTypes = {
  createTransaction: PropTypes.func,
};

export default TradeCoinPage01;
