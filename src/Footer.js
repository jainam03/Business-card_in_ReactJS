import React from "react";

export default function Footer() {
    return (
        <div className="footer">

            <div class="fa fa-twitter fa-lg" id="icon" aria-hidden="true" ></div>
            <div class="fa fa-facebook fa-lg" id="icon" aria-hidden="true" ></div>
            <div class="fa fa-instagram fa-lg" id="icon" aria-hidden="true" ></div>
            <div class="fa fa-github fa-lg" id="icon" aria-hidden="true" onClick={() => window.open('https://github.com/jainam03/Business-card_in_ReactJS')} ></div>

        </div>
    )
}