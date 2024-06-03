"use client";
import { ISearchUserFormState } from "@/actions/formState";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Send } from "lucide-react";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { searchUserAction } from "@/actions/memberAction";
import { useParams } from "next/navigation";
import ErrorText from "../custom/ErrorText";
import RequestUserCard from "./RequestUserCard";

export default function RequestUser() {
    const actionState: ISearchUserFormState = {};
    const [state, dispatch] = useFormState(searchUserAction, actionState);
    const params = useParams<{ projectId: string }>();
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex justify-end">
                        <Button>
                            <Send className="mr-2 w-4 h-4" /> Send request
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Search user by email</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col space-y-3">
                        <form action={dispatch}>
                            <div className="flex items-center space-x-4">
                                <Input
                                    id="email"
                                    autoComplete="email"
                                    placeholder="Search user by mail"
                                    name="email"
                                    type="email"
                                />
                                <Button>
                                    <Search className="w-4 h-4" />
                                </Button>
                            </div>
                            <input type="hidden" value={params.projectId} name="project_id" />
                        </form>
                        {state.error && <ErrorText text={state.error.email[0]} />}
                        {state.message && <ErrorText text={state.message} />}
                    </div>
                    {state.user && <RequestUserCard user={state.user} projectId={params.projectId} />}
                </DialogContent>
            </Dialog>
        </div>
    );
}
