import returnElement from './returnElement';

export default function returnPersonalDescriptionText() {
  const personalDescriptionText = returnElement({
    tag: 'div',
    classes: ['personal__descr-text'],
  });
  const personalName = returnElement({
    tag: 'div',
    classes: ['personal__name'],
  });
  const personalFName = returnElement({
    tag: 'span',
    classes: ['personal__fname'],
    textContent: 'desmond',
  });
  const br = returnElement({
    tag: 'br',
  });
  const personalLName = returnElement({
    tag: 'span',
    classes: ['personal__lname'],
    textContent: 'RAMBOWSKI',
  });
  const personalPosition = returnElement({
    tag: 'div',
    classes: ['personal__position'],
    textContent: 'Web Developer & Front-end Expert',
  });

  personalName.append(personalFName, br, personalLName);
  personalDescriptionText.append(personalName, personalPosition);

  return personalDescriptionText;
}
