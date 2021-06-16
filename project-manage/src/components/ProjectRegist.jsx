import React, { PureComponent } from 'react';
import Header from './Header';


class ProjectRegist extends PureComponent {
  render() {
    return (
      <div>
        <Header isProjectRegist={true}/>
        <div className="wrapper">
          <article class="table-set">
			<div class="inner">
				<div class="table-list-tit">프로젝트 등록</div>
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
					</tbody>
				</table>
				<div class="table-menu">
					<a href="javascript:history.back()">취소</a>
					<a href="#none">등록</a>
				</div>
			</div>
		</article>
        </div>
      </div>
    );
  }
}

export default ProjectRegist;