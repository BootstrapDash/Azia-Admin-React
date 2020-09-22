import React, { Component } from 'react'
import UtilitiesSidebar from '../shared/UtilitiesSidebar'

export class Border extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column w-100">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Border</span>
            </div>
            <h2 className="az-content-title">Border</h2>

            <div className="az-content-label mg-b-5">Set Border</div>
            <p className="mg-b-20">The following border utilities classes will add border to any side of an element.</p>

            <div className="d-flex">
              <div className="wd-80 ht-80 bg-gray-100 bd bd-2"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd-t bd-2"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd-r bd-2"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd-b bd-2"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd-l bd-2"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd-y bd-2"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd-x bd-2"></div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd"</code></td>
                    <td>Add border in all sides of an element using default color and width.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd-t"</code></td>
                    <td>Add border to top side of element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd-r"</code></td>
                    <td>Add border to right side of element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd-b"</code></td>
                    <td>Add border to bottom side of element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd-l"</code></td>
                    <td>Add border to left side of element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd-x"</code></td>
                    <td>Add border to left and right side of element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd-y"</code></td>
                    <td>Add border to top and bottom side of element.</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Border Sizes</div>
            <p className="mg-b-20">Below are the available border size utilities classes.</p>

            <div className="d-flex">
              <div className="wd-80 ht-80 bg-gray-100 bd"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-2"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-3"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-4"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-5"></div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd"</code></td>
                    <td>Set 1px (default) border to element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd bd-2"</code></td>
                    <td>Set 2px border to element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd bd-3"</code></td>
                    <td>Set 3px border to element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd bd-4"</code></td>
                    <td>Set 4px border to element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">className="bd bd-5"</code></td>
                    <td>Set 5px border to element.</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Remove Border</div>
            <p className="mg-b-20">You can remove a border to a single side of an element by using the following border utilities classes.</p>

            <div className="d-flex">
              <div className="wd-80 ht-80 bg-gray-100 bd bd-2 bd-t-0"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-2 bd-r-0"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-2 bd-b-0"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-2 bd-l-0"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-2 bd-x-0"></div>
              <div className="wd-80 ht-80 bg-gray-100 mg-l-10 bd bd-2 bd-y-0"></div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-t-0</code></td>
                    <td>Remove top border of an element</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-r-0</code></td>
                    <td>Remove right border of an element</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-b-0</code></td>
                    <td>Remove bottom border of an element</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-l-0</code></td>
                    <td>Remove left border of an element</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-x-0</code></td>
                    <td>Remove left and right border of an element</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-y-0</code></td>
                    <td>Remove top and bottom border of an element</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-[t||r|bl|x|y]-0-f</code></td>
                    <td>Force remove border of any side of an element. </td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Border Color</div>
            <p className="mg-b-20">You can set a border color of any side of an element by adding the following utilities classes below.</p>

            <div className="d-flex mg-b-40">
              <div className="wd-80 ht-80 bd bd-2 bd-primary"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-2 bd-success"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-2 bd-warning"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-2 bd-danger"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-2 bd-info"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-2 bd-gray-500"></div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-[value]</code></td>
                    <td>primary | success | warning | danger | info | indigo | purple | pink | teal | orange </td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.bd-gray-[value]</code></td>
                    <td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Border Radius</div>
            <p className="mg-b-20">You can set a border to any element by using the following utilities classes below.</p>

            <div className="d-flex">
              <div className="wd-80 ht-80 bd bd-gray-500 rounded"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-5"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-10"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-20"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-30"></div>
              <div className="wd-80 ht-80 mg-l-10 bd bd-gray-500 rounded-circle"></div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description / Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.rounded</code></td>
                    <td>Set a border radius of 2px (default) to an element.</td>
                  </tr>
                  <tr>
                    <td><code className="pd-0 bg-transparent">.rounded-[value]</code></td>
                    <td>5 | 10 | 20 | 30 | 40 | 50 | circle</td>
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

export default Border
