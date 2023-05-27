import React, { useState } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js"

const EditTodo = ({todo}) => {

    const [description, setDescription] = useState(todo.description);

    const updateTodo = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,
            {
                method : "PUT",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(body)
            });
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="btn-close" onClick={() => setDescription(todo.description)} data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <input value={description} onChange={(e) => setDescription(e.target.value)} type='text' className='form-control'/>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" onClick={(e) => updateTodo(e)} data-bs-dismiss="modal" >Edit</button>
                            <button type="button" className="btn btn-danger" onClick={() => setDescription(todo.description)}  data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTodo