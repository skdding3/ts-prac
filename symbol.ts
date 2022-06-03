console.log(Symbol("sun") === Symbol("sun"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym];
