"use client"
import useGlobalStore from '@/store/store'
import TaskLists from './TaskLists'

export default function NewTaskList() {
    const list = useGlobalStore(state => state.newTasks);
    return (
        <TaskLists tasks={list} status='new' />
    )
}
