"use client"

import { IGroup } from '@/models/models'
import React, { useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from '../ui/button';
import FormSubmitButton from '../custom/FormSubmitButton';
import { useFormState } from 'react-dom';
import { assingGroupAction } from '@/actions/groupAction';
import ErrorText from '../custom/ErrorText';
import { useToast } from '../ui/use-toast';

interface Props {
    groups: IGroup[]
    projectId: number;
    memberId: number;
}

export default function MemberGroupAssing({ groups, projectId, memberId }: Props) {
    const [state, dispatch] = useFormState(assingGroupAction.bind(null, projectId, memberId), {});
    const { toast } = useToast()
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
        <div className='mt-3'>
            <form className='flex items-center space-x-4 ' action={dispatch}>
                <Select name='groupId' required>
                    <SelectTrigger className="w-80">
                        <SelectValue placeholder="select group" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Groups</SelectLabel>
                            {groups.map((group) => (
                                <SelectItem value={group.id.toString()} key={group.id}>
                                    {group.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <FormSubmitButton text='Assign' />
            </form>
        </div>
    )
}
