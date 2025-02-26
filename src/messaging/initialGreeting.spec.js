import {initialGreeting} from "./initialGreeting";

afterEach(() => {
  jest.clearAllMocks();
});

const message = 'hello';

describe('WHEN: this function executes,', () => {
  test('THEN: it clears the console', () => {
    const spy = jest
      .spyOn(console, 'clear')
      .mockImplementationOnce(jest.fn(() => {}));

    initialGreeting(message);

    expect(spy).toHaveBeenCalledTimes(1);
  });
  test('THEN: it greets the user', () => {
    const spy = jest
      .spyOn(console, 'log')
      .mockImplementationOnce(jest.fn(() => {}));

    initialGreeting(message);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(message);
  });
});
