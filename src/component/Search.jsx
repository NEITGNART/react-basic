import React, {useEffect, useState} from 'react';
import SearchAPI from "../api/SearchAPI";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Search = () => {

    const [images, setImages] = useState([]);
    const [term, setTerm] = useState('');
    const [deboundTerm, setDeboundTerm] = useState('');

    // using debounce to prevent the search from being called too often

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDeboundTerm(term);
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);


    useEffect(() => {

        const getImageList = async () => {
            const response = await SearchAPI.get('/search/photos', {
                params: {query: deboundTerm}
            });
            console.log(response.data);
            setImages(response.data.results);
        }

        getImageList().then(r => console.log(r));

    }, [deboundTerm]);


    const imageList = images.map((image) => {
        return (<Col key={image.id} md={4}>
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
        </Col>);
    });


    return <div>


        <Container>

            <Container fluid className="d-flex justify-content-between">
                <Form.Label htmlFor="inputPassword5">Search image</Form.Label>
                <Button variant="primary"
                        onClick={() => setTerm('')}>Clear</Button>
            </Container>


            <Form.Control
                className="mt-3"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
            />

            <Row>
                {imageList}
            </Row>


        </Container>

    </div>;
};

export default Search;
