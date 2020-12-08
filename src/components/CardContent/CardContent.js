import React from 'react'

import styles from './cardcontent.module.css'
import Layout from '../Layout/Layout'

const CardContent = ({ post }) => {

	return (
		<Layout>
			<div className={styles.container}>
				<div className={styles.cover}>
					<img src={post.url} alt={post.title} />
					<div className={styles.content}>
						<h2>{post.title}</h2>
						<p>
							{post.content}
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CardContent