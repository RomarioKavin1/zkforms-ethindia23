import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classNames?: string;
}

export default function BigHeading(props: Props) {
  return (
    <>
      <div
        className={`text-zinc-900 mt-8 text-3xl font-black uppercase ${props.classNames}`}
      >
        {props.children}
      </div>
    </>
  );
}
