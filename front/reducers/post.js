import shortId from "shortid";
import {
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENTS_REQUEST,
  ADD_COMMENTS_SUCCESS,
  ADD_COMMENTS_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
} from "../constants/post";
import produce from "immer";
import faker from "faker";

export const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostFailure: null,
  addPostLoading: false,
  addPostDone: false,
  addPostFailure: null,
  removePostLoading: false,
  removePostDone: false,
  removePostFailure: null,
  addCommentsLoading: false,
  addCommentsDone: false,
  addCommentsFailure: null,
};
export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Images: [{ src: "https://picsum.photos/200/300" }],
      Comments: [
        {
          id: shortId.generate(),
          User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));

export const addPost = (data) => {
  return {
    type: ADD_POST_REQUEST,
    data,
  };
};

export const addComments = (data) => {
  return {
    type: ADD_COMMENTS_REQUEST,
    data,
  };
};

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "eunhee",
  },
  Comments: [
    {
      User: {
        nickname: "neee",
      },
      content: "하잉",
    },
    {
      User: {
        nickname: "heeeu",
      },
      content: "잘보고 갑니다 ><",
    },
  ],
  Images: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "eunhee",
  },
});

const rootReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostFailure = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostFailure = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostFailure = null;
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostFailure = action.error;
        break;
      case ADD_COMMENTS_REQUEST:
        draft.addCommentsLoading = true;
        draft.addCommentsDone = false;
        draft.addCommentsFailure = null;
        break;
      case ADD_COMMENTS_SUCCESS:
        // const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId
        // );
        // const post = state.mainPosts[postIndex];
        // const Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = { ...post, Comments };

        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentsLoading = false;
        draft.addCommentsDone = true;
        break;

      case ADD_COMMENTS_FAILURE:
        draft.addCommentsLoading = false;
        draft.addCommentsFailure = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostFailure = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoadin = false;
        draft.removePostFailure = action.error;
        break;

      default:
        break;
    }
  });
};

export default rootReducer;
