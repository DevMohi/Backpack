function squareANumber(num) {
  return num * num;
}

function doubleANumber(num) {
  return num * 2;
}

function add5(num) {
  return num + 5;
}


function composeOperations(x) {
  const afterSquare = squareANumber(x);
  const afterDouble = doubleANumber(afterSquare);
  const afterAdd5   = add5(afterDouble);
  return afterAdd5;
}


console.log(composeOperations(4));  // (4²)=16 → (16×2)=32 → (32+5)=37
