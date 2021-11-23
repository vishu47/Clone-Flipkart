import React from 'react'
import Layout from '../../components/layouts/index'
import {Container, Row,Col } from 'react-bootstrap'
import './style.css'

export default function Home() {
    return (
        <div>
            <Layout>
                <Container fluid>
                    <Row>
                        <Col md={2} className="sidebar">Sidebar</Col>
                        <Col md={10} style={{marginLeft:'auto'}}>Container</Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
