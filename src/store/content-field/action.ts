import * as TYPE from "./type";
import axios from "axios";

export function SetPaginationCount(count: number) {
  return {
    type: TYPE.SET_PAGINATION_COUNT,
    payload: count,
  };
}

export function SetPage(page: number) {
  return {
    type: TYPE.SET_PAGE,
    payload: page,
  };
}

export function SetPost(post: any[]){
    return{
        type: TYPE.SET_POST,
        payload: post,
    }
}

export function GetPosts(skip: number, limit: number, sort?: string) {
  return function (dispatch: any) {
    axios
      .get(process.env.API_URL + "/api/post/posts", {
        params: {
          skip,
          limit,
          sort,
        },
      })
      .then((response) => {
        dispatch(SetPost(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function GetPaginationCount(numPost: any){
  return function (dispatch: any) {
  axios.get(process.env.API_URL + "/api/post/count")
  .then(response => {
    const total = parseInt(response.data);
    let totalPage = 0;
    totalPage = total / numPost >> 0;
    if(total / numPost !== 0){
      totalPage++;
    }
    dispatch(SetPaginationCount(totalPage));
  })
  .catch(error => {
    console.log(error);
  });
  }
}
