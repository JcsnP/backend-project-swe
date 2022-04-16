    import React from 'react';
    import { Link } from 'react-router-dom';
    import axios from 'axios';
    import { Container, Form } from 'react-bootstrap';
    import AdminProducts from './AdminProducts';

    class Admin extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                brand_id: 0,
            brands: [{

            }]
        }
    }

    componentDidMount() {
        this.getBrand();
    }

    getBrand = () => {
        axios.get("http://localhost:8081/admin/get-brands").then((res) => {
            this.setState({ brands: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });    
    }

    render() {
        console.log('state', this.state.brand_id)
        return(
            <Container className="mt-5">
                <h1>รายการสินค้า</h1>
                <Link to="/create-products" style={{width: '20%', marginBottom: '6px', float: 'right'}} className="btn btn-info">Create Product</Link>
                <Form.Control as="select" className="mt-2 mb-2" name="brand_id" style={{width: '12%'}} onChange={this.handleChange}>
                    <option value={0}>All</option>
                    {
                        this.state.brands.map(item => (
                            <option value={item.brand_id} >{item.brand_name}</option>
                        ))
                    }
                </Form.Control>
                <AdminProducts brand_id={this.state.brand_id} />
            </Container>
            
        );
    }
}

export default Admin;