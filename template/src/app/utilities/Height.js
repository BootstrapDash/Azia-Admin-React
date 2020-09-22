import React, { Component } from "react";
import UtilitiesSidebar from "../shared/UtilitiesSidebar";

export class Height extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Height</span>
            </div>
            <h2 className="az-content-title">Height</h2>

            <div className="az-content-label mg-b-5">Set Height</div>
            <p className="mg-b-20">
              You can set a height to an element instantly by using the
              following utilities classes for height.
            </p>

            <div className="d-flex flex-wrap">
              <div className="d-flex align-items-center justify-content-center wd-150 ht-80 bg-gray-400 mb-2 mb-lg-0">
                .ht-80
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-150 bg-gray-400 mg-l-20 mb-2 mb-lg-0">
                .ht-150
              </div>
              <div className="d-flex align-items-center justify-content-center wd-150 ht-100 bg-gray-400 mg-l-20 mb-2 mb-lg-0">
                .ht-100
              </div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Height</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[value]</code>
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
                    <th className="wd-30p">Regular Height</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[value]</code>
                    </td>
                    <td>15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-responsive">
              <table className="table az-table-reference mg-t-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Bigger Height</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.ht-[value]</code>
                    </td>
                    <td>
                      150 | 200 | 250 | 300 | ... | 850 &nbsp; (step of 50)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* table-responsive */}

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Percentage Height</div>
            <p className="mg-b-0">
              You can set a height through percentage using the following
              utilities classes.
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
                      <code>.ht-[value]p</code>
                    </td>
                    <td>10 | 20 | 30 | 40 | ... | 100 &nbsp; (step of 10)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Media Query Height</div>
            <p className="mg-b-0">
              You can also set a height to a different media query using the
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
                      <code>.ht-[size]-[value]</code>
                    </td>
                    <td rowSpan="2" className="bd-l">
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the height value (refer to code above)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.ht-[size]-[value]p</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="mg-y-30" />

            <div className="az-content-label mg-b-5">Extra Height Classes</div>
            <p className="mg-b-0">
              You can also set a height using the extra utilities classes below.
            </p>

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
                    <td>
                      <code>.ht-100v</code>
                    </td>
                    <td>
                      Set a height to an element based on viewport height.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>.ht-auto</code>
                    </td>
                    <td>Set an auto height to an element.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="ht-40"></div>
          </div>
          {/* az-content-body */}
        </div>
      </div>
    );
  }
}

export default Height;
