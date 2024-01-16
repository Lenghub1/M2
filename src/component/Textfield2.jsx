import React, { useEffect } from "react";
import "@material/textfield/dist/mdc.textfield.css";
import { MDCTextField } from "@material/textfield";
const Textfields = () => {
  useEffect(() => {
    const textField = new MDCTextField(
      document.querySelector(".mdc-text-field")
    );
  }, []);
  return (
    <label className="mdc-text-field mdc-text-field--outlined">
      <span className="mdc-notched-outline">
        <span className="mdc-notched-outline__leading"></span>
        <span className="mdc-notched-outline__notch">
          <span className="mdc-floating-label" id="my-label-id">
            password
          </span>
        </span>
        <span className="mdc-notched-outline__trailing"></span>
      </span>
      <input
        type="text"
        className="mdc-text-field__input"
        aria-labelledby="my-label-id"
      />
    </label>
  );
};
export default Textfields;
