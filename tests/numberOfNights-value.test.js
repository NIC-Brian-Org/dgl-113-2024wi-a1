import path from 'path';

describe('numberOfNights value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('numberOfNights value should be 7', async () => {
    const value = await page.evaluate('numberOfNights');
    expect(value).toBeCloseTo(7);
  });
});
