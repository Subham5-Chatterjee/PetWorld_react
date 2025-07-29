import React from 'react'
import { renderStars } from '../../utils/renderStars'

const ReviewsCard = ({review}) => {
    const {id, authorName, authorImage, authorDesignation, rating, comment} = review
  return (
    <div class="slide">
        <div class="testimonial__card text-center mx-auto me-lg-auto">
            <div class="testimonial__card--media">
            <img
                class="multicolumn-card__image rounded-pill"
                width={107}
                height={107}
                src={authorImage}
                alt={authorName}
            />
            </div>
            {renderStars(rating)}
            <p>{comment}</p>
            <div class="customer_info">
            <div class="testimonial__card--footer-inner">
                <div class="testimonial__card-content">
                <h4 class="testimonial__author--name">
                    🐶 {authorName}. ({authorDesignation})
                </h4>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewsCard
