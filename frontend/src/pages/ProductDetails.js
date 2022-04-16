import axios from 'axios';
import React from 'react';
import { Redirect } from 'react-router';
import { Container, Form, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProductDetails extends React.Component {
    render() {
        console.log(this.props.productDetails);
        return(
            <h1>hi</h1>
        );
    }
}

export default ProductDetails;