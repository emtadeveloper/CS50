function lama(start_size, end_size) {
    let years = 0;
    while (start_size < end_size) {
        let divi3 = start_size / 3;
        let divi4 = start_size / 4;
        start_size = start_size + divi3 - divi4;
        years++;
    }
    return years;
}
console.log(lama(100, 200));
console.log(lama(1200, 1300));
console.log(lama(100, 1000000));
