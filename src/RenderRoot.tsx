import React from "react";
import RenderField from "./RenderField";
import { Classes } from "./utils";

interface IProps {
  className?: string;
  depthExpanded?: number;
  object: any;
  tagName?: "div" | "span";
}

const RenderRoot: React.FC<IProps> = ({
  className = "",
  depthExpanded = 1,
  object,
  tagName = "div"
}) =>
  React.createElement(
    tagName,
    { className: `${Classes.NODE_ROOT} ${className}` },
    <RenderField depthExpanded={depthExpanded} name={""} value={object} />
  );

export default RenderRoot;
