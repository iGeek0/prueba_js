const segundoMasGrande = require('./index.js');

test('Segundo más grande de [1, 2, 3, 4, 5] debería ser 4', () => {
    expect(segundoMasGrande([1, 2, 3, 4, 5])).toBe(4);
});

test('Segundo más grande de [5, 4, 3, 2, 1] debería ser 4', () => {
    expect(segundoMasGrande([5, 4, 3, 2, 1])).toBe(4);
});

test('Segundo más grande de [2, 2, 1, 1] debería ser 2', () => {
    expect(segundoMasGrande([2, 2, 1, 1])).toBe(2);
});

test('Segundo más grande de [1, 1] debería ser null', () => {
    expect(segundoMasGrande([1, 1])).toBe(null);
});

test('Segundo más grande de [1] debería ser null', () => {
    expect(segundoMasGrande([1])).toBe(null);
});

test('Segundo más grande de [] debería ser null', () => {
    expect(segundoMasGrande([])).toBe(null);
});
