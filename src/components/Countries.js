import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardColoumns from "react-bootstrap/CardColumns";
import Form from "react-bootstrap/Form";


export const Countries = () => {
    const [country, setCountry] = useState([]);
    const [searchCountry, setSearchCountry] = useState("");

    useEffect(
        () => {
            axios
                .get("https://corona.lmao.ninja/v2/countries")
                .then(res => {
                    setCountry(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        },[]);
    const searchResult = country.filter(item => {
        return searchCountry !== "" ? item.country.toLowerCase().includes(searchCountry.toLowerCase()) : item;
    });
    const countrydata = searchResult.map((data, x) => {
        return (
            <Card key={x} bg="danger" text="white" className="text-center">
                <Card.Body>
                    <Card.Title>{data.country}</Card.Title>
                    <Card.Img src={data.countryInfo.flag} />
                    <Card.Text> Cases : {data.cases}   Deaths : {data.deaths}  Recovered : {data.recovered}</Card.Text>
                    <br/>
                    <Card.Text> Today Cases : {data.todayCases}  Today Deaths : {data.todayDeaths} Today Recovered : {data.todayRecovered}</Card.Text>
                    <br/>
                    <Card.Text> Active : {data.active} Critical : {data.critical}</Card.Text>
                </Card.Body>
            </Card>
        );
    });
    return (
        <div>
            <br />
            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Control type="text" placeholder="Search For a Country" onChange={e => setSearchCountry(e.target.value)} />
                </Form.Group>
            </Form>
            <CardColoumns>{countrydata}</CardColoumns>
        </div>
    );
}
