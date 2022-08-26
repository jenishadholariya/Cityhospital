import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Container/Home/Home';
import Footer from './Component/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Department from './Container/Department/Department';
import Doctor from './Container/Doctor/Doctor';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Ref from './Container/Ref/Ref';
import Appointment from './Container/Appoinment/Appointment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Container/Auth/Auth';
import Medician from './Container/Medician/Medician';
import React, { ThemeProvider } from './Context/ThemeContext';
import { Provider } from 'react-redux'
import { store } from './Redux/Store';
import { SnackbarProvider } from 'notistack';


function App() {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ThemeProvider>
            <Header />
            <Switch>
              <Route path={"/Home"} exact component={Home}></Route>
              <Route path={"/Department"} exact component={Department}></Route>
              <Route path={"/Doctor"} exact component={Doctor}></Route>
              <Route path={"/About"} exact component={About}></Route>
              <Route path={"/Contact"} exact component={Contact}></Route>
              <Route path={"/Auth"} exact component={Auth}></Route>
              <Route path={"/Medician"} exact component={Medician}></Route>
              <Route path={"/Appointment"} exact component={Appointment}></Route>
              <Route path={"/ref"} exact component={Ref}></Route>
            </Switch>
            <Footer />
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    </>

  );
}

export default App;
