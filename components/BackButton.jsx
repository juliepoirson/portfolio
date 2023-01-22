import Link from 'next/link'
import { UilAngleLeftB } from '@iconscout/react-unicons'

export default function BackButton() {
	return (
		<header className='header' id='header'>
			<nav className='nav container'>
				<Link href='/' className='nav__arrow'>
					<UilAngleLeftB />
				</Link>
			</nav>
		</header>
	)
}
