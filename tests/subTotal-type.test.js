import path from 'path';

describe('subTotal type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('subTotal type should be "number"', async () => {
    const value = await page.evaluate('subTotal');
    expect(typeof value).toEqual('number');
  });
});
