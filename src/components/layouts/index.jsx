import React from 'react'
import Header from '../header/index';
import {Container,Row,Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export default function Layouts(props) {
    return (
        <>
            <Header /> 
            <Container fluid>
                {
                    props.sidebar ? 
                    <Row>
                        <Col md={2} className="sidebar">
                            <ul>
                                <li  className="p-2"><NavLink to='/'>Home</NavLink> </li>
                                <li  className="p-2"><NavLink to='/category' className="pb-2">category</NavLink> </li>
                                <li  className="p-2"><NavLink to='/products' className="pb-2">Products</NavLink> </li>
                                <li  className="p-2"><NavLink to='/orders'>Orders</NavLink> </li>
                            </ul>
                        </Col>
                        <Col md={10} style={{marginLeft:'auto'}}>{props.children}</Col>
                    </Row>
                    : props.children
                }
                
            </Container>
              {/*footer can be added here  */}
        </>
    )
}
