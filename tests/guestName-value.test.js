import path from 'path';

describe('guestName value', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('guestName value should be "Adam Smith"', async () => {
    const value = await page.evaluate('guestName');
    expect(value).toBe('Adam Smith');
  });
});
