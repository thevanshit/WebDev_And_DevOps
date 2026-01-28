function sumts(a: number, b: string): number | null{
    const n = Number(b);
    if (Number.isNaN(n)) return null;
    return a + n;
}

function sumts_(a: number, b: number | string): number | null{
    const n = Number(b);
    if (Number.isNaN(n)) return null;
    return a + n;
}

const ansts = sumts(15, "85");
const ansts_ = sumts_(20, "80");

console.log(ansts);
console.log(ansts_);