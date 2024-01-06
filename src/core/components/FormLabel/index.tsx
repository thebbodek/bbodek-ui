import { forwardRef } from "react";
import Typography from "../Typography";
import { FormLabelProps } from "./types";

const FormLabel = forwardRef((
    {
      labelColor = "gray-06",
      label,
      required,
      feedback,
    }: FormLabelProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
  return (
    <div ref = {ref} className = {`flex text-${labelColor} text-body-02-medium`}>
      {label}
      {required && <span className = "ml-0.5 text-primary-03">*</span>}
      {feedback && <Typography className = "ml-3" theme = "body-02-regular" text = {feedback} color = "error"/>}
    </div>
  );
});

export default FormLabel;
