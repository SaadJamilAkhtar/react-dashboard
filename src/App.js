import './App.css';
import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import ReactTooltip from 'react-tooltip';

function App() {
    const activeMenu = false;
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex: 1000}}>

                        <button
                            data-tip
                            data-for='Settings-button'
                            type="button"
                            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                            style={{background: 'blue', borderRadius: '50%'}}
                        >
                            <FiSettings/>
                        </button>
                        <ReactTooltip place="top" id="Settings-button" type="dark" effect="solid">
                            <span>Settings</span>
                        </ReactTooltip>
                    </div>
                    {
                        activeMenu
                            ? <div className='w-72 fixed sidebar
                        dark:bg-secondary-dark-bg bg-white'>
                                SideBar
                            </div>
                            : <div className='w-0 dark:bg-secondary-dark-bg'>
                                SideBar
                            </div>
                    }
                    <div
                        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
                    >
                        <div className="fixed"></div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
