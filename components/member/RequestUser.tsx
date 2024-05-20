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

export default function RequestUser() {
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
                    <div>
                        <form action="" >
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
                        </form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
