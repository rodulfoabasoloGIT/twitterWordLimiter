// const test1 = document.getElementById("test");
// let type = 0;
// let erase = 0;
// let maxLetter = 139;

// test1.addEventListener("input", (e) => {
//   let remaining = maxLetter - type;

//   if (e.inputType) {
//     type++;
//     console.log(
//       `${type} characters entered | ${remaining} characters remaining`
//     );
//   }
//   if (e.inputType == "deleteContentBackward") {
//     erase++;
//     console.log(
//       `${type - 1} characters entered | ${remaining} characters remaining`
//     );
//   }
// });

const test1 = document.getElementById("test");
let type = 0;
let maxLetter = 139;

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
      `${type - 2} characters entered | ${remaining + 2} characters remaining`
    );
  }
});
