import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
	return (
		<footer id="contact">
			<div className={styles.container}>
				<h3>Contact me</h3>
				<ul>
					<li><a href="mailto:prateekrawat33@gmail.com">
						<ion-icon name="logo-google"></ion-icon></a>
					</li>
					<li><a href="https://www.linkedin.com/in/prateek-rawat-a39161162/" target="_blank">
						<ion-icon name="logo-linkedin"></ion-icon></a>
					</li>
					<li><a href="http://www.instagram.com/prateekkk26" target="_blank">
						<ion-icon name="logo-instagram"></ion-icon></a>
					</li>
				</ul>
				<p className={styles.create}>Created by Prateek Rawat</p>
				<p className={styles.copyright}>Copyright &copy; - 2020. All rights reserved</p>
			</div>
		</footer>
	)
}

export default Footer