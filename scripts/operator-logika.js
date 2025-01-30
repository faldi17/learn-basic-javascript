const nilaiUjian = 90
const nilaiAbsensi = 70

const lulusUjian = nilaiUjian > 75
const lulusAbsensi = nilaiAbsensi > 75

// and
const lulusAnd = lulusUjian && lulusAbsensi;
document.writeln(lulusAnd);

// or
const lulusOr = lulusUjian || lulusAbsensi;
document.writeln(lulusOr);

// inverse
const lulusInverse = lulusUjian && lulusAbsensi;
document.writeln(!lulusInverse);