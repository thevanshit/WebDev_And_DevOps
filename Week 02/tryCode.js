function sumts(a, b) {
    var n = Number(b);
    if (Number.isNaN(n))
        return null;
    return a + n;
}
function sumts_(a, b) {
    var n = Number(b);
    if (Number.isNaN(n))
        return null;
    return a + n;
}
var ansts = sumts(15, "85");
var ansts_ = sumts_(20, "80");
console.log(ansts);
console.log(ansts_);
