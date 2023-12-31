import path from 'path';

describe('nightlyRate value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('nightlyRate value should be $225', async () => {
    const value = await page.evaluate('nightlyRate');
    expect(value).toBeCloseTo(225);
  });
});
