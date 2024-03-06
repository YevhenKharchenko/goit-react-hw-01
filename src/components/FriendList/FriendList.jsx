import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
