import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, CardHeader, Table, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row, Alert } from 'reactstrap';
import Loader from 'react-loader-spinner'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import View from './View'
import Paginations from './Pagination'
import { GET_CATEGORY, ANY_API } from '../actions/api'
import { getCategory } from '../actions/categoryActions'
import { logout } from '../actions/loginActions'
import Header from './NavBar'
const IconsFormatter = (cell, row, rowIndex, formatExtraData) => {
  return (<img src={cell[0].url} style={{ width: 50, height: 50 }} />
  );
}
class List extends Component {
  constructor(props) {
    super(props)
  }
  ViewFormatter = (cellContent, row) => {
    return (
      <Button size="sm" color="primary" onClick={this.onViewSingleRecord(row.id)} style={{ margin: 2 }} >View</Button>
    );
  }
  state = {
    path: GET_CATEGORY,
    isView: false,
    viewId: null,
    columns: [{
      dataField: 'id',
      text: 'Id', sort: true
    }, {
      dataField: 'name',
      text: 'Name',
      filter: textFilter(), sort: true
    },
    {
      dataField: 'icons',
      text: 'Icons',
      formatter: IconsFormatter
    }, {
      dataField: 'view',
      isDummyField: true,
      text: 'View',
      formatter: this.ViewFormatter
    }
    ]
  }
  componentDidMount() {
    this.onLoad()
  }
  onLoad = () => {
    const { path } = this.state;
    this.props.getCategory(path);
  }
  onModelToggle = event => {
    const { isView } = this.state;
    this.setState({ isView: false, viewId: null })
  }
  onViewSingleRecord = (Id) => event => {
    const { isView } = this.state;
    this.setState({ isView: true, viewId: Id })
  }
  onPaginationPrevious = event => {
    const { categories } = this.props;
    if (categories.previous != null) this.setState({ path: `${ANY_API}${categories.previous}` }, () => this.onLoad())
  }
  onPaginationNext = event => {
    const { categories } = this.props;
    if (categories.next != null) this.setState({ path: `${ANY_API}${categories.next}` }, () => this.onLoad())
  }

  render() {
    const { categories } = this.props;
    const { isView, viewId } = this.state;
    return (
      <React.Fragment>
       <Header logout={this.props.logout}/>      
      <Container>
        <div className="animated fadeIn" style={{marginTop:10}}>          
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i>List
                  </CardHeader>
                <CardBody>
                  {categories.items ? <div>
                    <BootstrapTable
                      striped
                      hover
                      keyField='id'
                      data={categories.items}
                      columns={this.state.columns}
                      filter={filterFactory()} />
                    <Paginations onPaginationPrevious={this.onPaginationPrevious} onPaginationNext={this.onPaginationNext} /></div> : <div style={{ display: "flex", justifyContent: "center" }}><Loader
                      type="Puff"
                      color="#00BFFF"
                      height={100}
                      width={100}
                    /></div>}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <Modal isOpen={isView} toggle={this.onModelToggle}>
          <View onModelToggle={this.onModelToggle} id={viewId} />
        </Modal>
      </Container>
    
      </React.Fragment>);
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories

  }
}
const mapDispatchToProps = dispatch => {
  return {
    getCategory: (path) => dispatch(getCategory(path)),
    logout:()=>dispatch(logout()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);