import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';
import { Container, Form, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CreateProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p_name: '',
      p_descrip: '',
      p_qty:'',
      p_price: 0,
      p_img:'',
      p_color: '', 
      p_brand_id: '',
      redirect: null
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/admin/add-products', this.state).then(res => {
      console.log(res.data);
      if (res.data.result) {
        this.setState({ redirect: '/admin' });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  backHome = () => {
    return <Link to="/admin" />
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
        <Container className="mt-5">
        <h1>เพิ่มสินค้า</h1>
        <Form onSubmit={this.handleSubmit} className="mt-3">
                <Form.Group className="mb-3"    >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="ชื่อสินค้า" name="p_name" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control type="text" placeholder="คำอธิบาย" name="p_descrip" onChange={this.handleChange}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control type="number" placeholder="จำนวนสินค้า" name="p_qty" onChange={this.handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="number" placeholder="฿ ราคา" name="p_price" onChange={this.handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="text" placeholder="url" name="p_img" onChange={this.handleChange}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Color</Form.Label>
                            <Form.Control type="text" placeholder="สี" name="p_color" onChange={this.handleChange}/>
                        </Form.Group>  
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Product Brand</Form.Label>
                            <Form.Control type="text" placeholder="แบรนด์" name="p_brand_id" onChange={this.handleChange}/>
                        </Form.Group>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <Link to="/admin" className="btn-danger">
                            <Button variant="danger"  style={{width: '100%'}}>
                                Cancel
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit" style={{width: '100%'}}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
  }
}

export default CreateProducts;