import React from "react";
import { Classes, shallow, valueType } from "./utils";

interface IProps {
  className: string;
  name: string;
  onToggle?: () => void;
}

export const FieldBase: React.FC<IProps> = ({ className, children, name, onToggle }) => (
  <div className={`${Classes.NODE_PARENT} ${className}`}>
    {name && <FieldKey onClick={onToggle}>{name}</FieldKey>}
    {name && <FieldColon onClick={onToggle} />}
    {children}
  </div>
);

export const FieldKey: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props =>
  React.createElement("span", props);
FieldKey.defaultProps = { className: Classes.NODE_NAME };

export const FieldColon: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props =>
  React.createElement("span", props, ": ");
FieldColon.defaultProps = { className: Classes.NODE_COLON };

export const FieldComma: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props =>
  React.createElement("span", props, ", ");
FieldComma.defaultProps = { className: Classes.NODE_COMMA };

export const FieldValue: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props =>
  React.createElement("span", props, shallow[valueType(props.children)](props.children));
FieldValue.defaultProps = { className: Classes.NODE_VALUE };
