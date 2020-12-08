import React from 'react'
import {Link} from 'react-router-dom'
import styles from './card.module.css'

const Card = ({data}) => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<img src={data.url} alt={data.title} />
				<h3>{data.title}</h3>
			</div>
			<Link to={`/${data.genre}/${data.id}`} className={styles.readBtn}>Read the post</Link>
		</div>
	)
}

export default Card