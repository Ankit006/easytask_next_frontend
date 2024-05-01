"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

interface Props {
    text: string;
}

export default function FormSubmitButton({ text }: Props) {
    const { pending } = useFormStatus();

    function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
        if (e.key === "Enter" || e.key === 'NumpadEnter') {
            e.preventDefault();
            e.currentTarget.form?.requestSubmit()
        }
    }

    return (
        <Button disabled={pending} type="submit" onKeyDown={handleKeyDown}>
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {text}
        </Button>
    );
}
