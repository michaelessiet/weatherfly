import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'weather-icons/css/weather-icons.min.css'
import Anime from 'react-anime'

function Home({ weather }) {

  if(weather.main !== undefined){

    const iconClass = `wi wi-owm-${weather.weather[0].id}`;

    return (
      <Container>
        {typeof weather.main != "undefined" ? (
          <Anime opacity={[0, 1]} >
            <div className="gen-container">
              <Row>
                <Col>
                  <h1>
                    {" "}
                    {weather.name},{weather.sys.country}
                  </h1>
                </Col>
              </Row>
              <Row>
                <i className={iconClass}></i>
              </Row>
              <Row>
                <Col>
                  <h2>{weather.main.temp}&deg;C</h2>
                </Col>
              </Row>
              <Row>
                <Col className="min-temp">
                  <h3>{weather.main.temp_min}&deg;C</h3>
                </Col>
                <Col className="max-temp">
                  <h3>{weather.main.temp_max}&deg;C</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>{weather.weather[0].description}</h3>
                </Col>
              </Row>
            </div>
          </Anime>
        ) : (
          ""
        )}
      </Container>
    );
  } else {
    return(
      <div></div>
    )
  }

  
}

export default Home;
