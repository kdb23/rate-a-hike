import React, {useState} from "react"; 
import {Container, Row, Col, Button, Form } from 'react-bootstrap'

function ParkForm ({addProject}) {

    const [formData, setFormData]=useState({
        name: "", 
        image: "",
        description: "",
        location: "", 
        size: "", 
        ['highest-point']: "", 
    })

    let handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]:value})
        console.log(formData)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log("it's submitting")
        // post request will go in here, but not yet
        addProject(formData)
    }

    return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Park Name</Form.Label>
                <Form.Control type="text" placeholder="XYZZY National Park" name="name" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Image Link</Form.Label>
                <Form.Control type="text" placeholder="xyzzynationalparkimg.jpg" name="name" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Park Name</Form.Label>
                <Form.Control type="text" placeholder="XYZZY National Park" name="image" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="This park is a beautiful blah blah blah..." name="description" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Beavercreek, OH" name="location" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Size</Form.Label>
                <Form.Control type="text" placeholder="X,XXX sq miles" name="size" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Highest Point</Form.Label>
                <Form.Control type="text" placeholder="Mount BigBoy at XXX feet" name="highest-point" onChange={handleChange}/>.
            </Form.Group>
            <Button variant="primary" type="submit"> Submit Park </Button>
        </Form>
    </Container>
    )
}

export default ParkForm 