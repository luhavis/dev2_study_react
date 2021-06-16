import React, { PureComponent } from 'react';
import Header from './Header';


class ManagerList extends PureComponent {
  render() {
    return (
      <div>
        <Header isManager={true}/>
        <article class="table-list">
			<div class="inner">
				<div class="table-list-tit">담당자 관리
					<a href="/managerRegist" class="manager-add-btn">신규 등록</a>
				</div>

				<article class="search__form">
					<select>
						<option selected>담당자</option>
					</select>
					<input placeholder="검색어 입력"/>
					<a href="#none" class="search-btn">검색</a>
				</article>

				<table>
					<thead>
					<tr>
						<th>NO</th>
						<th>담당자</th>
						<th>등록일시</th>
						<th>메뉴</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>1</td>
						<td>신혜욱</td>
						<td>2020-10-02</td>
						<td><a href="/managerEdit" class="view-btn">상세보기</a></td>
					</tr>
					<tr>
						<td>1</td>
						<td>신혜욱</td>
						<td>2020-10-02</td>
						<td><a href="/managerEdit" class="view-btn">상세보기</a></td>
					</tr>
					<tr>
						<td>1</td>
						<td>신혜욱</td>
						<td>2020-10-02</td>
						<td><a href="/managerEdit" class="view-btn">상세보기</a></td>
					</tr>
					<tr>
						<td>1</td>
						<td>신혜욱</td>
						<td>2020-10-02</td>
						<td><a href="/managerEdit" class="view-btn">상세보기</a></td>
					</tr>
					<tr>
						<td>1</td>
						<td>신혜욱</td>
						<td>2020-10-02</td>
						<td><a href="/managerEdit" class="view-btn">상세보기</a></td>
					</tr>
					</tbody>
				</table>
				<article class="paging">
					<ul>
						<li><a href="/manager" class="current">1</a></li>
						<li><a href="/manager">2</a></li>
						<li><a href="/manager">3</a></li>
					</ul>
				</article>
			</div>
		</article>
      </div>
    );
  }
}

export default ManagerList;