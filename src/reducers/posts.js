export default function posts(
  state = { isLoading: true, posts: [], post: [] },
  action
) {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case "FETCH_ALL":
      state = {
        ...state,
        posts: action.payload.data,
        post: action.payload.data[0],
      };
      return state;
    case "FETCH_POST":
      return { ...state, post: action.payload.data[0] };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return posts;
  }
}
