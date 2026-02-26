// tugas3.ts

class Lingkaran {
    constructor(public jariJari: number) {}

    hitungLuas(): number {
        return Math.PI * this.jariJari * this.jariJari;
    }
}

const lingkaran1 = new Lingkaran(7);

console.log("Jari-jari:", lingkaran1.jariJari);
console.log("Luas Lingkaran:", lingkaran1.hitungLuas());