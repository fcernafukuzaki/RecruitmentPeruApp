import { createStore } from 'redux';
import reducer from './reducers/video';

const store = createStore(reducer, {
  //videos: "Platzi"
});

export default store;
