import React, { useState } from "react";
import RenderField from "./RenderField";
import { FieldBase, FieldColon, FieldComma, FieldKey, FieldValue } from "./Skeleton";
import { Classes, shallow } from "./utils";

interface IProps {
  depthExpanded?: number;
  name: string;
  value: any;
}

const RenderObject: React.FC<IProps> = props => {
  const { depthExpanded = 0, value } = props;

  const [isOpen, setOpen] = useState(depthExpanded > 0);
  const toggleHandler = () => setOpen(!isOpen);

  const contentRenderer = isOpen
    ? (key: string) => (
        <RenderField
          depthExpanded={depthExpanded - 1}
          key={key}
          name={key}
          value={value[key]}
        />
      )
    : (key: string, i: number) => (
        <React.Fragment key={key}>
          {i > 0 && <FieldComma onClick={toggleHandler} />}
          <FieldKey onClick={toggleHandler}>{key}</FieldKey>
          <FieldColon onClick={toggleHandler} />
          <FieldValue onClick={toggleHandler}>{value[key]}</FieldValue>
        </React.Fragment>
      );

  return (
    <FieldBase
      className={`${Classes.TYPE_OBJECT} ${
        isOpen ? Classes.OBJ_EXPANDED : Classes.OBJ_COLLAPSED
      }`}
      name={props.name}
    >
      <span className={Classes.CONSTRUCTOR} onClick={toggleHandler}>
        {`${shallow.object(value)} `}
      </span>
      <span className={Classes.NODE_BRACKET} onClick={toggleHandler}>
        {"{"}
      </span>
      {Object.keys(value).map(contentRenderer)}
      <span className={Classes.NODE_BRACKET} onClick={toggleHandler}>
        {"}"}
      </span>
    </FieldBase>
  );
};

export default RenderObject;
