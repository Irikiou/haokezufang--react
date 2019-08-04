import React from 'react'

// 1.导入react-router-dom中的三个组件
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// 2.导入页面组件
import Home from './pages/Home/home'
import CityList from './pages/CityList/citylist'

// 3.创建APP组件，在其中配置路由规则
const App = () => {
  return (
    <Router>
      <div className="app">
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/citylist">城市选择</Link>
          </li>
        </ul>

        {/* 首页 */}
        <Route path="/home" component={Home} />
        {/* 城市选择页面 */}
        <Route path="/citylist" component={CityList} />
      </div>
    </Router>
  )
}
// 导出APP组件
export default App
