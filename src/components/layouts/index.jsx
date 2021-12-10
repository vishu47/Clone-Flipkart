import React from 'react'
import './sidebar.css'
import Header from '../header/index';
import {Container,Row,Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faCodeBranch , faBox} from '@fortawesome/free-solid-svg-icons'

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
                                <li><NavLink className="ml-1" exact to='/'><FontAwesomeIcon icon={faHome} />  Home</NavLink> </li>
                                <li><NavLink to='/category' className="pb-2"><FontAwesomeIcon icon = {faCodeBranch} />  category</NavLink> </li>
                                <li><NavLink to='/products' className="pb-2"><FontAwesomeIcon icon = {faBox} />  Products</NavLink> </li>
                                <li><NavLink to='/orders'><FontAwesomeIcon icon = {faCodeBranch} />  Orders</NavLink> </li>
                            </ul>
                        </Col>
                        <Col className="maincontent" md={10}>{props.children}</Col>
                    </Row>
                    : props.children
                }
                
            </Container>
              {/*footer can be added here  */}
        </>
    )
}
