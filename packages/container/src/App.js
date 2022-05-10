import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />;
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

console.log('test');
export default App;
