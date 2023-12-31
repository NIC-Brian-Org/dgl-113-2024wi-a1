import path from 'path';

describe('pstRate type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('pstRate type should be "number"', async () => {
    const value = await page.evaluate('pstRate');
    expect(typeof value).toEqual('number');
  });
});
