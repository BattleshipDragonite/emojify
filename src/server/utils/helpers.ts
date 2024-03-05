export const randomElement = (array : string[]) => {
  if (array.length === 0) {
    throw new Error("Array cannot be empty");
  }
  return array[Math.floor(Math.random() * array.length)];
}

export const randomInteger = (min: number, max: number): number => {
  if (min === max) {
    return min;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

