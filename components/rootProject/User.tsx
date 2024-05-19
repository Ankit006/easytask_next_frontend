import { getUser } from "@/queries/queries";
import Image from "next/image";

export default async function User() {
    const user = await getUser();
    return (
        <div className="flex items-center space-x-4">
            <div className="text-right">
                <p className="capitalize  font-semibold">{user.name}</p>
            </div>
            <Image
                priority
                src="/user_icon.png"
                alt="user icon"
                width="50"
                height="50"
            />
        </div>
    );
}
