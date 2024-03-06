import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friend}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
}

export default FriendListItem;
