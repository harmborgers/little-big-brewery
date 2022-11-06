import React, { useState } from "react";
import "./style.scss";
import cx from "classnames";
import { FaArrowRight } from "react-icons/fa";

const ContentButton = ({ text, action, disabled, icon, additionalClasses }) => {
  const [isDisabled, setIsDisabled] = useState(disabled || false);
  const toggle = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <button
      className={cx("o-content-btn", {
        "o-content-btn--big": additionalClasses?.big || false,
        "o-content-btn--primary": additionalClasses?.primary || false,
        "o-content-btn--icon-left": additionalClasses?.iconleft || false,
      })}
      type="button"
      onClick={action}
      disabled={isDisabled}
    >
      {text}
      <FaArrowRight className="o-content-btn__icon" />
    </button>
  );
};

export default ContentButton;
