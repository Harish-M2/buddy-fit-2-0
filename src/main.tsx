import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './pages/DarkModeContext';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <DarkModeProvider>
            <App />
        </DarkModeProvider>
    </React.StrictMode>
);
