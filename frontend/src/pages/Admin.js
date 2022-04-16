import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, Table } from 'react-bootstrap';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: ""
            }]
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get("http://localhost:8081/admin/products").then((res) => {
            this.setState({ data: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    handleDelete = (p_id) => {
        console.log(p_id);
        axios.get('http://localhost:8081/admin/delete-products?p_id=' + p_id).then(res => {
            console.log(res.data);
            if (res.data.result) {
                this.getData();
            }
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <Container className="mt-5">
                <h1>รายการสินค้า</h1>
                <p>จำนวน {this.state.data.length} ชิ้น</p>
                <Link to="/create-products" style={{width: '20%', marginBottom: '6px', float: 'right'}} className="btn btn-info">Create Product</Link>
                <Table striped bordered hover>
                    <thead>
                        <tr style={{textAlign: "center"}}>
                            <th>ID</th>
                            <th>ชื่อสินค้า</th>
                            <th>รูปภาพ</th>
                            <th>ราคา</th>
                            <th>จัดการ</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.data.map(item => (
                            <tr>
                                <td>{item.p_id}</td>
                                <td>{item.p_name}</td>
                                <td>{item.p_img}</td>
                                <td>{item.p_price}</td>
                                <td>
                                    <Link style={{width: '100%', marginBottom: '4px'}} to={"/update-products/" + item.p_id} className="btn btn-info">Update</Link>
                                    <button style={{width: '100%', marginBottom: '4px'}} className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(item.p_id) }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Admin;