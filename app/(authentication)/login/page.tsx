"use client";

import { loginAction } from "@/actions/authAction";
import { ILoginFromState } from "@/actions/formState";
import FormSubmitButton from "@/components/custom/FormSubmitButton";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

export default function Login() {
    const currentState: ILoginFromState = {};
    const [state, dispatch] = useFormState(loginAction, currentState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message,
                variant: "destructive",
            });
        }
    }, [state.message, toast]);

    return (
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Please fill the below form for login</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={dispatch} className="grid w-full items-center gap-4">
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
                            <span className="text-xs text-slate-500 dark:text-gray-300">
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
                    <div className="flex justify-end">
                        <FormSubmitButton text="register" />
                    </div>
                    <p className="text-center text-sm text-slate-700 dark:text-white mt-4">
                        Do not have an account?{" "}
                        <Link className="text-slate-900 dark:text-white font-semibold" href="/register">
                            Register
                        </Link>
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}
