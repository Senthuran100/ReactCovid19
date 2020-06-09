import React, {useEffect,useState} from 'react'

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import CardColoumns from "react-bootstrap/CardColumns";
import Form from "react-bootstrap/Form";


export const Home = () => {
    const [latest,setLatest] = useState([]);
  const [country,setCountry] = useState([]);
  const [searchCountry,setSearchCountry] = useState("");

  useEffect(
   () => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries")
    ])
      .then(res => {
        setLatest(res[0].data);
        setCountry(res[1].data);
      })
      .catch(err =>{
        console.log(err);
      })
    },[]);
 
  const date = new Date(parseInt(latest.updated))
  const updatedate = date.toString(); 
//   const searchResult = country.filter(item => {
//     return searchCountry !== "" ? item.country.includes(searchCountry) :item;
//   });

  

  return (
  <div>

    <h1 class="text-success" align="center">Covid19 World Status</h1>
  <CardDeck>
  <Card bg="dark" text="white" className="text-center">
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        {latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {updatedate}</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="white" className="text-center">
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {updatedate}</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="white" className="text-center">
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {updatedate}</small>
    </Card.Footer>
  </Card>
</CardDeck>
<br />
<CardDeck>
  <Card bg="dark" text="white" className="text-center">
    <Card.Body>
      <Card.Title>Today Cases</Card.Title>
      <Card.Text>
        {latest.todayCases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {updatedate}</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="white" className="text-center">
    <Card.Body>
      <Card.Title>Today Deaths</Card.Title>
      <Card.Text>
        {latest.todayDeaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {updatedate}</small>
    </Card.Footer>
  </Card>
  <Card bg="dark" text="white" className="text-center">
    <Card.Body>
      <Card.Title>Today Recovered</Card.Title>
      <Card.Text>
        {latest.todayRecovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small >Last updated {updatedate}</small>
    </Card.Footer>
  </Card>
</CardDeck>
<br/>
<Form>
  <Form.Group controlId="formGroupSearch">
    <Form.Control type="text" placeholder="Search for a Country" onChange={e =>setSearchCountry(e.target.value)}/>
  </Form.Group>
</Form>
</div>
    
  );
}
