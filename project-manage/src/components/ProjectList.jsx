import React, { PureComponent } from 'react';
import Header from './Header';


class ProjectList extends PureComponent {
  render() {
    return (
      <div>
        <Header isProjectList={true}/>
        <div className="wrapper">
          <article class="table-list">
            <div class="inner">
              <div class="table-list-tit">테이블 타이틀</div>

              <article class="search__form">
                <select>
                  <option>프로젝트명</option>
                  <option>담당자</option>
                </select>
                <input placeholder="검색어 입력"/>
                <a href="#none" class="search-btn">검색</a>
              </article>

              <table>
                <thead>
                <tr>
                  <th>NO</th>
                  <th>프로젝트명</th>
                  <th>담당자</th>
                  <th>상태</th>
                  <th>등록일시</th>
                  <th>메뉴</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>냉매</td>
                  <td>신혜욱</td>
                  <td>완료</td>
                  <td>2020-10-02</td>
                  <td><a href="/projectEdit" class="view-btn">상세보기</a></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>냉매</td>
                  <td>신혜욱</td>
                  <td>완료</td>
                  <td>2020-10-02</td>
                  <td><a href="/projectEdit" class="view-btn">상세보기</a></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>냉매</td>
                  <td>신혜욱</td>
                  <td>완료</td>
                  <td>2020-10-02</td>
                  <td><a href="/projectEdit" class="view-btn">상세보기</a></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>냉매</td>
                  <td>신혜욱</td>
                  <td>완료</td>
                  <td>2020-10-02</td>
                  <td><a href="/projectEdit" class="view-btn">상세보기</a></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>냉매</td>
                  <td>신혜욱</td>
                  <td>완료</td>
                  <td>2020-10-02</td>
                  <td><a href="/projectEdit" class="view-btn">상세보기</a></td>
                </tr>
                </tbody>
              </table>
              <article class="paging">
                <ul>
                  <li><a href="/" class="current">1</a></li>
                  <li><a href="/">2</a></li>
                  <li><a href="/">3</a></li>
                </ul>
              </article>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default ProjectList;