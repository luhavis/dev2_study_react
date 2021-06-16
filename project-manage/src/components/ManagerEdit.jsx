import React, { PureComponent } from 'react';
import Header from './Header';

class ManagerEdit extends PureComponent {
  render() {
    return (
      <div>
        <Header isManager={true}/>
        <article class="table-set">
          <div class="inner">
            <div class="table-list-tit">담당자 상세</div>
            <table>
              <colgroup>
                <col />
                <col />
              </colgroup>
              <tbody>
              <tr>
                <th>담당자명</th>
                <td><input class="tbox"/></td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td><input class="tbox"/></td>
              </tr>
              <tr>
                <th>등록일시</th>
                <td>2020-10-15 10:15:15</td>
              </tr>
              <tr>
                <th>수정일시</th>
                <td>2020-10-15 10:15:15</td>
              </tr>

              </tbody>
            </table>
            <div class="table-menu">
              <a href="/manager">취소</a>
              <a href="#none">수정</a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default ManagerEdit;