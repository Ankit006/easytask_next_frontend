"use client"
import useGlobalStore from '@/store/store'
import TaskLists from './TaskLists'

export default function InvestigationTaskList() {
    const list = useGlobalStore(state => state.investigationTasks)
    return (
        <TaskLists tasks={list} status='under investigation' />
    )
}
