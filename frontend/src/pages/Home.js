import React, { useState } from 'react';
import axios from 'axios';
import { Container, Modal, Row, Col, Card, Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import './Home.css';
import Menu from '../components/Menu';
// import ProductDetails from './ProductDetails';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: ""
            }],
            brand: [{

            }],
            product: {},
            show: false, 
            setShow: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.getData();    
    }

    componentDidUpdate(prevProps) {
        if(this.props.brand_id !== prevProps.brand_id) {
            this.setState({ brandID: this.props.brand_id });
            if(Number(this.props.brand_id) === 0) {
                this.getData();
            } else {
                this.getDataByBrand();
            }
        }
    }

    getData = () => {
        axios.get("http://localhost:8081/admin/products").then((res) => {
            this.setState({ data: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    getDataByBrand = () => {
        axios.get("http://localhost:8081/admin/brand/"+ this.props.brand_id).then((res) => {
            this.setState({ data: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    handleDelete = (product_id) => {
        console.log(product_id);
        axios.get('http://localhost:8081/admin/delete-products?product_id=' + product_id).then(res => {
            console.log(res.data);
            if (res.data.result) {
                this.getData();
            }
        }).catch(error => {
            console.log(error);
        });
    }

    handleClose = () => {
        this.setState({show: false});
    }
    
    handleShow = () => {
        this.setState({show: true});
    };
    

    showModal = () => {
        console.log(this.state.product);
        return(
            <Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.state.product.p_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <img src={this.state.product.p_img} style={{ cursor: 'pointer' }}/>
                            </Col>
                            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div>
                                    <p>{this.state.product.p_descrip}</p>
                                    <p><span>สี</span> {this.state.product.p_color}</p>
                                    <p><span>แบรนด์</span> {this.state.product.brand_name}</p>
                                    <p><span>สินค้าคงเหลือ</span> {Number(this.state.product.p_qty).toLocaleString()} ชิ้น</p>
                                    <p><span>ราคา</span> {Number(this.state.product.p_price).toLocaleString()} ฿</p>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary">
                            Buy Now
                        </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </Container>
        );
        
    }

    render() {
        console.log('the props: ', this.props.brand_id , ' this state ', this.state.brandID);
        return (
            <>
                <this.showModal />
                <Container className="mt-5">
                    <h1>สินค้าทั้งหมด</h1>
                    <p>จำนวน {this.state.data.length} ชิ้น</p>
                    <Row>
                        
                        { this.state.data.map(item => (
                            <Col md={3} className="mb-3">
                                <Card style={{ height: '100%', boxShadow: "2px 2px 1px #CFCFCF", cursor: "pointer" }} onClick={() => { this.setState({product: item}); this.handleShow();}} >
                                    <div style={{overflow: 'hidden', height: '200px'}}>
                                        <Card.Img variant="top" className="product_img" src={item.p_img} style={{ disply: 'block', margin: '0 auto', width: '100%' }} />
                                    </div>
                                    <Card.Body style={{width: '100%'}}>
                                        <Card.Title>{item.p_name}</Card.Title>
                                        <Card.Text style={{color: "#A3A3A3"}}>
                                            <p>{item.brand_name}</p>
                                        </Card.Text>
                                        <p className="price">฿ {(Number(item.p_price).toLocaleString())}</p>
                                        <Button variant="primary" style={{width: '100%'}}>Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
            
        )
    }
}

export default Home;