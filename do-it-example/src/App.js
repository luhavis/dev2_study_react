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

class App extends React.Component {
  render() {
    return (
      // 아래의 내용이 JSX 양식 입니다.
      <div>
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
      </div>
    );
  }
}
export default App;
