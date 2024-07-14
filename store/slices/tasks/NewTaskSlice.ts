import { ITask } from "@/models/models";
import { IGlobalStore, INewTaskSlice } from "@/store/storeTypes";
import { StateCreator } from "zustand";

const newTaskSlice: StateCreator<IGlobalStore, [], [], INewTaskSlice> = (
  set
) => ({
  newTasks: [],
  addNewTask: (task: ITask) =>
    set((state) => ({ newTasks: [...state.newTasks, task] })),
  removeNewTask: (task: ITask) =>
    set((state) => ({
      newTasks: state.newTasks.filter((data) => data.id !== task.id),
    })),
});

export default newTaskSlice;
