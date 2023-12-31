import path from 'path';

describe('gstRate value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('gstRate value should be 5%', async () => {
    const value = await page.evaluate('gstRate');
    expect(value).toBeCloseTo(0.05);
  });
});
