import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthContext';

const Profile = ({handleSignOut}) => {
    const {user} = useContext(AuthContext);
    return (
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
          <img
            alt={user.displayName}
            src={user.photoURL} 
            className="w-full" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li onClick={handleSignOut}><a className="hover:bg-red-400 text-[16px] font-bold">Logout</a></li>
      </ul>
    </div>
  
    );
};

export default Profile;