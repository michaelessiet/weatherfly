import React, {useState} from 'react';
import { Form , Button} from 'react-bootstrap';

function FormPage ({setCity,city, api_call}) {

  // const [inputText, setinputText] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target.value)
    api_call()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className='form-container'>
        <Form.Group>
          <Form.Control placeholder="City" value={city} onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          
          <Form.Control placeholder="Country" />
        </Form.Group>
        <Button type='submit' variant='primary' >
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default FormPage