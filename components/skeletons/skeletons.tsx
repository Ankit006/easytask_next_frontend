import React from 'react'
import { Skeleton } from '../ui/skeleton'

export function NavBarSketon() {
    return (
        <Skeleton className=" w-80 h-8 rounded-lg" />
    )
}


export function TableSkeleton() {
    return <div className='flex flex-col w-full space-y-4'>
        <Skeleton className='w-full h-12 rounded-lg' />
        <Skeleton className='w-full h-12 rounded-lg' />
        <Skeleton className='w-full h-12 rounded-lg' />
        <Skeleton className='w-full h-12 rounded-lg' />
        <Skeleton className='w-full h-12 rounded-lg' />
        <Skeleton className='w-full h-12 rounded-lg' />
    </div>
}