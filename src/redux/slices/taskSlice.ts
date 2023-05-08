import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface ITaskDetailState {
    id: number;
    description: string;
    isImportant: boolean;
    isComplete: boolean;
}

interface ITaskState {
    task: ITaskDetailState | undefined;
}

const initialState: ITaskState = {
    task: undefined,
};

export const taskSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setTask: (state, action: PayloadAction<ITaskDetailState>) => {
            state.task = action.payload;
        }
    }
});

export const { setTask } = taskSlice.actions;

export default taskSlice.reducer;
