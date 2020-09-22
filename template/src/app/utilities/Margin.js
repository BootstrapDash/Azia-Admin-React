import React, { Component } from "react";
import UtilitiesSidebar from "../shared/UtilitiesSidebar";

export class Margin extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Margin</span>
            </div>
            <h2 className="az-content-title">Margin</h2>

            <div className="az-content-label mg-b-5">Set Margin</div>
            <p className="mg-b-20">
              You can set a margin to an element instantly by using the
              following utilities classes.
            </p>

            <div className="d-flex flex-wrap">
              <div className="wd-150 ht-80 bg-gray-400 mb-lg-0"></div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-400 mg-l-20 mb-2 mb-lg-0">
                .mg-l-20
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-400 mg-l-40 mb-lg-0">
                .mg-l-40
              </div>
            </div>

            <div className="table-responsive">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Margin</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .mg-t-[value]
                        <br />
                        .mg-r-[value]
                        <br />
                        .mg-b-[value]
                        <br />
                        .mg-l-[value]
                      </code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Media Query Margin</div>
            <p className="mg-b-0">
              You can also set a margin to a different media query using the
              following utilities classes.
            </p>

            <div className="table-responsive">
              <table className="table az-table-reference">
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
                        .mg-[breakpoint]-t-[value]
                        <br />
                        .mg-[breakpoint]-r-[value]
                        <br />
                        .mg-[breakpoint]-b-[value]
                        <br />
                        .mg-[breakpoint]-l-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">
                        breakpoint: xs | sm | md | lg | xl
                      </p>
                      <p className="mg-b-0">
                        value: the margin value (refer to code above)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Auto Margin</div>
            <p className="mg-b-0">
              You can also set a margin to a different media query using the
              following utilities classes.
            </p>

            <div className="table-responsive">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.mg-t-auto</code>
                    </td>
                    <td>Set a top margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-r-auto</code>
                    </td>
                    <td>Set a right margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-b-auto</code>
                    </td>
                    <td>Set a bottom margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-l-auto</code>
                    </td>
                    <td>Set a left margin to auto</td>
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

export default Margin;
