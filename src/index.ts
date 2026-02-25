// src/index.ts

function hello(name: string, umur:number): string {
    return `selamat datang ` +name+ ` dikelas pak syahru, sekarang umur kamu sudah` +umur+ ` ya` ;
}

const namaMahasiswa = "syabudi";
const umur:number = 19
console.log(hello(namaMahasiswa, umur));
