import React from "react";
import Select from "react-select";
import Label from "./common/Label";

const LabelSelect = ({ labelSelectClassName, labelClassName, htmlForId, labelChild, onChange, defaultValue, options }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      color: "black",
      border: "1px solid black",
      borderRadius: "4px",
      boxShadow: "none",
      height: "20px",
      width: htmlForId === "department" ? "218px" : "100%",
      backgroundColor: "inehrit",
      ":hover": {
        border: "1px solid black",
      },
    }),

    placeholder: (provided, state) => ({
      ...provided,
      color: "grey",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "black",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: "black",
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0C8E0C" : state.isFocused ? "#0FBF0F" : "#fff",
      color: state.isSelected ? "#fff" : state.isFocused ? "#fff" : "black",
    }),
  };
  return (
    <div className={labelSelectClassName}>
      <Label className={labelClassName} htmlFor={htmlForId} labelChild={labelChild} />
      <Select id={htmlForId} styles={customStyles} defaultValue={defaultValue} onChange={onChange} options={options} />
    </div>
  );
};

export default LabelSelect;
