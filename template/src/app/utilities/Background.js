import React, { Component } from 'react'
import UtilitiesSidebar from '../shared/UtilitiesSidebar';

export class Background extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Background</span>
            </div>
            <h2 className="az-content-title">Background</h2>

            <div className="az-content-label mg-b-5">Gray Set</div>
            <p className="mg-b-20">A set of gray background utilities classes.</p>

            <div className="d-flex flex-wrap ht-80">
              <div className="flex-1 bg-gray-900 ht-100p"></div>
              <div className="flex-1 bg-gray-800 ht-100p"></div>
              <div className="flex-1 bg-gray-700 ht-100p"></div>
              <div className="flex-1 bg-gray-600 ht-100p"></div>
              <div className="flex-1 bg-gray-500 ht-100p"></div>
              <div className="flex-1 bg-gray-400 ht-100p"></div>
              <div className="flex-1 bg-gray-300 ht-100p"></div>
              <div className="flex-1 bg-gray-200 ht-100p"></div>
              <div className="flex-1 bg-gray-100 ht-100p"></div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-40p">Class Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>className="bg-gray-[value]"</code></td>
                    <td>900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Solid Background Set</div>
            <p className="mg-b-20">A set of solid background utilities classes.</p>

            <div className="d-flex flex-wrap ht-80">
              <div className="flex-1 bg-primary ht-100p"></div>
              <div className="flex-1 bg-success ht-100p"></div>
              <div className="flex-1 bg-warning ht-100p"></div>
              <div className="flex-1 bg-danger ht-100p"></div>
              <div className="flex-1 bg-info ht-100p"></div>
              <div className="flex-1 bg-indigo ht-100p"></div>
              <div className="flex-1 bg-purple ht-100p"></div>
              <div className="flex-1 bg-pink ht-100p"></div>
              <div className="flex-1 bg-teal ht-100p"></div>
              <div className="flex-1 bg-orange ht-100p"></div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-40p">Class Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>className="bg-[value]"</code></td>
                    <td>primary | secondary | success | warning | danger | info | indigo | purple | pink | teal | orange</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Transparent White Set</div>
            <p className="mg-b-20">A set of overlay transparent white background utilities classes.</p>

            <div className="d-flex flex-wrap ht-80">
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-1"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-2"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-3"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-4"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-5"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-6"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-7"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-8"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-white-9"></div>
              </div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-40p">Class Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>className="bg-white-[value]"</code></td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </table>
            </div>{/* table-responsive */}

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Transparent Black Set</div>
            <p className="mg-b-20">A set of overlay transparent black background utilities classes.</p>

            <div className="d-flex flex-wrap ht-80">
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-1"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-2"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-3"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-4"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-5"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-6"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-7"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-8"></div>
              </div>
              <div className="flex-1 pos-relative">
                <img src={require("../../assets/images/img14.jpg")} className="wd-100p ht-100p object-fit-cover" alt=""/>
                <div className="pos-absolute a-0 bg-black-9"></div>
              </div>
            </div>

            <div className="table-responsive mg-t-25">
              <table className="table az-table-reference">
                <thead>
                  <tr>
                    <th className="wd-40p">Class Reference</th>
                    <th className="wd-60p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>className="bg-black-[value]"</code></td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
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

export default Background
