
import React, { ChangeEvent, useState } from 'react';
import ReactDOM from 'react-dom';



export default function HomePage() {
  const [task, setTask] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
  setTask(event.target.value);  };


  return (
    <div className='container'>
      <form>
        <input className="form-control" type="text" placeholder="Default input"  aria-label="default input example" onChange={handleChange}></input>
        <button>Add Task</button>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault" />
          Todo List
        </div>
      </form>
    </div >
  )
}
