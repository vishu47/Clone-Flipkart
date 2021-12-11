import {React,useState,useEffect} from 'react'
import Layout from '../../components/layouts/index'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../UI/Input'
import {login} from '../../action/actions'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function Login() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [error , setError] = useState('');
    const auth = useSelector(state => state.auth)


    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const obj = {
           email,password
        }
        dispatch(login(obj))
    }


    if(auth.authenticate){
        return <Redirect to={`/`} />
    }

    return (
        <div>
            <Layout>
                <Container style={{'marginTop':'60px'}}>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit = {userLogin}>
                                <Input
                                    label="Email address"
                                    type="email"
                                    placeholder="Enter email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="Enter password..."
                                    onChange={(e) => setPassword(e.target.value)}
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
