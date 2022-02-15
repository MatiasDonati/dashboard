import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ListaUsuarios from './ListaUsuarios';


function ContentWrapper(props){

    function componenteAMostrar () {
        if(props.sectionToShow.productos){
            return <ContentRowTop 
            productos={props.productos}
            users={props.users}
            />
        }
        if(props.sectionToShow.usuarios){
            return <ListaUsuarios 
            users={props.users}
            />
        }
    }

    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">

                    {componenteAMostrar()}

                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;