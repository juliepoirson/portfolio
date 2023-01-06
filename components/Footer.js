import Link from 'next/link'
import { UilLinkedin } from '@iconscout/react-unicons'

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
							<Link href='/skills'>
								<div className='footer__link'>Skills</div>
							</Link>
						</li>
						<li>
							<Link href='/portfolio'>
								<div className='footer__link'>Portfolio</div>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<div className='footer__link'>ContactMe</div>
							</Link>
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
					</div>
				</div>
			</div>
		</footer>
	)
}
