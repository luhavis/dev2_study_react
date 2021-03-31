import React from "react";
import { storiesOf } from "@storybook/react";
import InlineList from "../ui/InlineList";
import { css } from "../ui/withStyles";

function RedBox({ children }) {
  return (
    <div
      {...css({
        backgroundColor: "red",
        padding: 30,
        height: Math.random() * 100,
      })}
    >
      {children}
    </div>
  );
}

storiesOf("InlineList", module).addWithJSX("기본 설정", () => {
  <InlineList>
    <RedBox>1</RedBox>
    <RedBox>2</RedBox>
    <RedBox>3</RedBox>
  </InlineList>;
});
