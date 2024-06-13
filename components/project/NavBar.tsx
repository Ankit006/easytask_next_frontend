import { getCurrentMember } from "@/queries/queries";
import NavBarItems from "./NavBarItems";

export default async function Navbar({ projectId }: { projectId: string }) {
    const member = await getCurrentMember(projectId)
    return (
        <nav className="inline-block">
            <NavBarItems member={member} />
        </nav>
    );
}
