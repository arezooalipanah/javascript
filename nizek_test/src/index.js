import UserProvider from './context/UserContext';
import BookProvider from './context/BookContext';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom';
import './assets/style/app.scss';
import App from './App';

ReactDOM.render(
  <UserProvider>
    <BookProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster />
    </BookProvider>
  </UserProvider>,
  document.getElementById('root')
);
