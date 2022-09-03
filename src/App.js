import './App.css';
import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import ReactTooltip from 'react-tooltip';

function App() {
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
                            style={{background:'blue', borderRadius:'50%'}}
                        >
                            <FiSettings/>
                        </button>
                        <ReactTooltip place="top" id="Settings-button" type="dark" effect="solid">
                            <span>Settings</span>
                        </ReactTooltip>

                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
