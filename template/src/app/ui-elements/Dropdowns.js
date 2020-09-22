import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import {Dropdown} from 'react-bootstrap';

export class Dropdowns extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>UI Elements</span>
              <span>Dropdown</span>
            </div>
            <h2 className="az-content-title">Dropdown</h2>

            <div className="az-content-label mg-b-5">Basic Example</div>
            <p className="mg-b-20">Wrap the dropdown’s toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position relative. Dropdowns can be triggered from link or button elements to better fit your potential needs.</p>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropdown Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Dropup</div>
            <p className="mg-b-20">Trigger dropdown menus above elements by adding dropup class to the parent element.</p>

            <Dropdown drop={'up'}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropup Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Dropright</div>
            <p className="mg-b-20">Trigger dropdown menus above elements by adding dropright class to the parent element.</p>

            <Dropdown drop={'right'}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropright Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Dropleft</div>
            <p className="mg-b-20">Trigger dropdown menus above elements by adding dropleft class to the parent element.</p>

            <Dropdown drop={'left'}>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropleft Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Active Menu Item</div>
            <p className="mg-b-20">Add active class to items in the dropdown to style them as active.</p>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropup Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2" active>Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Disabled Menu Item</div>
            <p className="mg-b-20">Add disabled class to items in the dropdown to style them as disabled.</p>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropup Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2" disabled>Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Dropdown Header</div>
            <p className="mg-b-20">Add a header to label sections of actions in any dropdown menu.</p>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropup Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Header className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">Dropdown header</Dropdown.Header>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <hr className="mg-y-40"/>

            <div className="az-content-label mg-b-5">Dropdown Divider</div>
            <p className="mg-b-20">Separate groups of related menu items with a divider.</p>

            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Dropup Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="tx-13">
                <Dropdown.Header className="dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1">Dropdown header</Dropdown.Header>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>{/* container */}
      </div>
    )
  }
}

export default Dropdowns
