import React from 'react';
import {AppProvider} from './AppContext';
import {AuthProvider} from './AuthContext';
import {AxiosProvider} from './AxiosContext';
import {TranslateProvider} from './TranslateContext';
import {UiProvider} from './UIContext';

const Contexts = props => {
  return (
    <UiProvider>
      <AuthProvider>
        <AxiosProvider>
          <AppProvider>
            <TranslateProvider>{props.children}</TranslateProvider>
          </AppProvider>
        </AxiosProvider>
      </AuthProvider>
    </UiProvider>
  );
};
export default Contexts;
