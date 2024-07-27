import Return from '@/components/custom/Return';
import SprintBar from '@/components/sprints/SprintBar';
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
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-8'>
                    <Return />
                    <SprintBar sprintId={parseInt(params.sprintId)} projectId={parseInt(params.projectId)} />
                </div>
            </div>
            <div className='mt-12'>
                {children}
            </div>
        </div>
    )
}
