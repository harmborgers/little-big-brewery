import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import cx from "classnames";
import { FaArrowRight } from "react-icons/fa";

const ContentButton = ({
  text,
  action,
  disabled,
  hidden,
  target,
  additionalClasses,
}) => {
  const [isDisabled, setIsDisabled] = useState(disabled || false);
  const toggle = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <Link to={target || "/"}>
      <button
        className={cx("o-content-btn", {
          "o-content-btn--big": additionalClasses?.big || false,
          "o-content-btn--primary": additionalClasses?.primary || false,
          "o-content-btn--icon-left": additionalClasses?.iconleft || false,
          "u-is-hidden": hidden || false,
        })}
        type="button"
        onClick={action}
        disabled={isDisabled}
      >
        {text}
        <FaArrowRight className="o-content-btn__icon" />
      </button>
    </Link>
  );
};

export default ContentButton;
