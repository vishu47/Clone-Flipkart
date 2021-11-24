import {React,useState} from 'react'
import {signup} from '../../action/auth.actions'
import Layout from '../../components/layouts/index'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../UI/Input'
import {Redirect} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';


export default function Signup() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const submitDetails = (e) => {
        e.preventDefault();
        const obj = {
            firstname,lastname,email,password
        }
        dispatch(signup(obj))
    }

    if(auth.authenticate){
        return <Redirect to={`/`} />
    }
    if(auth.loading){
        <p>Loading...</p>
    }

    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit = {submitDetails} >
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="First Name"
                                            type="text"
                                            placeholder="Firstname..."
                                            onChange = {(e) => setFirstname(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Last Name"
                                            type="text"
                                            placeholder="Lastname..."
                                            onChange={(e) => setLastname(e.target.value)}
                                        />

                                    </Col>
                                </Row>
                                <Input
                                    label="Email"
                                    type="email"
                                    placeholder="email..."
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="password..."
                                    onChange={(e) => setPassword(e.target.value)}
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
