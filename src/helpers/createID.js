// A "helper" function we can import wherever we need to create a "unique" id.
export const createID = () => {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
  ];
  const id =
    letters[Math.ceil(Math.random(0) * letters.length - 1)] +
    Math.ceil(Math.random(0) * 99999) +
    letters[Math.ceil(Math.random(0))] +
    Math.ceil(Math.random(0) * 99999);

  return id;
};
