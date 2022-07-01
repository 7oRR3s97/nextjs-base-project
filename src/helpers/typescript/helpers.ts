export const objectKeys = <TObj>(obj: TObj): (keyof TObj)[] => {
  return Object.keys(obj) as (keyof TObj)[];
};

export const getDynamicValueFromObject = <TObj>(
  obj: TObj,
  index: string
): TObj[keyof TObj] | undefined => {
  if (!Object.keys(obj).includes(index)) return;
  return obj[index as keyof TObj];
};
