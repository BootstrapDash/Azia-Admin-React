import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import { Table } from 'react-bootstrap';

export class BasicTable extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Tables</span>
              <span>Basic Tables</span>
            </div>
            <h2 className="az-content-title">Basic Tables</h2>

            <div className="az-content-label mg-b-5">Simple Table</div>
            <p className="mg-b-20">Using the most basic table markup.</p>

            <div className="table-responsive">
              <Table className="mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                  </tr>
                </tbody>
              </Table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Striped Rows</div>
            <p className="mg-b-20">Add zebra-striping to any table row.</p>

            <div className="table-responsive">
              <Table striped className="mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                  </tr>
                </tbody>
              </Table>
            </div>{/* bd */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Bordered Table</div>
            <p className="mg-b-20">Add borders on all sides of the table and cells.</p>

            <div className="table-responsive">
              <Table bordered className="mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                  </tr>
                </tbody>
              </Table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Hoverable Rows Table</div>
            <p className="mg-b-20">To enable a hover state on table rows.</p>

            <div className="table-responsive">
              <Table hover className="mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                  </tr>
                </tbody>
              </Table>
            </div>{/* table-responsive */}

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}  
      </div>
    )
  }
}

export default BasicTable
