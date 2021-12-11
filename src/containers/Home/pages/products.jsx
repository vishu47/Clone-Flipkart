import { React, useEffect, useState } from 'react';
import Layouts from '../../../components/layouts'
import { Container, Row, Col, Form, Modal, Button , Table} from 'react-bootstrap'
import Input from '../../../UI/Input';
import ModalComponent from '../../../UI/ModalComponent';
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../action/product.actions';


export default function Products() {

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [productimage, setProductimage] = useState([]);

    const dispatch = useDispatch();
    const allcategory = useSelector(state => state.category)
    const products = useSelector(state => state.product)    // from reducers and then go to initail state 
    console.log(products);

    const handleShow = () => setShow(true);
    const handleClose = () => {

        const form = new FormData()
        form.append('name', name)
        form.append('quantity', quantity)
        form.append('price', price)
        form.append('category', category)
        form.append('description', description)
        if (productimage.length > 0) {
            for (let img of productimage)
                form.append('productImg', img)
        }

        dispatch(addProduct(form))

        setShow(false);
    }

    const renderCategoryList = (category, option = []) => {
        for (let cat of category) {
            option.push({ id: cat._id, name: cat.name })
            if (cat.children.length > 0) {
                renderCategoryList(cat.children, option)
            }
        }
        return option;
    }

    const handleImages = (e) => {
        setProductimage([
            ...productimage,
            e.target.files[0]
        ])
    }
    return (
        <>
            <Layouts sidebar>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-between mt-3">
                            <h2>Product List</h2>
                            <Button variant="primary btn-sm" size="sm" onClick={handleShow} style={{ 'height': '30px' }}>
                                Add Products
                            </Button>
                        </div>
                        <hr />
                        <Table responsive hover variant="dark">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Product ID</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Images</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.product.map((item,i) => 
                                    <tr key={item._id}>
                                        <td>{i+1}</td>
                                        <td>{item._id}</td>
                                        <td >{item.name}</td>
                                        <td >{item.category == null ? 'NA' : item.category.name}</td>
                                        <td>{item.price}</td>
                                        <td>NA</td>
                                        <td>{item.description}</td>
                                        <td>NA</td>
                                    </tr>
                                    )
                                }
                                <tr>
                                    {/* <td>1</td>
                                    <td>Vishnu</td>
                                    <td>VishnuMaurya</td>
                                    <td>7654</td>
                                    <td></td>
                                    <td>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</td>
                                    <td>Nothing</td> */}
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Layouts>
            <ModalComponent
                show={show}
                handleClose={handleClose}
                modalTitle='Add New Product'
            >
                <Form className="form-control">
                    <Input
                        type='text'
                        label="Product Name"
                        placeholder="Add Name..."
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Label >Choose Category</Form.Label>
                    <Form.Select className="mb-3" onChange={(e) => setCategory(e.target.value)} aria-label="--Choose--" style={{ 'textTransform': 'capitalize' }}>
                        <option value="">--Choose--</option>
                        {
                            renderCategoryList(allcategory.category).map(option =>
                                <option key={option.id} value={option.id} >{option.name}</option>
                            )
                        }
                    </Form.Select>
                    <Input
                        type='number'
                        label="Qunatity"
                        placeholder="qunatity..."
                        onChange={(e) => setQuantity(e.target.value)}

                    />
                    <Input
                        type='number'
                        label="Product Price"
                        placeholder="price..."
                        onChange={(e) => setPrice(e.target.value)}

                    />
                    {
                        productimage.length > 0 ? productimage.map((pic, index) => <div key={index}>{JSON.stringify(pic.name)}</div>) : []
                    }

                    <Input
                        type='file'
                        label="Product Image"
                        Placeholder="Add Images..."
                        onChange={handleImages}
                    />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description </Form.Label>
                        <Form.Control onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} />
                    </Form.Group>

                </Form>
            </ModalComponent>
        </>
    )
}
