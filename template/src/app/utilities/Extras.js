import React, { Component } from 'react'
import UtilitiesSidebar from '../shared/UtilitiesSidebar'

export class Extras extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Extras</span>
            </div>
            <h2 className="az-content-title">Extras</h2>

            <div className="az-content-label mg-b-5">Opacity</div>
            <p className="mg-b-20">You can set opacity to an element instantly by using the following utilities classes for opacity.</p>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.op-[value]</code></td>
                    <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.op-[breakpoint]-[value]</code>
                    </td>
                    <td>
                      <p className="mg-b-5">breakpoint: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Shadow</div>
            <p className="mg-b-20">You can add or remove shadow to an element instantly by using the following utilities classes for shadow.</p>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.shadow-base</code></td>
                    <td>Add shadow to any box element.</td>
                  </tr>
                  <tr>
                    <td><code>.shadow-none</code></td>
                    <td>Remove shadow to any box element.</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}



            <div className="ht-40"></div>

            <div className="az-footer mg-t-auto">
              <div className="container">
                <span>&copy; 2019 Azia Responsive Bootstrap 4 Dashboard Template</span>
              </div>{/* container */}
            </div>{/* az-footer */}
          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Extras
