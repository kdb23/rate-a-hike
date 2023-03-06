import React, {useState} from "react"; 

function ParkForm ({addProject}) {

    const [formData, setFormData]=useState({
        name: "", 
        image: "",
        description: "",
        location: "", 
        size: "", 
        ['highest-point']: "", 
        ['hike-name']: "",
        ['hike-length']: "",
        ['hike-description']: "", 
    })

    let handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData({...formData, [name]:value})
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log("it's submitting")
        // post request will go in here, but not yet
        addProject(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name </label> 
            <input type="text" name="name" onChange={handleChange} placeholder="Park Name"></input>
            <label> Image Link </label> 
            <input type="text" name="image" onChange={handleChange} placeholder="Image Link"></input>
            <label> Description </label> 
            <input type="text" name="description" onChange={handleChange} placeholder="Share some park details"></input>
            <label> Location </label> 
            <input type="text" name="location" onChange={handleChange} placeholder="Beavercreek, OH"></input>
            <label> Size </label> 
            <input type="text" name="size" onChange={handleChange} placeholder="XXX sq feet"></input>
            <label> Highest Point </label> 
            <input type="text" name="highest-point" onChange={handleChange} placeholder="Mount BigBoy at XXX feet "></input>
            <label> Hike Name </label> 
            <input type="text" name="hike-name" onChange={handleChange} placeholder="Favorite trial name"></input>
            <label> Hike Length </label> 
            <input type="text" name="hike-length" onChange={handleChange} placeholder="X.X miles"></input>
            <label> Hike Description </label> 
            <input type="text" name="hike-description" onChange={handleChange} placeholder="Tell us a little about the hike!"></input>
            <button onClick={handleSubmit}>SUBMIT</button>
        </form>
    )
}

export default ParkForm 