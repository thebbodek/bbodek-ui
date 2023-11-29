import { forwardRef } from "react";
import Typography from "../Typography";
import { FormLabelProps } from "./types";

const FormLabel = forwardRef((
    {
      inputId,
      labelColor = "gray-04",
      label,
      required,
      feedback,
    }: FormLabelProps,
    ref: React.Ref<HTMLLabelElement>,
  ) => {
  return (
    <label ref = {ref} htmlFor = {inputId} className = {`flex text-${labelColor} text-body-02-regular`}>
      {label}
      {required && <span className = "ml-0.5 text-primary-03">*</span>}
      {feedback && <Typography className = "ml-3" theme = "body-02-regular" text = {feedback} color = "error"/>}
    </label>
  );
});

export default FormLabel;
