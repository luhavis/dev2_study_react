import React, { PureComponent } from 'react';
import Header from './Header';

class ProjectEdit extends PureComponent {
  render() {
    return (
      <div>
        <Header isProjectList={true}/>
        <article class="table-set">
          <div class="inner">
            <div class="table-list-tit">프로젝트 상세</div>
            <table>
              <colgroup>
                <col />
                <col />
              </colgroup>
              <tbody>
              <tr>
                <th>프로젝트명</th>
                <td><input class="tbox"/></td>
              </tr>
              <tr>
                <th>상위프로젝트 선택</th>
                <td>
                  <select>
                    <option>선택</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>상태</th>
                <td>
                  <select>
                    <option>선택</option>
                    <option>대기</option>
                    <option>진행중</option>
                    <option>완료</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>금액</th>
                <td><input class="tbox"/></td>
              </tr>
              <tr>
                <th>담당자</th>
                <td>
                  <select>
                    <option>선택</option>
                  </select>
                </td>
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
              <a href="/">취소</a>
              <a href="#none">등록</a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}


export default ProjectEdit;