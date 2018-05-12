import axios from 'axios';

const API_KEY = 'c5a68ae5288103326a379136889a7445';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather({ term }) {
  return async (dispatch) => {
    const { data } = await axios.get(`${ROOT_URL}&q=${term},us`);
    const { name, coord } = data.city;
    const temps = data.list.map((weather) => weather.main.temp);
    const pressures = data.list.map((weather) => weather.main.pressure);
    const humidities = data.list.map((weather) => weather.main.humidity);

    dispatch({
      type: FETCH_WEATHER,
      payload: {
        name,
        ...coord,
        temps,
        pressures,
        humidities
      }
    });
  };
}
