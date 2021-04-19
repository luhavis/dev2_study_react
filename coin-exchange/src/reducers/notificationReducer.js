const {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} = require("../actions/notificationActions");

const initState = {
  message: "",
  warning: false,
  showMessage: false,
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_NOTIFICATION: {
      const { message, warning } = payload;
      return {
        ...state,
        showMessage: true,
        message,
        warning,
      };
    }
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        message: "",
        showMessage: false,
      };
    }
    default:
      return false;
  }
};
