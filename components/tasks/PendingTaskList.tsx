"use client"
import useGlobalStore from '@/store/store'
import TaskLists from './TaskLists'

export default function PendingTaskList() {
    const list = useGlobalStore(state => state.pendingTasks)
    return (
        <TaskLists tasks={list} status='pending' />
    )
}
