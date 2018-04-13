import React from 'react';
import { hydrate as hydrateReact } from 'react-dom';
import { hydrate as hydrateEmotion } from 'emotion';
import { App } from './components';

const { ids, appData } = window.__data;

hydrateEmotion(ids);
hydrateReact(<App data={appData} />, document.getElementById('root'));
