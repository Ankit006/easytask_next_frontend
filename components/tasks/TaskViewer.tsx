import { ITask } from '@/models/models'
import TaskLists from './TaskLists'

interface Props {
    tasks: ITask[]
}

export default function TaskViewer({ tasks }: Props) {
    return (
        <div className='flex justify-between space-x-8'>
            <TaskLists tasks={tasks} status='new' />
            <TaskLists tasks={tasks} status='active' />
            <TaskLists tasks={tasks} status='pending' />
            <TaskLists tasks={tasks} status='on hold' />
            <TaskLists tasks={tasks} status='under investigation' />
            <TaskLists tasks={tasks} status='completed' />
            <TaskLists tasks={tasks} status='canceled' />

        </div>
    )
}
