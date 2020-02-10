import React from "react";
import RenderArray from "./RenderArray";
import RenderObject from "./RenderObject";
import RenderWildcard from "./RenderWildcard";
import { valueType } from "./utils";

const RenderComponents = {
  array: RenderArray,
  object: RenderObject
};

interface IProps {
  depthExpanded: number;
  name: string;
  value: any;
}

const RenderField: React.FC<IProps> = ({ depthExpanded, name, value }) => {
  const RenderComponent = RenderComponents[valueType(value)] || RenderWildcard;
  return <RenderComponent name={name} value={value} depthExpanded={depthExpanded} />;
};

export default RenderField;
