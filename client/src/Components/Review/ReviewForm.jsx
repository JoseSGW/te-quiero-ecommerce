import React, { useState, useEffect } from "react";
import {
  Imagen,
  Texto,
  ContainerReviewForm,
  ContainerFlex,
} from "./ReviewForm.styles";
import { useSelector, useDispatch } from "react-redux";
// import GradeIcon from '@material-ui/icons/Grade';
import { addReview, updateReview } from "../../actions/reviewsActions";
import { get_reviews, showReviewModalActn } from "../../actions/reviewsActions";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function ReviewForm() {
  const { showReviewModal } = useSelector((state) => state.reviews);
  const { fullReviewToSave } = useSelector((state) => state.reviews);
  const { willEditReview } = useSelector((state) => state.reviews);

  const [review, setReview] = useState({
    productId: "",
    name: "",
    description: "",
    rating: 0,
    userId: "",
  });

  const possibleReviews = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();
  const history = useHistory();
  const { product } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.users);
  const [option, setOption] = useState(5);

  let options = [];
  for (let i = 1; i <= 5; i++) {
    options.push({
      label: i.toString(),
      value: i,
    });
  }

  //  const fullReview =  {
  //     id: id,
  //     rating: rating,
  //     userId: userId,
  //     description: description,
  //     name
  // }

  useEffect(() => {
    if (willEditReview) {
      setReview({
        productId: fullReviewToSave.prodId,
        description: fullReviewToSave.description,
        rating: fullReviewToSave.rating,
        userId: fullReviewToSave.userId,
      });
      setOption(fullReviewToSave.rating);
    }
  }, [fullReviewToSave]);

  function handleOptionChange(e) {
    setOption(e.target.value);
  }

  function handleInputChange(e) {
    setReview({
      ...review,
      description: e.target.value,
    });
  }

  const prodId = history.location.pathname.slice(16);

  function handleSubmit(e) {
    e.preventDefault();
    const fullReviewToSave = {
      prodId: product.id,
      rating: option,
      userId: user.id,
      description: review.description,
    };
    if (willEditReview) {
      dispatch(updateReview(fullReviewToSave));
    } else {
      dispatch(addReview(fullReviewToSave));
    }
    dispatch(showReviewModalActn(false, false, null));
  }

  function handleTerminarClick(e) {
    dispatch(showReviewModalActn(false, false, null));
  }

  return (
    <div>
      <ContainerReviewForm>
        <ContainerFlex>
          <Imagen>
            <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg" />
          </Imagen>
          <form onSubmit={handleSubmit}>
            <Texto>
              {/* <label>Nombre</label>
                            <input name="name" value={review.name} placeholder="User" onChange={handleInputChange} type="text"></input> */}
              <label>
                Calificación:
                {/* <input onChange={handleInputChange} value={review.rating} list="stars" name="rating" />   */}
              </label>
              <select value={option} onChange={handleOptionChange}>
                {options.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <label>Comentario</label>
              <input
                name="description"
                value={review.description}
                onChange={handleInputChange}
              ></input>
            </Texto>
            <button type="submit"> ENVIAR </button>
            <button onClick={handleTerminarClick}>Terminar</button>
          </form>
        </ContainerFlex>
      </ContainerReviewForm>
    </div>
  );
}
