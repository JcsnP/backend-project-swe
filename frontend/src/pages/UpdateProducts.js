import axios from 'axios';
import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

var current;

class UpdateProducts extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        p_id: props.match.params.p_id,
        p_name: '',
        p_descrip:'',
        p_qty:'',
        p_img: '',
        p_price: 0,
        p_color: '', 
        p_brand_id: '',
        brand_name: '',
        redirect: null,
        brands: [{

        }]
      }
    }

    componentDidMount(){
      axios.get('http://localhost:8081/admin/edit-products/'+this.state.p_id).then(res => {
        let data = res.data.data[0];
        console.log(data);
        this.setState({
          p_name: data.p_name,
          p_descrip: data.p_descrip,
          p_qty: data.p_qty,
          p_img: data.p_img,
          p_price: data.p_price,
          p_color: data.p_color, 
          p_brand_id: data.p_brand_id,
          brand_name: data.brand_name
        });
      }).catch(error => {
        console.log(error);
      });
   
      current = this.state.p_brand_id;
      this.getBrand();
    }

    handleChange = (e) => {
      console.log(e.target.name, e.target.value);
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
        [name]: value
      });
    }

    getBrand = () => {
        axios.get("http://localhost:8081/admin/get-brands").then((res) => {
            this.setState({ brands: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8081/admin/edit-products', this.state).then(res => {
        console.log(res.data);
        if(res.data.result){
          this.setState({redirect: '/admin'});
        }
      }).catch(error => {
        console.log(error);
      });
    }
    
    render(){
        if (this.state.redirect) {
          return <Redirect to={this.state.redirect} />
        }
        current = this.state.p_brand_id;
        
        console.log('current: ', current);
        return(
            <Container className="mt-5 mb-5">
                <h1>แก้ไขสินค้า</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3"    >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="ชื่อสินค้า" value={this.state.p_name} name="p_name" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control type="text" placeholder="คำอธิบาย" value={this.state.p_descrip} name="p_descrip" onChange={this.handleChange}/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Quantity</Form.Label>
                                <Form.Control type="number" placeholder="จำนวนสินค้า" value={this.state.p_qty} name="p_qty" onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" placeholder="฿ ราคา" value={this.state.p_price} name="p_price" onChange={this.handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="text" placeholder="url" value={this.state.p_img} name="p_img" onChange={this.handleChange}/>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Color</Form.Label>
                                <Form.Control type="text" placeholder="สี" value={this.state.p_color} name="p_color" onChange={this.handleChange}/>
                            </Form.Group>  
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Brand</Form.Label>
                                <Form.Control as="select" name="p_brand_id" onChange={this.handleChange} >
                                    {
                                        
                                        this.state.brands.map(function(item, i) {
                                            if(item.brand_id === current) {
                                                return <option value={item.brand_id} selected>{item.brand_name}</option>
                                            } else {
                                                return <option value={item.brand_id}>{item.brand_name}</option>
                                            }
                                        })
                                    }
                                </Form.Control>
            
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

export default UpdateProducts;

/*
                                    {
                                        this.state.brands.map(item => (
                                            <option value={item.brand_id}>{item.brand_name}</option>
                                        ))
                                    }
*/