"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

interface Props {
    text: string;
    className?: string
}

export default function FormSubmitButton({ text, className }: Props) {
    const { pending } = useFormStatus();

    function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
        if (e.key === "Enter" || e.key === 'NumpadEnter') {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit()
        }
    }

    return (
        <Button className={className} disabled={pending} type="submit" onKeyDown={handleKeyDown}>
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {text}
        </Button>
    );
}
