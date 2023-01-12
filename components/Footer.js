import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__bg'>
				<div className='footer__container container grid'>
					<div>
						<h1 className='footer__title'>Julie</h1>
						<span className='footer__subtitle'>Engineering Student</span>
					</div>

					<ul className='footer__links'>
						<li>
							<AnchorLink href='#skills'>
								<div className='footer__link'>Skills</div>
							</AnchorLink>
						</li>
						<li>
							<AnchorLink href='#portfolio'>
								<div className='footer__link'>Portfolio</div>
							</AnchorLink>
						</li>
						<li>
							<AnchorLink href='#contact'>
								<div className='footer__link'>ContactMe</div>
							</AnchorLink>
						</li>
					</ul>

					<div className='footer__socials'>
						<Link
							href='https://www.linkedin.com/in/julie-poirson273/'
							target='_blank'
						>
							<div className='footer__social'>
								<UilLinkedin />
							</div>
						</Link>
						<Link
							href='https://github.com/juliepoirson'
							target='_blank'
							className='home__social-icon'
						>
							<div className='footer__social'>
								<UilGithub />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
