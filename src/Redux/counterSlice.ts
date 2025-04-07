import { createSlice } from '@reduxjs/toolkit'
import { users } from '../Data/Users'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: users.length,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1
    }
  },
})

export const { decrement } = counterSlice.actions

export default counterSlice.reducer