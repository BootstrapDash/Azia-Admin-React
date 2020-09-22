import React, { Component } from 'react'
import UtilitiesSidebar from '../shared/UtilitiesSidebar'

export class Flex extends Component {
  render() {
    return (
      <div>
        <div className="container d-flex p-md-0">
          <UtilitiesSidebar/>
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Utilities</span>
              <span>Flex</span>
            </div>
            <h2 className="az-content-title">Flex</h2>

            <div className="az-content-label mg-b-5">Enable Flex</div>
            <p className="mg-b-20">Apply display utilities to create a flexbox container and transform direct children elements into flex items.</p>

            <div className="d-flex pd-10 bg-gray-200">I'm a flexbox container!</div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Direction</div>
            <p className="mg-b-20">Set the direction of flex items in a flex container with direction utilities.</p>

            <div>
              <div className="d-flex flex-row bg-gray-200 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
              <div className="d-flex flex-row-reverse bg-gray-200">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Justify Content</div>
            <p className="mg-b-20">Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis.</p>

            <div>
              <div className="d-flex flex-row justify-content-start bg-gray-200 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-end bg-gray-200 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-center bg-gray-200 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-between bg-gray-200 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
              <div className="d-flex flex-row justify-content-around bg-gray-200">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Align Items</div>
            <p className="mg-b-20">Use align-items utilities on flexbox containers to change the alignment of flex items on the cross axis.</p>

            <div>
              <div className="d-flex flex-row align-items-start bg-gray-200 ht-100 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>

              <div className="d-flex flex-row align-items-center bg-gray-200 ht-100 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>

              <div className="d-flex flex-row align-items-end bg-gray-200 ht-100 mg-b-20">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>

              <div className="d-flex flex-row align-items-stretch bg-gray-200 ht-100">
                <div className="pd-10 bg-gray-300">Flex item 1</div>
                <div className="pd-10 bg-gray-400">Flex item 2</div>
                <div className="pd-10 bg-gray-500">Flex item 3</div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Align Self</div>
            <p className="mg-b-20">Use align-self utilities on flexbox items to individually change their alignment on the cross axis.</p>

            <div>
              <div className="d-flex flex-row bg-gray-200 ht-100 mg-b-20">
                <div className="pd-10 bg-gray-300 align-self-start">Flex item 1</div>
                <div className="pd-10 bg-gray-400 align-self-center">Flex item 2</div>
                <div className="pd-10 bg-gray-500 align-self-end">Flex item 3</div>
                <div className="pd-10 bg-gray-400 align-self-stretch">Flex item 4</div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Fill</div>
            <p className="mg-b-20">Use the <code>.flex-fill</code> class on a series of sibling elements to force them into widths equal to their content.</p>

            <div>
              <div className="d-flex bg-gray-200">
                <div className="pd-10 bg-gray-300 flex-fill">Flex item with a lot of content</div>
                <div className="pd-10 bg-gray-400 flex-fill">Flex item</div>
                <div className="pd-10 bg-gray-500 flex-fill">Flex item</div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Grow and Shrink</div>
            <p className="mg-b-20">Use <code>.flex-grow</code> utilities to toggle a flex item’s ability to grow to fill available space.</p>

            <div>
              <div className="d-flex bg-gray-200">
                <div className="pd-10 bg-gray-300 flex-grow-1">Flex item</div>
                <div className="pd-10 bg-gray-400">Flex item</div>
                <div className="pd-10 bg-gray-500">Third flex item</div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Auto Margins</div>
            <p className="mg-b-20">Flexbox can do some pretty awesome things when you mix flex alignments with auto margins.</p>

            <div>
              <div className="d-flex bg-gray-200">
                <div className="pd-10 bg-gray-300">Flex item</div>
                <div className="pd-10 bg-gray-400">Flex item</div>
                <div className="pd-10 bg-gray-500 mg-l-auto">Third flex item</div>
              </div>
            </div>

            <hr className="mg-y-30"/>

            <div className="az-content-label mg-b-5">Order</div>
            <p className="mg-b-20">Change the visual order of specific flex items with a handful of order utilities.</p>

            <div>
              <div className="d-flex bg-gray-200">
                <div className="pd-10 bg-gray-300 order-3">First Item</div>
                <div className="pd-10 bg-gray-400 order-2">Second Item</div>
                <div className="pd-10 bg-gray-500 order-1">Third Item</div>
              </div>
            </div>
            
            <div className="ht-40"></div>

          </div>{/* az-content-body */}
        </div>
      </div>
    )
  }
}

export default Flex
