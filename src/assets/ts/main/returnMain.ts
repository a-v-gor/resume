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
  const sectionIntro = returnIntroSection();
  const sectionExpertise = returnExpertiseSection();
  const sectionSkills = returnSkillsSection();
  const sectionExperience = returnExperienceSection();
  const sectionEducation = returnEducationSection();
  const sectionPortfolio = returnPortfolioSection();

  main.append(
    sectionIntro,
    sectionExpertise,
    sectionSkills,
    sectionExperience,
    sectionEducation,
    sectionPortfolio
  );
  return main;
}
