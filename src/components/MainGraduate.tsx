import React, { useEffect, useRef, useState } from 'react'
import './MainGraduate.css'

const MainGraduate: React.FC = () => {
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false)
  const sidebarColRef = useRef<HTMLDivElement | null>(null)
  const sidebarRef = useRef<HTMLElement | null>(null)
  const [dockState, setDockState] = useState<
    | { mode: 'fixed' | 'absolute'; style: React.CSSProperties }
    | null
  >(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)')

    const getFixedTop = () => {
      const navbar = document.querySelector('.navbar-custom') as HTMLElement | null
      const header = document.querySelector('.header-wrapper') as HTMLElement | null
      const navbarH = navbar ? navbar.getBoundingClientRect().height : 0
      const headerH = header ? header.getBoundingClientRect().height : 0

      return Math.round(navbarH + headerH + 12)
    }

    const updateDock = () => {
      if (!mq.matches) {
        setDockState(null)
        return
      }

      const col = sidebarColRef.current
      if (!col) return

      const fixedTop = getFixedTop()
      const rect = col.getBoundingClientRect()
      const shouldDock = rect.top <= fixedTop

      if (!shouldDock) {
        setDockState(null)
        return
      }

      const sidebarEl = sidebarRef.current
      const sidebarHeight = sidebarEl ? sidebarEl.getBoundingClientRect().height : 0

      const footer = document.querySelector('.footer') as HTMLElement | null
      const footerTop = footer ? footer.getBoundingClientRect().top + window.scrollY : Infinity
      const footerGap = 16

      const fixedBottomDoc = window.scrollY + fixedTop + sidebarHeight
      const maxBottomDoc = footerTop - footerGap

      if (sidebarHeight > 0 && fixedBottomDoc >= maxBottomDoc) {
        const colTopDoc = rect.top + window.scrollY
        const maxTopDoc = maxBottomDoc - sidebarHeight
        const absoluteTop = Math.max(0, Math.round(maxTopDoc - colTopDoc))

        setDockState({ mode: 'absolute', style: { top: `${absoluteTop}px` } })
        return
      }

      setDockState({
        mode: 'fixed',
        style: {
          top: `${fixedTop}px`,
          left: `${Math.round(rect.left)}px`,
          width: `${Math.round(rect.width)}px`,
        },
      })
    }

    updateDock()
    window.addEventListener('scroll', updateDock, { passive: true })
    window.addEventListener('resize', updateDock)
    mq.addEventListener('change', updateDock)

    return () => {
      window.removeEventListener('scroll', updateDock)
      window.removeEventListener('resize', updateDock)
      mq.removeEventListener('change', updateDock)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return

    const header = document.querySelector('.header-wrapper') as HTMLElement | null
    const headerHeight = header ? header.getBoundingClientRect().height : 0
    const extraOffset = 12

    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })

    try {
      window.history.replaceState(null, '', `#${id}`)
    } catch {
      // ignore
    }
  }

  const handleSubmenuClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
    setIsMobileSubmenuOpen(false)
  }

  return (
    <div className="main-graduate-total">
      <div className="graduate-content-wrapper">
        <button
          type="button"
          className="submenu-toggle"
          onClick={() => setIsMobileSubmenuOpen((v) => !v)}
          aria-expanded={isMobileSubmenuOpen}
          aria-controls="graduate-submenu"
        >
          Sub menu
        </button>

        {isMobileSubmenuOpen && (
          <button
            type="button"
            className="submenu-backdrop"
            aria-label="Close submenu"
            onClick={() => setIsMobileSubmenuOpen(false)}
          />
        )}

        <div className="sidebar-col" ref={sidebarColRef}>
          <aside
            id="graduate-submenu"
            ref={sidebarRef}
            className={`sidebar-menu${dockState?.mode === 'fixed' ? ' is-docked' : ''}${dockState?.mode === 'absolute' ? ' is-stopped' : ''}${isMobileSubmenuOpen ? ' is-open' : ''}`}
            style={dockState?.style ?? undefined}
          >
            <button
              type="button"
              className="submenu-close"
              onClick={() => setIsMobileSubmenuOpen(false)}
            >
              Close
            </button>
            <ul>
              <li><a href="#graduate-admissions" onClick={(e) => handleSubmenuClick(e, 'graduate-admissions')}>Graduate Admissions</a></li>
              <li><a href="#application-process" onClick={(e) => handleSubmenuClick(e, 'application-process')}>Application Process</a></li>
              <li><a href="#deadlines" onClick={(e) => handleSubmenuClick(e, 'deadlines')}>Deadlines</a></li>
              <li><a href="#evaluation-process" onClick={(e) => handleSubmenuClick(e, 'evaluation-process')}>Evaluation Process</a></li>
              <li><a href="#financial-aid" onClick={(e) => handleSubmenuClick(e, 'financial-aid')}>Financial Aid</a></li>
              <li><a href="#admission-events" onClick={(e) => handleSubmenuClick(e, 'admission-events')}>Admission Events</a></li>
              <li><a href="#contact-us" onClick={(e) => handleSubmenuClick(e, 'contact-us')}>Contact us</a></li>
            </ul>
          </aside>
        </div>

        <main className="main-content" id="graduate-admissions">
          <h1>Graduate Admissions</h1>
          <p>Congratulations on deciding to apply to a graduate program at ADA University!</p>
          <p>Whether you would like to start a new career or advance in your existing one, ADA University is the right destination for you. With full-time and hybrid graduate programs, ADA University offers flexibility to both recent university graduates and professionals with a committed schedule and determination to succeed. Except for some programs, a previous degree in the chosen field is not required.</p>

          <div className="programs-table">
            <table>
              <thead>
                <tr>
                  <th colSpan={6}>PROGRAMS</th>
                </tr>
                <tr>
                  <th>Public and International Affairs</th>
                  <th>Business</th>
                  <th>IT and Engineering</th>
                  <th>Education</th>
                  <th>Agricultural and Food Sciences</th>
                  <th>Law</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#">Public Administration (in English)</a></td>
                  <td><a href="#">MBA</a></td>
                  <td><a href="#">Computer Science and Data Analytics</a></td>
                  <td><a href="#">Educational Management (in English)</a></td>
                  <td><a href="#">Agricultural and Food Systems Management</a></td>
                  <td><a href="#">Master of Laws (LL.M.)</a></td>
                </tr>
                <tr>
                  <td><a href="#">Public Administration (in Azerbaijani)</a></td>
                  <td><a href="#">MBA in Finance</a></td>
                  <td><a href="#">Electrical and Power Engineering</a></td>
                  <td><a href="#">Teaching and Learning (in English)</a></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><a href="#">Diplomacy and International Affairs</a></td>
                  <td><a href="#">Global Management and Politics (GMAP)</a></td>
                  <td><a href="#">Computer Engineering and High Performance Computing</a></td>
                  <td><a href="#">Educational Management (in Azerbaijani)</a></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="#">Human Resource Management (HRM)</a></td>
                  <td></td>
                  <td><a href="#">Teaching and Learning (in Azerbaijani)</a></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="application-process py-4" id="application-process">
            <h2>Application process</h2>
            <p>
              Applicants who have Permanent Living Permit in Azerbaijan must follow the same application process as citizens of Azerbaijan.
              Those who have double citizenship that includes Azerbaijani citizenship, must follow the same application process as citizens of Azerbaijan.
            </p>

            <p>
              To apply, you must submit an ADA University{' '}
              <a
                href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon"
                target="_blank"
                rel="noreferrer"
              >
                Online Application Form
              </a>{' '}
              along with attachments. International applicants are required to submit{' '}
              <a href="https://portal.edu.az/" target="_blank" rel="noreferrer">
                online application
              </a>{' '}
              for Study in Azerbaijan: Centralized Admission Service in addition to ADA University Online Application Form.
            </p>

            <p>As part of your online application, you will be required to submit the following documents:</p>

            <ul>
              <li>
                Bachelor’s diploma translated into English and notary-certified
                <ul>
                  <li>Those who are in their last year of undergraduate program, must submit a document with expected graduation date</li>
                  <li>Last year undergraduate students may apply only if they are expected to graduate by the end of July</li>
                </ul>
              </li>
              <li>
                Bachelor’s diploma supplement or official transcripts (when diploma supplement is not available) translated into English and
                notary-certified
              </li>
              <li>CV/Resume listing your educational and employment experiences</li>
              <li>Recent photo</li>
              <li>National Identification Card for citizens of Azerbaijan</li>
              <li>Passport for international applicants</li>
              <li>
                Statement of Purpose describing motivation for applying to this program, future goals and career aspirations (minimum 300,
                maximum 500 words)
              </li>
              <li>
                Short essay in English focusing on a specific legal problem, explaining its key aspects, and offering applicant’s perspective or
                analysis. (only for Master of Laws applicants)
              </li>
              <li>
                Test Scores*:
                <ul>
                  <li>English Proficiency Test (see below the details)</li>
                  <li>
                    Master admission test by State Examination Center (required for citizens of Azerbaijan and holders of Permanent Living Permit
                    in Azerbaijan, see below the details)
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              Once you have completed your online application and uploaded all documents, submit your application by paying a non-refundable
              application fee of 50 AZN (citizens of Azerbaijan)/100 AZN (international applicants).
            </p>

            <p>
              * Applicants can submit their online application and its attachments before the deadline without required test scores. Once the
              scores are available, applicants must send their scores to the Office of Admissions.
            </p>

            <h3><strong>State Examination Center Test</strong></h3>
            <p>
              We require the results of the master admission test by State Examination Center (SEC). This test is required for citizens of
              Azerbaijan and international applicants who have Permanent Living Permit in Azerbaijan.
            </p>

            <ul>
              <li>
                This test requires a separate registration at SEC. Check{' '}
                <a href="https://dim.gov.az/az" target="_blank" rel="noreferrer">
                  SEC webpage
                </a>{' '}
                regularly for test dates and deadlines.
              </li>
              <li>
                A minimum score of 45 is required for most programs with no minimum sub-score requirement. Any foreign language can be chosen
                at the exam.
              </li>
              <li>
                A minimum score of 40 is required from applicants applying to Master of Arts in Teaching and Learning (in Azerbaijani and in
                English).
              </li>
              <li>
                Short essay on a given question in the application form (only for Master of Public Administration in Azerbaijani and English,
                and Master of Arts in Diplomacy and International Affairs applicants)
              </li>
              <li>A minimum score of 50 is required from applicants applying to Master of Law (LL.M.) program.</li>
              <li>Applicants may apply for Fall 2026 admission with SEC test results of 2025 and 2026.</li>
              <li>Prospective students may submit their application before taking this test, but the scores must be sent before the application deadline.</li>
            </ul>

            <h3><strong>English Proficiency</strong></h3>
            <p>
              All applicants (except for programs taught in Azerbaijani) are required to submit one of the test scores below in order to meet
              English language proficiency requirement.
            </p>

            <ul>
              <li>Minimum 6.5 on IELTS Academic or</li>
              <li>83 on IBT (TOEFL Code 2093)* or</li>
              <li>58 on PTE Academic* or</li>
              <li>120 in Duolingo English Test</li>
            </ul>

            <p><strong>Note:</strong> ADA University accepts the IELTS “One Skill Retake” score as well.</p>
            <p>
              *PTE and IBT tests taken at home are not accepted. PTE and IBT test results are accepted only if they are taken at a registered
              testing centre.
            </p>

            <p>
              English test results must be sent directly to ADA University by testing center. Applicants may submit their English language
              scores prior to the late application deadline of June 1 even if they submit their application before the first deadline of April 1.
            </p>

            <p>
              Below dual-degree programs with the George Washington University have different minimum English test requirements. Click on
              program names to learn more:
            </p>

            <ul>
              <li>
                <a href="https://www.ada.edu.az/en/schools/site/programs/computer-science-and-data-analytics">Master of Science in Computer Science and Data Analytics</a>
              </li>
              <li>
                <a href="https://www.ada.edu.az/en/schools/site/programs/electrical-and-power-engineering">Master of Science in Electrical Engineering and Power Engineering</a>
              </li>
              <li>
                <a href="https://www.ada.edu.az/en/schools/site/programs/computer-engineering-and-high-performance-computing">Master of Science in Computer Engineering and High Performance Computing</a>
              </li>
            </ul>

            <p>Applicants who meet one of the criteria below may apply for English Proficiency test waiver by contacting Office of Admissions:</p>

            <ul>
              <li>Native language is English</li>
              <li>Studied at a degree level in English in an English-speaking country</li>
              <li>Has a degree from ADA University</li>
              <li>
                Has extensive work experience in an international environment:
                <ul>
                  <li>A letter from the employer must be submitted during the application process and before the interview</li>
                  <li>
                    This waiver is subject to confirmation during the interview. Applicants whose waiver request is not confirmed will be required
                    to take one of the language exams.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="deadlines" id="deadlines">
            <h2>Deadlines</h2>
            <p>
              ADA University accepts applications in two rounds. All applicants are encouraged to apply before the first deadline. Only limited
              number of seats in selected programs are available for the second round applicants. Second round applicants are invited to contact
              the Office of Admissions by e-mailing{' '}
              <a href="admissions@ada.edu.az">admissions@ada.edu.az</a> to check available programs and seats.
            </p>

            <p ><strong>First round dates and deadlines:</strong></p>
            <ul>
              <li>Applications open: January 2026.</li>
              <li>Application deadline: April 1</li>
              <li>Interviews for shortlisted candidates: April-May</li>
              <li>Results announced: May 23</li>
              <li>Accept/decline deadline: June 2</li>
            </ul>

            <p ><strong>Second round dates and deadlines:</strong></p>
            <ul>
              <li>Application deadline: June 1</li>
              <li>Interviews for shortlisted candidates: June</li>
              <li>Results announced: June 20</li>
              <li>Accept/decline deadline: June 27</li>
            </ul>
          </div>

          <div className="evaluation-process py-4" id="evaluation-process">
            <h2>Evaluation Process</h2>
            <p>
              ADA University has an admission policy based on a holistic review. Applicants' academic records, essays, and test scores are reviewed
              before to the interview. Shortlisted applicants are invited for an evaluative interview. Admission Committee reviews applicant's prior
              academic records, intellectual capacity, potential for growth, career focus and ability to succeed at ADA University. Interview serves as a
              final step of admission process and final decisions are made based on the applicant’s interview results.
            </p>

            <p>
              Dual-degree programs have further admission requirements and steps. Please check program-specific pages for more information.
            </p>
          </div>

          <div className="financial-aid" id="financial-aid">
            <h2>Financial Aid</h2>
            <p>ADA University offers below financial aid options to its graduate applicants:</p>

            <ul>
              <li>
                <strong>Graduate Assistantship Program</strong>
                <p>
                  This scholarship is available to the first round applicants of the following programs only: Diplomacy and International Affairs,
                  Educational Management in English, Teaching and Learning in English, and Master of Laws.
                </p>
                <p>
                  Graduate Assistantship is awarded to the top applicants at the time of admissions based on the interview results and/or written
                  exam. Awarded students will receive 100% tuition waiver for the duration of their studies provided that their Term GPA is 3.0.
                  Graduate assistants are required to work at ADA University for 20 hours a week. Usually, this program is awarded to candidates who
                  do not have other full-time work commitments. Please{' '}
                  <a href="https://www.ada.edu.az/file_upload/policies/merit_based_s_grade_stud.pdf" target="_blank" rel="noreferrer">
                    click here
                  </a>{' '}
                  for detailed information about the scholarship.
                </p>
              </li>
              <li>
                <strong>Merit-based scholarships for returning students:</strong> Students scoring in the top 10% of each program cohort are granted
                20% waiver off their tuition and receive the honor.
              </li>
              <li>
                <a href="http://localhost:5173/graduate#" target="_blank" rel="noreferrer">
                  <strong>International Fellowship</strong>
                </a>{' '}
                named after Alimardan bay Topchubashov (for International students only)
              </li>
              <li>
                <a href="http://localhost:5173/graduate#" target="_blank" rel="noreferrer">
                  <strong>Educational Student Loan</strong>
                </a>{' '}
                for citizens of Azerbaijan offered by Educational Student Loan Fund of the Ministry of Science and Education
              </li>
            </ul>

            <p>
              See the details of all scholarships{' '}
              <a href="http://localhost:5173/graduate#" target="_blank" rel="noreferrer">
                here
              </a>
              .
            </p>
          </div>

          <div className="admission-events py-4" id="admission-events">
            <h2>Admission Events</h2>
            <p>
              ADA University Office of Admissions hosts a variety of activities, including information sessions, workshops, seminars, campus tours,
              and master classes for prospective students.
            </p>

            <p>
              <a href="https://www.ada.edu.az/en/events/category/admission" target="_blank" rel="noreferrer">
                Explore our upcoming admission events and book your place
              </a>
            </p>
          </div>

          <div className="contact-us " id="contact-us">
            <h2>Contact us</h2>
            <p>
              Have more questions? Contact us by e-mail{' '}
              <a href="admissions@ada.edu.az">admissions@ada.edu.az</a>
            </p>

            <p>Tel: (+994 12) 437 32 35</p>

            <p>School of Business: +994 51 207 10 01</p>

            <p>School of Public and International Affairs/School of Education: +994 51 207 10 10</p>

            <p>School of Information Technologies and Engineering: +994 50 274 95 51</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainGraduate
