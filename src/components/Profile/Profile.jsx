import PropTypes from 'prop-types';
import css from './Profile.module.css';


export const Profile = ({ avatar, username, tag, location, stats: { followers, views, likes },
}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt="User avatar" className={css.avatar} />
                <p className={css.profileName}>{username}</p>
                <p className={css.profileTag}>@{tag}</p>
                <p className={css.profileLocation}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.followersList}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.viewsList}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li className={css.likesList}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

// {/* <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>; */}