/* eslint-disable react/button-has-type */
import React from "react";
import "./CheckBox.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

export const CheckBox = ({
  id,
  className,
  value,
  name,
  checked,
  onChange,
  hidden,
  disabled
}) => {
  const css = classNames(
    "c-checkbox",
    { "c-checkbox--hidden": hidden },
    className
  );
  return (
    <input
      className={css}
      type="checkbox"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

CheckBox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default CheckBox;
