export const setName = (): [string, (name: string) => string] => {
  let name = '';
  const setInternalName = (name: string) => name;
  return [name, setInternalName];
};
