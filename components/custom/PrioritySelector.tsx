import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { priority } from "@/models/models";

interface Props {
    name: string;
    defaultValue?: priority
}

const priorities = ["low", "medium", "high"];

export default function PrioritySelector({ name, defaultValue }: Props) {
    return (
        <Select name={name} defaultValue={defaultValue}>
            <SelectTrigger>
                <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    {priorities.map((priority) => (
                        <SelectItem key={priority} value={priority}>
                            {priority}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
