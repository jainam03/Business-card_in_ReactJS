import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <span>
                <div class="fa fa-twitter" id="icon" ></div>
                <div class="fa fa-facebook" id="icon" ></div>
                <div class="fa fa-instagram" id="icon" ></div>
                <div class="fa fa-github" id="icon" onClick={() => window.open('https://github.com/jainam03/Business-card_in_ReactJS')} ></div>
            </span>
        </div>
    )
}