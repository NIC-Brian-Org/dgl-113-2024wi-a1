import path from 'path';

describe('gstAmount value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('gstAmount value should be 78.75', async () => {
    const value = await page.evaluate('gstAmount');
    expect(value).toBeCloseTo(78.75);
  });
});
