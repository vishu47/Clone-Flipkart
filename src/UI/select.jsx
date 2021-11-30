import React from 'react'
import { Form } from 'react-bootstrap'


export default function Select(props) {
    return (
        <>
            <Form.Group className="mb-3" >
                <Form.Label>{props.label}</Form.Label>
                <Form.Select aria-label="Default select example">
                    {props.options}
                </Form.Select>
                <Form.Text className="text-muted">
                    {props.errorMessage}
                </Form.Text>
            </Form.Group>
        </>
    )
}
