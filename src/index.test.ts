import {main} from "./index";

describe('The entrypoint of the app, main()', () => {
  describe('WHEN: this function executes,', () => {
    test('THEN: it greets the user', async () => {
      const spy = jest.spyOn(console, 'log');
      await main();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});