import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Save, UsersRound } from "lucide-react";
import { Input } from "@/components/ui/input"
import { getGroups } from "@/queries/queries";


export default async function CreateGroup({ projectId }: { projectId: string }) {
    const groups = getGroups(projectId)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <UsersRound className="mr-2 w-4 h-4" />
                    Create group
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[424px]">
                <DialogHeader>
                    <DialogTitle>Create group</DialogTitle>
                </DialogHeader>
                <div>
                    <form action="" className="flex items-center space-x-4">
                        <Input
                            name="group"
                            placeholder="name of group"
                        />
                        <Button>
                            <Save className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
