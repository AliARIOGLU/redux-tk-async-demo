import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectByUserId } from "./usersSlice";
import { selectAllPosts } from "../posts/postsSlice";

const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectByUserId(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <div>
      {user && (
        <>
          <h3>{user.name}'s Posts</h3>
          <ul>{postTitles}</ul>
        </>
      )}
    </div>
  );
};

export default UserPage;
