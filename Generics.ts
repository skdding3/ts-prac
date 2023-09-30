// Generics

// function getText(text) {
//   return text;
// }

// console.log(getText("hi"));

function getTextGenerics<T>(text: T): T {
  return text;
}

// function getTextGenrics<string>(text: string): string {
// return Text;
// }
getTextGenerics<string>("hi");
