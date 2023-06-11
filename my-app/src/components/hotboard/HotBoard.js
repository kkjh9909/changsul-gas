import React, {useContext, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link, NavLink, useNavigate} from "react-router-dom";

export const HotBoard = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function requestPosts() {
            await axios.get('http://34.215.66.235:8000/most-like')
                .then(res => {
                    const hotposts = res.data
                    hotposts.forEach(element => { element.date = new Date(element.date).toLocaleString("ko-KR") })
                    setPosts(hotposts);
                })
                .catch(err => { 
                    console.log(err)
                })
        }
        requestPosts();
    }, [])

    return (
        <div>
            <div className="col-lg-12">
              <h1 className="page-header">인기 게시글</h1>
            </div>
            <div className="panel panel-default">
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
                                            <td>{item.likes}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default HotBoard;