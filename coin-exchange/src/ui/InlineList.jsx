import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "./withStyles";
import unit from "./Theme";

class InlineList extends PureComponent {
  render() {
    const {
      align,
      children,
      styles,
      spacingBetween,
      verticalAlign,
    } = this.props;

    return (
      <div
        {...css(
          styles.wrapper,
          align === "center" && styles.alignCenter,
          align === "right" && styles.alignRight,
          verticalAlign === "top" && styles.verticalAlignTop,
          verticalAlign === "bottom" && styles.verticalAlignBottom
        )}
      >
        {React.Children.map(children, (child) => {
          <div {...css({ marginRight: spacingBetween * unit })}>{child}</div>;
        })}
      </div>
    );
  }
}
