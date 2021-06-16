import React, { Component } from 'react';

class Header extends Component {
  render() {
    const {isProjectList, isProjectRegist, isManager, isSignIn, isSingUp} = this.props;
    return (
      <div>
        <header>
            <div class="inner">
              <div class="header__menu">
                <nav>
                  <ul>
                    <li><a href="/" class={isProjectList ? 'current':''}>프로젝트 관리</a></li>
                    <li><a href="/projectRegist" class={isProjectRegist ? 'current':''}>프로젝트 등록</a></li>
                    <li><a href="/manager" class={isManager ? 'current':''}>담당자 관리</a></li>
                  </ul>
                </nav>


                <div class="header_menu__right">
                  <a href="/signIn" class={isSignIn ? 'current':''}>로그인</a>
                  <a href="/singUp" class={isSingUp ? 'current':''}>회원가입</a>

                  <a href="#none">로그아웃</a>
                </div>
              </div>
            </div>
          </header>
        </div>
    );
  }
}

export default Header;