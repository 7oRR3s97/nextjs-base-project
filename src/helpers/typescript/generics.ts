export type UnionTypeFromObject<TObj> = {
  [key in keyof TObj]: {
    [key2 in key]: TObj[key];
  };
}[keyof TObj];

export type DeepPartial<TObj> = TObj extends object
  ? {
      [key in keyof TObj]?: DeepPartial<TObj[key]>;
    }
  : TObj;

export type RemoveTypeFromObject<TObj, TType> = Pick<
  TObj,
  {
    [key in keyof TObj]: TObj[key] extends TType ? never : key;
  }[keyof TObj]
>;

export type RecursiveRemoveTypeFromObject<
  TObj,
  TType,
  WithNevers = {
    [key in keyof TObj]: Exclude<TObj[key], undefined> extends TType
      ? never
      : TObj[key] extends Record<string, unknown>
      ? RecursiveRemoveTypeFromObject<TObj[key], TType>
      : TObj[key];
  }
> = Pick<
  WithNevers,
  {
    [key in keyof WithNevers]: WithNevers[key] extends never ? never : key;
  }[keyof WithNevers]
>;

export type KeepTypeFromObject<TObj, TType> = Pick<
  TObj,
  {
    [key in keyof TObj]: TObj[key] extends TType ? key : never;
  }[keyof TObj]
>;

export type RecursiveKeepTypeFromObject<
  TObj,
  TType,
  WithNevers = {
    [key in keyof TObj]: Exclude<TObj[key], undefined> extends TType
      ? TObj[key] extends Record<string, unknown>
        ? RecursiveKeepTypeFromObject<TObj[key], TType>
        : TObj[key]
      : never;
  }
> = Pick<
  WithNevers,
  {
    [key in keyof WithNevers]: WithNevers[key] extends never ? never : key;
  }[keyof WithNevers]
>;
