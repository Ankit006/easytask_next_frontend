import { cn } from '@/lib/utils'
import { priority } from '@/models/models'
import clsx from 'clsx'
import React from 'react'

export default function PriorityViewer({ priority, className }: { priority: priority, className?: string }) {
    return (
        <div className={cn(`text-sm font-semibold capitalize`, className, {
            "text-green-500": priority === "low",
            "text-yellow-500": priority === "medium",
            "text-red-500": priority === "high"
        })}>{priority}</div>
    )
}
