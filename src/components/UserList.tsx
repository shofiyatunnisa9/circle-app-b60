import { User } from "../types/user";

//interface untuk array user list
interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul id="user-list">
      {users.map((user) => (
        <li>
          <h2>{user.username}</h2>
          <p>email: {user.email}</p>
          <p>password:{user.password}</p>
        </li>
      ))}
    </ul>
  );
}
