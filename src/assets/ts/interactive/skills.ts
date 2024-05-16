import { pageElements } from '../common/pageElements';

function checkSkillPosition(element: HTMLElement): boolean {
  const domRect = element.getBoundingClientRect();
  if (domRect.bottom <= window.innerHeight && domRect.top >= 0) {
    return true;
  } else {
    return false;
  }
}

function showSkillsProgress(show: boolean, dataArr?: string[]) {
  const skillsProgressBars: NodeListOf<HTMLElement> =
    pageElements.skills.querySelectorAll('.item__progress');
  skillsProgressBars.forEach((item, index) => {
    if (show && dataArr && checkSkillPosition(item)) {
      item.setAttribute('value', dataArr[index]);
    } else {
      item.setAttribute('value', '0');
    }
  });
}

function returnPercents(): string[] {
  const progressNodeList =
    pageElements.skills.querySelectorAll('.item__percent');
  const percents: string[] = [];
  progressNodeList.forEach((item) => {
    const percent: string = <string>item.textContent;
    percents.push(percent);
  });
  return percents;
}

function showSkills() {
  const percents = returnPercents();
  showSkillsProgress(true, percents);
}

function hideSkills() {
  showSkillsProgress(false);
}

export { hideSkills, showSkills };
