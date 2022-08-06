import React from "react"
import pic from "./image.jpg"

export default function About() {
    return (
        <div>
            {<img src={pic} alt="profile" width="350px" className="my-img" />}

            <div id="my-info">
                <h2>Jainam Chheda</h2>
                <h3>Frontend developer</h3>
            </div>

            <div className="buttons">
                <button id="email-btn" class="fa fa-envelope">Email</button>
                <button id="linkedin-btn" class="fa fa-linkedin" >Linkedin</button>
            </div>

        </div>
    )
}