import React from 'react'
import Layouts from '../../../components/layouts'
import { Row, Col, Modal,Button } from 'react-bootstrap'


export default function Orders() {
    return (
        <>
            <Layouts sidebar>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-lg-between mt-3">
                            <h2>Categories</h2>
                            <Button variant="primary btn-sm" size="sm" onClick='' style={{'height':'30px'}}>
                                Add Category
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Layouts>
        </>
    )
}
