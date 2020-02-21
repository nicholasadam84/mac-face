import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const Welcome = () => {
    const [show, setShow] = useState(true);
  
    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Add a new food to your personal database! 
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Got it!
            </Button>
          </div>
        </Alert>
  
        {/* {!show && <Button onClick={() => setShow(true)}>Welcome</Button>} */}
      </>
    );
  }
  
export default Welcome;