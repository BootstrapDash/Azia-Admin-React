import React, { Component } from 'react'
import UtilitiesSidebar from '../shared/UtilitiesSidebar'

export class Typography extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Typography</span>
            </div>
            <h2 className="az-content-title">Typography</h2>

            <div className="az-content-label mg-b-5">Font Size</div>
            <p className="mg-b-20">You can set a font size instantly to an element by using the following utilities classes.</p>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.tx-[size]</code></td>
                    <td>8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 </td>
                  </tr>
                  <tr>
                    <td><code>.tx-[size]</code></td>
                    <td>18 | 20 | 22 | 24 | ... | 140 (step of 2) </td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-30p">Viewport</th>
                    <th className="wd-40p">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.tx-[viewport]-[size]</code></td>
                    <td>xs | sm | md | lg | xl</td>
                    <td>8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 </td>
                  </tr>
                  <tr>
                    <td><code>.tx-[viewport]-[size]</code></td>
                    <td>xs | sm | md | lg | xl</td>
                    <td>18 | 20 | 22 | 24 | ... | 140 (step of 2) </td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Font Weight</div>
            <p className="mg-b-20">You can set a font weight instantly to an element by using the following utilities classes.</p>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.tx-[weight]</code></td>
                    <td>bold | semibold | medium | normal | light | thin | xthin</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Font Family</div>
            <p className="mg-b-20">You can set a font family instantly to an element by using the following utilities classes.</p>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Family</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.tx-[family]</code></td>
                    <td>sserif | roboto</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Font Color</div>
            <p className="mg-b-20">You can set a font color instantly to an element by using the following utilities classes.</p>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.tx-[color]</code></td>
                    <td>primary | success | warning | danger | info | indigo | purple | orange | teal | pink | black | white | inverse</td>
                  </tr>
                  <tr>
                    <td><code>.tx-gray-[num]</code></td>
                    <td>100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900</td>
                  </tr>
                  <tr>
                    <td><code>.tx-white-[transparency]</code></td>
                    <td>2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Font Spacing</div>
            <p className="mg-b-20">You can set a font spacing instantly to an element by using the following utilities classes.</p>

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
                    <td><code>.tx-spacing-[value]</code></td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8</td>
                  </tr>
                  <tr>
                    <td><code>.tx-spacing--[value]</code></td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 ( negative spacing result )</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Line Height</div>
            <p className="mg-b-20">You can set a line height instantly to an element by using the following utilities classes.</p>

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
                    <td><code>.lh-[value]</code></td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-20p">Viewport</th>
                    <th className="wd-50p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.lh-[viewport]-[value]</code></td>
                    <td>xs | sm | md | lg | xl</td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15</td>
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

export default Typography
