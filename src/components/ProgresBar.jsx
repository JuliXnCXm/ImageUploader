import React from 'react'
import '../styles/Modal.css'

const ProgresBar = ({isError}) => {
    return (
        <div className="modalProgres">
            <h2>
                {isError ? "Error While Uploading" : "Uploading ..."}
            </h2>
            <div className="loader-bar">
                <div className={isError ? "loader-red" : "loader-blue"}></div>
            </div>
        </div>
    );
}

export default ProgresBar
