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
        fetch('http://localhost:3002/parks', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r)=>r.json())
        .then(addProject)

        e.target.reset()

        console.log("it's submitting")
    }

    return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Park Name</Form.Label>
                <Form.Control type="text" placeholder="Park Name" name="name" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Park Image</Form.Label>
                <Form.Control type="text" placeholder="Park Image" name="image" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Descirption of Park" name="description" onChange={handleChange}/>.
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Park Location" name="location" onChange={handleChange}/>.
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