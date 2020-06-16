import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, Container, Row, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loader from 'react-loader-spinner'
import { getCategoryWithId } from '../actions/categoryActions'

class View extends Component {
  state = { busy: true, data: {} }
  componentDidMount() {
    const { id } = this.props;
    getCategoryWithId(id).then((response) => this.setState({ busy: false, data: response.data }))
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    const { data, busy } = this.state;
    const { onModelToggle } = this.props;
    return (
      !busy && data ? <React.Fragment>
        <ModalHeader toggle={onModelToggle}>{data.name}  #{data.id} </ModalHeader>
        <ModalBody>
          <img src={data.icons[0].url} alt={data.name} style={{ width: "100%", maxHeight: 250 }} />
        </ModalBody>
        <ModalFooter>
          <span>{data.href}</span>
          <Button color="secondary" onClick={onModelToggle}>Close</Button>
        </ModalFooter>
      </React.Fragment> : <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          /></div>
    );
  }
}

export default View;
