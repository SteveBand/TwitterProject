import React from 'react'
import { MainPageNav } from './navbar'
import { FeedPage } from './feed'
import { Context } from '../contexts/context'
export const HomePage = () => {

    return (
        <React.StrictMode>
            <div className='main-page'>
               <Context>
                    <MainPageNav />
                    <FeedPage />
                </Context>
            </div>  
        </React.StrictMode>
    )
}