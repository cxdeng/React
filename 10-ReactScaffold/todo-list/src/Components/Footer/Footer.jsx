import React, { Component } from 'react'
import footer from './Footer.module.css'

export default class Footer extends Component {

  // 全选，checkbox的回调函数
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  // 清除所有已完成的回调
  handlerClearAllDone = () => {
    this.props.clearAllDone()
  }


  render() {
    const { todoList } = this.props

    // 计算总数
    const total = todoList.length
    console.log('total', total);

    // 计算已完成的个数
    const doneCount = todoList.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0)
    }, 0)
    console.log('finishedCount', doneCount);

    const isChecked = doneCount === total && total !== 0 ? true : false

    return (
      <div className={footer.footer}>
        <label htmlFor="">
          <input ref={(currentNode) => this.input = currentNode} type="checkbox" checked={isChecked} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>Finished {doneCount}</span> / Total {total}
        </span>
        <button onClick={this.handlerClearAllDone} >Clear Finished Task</button>
      </div>
    )


  }
}