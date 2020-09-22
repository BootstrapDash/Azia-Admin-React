import React, { Component } from 'react'
import UtilitiesSidebar from '../shared/UtilitiesSidebar'

export class Position extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Position</span>
            </div>
            <h2 className="az-content-title">Position</h2>

            <div className="az-content-label mg-b-5">Set Position</div>
            <p className="mg-b-20">You can set a position to an element instantly by using the following utilities classes.</p>

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
                    <td><code>.pos-relative</code></td>
                    <td>Set a relative position to an element.</td>
                  </tr>
                  <tr>
                    <td><code>.pos-absolute</code></td>
                    <td>Set an absolute position to an element.</td>
                  </tr>
                  <tr>
                    <td><code>.pos-fixed</code></td>
                    <td>Set a fixed position to an element.</td>
                  </tr>
                  <tr>
                    <td><code>.pos-static</code></td>
                    <td>Set a static position to an element.</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Cornering</div>
            <p className="mg-b-20">You can set a top,right,bottom and left position to an element using the following utilities classes.</p>

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
                    <td><code>.t-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.r-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.b-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.l-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">X and Y Position</div>
            <p className="mg-b-20">You can set a top,right,bottom and left position to an element using the following utilities classes.</p>

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
                    <td><code>.t-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.r-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.b-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.l-[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Negative Corner</div>
            <p className="mg-b-20">You can set a negative positioning to an element using the following utilities classes.</p>

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
                    <td><code>.t--[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.r--[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.b--[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                  <tr>
                    <td><code>.l--[value]</code></td>
                    <td>0 | 5 | 10 | 15 | ... | 100 (step of 5)</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Z-Index Property</div>
            <p className="mg-b-20">You can set a z-index to an element instantly using the following utilities classes.</p>

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
                    <td><code>.z-index-[value]</code></td>
                    <td>10 | 50 | 100 | 150 | 200</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Position
