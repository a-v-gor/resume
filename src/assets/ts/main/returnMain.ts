import returnAwardsSection from './returnAwardsSection';
import returnEducationSection from './returnEducationSection';
import returnElement from '../common/returnElement';
import returnExperienceSection from './returnExperienceSection';
import returnExpertiseSection from './returnExpertiseSection';
import returnIntroSection from './returnIntroSection';
import returnProfilesSection from './returnProfilesSection';
import returnPortfolioSection from './returnPortfolioSection';
import returnClientsSection from './returnClientsSection';

export default function returnMain() {
  const main = returnElement({
    tag: 'main',
    classes: ['main'],
  });
  const sectionIntro = returnIntroSection();
  const sectionExpertise = returnExpertiseSection();
  const sectionExperience = returnExperienceSection();
  const sectionEducation = returnEducationSection();
  const sectionProfiles = returnProfilesSection();
  const sectionAwards = returnAwardsSection();
  const sectionPortfolio = returnPortfolioSection();
  const sectionClients = returnClientsSection();

  main.append(
    sectionIntro,
    sectionExpertise,
    sectionExperience,
    sectionEducation,
    sectionProfiles,
    sectionAwards,
    sectionPortfolio,
    sectionClients
  );
  return main;
}
