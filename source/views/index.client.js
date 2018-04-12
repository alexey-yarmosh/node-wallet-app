import React from 'react';
import { hydrate as hydrateReact } from 'react-dom';
import { hydrate as hydrateEmotion } from 'emotion';
import { App } from './components';

const { ids, app } = window.__data;
console.log(typeof ids);
console.log(typeof app);
hydrateEmotion(ids);
hydrateReact(<App data={app} />, document.getElementById('root'));
