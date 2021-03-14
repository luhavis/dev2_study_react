import React, { Component } from 'react';
import TodaysPlan from './components/TodaysPlan';
import './App.css';

class App extends React.Component {
  render() {
    return (
      // 아래의 내용이 JSX 양식 입니다.
      <div>
        <img src="http://www.easyspub.co.kr/images/logo_footer.png" />
        <div>안녕하세요</div>

        <TodaysPlan />
      </div>
    );
  }
}
export default App;
