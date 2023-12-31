import path from 'path';

describe('nightlyRate type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('nightlyRate type should be "number"', async () => {
    const value = await page.evaluate('nightlyRate');
    expect(typeof value).toEqual('number');
  });
});
