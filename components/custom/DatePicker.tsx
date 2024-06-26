"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
    inputName: string;
    fieldName: string;
    defaultValue?: string
}

export function DatePicker({ inputName, fieldName, defaultValue }: Props) {
    const [date, setDate] = React.useState<Date>();

    React.useEffect(() => {
        if (defaultValue) {
            const dateObj = new Date(defaultValue);
            setDate(dateObj)
        }
    }, [defaultValue])

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>{fieldName}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <input
                type="hidden"
                value={date?.toLocaleDateString() || ""}
                name={inputName}
            />
        </div>
    );
}
