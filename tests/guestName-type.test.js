import path from 'path';

describe('guestName type', () => {
  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    await page.goto(URL);
  });

  it('guestName type should be "string"', async () => {
    const value = await page.evaluate('guestName');
    expect(typeof value).toEqual('string');
  });
});
