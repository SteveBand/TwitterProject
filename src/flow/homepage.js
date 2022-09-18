import React from 'react'
import { MainPageNav } from './navbar'
import { FeedPage } from './feed'
export const HomePage = () => {

    return (
        <React.StrictMode>
            <div className='main-page'>
               <MainPageNav />
               <FeedPage />
            </div>
        </React.StrictMode>
    )
}