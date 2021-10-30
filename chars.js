function randomABC(size) {
  const randomChars = "abcdefghijklmnopqrstuvwxyz";
  let chars = "";
  for (let i = 0; i < size; i++) {
    chars += randomChars[Math.floor(Math.random() * randomChars.length)];
  }
  return chars;
}

function randomHex(size) {
  const randomChars = "abcdef0123456789";
  let hex = "";
  for (let i = 0; i < size; i++) {
    hex += randomChars[Math.floor(Math.random() * randomChars.length)];
  }
  return hex;
}

function uuid(size, randomizeFunction) {
  let string = "";
  string += randomizeFunction(size);
  return string;
}

const userID1 = uuid(10, randomABC);
const userID2 = uuid(10, randomHex);

console.log("userID1 (ABC)", userID1);
console.log("userID1 (HEX)", userID2);
