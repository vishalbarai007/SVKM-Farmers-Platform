import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  const [menuopen, setmenuopen] = useState(false);
  const toggle = () => setmenuopen(!menuopen);
  const admin = sessionStorage.getItem("admin");
  // useEffect(() => {
  //   if(sessionStorage.getItem('admin')=== "true"){
  //     sessionStorage.setItem('admin', "true");
  //   }
  //   else{
  //     sessionStorage.setItem('admin', "false");
  //   }
  //   console.log(sessionStorage.getItem('admin'))
    
  //   if (sessionStorage.getItem('studentPresence') === "true") {
  //     sessionStorage.setItem('studentPresence', "false");
  //   } else {
  //     sessionStorage.setItem('studentPresence', "true");
  //   }
  //   console.log('student',sessionStorage.getItem('studentPresence'));
  //   console.log('admin', sessionStorage.getItem('admin'));
  //   const handleStorageChange = () => {
  //     setAdmin(sessionStorage.getItem("admin"));
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);


  return (
    /* Don't delete this comment work in progress
      <header className='bg-black text-white p-10 flex justify-between text-3xl'>
      <div>EduSync</div>
      <div className='hover:bg-slate-600 rounded-lg'><button className='w-11 h-11'><i className="fa-solid fa-bars"></i></button></div>
      </header>  
    */
    <>
      <nav className="bg-black lg:h-24 lg:p-4 xl:h-32 xl:p-7 min-[768px]:max-[1023px]:w-[100%] top-0 z-50 sticky">
        <div className="max-w-screen flex flex-wrap items-center justify-between p-4 min-[768px]:max-[1023px]:flex gap-5 xl:flex xl:justify-between">
          <Link to='/' className="flex gap-1">
            <img src="https://flowbite.com/docs/images/logo.svg" className="xl:h-10 h-7" alt="Flowbite Logo" />
            <span className="text-xl font-semibold dark:text-white xl:text-4xl">ElevateU</span>
            {/* Smart Hive */}
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuopen ? "true" : "false"}
            onClick={toggle}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className={`w-full md:block md:w-auto ${menuopen ? "" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black min-[768px]:max-[1023px]:space-x-8 lg:space-x-8 xl:space-x-14">
              <li>
                <Link to='/' className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/activity" className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Activity
                </Link>
              </li>
              <li>
                <Link to="/achievement" className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/courses" className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Courses
                </Link>
              </li>
              <li>
                <Link to=/*{sessionStorage.getItem('admin') === "true" ? '/ktstudents' : '/examination'}*/'/examination' className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                {/* {sessionStorage.getItem('admin') === "true" ? 'KT Students' : 'Examination'} */}Examination
                </Link>
              </li>
              <li>
                <Link to=/*{sessionStorage.getItem('admin') === "true" ? '/studentslog' : '/admission/personal'}*/'/admission' className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  {/* {sessionStorage.getItem('admin') === "true" ? 'Students Log' : 'Admission'} */}Admission
                </Link>
              </li>
              <li>
                <a
                  // href={
                  //   sessionStorage.getItem('admin') === "true"
                  //     ? "/helloadmin"
                  //     : sessionStorage.getItem('studentPresence') === "true"
                  //       ? "/hellostudent"
                  //       : (sessionStorage.getItem('studentPresence') === "false") || (sessionStorage.getItem('admin') === "false") ? '/profile'
                  //       : '/profile'
                  // }
                  className="xl:text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Profile
                </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}
export default Header
