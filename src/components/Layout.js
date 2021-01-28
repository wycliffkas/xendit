import React from 'react';
import Header from './shared/header';

import { Helmet } from 'react-helmet-async';

import 'bootswatch/dist/lux/bootstrap.css'

const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>Xendit Challenge</title>
            <meta name = "description" content="Xendit Challenge"/>
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        </>
     );
}
 
export default Layout;