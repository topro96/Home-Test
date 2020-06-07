export interface ContentFieldState {
    posts: any[],
    paginationCount: number,
    page: number,
}

export const SET_PAGINATION_COUNT = "SET_PAGINATION_COUNT";
export const SET_PAGE = "SET_PAGE";
export const SET_POST  = "SET_POST";

export const MAX_POST = 7;
