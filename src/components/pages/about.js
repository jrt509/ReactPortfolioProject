import React from 'react';
import profilePicture from "../../../static/assets/images/bio.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }} 
            
            />
           
            <div className="right-column">
                I am a learner first and foremost. Drive, motivation, and perseverance have helped catapult me into management roles in the
                hospitality industry and they will continue to help me gain new knowledge and learning experiences in my new career field of software
                development. I am passionate about each task I take on and always eager to see the finished product.
            </div>
            
        </div>
    );
}