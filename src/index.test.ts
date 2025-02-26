import {main} from "./index";
import * as greeting from "./messaging/initialGreeting";

describe('The entrypoint of the app, main()', () => {
  describe('WHEN: this function executes,', () => {
    test('THEN: it greets the user', async () => {
      const spy = jest.spyOn(greeting, 'initialGreeting').mockImplementationOnce(() => {});

      await main();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
