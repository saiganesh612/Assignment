import React from "react"

const Card = (props) => {
    const data = props.info;

    return (
        <>
            <div className="card col-md-3 offset-md-1 my-4 px-0">
                <img src={data.img_url} className="card-img-top" alt="pic" />
                <div className="card-body">
                    <h5 className="card-title">{data.heading}</h5>
                    <p className="card-text">{data.small_desc}</p>
                    <a href="/">Try it</a>
                </div>
            </div>
        </>
    )
}

export default Card
