import React from 'react';
import { Container, Row, Col, Button, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Component 2
const Languages = (props) => {
  return <div>{props.language}</div>;
};

// Component1
const UserItems = (props) => {
  const { users } = props;
  return (
    <Col>
      <h1>users</h1>
      <div>
        {users.map((user, index) => (
          <div key={index} className="solid-border">
            <div className="text-blue">
              <Alert>{user.Fullname}</Alert>
            </div>
            <Button>Test Button</Button>
            <div>
              <Card>
                <Card.Body>
                  <Card.Title>Address</Card.Title>
                  <Card.Text variant="primary">{user.Adress}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="text-grey">{user.Age}</div>
            <div className="text-hotpink">{user.Height}</div>
            {/* <Languages languages={user.SpokenLanguages}></Languages> */}
            {/* <div className="text-khaki">
              {user.SpokenLanguages.map((language, index) => (
                <Languages key={index} language={language}></Languages>
              ))}
            </div> */}
            <div className="text-indigo">{user.SpokenLanguages.join(', ')}</div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default UserItems;
