import { createSlice } from '@reduxjs/toolkit'
import { ITask } from '../../../Interface/interface';

const TodoSlice = createSlice({
  name: 'Todo',
  initialState: {
    list: [] as ITask[]

  },

  reducers: {
    addToDo: (state, { payload }: { payload: ITask }) => {
      state.list = state.list.concat(
        {
          ...payload,
          id: Date.now(),
        }
      )
    },

    updateToDo: (state, { payload }: { payload: ITask }) => {
      state.list = state.list.map((todo) => {
        if (todo.id === payload.id) {
          console.log(payload);
          return payload;
        }
        return todo;
      });

    },

    deleteTodo: (state, { payload }: { payload: number }) => {
      state.list = state.list.filter((todo) => {
          console.log(payload);
        return todo.id !== payload;


      });

    }

  }

})

export default TodoSlice;
export const todoSliceAction = TodoSlice.actions;

