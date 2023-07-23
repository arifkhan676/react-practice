import React from 'react';
import MainComp from './components/MainComp';
import { Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import { NavLink } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute'
import './components/AllCSSFile/App.css'
import NewBook from './components/lists/NewBook';
import InputBook from './components/lists/InputBook';

const App = (props) => {
  return (
    <div>

      <nav className='nav'>
        <li>
          <NavLink to='/'> Home </NavLink>
        </li>
        <li>
          <NavLink to='/Maincomponent'> Book List </NavLink>
        </li>
        <li>
          <NavLink to='/Input'> Input Book</NavLink>
        </li>
      </nav>

      <Routes>
        <Route path='/' element={<SignIn />}>  </Route>
        <Route element={<PrivateRoute />}>
          <Route path='/Maincomponent' element={<MainComp />}>  </Route>
          <Route path='/book' element={<NewBook selectBook={props.clicktoBuy} />}>  </Route>
          <Route path='/Input' element={<InputBook />}>  </Route>

        </Route>
      </Routes>


    </div>
  );
}


export default App;
