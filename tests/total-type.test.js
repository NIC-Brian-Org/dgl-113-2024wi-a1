import path from 'path';

describe('total type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('total type should be "number"', async () => {
    const value = await page.evaluate('total');
    expect(typeof value).toEqual('number');
  });
});
