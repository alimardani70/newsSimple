import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

type propsType = {
  children: ReactNode;
  wrapperId?: string;
};

const RenderPortal: React.FC<propsType> = ({
  children,
  wrapperId = "modal-root",
}) => {
  let modalRoot = document.getElementById(wrapperId) as HTMLElement;
  return createPortal(children, modalRoot);
};

export default RenderPortal;
