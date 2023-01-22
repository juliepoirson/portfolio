import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import { UilTimes } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilScenery } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'

export default function Header() {
	const [navToggle, setNavToggle] = useState(false)
	const navRef = useRef(null)

	const navToggleChange = () => {
		setNavToggle(!navToggle)
	}

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 200) {
				navRef.current.classList.add('scroll-header')
			} else {
				navRef.current.classList.remove('scroll-header')
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className='header' id='header' ref={navRef}>
			<nav className='nav container'>
				<Link href='/' className='nav__logo'>
					Julie
				</Link>

				<div
					className={`nav__menu ${navToggle ? 'show-menu' : ''}`}
					id='nav-menu'
				>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<Link
								href='/'
								className='nav__link'
								onClick={() => {
									if (navToggle) {
										navToggleChange()
									}
								}}
							>
								<i className='nav__icon'>
									<UilEstate />
								</i>
								Home
							</Link>
						</li>
						<li className='nav__item'>
							<AnchorLink
								href='#about'
								className='nav__link'
								onClick={() => {
									if (navToggle) {
										navToggleChange()
									}
								}}
							>
								<i className='nav__icon'>
									<UilUser />
								</i>
								About
							</AnchorLink>
						</li>
						<li className='nav__item'>
							<AnchorLink
								href='#skills'
								className='nav__link'
								onClick={() => {
									if (navToggle) {
										navToggleChange()
									}
								}}
							>
								<i className='nav__icon'>
									<UilFileAlt />
								</i>
								Skills
							</AnchorLink>
						</li>
						<li className='nav__item'>
							<AnchorLink
								href='#portfolio'
								className='nav__link'
								onClick={() => {
									if (navToggle) {
										navToggleChange()
									}
								}}
							>
								<i className='nav__icon'>
									<UilScenery />
								</i>
								Portfolio
							</AnchorLink>
						</li>
						<li className='nav__item'>
							<AnchorLink
								href='#contact'
								className='nav__link'
								onClick={() => {
									if (navToggle) {
										navToggleChange()
									}
								}}
							>
								<i className='nav__icon'>
									<UilMessage />
								</i>
								Contact me
							</AnchorLink>
						</li>
					</ul>
					<i className='nav__close' onClick={navToggleChange} id='nav-close'>
						<UilTimes />
					</i>
				</div>
				<div className='nav__btns'>
					<div
						className='nav__toggle'
						onClick={navToggleChange}
						id='nav-toggle'
					>
						<i>
							<UilApps />
						</i>
					</div>
				</div>
			</nav>
		</header>
	)
}
