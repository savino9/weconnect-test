let result;
let foo = "FOO";
let bar = "BAR";
let baz = "BAZ";

let codeContainer = document.querySelector(".code");



for(let i = 0; i < 300; i++) {
  result = i;
  if (mod3(i) && mod5(i) && mod7(i)) {
    result = foo+bar+baz;
    popEl(result);

  } else if (mod3(i) && mod5(i)) {
    result = foo+bar;
    popEl(result);
  } else if (mod5(i) && mod7(i)) {
    result = bar+baz;
    popEl(result);
  } else if (mod7(i) && mod3(i)) {
    result = baz+foo;
    popEl(result);
  } else if (mod3(i)){
    result = foo;
    popEl(result);
  } else if (mod5(i)){
    result = bar;
    popEl(result);
  } else if (mod7(i)){
    result = baz;
    popEl(result);
  } else {
    popEl(result);
  }
}

function mod3(index) {
  if (index % 3 === 0) {
    return true;
  }
}
function mod5(index) {
  if (index % 5 === 0) {
    return true;
  }
}
function mod7(index) {
  if (index % 7 === 0) {
    return true;
  }
}

function popEl(result) {
  let p = document.createElement("p");
  p.innerText = result;
  codeContainer.appendChild(p);
}