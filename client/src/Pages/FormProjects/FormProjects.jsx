import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProject } from "../../Redux/Slicers/projectSlicer"
import { validations } from "./Errors";
//import { useForm } from 'react-hook-form';

export default function FormProjects() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
        name: "",
        title: "",
        description: "",
        image: "",
        location: "",
      });
    
  useEffect(() => {
              
    },[]);
        
    function handleSubmit(e) {
            e.preventDefault();
            let projectCreated = {
              name: input.name,
              title: input.title,
              description: input.description,
              image: input.image,
              deleted: false,
              location: input.location
            }
            console.log(projectCreated);
            dispatch(postProject(projectCreated));
            setInput({
              name: "",
              title: "",
              description: "",
              image: "",
              location: "",
            })
            alert('Project successfully created')
    }
    
    function handleChange(e) {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
        setErrors(
          validations({
            ...input,
            [e.target.name]: e.target.value
          })
        )
    }

  return (
    <div>
      <br />
      <h2>
        Here you can submit your projects so that we can help your community
      </h2>
      <br />
      <form>
        <div>
          <label>Name of the project: </label>
          <input
            type="text"
            name="name"
            placeholder="Here goes the name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          /> {errors.name && (<p>{errors.name}</p>)}
        </div>
        <br />
        <div>
          <label>Title of the project: </label>
          <input
            type="text"
            name="title"
            placeholder="Here goes the title"
            value={input.title}
            onChange={(e) => handleChange(e)}
          /> {errors.title && (<p>{errors.title}</p>)}
        </div>
        <br />
        <div>
          <label>Description of the project: </label>
          <input
            type="text"
            name="description"
            placeholder="Here goes the description"
            value={input.description}
            onChange={(e) => handleChange(e)}
          /> {errors.description && (<p>{errors.description}</p>)}
        </div>
        <br />
        <div>
          <label>Image of the project: </label>
          <input
            type="text"
            name="image"
            placeholder="Here goes the URL"
            value={input.image}
            onChange={(e) => handleChange(e)}
          /> {errors.image && (<p>{errors.image}</p>)}
        </div>
        <br />
        <div>
          <label>Location of the project: </label>
          <input
            type="text"
            name="location"
            placeholder="Here goes the location"
            value={input.location}
            onChange={(e) => handleChange(e)}
          /> {errors.location && (<p>{errors.location}</p>)}
        </div>
        <br />
         <div>
            {       
              (!input.name || !input.title || !input.description || !input.image || !input.location)
              || (errors.name || errors.title || errors.description || errors.image || errors.location) 
              ? null : <button type="submit" onClick={(e) => handleSubmit(e)}> Upload proposal </button>
                }
          </div>
      </form>
    </div>
  );
}

//Solo el achivo index de Pages recibe este export
