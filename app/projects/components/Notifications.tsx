
import { getUser } from '@/queries/queries';
import NotificationList from './NotificationList';

export default async function Notifications() {
    const user = await getUser();
    return (
        <div>
            <NotificationList userId={user.id} />
        </div>
    )
}
