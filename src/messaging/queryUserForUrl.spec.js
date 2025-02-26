import {queryUserForUrl} from "./queryUserForUrl.js";

const prompt = 'Please enter a URL';
const mockUrl = 'www.example.com';

jest.mock('@inquirer/prompts', () => ({
  input: jest.fn(jest.fn(() => mockUrl)),
}));

describe('WHEN: the function executes,', () => {
  test('THEN: It asks the user for a URL', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementationOnce(jest.fn(() => {}));
    await queryUserForUrl(prompt);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(mockUrl);
  });
});
