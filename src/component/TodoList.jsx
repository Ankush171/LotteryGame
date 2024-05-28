import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    //let [todos,settodos] = useState(["Sample Task"]); // make array of object to give unique Id;
    // THIS IS USED TO ADD ELEMENT IN AN ARRAY;
    let [todos,settodos] = useState([{task: "sample-task", id: uuidv4(),isDone:false}]);
    let [newTodo,setnewTodo] = useState("");

    let addNewTask = () =>{
        settodos((prevTodos) =>{
            return [...prevTodos,{task: newTodo, id: uuidv4(),isDone:false}]
        });
        setnewTodo("");
    }
    let updateTodoValue = (event) => {
        setnewTodo(event.target.value);
    }
// Deleting Element from Array
    let deleteTodo = (id) =>{
        settodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id!=id));
    }

// Updating All in Array
    // let upperCaseAll = () =>{
    //   settodos((todos) => todos.map((todo) => {
    //         return {...todo,
    //             task: todo.task.toUpperCase(),
    //         };
    //     })
    //   );
    // }

    // let lowerCaseAll = () => {
    //     settodos((todos) => 
    //          todos.map((todo) => {
    //           return {...todo,
    //               task: todo.task.toLowerCase(),
    //           };
    //       })
    //     );
    // }

// Update One in Array ...

    // let upperCaseOne = (id)=>{
    //     settodos((todos) => 
    //         todos.map((todo) => {
    //             if(todo.id === id){
    //                 return {...todo,
    //                     task: todo.task.toUpperCase(),
    //                 };
    //             }
    //        else{
    //             return todo;
    //        }
    //     })
    //   );
    // }
    // let lowerCaseOne = (id)=>{
    //     settodos((todos) => 
    //         todos.map((todo) => {
    //             if(todo.id === id){
    //                 return {...todo,
    //                     task: todo.task.toLowerCase(),
    //                 };
    //             }
    //        else{
    //             return todo;
    //        }
    //     })
    //   );
    // }
    // Update one Add
    let markDone = (id)=>{
        settodos((todos) => 
            todos.map((todo) => {
                if(todo.id === id){
                    return {...todo,
                        isDone:true,
                    };
                }
                else{
                    return todo;
                }
        })
      );
    }
    let markAllDone = (id)=>{
        settodos((todos) => 
            todos.map((todo) => {  
                    return {...todo,
                        isDone:true,
                    };
        })
      );
    }
    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br />
            <br />
            <button onClick={addNewTask}>Add  Task</button>
            
            <br />
            <br />

            <hr></hr>
            <h4>TASK LIST</h4>
            <ul>
            {
                todos.map((todo) => (
                   <li key={todo.id}>
                   <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                   &nbsp;&nbsp;&nbsp;
                   <button onClick={() => markDone(todo.id)}>Mark Done</button>
                    </li>       // if we use curly braces then we should return it
                ))
            }
            </ul>

            <button onClick={markAllDone}>Mark All Done</button> 
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={lowerCaseAll}>Lowercase All</button> */}
        </div>
    )
}