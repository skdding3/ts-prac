// never

function error(message: string) never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop() : never{
  while (true) {}
}


let a: string = 'hello'

if (typeof a !== 'string') {
	let b: never = a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;