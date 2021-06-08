import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../Actions/UsersActions";

function UsersList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return <div></div>;
}

export default UsersList;
