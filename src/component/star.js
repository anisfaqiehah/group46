import React from "react";
const { Component, Fragment } = React;

//helpers
let _key_id = 0;
const nextId = () => `id-${++_key_id}`;
//comopnents
const RatingIndicator = ({
  isSelected,
  value,
  onRatingChange=()=>{}
}) => {
  const classes = `c-rating__indicator`
  const uuid = `rating-uuid-${value}`

  return (
    <Fragment>
      <input
        type='radio'
        name='rating'
        id={uuid}
        value={value}
        defaultChecked={isSelected}
        onChange={onRatingChange}
      />
      <label
        htmlFor={uuid}
        className={classes}
      >
        <svg
          height='24'
          viewBox='0 0 24 24'
          width='24'
        >
          <path d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' />
        </svg>
      </label>
    </Fragment>
  )
}


class Rating extends Component {
  state = {
    rating: 0
  }
  
  _changeRating = (e) => {
    const rating = parseInt(e.target.value, 10)
    this.setState({rating})
  }
  
  _renderIndicators = () => {
    const { rating } = this.state
    const MAX_RATING = 5
    let ratingIndicators = [];
    
    for (let i = MAX_RATING; i > 0; i--) {
      ratingIndicators.push(
        <RatingIndicator
          onRatingChange={this._changeRating}
          value={ i }
          isSelected={ i === Math.round(rating) }
          key={ nextId() }
        />
      )
    }
    
    return ratingIndicators
  }
  
  render () {
    return (
      <div className={'c-rating'}>
      {
        this._renderIndicators()
      }
      </div>
    )
  }
}


export default Rating;
