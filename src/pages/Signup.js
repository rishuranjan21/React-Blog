import React, { useState } from 'react'
import Base from '../components/Base'
import { CardHeader, Container , Card, CardBody, FormGroup, Label, Input, Button, Form, Row, Col} from 'reactstrap'


const Signup = () => {

  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpass, setUserpass] = useState("");
  const [usertext, setUsertext] = useState("");


  const handleSubmit = (e) =>{

    e.preventDefault();
    console.log('Username:', username);
    console.log('Username:', useremail);
    console.log('Password:',userpass );
    console.log('Password:',usertext );

  }
  return (
   <Base>
    <Container>
      <Row className='mt-4'>
        <Col sm={{size:6,offset:3}}>
        <Card outline color='dark'>
        <CardHeader className='text-center'>
          Fill Information to Register
        </CardHeader>
        <CardBody>

          {/* creating form */}
           <Form onSubmit={handleSubmit}>
            {/* Name Field */}
              <FormGroup>

                <Label for="name">Enter Name</Label>
                <Input type='text' placeholder='Enter here' id='name' onChange={(e) => setUsername(e.target.value)}/>

              </FormGroup>
              {/* Email field */}
              <FormGroup>

                <Label for="email">Enter Email</Label>
                <Input type='email' placeholder='Enter here' id='email' onChange={(e)=> setUseremail(e.target.value)}
                />

              </FormGroup>
              {/* password field */}
              <FormGroup>

                <Label for="password">Enter Password</Label>
                <Input type='password' placeholder='Enter here' id='password' onChange={(e)=>setUserpass(e.target.value)}
                />

              </FormGroup>
              {/* About field */}
              <FormGroup>

                <Label for="about">Enter Details</Label>
                <Input type='textarea' placeholder='Enter here' id='about' style={{height:'150px'}}
                onChange={(e)=>setUsertext(e.target.value)}
                />

              </FormGroup>
              <Container className='text-center'>
                <Button color='primary' type='submit'>Register</Button>
                <Button color='secondary' className='ms-2' type='reset'>Reset</Button>
              </Container>
           </Form>

        </CardBody>
      </Card>
        </Col>
      </Row>
    </Container>
   </Base>
  )
}

export default Signup