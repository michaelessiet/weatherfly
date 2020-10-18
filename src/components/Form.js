import React from 'react';
import { Form , Button} from 'react-bootstrap';


function FormPage ({setCity,city, api_call, inputText, setinputText}) {

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    api_call();
    console.log(city)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="form-container">
          <Form.Group>
            <Form.Control
              placeholder="City"
              value={city}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Country" />
          </Form.Group>
          <div className="buttons">
            <Button className="submit" type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default FormPage