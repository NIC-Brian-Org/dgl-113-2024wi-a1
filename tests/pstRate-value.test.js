import path from 'path';

describe('pstRate value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('pstRate value should be 8%', async () => {
    const value = await page.evaluate('pstRate');
    expect(value).toBeCloseTo(0.08);
  });
});
