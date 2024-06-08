'use client';

import { Button } from "@/components/ui/button";
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main >
            <h2 className="text-center mb-4">{error.message}</h2>
            <Button onClick={() => reset()}>
                Try again
            </Button>
        </main>
    );
}