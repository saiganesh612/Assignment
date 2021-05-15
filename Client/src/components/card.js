import React, { useState } from "react"
import CreateModal from "./modal"

const Card = (props) => {
    const [displayModal, setDisplayModal] = useState(false)
    const [playVideo, setPlayVideo] = useState(false)
    const data = props.info;

    const handleClick = () => {
        setDisplayModal(true)
        setPlayVideo(true)
    }

    return (
        <>
            <div className="card col-md-3 offset-md-1 my-4 px-0">
                <img src={data.img_url} className="card-img-top" alt="pic" />
                <div className="card-body">
                    <h5 className="card-title">{data.heading}</h5>
                    <p className="card-text">{data.small_desc}</p>
                    <button className="btn button" style={{ paddingLeft: 0 }} onClick={handleClick}>
                        Try it&nbsp;&nbsp;<i className="fas fa-angle-right"></i>
                    </button>
                </div>
                <CreateModal
                    data={data}
                    displayModal={displayModal}
                    setDisplayModal={setDisplayModal}
                    playVideo={playVideo}
                    setPlayVideo={setPlayVideo}
                />
            </div>
        </>
    )
}

export default Card
