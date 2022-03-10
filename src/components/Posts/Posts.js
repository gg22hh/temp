import React from 'react'
import './Posts.css'
import { PostItem } from './PostItem/PostItem'

export const Posts = () => {
	return (
		<div className='posts'>
			<PostItem />
			<PostItem />
			<PostItem />
		</div>
	)
}
