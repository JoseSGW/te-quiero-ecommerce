import { types } from "../types/types";

const initialState = {
    showReviewModal: false
}

export const showReviewModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.showReviewModal:

            return {
                showReviewModal: action.payload.showBool,
                fullReview: action.payload.fullReview ? action.payload.fullReview : null
            }

        default:
            return state;
    }
}