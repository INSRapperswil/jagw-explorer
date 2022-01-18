export const buildClassName = (
  baseClassName: string,
  conditionalClassName?: string,
): string => {
  if (conditionalClassName) {
    return baseClassName.concat(' ', conditionalClassName);
  }
  return baseClassName;
};
