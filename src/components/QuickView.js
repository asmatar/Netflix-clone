  
import CancelIcon from "@material-ui/icons/Cancel"
import React from "react"
import "./QuickView.scss"

function QuickView({bannerStyle, movie, popup, popupStatuts}) {
  return (
    // si la popup est true, alors on utilise la classe 'open'
    <div className={`quickView ${popupStatuts && 'open'}`}>
        <div className="quickView__banner" style={bannerStyle}>
            <div className="quickView__content">
                <h3 className="quickView__title">  
                  {movie?.title || movie?.original_title || movie?.name}
                </h3>
                <p>{movie?.overview}</p>
            </div>
        </div>
        {/* Au click on appel popup */}
      <button className="quickView__close btn" onClick={popup}>
        <CancelIcon fontSize="large" />
      </button>

    </div>
  )
}

export default QuickView