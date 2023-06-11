import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWonSign, faPercent } from '@fortawesome/free-solid-svg-icons';
import {HotBoard} from "../components/hotboard/HotBoard";

class Dashboard extends Component {

  render() {
    const showHotboard = this.props.showHotboard;
    document.title="대시 보드"
    
    return (
        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">실시간 가스 요금</h1>
            </div>
            {/*  /.col-lg-12  --> */}
          </div>
          {/*  /.row  --> */}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <FontAwesomeIcon icon={faWonSign} size="5x"/>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">30,000</div>
                      <div>이번달 가스비</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-green">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <FontAwesomeIcon icon={faWonSign} size="5x"/>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">10,000</div>
                      <div>저번달 가스비</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-yellow">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <FontAwesomeIcon icon={faPercent} size="5x"/>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">30</div>
                      <div>/ 설정값</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-red">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <FontAwesomeIcon icon={faWonSign} size="5x"/>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">50,000</div>
                      <div>이번 달 예상 가스비</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            // Hotboard를 보여줄지 보여주지 않을지 결정
            showHotboard ? <HotBoard /> : <></>
          }
        </div>
    );
  }
}

export default Dashboard;
