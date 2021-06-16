import React, { PureComponent } from 'react';
import Header from './Header';


class SignUp extends PureComponent {
  render() {
    return (
      <div>        
        <Header isSingUp={true}/>
        <article class="table-set">
        <div class="inner">
          <div class="table-list-tit">회원가입</div>
          <table>
            <colgroup>
              <col />
              <col />
            </colgroup>
            <tbody>
            <tr>
              <th>아이디</th>
              <td><input class="tbox"/></td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td><input class="tbox"/></td>
            </tr>
            <tr>
              <th>기업명</th>
              <td><input class="tbox"/></td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td><input class="tbox"/></td>
            </tr>
            </tbody>
          </table>
          <div class="table-menu">
            <a href="javascript:history.back()">취소</a>
            <a href="#none">회원가입</a>
          </div>
        </div>
      </article>
      </div>
    );
  }
}


export default SignUp;