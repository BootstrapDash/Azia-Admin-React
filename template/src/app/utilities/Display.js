import React, { Component } from 'react'
import UtilitiesSidebar from '../shared/UtilitiesSidebar'

export class Display extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Display</span>
            </div>
            <h2 className="az-content-title">Display</h2>

            <div className="az-content-label mg-b-5">Basic Display</div>
            <p className="mg-b-0">The following display utilities classes will set display property of an element.</p>

            <div className="table-responsive">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.d-inline</code></td>
                    <td>Set an inline display property of an element.</td>
                  </tr>
                  <tr>
                    <td><code>.d-inline-block</code></td>
                    <td>Set an inline-block display property of an element.</td>
                  </tr>
                  <tr>
                    <td><code>.d-block</code></td>
                    <td>Set a block display property of an element.</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Hiding Elements</div>
            <p className="mg-b-0">For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device.</p>

            <div className="table-responsive">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-40p">Class</th>
                    <th className="wd-60p">Screen Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.d-none</code></td>
                    <td>Hidden on all</td>
                  </tr>
                  <tr>
                    <td><code>.d-none .d-sm-block</code></td>
                    <td>Hidden only on xs</td>
                  </tr>
                  <tr>
                    <td><code>.d-sm-none .d-md-block</code></td>
                    <td>Hidden only on sm</td>
                  </tr>
                  <tr>
                    <td><code>.d-md-none .d-lg-block</code></td>
                    <td>Hidden only on md</td>
                  </tr>
                  <tr>
                    <td><code>.d-lg-none .d-xl-block</code></td>
                    <td>Hidden only on lg</td>
                  </tr>
                  <tr>
                    <td><code>.d-xl-none</code></td>
                    <td>Hidden only on xl</td>
                  </tr>
                  <tr>
                    <td><code>.d-block</code></td>
                    <td>Visible on all</td>
                  </tr>
                  <tr>
                    <td><code>.d-block .d-sm-none</code></td>
                    <td>Visible only on xs</td>
                  </tr>
                  <tr>
                    <td><code>.d-none .d-sm-block .d-md-none</code></td>
                    <td>Visible only on sm</td>
                  </tr>
                  <tr>
                    <td><code>.d-none .d-md-block .d-lg-none</code></td>
                    <td>Visible only on md</td>
                  </tr>
                  <tr>
                    <td><code>.d-none .d-lg-block .d-xl-none</code></td>
                    <td>Visible only on lg</td>
                  </tr>
                  <tr>
                    <td><code>.d-none .d-xl-block</code></td>
                    <td>Visible only on xl</td>
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

export default Display
