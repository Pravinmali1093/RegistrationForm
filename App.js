import logo from './logo.svg';
import './App.css';
import RegForm from './components/RegForm';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">

      {/* <h1>Login Form</h1>
      <LoginPage /> */}
      <hr/>
      <h1> Registration Form</h1>
      <RegForm />
    </div>
  );
}

export default App;


// import React from 'react'
// import Footer from './newcomp/Footer'
// import Navbar from './newcomp/Navbar'
// import Dashboard from './newcomp/pages/Dashboard'
// import Sidebar from './newcomp/Sidebar'

// function App() {
//   return (
//     <div>
//       <div className='wrapper'>
//       <Sidebar />
//       <div className='main'>
//         <Navbar />
//         <main className='content'>
//             <div className='container-fluid p-0'>
//                 <Dashboard />
//             </div>
//         </main>

//         <Footer />
//       </div>
//     </div>
//     </div>
//   )
// }

// export default App
