import React from 'react'
import { Button } from 'antd-mobile'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>这是首页</h1>
        {/* 渲染组件 */}
        <Button type="primary">登录</Button>
      </div>
    )
  }
}
