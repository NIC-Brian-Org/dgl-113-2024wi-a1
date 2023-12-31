import path from 'path';

describe('numberOfNights type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('numberOfNights type should be "number"', async () => {
    const value = await page.evaluate('numberOfNights');
    expect(typeof value).toEqual('number');
  });
});
