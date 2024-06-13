"use client"
import { useFormState } from 'react-dom'
import ColorPicker from '../custom/ColorPicker'
import FormSubmitButton from '../custom/FormSubmitButton'
import { Input } from '../ui/input'
import { createGroupAction } from '@/actions/groupAction'
import ErrorText from '../custom/ErrorText'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useToast } from '../ui/use-toast'

export default function GroupFrom() {
    const params = useParams<{ projectId: string }>()
    const [state, dispatch] = useFormState(createGroupAction.bind(null, params.projectId), {});
    const { toast } = useToast()
    const [groupName, setGroupName] = useState("")
    useEffect(() => {
        if (state.message) {
            setGroupName("")
            toast({
                title: state.message
            })
        }
        if (state.error) {
            toast({
                variant: "destructive",
                title: state.error
            })
        }
    }, [state, toast])

    return (
        <div>
            <form action={dispatch}>
                <div className="flex items-center space-x-4 mb-2">
                    <ColorPicker />
                    <Input
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        name="name"
                        placeholder="name of group"
                    />
                    <FormSubmitButton text='Submit' />
                </div>

                {state.error && <ErrorText text={state.error} />}
            </form>

        </div>
    )
}
