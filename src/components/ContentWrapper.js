import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ListaUsuarios from './ListaUsuarios';


function ContentWrapper(props){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    <ContentRowTop 
                    productos={props.productos}
                    users={props.users}
                    />

                    {/* <ListaUsuarios 
                    users={props.users}
                    /> */}

                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;