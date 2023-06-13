// const test1 = document.getElementById("test");
// let type = 0;
// let erase = 0;
// let maxLetter = 139;

// test1.addEventListener("input", (e) => {
//   let remaining = maxLetter - type;

const test1 = document.getElementById("test");
let type = 0;
let maxLetter = 159;

test1.addEventListener("input", (e) => {
  let remaining = maxLetter - type;
  let text = e.currentTarget.value;

  if (type < maxLetter) {
    type++;
    console.log(
      `${type} characters entered | ${remaining} characters remaining`
    );
    return false;
  }
  if (e.inputType == "deleteContentBackward") {
    console.log(
      `${type} characters entered | ${remaining} characters remaining`
    );
  }
});
