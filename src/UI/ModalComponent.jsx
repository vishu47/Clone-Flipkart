import React from 'react'
import { Container, Row, Col, Form, Modal, Button } from 'react-bootstrap'

export default function ModalComponent(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Form className="form-control">
                    {props.children}
                </Form>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
