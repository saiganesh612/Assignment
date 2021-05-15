import React from "react"
import Modal from "react-modal"

Modal.setAppElement("#root")
const CreateModal = (props) => {

    if (props.playVideo) {
        navigator.getUserMedia({ video: true }, stream => {
            const video = document.getElementsByClassName('app__videoFeed')[0];
            if (video) video.srcObject = stream;
        },
            (err) => console.error(err)
        );
    }

    const handlePlayVideo = () => {
        props.setPlayVideo(false)
        props.setDisplayModal(false)
        const video = document.getElementsByClassName('app__videoFeed')[0];
        video.srcObject.getTracks()[0].stop();
    }

    return (
        <Modal id="modal" isOpen={props.displayModal} onRequestClose={handlePlayVideo}>
            <div className="row">
                <div className="col">
                    <h3>{props.data.heading}</h3>
                    <p>{props.data.long_desc}</p>
                    <button type="button" className="btn btn-sm" onClick={handlePlayVideo}>Close</button>
                </div>
                <div className="col d-flex flex-column align-items-center">
                    <div className="app__container">
                        <p style={{ color: '#00737A', marginTop: "0" }}>Using : in-built camera</p>
                        <video
                            height="364"
                            width="347"
                            muted
                            autoPlay
                            className="app__videoFeed"
                        ></video>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default CreateModal
