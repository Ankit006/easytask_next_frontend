"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Send, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ISearchUserFormState } from "@/actions/formState";
import { useFormState } from "react-dom";
import { searchUserAction } from "@/actions/actions";
import ErrorText from "../custom/ErrorText";
import { useParams } from "next/navigation";
import RequestUserList from "./RequestUserCard";
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
                    {state.user && <RequestUserCard user={state.user} />}
                </DialogContent>
            </Dialog>
        </div>
    );
}
