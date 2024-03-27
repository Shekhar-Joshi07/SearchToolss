import React from 'react'

const TitleCard = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-6" onClick={props.onClick}>
                <div className="card">
                    <div className="img_icon_here">
                       <center> <img src={props.img} alt="" /></center>
                    </div>
                    <div className="title_here">
                        <p>{props.title}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TitleCard
