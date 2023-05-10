import React, {useEffect, useState} from 'react'

export const LikeButton = () => {

	const [like, setLike] = useState(0);

	useEffect(() => {

	}, [like]);

	const handleLike = () => {
		setLike(like + 1);
	}

	return (
		<div className="w-100 text-center">
			<button className="btn btn-primary" onClick={handleLike}>추천</button>
			<p>{like}</p>
		</div>
	);
}