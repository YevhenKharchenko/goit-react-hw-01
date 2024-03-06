import css from './Profile.module.css';

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileWrapper}>
      <div className={css.profileImgWrapper}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
