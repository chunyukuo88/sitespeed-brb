import {queryUserForUrl} from "./queryUserForUrl.js";
import * as processing from "../processing/processUrl.js";

const prompt = 'Please enter a URL';
const mockUrl = 'www.example.com';

jest.mock('@inquirer/prompts', () => ({
  input: jest.fn(() => mockUrl),
}));
jest.mock('../processing/processUrl.js', () => ({
  processUrl: jest.fn(),
}));

describe('GIVEN: the user enters a URL,', () => {
  describe('WHEN: there are no problems with the URL or site speed service,', () => {
    test('THEN: It sends the URL typed by the user to be measured for site speed', async () => {
      const spy = jest.spyOn(console, 'log').mockImplementationOnce(jest.fn(() => {}));
      jest.spyOn(processing, 'processUrl').mockImplementationOnce(jest.fn(() => {}));

      await queryUserForUrl(prompt);

      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(mockUrl);
    });
  });
});
