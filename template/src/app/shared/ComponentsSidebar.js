import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export class ComponentsSidebar extends Component {
  render() {
    return (
      <div>
        <div className="az-content-left az-content-left-components">
          <div className="component-item">
            <label>UI Elements</label>
            <nav className="nav flex-column">
              <Link to="/ui-elements/buttons" className={ this.isPathActive('/ui-elements/buttons') ? "nav-link active" : "nav-link" }>Buttons</Link>
              <Link to="/ui-elements/dropdowns" className={ this.isPathActive('/ui-elements/dropdowns') ? "nav-link active" : "nav-link" }>Dropdown</Link>
              <Link to="/ui-elements/icons" className={ this.isPathActive('/ui-elements/icons') ? "nav-link active" : "nav-link" }>Icons</Link>
            </nav>

            <label>Forms</label>
            <nav className="nav flex-column">
              <Link to="/form/form-elements" className={ this.isPathActive('/form/form-elements') ? "nav-link active" : "nav-link" }>Form Elements</Link>
            </nav>

            <label>Charts</label>
            <nav className="nav flex-column">
              <Link to="/charts/chartjs" className={ this.isPathActive('/charts/chartjs') ? "nav-link active" : "nav-link" }>ChartJS</Link>
            </nav>

            <label>Tables</label>
            <nav className="nav flex-column">
              <Link to="/tables/basic-table" className={ this.isPathActive('/tables/basic-table') ? "nav-link active" : "nav-link" }>Basic Tables</Link>
            </nav>
          </div>{/* component-item */}

        </div>{/* az-content-left */}
      </div>
    )
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(ComponentsSidebar)
