import * as React from 'react';
import {Button, Col, Container, Form, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import Jumbotron from './pic.JPG';

export class InputPage extends React.Component{

    constructor() {
        super();
        this.values = {
            name:"",
            age:"",
            height:"",
            bust:"",
            waist:"",
            hips:''
        }
    }


    render(){
        return (<Container >
            <Row>
                <h3>Saaj Designs</h3>
            </Row>
            <Row>
                <Col>
                    <div style={{width:'800px', height:'900px'}}>
                        <Form>
                            <Form.Group controlId="n1">
                                <Form.Control type="text" placeholder="Enter Name"
                                onChange={e=>{this.values.name= e.target.value}}
                                />
                            </Form.Group>

                            <Form.Group controlId="a1">
                                <Form.Control type="number" placeholder="Your Age" onChange={e=>{this.values.age= e.target.value}}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your age with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="h1">
                                <Form.Control type="number" placeholder="Enter Height (in inches)" onChange={e=>{this.values.height= e.target.value}}
                                />
                            </Form.Group>

                            <Form.Group controlId="b1">
                                <Form.Control type="number" placeholder="Enter bust (in inches)" onChange={e=>{this.values.bust= e.target.value}}
                                />
                            </Form.Group>

                            <Form.Group controlId="w1">
                                <Form.Control type="number" placeholder="Enter drop waist value (in inches)" onChange={e=>{this.values.waist= e.target.value}}
                                />
                            </Form.Group>

                            <Form.Group controlId="hi1">
                                <Form.Control type="number" placeholder="Enter drop hips size (in inches)"   onChange={e=>{this.values.hips= e.target.value}}
                                />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={()=>alert("CLICKED"+this.values.name)}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col>
                    <img style={{height:'auto',width:'100%'}} src={ Jumbotron }/>
                </Col>

            </Row>
        </Container>);
    }

}