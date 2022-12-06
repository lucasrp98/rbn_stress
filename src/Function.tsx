import React from "react";

interface ButtonProps {
  color: string;
  children: string;
}

export function Welcome(props: ButtonProps) {
  return <button type="button" style={{ backgroundColor: props.color }}>
    {props.children}
    </button>
    ;
}