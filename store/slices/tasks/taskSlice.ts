import { ITask, status } from "@/models/models";
import { IGlobalStore, ITaskSlice } from "@/store/storeTypes";
import { StateCreator } from "zustand";

const taskSlice: StateCreator<IGlobalStore, [], [], ITaskSlice> = (
  set,
  get,
) => ({
  tasks: [],
  addTaskList: (taskList: ITask[]) => set((state) => ({ tasks: taskList })),
  addTask: (task: ITask) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (task: ITask) =>
    set((state) => ({
      tasks: state.tasks.filter((data) => data.id !== task.id),
    })),
  updateStatus: (taskId: number, status: status) => {
    const newList = [...get().tasks];
    for (let task of newList) {
      if (task.id === taskId) {
        task.status = status;
        break;
      }
    }
    get().addTaskList(newList);
  },
});

export default taskSlice;
