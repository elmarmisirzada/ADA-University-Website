import React, { useEffect, useMemo, useState } from 'react';
import './StudyingADA.css'

const Search: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'studying' | 'financial' | 'experience'>('studying');
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<'studying' | 'financial' | 'experience'>('studying');

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handleChange = () => setIsMobile(mq.matches);
    handleChange();
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const studyingContent = useMemo(
    () => (
      <div className="form">
        <div className="studying-up">
          <h1>Programs</h1>
          <div className="studying-down ">
            <div className="down-left">
              <p>
                We offer undergraduate and graduate programs in seven Schools. With 212 faculty members, we provide academic
                excellence and high-quality education to more than 4,000 students.
              </p>
              <p>
                Each year, we receive a significant number of applications. We remain highly selective with an emphasis on
                outstanding academic achievement and potential for growth. We admit students from all corners of Azerbaijan and
                from around the world.
              </p>
            </div>

            <div className="down-right program-buttons">
              <button>Find Your Program</button>

              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    ),
    []
  );

  const financialContent = useMemo(
    () => (
      <div className="form">
        <div className="studying-up">
          <h1>Financial Aid</h1>
          <div className="studying-down ">
            <div className="down-left">
              <p>
                At ADA University, we value academic merit and performance of our students, and we tend to reward it through
                generous scholarships, fellowships, and awards. We are committed to provide outstanding education and promote
                intellectual inquiry. We are also part of a larger society in which we share responsibility towards each other.
                Thus, we aspire to give back to society by providing diverse financial aid opportunities that welcome students
                from all backgrounds and financial abilities.
              </p>
            </div>

            <div className="down-right">
              <button>Merit Scholarships</button>

              <button>International Fellowships</button>

              <button>Student Loans</button>
            </div>
          </div>
        </div>
      </div>
    ),
    []
  );

  const experienceContent = useMemo(
    () => (
      <div className="form">
        <div className="studying-up">
          <h1>ADA Experience</h1>
          <div className="studying-down ">
            <div className="down-left">
              <p>
                ADA is a community where students engage equally with peers to contribute to the intellectually challenging
                culture of the University. Here, you are in charge of your own future. Follow your passion, develop your talent,
                and grow by championing your cause. Student government and student clubs are a vital part of ADA life. Formed
                around a variety of causes and interests, their activities enrich our community.
              </p>
            </div>

            <div className="down-right experience-buttons">
              <button>Student Life</button>

              <button>Exchange Programs</button>
              <button>Career Services</button>
              <button>Alumni Stories</button>
            </div>
          </div>
        </div>
      </div>
    ),
    []
  );

  const handleMobileSectionSelect = (section: 'studying' | 'financial' | 'experience') => {
    setOpenMobileSection(section);
    setActiveTab(section);
  };

  return (
   <div className="fullsearchpart">
     <div className="little-parts container">

      {!isMobile && (
        <div className="tab-buttons">
          <button className={activeTab === 'studying' ? 'active' : ''} onClick={() => setActiveTab('studying')}>
            Studying at ADA
          </button>
          <button className={activeTab === 'financial' ? 'active' : ''} onClick={() => setActiveTab('financial')}>
            Financial Aid
          </button>
          <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>
            ADA Experience
          </button>
        </div>
      )}

      {isMobile ? (
        <div className="studying-stacked">
          <div className="studying-stacked-section">
            <button
              type="button"
              className={
                openMobileSection === 'studying'
                  ? 'studying-stacked-title studying-stacked-title-active'
                  : 'studying-stacked-title'
              }
              aria-expanded={openMobileSection === 'studying'}
              onClick={() => handleMobileSectionSelect('studying')}
            >
              Studying at ADA
            </button>
            {openMobileSection === 'studying' && studyingContent}
          </div>

          <div className="studying-stacked-section">
            <button
              type="button"
              className={
                openMobileSection === 'financial'
                  ? 'studying-stacked-title studying-stacked-title-active'
                  : 'studying-stacked-title'
              }
              aria-expanded={openMobileSection === 'financial'}
              onClick={() => handleMobileSectionSelect('financial')}
            >
              Financial Aid
            </button>
            {openMobileSection === 'financial' && financialContent}
          </div>

          <div className="studying-stacked-section">
            <button
              type="button"
              className={
                openMobileSection === 'experience'
                  ? 'studying-stacked-title studying-stacked-title-active'
                  : 'studying-stacked-title'
              }
              aria-expanded={openMobileSection === 'experience'}
              onClick={() => handleMobileSectionSelect('experience')}
            >
              ADA Experience
            </button>
            {openMobileSection === 'experience' && experienceContent}
          </div>
        </div>
      ) : (
        <>
          {activeTab === 'studying' && studyingContent}
          {activeTab === 'financial' && financialContent}
          {activeTab === 'experience' && experienceContent}
        </>
      )}
    </div>
   </div>
  );
};

export default Search;
