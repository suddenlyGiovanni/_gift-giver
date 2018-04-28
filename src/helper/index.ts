export const maxNumber = (numbers: number[]): number => {
  return numbers.length > 0 ? Math.max(...numbers) : 0;
};
