import React, { Component } from 'react';
import TodaysPlan from './components/TodaysPlan';
import PropsComponent from './components/PropsComponent';
import ChildComponent from './components/ChildComponent';
import './App.css';
import BooleanComponent from './components/BooleanComponent';
import ChildComponent2 from './components/ChildComponent2';
import DefaultPropsComponent from './components/DefaultPropsComponent';
import ChildProperty from './components/ChildProperty';
import StateExample from './components/StateExample';
import ForceUpdate from './components/ForceUpdate';
import IncrementComponent from './components/IncrementComponent';
import LifeCycleExample from './components/LifeCycleExample';
import CounterComponent from './components/CounterComponent';
import NewCounter from './components/NewCounter';
import Input from './components/Input';

// import './materialize.css';
import './sass/materialize.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasDestoryed: false, count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }

  componentDidMount() {
    this.setState({ hasDestoryed: true, count: 0 });
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }

  render() {
    return (
      // 아래의 내용이 JSX 양식 입니다.
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>리액트 시작하기!</div>
          </div>
        </nav>
        <h1>Material CSS</h1>

        <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
        <div>안녕하세요</div>

        <TodaysPlan />

        <PropsComponent name="뚜잇" />

        <ChildComponent
          boolValue={true}
          numValue={1}
          arrayValue={[1, 2, 3]}
          objValue={{ name: '이름', age: 33 }}
          nodeValue={<h1>노드</h1>}
          funcValue={() => {
            console.log('메세지');
          }}
        />

        <div>
          <b>지루할 때: </b>
          <BooleanComponent bored />
        </div>
        <div>
          <b>즐거울 때 : </b> <BooleanComponent />
        </div>

        <ChildComponent2 objValue={{ age: 20 }} requiredStringValue="문자" />

        <DefaultPropsComponent />

        <ChildProperty>
          <div>
            <span>자식 노드!</span>
          </div>
        </ChildProperty>

        <StateExample />

        {/* <ForceUpdate /> */}

        <IncrementComponent />

        <div>{this.state.hasDestoryed ? null : <LifeCycleExample />}</div>

        <CounterComponent count={1} />
        <CounterComponent count={this.state.count} />
        <NewCounter count={this.state.count} />
        <button onClick={this.resetCount}>{this.state.count + 10} 으로 초기화</button>

        <Input type={'text'} name={'dfdf'} errorMessage={'에러!'} autoFocus />
      </div>
    );
  }
}
export default App;
