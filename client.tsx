import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import SWRDevtools from '@jjordy/swr-devtools';
import App from './layouts/App';
import { cache, mutate } from 'swr';

axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  process.env.NODE_ENV === 'production' ? 'https://sleact.nodebird.com' : 'http://localhost:3090';

render(
  <BrowserRouter>
    {process.env.NODE_ENV === 'production' ? null : <SWRDevtools cache={cache} mutate={mutate} />}
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
