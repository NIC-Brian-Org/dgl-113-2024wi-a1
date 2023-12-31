import path from 'path';

describe('pstAmount type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('pstAmount type should be "number"', async () => {
    const value = await page.evaluate('pstAmount');
    expect(typeof value).toEqual('number');
  });
});
