
import React from 'react'
import PropTypes from 'prop-types'

const QueriedMovie = ({Title, Year, Type, Img}) => {
    return (
        <div>
            <h1>{Title}</h1>
            <h1>{Year}</h1>
            <h3>{Type}</h3>
            <img src={Img} />
        </div>
    )
};

// QueriedMovie.propTypes = {
//     Title.PropTypes: PropTypes.string,
//     Year.PropTypes: PropTypes.int,

// }

export default QueriedMovie;
