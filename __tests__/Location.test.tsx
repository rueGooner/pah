import '@testing-library/jest-dom';
import { fetchWeather } from '../app/location/[slug]/page';
import fetch from 'jest-fetch-mock';
import { MOCKDATA } from '../mocks/data';

describe('Home page component', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should fetch weather data', async () => {
    fetch.mockResponseOnce(JSON.stringify(MOCKDATA.mockSuccessResponse));

    const data = await fetchWeather(MOCKDATA.mockCorrectURL);

    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toBe(
      'http://api.weatherapi.com/v1/current.json?key=e249f83b544f440ca4c144015230208&q=London&aqi=no'
    );

    expect(data).toEqual(MOCKDATA.mockSuccessResponse);
  });

  it('should return the appropriate error', async () => {
    fetch.mockResponseOnce(JSON.stringify(MOCKDATA.mockErrorResponse));

    const data = await fetchWeather(MOCKDATA.mockIncorrectURL);

    expect(fetch.mock.calls.length).toBe(1);
    expect(fetch.mock.calls[0][0]).toBe(
      'http://api.weatherapi.com/v1/current.json?key=e249f83b544f440ca4c144015230208&q=NotLondon&aqi=no'
    );

    expect(data).toEqual(MOCKDATA.mockErrorResponse);
  });
});
