import { getSprintUserStories } from '@/queries/queries'
import React from 'react'

export default async function SprintUserStories({ sprintId }: { sprintId: number }) {
    const userStories = await getSprintUserStories(sprintId)
    return (
        <div>SprintUserStories</div>
    )
}
