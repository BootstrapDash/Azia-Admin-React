import React, { Component } from "react";
import UtilitiesSidebar from "../shared/UtilitiesSidebar";

export class Width extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Width</span>
            </div>
            <h2 className="az-content-title">Width</h2>

            <div className="az-content-label mg-b-5">Set Width</div>
            <p className="mg-b-20">
              You can set a width to an element instantly by using the following
              utilities classes for width.
            </p>

            <div className="d-flex flex-wrap">
              <div className="d-flex align-items-center justify-content-center wd-80 ht-80 bg-gray-400 mb-2 mb-lg-0">
                .wd-80
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-400 mg-l-20 mb-2 mb-lg-0">
                .wd-150
              </div>
              <div className="d-flex align-items-center justify-content-center wd-100 ht-80 bg-gray-400 mg-l-20 mb-2 mb-lg-0">
                .wd-100
              </div>
            </div>

            <div className="table-responsive">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Regular Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Bigger Width</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-[value]</code>
                    </td>
                    <td>
                      150 | 200 | 250 | 300 | ... | 1000 &nbsp; (step of 50)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Percentage Width</div>
            <p className="mg-b-20">
              You can set a width through percentage using the following
              utilities classes.
            </p>

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
                      <code>.wd-[value]p</code>
                    </td>
                    <td>10 | 20 | 30 | 40 | ... | 100 &nbsp; (step of 10)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Media Query Width</div>
            <p className="mg-b-20">
              You can also set a width to a different media query using the
              following utilities classes.
            </p>

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
                      <code>.wd-[size]-[value]</code>
                    </td>
                    <td rowSpan="2">
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the width value (refer to code above)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.wd-[size]-[value]p</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Extra Width Classes</div>
            <p className="mg-b-20">
              You can also set a width using the extra utilities classes below.
            </p>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.wd-100v</code>
                    </td>
                    <td>Set a width to an element based on viewport width.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.wd-auto</code>
                    </td>
                    <td>Set an auto width to an element.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <div className="ht-40"></div>
          </div>
          {/* az-content-body */}
        </div>
      </div>
    );
  }
}

export default Width;
