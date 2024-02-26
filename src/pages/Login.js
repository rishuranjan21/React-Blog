import React from 'react'
import Base from '../components/Base'
import { CardHeader, Container , Card, CardBody, FormGroup , Label , Input, Form , Row , Col , Button} from 'reactstrap'


const Login = () => {
  return (
    <Base>
       <Container>
        <Row className='mt-4'>
          <Col sm={{size:6,offset:3}}>
          <Card>
          <CardHeader>
            Please enter your details to Login
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
              <Label for="email">Enter Email</Label>
              <Input type='email' placeholder='Enter here' id='email'/>
              </FormGroup>
              <FormGroup>
              <Label for="password">Enter Password</Label>
              <Input type='password' placeholder='Enter here' id='password'/>
              </FormGroup>
              <Container className='text-center'>
                <Button color='primary' type='submit'>Login</Button>
                <Button color='secondary' className='ms-2' type='reset'>Cancel</Button>
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

export default Login