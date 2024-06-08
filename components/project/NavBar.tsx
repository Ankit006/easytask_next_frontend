import { getCurrentMember } from "@/queries/queries";
import NavBarItems from "./NavBarItems";

export default async function SideBar({ projectId }: { projectId: string }) {
    const member = await getCurrentMember(projectId)
    return (
        <nav className="inline-block">
            <NavBarItems member={member} />
        </nav>
    );
}
