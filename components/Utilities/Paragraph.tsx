import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Paragraph(props: Props) {
  return (
    <>
      <p className="text-zinc-700 mt-3 text-xl">{props.children}</p>
    </>
  );
}
