import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../Store/config';
import { ITask } from '../../../Interface/interface'
import { todoSliceAction } from '../ruducer/TodoSlice';

export default function List() {
  const list = useSelector((state: RootState) => state.todo.list);
  const dispatch = useDispatch();
  

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>

          </tr>
        </thead>
        <tbody>
          {
            list.map((elem) => (
              <tr>
                <th scope="row">1</th>
                <td key={elem.id}>{elem.title}</td>
                <td><Link to={`/Form/${elem.id}`}><button>Edit</button></Link></td>
                <td><button onClick={() => dispatch(todoSliceAction.deleteTodo(elem.id))}>Delete</button></td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  )
}

