// InterFace 인터페이스


// interface personInfo {
//     age: number;
//     name: string;
//     job?: string; // optional
// }
//
// let person = {
//     name: "Sunki",
//     age: 31,
// }
//
// function logAge(obj: personInfo ) {
//     console.log(obj.name) // Sunki
//     console.log(obj.age); // 31
// }
//
// logAge(person); // 31


// 읽기 전용 속성

// interface CraftBeer {
//     readonly brand: string
// }
//
// let myBeer: CraftBeer = {
//     brand: 'asahi'
// };
//
// myBeer.brand = 'cass'; //  Cannot assign to 'brand' because it is a read-only property.



// 함수 타입

interface login {
    (username: string, password: string) : boolean;
}

let loginUser: login;
loginUser = function (id:string, pw:string) {
    console.log('로그인 했습니다')
    return true;
}
