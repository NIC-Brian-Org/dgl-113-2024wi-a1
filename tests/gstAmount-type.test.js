import path from 'path';

describe('gstAmount type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('gstAmount type should be "number"', async () => {
    const value = await page.evaluate('gstAmount');
    expect(typeof value).toEqual('number');
  });
});
