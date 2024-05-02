import returnEducationSection from './returnEducationSection';
import returnElement from '../common/returnElement';
import returnExperienceSection from './returnExperienceSection';
import returnExpertiseSection from './returnExpertiseSection';
import returnIntroSection from './returnIntroSection';
import returnPortfolioSection from './returnPortfolioSection';
import returnSkillsSection from './returnSkillsSection';

export default function returnMain() {
  const main = returnElement({
    tag: 'main',
    classes: ['main'],
  });
  const introSection = returnIntroSection();
  const expertiseSection = returnExpertiseSection();
  const skillsSection = returnSkillsSection();
  const sectionExperience = returnExperienceSection();
  const sectionEducation = returnEducationSection();
  const sectionPortfolio = returnPortfolioSection();

  main.append(
    introSection,
    expertiseSection,
    skillsSection,
    sectionExperience,
    sectionEducation,
    sectionPortfolio
  );
  return main;
}
