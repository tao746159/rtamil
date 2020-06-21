import React, { useState, ReactNode } from 'react';
import { BrowserRouter, Switch, Route, withRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'


import './stylus/index.styl'
import configureStore from './redux/configureStore'
import Tarber from './react-types-ui/Tarber/Tarber';
import TarberItem from './react-types-ui/Tarber/TarberItem/TarberItem';
import Routers from './router/router'
const store = configureStore()
interface State {
  url: string
}

const App = () => {
  let [state, setState] = useState('home')
  let handleTab = (name: string) => {
    setState(state = name)
  }
  return (
    <Provider store={store}>
      <BrowserRouter >
        <div className="App">
          <Switch>
            {
              Routers.map((item: any, index: number) => {
                return <Route key={index} path={item.path} exact
                  component={(props: any): any => { return item.auth ? <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }} /> : <item.component {...props} /> }}
                />
              })
            }
          </Switch>
          <Tarber onClick={handleTab}>
            <TarberItem
              router="home"
              isSelecd={state === 'home'}
              onPren={() => { setState(state = 'home') }}
              title="首页"
              icon={<span className="home_icon"></span>}
              activeIcon={<span className="home_icon_active"></span>}
            ></TarberItem>
            <TarberItem
              router="sort"
              isSelecd={state === 'sort'}
              onPren={() => { setState(state = 'sort') }}
              title="分类"
              icon={<span className="sort_icon"></span>}
              activeIcon={<span className="sort_icon_active"></span>}
            ></TarberItem>
            <TarberItem
              router="shiyouq"
              isSelecd={state === 'shiyouq'}
              onPren={() => { setState(state = 'shiyouq') }}
              title="食友圈"
              icon={<span className="shiyouq_icon"></span>}
              activeIcon={<span className="shiyouq_icon_active"></span>}
            ></TarberItem>
            <TarberItem
              router="my"
              isSelecd={state === 'my'}
              onPren={() => { setState(state = 'my') }}
              title="我的"
              icon={<span className="my_icon"></span>}
              activeIcon={<span className="my_icon_active"></span>}
            ></TarberItem>
          </Tarber>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
