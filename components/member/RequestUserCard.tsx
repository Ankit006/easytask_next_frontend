"use client";
import { IUser } from "@/models/models";
import FormSubmitButton from "../custom/FormSubmitButton";
import { useFormState } from "react-dom";
import { inviteUserAction } from "@/actions/actions";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";

interface Props {
    user: IUser;
    projectId: string;
}

export default function RequestUserCard({ user, projectId }: Props) {
    const [state, dispatch] = useFormState(inviteUserAction.bind(null, user.id, parseInt(projectId)), {})
    const { toast } = useToast()
    useEffect(() => {
        if (state.message) {
            toast({ title: state.message })
        }
        if (state.error) {
            toast({ title: state.error, variant: "destructive" })
        }
    }, [state, toast])
    return (
        <div className="border border-gray-300 rounded p-4">
            <p className="text-sm font-medium">{user.name}</p>

            <div className="mt-2 flex justify-end">
                <form action={dispatch}>
                    <FormSubmitButton text="Send" />
                </form>
            </div>
        </div>
    );
}
