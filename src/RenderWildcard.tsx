import React from "react";
import { FieldBase, FieldValue } from "./Skeleton";
import { Classes, valueType } from "./utils";

interface OwnProps {
  name: string;
  value: any;
}

const RenderWildcard: React.FC<OwnProps> = props => {
  const { value } = props;
  const className = `TYPE_${valueType(value)}`.toUpperCase();
  return (
    <FieldBase className={Classes[className]} name={props.name}>
      <FieldValue>{value}</FieldValue>
    </FieldBase>
  );
};

export default RenderWildcard;
