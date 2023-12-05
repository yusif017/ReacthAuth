import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/AuthAction';

export default function HomePage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Çıkış bilgisini Redux'a gönder
    dispatch(logout());
  };

  if (!user) {
    return <div>No user logged in.</div>;
  }

  return (
    <div>
      <h2>User Info</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.token}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
