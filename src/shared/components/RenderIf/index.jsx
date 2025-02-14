import React from "react";

const RenderIf = ({ children, condition, renderElse = "" }) => {
  if (condition) return <>{children}</>;
  else return <>{renderElse}</>;
};

export default RenderIf;
