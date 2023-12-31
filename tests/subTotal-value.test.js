import path from 'path';

describe('subTotal value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('subTotal value should be $1575.00', async () => {
    const value = await page.evaluate('subTotal');
    expect(value).toBeCloseTo(1575);
  });
});
