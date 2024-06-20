import React from "react";
import { Label } from "../ui/label";
import { DatePicker } from "../custom/DatePicker";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { SprintFormError } from "@/actions/validation";
import ErrorText from "../custom/ErrorText";

interface Props {
    error?: SprintFormError
}


export default function SprintForm({ error }: Props) {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
                <div className="w-full flex flex-col space-y-2">
                    <Label>Start date</Label>
                    <DatePicker fieldName="Start date" inputName="startDate" />
                    {error?.startDate && <ErrorText text={error.startDate[0]} />}
                </div>
                <div className="w-full flex flex-col space-y-2">
                    <Label >End date</Label>
                    <DatePicker fieldName="End date" inputName="endDate" />
                    {error?.endDate && <ErrorText text={error.endDate[0]} />}
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Title</Label>
                <Input name="title" placeholder="Sprint title" />
                {error?.title && <ErrorText text={error.title[0]} />}
            </div>
            <div className="flex flex-col space-y-2">
                <Label>Description (optional)</Label>
                <Textarea name="description" placeholder="Description" />
            </div>
        </div>
    );
}
