import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'

import portrait from '../assets/portrait.png'
import resume from '../assets/resume.png'
import knc from '../assets/knc.png'
import webapp from '../assets/webapp.png'

import { UilLinkedin } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilMessage } from '@iconscout/react-unicons'
import { UilMouseAlt } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'
import { UilDownloadAlt } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { UilCrosshair } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'
import { UilBracketsCurly } from '@iconscout/react-unicons'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilBriefcaseAlt } from '@iconscout/react-unicons'
import { UilCalendarAlt } from '@iconscout/react-unicons'
import { UilArrowRight } from '@iconscout/react-unicons'
import { UilPhone } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'
import { UilComments } from '@iconscout/react-unicons'
import { UilRobot } from '@iconscout/react-unicons'

export default function Home() {
	const [expanded, setExpanded] = useState(false)

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false)
	}

	const [secondQual, setSecondQual] = useState(true)

	const changeQualFalse = () => {
		setSecondQual(false)
		console.log(secondQual)
	}

	const changeQualTrue = () => {
		setSecondQual(true)
		console.log(secondQual)
	}

	return (
		<>
			<Head>
				<title>Julie Poirson&apos;s portfolio</title>
				<meta name='description' content='homepage' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='body'>
				<main className='main'>
					{/* ==================== HOME ==================== */}
					<section className='home section' id='home'>
						<div className='home__container container grid'>
							<div className='home__content grid'>
								<div className='home__social'>
									<Link
										href='https://www.linkedin.com/in/julie-poirson273/'
										target='_blank'
										className='home__social-icon'
									>
										<p>
											<UilLinkedin />
										</p>
									</Link>
									<Link
										href='https://github.com/juliepoirson'
										target='_blank'
										className='home__social-icon'
									>
										<p>
											<UilGithub />
										</p>
									</Link>
								</div>
								<div className='home__img'>
									<Image src={portrait} alt='portrait' />
								</div>

								<div className='home__data'>
									<h1 className='home__title'>Julie Poirson</h1>
									<h3 className='home__subtitle'>
										Engineering & marketing student
									</h3>
									<p className='home__description'>
										Results driven and inquisitive engineering student currently
										pursuing a double major in information systems,
										cybersecurity, data science & marketing.
									</p>
									<AnchorLink href='#contact' className='button button--flex'>
										Contact Me
										<p className='button__icon--home'>
											<UilMessage />
										</p>
									</AnchorLink>
								</div>
							</div>
							<div className='home__scroll'>
								<AnchorLink
									href='#about'
									className='home__scroll-button button--flex'
								>
									<p className='home__scroll-mouse'>
										<UilMouseAlt />
									</p>
									<span className='home__scroll-name'> Scroll down </span>
									<p className='home__scroll-arrow'>
										<UilArrowDown />
									</p>
								</AnchorLink>
							</div>
						</div>
					</section>

					{/* ==================== ABOUT ==================== */}
					<section className='about section' id='about'>
						<h2 className='section__title'>About Me</h2>
						<span className='section__subtitle'>My introduction</span>

						<div className='about__container container grid'>
							<Image src={resume} alt='' className='about__img' />

							<div className='about__data'>
								<p className='about__description'>
									Hi, I am Julie, an engineering student with a marketing
									background!
									<br />
									I originally pursued a degree in marketing, and eventually
									discovered a love for programming.
									<br />
									Since my school was offering the possibility to graduate with
									a double major, I took that opportunity and chose to turn to
									data science.
								</p>

								{/* <div className='about__info'>
									<div>
										<span className='about__info-title'>0</span>
										<span className='about__info-name'>
											Years <br />
											experience
										</span>
									</div>
									<div>
										<span className='about__info-title'>0</span>
										<span className='about__info-name'>
											Completed <br />
											projects
										</span>
									</div>
									<div>
										<span className='about__info-title'>0</span>
										<span className='about__info-name'>
											Companies <br />
										</span>
									</div>
								</div> */}
								<div className='about__buttons'>
									<a
										download=''
										href='../assets/resume-julie-poirson.pdf'
										className='button button--flex'
									>
										Download resume
										<p className='button__icon'>
											<UilDownloadAlt />
										</p>
									</a>
								</div>
							</div>
						</div>
					</section>
					{/* ==================== SKILLS ==================== */}
					<section className='skills section' id='skills'>
						<div className='skills__content'>
							<h2 className='section__title'>Skills</h2>
							<span className='section__subtitle'>My technical level</span>
							<div className='skills__container container grid'>
								<div>
									{/* ==================== SKILLS 1 ==================== */}
									<Accordion
										expanded={expanded === 'panel1'}
										onChange={handleChange('panel1')}
										className='skills__accordion'
									>
										<AccordionSummary
											expandIcon={<UilAngleDown className='skills__arrow' />}
											aria-controls='panel1bh-content'
											id='panel1bh-header'
										>
											<div className='skills__header'>
												<UilBracketsCurly className='skills__icon' />
												<div>
													<h1 className='skills__title'>Programming</h1>
													<span className='skills__subtitle'>
														Less than a year
													</span>
												</div>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<div className='skills__list grid'>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>SQL</h3>
														<span className='skills__number'>50%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__sql'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Java</h3>
														<span className='skills__number'>30%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__java'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>HTML/CSS</h3>
														<span className='skills__number'>30%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__html'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Python</h3>
														<span className='skills__number'>20%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__python'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Experience with:</h3>
													</div>
													<p className='skills__experience'>
														NoSQL, JavaScript, C#
													</p>
												</div>
											</div>
										</AccordionDetails>
									</Accordion>
									{/* ==================== SKILLS 2 ==================== */}
									<Accordion
										expanded={expanded === 'panel2'}
										onChange={handleChange('panel2')}
										className='skills__accordion'
									>
										<AccordionSummary
											expandIcon={<UilAngleDown className='skills__arrow' />}
											aria-controls='panel2bh-content'
											id='panel2bh-header'
										>
											<div className='skills__header'>
												<UilRobot className='skills__icon' />
												<div>
													<h1 className='skills__title'>Technologies</h1>
													<span className='skills__subtitle'>
														Less than a year
													</span>
												</div>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<div className='skills__list grid'>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Git</h3>
														<span className='skills__number'>60%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__inbound'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>MySQL</h3>
														<span className='skills__number'>30%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__research'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>React</h3>
														<span className='skills__number'>40%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__hubspot'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Experience with:</h3>
													</div>
													<p className='skills__experience'>MongoDB</p>
												</div>
											</div>
										</AccordionDetails>
									</Accordion>
									{/* ==================== SKILLS 3 ==================== */}
									<Accordion
										expanded={expanded === 'panel3'}
										onChange={handleChange('panel3')}
										className='skills__accordion'
									>
										<AccordionSummary
											expandIcon={<UilAngleDown className='skills__arrow' />}
											aria-controls='panel3bh-content'
											id='panel3bh-header'
										>
											<div className='skills__header'>
												<UilCrosshair className='skills__icon' />
												<div>
													<h1 className='skills__title'>Marketing</h1>
													<span className='skills__subtitle'>2 years</span>
												</div>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<div className='skills__list grid'>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Inbound Marketing</h3>
														<span className='skills__number'>60%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__inbound'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Marketing Research</h3>
														<span className='skills__number'>50%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__research'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Hubspot</h3>
														<span className='skills__number'>40%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__hubspot'></span>
													</div>
												</div>
											</div>
										</AccordionDetails>
									</Accordion>
									{/* ==================== SKILLS 4 ==================== */}
									<Accordion
										expanded={expanded === 'panel4'}
										onChange={handleChange('panel4')}
										className='skills__accordion'
									>
										<AccordionSummary
											expandIcon={<UilAngleDown className='skills__arrow' />}
											aria-controls='panel4bh-content'
											id='panel4bh-header'
										>
											<div className='skills__header'>
												<UilSwatchbook className='skills__icon' />
												<div>
													<h1 className='skills__title'>Graphic Design</h1>
													<span className='skills__subtitle'>
														~ About two years
													</span>
												</div>
											</div>
										</AccordionSummary>
										<AccordionDetails>
											<div className='skills__list grid'>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Canva</h3>
														<span className='skills__number'>80%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__canva'></span>
													</div>
												</div>
												<div className='skills__data'>
													<div className='skills__titles'>
														<h3 className='skills__name'>Photoshop</h3>
														<span className='skills__number'>10%</span>
													</div>
													<div className='skills__bar'>
														<span className='skills__percentage skills__photoshop'></span>
													</div>
												</div>
											</div>
										</AccordionDetails>
									</Accordion>
								</div>
							</div>
						</div>
					</section>
					{/* ==================== QUALIFICATION ==================== */}
					<section className='qualification section'>
						<h2 className='section__title'>Qualification</h2>
						<span className='section__subtitle'>My personal journey</span>

						<div className='qualification__container container'>
							<div className='qualification__tabs'>
								<div
									className={`qualification__button button--flex ${
										secondQual ? 'qualification__active' : ''
									}`}
									data-target='#education'
									onClick={changeQualTrue}
								>
									<UilGraduationCap className='qualification__icon' />
									Education
								</div>
								<div
									className={`qualification__button button--flex ${
										secondQual ? '' : 'qualification__active'
									}`}
									data-target='#work'
									onClick={changeQualFalse}
								>
									<UilBriefcaseAlt className='qualification__icon' />
									Work
								</div>
							</div>
							<div className='qualification__sections'>
								{secondQual ? (
									<div
										className='qualification__content qualification__active'
										id='education'
									>
										<div className='qualification__data'>
											<div>
												<h3 className='qualification__title'>Law School</h3>
												<span className='qualification__subtitle'>
													Nanterre University
												</span>
												<div>
													<UilCalendarAlt className='qualification__calendar' />
													2018 - 2020
												</div>
											</div>
											<div>
												<span className='qualification__rounder'></span>
												<span className='qualification__line'></span>
											</div>
										</div>

										<div className='qualification__data'>
											<div></div>

											<div>
												<span className='qualification__rounder'></span>
												<span className='qualification__line'></span>
											</div>

											<div>
												<h3 className='qualification__title'>
													Master in Marketing
												</h3>
												<span className='qualification__subtitle'>
													ESCE Paris
												</span>
												<div>
													<UilCalendarAlt className='qualification__calendar' />
													2020 - 2023
												</div>
											</div>
										</div>
										<div className='qualification__data'>
											<div>
												<h3 className='qualification__title'>
													Exchange semester in the US
												</h3>
												<span className='qualification__subtitle'>
													Wichita State University
												</span>
												<div>
													<UilCalendarAlt className='qualification__calendar' />
													2022
												</div>
											</div>
											<div>
												<span className='qualification__rounder'></span>
												<span className='qualification__line'></span>
											</div>
										</div>
										<div className='qualification__data'>
											<div></div>

											<div>
												<span className='qualification__rounder'></span>
											</div>

											<div>
												<h3 className='qualification__title'>
													Master in Information Systems, Cybersecurity & Big
													data
												</h3>
												<span className='qualification__subtitle'>
													ECE Paris
												</span>
												<div>
													<UilCalendarAlt className='qualification__calendar' />
													2022 - 2024
												</div>
											</div>
										</div>
									</div>
								) : (
									<div
										className='qualification__content qualification__active'
										id='work'
									>
										<div className='qualification__data'>
											<div>
												<h3 className='qualification__title'>
													Marketing Assistant
												</h3>
												<span className='qualification__subtitle'>
													Eventtia
												</span>
												<div>
													<UilCalendarAlt className='qualification__calendar' />
													2021 (3 months)
												</div>
											</div>
											<div>
												<span className='qualification__rounder'></span>
												<span className='qualification__line'></span>
											</div>
										</div>
										<div class='qualification__data'>
											<div></div>

											<div>
												<span class='qualification__rounder'></span>
												<span class='qualification__line'></span>
											</div>

											<div>
												<h3 class='qualification__title'>
													English teacher and tutor
												</h3>
												<span class='qualification__subtitle'>Acadomia</span>
												<div>
													<UilCalendarAlt className='qualification__calendar' />
													Sept 2022 - now
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</section>
					{/* ==================== PORTFOLIO ==================== */}

					<section className='portfolio section' id='portfolio'>
						<h2 className='section__title'>Portfolio</h2>
						<span className='section__subtitle'>Most recent work</span>
						<div className='portfolio__container container'>
							<div className='portfolio__content portfolio__card'>
								<Image src={knc} alt='project1' className='portfolio__img' />
								<div>
									<div className='portfolio__data1'>
										<h3 className='portfolio__title'>KNC project</h3>
										<p className='portfolio__description'>
											<strong>Marketing research</strong> project carried out on
											the Kansas Nonprofit Chamber.
										</p>
									</div>
									<Link
										href='/kncproject'
										className='button button--flex button--small portfolio__button1'
									>
										Check it out!
										<UilArrowRight className='button__icon'></UilArrowRight>
									</Link>
								</div>
							</div>
							<div className='portfolio__content portfolio__card'>
								<Image src={webapp} alt='project2' className='portfolio__img' />
								<div>
									<div className='portfolio__data'>
										<h3 className='portfolio__title'>Blog</h3>
										<p className='portfolio__description'>
											<strong>Web application</strong> in the form of a blog.
											<br /> Created with React and NextJS.
										</p>
									</div>
									<a className='button button--flex button--small portfolio__button'>
										Coming soon
										<UilArrowRight className='button__icon'></UilArrowRight>
									</a>
								</div>
							</div>
						</div>
					</section>

					{/* ==================== CONTACT ME ==================== */}
					<section className='contact section' id='contact'>
						<h2 className='section__title'>Contact me</h2>
						<span className='section__subtitle'>Let&apos;s get in touch!</span>

						<div className='contact__container container grid'>
							<div>
								<div className='contact__information'>
									<UilPhone className='contact__icon' />

									<div>
										<h3 className='contact__title'>Call me</h3>
										<span className='contact__subtitle'>+33 6 95 27 16 80</span>
									</div>
								</div>
								<div className='contact__information'>
									<UilEnvelope className='contact__icon'></UilEnvelope>

									<div>
										<h3 className='contact__title'>Email</h3>
										<span className='contact__subtitle'>
											julie.lp273@gmail.com
										</span>
									</div>
								</div>
								<div className='contact__information'>
									<UilMapMarker className='contact__icon'></UilMapMarker>
									<div>
										<h3 className='contact__title'>Location</h3>
										<span className='contact__subtitle'>Paris - France</span>
									</div>
								</div>
							</div>
							<form
								action='https://formsubmit.co/julie.lp273@gmail.com'
								method='POST'
								className='contact__form grid'
							>
								<div className='contact__inputs grid'>
									<div className='contact__content'>
										<label for='' className='contact__label'>
											Name
										</label>
										<input type='text' name='name' className='contact__input' />
									</div>
									<div className='contact__content'>
										<label for='' className='contact__label'>
											Email
										</label>
										<input
											type='email'
											name='email'
											className='contact__input'
										/>
									</div>
								</div>
								<div className='contact__content'>
									<label for='' className='contact__label'>
										Message
									</label>
									<textarea
										name='message'
										id=''
										cols='0'
										rows='7'
										className='contact__input'
									></textarea>
								</div>

								<div>
									<button type='submit' className='button button--flex'>
										Send message
										<UilMessage className='button__icon'></UilMessage>
									</button>
								</div>
							</form>
						</div>
					</section>
				</main>
			</div>
		</>
	)
}
