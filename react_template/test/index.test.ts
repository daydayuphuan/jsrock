const delay = (ns) => new Promise((res, rej) => {
  setTimeout(() => {
    res();
  }, ns * 1000);
})
describe('test example', () => {
  test('simple', () => {
    expect(1 + 1).toBe(2);
    expect([1, 3]).toEqual([1, 3]);
  });
  test('async', async (done) => {
    expect(1 + 1).toBe(2);
    expect([1, 3]).toEqual([1, 3]);
    await delay(3);
    done();
  });
  it('long time test', async (done) => {
    expect(1 + 1).toBe(2);
    expect([1, 3]).toEqual([1, 3]);
    await delay(6);
    done();
  }, 6500);
  test('exception', (done) => {
    try {
      throw "ex";
    } catch (ex) {
      done();
    }
  })
})

