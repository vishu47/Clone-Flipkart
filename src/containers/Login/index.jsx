import React from 'react'
import Layout from '../../components/layouts/index'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../UI/Input'


export default function Login() {
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Input
                                    label="Email address"
                                    type="email"
                                    placeholder="Enter email..."
                                    value=""
                                    onChange={() => { }}
                                />
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Enter password..."
                                    value=""
                                    onChange={() => { }}
                                />
                                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
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
