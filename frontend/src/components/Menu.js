import React from 'react';
import axios from 'axios';
import { Container, Form, Navbar, Button, Badge } from "react-bootstrap";
import './Menu.css';
import Home from "../pages/Home";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand_id: 0,
            brands: [{

            }],
            cart: 0
        }
    }

    componentDidMount() {
        this.getBrand()
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

    addItem = () => {
        let current_cart = this.state.cart;
        this.setState({cart: current_cart + 1})
    }

    render() {
        console.log(this.props.new_item);
        return(
            <div> 
                <Navbar>
                    <Container>
                        <Form.Control as="select" className="mt-2 mb-2 selectBrand" name="brand_id" style={{width: '12%'}} onChange={this.handleChange}>
                            <option value={0}>All</option>
                            {
                                this.state.brands.map(item => (
                                    <option value={item.brand_id} >{item.brand_name}</option>
                                ))
                            }
                        </Form.Control>
                        <Button variant="light" style={{border: '1px solid #000'}}>
                            Cart <Badge bg="dark">{this.state.cart}</Badge> ชิ้น
                        </Button>
                    </Container>
                </Navbar>
                <Home brand_id={this.state.brand_id} addItem={this.addItem}  />
            </div>
        );
    }
}

export default Menu;