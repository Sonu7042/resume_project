import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from './context';
import SummeryApi from './common';
import { useState } from 'react';


function App() {

  const [data, setData] = useState([]);

  const show = async () => {
    const response = await fetch(SummeryApi.show.url, {
      method: SummeryApi.show.method,
    });

    const json = await response.json();
    setData(json.data);
  };



  return (
    <>

      <Context.Provider value={{
        show,//fetching data function
        data  // fetching data
      }}>


        <Header />
        <ToastContainer position='top-right' />
        <main className='min-h-[calc(100vh-50px)] pt-20'>
          <Outlet />
        </main>
        <Footer />


      </Context.Provider>

    </>
  )
}

export default App
