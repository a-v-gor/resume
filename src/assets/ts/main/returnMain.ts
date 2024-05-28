import returnEducationSection from './returnEducationSection';
import returnElement from '../common/returnElement';
import returnExperienceSection from './returnExperienceSection';
import returnExpertiseSection from './returnExpertiseSection';
import returnIntroSection from './returnIntroSection';
import returnPortfolioSection from './returnPortfolioSection';
import returnSkillsSection from './returnSkillsSection';
import returnContactSection from './returnContactSection';

export default function returnMain() {
  const main = returnElement({
    tag: 'main',
    classes: ['main'],
  });
  const introSection = returnIntroSection();
  const expertiseSection = returnExpertiseSection();
  const skillsSection = returnSkillsSection();
  const experienceSection = returnExperienceSection();
  const educationSection = returnEducationSection();
  const portfolioSection = returnPortfolioSection();
  const footerSection = returnContactSection();

  main.append(
    introSection,
    expertiseSection,
    skillsSection,
    experienceSection,
    educationSection,
    portfolioSection,
    footerSection
  );
  return main;
}
