import {initialGreeting} from "./initialGreeting";

describe('WHEN: this function executes,', () => {
  test('THEN: it clears the console', async () => {
    const spy = jest.spyOn(console, 'clear').mockImplementationOnce(() => {});

    await initialGreeting();

    expect(spy).toHaveBeenCalledTimes(1);
  });
  test('THEN: it greets the user', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementationOnce(() => {});
    await initialGreeting();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
