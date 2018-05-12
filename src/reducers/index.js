import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  form: formReducer
});

export default rootReducer;
