interface personInfo {
    age: number;
    name: string;
    job?: string; // optional
}

let person = {
    name: "Sunki",
    age: 31,
}

function logAge(obj: personInfo ) {
    console.log(obj.name) // Sunki
    console.log(obj.age); // 31
}

logAge(person); // 31
