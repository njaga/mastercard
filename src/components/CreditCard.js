import React from "react";
import "./CreditCard.css";

const CreditCard = () => {
    return (
        <div className="credit-card-container">
            <div className="credit-card">
                <div className="credit-card-front">
                    <div className="card-background"></div>
                    <div className="card-content">
                        <div className="card-top">
                            <div className="chip">
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-main">
                                    <div className="chip-gold"></div>
                                </div>
                            </div>
                            <div className="contactless">
                                <svg viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8.5,8.5L10,7L14,11L10,15L8.5,13.5L11,11L8.5,8.5M13.5,8.5L15,7L19,11L15,15L13.5,13.5L16,11L13.5,8.5Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="card-number">9759 2484 5269 6576</div>
                        <div className="card-info">
                            <div className="card-holder">
                                <div className="label">TITULAIRE</div>
                                <div className="name">NDIAGA NDIAYE</div>
                            </div>
                            <div className="card-expiry">
                                <div className="label">VALABLE JUSQU'AU</div>
                                <div className="date">12/24</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.407 108">
                            <g>
                                <rect width="152.407" height="108" style={{fill: 'none'}}/>
                                <g>
                                    <rect x="60.4117" y="25.6968" width="31.5" height="56.6064" style={{fill: '#ff5f00'}}/>
                                    <path d="M382.20839,306a35.9375,35.9375,0,0,1,13.7499-28.3032,36,36,0,1,0,0,56.6064A35.938,35.938,0,0,1,382.20839,306Z" transform="translate(-319.79649 -252)" style={{fill: '#eb001b'}}/>
                                    <path d="M454.20349,306a35.99867,35.99867,0,0,1-58.2452,28.3032,36.00518,36.00518,0,0,0,0-56.6064A35.99867,35.99867,0,0,1,454.20349,306Z" transform="translate(-319.79649 -252)" style={{fill: '#f79e1b'}}/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="credit-card-back">
                    <div className="magnetic-strip"></div>
                    <div className="signature-cvv-container">
                        <div className="signature-panel">
                            <div className="signature"></div>
                        </div>
                        <div className="cvv-container">
                            <div className="cvv-number">205</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;