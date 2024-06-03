"use client";

import { createProjectAction } from "@/actions/projectAction";
import ErrorText from "@/components/custom/ErrorText";
import FormSubmitButton from "@/components/custom/FormSubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useFormState } from "react-dom";
export default function ProjectForm() {
    const [state, dispatch] = useFormState(createProjectAction, {});

    return (
        <main className="rounded-md px-6 py-4 ">
            <form action={dispatch} className="grid w-full items-center gap-8">
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="title">Project title</Label>
                    <Input
                        id="title"
                        name="title"
                        className="border-gray-300"
                        autoComplete="organization-title"
                    />
                    {state.error && state.error.title ? (
                        <ErrorText text={state.error.title[0]} />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="description">Project description</Label>
                    <Textarea
                        id="description"
                        className="border-gray-300"
                        rows={8}
                        name="description"
                    />
                    {state.error && state.error.description ? (
                        <ErrorText text={state.error.description[0]} />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="flex justify-end">
                    <FormSubmitButton text="Submit" />
                </div>
            </form>
        </main>
    );
}
