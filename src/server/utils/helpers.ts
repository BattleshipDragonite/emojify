export const randomElement = (array : string[]) => {
  return Math.floor(Math.random() * array.length  + 1)
}

export const randomInteger = (min : number, max : number) : number => {
  return  Math.floor((Math.random() * (max - min + 1)))
}

