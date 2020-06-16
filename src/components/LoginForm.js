import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row, Alert } from 'reactstrap';
import { login } from '../actions/loginActions';

class LoginForm extends Component {
  state = {
    token: ""
  }

  onChange = (id) => event => {
    this.setState({ [id]: event.target.value })
  }
  isSubmit = event => {
    const { token } = this.state;
    this.props.login(token)
  }
  render() {
    const { token } = this.state
    const { onChange, isSubmit } = this;
    return (
      <div className="app flex-row align-items-center" style={{ display: 'flex', minHeight: '100vh' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Refixd Test</h1>
                      <p className="text-muted">Sign In to your account</p>

                      <InputGroup className="mb-3">
                        <Input type="text" placeholder="token" autoComplete="token" value={token} onChange={onChange('token')} />
                      </InputGroup>
                      <Row>
                        <Col xs="12" style={{ textAlign: 'center' }}>
                          <Button color="primary" className="px-4" onClick={isSubmit}>Login</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>

                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authorised: state.login.authorised

  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (token) => dispatch(login(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
