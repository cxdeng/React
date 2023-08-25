import React, { Component } from 'react'
import detail from './Detail.module.css'

const DetailData = [
    { id: '01', content: 'Content 1' },
    { id: '02', content: 'Content 2' },
    { id: '03', content: 'Content 3' },
    { id: '04', content: 'Content 4' },
    { id: '05', content: 'Content 5' },
    { id: '06', content: 'Content 6' },
]

export default class Detail extends Component {
    render() {
        console.log(this.props);

        // 接收params参数
        const { id, title } = this.props.match.params
        const findResult = DetailData.find((dataObj) => {
            return dataObj.id === id
        })

        return (
            <div className={detail['detail-container']}>
                <ul>
                    <li>Id: {id}</li>
                    <li>Title: {title}</li>
                    <li>Content: {findResult.content}</li>
                </ul>
            </div>
        )
    }
}
