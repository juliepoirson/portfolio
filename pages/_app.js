import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'

import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
	const { asPath } = useRouter()

	return (
		<>
			{asPath !== '/kncproject' ? <Header /> : <BackButton />}
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
