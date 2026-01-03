import React from 'react'
import './MainUndergraduate.css'

const MainUndergraduate: React.FC = () => {
    return (
        <div className="main-undergraduate-total">
            <div className="undergraduate-content-wrapper">
                <aside className="sidebar-menu">
                    <ul>
                        <li><a href="#undergraduate-admissions">Undergraduate Admissions</a></li>
                        <li><a href="#international-applicants">International Applicants</a></li>
                        <li><a href="#citizens-of-azerbaijan">Citizens of Azerbaijan</a></li>
                        <li><a href="#state-examination-center">State Examination Center (SEC) Route</a></li>
                        <li><a href="#sat-route">SAT Route</a></li>
                        <li><a href="#test-result-route">IB, A level, AP Test Result Route</a></li>
                        <li><a href="#ada-school-route">ADA School Route</a></li>
                        <li><a href="#olympiad-winners">Route for Olympiad Winners</a></li>
                        <li><a href="#deadlines">Deadlines</a></li>
                        <li><a href="#transfer-admission">Transfer Admission</a></li>
                        <li><a href="#attend-events">Attend events</a></li>
                        <li><a href="#contact-us">Contact us</a></li>
                    </ul>

                </aside>

                <main className="main-content" id="undergraduate-admissions">
                    <h1>Undergraduate Admissions</h1>
                    <p>ADA University welcomes applicants with academic curiosity and potential for growth from all over the world.</p>
                    <p>
                        Undergraduate application process is different for the citizens of Azerbaijan and international students.
                        Candidates who have Permanent Living Permit in Azerbaijan must follow the same application process as
                        citizens of Azerbaijan. Candidates who have double citizenship that includes Azerbaijani citizenship,
                        must follow the same application process as citizens of Azerbaijan.
                    </p>
                    <p>Explore this page to learn about our programs and application process for all applicant types.</p>
                    <p>ADA University offers the following programs at undergraduate level:</p>

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
                                    <th>Law</th>
                                    <th>Agricultural and Food Sciences</th>
                                    <th>Design and Architecture</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="https://www.ada.edu.az/en/schools/spia/programs/international-studies">International Studies</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/sb/programs/business-administration">Business Administration</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/site/programs/computer-science">Computer Science</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/law/programs/laws-legum-baccalaureus">Laws (Legum Baccalaureus)</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/safs/programs/agricultural-technologies">Agricultural Technologies</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/sda/programs/architecture">Architecture</a></td>
                                </tr>
                                <tr>
                                    <td><a href="https://www.ada.edu.az/en/schools/spia/programs/communication-and-digital-media">Communication and Digital Media</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/sb/programs/economics">Economics</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/site/programs/computer-engineering">Computer Engineering</a></td>
                                    <td></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/safs/programs/food-technologies">Food Technologies</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/sda/programs/interior-design">Interior Design</a></td>
                                </tr>
                                <tr>
                                    <td><a href="https://www.ada.edu.az/en/schools/spia/programs/public-affairs">Public Affairs</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/sb/programs/finance">Finance</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/site/programs/information-technology">Information Technology</a></td>
                                    <td></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/safs/programs/animal-science">Animal Science</a></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/sda/programs/bup">Urban Planning</a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/site/programs/mathematics">Mathematics</a></td>
                                    <td></td>
                                    <td></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/sda/programs/bcd">Communication Design</a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><a href="https://www.ada.edu.az/en/schools/site/programs/electrical-and-electronics-engineering">Electrical and Electronics Engineering</a></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="video-section">
                        <iframe width="1088" height="612" src="https://www.youtube.com/embed/ViiSLZAnnJU" title="ADA tələbənin gözü ilə" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="international-applicants" id="international-applicants">
                        <h2>International Applicants</h2>
                        <p>International applicants must follow three-step application process:</p>
                        <p><strong>Step 1</strong>: submit ADA University <a href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon">online application</a> and its attachments <br />
                            <strong>Step 2</strong>: submit Study in Azerbaijan <a href="https://portal.edu.az/">CAS online application</a> <br />
                            <strong>Step 3</strong>: attend an online interview (only shortlisted candidates are interviewed)</p>

                        <p>ADA University online application form requires the following supporting documents:</p>
                        <ul>
                            <li>High School diploma/a reference from school with expected graduation date (with a notarized English translation)</li>
                            <li>Official High School transcript (with a notarized English translation)</li>
                            <li>CV (no more than 2 pages)</li>
                            <li>Statement of Purpose describing motivation for applying to this program, future goals and career aspirations (minimum 300, maximum 500 words)</li>
                            <li>Passport</li>
                            <li>Recent photo</li>
                            <li>English proficiency results (if available)
                                <ul>
                                    <li>Applicants who submit minimum test scores in one of the accepted exams (IELTS Academic 6.0 / TOEFL IBT 75 / PTE 50 / Duolingo 105) will be exempted from English for Academic and Professional Purposes Program.</li>
                                </ul>
                            </li>
                        </ul>

                        <p>All attachments must be submitted either in English or with the notary-certified translation into English. Once you have completed your online application and uploaded all documents, submit your application by paying a non-refundable application fee of 100 AZN.</p>

                        <p><strong>First round deadline:</strong> April 1, 2026<br />
                        <strong>Interviews for shortlisted candidates:</strong> May, June 2026</p>

                        <p><strong>Late application deadline:</strong> July 1, 2026<br />
                        <strong>Interviews for shortlisted candidates:</strong> July, August 2026</p>

                        <p>ADA University has an admission policy based on a holistic review. Shortlisted applicants are invited for an evaluative interview which is held in English. Admission Committee reviews applicant's prior academic records, intellectual capacity, potential for growth, career focus, and ability to succeed at ADA University. Interview serves as a final step of admission process, and final decisions are made based on the applicant's interview results.</p>

                        <p>ADA University offers Alimardan bay Topchubashov fellowship for international students as a financial aid. There is no separate application process for the scholarship. To apply for the scholarship, you must submit ADA University admission application form by early deadline of April 1. Find more information <a href="https://www.ada.edu.az/en/admission/financial-aid">here</a>.</p>
                    </div>

                    <div className="citizens-of-azerbaijan py-4" id="citizens-of-azerbaijan">
                        <h2>Citizens of Azerbaijan</h2>
                        <p>Citizens of Azerbaijan can apply to ADA University's undergraduate programs through one of the below shown admission routes. Candidates applying through any of the available routes are required to submit ADA University <a href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon">Online Application Form</a>. Click on each route to find out the details of the relevant application process.</p>

                        <p><strong>Application deadline for SAT and ADA School students:</strong> June 30, 2026<br />
                        <strong>Application deadline for IB, A Level, and AP students:</strong> June 30, 2026<br />
                        <strong>Application deadline for the State Examination Centre students:</strong> September 10, 2026</p>

                        <ul>
                            <li><a href="https://ada.edu.az/en/admission/undergraduate#/application-process-for-the-state-examination-center">State Examination Center (SEC)</a></li>
                            <li><a href="https://ada.edu.az/en/admission/undergraduate#/sat-route">SAT</a></li>
                            <li><a href="https://ada.edu.az/en/admission/undergraduate#/ib-a-level-ap-test-result-route">IB/A LEVEL/AP</a></li>
                            <li><a href="https://ada.edu.az/en/admission/undergraduate#/ada-school-route">ADA School</a></li>
                            <li><a href="https://ada.edu.az/en/admission/undergraduate#/route-for-national-and-international-olympiad-winners">Olympiad winners</a></li>
                        </ul>
                    </div>

                    <div className="state-examination-center" id="state-examination-center">
                        <h2>State Examination Center (SEC) Route</h2>
                        <p>If you are applying with State Examination Center (SEC) test results, you must complete ADA University and SEC application process.</p>

                        <p><em>Eligibility requirements</em></p>
                        <ul>
                            <li>Minimum 300 in Group I for Animal Science program</li>
                            <li>Minimum 400 in Group I, II, and III</li>
                            <li>Min. 400 in Group V for Interior Design and Communication Design programs. Applicants must take the second round of exam from any group (I, II, III, and IV).</li>
                        </ul>

                        <p><em>ADA University application process</em></p>
                        <p>Submit ADA University <a href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon">Online Application</a> and its attachments:</p>
                        <ul>
                            <li>Recent photo</li>
                            <li>National Identification Card</li>
                            <li>Official high school diploma/a reference from school (if still a student)</li>
                            <li>English Language Proficiency test result (if available)</li>
                        </ul>

                        <p>Azerbaijani citizens applying through SEC are encouraged to submit one of the English proficiency exams results (IELTS 6.0/ TOEFL 75/ PTE 50/ Duolingo 105) to be exempt from the <a href="https://www.ada.edu.az/en/eapp">English for Academic and Professional Purposes Program (EAPP)</a> upon admission to ADA University. In cases when a student admitted through SEC route does not have one of the required English test results, he/she is invited to internal English Proficiency Exam (EPE) at ADA University. EPE exam is available only to students admitted through SEC route.</p>

                        <p><em><strong>State Examination Center application process</strong></em></p>
                        <p>Submit SEC online application form "Abituriyentin elektron ariza formasi". Please follow SEC website for the details of SEC application process, dates, and deadlines.</p>

                        <p><em><strong>State-funded programs for State Examination Center (SEC) applicants</strong></em></p>
                        <p>ADA University offers state-funded seats for the following undergraduate programs. Each of the below-mentioned undergraduate program has ben allocated 30 seats.</p>

                        <p><strong>Group I</strong></p>
                        <ul>
                            <li>Computer Science</li>
                            <li>Information Technology</li>
                            <li>Computer Engineering</li>
                            <li>Mathematics</li>
                        </ul>

                        <p><strong>Group II</strong></p>
                        <ul>
                            <li>Economics</li>
                            <li>Finance</li>
                        </ul>

                        <p>The students of state-funded programs are exempt from both tuition and student fees for the whole duration of their studies.</p>
                    </div>

                    <div className="sat-route" id="sat-route">
                        <h2>SAT Route</h2>
                        <p>To apply with SAT test results, you must complete the application process of ADA University and State Examination Center (SEC) before June 30, 2026, 23:59 Baku time.</p>

                        <p>ADA University <strong>does not admit</strong> students with SAT scores to the School of Law.</p>

                        <p><em><strong>Eligibility requirements</strong></em></p>
                        <ul>
                            <li>Minimum 1200 overall score in SAT</li>
                            <li>Minimum 600 in Math for Computer Science, Computer Engineering, Information Technology, Mathematics, Electrical and Electronics Engineering, Business Administration, Economics, and Finance programs</li>
                            <li>English Language Proficiency* (IELTS 6.0/ TOEFL 75/ PTE 50/ Duolingo 105) test result.</li>
                            <li>Minimum 50 in Azerbaijani language exam conducted by State Examination Center</li>
                            <li>Minimum 40 in Mathematics exam conducted by State Examination Center as part of the school-leaving examinations.</li>
                        </ul>

                        <p>Note: <em>ADA University accepts the IELTS "One Skill Retake" score as well.</em></p>

                        <p><em><strong>ADA University application process</strong></em></p>

                        <p><strong>Step 1:</strong> Submit ADA University <a href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon">Online Application</a> and its attachments:</p>
                        <ul>
                            <li>Recent photo</li>
                            <li>National Identification Card</li>
                            <li>Official high school diploma/a reference from school (if still a student)</li>
                            <li>English Language Proficiency test result</li>
                        </ul>

                        <p><strong>Step 2:</strong> Send SAT** scores to ADA electronically through College Board (Code: 7799)</p>

                        <p><strong>Step 3:</strong> Send English Language Proficiency test scores. Official scores must be sent to ADA University by relevant testing center. Unofficial scores are not accepted.</p>

                        <p>* PTE and TOEFL (iBT) results are accepted only if they are taken at a registered testing center and the certificates are sent directly by Pearson and ETS (TOEFL Code: 2093) to ADA University.</p>

                        <p>** SAT super score is not accepted.</p>

                        <p><em><strong>State Examination Center application process</strong></em></p>

                        <p><strong>Step 1:</strong> Submit SEC online application form (Abituriyentin elektron ariza formasi). Please follow SEC website for dates and deadlines.</p>

                        <p><strong>Step 2:</strong> Send SAT scores to SEC electronically through College Board (Code: 7876)</p>

                        <p><strong>Step 3:</strong> Submit SAT and English scores on SEC website (details will be announced by SEC).</p>

                        <p>Final admission decisions will be made based on your SAT scores.</p>

                        <p>Please follow updates in State Examination Center webpage for changes in their application process.</p>
                    </div>

                    <div className="test-result-route" id="test-result-route">
                        <h2>IB, A level, AP Test Result Route</h2>

                        <p><em><strong>Eligibility requirements</strong></em></p>
                        <ul>
                            <li>IB Diploma Programme: 25 for all programs except Law (minimum 30 required)</li>
                            <li>A Level: Minimum grade C for all programs</li>
                            <li>AP: Minimum 3 for all programs</li>
                            <li>Azerbaijani language exam result (min. 50% is required for a pass): this exam is conducted by State Examination Center as part of the school-leaving examinations.</li>
                        </ul>

                        <p>Additionally, specific A Level and AP subjects are required for certain programs within groups defined by SEC:</p>

                        <p>Group I, Math/Chemistry subcategory: Math, Physics, Chemistry<br />
                        Group I, Math/Informatics subcategory: Math, Physics, Informatics</p>

                        <p>Group II: Math, Geography, History</p>

                        <p>Group III, History/Geography subcategory: English, History, Geography<br />
                        Group III, Language/History subcategory: English, History, Literature</p>

                        <p><strong>Admission process</strong></p>

                        <p>To apply with IB, A level, AP test results, you must complete the application process of ADA University and State Examination Center (SEC) before the deadline announced by SEC. Expected deadline for Fall 2026 admission is mid-July, 2026. Please check this and SEC webpage for further updates.</p>

                        <p><em>ADA University application process</em></p>

                        <p><strong>Step 1:</strong> Submit ADA University <a href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon">Online Application</a> and its attachments:</p>
                        <ul>
                            <li>Recent photo</li>
                            <li>National Identification Card</li>
                            <li>Official high school diploma/a reference from school (if still a student)</li>
                            <li>English Language Proficiency test result (if available). Official scores must be sent to ADA University by relevant testing center. Unofficial scores are not accepted.</li>
                        </ul>

                        <p><strong>Step 2:</strong> Send IB/A Level/AP results to ADA University through official test centers</p>

                        <p><em><strong>State Examination Center application process</strong></em></p>

                        <p><strong>Step 1:</strong> Submit SEC online application form (Abituriyentin elektron ariza formasi). Please follow SEC website for dates and deadlines.</p>

                        <p><strong>Step 2:</strong> Send IB/A Level/AP results to SEC through official test centers</p>

                        <p><strong>Step 3:</strong> Submit copy of SEC online application form (Abituriyentin elektron ariza formasi) and international test results to SEC by their announced deadline (expected mid-July, 2026).</p>

                        <p>Note: IB/A Level/AP applicants are not required to submit language proficiency test results such as IELTS/TOEFL/Duolingo/PTE.</p>

                        <p>Note: <em>ADA University accepts the IELTS "One Skill Retake" score as well.</em></p>
                    </div>

                    <div className="ada-school-route" id="ada-school-route">
                        <h2>ADA School Route</h2>

                        <p>Graduates of <a href="https://www.ada.edu.az/en/ada-school/ada-high-school">ADA School</a> are required to meet all 3 criteria listed below in order to be eligible to apply for ADA University undergraduate programs. Eligible candidates must complete ADA University application process before June 30, 2026, 23:59 Baku time and State Examination Center (SEC) application process before the deadlines announced by SEC.</p>

                        <p><em><strong>Eligibility requirements</strong></em></p>
                        <ul>
                            <li>Minimum 2.00 cumulative grade point average (CGPA) at the end of Grade 11</li>
                            <li>Minimum C- annual grade at the end of Grade 11  in the following subjects, depending on the program and major selection of ADA University:
                                <ul>
                                    <li>School of Business: Mathematics</li>
                                    <li>School of IT and Engineering: Mathematics and Informatics (Computational Thinking)</li>
                                </ul>
                            </li>
                            <li>Minimum 50% in Azerbaijani language as a state language exam conducted by the State Examination Center. The dates and passing scores of this exam are determined by the SEC.</li>
                        </ul>

                        <p><em><strong>State Examination Center application process</strong></em></p>

                        <p>Candidates are required to submit SEC online application form (Abituriyentin elektron ariza formasi). This process usually takes place in March-April. Please follow this and SEC website for exact dates and deadlines.</p>

                        <p><em><strong>ADA University application process</strong></em></p>

                        <p>Candidates are required to submit ADA University <a href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon">Online Application</a> and its attachments:</p>
                        <ul>
                            <li>Recent photo</li>
                            <li>National Identification Card</li>
                        </ul>

                        <p>All eligible candidates are first listed based on their CGPA and then on their annual grades in the relevant subjects listed above. Candidates are accepted based on their preference in specialty choices and the number of places available for ADA School graduates.</p>
                    </div>

                    <div className="olympiad-win" id="olympiad-winners">
                        <h2>Route for Olympiad Winners</h2>

                        <p><strong>International Olympiads</strong></p>

                        <p>Selected Republic and International Olympiad winners (I, II, and III places) are directly admitted to ADA University. All applicants are required to submit both ADA University online application and State Examination Center application.</p>

                        <p>List of the selected International Olympiads:</p>
                        <ul>
                            <li>International Mathematics Olympiad</li>
                            <li>Balkan Mathematics Olympiad</li>
                            <li>European Girls' Mathematics Olympiad</li>
                            <li>International Physics Olympiad</li>
                            <li>European Physics Olympiad</li>
                            <li>Asian Physics Olympiad</li>
                            <li>International Olympiad in Informatics</li>
                        </ul>

                        <p>Winners of International Olympiads are allowed to apply to any program of their choice. They are exempt from tuition fee (but not 750 AZN annual student fee) for the whole education duration. The students must meet min. 3.0 GPA per semester requirement to continue with the scholarship.</p>

                        <p><strong>National Subject Olympiads</strong></p>

                        <p>Selected winners of Republic Subject Olympiads may apply to the following programs:</p>

                        <p>Mathematics</p>
                        <ul>
                            <li>Mathematics</li>
                            <li>Computer Science</li>
                            <li>Information Technology</li>
                            <li>Computer Engineering</li>
                        </ul>

                        <p>Informatics</p>
                        <ul>
                            <li>Computer Science</li>
                            <li>Information Technology</li>
                            <li>Computer Engineering</li>
                        </ul>

                        <p>Physics</p>
                        <ul>
                            <li>Electrical and Electronical Engineering</li>
                        </ul>

                        <p>The winners of above olympiads are exempt from both tuition and student fees for the whole duration of their studies. The students must meet min. 3.0 term GPA to continue with the scholarship.</p>

                        <p><strong>Other tuition waivers</strong></p>

                        <p>1st place winners (gold medalists) of RFO (regardless of subjects) in year 11 are exempt from tuition fee (but not the annual 750 AZN student fee) for the first year of their studies.</p>

                        <p>1st place winners (gold medalist) of RFO on Mathematics in year 11 are exempt from tuition fee (but not the annual 750 AZN student fee) for the whole education duration upon their admission to Economics. The students must meet min. 3.0 GPA per semester requirement to hold the scholarship.</p>
                    </div>

                    <div className="deadlines" id="deadlines">
                        <h2>Deadlines</h2>

                        <p><strong>For Citizens of Azerbaijan:</strong></p>
                        <ul>
                            <li>Application deadline for SAT and ADA School students: September 10, 2026</li>
                            <li>Application deadline for IB, A Level, and AP students: June 30, 2026</li>
                            <li>Application deadline for the State Examination Centre students: September 3, 2026</li>
                        </ul>

                        <p><strong>For International Applicants:</strong></p>
                        <ul>
                            <li>First round deadline: April 1, 2026</li>
                            <li>Interviews for shortlisted candidates: May, June 2026</li>
                            <li>Late application deadline: July 1, 2026</li>
                            <li>Interviews for shortlisted candidates: July, August 2026</li>
                        </ul>
                    </div>

                    <div className="transfer-admission" id="transfer-admission">
                        <h2>Transfer Admission</h2>

                        <p>Students studying at other universities who have completed at least one semester at an undergraduate level degree program can apply to ADA University as a transfer student. Transfer candidates are reviewed individually, and their admission process takes up to 60 business days after the completion of interview for admission.</p>

                        <p><em><strong>Eligibility requirements</strong></em></p>
                        <ul>
                            <li>Enrolled at an undergraduate program that is taught in English. Students studying at foundation level or in programs where language of instruction is not English cannot apply as transfer candidates.</li>
                            <li>Enrolled at an undergraduate program that is similar to the applied program at ADA University.</li>
                            <li>Successfully completed at least half of the attempted credits at home university.</li>
                            <li>If a candidate is applying from a university outside Azerbaijan, the university must be in top 500 in the rankings accepted by the Ministry of Science and Education (THE, QS, Shanghai rankings) or the candidate must submit international exam results like SAT or similar.</li>
                            <li>Must have completed one semester and have official transcript with grades at the time of application. Candidates who are not able to present official transcript during the application process are not considered for transfer admission.</li>
                            <li>Citizens of Azerbaijan who were admitted to universities in Azerbaijan with State Examination Center (SEC/DIM) exam result must have SEC/DIM undergraduate admission score that is the same or above the minimum passing score for the program they are applying for transfer in the year that the exam was taken. Candidates who have not taken SEC/DIM admission exams are also eligible to apply.</li>
                            <li>ADA University prefers candidates with SEC/DIM score of 600 and above (where applicable).</li>
                        </ul>
                    </div>

                    <div className="transfer-application-process">
                        <h2>Transfer application process</h2>

                        <p>Transfer candidates are required to complete ADA University and Ministry of Science and Education application process. Applications are reviewed on a rolling-basis.</p>

                        <p><em><strong>ADA University application process</strong></em></p>

                        <p>ADA University <a href="https://ssb-prod.ec.ada.edu.az/PROD/bwskalog.P_DispLoginNon">Online Application</a> form for Transfer Candidates and it's attachments:</p>
                        <ul>
                            <li>CV (not more than 2 pages)</li>
                            <li>Recent photo</li>
                            <li>National Identification Card (for citizens of Azerbaijan) or international passport (for internationals)</li>
                            <li>Official high school diploma and final high school transcript/grades</li>
                            <li>Official transcript from the current university</li>
                            <li>Statement of Purpose describing motivation for applying to this program, future goals, and career aspirations (minimum 300, maximum 500 words)</li>
                            <li>Test Scores (English Language, SAT if available)</li>
                            <li>Reference from State Examination Center (DIM) confirming applicant's participation at their exams and his/her score (required only for the citizens of Azerbaijan)</li>
                            <li>Partial recognition certificate from the Agency for Quality Assurance in Education</li>
                        </ul>

                        <p>Complete applications are reviewed, and shortlisted candidates are required to attend an interview.</p>

                        <p><em><strong>Ministry of Science and Education application process</strong></em></p>

                        <p>Candidates who successfully pass ADA University application process are required to apply through portal.edu.az. Dates and deadlines for this process are defined by the Ministry.</p>

                        <p>Deadline for Fall term transfer applications: June 1</p>
                    </div>

                    <div className="attend-events" id="attend-events">
                        <h2>Attend events</h2>

                        <p>ADA University Admissions Office hosts a variety of activities, including information sessions, workshops, seminars, campus tours, and master classes for prospective students.</p>

                        <p><a href="https://www.ada.edu.az/en/events">Explore our upcoming admission events and book your place.</a></p>
                    </div>

                    <div className="contact-us" id="contact-us">
                        <h2>Contact us</h2>

                        <p>E-mail: <a href="bachelors@ada.edu.az">bachelors@ada.edu.az</a></p>

                        <p>Phone numbers:</p>
                        <ul>
                            <li>School of IT and Engineering (Group I): (+994 12) 437 32 35 ext. 328</li>
                            <li>School of Business (Group II): (+994 12) 437 3235 ext. 130</li>
                            <li>School of Public and International Affairs and School of Law (Group III): (+994 12) 437 3235 ext. 291</li>
                            <li>School of Design and Architecture: (+994 12) 437 3235 ext. 130</li>
                            <li>School of Agricultural and Food Sciences: (+994 12) 437 3235</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MainUndergraduate