import React, { useEffect, useState } from "react";
import { ContainerReviews } from "./ReviewList.styles";
import Review from './Review'
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"
import { get_reviews } from "../../actions/reviewsActions";

export default function ReviewList() {
   
const history= useHistory()
const dispatch= useDispatch()
const { reviews } = useSelector((state) => state.reviews);


const prodId = history.location.pathname.slice(16);

useEffect(() => {
    console.log("Se dispatchea")
    dispatch(get_reviews(prodId))
}, []);

return (
    <ContainerReviews>
         {reviews?.map((p) => {
            return (
                <div key={p.id}>
                    <Review
                            name={p.user.name}
                            id= {p.id}
                            rating={p.rating}
                            description={p.description}
                            userId={p.userId}
                    />
                </div>
            );
        })}

    </ContainerReviews>
    )}