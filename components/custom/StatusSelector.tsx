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

interface Props {
    name: string;
}

const statusList = [
    'active',
    'completed',
    'on hold',
    'pending',
    'canceled',
    'under investigation',
];

export default function StatusSelector({ name }: Props) {
    return (
        <Select name={name}>
            <SelectTrigger>
                <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    {statusList.map((status) => (
                        <SelectItem key={status} value={status}>
                            {status}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
