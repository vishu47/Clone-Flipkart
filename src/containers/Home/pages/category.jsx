import { React, useEffect,useState } from 'react';
import Layouts from '../../../components/layouts'
import { fetchProductCategory , addCategory} from '../../../action/actions';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col,Form, Modal,Button } from 'react-bootstrap'
import Input from '../../../UI/Input';

const Category = () => {
    
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const dispatch = useDispatch();
    const allcategory = useSelector(state => state.category) 
    console.log(allcategory);
    useEffect(() => {
        dispatch(fetchProductCategory());
    }, []);

    const handleClose = () => {
        const form = new FormData()
        form.append('name',name)
        form.append('categoryImage',image)
        form.append('parent_id',category)
        // const obj = {
        //     name, category, image
        // }
        dispatch(addCategory(form))
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const getAllCategories = (categories) => {
        let mycategories = [];
        for (let category of categories) {
            mycategories.push(
                <li>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{getAllCategories(category.children)}</ul>) : null}
                </li>
            )
        }
        return mycategories;
    }

    const renderCategoryList = (categories, option = []) => {
        for(let category of categories){
            option.push({value: category._id, name: category.name})
            if(category.children.length > 0){
                renderCategoryList(category.children, option);
            }
        }
        return option;
    }


    return (
        <>
            <Layouts sidebar>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="d-flex justify-content-lg-between mt-3">
                                <h2>Categories</h2>
                                <Button variant="primary btn-sm" size="sm" onClick={handleShow} style={{'height':'30px'}}>
                                    Add Category
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <ul>
                                {getAllCategories(allcategory.category)}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Layouts>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Form className="form-control">
                    <Form.Label >Choose Category</Form.Label>
                    <Form.Select onChange={(e) => setCategory(e.target.value)} className="mb-3" aria-label="--Choose--" style={{'textTransform':'capitalize'}}>
                        <option>--Choose--</option>
                        {
                            renderCategoryList(allcategory.category).map( option =>
                                <option key = {option.value} value = {option.value} style={{'textTransform':'capitalize'}}>{option.name}</option>
                            )
                        }
                    </Form.Select>
                    <Input 
                        type = 'text'
                        label = "Category Name" 
                        placeholder = "Add Name..." 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <Input 
                        type = 'file'
                        label = "Category Image" 
                        Placeholder = "Add Name..." 
                        onChange={(e) => setImage(e.target.files[0])} 
                        // onChange={handleFile} 
                    />

                </Form>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Category;
