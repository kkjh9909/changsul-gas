import React, {Component, useContext, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faCaretDown,
  faAngleRight,
  faBell,
  faComment,
  faScroll,
  faUser,
  faGear,
  faSignOut,
  faSearch,
  faWonSign,
  faChartColumn,
  faTable,
  faSignIn
} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../store/Context";
import jwt_decode from "jwt-decode";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';

export const Nav = ({isDarkMode, toggleDarkMode}) => {

    const navigate = useNavigate();
    const {isLogin, logout} = useContext(Context);
    const chats = localStorage.getItem("chat");
    const comments = localStorage.getItem("comment");

    useEffect(() => {

    }, [chats, comments])

    return (
        <nav className="navbar navbar-default navbar-static-top" style={{marginBottom: 0}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">네비게이션 토글</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to='/' className="navbar-brand">자취생을 위한</Link>
        </div>
        {/* <!-- /.navbar-header --> */}

        <ul className="nav navbar-top-links navbar-right">
          <li>
            <button type="button" onClick={toggleDarkMode} isdarkmode={isDarkMode}>{isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}</button>
          </li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
              <FontAwesomeIcon icon={faEnvelope} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-messages">
              {
                chats !== null && localStorage.getItem('token') ? (
                  Object.entries(JSON.parse(chats)).map((chat) => {
                  const my = jwt_decode(localStorage.getItem('token')).uid;
                  const id = chat[0].split("-");
                  const you = my === id[0] ? id[1] : id[0];
  
                  return (
                    <React.Fragment>
                    <li>
                    <Link to={`/chatroom`} state={you}>
                        <FontAwesomeIcon icon={faComment}/> {chat[0].length > 10 ? chat[0].slice(0, 10) + '...' : chat[0]} : 새로운 채팅
                        <span className="pull-right text-muted small">{chat[1][1]}</span>
                    </Link>
                    </li>
                    <div className="divider"></div>
                    </React.Fragment>
                  )})) : (
                    <React.Fragment>
                      <li>
                        <Link>
                          <FontAwesomeIcon icon={faComment}/> 채팅 알림 없음
                        </Link>
                      </li>
                      <div className="divider"></div>
                    </React.Fragment>
                )
              }
            </ul>
            {/* <!-- /.dropdown-messages --> */}
          </li>
          {/* <!-- /.dropdown --> */}
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
              <FontAwesomeIcon icon={faBell} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-alerts">
              {
                comments !== null && localStorage.getItem('token') ? (
                Object.entries(JSON.parse(comments)).map((key, idx) => {
                  return (
                    <React.Fragment>
                      <li>
                        <Link to={`/post/${key[0]}`}>
                          <span><FontAwesomeIcon icon={faScroll}/> {key[1][0].length > 5 ? key[1][0].slice(0, 5) + '...' : key[1][0]} : 새로운 댓글</span>
                          <span className="pull-right text-muted small">{key[1][1]}</span>
                        </Link>
                      </li>
                      <div className="divider"></div>
                    </React.Fragment>
                  )})) : (
                      <React.Fragment>
                        <li>
                          <Link>
                            <FontAwesomeIcon icon={faScroll}/> 댓글 알림 없음
                          </Link>
                        </li>
                        <div className="divider"></div>
                      </React.Fragment>
                )
              }
            </ul>
            {/* <!-- /.dropdown-alerts --> */}
          </li>
          {/* <!-- /.dropdown --> */}
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
            <FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-user">
              {
                isLogin ? (
                    <React.Fragment>
                      <li><a href="#!"><FontAwesomeIcon icon={faUser} /> 내 프로필</a></li>
                      <li><a href="/settings"><FontAwesomeIcon icon={faGear} /> 설정</a></li>
                      <li className="divider"></li>
                      <Link to='/' onClick={logout}><FontAwesomeIcon icon={faSignOut} /> 로그아웃</Link>
                    </React.Fragment>
                ) : (
                    <div style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => navigate('/login')}>
                      <li><FontAwesomeIcon icon={faSignIn} /> 로그인</li>
                    </div>
                )
              }
            </ul>
            {/* <!-- /.dropdown-user --> */}
          </li>
          {/* <!-- /.dropdown --> */}




          
        </ul>
        {/* <!-- /.navbar-top-links --> */}
            <div className="navbar-default sidebar" role="navigation">
              <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                  <li className="sidebar-search">
                    <div className="input-group custom-search-form">
                      <input type="text" className="form-control" placeholder="검색어를 입력하세요" />
                      <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                    <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </span>
                    </div>
                    {/* <!-- /input-group --> */}
                  </li>
                  <li>
                    <Link to='/dashboard'><FontAwesomeIcon icon={faWonSign} /> 실시간 요금</Link>
                  </li>
                  <li>
                    <a href="#!"><FontAwesomeIcon icon={faChartColumn} /> 월별 사용량</a>
                  </li>
                  <li>
                    <Link to='/karrot'><FontAwesomeIcon icon={faTable} /> 중고 거래</Link>
                  </li>
                  <li>
                    <Link to='/group-buying'><FontAwesomeIcon icon={faTable} /> 공동 구매</Link>
                  </li>
                  <li>
                    <Link to='/product-review'><FontAwesomeIcon icon={faTable} /> 물품 리뷰</Link>
                  </li>
                  <li>
                    <Link to='/government'><FontAwesomeIcon icon={faTable} /> 정부 정책</Link>
                  </li>
                  <li>
                    <Link to='/life-hack'><FontAwesomeIcon icon={faTable} /> 생활 꿀팁</Link>
                  </li>
                  <li>
                    <a href="#!"><FontAwesomeIcon icon={faGear} /> 기타 드롭다운 메뉴 <span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="/panel-weels">Panels and Wells</a>
                      </li>
                      <li>
                        <a href="/buttons">Buttons</a>
                      </li>
                      <li>
                        <a href="/notifications">Notifications</a>
                      </li>
                      <li>
                        <a href="/typography">Typography</a>
                      </li>
                      <li>
                        <a href="/icons"> Icons</a>
                      </li>
                      <li>
                        <a href="/grid">Grid</a>
                      </li>
                    </ul>
                    {/* <!-- /.nav-second-level --> */}
                  </li>
                  <li>
                    <a href="#!"><i className="fa fa-sitemap fa-fw"></i> 드롭다운 1<span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="#!">Secont Level Item</a>
                      </li>
                      <li>
                        <a href="#!">Second Level Item</a>
                      </li>
                      <li>
                        <a href="#!">드롭다운 2 <span className="fa arrow"></span></a>
                        <ul className="nav nav-third-level">
                          <li>
                            <a href="#!">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#!">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#!">Third Level Item</a>
                          </li>
                          <li>
                            <a href="#!">Third Level Item</a>
                          </li>
                        </ul>
                        {/* <!-- /.nav-third-level --> */}
                      </li>
                    </ul>
                    {/* <!-- /.nav-second-level --> */}
                  </li>
                  <li>
                    <a href="#!"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                    <ul className="nav nav-second-level">
                      <li>
                        <a href="/blank">Blank Page</a>
                      </li>
                      <li>
                        <a href="/login">Login Page</a>
                      </li>
                    </ul>
                    {/* <!-- /.nav-second-level --> */}
                  </li>
                </ul>
              </div>
              {/* <!-- /.sidebar-collapse --> */}
            </div>
        {/* <!-- /.navbar-static-side --> */}
      </nav>
    );
}
