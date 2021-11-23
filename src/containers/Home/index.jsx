import React from 'react'
import Layout from '../../components/layouts/index'
import {Container, Row,Col } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Layout>
                <Container>
                    <Row>
                        <Col md={2} >Sidebar</Col>
                        <Col md={10} >Sidebar</Col>
                    </Row>
                <h1>Home</h1>
                </Container>
            </Layout>
        </div>
    )
}
