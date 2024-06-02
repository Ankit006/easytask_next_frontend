
import { getNotifications, getUser } from '@/queries/queries';
import NotificationList from './NotificationList';
import NotificationAlert from './NotificationAlert';

export default async function Notifications() {
    const user = await getUser();
    const notificaitons = await getNotifications()
    return (
        <div>
            <NotificationAlert userId={user.id} />
            <NotificationList notifications={notificaitons} userId={user.id} />
        </div>
    )
}
