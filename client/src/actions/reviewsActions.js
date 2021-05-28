import { types } from "../types/types";
const axios = require("axios");


export function addReview(data) {
    return function (dispatch) {
        return axios
            .post(`http://localhost:3001/reviews/addReview/${data.prodId}`, data)
            .then((res) => {
                dispatch(get_reviews(data.prodId))
            })
            .catch((err) => {
                console.error(err);
            });
    };
}

export function get_reviews(productId) {
    return async (dispatch) => {

        try {
            const res = await fetch(`http://localhost:3001/reviews/getreview/${productId}`);
            const jsonData = await res.json();

            dispatch(set_reviews(jsonData))

        } catch (err) {
            console.error(err)

        }
    }
}

export function updateReview(fullReview) {
    return function (dispatch) {
        return axios
            .put(`http://localhost:3001/reviews/updateReview/`, fullReview)
            .then(() => {
                dispatch(get_reviews(fullReview.prodId))
            })
            .catch((err) => {
                console.error(err);
            });
    };
}

export const showReviewModalActn = (showBool, willEditBool, fullreview) => {
    return {
        type: types.showReviewModal,
        payload: {
            showReviewModal: showBool,
            willEditReview: willEditBool,
            fullReviewToSave: fullreview
        }
    };
};

export const set_reviews = (reviews) => {
    return {
        type: types.GET_REVIEWS,
        payload: reviews
    }
}
