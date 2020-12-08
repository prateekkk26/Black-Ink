import React from 'react'
import styles from './header.module.css'

const Header = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cover}>
				<div className={styles.left}>
					<h2>Hello,</h2>
					<h1>I am Prateek Rawat</h1>
					<h4>Full Stack Developer</h4>
					<p>
						Writing is something that helps people clear their mind. This project is built with
						React Framework to practice front-end skills and to showcase some of my writings. I hope 
						you all will like it. Thank you.
					</p>
				</div>
				<div className={styles.right}>
					
				</div>
			</div>
		</div>
	)
}

export default Header