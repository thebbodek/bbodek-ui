import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextEditor({
  value,
  onChange,
}: TextEditorProps) {
  return (
    <ReactQuill
        theme = "snow"
        value = {value}
        onChange = {onChange}
        className = {"w-full h-full"}
        modules = {{
          toolbar: [
            [{ "header": [ 1, 2, false ] }],
            [ "bold", "italic", "underline", "strike" ],
            [ { "list": "ordered" }, { "list": "bullet" }, { "indent": "-1" }, { "indent": "+1" } ],
            ["link"],
          ],
        }}
      />
  );
}
