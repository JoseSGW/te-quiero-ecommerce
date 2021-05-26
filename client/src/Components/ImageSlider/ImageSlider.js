import React, { useState } from "react";
import { useHistory } from "react-router";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Slider, LeftArrow, RightArrow, Image, Cont } from "./ImageSlider.styled";
import "./slider.css";

export default function ImageSlider({ slides }) {
    const history= useHistory();

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) return null;

    return (
        <Slider>
            <LeftArrow>
                <FaArrowAltCircleLeft onClick={prevSlide} />
            </LeftArrow>
            <RightArrow>
                <FaArrowAltCircleRight onClick={nextSlide} />
            </RightArrow>
            {SliderData.map((p, index) => {
                return (
                    <Cont onClick={() => history.push('/catalogue')}
                        className={index === current ? "slide active" : "slide"}
                        key={index}
                    >
                        {index === current && (
                            <img src={p.image} alt="imagen de categoria" />
                        )}
                    </Cont>
                );
            })}
        </Slider>
    );
}
