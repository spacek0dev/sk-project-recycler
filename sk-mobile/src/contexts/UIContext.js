import SkAlert from 'components/alert';
import SkLoader from 'components/loader';
import React, {createContext, useContext, useState} from 'react';

const UiContext = createContext(null);
const UseUiContext = () => {
  return useContext(UiContext);
};

const UiProvider = props => {
  const [loaderProperties, setLoaderProperties] = useState({
    show: false,
  });
  const [alertProperties, setAlertProperties] = useState({
    show: false,
    title: 'uRecycler',
    message: '',
    buttons: [],
  });
  const defaultButtons = [
    {
      text: 'Ok',
      onPress: () => {
        closeAlert();
      },
    },
  ];
  const showLoader = () => {
    setLoaderProperties({show: true});
  };
  const hideLoader = () => {
    setLoaderProperties({show: false});
  };
  const showAlert = (message, buttons = defaultButtons) => {
    setAlertProperties({
      ...alertProperties,
      show: true,
      message: message,
      buttons: buttons,
    });
  };
  const closeAlert = () => {
    setAlertProperties({
      ...alertProperties,
      show: false,
      message: '',
      buttons: [],
    });
  };
  return (
    <UiContext.Provider value={{showAlert, closeAlert, showLoader, hideLoader}}>
      <SkAlert
        visible={alertProperties.show}
        message={alertProperties.message}
        buttons={alertProperties.buttons}
        title={alertProperties.title}
      />
      <SkLoader visible={loaderProperties.show} />
      <React.Fragment>{props.children}</React.Fragment>
    </UiContext.Provider>
  );
};

export {UiContext, UiProvider, UseUiContext};
