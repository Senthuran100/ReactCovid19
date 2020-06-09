import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardColoumns from "react-bootstrap/CardColumns";



export const Countries = () => {
    const [country, setCountry] = useState([]);
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
        });
    const countrydata = country.map((data, x) => {
        return (
            <Card key={x} bg="danger" text="white" className="text-center">
                <Card.Body>
                    <Card.Title>{data.country}</Card.Title>
                    <Card.Img src={data.countryInfo.flag} />
                    <Card.Text> Cases : {data.cases} </Card.Text>
                    <Card.Text> Deaths : {data.deaths} </Card.Text>
                    <Card.Text> Recovered : {data.recovered} </Card.Text>
                    <Card.Text> Active : {data.active} </Card.Text>
                    <Card.Text> Critical : {data.critical} </Card.Text>
                </Card.Body>
            </Card>
        );
    });
    return (
        <div>
            <br />
            <CardColoumns>{countrydata}</CardColoumns>
        </div>
    );
}
