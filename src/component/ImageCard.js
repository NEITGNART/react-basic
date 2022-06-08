import React from 'react';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ImageCard = ({image}) => {
    return (
        <>
            <Card style={{width: '18rem'}} >
                <Card.Img variant="top" src={image.urls.regular}/>
                <Card.Body>
                    <Card.Title>{image.alt_description}</Card.Title>
                    <Card.Text>
                        {image.description};
                    </Card.Text>
                    <Button variant="primary" href={image.urls.regular}>View full</Button>
                </Card.Body>
            </Card>

        </>
    );
};

export default ImageCard;
