"use client";

import { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export default function Input(props: Props) {
  const [editable, setEditable] = useState(false);

  if (editable) {
    return (
      <input
        {...props}
        onBlur={() => setEditable(false)}
        className={`${props.className} w-full`}
      />
    );
  } else {
    return (
      <p onClick={() => setEditable(true)} className={`${props.className} w-full`}>
        {props.value || "Untitled"}
      </p>
    );
  }
}
