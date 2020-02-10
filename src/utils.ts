export const Classes = {
  CONSTRUCTOR: "rro--object-constructor",
  NODE_BRACKET: "rro--bracket",
  NODE_COLON: "rro--colon",
  NODE_COMMA: "rro--comma",
  NODE_NAME: "rro--name",
  NODE_PARENT: "rro--parent",
  NODE_ROOT: "rro--root",
  NODE_VALUE: "rro--value",
  OBJ_COLLAPSED: "rro--object-collapsed",
  OBJ_EXPANDED: "rro--object-expanded",
  TYPE_ARRAY: "rro--type-array",
  TYPE_BIGINT: "rro--type-bigint",
  TYPE_BOOLEAN: "rro--type-boolean",
  TYPE_FUNCTION: "rro--type-function",
  TYPE_NULL: "rro--type-null",
  TYPE_NUMBER: "rro--type-number",
  TYPE_OBJECT: "rro--type-object",
  TYPE_REGEXP: "rro--type-regexp",
  TYPE_STRING: "rro--type-string",
  TYPE_SYMBOL: "rro--type-symbol",
  TYPE_UNDEFINED: "rro--type-undefined"
};

export function valueType(value: any) {
  return Array.isArray(value)
    ? "array"
    : value === null
    ? "null"
    : value.constructor.name === "RegExp"
    ? "regexp"
    : typeof value;
}

export const shallow = {
  array: (value: any[]) => `Array(${value.length})`,
  object: (value: any) =>
    (value && value.constructor && value.constructor.name) || "Object",
  string: (value: string) => `${JSON.stringify(value)}`,
  boolean: (value: boolean) => `${value}`,
  number: (value: number) => `${value}`,
  bigint: (value: bigint) => `${value}`,
  symbol: (value: Symbol) => `${value}`,
  undefined: (value: undefined) => `${value}`,
  null: (value: null) => `${value}`,
  regexp: (value: RegExp) => `/${value.source}/${value.flags}`,
  function: (value: Function) => `ƒ ${value.name}()`
};
