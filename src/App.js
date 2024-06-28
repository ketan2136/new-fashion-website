// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import User from './Routes/User';
// import Admin from './Routes/Admin';
// import { Provider } from 'react-redux';
// import { store } from './Redux/Store';
// import PrivateRoutes from './Routes/PrivateRoutes';
// import {AuthProvaider} from './Routes/AuthContext';
// // import {AuthContext} from './Routes/AuthContext';
// // import store from './Redux/Store';

// function App() {
//   return (
    
//       <Provider store={store} >
//         <AuthProvaider>
//           <Routes>
//             <Route path='/*' element={<User />} />
//             <Route element={<PrivateRoutes />}>
//               <Route path='/admin/*' element={<Admin />} />
//             </Route>
//           </Routes>
//         </AuthProvaider>
//       </Provider>

   
//   );
// }

// export default App;

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import User from './Routes/User';
// import Admin from './Routes/Admin';
// import { Provider } from 'react-redux';
// import { store } from './Redux/Store';
// import PrivateRoutes from './Routes/PrivateRoutes';
// import { AuthProvider } from './Routes/AuthContext'; // Corrected import

// function App() {
//   return (
//     <Provider store={store}>
//       <AuthProvider>
//         <Routes>
//           <Route path='/*' element={<User />} />
//           <Route element={<PrivateRoutes />}>
//             <Route path='/admin/*' element={<Admin />} />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </Provider>
//   );
// }

// export default App;


import './App.css';
import { Route, Routes } from 'react-router-dom';
import User from './Routes/User';
import Admin from './Routes/Admin';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import PrivateRoutes from './Routes/PrivateRoutes';
import { AuthProvider } from './Routes/AuthContext'; // Corrected import

function App() {
  return (
    <Provider store={store}>
      <AuthProvider> {/* Use AuthProvider instead of AuthProvaider */}
        <Routes>
          <Route path='/*' element={<User />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/admin/*' element={<Admin />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
