import React, {Fragment, useState} from 'react'

const InputTodo = () => {

    const [ description, setDescription ] = useState("");

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const body = {description};
            console.log(JSON.stringify(body))
            const response = await fetch(
                "http://localhost:5000/todos",
                {
                    method : "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(body)
                })
            window.location = "/";       
        } catch ( error) {
            console.log(error)
        }
    }

  return (
    <Fragment>
        <h1 className='text-center fw-semibold mt-5'>PERN Todo</h1>
        <form onSubmit={(e) => onSubmit(e)} className='d-flex mt-5'>
            <input onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Enter A Task' className='form-control'/>
            <button className='btn bg-primary'>Add</button>
        </form>
    </Fragment>
  )
}

export default InputTodo