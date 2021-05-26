import { types } from "../types/types";

export const showReviewModal = (showBool, fullreview) => {
    return {
        type: types.showReviewModal,
        payload: {
            showBool,
            fullReviewToSave: fullreview
        }
    };
};