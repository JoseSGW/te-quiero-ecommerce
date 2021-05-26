import { types } from "../types/types";
const axios = require("axios");


export function addReview(data) {
    return function(dispatch) {
        // console.log('addreview:: ', data)
        // const name = data.name
        const id = data.prodId;
        return axios
            .post(`http://localhost:3001/reviews/addReview/${data.prodId}`, data)
            .then((res) => {
                // dispatch(reviewUser(name))
                dispatch(get_reviews(data.prodId))
                    // console.log(res)
            })
            .catch((err) => {
                console.log("ESTE ES EL ERROR DE REVIEWACTION", err);
            });
    };
}

export function get_reviews(productId) {
    return async(dispatch) => {

        try {
            const res = await fetch(`http://localhost:3001/reviews/getreview/${productId}`);
            const jsonData = await res.json();

            console.log("ESTA RESPUESTA A GET_REVIEWS", jsonData)
            dispatch(set_reviews(jsonData))

        } catch (err) {
            console.log(err)

        }
    }
}

export function updateReview(fullReview) {
    console.log('updateReview:: fullReview: ', fullReview)
    return function(dispatch) {
        return axios
            .put(`http://localhost:3001/reviews/updateReview/`, fullReview)
            .then((res) => {
                dispatch(get_reviews(fullReview.prodId))
            })
            .catch((err) => {
                console.log("ESTE ES EL ERROR DE REVIEWACTION", err);
            });
    };
}
// const initialState = {
//     reviews: [],
//     name: "",
//     showReviewModal: false,
//     fullReviewToSave: {},
//     willEditReview: false
// }
export const showReviewModalActn = (showBool, willEditBool, fullreview) => {
    // console.log('showReviewModalActn:: showBool, willEditBool, fullreview', showBool, willEditBool, fullreview)
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
    console.log('set_reviews(75)::', reviews)
    return {
        type: types.GET_REVIEWS,
        payload: reviews
    }
}


// export const reviewUser = (name) => {
//     return {
//         type: types.REVIEW_USER,
//         payload: name,
//     };
// };