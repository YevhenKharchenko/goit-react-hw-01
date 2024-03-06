import css from './FriendListItem.module.css';
import clsx from 'clsx';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline, css.status)}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
