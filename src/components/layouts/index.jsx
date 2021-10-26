import React from 'react'
import Header from '../header/index';
import {Container} from 'react-bootstrap'

export default function Layouts(props) {
    return (
        <>
            <Header /> 
            <Container>
                {props.children}
            </Container>
              {/*footer can be added here  */}
        </>
    )
}
