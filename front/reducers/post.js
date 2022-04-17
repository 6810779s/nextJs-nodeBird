// import shortId from "shortid";
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
  LIKE_BUTTON_REQUEST,
  LIKE_BUTTON_SUCCESS,
  LIKE_BUTTON_FAILURE,
  UNLIKE_BUTTON_REQUEST,
  UNLIKE_BUTTON_SUCCESS,
  UNLIKE_BUTTON_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  RETWEET_REQUEST,
  RETWEET_SUCCESS,
  RETWEET_FAILURE,
  REMOVE_IMAGE,
} from "../constants/post";
import produce from "immer";
// import faker from "faker";

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
  likeButtonLoading: false,
  likeButtonDone: false,
  likeButtonFailure: null,
  unlikeButtonLoading: false,
  unlikeButtonDone: false,
  unlikeButtonFailure: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesFailure: null,
  retweetLoading: false,
  retweetDone: false,
  retweetFailure: null,
};
// export const generateDummyPost = (number) =>
//   Array(number)
//     .fill()
//     .map(() => ({
//       id: shortId.generate(),
//       User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//       },
//       content: faker.lorem.paragraph(),
//       Images: [{ src: "https://picsum.photos/200/300" }],
//       Comments: [
//         {
//           id: shortId.generate(),
//           User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//           },
//           content: faker.lorem.sentence(),
//         },
//       ],
//     }));

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

const rootReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetFailure = null;
        break;
      case RETWEET_SUCCESS: {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }
      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetFailure = action.error;
        break;
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesFailure = null;
        break;
      case UPLOAD_IMAGES_SUCCESS: {
        draft.imagePaths = action.data;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesFailure = action.error;
        break;
      case LIKE_BUTTON_REQUEST:
        draft.likeButtonLoading = true;
        draft.likeButtonDone = false;
        draft.likeButtonFailure = null;
        break;
      case LIKE_BUTTON_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers.push({ id: action.data.UserId });
        draft.likeButtonLoading = false;
        draft.likeButtonDone = true;
        break;
      }
      case LIKE_BUTTON_FAILURE:
        draft.likeButtonLoading = false;
        draft.likeButtonFailure = action.error;
        break;

      case UNLIKE_BUTTON_REQUEST:
        draft.unlikeButtonLoading = true;
        draft.unlikeButtonDone = false;
        draft.unlikeButtonFailure = null;
        break;
      case UNLIKE_BUTTON_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
        draft.unlikeButtonLoading = false;
        draft.unlikeButtonDone = true;
        break;
      }
      case UNLIKE_BUTTON_FAILURE:
        draft.unlikeButtonLoading = false;
        draft.unlikeButtonFailure = action.error;
        break;
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostFailure = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.hasMorePosts = action.data.length === 10;
        draft.mainPosts = draft.mainPosts.concat(action.data);
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
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
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
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
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
        draft.mainPosts = draft.mainPosts.filter(
          (v) => v.id !== action.data.PostId
        );
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
