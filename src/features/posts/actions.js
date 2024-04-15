import { store } from "../../app/store";
import { postAdded, reactionAdded } from "./postsSlice";

export const setPostAdded = () => store.dispatch(postAdded);

export const setReactionAdded = (postId, reaction) =>
  store.dispatch(reactionAdded({ postId, reaction }));
