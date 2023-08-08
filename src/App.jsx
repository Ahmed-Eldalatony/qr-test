import './index.css';
import { Link,Routes,Route } from 'react-router-dom';
import QRCode from "react-qr-code";
import AboutPage from './AboutPage';
import QrCodecomp from './qrCodecomp';
// import Home from './Home';
function App() {
  return (
    
    <>
    <div className="App bg-gray-500 ">

      <header className="App-header">
     <div className='flex gap-10 items-center'>
      <span className='text-2xl inline-block ml-40 '> Nav </span>

        <ul className='flex gap-4'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/aboutUs'>About us</Link></li>
        </ul>
        </div>
     </header>
<Routes>
  <Route path="/" element={<QrCodecomp/>} />
  </Routes>
      <Routes>
  <Route path="/aboutUs" element={<AboutPage />} />
</Routes>
    </div>
    </>
  );
}

export default App;
