const {capitalizeFirtChar, reverseString, add, subtract, multiply ,divide, caesarCipher} = require('./index');

test('Input is laptop', ()=>{
    expect(capitalizeFirtChar('laptop')).toBe('Laptop');
})

test('Reverse Input Laptop', ()=>{
    expect(reverseString('Laptop')).toBe('potpaL');
})

test('Add Num -32 + 20', ()=>{
    expect(add(-32,20)).toBe(-12)
})
test('Divide Num -40 / 20', ()=>{
    expect(divide(-40,20)).toBe(-2)
})
test('Multiply Num -32 * 20', ()=>{
    expect(multiply(-32,20)).toBe(-640)
})
test('Substract Num -32 - 20', ()=>{
    expect(subtract(-32,-20)).toBe(-12)
})

test('Cipher a word ABCDEFGHIJKLMNOPQRSTUVWXYZ', ()=>{
    expect(caesarCipher('ABCDEFGHIJKLMNOPQRSTUVWXYZ',23)).toBe('XYZABCDEFGHIJKLMNOPQRSTUVW');
})
