import path from 'path';

describe('gstRate type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('gstRate type should be "number"', async () => {
    const value = await page.evaluate('gstRate');
    expect(typeof value).toEqual('number');
  });
});
