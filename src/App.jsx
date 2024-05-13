import { Fragment, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './layout/Header';
import Chat from './layout/Chat';
import Navbar from './layout/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard")
    }
  }, []);

  return (
    <Fragment>

      <div className="flex bg-[#161926] text-white">
        <main className='min-h-screen flex flex-col w-full flex-grow-0'>
          <Header />
          <main className='flex-shrink-0 flex-grow'>
            <div className='flex justify-between'>

              <Navbar />

              <article className='flex-shrink-0 flex-grow'>
                <Outlet />
              </article>
            </div>
          </main>
          <footer className='flex-shrink-0'>Footer</footer>
        </main>

        <div className="w-[320px] flex-shrink-0">
          <Chat />
        </div>
      </div>

    </Fragment>
  )
}

export default App;