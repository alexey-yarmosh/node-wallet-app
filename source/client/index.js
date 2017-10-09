import { helloHandler } from './handlers';

const component = () => {
  const content = 'Hello! Node School App';
  const elem = document.createElement('div');

  elem.innerHTML = content;
  elem.addEventListener('click', helloHandler);

  return elem;
};

document.body.appendChild(component());
