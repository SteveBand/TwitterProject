import React from 'react'
import { MainPageNav } from './main-page-nav/main-page-nav'
import { MidPage } from './main-page-mid/main-page-mid'
export const HomePage = () => {

    return (
        <React.StrictMode>
            <div className='main-page'>
               <MainPageNav />
               <MidPage />
            </div>
        </React.StrictMode>
    )
}