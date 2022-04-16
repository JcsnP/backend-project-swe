import React from 'react';
import axios from 'axios';
import { Container, Form, Navbar } from "react-bootstrap";
import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brands: [{

            }]
        }
    }

    componentDidMount() {
        this.getBrand()
    }

    getBrand = () => {
        axios.get("http://localhost:8081/admin/get-brands").then((res) => {
            this.setState({ brands: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return(
            <div>
                <Navbar>
                    <Container>
                        <Form.Control as="select" className="mt-2 mb-2" style={{width: '12%'}}>
                            {
                                this.state.brands.map(item => (
                                    <option value={item.brand_id}>{item.brand_name}</option>
                                ))
                            }
                        </Form.Control>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Menu;