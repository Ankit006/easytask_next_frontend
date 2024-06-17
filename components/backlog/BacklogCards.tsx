import { Card, CardContent } from "@/components/ui/card"
import { IUserStory } from "@/models/models"
import PriorityViewer from "../custom/PriorityViewer"
import UserStoryUpdateDialog from "./UserStoryUpdateDialog"
interface Props {
    backlog: IUserStory
    projectId: string
}


export default function BacklogCards({ backlog, projectId }: Props) {
    return (
        <Card className="sm:max-w-80">
            <CardContent>
                <div className="pt-4">
                    <div className="mb-4">
                        <PriorityViewer priority={backlog.priority} />
                    </div>
                    <h1 className="text-lg font-semibold leading-tight line-clamp-2">{backlog.title}</h1>
                    <p className="font-semibold mt-1 text-xs capitalize">#{backlog.estimateDate}</p>
                    <div className="mt-4 flex justify-end">
                        <UserStoryUpdateDialog projectId={projectId} userStory={backlog} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
