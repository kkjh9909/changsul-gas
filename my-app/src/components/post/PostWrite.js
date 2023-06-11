import React, {useMemo, useRef} from "react";
import {useState} from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import aws from 'aws-sdk'
import uuid from 'react-uuid'
import {useNavigate} from "react-router-dom";

export const PostWrite = ({title, category}) => {

	const navigate = useNavigate();

	const REGION = process.env.REACT_APP_REGION
	const ACCESS_KEY_ID = process.env.REACT_APP_S3_ACCESS_KEY_ID
	const SECRET_KEY_ID = process.env.REACT_APP_S3_ACCESS_KEY_SECRET;
	const BUCKET = process.env.REACT_APP_S3_BUCKET;

	const quillRef = useRef();

	const [body, setBody] = useState("");

	const handleChange = (text) => {
		setBody(text);
	}

	const handleWrite =  async () => {
		try {
			if(title === "") {
				alert("제목은 빈칸 X");
				return;
			}
			else if(body === "") {
				alert("내용은 빈칸 X");
				return;
			}

			const res = await axios.post(`http://34.215.66.235:8000/post`, {
				"title": title,
				"content": body,
				"board": category.category
			}, {
				headers: {
					"Authorization": `Bearer ${localStorage.getItem('token')}`
				}
			});
			navigate(`/post/${res.data.id}`)
		}
		catch (err) {
			console.log('실패', err);
		}
	}

	const imageHandler = () => {
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.setAttribute('accept', 'image/*');
		input.click();
		input.onchange = async () => {
			const file = input.files[0];

			aws.config.update({
				region: REGION,
				accessKeyId: ACCESS_KEY_ID,
				secretAccessKey: SECRET_KEY_ID
			})

			const parts = file.name.split('.');
			const extension = parts[parts.length - 1];

			const filename = uuid() + '.' + extension;

			const upload = new aws.S3.ManagedUpload({
				params: {
					ACL: 'public-read',
					Bucket: BUCKET,
					Key: `gas/${filename}`,
					Body: file
				}
			})

			const promise = upload.promise();
			promise.then(() => {
				const url = `https://mynewbucket33.s3.ap-northeast-2.amazonaws.com/gas/${filename}`;
				const editor = quillRef.current.getEditor();
				const range = editor.getSelection();
				editor.insertEmbed(range.index, 'image', url);
			})
		}
	}

	const modules = useMemo(() => {
		return {
			toolbar: {
				container: [
					['image'],
					[{ header: [1, 2, 3, false] }],
					['bold', 'italic', 'underline', 'strike'],
				],
				handlers: {
					image: imageHandler,
				},
			},
		};
	}, []);

	const formats = [
		'font',
		'header',
		'bold', 'italic', 'underline', 'strike',
		'list', 'bullet', 'indent',
		'link', 'image',
		'align', 'color', 'background',
	]

	return (
		<div className="w-100 d-flex flex-column">
			<div style={{height: '650px'}}>
				<ReactQuill
					ref={quillRef}
					style={{height: "600px"}}
					modules={modules}
					formats={formats}
					theme="snow"
					value={body}
					onChange={handleChange}
				/>
			</div>
			<button className="btn btn-primary" onClick={handleWrite}>작성하기</button>
		</div>
	)
}