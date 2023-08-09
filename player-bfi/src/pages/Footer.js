import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <MDBFooter className='text-center text-white bg-black mt-4' >
            <MDBContainer className='p-6 bg-black  ' >
                <a id='b' href='/Accessibility'>Accessibility</a>
                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <a id='b' href='/About'> About BFI Player</a>
                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <a id='b' href='/Help'> Help</a>

                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <a id='b' href='/Privacy'> Privacy</a>

                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <a id='b' href='/#'> Cookies</a>

                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <a id='b' href='/Terms'> Terms</a>

                &nbsp; &nbsp;
                &nbsp; &nbsp;
                <a id='b' href='/Livechat'> Livechat</a>

                &nbsp; &nbsp;
                &nbsp; &nbsp;

            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 British Film Institute. All rights reserved. Registered charity 287780

            </div>
            <img src="https://player.bfi.org.uk/themes/custom/bfip/images/logo-alt.svg" alt="Logo" />
        </MDBFooter>
    );
}
