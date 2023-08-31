import React from 'react'
import ReactDOM from 'react-dom'

export default function Hooks() {
    /* 
        useState: 返回数组
            1. 状态
            2. 更新状态的方法
    */
    const [count, setCount] = React.useState(10)
    const [name, setName] = React.useState("Jack")
    const [autoNum, setAutoNum] = React.useState(0)

    const myRef = React.useRef()
    let h3Data = ''


    function add() {
        // setCount(count + 1)
        setCount((count) => {
            return count + 1
        })
    }

    function changeName() {
        setName("Tom")
    }

    function show() {
        alert(myRef.current.value)
    }

    /* 
        卸载组件的回调函数
    */
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
    }


    React.useEffect(() => {
        let timer = setInterval(() => {
            setAutoNum(autoNum => autoNum + 1)
        }, 1000)

        return () => {
            /* 
                返回的函数将会在组件被卸载之前被调用
            */
            clearInterval(timer)
        }
    }, [])



    return (
        <div>
            <h2>当前求和为: {count}</h2>
            <h3>This is: {name}</h3>
            <h3>Auto Increment: {autoNum}</h3>
            <button onClick={add}>Click to add</button>
            <button onClick={changeName}>Click to add</button>
            <button onClick={unmount}>Unmount Component</button>
            <hr />
            <input type="text" ref={myRef} />
            <button onClick={show}>Click to Render data</button>
        </div>
    )


}
