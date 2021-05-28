import React from "react";
import { Imagen, Texto, Container, EditionIcon, ReviewModal } from "./Review.styled";
import { useSelector, useDispatch } from "react-redux";
import GradeIcon from '@material-ui/icons/Grade';
import EditIcon from '@material-ui/icons/Edit';
import ReviewForm from "./ReviewForm";
import {  showReviewModalActn } from "../../actions/reviewsActions";

export default function Review({id, rating, description, userId, name}) {
    const dispatch = useDispatch();

    rating = Number(rating)
    const myRating = rating
    const { user } = useSelector((state) => state.users)

    function handleEditClick(e) {
        const fullReview =  {
            prodId: id,
            userId: userId,
            rating: myRating,
            description: description, 
        }
        dispatch(showReviewModalActn(true, true, fullReview))
        document.querySelector('#modal').classList.add('active');
    }
    
    function starSistem(rating){
        switch (rating) {
            case 1:
                return <div><GradeIcon style={{ color: 'yellow' }} /></div>
            case 2:
                return <div><GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} /></div>
            case 3:
                return <div><GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} /></div>
            case 4:
                return <div><GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} /></div>
            case 5:
                return <div><GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} />
                            <GradeIcon style={{ color: 'yellow' }} /></div>
            default:
                break;
        }
    }
  
    return (
        <div>
            <Container>
                <Imagen>
                    <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" />
                </Imagen>
                <Texto>
                    <h2>{name}</h2> 
                    {starSistem(rating)}  
                    {description}
                </Texto>
                {(user.id === userId) && <EditionIcon onClick={handleEditClick}><EditIcon /></EditionIcon>}
            <ReviewModal id='modal'>
                <ReviewForm />
            </ReviewModal>
            </Container>
        </div>
    );
}
