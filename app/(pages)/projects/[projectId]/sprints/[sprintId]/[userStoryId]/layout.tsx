import SprintUserStorySelector from '@/components/sprints/SprintUserStorySelector';
import React from 'react';

export default function Layout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { projectId: string, sprintId: string }
}>) {
    return (
        <div className='mt-12'>
            <div className='flex justify-end'>
                <SprintUserStorySelector sprintId={parseInt(params.sprintId)} projectId={parseInt(params.projectId)} />
            </div>
            <div className='mt-12'>
                {children}
            </div>
        </div>
    )
}
