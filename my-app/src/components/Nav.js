import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCaretDown, faAngleRight, faBell, faComment, faScroll, faUser, faGear, faSignOut, faSearch, faWonSign, faChartColumn, faTable } from '@fortawesome/free-solid-svg-icons';
import { onLogout } from '../App.js';
import {Link, useNavigate} from "react-router-dom";

class Nav extends Component {


  render() {
    return (
        <nav className="navbar navbar-default navbar-static-top" style={{marginBottom: 0}}>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">네비게이션 토글</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">자취생을 위한!</a>
        </div>
        {/* <!-- /.navbar-header --> */}

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
              <FontAwesomeIcon icon={faEnvelope} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-messages">
              <li>
                <a href="#!">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#!">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#!">
                  <div>
                    <strong>John Smith</strong>
                    <span className="pull-right text-muted">
                      <em>Yesterday</em>
                    </span>
                  </div>
                  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a className="text-center" href="#!">
                  <strong>모든 채팅 보기</strong>
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </li>
            </ul>
            {/* <!-- /.dropdown-messages --> */}
          </li>
          {/* <!-- /.dropdown --> */}
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
              <FontAwesomeIcon icon={faBell} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-alerts">
              <li>
                <a href="#!">
                  <div>
                  <FontAwesomeIcon icon={faComment} /> 새로운 댓글
                    <span className="pull-right text-muted small">5 minutes ago</span>
                  </div>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#!">
                  <div>
                  <FontAwesomeIcon icon={faScroll} /> 새로운 게시글
                    <span className="pull-right text-muted small">12 minutes ago</span>
                  </div>
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a className="text-center" href="#!">
                  <strong>모든 알람 보기</strong>
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
              </li>
            </ul>
            {/* <!-- /.dropdown-alerts --> */}
          </li>
          {/* <!-- /.dropdown --> */}
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#!">
            <FontAwesomeIcon icon={faUser} /> <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li><a href="#!"><FontAwesomeIcon icon={faUser} /> 내 프로필</a>
              </li>
              <li><a href="/settings"><FontAwesomeIcon icon={faGear} /> 설정</a>
              </li>
              <li className="divider"></li>
              <li><a href="#!" onClick={onLogout()} ><FontAwesomeIcon icon={faSignOut} /> 로그아웃</a>
              </li>
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
                      <input type="text" className="form-control" placeholder="Search..." />
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
}

export default Nav;
