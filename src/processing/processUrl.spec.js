import fetcher from './fetcher.js';
import { processUrl } from './processUrl';

jest.mock('./fetcher.js', () => jest.fn());

afterEach(() => jest.clearAllMocks());

describe('processUrl()', () => {
  describe('Validating when the user has NOT entered a valid URL', () => {
    describe('WHEN: they just pressed `ENTER` too early,', () => {
      test('THEN: it exits the program with an error.', async () => {
        const errorMessage = 'Google API failure';
        fetcher.mockRejectedValue(new Error(errorMessage));
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const consoleCountSpy = jest.spyOn(console, 'count').mockImplementation(() => {});
        const urlString = 'www.google.com';

        await processUrl(urlString);

        expect(consoleCountSpy).toHaveBeenCalledTimes(2);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      });
    });
    describe('WHEN: the URL itself is not correctly written,', () => {
      test('THEN: it exits the program with an error.', () => {
        // TODO: Next card.
      });
    });
  });
  describe('GIVEN: the user has entered a valid URL', () => {
    describe('WHEN: the function executes,', () => {
      test('THEN: it queries the Lighthouse API with the given URL.', async () => {
        fetcher.mockImplementationOnce(jest.fn());
        const urlString = 'www.google.com';

        await processUrl(urlString);

        expect(fetcher).toBeCalledTimes(1);
      });
    });
  });
});
