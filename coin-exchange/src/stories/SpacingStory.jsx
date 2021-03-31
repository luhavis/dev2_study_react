import React from "react";
import { storiesOf } from "@storybook/react";
import { css } from "../ui/withStyles";
import Spacing from "../ui/Spacing";

function RedBox({ children }) {
  return (
    <div
      {...css({
        border: "1px red solid",
        minHeight: 100,
      })}
    >
      {children}
    </div>
  );
}

storiesOf("UI/Spacing", module).addWithJSX("기본 설정", () => (
  <RedBox>
    <Spacing top={1}>
      <RedBox>top: 1</RedBox>
    </Spacing>
    <Spacing bottom={2}>
      <RedBox>bottom: 2</RedBox>
    </Spacing>
    <Spacing left={3}>
      <RedBox>left: 3</RedBox>
    </Spacing>
    <Spacing right={4}>
      <RedBox>right: 4</RedBox>
    </Spacing>
    <Spacing horizontal={5}>
      <RedBox>horizontal: 5</RedBox>
    </Spacing>
    <Spacing vertical={6}>
      <RedBox>vertical: 6</RedBox>
    </Spacing>
  </RedBox>
));
