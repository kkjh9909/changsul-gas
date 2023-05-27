import React, {useEffect, useRef, useState} from 'react';
import axios, {post} from "axios";
import Nav from "../Nav";
import {Link, NavLink, useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import './tables.css'
import {Search} from "./Search";
import Pagination from "react-js-pagination";
import {camelCase} from "lodash";

export const Tables = ({title, category}) => {

    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("title");
    const [query, setQuery] = useState("");
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        async function requestPosts() {
            try {
                const params = {
                    "type": type,
                    "data": query,
                    "page": page,
                    "board": category
                }

                const res = await axios.get(`http://34.215.66.235:8000/search-posts`, {params: params});

                setPosts(res.data.posts);
                setCount(res.data.post_counts);
            }
           catch (err) {
                console.log(err);
           }
        }
        requestPosts();
    }, [page, query, type])

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber - 1);
    };

    return (
      <div id="page-wrapper">
        <div className="row">
            <h1 className="page-header">{title}</h1>
        </div>
            <div className="panel panel-default">
                <Search
                    setPosts={setPosts}
                    setCount={setCount}
                    setType={setType}
                    setQuery={setQuery}
                    page={page}
                />
                <div>
                    <p style={{paddingLeft: '20px'}}>{count}개의 게시물</p>
                </div>
              <div className="panel-body">
                <table width="100%" className="table table-striped table-bordered table-hover">
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
                      posts.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'} style={{cursor: 'pointer'}} onClick={() => {
                              navigate(`/post/${item.id}`);
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
                  <div style={{width: '100%', textAlign:'center'}}>
                      <Pagination
                        activePage={page + 1}
                        itemsCountPerPage={2}
                        totalItemsCount={count}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                      />
                  </div>
              </div>
            </div>
          <button className="btn btn-primary btn-lg" onClick={() => navigate(`write`)}>글쓰기</button>
      </div>
    );
}

export default Tables;