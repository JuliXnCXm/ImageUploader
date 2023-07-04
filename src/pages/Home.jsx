import React, {useState, useEffect}  from 'react'
import "../styles/Home.css"
import image from "../assets/image.svg";
import ProgresBar from "../components/ProgresBar";
import useUploadPhoto from '../hooks/useUploadPhoto';
import Modal from '../components/Modal';

const Home = () => {

    const [preview, setPreview] = useState();
    const [disable, setDisable] = useState(false)
    const { drop_handler, file, show, setFile, error , send, dragover_handler} = useUploadPhoto();

    useEffect(() => {
        if (!file) {
            setPreview(undefined);
            return;
        }
        setPreview(URL.createObjectURL(file))
    }, [file]);


    return (
        <div id="mainContainer">
            <div className="imageContainer">
            <h1>Upload your image</h1>
            <h3>File should be Jpeg, Png...</h3>
            <form action="" method="POST">
                <div
                id="test"
                onDrop={(e) => {!disable && drop_handler(e)}}
                name="file"
                onDragOver={(ev) =>  dragover_handler(ev)}
                className="uploadImage"
                style={preview ? { backgroundImage: `url(${preview})` } : null}
                >
                {preview ? (
                    <>
                        <span
                            className="material-icons material-icons-outlined"
                            id="image-closer"
                            onClick={() => {!disable && setPreview()}}
                        >
                            close
                        </span>
                        <div className="preview_container">
                            <img src={preview} alt="user_image" />
                        </div>
                    </>
                ) : (
                    <>
                    <img src={image} alt="" className="background_dragdrop" />
                    <h2>Drag & Drop your image here </h2>
                    </>
                )}
                </div>
                <h3>Or</h3>
                <label htmlFor="file" className="file-upload">
                {preview ? "Upload" : "Choose file"}
                </label>
                {
                    preview ? 
                    <input
                        id="file"
                        name="file"
                        type='submit'
                        disabled={disable}
                        onClick={(e) => {
                            setDisable(true)
                            send(e,file)
                        }}
                    />
                    :
                    <input
                        id="file"
                        type="file"
                        name="file"
                        onChange={() => {
                            const file = document.getElementById("file").files[0];
                            setFile(file);
                        }}
                    />

                }
            </form>
            </div>
            {show && 
            (
            <Modal> 
                <ProgresBar isError={error}/>
            </Modal>
            )
            }
        </div>
    );
}

export default Home
