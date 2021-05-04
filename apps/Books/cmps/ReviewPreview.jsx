import { RatingStars } from './RatingStars.jsx';

export function ReviewPreview({ review, removeReview }) {

    return <div className="single-review">
        <div className="flex ">
            <h4>{review.readerName}</h4><span>{review.date}</span>
            <button onClick={() => removeReview(review.id)}>X</button>
        </div>
        <div className="rating-stars-display star-active">
            <RatingStars rating={review.rating} isPreview={true} />
        </div>
        <p>{review.reviewTxt}</p>
    </div>

}