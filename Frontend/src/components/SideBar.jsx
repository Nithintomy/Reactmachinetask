import React, { useState } from 'react';
import Help from '../assets/Help.png'
import CircledMenu from '../assets/CircledMenu.png'
import Support from '../assets/Support.png'
import Shutdown from '../assets/Shutdown.png'
import Puzzle from '../assets/Puzzle.png'
import Briefcase from '../assets/Briefcase.png'


function SideBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            {sidebarOpen && (
                <div className="fixed top-4 left-4 bg-white p-2 rounded cursor-pointer z-50" onClick={closeSidebar}>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </div>
            )}

            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-56 sm:w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
                    } bg-gray-800 text-white overflow-y-auto`}
                aria-label="Sidebar"
            >
                <div className="flex flex-col items-center h-screen">
                    <div className="mb-4 mt-14 text-center">
                        <img
                            src={Briefcase}
                            alt="Dashboard"
                            className="rounded-full h-16 w-16 mx-auto mb-2"
                        />
                        <span className='font-lemon text-gray-300 text-sm'>STATBOARD</span>
                    </div>


                    <div className="flex justify-end pl-32">
                        <ul className="space-y-2 mt-24 font-medium">
                            <li className="group bg-white rounded-tl-lg rounded-bl-lg">
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group-hover:text-black">
                                    <img src={CircledMenu} alt="Dashboard" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
                                </a>
                            </li>

                            <li className="group bg-gray-900 rounded-tl-lg rounded-bl-lg ">
                                <a href="#" className="flex items-center p-2 text-white dark:text-white rounded-lg hover:bg-white dark:hover:bg-gray-700 group-hover:text-black">
                                    <img src={Support} alt="Support" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Support</span>
                                </a>
                            </li>


                            <li className="group bg-gray-900 rounded-tl-lg rounded-bl-lg ">
                                <a href="#" className="flex items-center p-2 text-white dark:text-white rounded-lg hover:bg-white dark:hover:bg-gray-700 group-hover:text-black">
                                    <img src={Puzzle} alt="Plugins" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Plugins</span>
                                </a>
                            </li>


                            <li className="group bg-gray-900 rounded-tl-lg rounded-bl-lg ">
                                <a href="#" className="flex items-center p-2 text-white dark:text-white rounded-lg hover:bg-white dark:hover:bg-gray-700 group-hover:text-black">
                                    <img src={Help} alt="Help" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="mt-auto mb-4">
                        <button className="flex items-center text-sm">

                            Logout
                            <img src={Shutdown} alt="Shutdown" className='ml-4' />
                        </button>
                    </div>

                </div>
            </aside>
        </>
    );
}

export default SideBar;
