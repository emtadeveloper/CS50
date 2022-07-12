const points = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10,
};

const Scrabble = (arg1, arg2) => {
    var name1 = [...arg1.toUpperCase()];
    var name2 = [...arg2.toUpperCase()];
    for (let i = 0; i < name1.length; i++) {
        !!points[name1[i]] ? (name1[i] = points[name1[i]]) : name1[i];
    }
    for (let i = 0; i < name2.length; i++) {
        !!points[name2[i]] ? (name2[i] = points[name2[i]]) : name2[i];
    }
    name1 = name1.reduce((ago, ready) => ago + ready);
    name2 = name2.reduce((ago, ready) => ago + ready);

    //   return Math.max(name1,name2)
    return name1 > name2 ? "Your Win : " + name1 + arg1 : "Your Win : " + name2 + " " + arg2;
};

console.log(Scrabble("emad", "ali"));
console.log(Scrabble("emad", "mehdi"));
