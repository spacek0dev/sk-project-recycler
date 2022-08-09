/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Contexts from 'contexts';
import React from 'react';
import Router from 'routes';

const App = () => {
  return (
    <Contexts>
      <Router />
    </Contexts>
  );
};

export default App;
