import { combineReducers } from 'redux';
import client from '../apollo/client';

// Updates an entity cache in response to any action with response.entities.
const menus = (state = { drawerMenu: ['item1', 'item2'] }) => state;

const rootReducer = combineReducers({
  menus,
  apollo: client.reducer(),
});

export default rootReducer;
