import React from "react";
import PropTypes from "prop-types";

const QueriedMovie = ({ Title, Year, Type, Img }) => {
  //just so i could
  const capitalizedType = Type.charAt(0).toUpperCase() + Type.slice(1);
  return (
    <div>
      <img src={Img} style={{ marginTop: 75 }} />
      <h5 style={{ padding: 0, margin: 0 }}>
        {Title} ({Year})
      </h5>
      <p style={{ paddingTop: 0, marginTop: 0 }}>{capitalizedType}</p>
    </div>
  );
};

// QueriedMovie.propTypes = {
//     Title.PropTypes: PropTypes.string,
//     Year.PropTypes: PropTypes.int,

// }

export default QueriedMovie;
