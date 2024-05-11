import React from 'react'

export default function Project({ params }: { params: { projectId: string } }) {
    const projectId = params.projectId;
    return (
        <div>{projectId}</div>
    )
}
