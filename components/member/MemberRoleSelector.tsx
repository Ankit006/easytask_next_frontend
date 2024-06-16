"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { IMember } from "@/models/models";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "../ui/use-toast";
import { changeMemberRoleAction } from "@/actions/memberAction";
interface Props {
    member: IMember;
}
export default function MemberRoleSelector({ member }: Props) {
    const [role, setRole] = useState("");
    const [state, dispatch] = useFormState(changeMemberRoleAction.bind(null, member.userId, member.projectId), {});
    const { pending } = useFormStatus()
    const { toast } = useToast()
    useEffect(() => {
        if (member) {
            setRole(member.role);
        }
    }, [member]);

    function handleValueChange(data: string) {
        const form = new FormData();
        form.append("role", data);
        dispatch(form);
        setRole(data);
    }

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message
            })
        }

        if (state.error) {
            toast({
                title: state.error,
                variant: "destructive"
            })
        }
    }, [state, toast])

    return (
        <Select
            value={role}
            onValueChange={(data) => handleValueChange(data)}
            disabled={member.role === "admin" || pending}
        >
            <SelectTrigger className="w-28">
                <SelectValue placeholder="role" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="moderator">moderator</SelectItem>
                    <SelectItem value="member">member</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
