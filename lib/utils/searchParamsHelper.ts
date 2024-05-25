export const removeNonEmptyObject = (params: Record<string, any>) => {
  const keys = Object.keys(params);
  return keys.reduce((acc: Record<string, any>, key) => {
    if (params[key]) acc[key] = params[key];
    return acc;
  }, {});
};

export const makeUrl = (url: string, params: Record<string, any>) => {
  const keys = Object.keys(params);

  return keys.reduce((acc, key, index) => {
    if (index === 0) acc += '?';
    if (index !== 0) acc += '&';
    if (params[key]) acc += `${key}=${params[key]}`;

    return acc;
  }, url);
};
