import React from 'react'

export default function List({ todoData, setTodoData }) {

    // const btnStyle = {
    //     color: "#fff",
    //     border: "none",
    //     padding: "5px 9px",
    //     borderRadius: "50%",
    //     cursor: "pointer",
    //     float: "right"
    // }

    // const getStyle = () => {
    //     return {
    //         padding: "10px",
    //         borderBottom: "1px #ccc dotted",
    //         textDecoration: "none"
    //     }
    // }

    // const listStyle = (completed) => {
    //     return {
    //         padding: "10px",
    //         borderBottom: "1px #ccc dotted",
    //         textDecoration: completed ? "line-through" : "none"
    //     }
    // }

    const handleCompleChange = (id) => {
        let newTodoData = todoData.map(data => {
            if (data.id === id) data.completed = !data.completed;
            return data;
        })
        setTodoData(newTodoData);
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        console.log('newTodoData', newTodoData);
        setTodoData(newTodoData);
    }

    return (
        <div>
            {todoData.map(data => (
                <div key={data.id}>
                    <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
                        <div className='items-center'>
                            <input
                                type='checkbox'
                                onChange={() => handleCompleChange(data.id)}
                                defaultChecked={data.completed} 
                                /> {" "}
                             <span className={data.completed ? "line-through" :undefined }> {data.title}</span>
                        </div>
                        <div className='items-center'>
                            <button onClick={() => handleClick(data.id)}>
                                x
                            </button>
                        </div>

                    </div>
                </div>
            ))
            }
        </div>
    )
}
