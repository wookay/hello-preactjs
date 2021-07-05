expect.extend({
  ok(received) {
    return {
        message: () => String(received), // `${received}`,
        pass: received,
      };
  }
});

function isequal(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return expect.arrayContaining(b).asymmetricMatch(a);
  } else if (typeof a === 'object' && typeof b === 'object') {
    return expect.objectContaining(b).asymmetricMatch(a);
  } else {
    return Object.is(a, b);
  }
}

describe('ES6', () => {
	test('Template literals ``', () => {
        var a = ``;
        expect(a.length == 0).ok();

        var a = `
`;
        expect(a.length == 1).ok();

        var n = 1 + 2;
        var a = String(n); // `${n}`;
        expect(a == "3").ok();
	});

	test('isequal ok', () => {
        expect(isequal([1, 2, 3], [1, 2, 3])).ok();
        expect(isequal({ a: 1}, { a: 1})).ok();
        expect(isequal(1, 1)).ok();
        expect(isequal(null, null)).ok();
        expect(isequal(undefined, undefined)).ok();
        expect(!isequal(null, undefined)).ok();
    });
});
