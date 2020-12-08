import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
	const [active, setActive] = useState(false);

	return (
		<div>
			<div className={styles.container}>
				<nav className={styles.cover}>
					<Link to="/" className={styles.brand}>Black Ink</Link>
					<ul>
						<li className={styles.toggle} onClick={() => setActive(!active)}>
							<ion-icon name="menu-outline"></ion-icon>
						</li>
						<li className={styles.navLink}><Link to="/">Home</Link></li>
						<li className={styles.navLink}><a href="#contact">Contact</a></li>
					</ul>
				</nav>
			</div>
			{
				active ? <div className={styles.block}>
					<ul className={styles.blockList}>
						<li className={styles.blockLink}><Link to="/">Home</Link></li>
						<li className={styles.blockLink}><a href="#contact">Contact</a></li>
					</ul>
				</div> : null
			}
		</div>
	)
}

export default Navbar