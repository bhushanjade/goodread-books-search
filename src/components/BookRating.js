/**
 * Created by bhushan on 18/3/19.
 */
import React from 'react';
import ReactStars from 'react-stars';
import PropTypes from "prop-types";

const DEFAULT_STAR_COUNT = 5;
export default function BookRating(props) {
    let {count = DEFAULT_STAR_COUNT} = props;
    return (
        <ReactStars
            count={parseInt(count, 10)}
            value={parseInt(props.value, 10)}
            edit={false}
            color2={'#ff0007'}
            color1={'#b7b7b7'}
            size={24}
            {...props}
        />
    );
}
BookRating.propTypes = {
    props: PropTypes.shape({
        count: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        color1: PropTypes.string.isRequired,
        color2: PropTypes.string.isRequired,
        size: PropTypes.number,
    })
}





