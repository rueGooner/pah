export const MOCKDATA = {
  mockCorrectURL:
    'http://api.weatherapi.com/v1/current.json?key=e249f83b544f440ca4c144015230208&q=London&aqi=no',
  mockIncorrectURL:
    'http://api.weatherapi.com/v1/current.json?key=e249f83b544f440ca4c144015230208&q=NotLondon&aqi=no',
  mockSuccessResponse: {
    location: {
      name: 'London',
      region: 'City of London, Greater London',
      country: 'United Kingdom',
      lat: 51.52,
      lon: -0.11,
      tz_id: 'Europe/London',
      localtime_epoch: 1691085082,
      localtime: '2023-08-03 18:51',
    },
    current: {
      last_updated_epoch: 1691084700,
      last_updated: '2023-08-03 18:45',
      temp_c: 20,
      temp_f: 68,
      is_day: 1,
      condition: {
        text: 'Partly cloudy',
        icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
        code: 1003,
      },
      wind_mph: 5.6,
      wind_kph: 9,
      wind_degree: 320,
      wind_dir: 'NW',
      pressure_mb: 1009,
      pressure_in: 29.8,
      precip_mm: 0,
      precip_in: 0,
      humidity: 56,
      cloud: 75,
      feelslike_c: 20,
      feelslike_f: 68,
      vis_km: 10,
      vis_miles: 6,
      uv: 6,
      gust_mph: 8.3,
      gust_kph: 13.3,
    },
  },

  mockErrorResponse: {
    error: { code: 1006, message: 'No matching location found.' },
  },
};
