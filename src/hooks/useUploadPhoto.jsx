import React , {useState, useEffect} from 'react'
import { server } from "../context/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useUploadPhoto = () => {

    const [file, setFile] = useState();
    const [show, setShow] = useState(false);
    const [error , setError] = useState(false)
    const navigate = useNavigate();

    const dragover_handler = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    };

    const drop_handler = (e) => {
        const file = e.dataTransfer.files[0];
        e.preventDefault();
        setFile(file)
    };
    const send = (e,file) => {
        e.preventDefault()
        setShow(true);
        const formData = new FormData();
        formData.append("file", file);
        axios
        .post(`${server}/user/photo`, formData, {
            mode: "no-cors",
        })
        .then((res) => {
          console.log(res)
            setShow(false);
            if (res.status === 201) {
            navigate(`/user/photo/upload/${res.data.data._id}`);
            }
        })
        .catch((err) => {
          setError(true)
          console.log(err);
          setTimeout(() => {
            setShow(false)
            setError(false)
          }, 4000)
        });
    };
  return {
    send,
    drop_handler,
    file,
    dragover_handler,
    setFile,
    error,
    show,
  };

}

export default useUploadPhoto

