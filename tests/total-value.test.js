import path from 'path';

describe('total value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('total value should be $1779.75', async () => {
    const value = await page.evaluate('total');
    expect(value).toBeCloseTo(1779.75);
  });
});
