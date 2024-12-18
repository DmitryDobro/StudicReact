// import React from 'react';
// import {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import {Route, Routes, useNavigate} from 'react-router-dom';
// import './Main.scss';
// import Univers from './Univers/Univers.jsx';
// import Lead from './Lead/Lead.js';
// import Region from './Region/Region.jsx';
// import Login from '../Login/Login.jsx';
// import Registration from '../Registration/Registration.jsx';
// import {api} from '../../utils/Api.js';
// import {authApi} from '../../utils/Auth.js';
// function Main({cities}) {
//   const LoggedInFromLlocalStorage = JSON.parse(localStorage.getItem('isLoggin'));
//   const [isLoggin, setIsLoggin] = React.useState(LoggedInFromLlocalStorage);
//   const navigate = useNavigate();
//   function hanleRegistration(name, password, email) {
//     authApi
//       .register(name, password, email)
//       .then(() => {
//         handleLogin(email, password);
//         navigate('/');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   function handleLogin(email, password) {
//     console.log(email, password);
//     authApi
//       .login(email, password)
//       .then(res => {
//         console.log(res);
//         localStorage.setItem('jwt', res.token);
//         localStorage.setItem('isLoggin', true);
//         setIsLoggin(true);
//         navigate('/');
//         checkToken()
//       })
//       .catch(err => { 
//         console.log(err);
//       })
//   }
//   function checkToken() {
//     console.log(123);
//     const jwt = localStorage.getItem('jwt');
//     if (jwt) {
//       authApi
//         .getDataUser(jwt)
//         .then(res => {
//           console.log(res);
//         })
//         .catch(err => console.log(err));
//     }
//   }
//   return (
//     <main className="main">
//       {/* <Routes>
//         <Route path="/" element={<Lead />} />
//         <Route path="/univers/:id" element={<Univers />} />
//         <Route path="/region/:Regionid" element={<Region cities={cities} />} />
//         <Route path="/signin" element={<Login onLogin={handleLogin}/>} />
//         <Route path="/signup" element={<Registration onRegister={hanleRegistration} />} />
//       </Routes> */}
//     </main>
//   );
// }
// export default Main;
