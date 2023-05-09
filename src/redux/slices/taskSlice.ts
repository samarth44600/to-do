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
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITaskDetailState>) => {
            // let lastId = state.task[state.task.length - 1] ? state.task[state.task.length - 1].id : 0;
            // console.log("is of last task", lastId);

            const newTask = {
                id: state.task.length + 1,
                description: action.payload.description,
                isImportant: false,
                isCompleted: false,
            }
            state.task.push(newTask);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            const index = state.task.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.task.splice(index, 1);
            }



        }



    }
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
