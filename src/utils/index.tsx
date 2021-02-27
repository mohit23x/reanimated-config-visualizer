export const isFunction = (a: any) => typeof a === 'function';

export const camelCaseToNormal = (str: string): string => {
  // code credits: https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text
  const result = str.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};
