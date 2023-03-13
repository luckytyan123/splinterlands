import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Header.css"
const HeaderComponent = () => {
    return (
        <div className="header-container">
            <Container>
                <div className="logo-container">
                    <Image className="logo" src="https://d36mxiodymuqjm.cloudfront.net/website/icons/img_icon_splinterlands.svg" />
                </div>
            </Container>

        </div>

    )
}

export default HeaderComponent;