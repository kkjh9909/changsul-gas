import React, {useEffect, useState} from 'react';
import axios from "axios";
import Nav from "../Nav";
import {Link, NavLink, useNavigate} from "react-router-dom";

export const Tables = ({title}) => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`http://34.215.66.235:8000/all-posts`)
          .then(res => setData(res.data.posts))
    }, [])


    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">{title}</h1>
          </div>
          {/* <!-- /.col-lg-12 --> */}
        </div>
        {/* <!-- /.row --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                DataTables Advanced Tables
              </div>
              {/* <!-- /.panel-heading --> */}
              <div className="panel-body">
                <table width="100%" className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>작성 시간</th>
                      <th>좋아요</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'} onClick={() => {
                              window.location.href= `/post/${item.id}`
                          }}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.date}</td>
                                <td>{item.like}</td>
                          </tr>
                      ))
                    }
                  </tbody>
                </table>
                {/* <!-- /.table-responsive --> */}
              </div>
              {/* <!-- /.panel-body --> */}
            </div>
            {/* <!-- /.panel --> */}
          </div>
          {/* <!-- /.col-lg-12 --> */}
        </div>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/write')}>글쓰기</button>
      </div>
    );
}

export default Tables;