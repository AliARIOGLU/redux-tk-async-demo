import { Link } from "react-router-dom";
import { selectAllUsers } from "./usersSlice";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>

      <ul className="user-list">{renderedUsers}</ul>
    </section>
  );
};

export default UserList;
