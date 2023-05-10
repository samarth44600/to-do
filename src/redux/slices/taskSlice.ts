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
    completedTask: ITaskStates;
}

const initialState: ITask = {
    task: [],
    completedTask: [],
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
        },
        setCompleted: (state, action: PayloadAction<number>) => {
            const index = state.task.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.task[index].isCompleted = !state.task[index].isCompleted;
                state.completedTask.push(state.task[index]);
                state.task.splice(index, 1);

            }
        },
        setIncomplete: (state, action: PayloadAction<number>) => {
            const index = state.completedTask.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.completedTask[index].isCompleted = !state.completedTask[index].isCompleted;
                state.task.push(state.completedTask[index]);
                state.completedTask.splice(index, 1);
            }
        },
        setImportant: (state, action: PayloadAction<number>) => {
            const index = state.task.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.task[index].isImportant = !state.task[index].isImportant;
            }
        }
    }
});

export const { addTask, deleteTask, setCompleted, setIncomplete, setImportant } = taskSlice.actions;

export default taskSlice.reducer;
