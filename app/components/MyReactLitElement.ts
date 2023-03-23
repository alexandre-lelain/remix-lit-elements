import { createComponent } from "@lit-labs/react";
import React from "react";
import { MyLitElement } from "./MyLitElement";

export const MyReactLitElement = createComponent({
  tagName: "my-lit-element",
  elementClass: MyLitElement,
  react: React,
});
