/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./ToggleSwitch.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import CheckBox from "../CheckBox/CheckBox";

const ToggleSwitch = ({
  id,
  className,
  value,
  name,
  checked= false,
  onChange,
  disabled,
}) => {
  const css = classNames(
    "c-toggle-switch",
    { "c-toggle-switch--checked": checked },
    className
  );
  return (
    <label className={css}>
      <CheckBox
        hidden
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span class="c-switch-slider" />
    </label>
  );
};

ToggleSwitch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string.isRequired,
  value: PropTypes.string || PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default ToggleSwitch;
