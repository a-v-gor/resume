import returnElement from './returnElement';

interface Props {
  tag?: string;
  classes?: string[];
  wrapperTag?: string;
  wrapperClasses?: string[];
  headerClasses?: string[];
  descriptionClasses?: string[];
  title?: string;
  subitle?: string;
}

interface resultObj {
  section: HTMLElement;
  header: HTMLElement;
  description: HTMLElement;
}

export default function returnSection(props: Props): resultObj {
  let tag = '';
  let classes = ['section'];
  let wrapperTag = 'section';
  let descriptionClasses = ['section__description', 'section__block'];
  let headerClasses = ['section__header', 'section__block'];
  let wrapperClasses = ['section__wrapper'];
  if (props.classes !== undefined) {
    classes = classes.concat(props.classes);
  }
  if (props.headerClasses !== undefined) {
    headerClasses = headerClasses.concat(props.headerClasses);
  }
  if (props.descriptionClasses !== undefined) {
    descriptionClasses = descriptionClasses.concat(props.descriptionClasses);
  }
  if (props.tag !== undefined) {
    tag = props.tag;
  } else {
    tag = 'div';
  }
  if (props.wrapperTag !== undefined) {
    wrapperTag = props.wrapperTag;
  }
  if (props.wrapperClasses !== undefined) {
    wrapperClasses = wrapperClasses.concat(props.wrapperClasses);
  }
  const section = returnElement({
    tag: tag,
    classes: classes,
  });
  section.classList.add('section');
  const wrapper = returnElement({
    tag: wrapperTag,
    classes: wrapperClasses,
  });
  const header = returnElement({
    tag: 'div',
    classes: headerClasses,
  });
  const description = returnElement({
    tag: 'div',
    classes: descriptionClasses,
  });
  if (props.title !== undefined && props.subitle !== undefined) {
    const title = returnElement({
      tag: 'h2',
      classes: ['article-block__title', 'title'],
      textContent: props.title,
    });
    const subtitle = returnElement({
      tag: 'p',
      classes: ['article-block__subtitle', 'text'],
      textContent: props.subitle,
    });
    header.append(title, subtitle);
  }

  wrapper.append(header, description);
  section.append(wrapper);

  const result = {
    section: section,
    header: header,
    description: description,
  };

  return result;
}
