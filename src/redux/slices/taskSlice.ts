import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface ITaskDetailState {
    id?: number;
    description?: string;
    isImportant?: boolean;
    isCompleted?: boolean;
}

interface ITaskStates extends Array<ITaskDetailState> { }

interface ITask {
    task: ITaskStates;
}

const initialState: ITask = {
    task: [],
}

export const taskSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITaskDetailState>) => {
            state.task.push(action.payload);
        }
    }
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
