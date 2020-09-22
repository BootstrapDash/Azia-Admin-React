import React, { Component } from "react";
import UtilitiesSidebar from "../shared/UtilitiesSidebar";

export class Padding extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Padding</span>
            </div>
            <h2 className="az-content-title">Padding</h2>

            <div className="az-content-label mg-b-5">Set Padding</div>
            <p className="mg-b-20">
              You can set a padding to an element instantly by using the
              following utilities classes.
            </p>

            <div className="d-flex flex-wrap">
              <div className="wd-200 ht-100 bg-gray-500 pd-l-30 mb-2 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
                  .pd-l-30
                </div>
              </div>
              <div className="wd-200 ht-100 bg-gray-500 mg-l-20 pd-l-50 mb-2  mb-lg-0">
                <div className="d-flex align-items-center justify-content-center ht-100p bg-gray-400">
                  .pd-l-50
                </div>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Padding</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .pd-t-[value]
                        <br />
                        .pd-r-[value]
                        <br />
                        .pd-b-[value]
                        <br />
                        .pd-l-[value]
                      </code>
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
                    <th className="wd-30p">Bigger Padding</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .pd-t-[value]
                        <br />
                        .pd-r-[value]
                        <br />
                        .pd-b-[value]
                        <br />
                        .pd-l-[value]
                      </code>
                    </td>
                    <td>15 | 20 | 25 | 30 | ... | 120 &nbsp; (step of 5)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Even Bigger Padding</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .pd-t-[value]
                        <br />
                        .pd-r-[value]
                        <br />
                        .pd-b-[value]
                        <br />
                        .pd-l-[value]
                      </code>
                    </td>
                    <td>
                      110 | 120 | 130 | 140 | ... | 200 &nbsp; (step of 10)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Media Query Padding</div>
            <p className="mg-b-20">
              You can also set a padding to a different media query using the
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
                      <code>
                        .pd-[size]-t-[value]
                        <br />
                        .pd-[size]-r-[value]
                        <br />
                        .pd-[size]-b-[value]
                        <br />
                        .pd-[size]-l-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the padding value (refer to code above)
                      </p>
                    </td>
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

export default Padding;
