import { Profile } from 'components/Profile/Profile';
import user from 'base/user.json';


export const App = () => {
  return (<div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>);
}

// export const App = ({ children }) => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       {children}
//     </div>
//   );
// };
