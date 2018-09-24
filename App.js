
import React from 'react';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './components/reducers';


import { createStackNavigator } from 'react-navigation';

import HomeScreen from './components/homeScreen';
import UserScreen from './components/userScreen';
import InputScreen from './components/inputScreen';
import ViewScreen from './components/viewScreen';


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

const RootStack = createStackNavigator(
  {
    home: HomeScreen,
    user: UserScreen,
    input: InputScreen,
    view: ViewScreen
  },
  {
    initialRouteName: 'home'
  }
)


const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)

export default App;
