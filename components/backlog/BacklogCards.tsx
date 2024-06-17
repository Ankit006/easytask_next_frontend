import { IUserStory } from "@/models/models"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings2 } from "lucide-react"
interface Props {
    backlog: IUserStory
}


export default function BacklogCards({ backlog }: Props) {
    return (
        <Card className="sm:max-w-80">
            <CardHeader>
                <CardTitle className="text-lg">{backlog.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-sm flex items-center justify-between">
                    <p>Status - {backlog.status}</p>
                    <p>Priority - {backlog.priority}</p>
                </div>
                <div className="mt-4 flex justify-end">
                    <button>
                        <Settings2 className="w-4 h-4" />
                    </button>
                </div>
            </CardContent>
        </Card>
    )
}
