import React from 'react'

export default function ErrorText({ text }: { text: string }) {
    return (
        <p aria-live="polite" className="text-sm text-red-400">
            {text}
        </p>
    )
}
