import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Profilelink from '../../components/Profilelink/Profilelink';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='main-container'>
            <Profilelink></Profilelink>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;