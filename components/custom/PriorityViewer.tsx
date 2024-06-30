import { priority } from '@/models/models'
import clsx from 'clsx'
import React from 'react'

export default function PriorityViewer({ priority }: { priority: priority }) {
    return (
        <div className={clsx(`text-sm font-semibold capitalize`, {
            "text-green-500": priority === "low",
            "text-yellow-500": priority === "medium",
            "text-red-500": priority === "high"
        })}>{priority}</div>
    )
}
