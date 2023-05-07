import React, {useEffect, useState} from 'react';
import axios from "axios";
import Nav from "../components/Nav";
import {Link, NavLink} from "react-router-dom";

export const Tables = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      // axios.get(`http://34.215.66.235:8000/all-posts`)
      //     .then(res => setData(res.data))

        setData([
            {
                "id": 20,
                "title": "eg_title",
                "author": "tester",
                "date": "23-04-10 10:32:41",
                "like": 0,
            },
            {
                "id": 31,
                "title": "eg_title1",
                "author": "tester1",
                "date": "23-04-10 10:35:41",
                "like": 0,
            },
            {
                "id": 31,
                "title": "eg_title1",
                "author": "tester1",
                "date": "23-04-10 10:35:41",
                "like": 0,
            },
            {
                "id": 31,
                "title": "eg_title1",
                "author": "tester1",
                "date": "23-04-10 10:35:41",
                "like": 0,
            },
            {
                "id": 31,
                "title": "eg_title1",
                "author": "tester1",
                "date": "23-04-10 10:35:41",
                "like": 0,
            },
            {
                "id": 31,
                "title": "eg_title1",
                "author": "tester1",
                "date": "23-04-10 10:35:41",
                "like": 0,
            },
        ])
    }, [])


    return (
      <div id="page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Tables</h1>
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
          <button className="btn btn-primary btn-lg" onClick={() => {
              window.location.href= `/write`
          }}>글쓰기</button>
      </div>
    );
}

export default Tables;