import { types } from "../types/types";

const initialState = {
    reviews: [],
    name: "",
    showReviewModal: false,
    fullReviewToSave: {},
    willEditReview: false
}

export const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_REVIEWS:

            return {...state, reviews: action.payload }

            // case types.REVIEW_USER:
            //     // return {
            //     //     ...state,
            //     //     name: action.payload
            //     // }
        case types.showReviewModal:

            return {
                ...state,
                showReviewModal: action.payload.showReviewModal,
                fullReviewToSave: action.payload.fullReviewToSave,
                willEditReview: action.payload.willEditReview
            }
        default:
            return state;
    }
}