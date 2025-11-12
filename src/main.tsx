import { createRoot } from 'react-dom/client';

import './styles/index.scss';
import App from './App.tsx';

const virtualContainer = createRoot(document.querySelector('#root')!);

// un container virtuel à une méthode render qui est l'équivalent de "append"
// virtualContainer.render(App());
virtualContainer.render(<App />);