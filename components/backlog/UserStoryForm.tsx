import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PrioritySelector from "../custom/PrioritySelector";
import StatusSelector from "../custom/StatusSelector";
import { DatePicker } from "../custom/DatePicker";
import { UserStoryFormError } from "@/actions/validation";
import ErrorText from "../custom/ErrorText";



export default function UserStoryForm({ error }: { error?: UserStoryFormError }) {
    return (
        <div className="flex flex-col space-y-4 w-full">
            <div className="flex flex-col space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="User story title" />
                {error?.title && <ErrorText text={error.title[0]} />}
            </div>
            <div className="flex flex-col space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                    id="description"
                    name="description"
                    placeholder="User story description"
                />
                {error?.description && <ErrorText text={error.description[0]} />}

            </div>
            <div className="flex items-center space-x-4">
                <div className="flex flex-col space-y-2 w-full">
                    <Label htmlFor="priority">Priority</Label>
                    <PrioritySelector name="priority" />
                    {error?.priority && <ErrorText text={error.priority[0]} />}

                </div>

                <div className="flex flex-col space-y-2 w-full">
                    <Label className="status">Status</Label>
                    <StatusSelector name="status" />
                    {error?.status && <ErrorText text={error.status[0]} />}

                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <Label className="estimate_date">Estimate date</Label>
                <DatePicker fieldName="Estimate date" inputName="estimate_date" />
                {error?.estimate_date && <ErrorText text={error.estimate_date[0]} />}
            </div>
        </div>
    );
}
