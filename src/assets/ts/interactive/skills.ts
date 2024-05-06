function returnSkills() {
  return document.querySelectorAll('.item__progress');
}

function zeroSkills() {
  const skills = returnSkills();
  skills.forEach((item) => {
    item.setAttribute('value', '0');
  });
}

function showSkillsProgress() {
  const progressNodeList = document.querySelectorAll('.item__percent');
  const percents: string[] = [];
  progressNodeList.forEach((item) => {
    const percent: string = <string>item.textContent;
    percents.push(percent);
  });

  const skills = returnSkills();
  skills.forEach((item, index) => {
    if (item.getAttribute('value') === '0') {
      item.setAttribute('value', percents[index]);
    }
  });
}

function checkSkillsView() {
  const skillsSection: HTMLElement = <HTMLElement>(
    document.querySelector('.skills')
  );
  const domRect = skillsSection.getBoundingClientRect();
  if (domRect.bottom <= window.innerHeight && domRect.top > 0) {
    console.log('show!');
    showSkillsProgress();
  }
}

export { zeroSkills, checkSkillsView };
