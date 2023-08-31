import React, { Component, Fragment } from 'react'

export default class UseFragment extends Component {
  render() {
    return (
      /* 
        Fragment 是文档碎片
      */
      <Fragment key={1}>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </Fragment>
      // <>
      //   <input type="text" name="" id="" />
      //   <input type="text" name="" id="" />
      // </>
    )
  }
}
