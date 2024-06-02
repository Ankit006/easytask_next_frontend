import { getCurrentMember } from "@/queries/queries";
import NavLinks from "./NavLinks";

export default async function SideBar({ projectId }: { projectId: string }) {
    const member = await getCurrentMember(projectId)
    return (
        <nav>
            <NavLinks member={member} />
        </nav>
    );
}
