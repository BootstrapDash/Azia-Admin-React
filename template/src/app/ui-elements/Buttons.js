import React, { Component } from 'react'
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Button, Dropdown, ButtonGroup} from 'react-bootstrap';

export class Buttons extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Buttons</span>
            </div>
            <h2 className="az-content-title">Buttons</h2>

            <div className="az-content-label mg-b-5">Theme Buttons</div>
            <p className="mg-b-20">Predefined button styles, each serving its own semantic purpose.</p>

            <div className="row row-xs wd-xl-80p">
              <div className="col-sm-6 col-md-3"><Button variant="az-primary btn-block">Primary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0"><Button variant="az-secondary btn-block">Secondary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="gray-500 btn-block">Light</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="gray-700 btn-block">Dark</Button></div>
            </div>{/* row */}

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">Class Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="pd-0 bg-transparent">variant="az-[value]"</code></td>
                  <td>primary | secondary | light | dark</td>
                </tr>
              </tbody>
            </table>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Bootstrap Buttons</div>
            <p className="mg-b-20">Predefined button styles, each serving its own semantic purpose.</p>

            <div className="row row-xs wd-xl-80p">
              <div className="col-sm-6 col-md-3"><Button variant="primary btn-block">Primary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0"><Button variant="secondary btn-block">Secondary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="success btn-block">Success</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="warning btn-block">Warning</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10"><Button variant="danger btn-block">Danger</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10"><Button variant="info btn-block">Info</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10"><Button variant="light btn-block">Light</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10"><Button variant="dark btn-block">Dark</Button></div>
            </div>{/* row */}

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">Class Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="pd-0 bg-transparent">variant="[value]"</code></td>
                  <td>primary | secondary | success | warning | danger | info | light | dark</td>
                </tr>
              </tbody>
            </table>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Outline Buttons</div>
            <p className="mg-b-20">Predefined button styles, each serving its own semantic purpose.</p>

            <div className="row row-xs wd-xl-80p">
              <div className="col-sm-6 col-md-3"><Button variant="outline-indigo btn-block">Primary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0"><Button variant="outline-primary btn-block">Secondary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="outline-light btn-block">Light</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="outline-dark btn-block">Dark</Button></div>
            </div>{/* row */}

            <table className="table az-table-reference">
              <thead>
                <tr>
                  <th className="wd-40p">Class Reference</th>
                  <th className="wd-60p">Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="pd-0 bg-transparent">variant="outline-[value]"</code></td>
                  <td>indigo | primary | secondary | success | warning | danger | info | light | dark</td>
                </tr>
              </tbody>
            </table>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Rounded Buttons</div>
            <p className="mg-b-20">Predefined button styles, each serving its own semantic purpose.</p>

            <div className="row row-xs wd-xl-80p">
              <div className="col-sm-6 col-md-3"><Button variant="indigo btn-rounded btn-block">Primary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0"><Button variant="outline-indigo btn-rounded btn-block">Primary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="primary btn-rounded btn-block">Secondary</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="outline-primary btn-rounded btn-block">Secondary</Button></div>
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Button with Icons</div>
            <p className="mg-b-20">A basic button with added icons.</p>

            <div className="row row-xs wd-xl-80p">
              <div className="col-sm-6 col-md-3"><Button variant="indigo btn-with-icon btn-block"><i className="typcn typcn-folder"></i> Folder</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0"><Button variant="primary btn-with-icon btn-block"><i className="typcn typcn-mail"></i> Mail</Button></div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><Button variant="success btn-with-icon btn-block"><i className="typcn typcn-edit"></i> Edit</Button></div>
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Icon Buttons</div>
            <p className="mg-b-20">A button variant for using only icons.</p>

            <div className="btn-icon-list">
              <Button variant="indigo btn-icon"><i className="typcn typcn-folder"></i></Button>
              <Button variant="primary btn-icon"><i className="typcn typcn-calendar-outline"></i></Button>
              <Button variant="success btn-icon"><i className="typcn typcn-document-add"></i></Button>
              <Button variant="info btn-icon"><i className="typcn typcn-arrow-back-outline"></i></Button>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Dropdown Buttons</div>
            <p className="mg-b-20">A button variant for using only icons.</p>

            <div className="row row-xs wd-xl-80p">
              <div className="col-sm-6 col-md-3">
                <Dropdown>
                  <Dropdown.Toggle variant="indigo btn-block" id="dropdown-basic">
                    Dropdown <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/">Activity Logs</Dropdown.Item>
                    <Dropdown.Item href="#/">Account Settings</Dropdown.Item>
                    <Dropdown.Item href="#/">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0">
                <Dropdown>
                  <Dropdown.Toggle variant="primary btn-block" id="dropdown-basic">
                    Dropdown <i className="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/">Activity Logs</Dropdown.Item>
                    <Dropdown.Item href="#/">Account Settings</Dropdown.Item>
                    <Dropdown.Item href="#/">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>{/* row */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Button Groups</div>
            <p className="mg-b-20">Group a series of buttons together on a single line with the button group.</p>

            <div className="row row-sm">
              <div className="col-lg-4">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary">Left</Button>
                  <Button variant="secondary" active>Middle</Button>
                  <Button variant="secondary">Right</Button>
                </ButtonGroup>
              </div>{/* col-4 */}
              <div className="col-lg-2 mg-t-20 mg-lg-t-0">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary btn-icon"><i className="typcn typcn-media-play-outline"></i></Button>
                  <Button variant="secondary btn-icon"><i className="typcn typcn-media-pause-outline"></i></Button>
                  <Button variant="secondary btn-icon" active><i className="typcn typcn-media-stop-outline"></i></Button>
                </ButtonGroup>
              </div>{/* col-2 */}
              <div className="col-lg-4 mg-t-20 mg-lg-t-0">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="indigo btn-icon" active><i className="typcn typcn-media-play-outline"></i></Button>
                  <Button variant="primary btn-icon"><i className="typcn typcn-media-pause-outline"></i></Button>
                  <Button variant="primary btn-icon"><i className="typcn typcn-media-stop-outline"></i></Button>
                </ButtonGroup>
              </div>{/* col-4 */}
            </div>{/* row */}

            <div className="mg-lg-b-30"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Buttons
