"use client";


import { IResgisterFormState } from "@/actions/formState";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";
import { registerAction } from "@/actions/actions";
import FormSubmitButton from "@/components/custom/FormSubmitButton";

export default function Register() {
    const currentState: IResgisterFormState = {};
    const [state, dispatch] = useFormState(registerAction, currentState);
    const { toast } = useToast()

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message,
                variant: "destructive",
            })
        }
    }, [state.message, toast])

    return (
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                    Please fill the below form for registration
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action={dispatch} className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="fullname">Full name</Label>
                        <Input
                            id="fullname"
                            autoComplete="name"
                            placeholder="Your full name"
                            name="name"
                        />
                        {state.error && state.error.name ? (
                            <p aria-live="polite" className="text-sm text-red-600">
                                {state.error.name[0]}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            autoComplete="email"
                            placeholder="Your email"
                            name="email"
                            type="email"
                        />
                        {state.error && state.error.email ? (
                            <p aria-live="polite" className="text-sm text-red-600">
                                {state.error.email[0]}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="password">
                            Password{" "}
                            <span className="text-xs text-slate-500">
                                (at least 8 characters)
                            </span>
                        </Label>
                        <Input
                            id="password"
                            placeholder="Your password"
                            type="password"
                            name="password"
                            autoComplete="new-password"
                        />
                        {state.error && state.error.password ? (
                            <p aria-live="polite" className="text-sm text-red-600">
                                {state.error.password[0]}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="confirm_password">Confirm password</Label>
                        <Input
                            id="confirm_password"
                            placeholder="confirm password"
                            type="password"
                            name="confirm_password"
                        />
                        {state.error && state.error.confirm_password ? (
                            <p aria-live="polite" className="text-sm text-red-600">
                                {state.error.confirm_password[0]}
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <FormSubmitButton text="register" />
                    </div>
                    <p className="text-center text-sm text-slate-700 mt-4">
                        Already have an account?{" "}
                        <Link className="text-slate-900 font-semibold" href="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
