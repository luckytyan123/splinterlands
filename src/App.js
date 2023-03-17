import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { ApplicationProvider } from './ApplicationContext';
import Tournaments from './components/Tournaments';
import { ThemeProvider } from 'react-bootstrap';
import HeaderComponent from './components/header/HeaderComponent';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >

      <div className="App">
        <HeaderComponent />

        <ApplicationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Home />} />
              </Route>

              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </ApplicationProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
