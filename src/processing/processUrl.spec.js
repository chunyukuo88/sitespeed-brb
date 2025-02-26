import fetch from './fetcher.js';
import processUrl from './processUrl';

jest.mock('./fetcher.js', () => {});

describe('processUrl()', () => {
  describe('Validating when the user has NOT entered a valid URL', () => {
    describe('WHEN: they just pressed "ENTER" too early,', () => {
      test('THEN: it exits the program with an error.', () => {
        //
      });
    });
    describe('WHEN: the URL itself is not correctly written,', () => {
      test('THEN: it exits the program with an error.', () => {
        //
      });
    });
  });
  describe('GIVEN: the user has entered a valid URL', () => {
    describe('WHEN: the function executes,', () => {
      test('THEN: it queries the Lighthouse API with the given URL.', async () => {
        const urlString = 'www.google.com';

        await processUrl(urlString);


      });
    });
  });
});