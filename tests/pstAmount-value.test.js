import path from 'path';

describe('pstAmount value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('pstAmount value should be $126.00', async () => {
    const value = await page.evaluate('pstAmount');
    expect(value).toBeCloseTo(126);
  });
});
