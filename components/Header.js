import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import { useState, useEffect } from 'react'
import { UilGlobe } from '@iconscout/react-unicons'

export default function Header() {
	return (
		<header className='header' id='header'>
			<nav className='nav container'>
				<Link href='/' className='nav__logo'>
					Julie
				</Link>

				<div className='nav__menu' id='nav-menu'>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<Link href='/' className='nav__link active-link'>
								<i className='uil uil-estate nav__icon'></i> Home
							</Link>
						</li>
						<li className='nav__item'>
							<AnchorLink href='#about' className='nav__link'>
								<i className='uil uil-user nav__icon'></i> About
							</AnchorLink>
						</li>
						<li className='nav__item'>
							<AnchorLink href='#skills' className='nav__link'>
								<i className='uil uil-file-alt nav__icon'></i> Skills
							</AnchorLink>
						</li>
						<li className='nav__item'>
							<AnchorLink href='#portfolio' className='nav__link'>
								<i className='uil uil-scenery nav__icon'></i> Portfolio
							</AnchorLink>
						</li>
						<li className='nav__item'>
							<AnchorLink href='#contact' className='nav__link'>
								<i className='uil uil-message nav__icon'></i> Contact me
							</AnchorLink>
						</li>
					</ul>
					<i className='uil uil-times nav__close' id='nav-close'></i>
				</div>

				{/* <div className='nav__btns'>
					LANGUAGES 
					<i className='change-lang' id='lang-button'>
						<UilGlobe />
					</i>
					<div className='nav__toggle' id='nav-toggle'>
						<i className='uil uil-apps'></i>
					</div>
				</div> */}
			</nav>
		</header>
	)
}
