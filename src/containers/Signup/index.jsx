import React from 'react'
import Layout from '../../components/layouts/index'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../UI/Input'



export default function Signup() {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="First Name"
                                            type="text"
                                            placeholder="enter firstname..."
                                            value=""
                                            onChange={() => { }}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Last Name"
                                            type="text"
                                            placeholder="enter firstname..."
                                            value=""
                                            onChange={() => { }}
                                        />

                                    </Col>
                                </Row>
                                <Input
                                    label="Email"
                                    type="email"
                                    placeholder="email..."
                                    value=""
                                    onChange={() => { }}
                                />
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="password..."
                                    value=""
                                    onChange={() => { }}
                                />

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}
