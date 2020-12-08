import React from 'react'
import styles from './writings.module.css'

import {englishWritings} from '../data/englishWritings'
import {hindiWritings} from '../data/hindiWritings'
import Card from '../Card/Card'

const Writings = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<div className={styles.englishContainer}>
					<h2>English Writings</h2>
					<div className={styles.englishBox}>
						{
							englishWritings.map((e, i) => {
								return <Card key={i} data={e} />
							})
						}
					</div>
				</div>

				<div className={styles.hindiContainer}>
					<h2>Hindi Writings</h2>
					<div className={styles.hindiBox}>
						{
							hindiWritings.map((e, i) => {
								return <Card key={i} data={e} />
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Writings