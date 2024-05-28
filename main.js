/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scss/style.scss":
/*!************************************!*\
  !*** ./src/assets/scss/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/ts/changeScrollBody.ts":
/*!*******************************************!*\
  !*** ./src/assets/ts/changeScrollBody.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeScrollBody: () => (/* binding */ changeScrollBody)
/* harmony export */ });
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/pageElements */ "./src/assets/ts/common/pageElements.ts");

function changeScrollBody() {
    var checkBox = _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.menuCheckbox;
    console.log(checkBox.checked);
    if (!checkBox.checked &&
        !document.body.classList.contains('body_stop-scroll')) {
        document.body.classList.add('body_stop-scroll');
    }
    else {
        document.body.classList.remove('body_stop-scroll');
    }
}



/***/ }),

/***/ "./src/assets/ts/common/pageElements.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/common/pageElements.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageElements: () => (/* binding */ pageElements)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/common/returnElement.ts");

function newElement() {
    return (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({ tag: 'div' });
}
var pageElements = {
    header: newElement(),
    skills: newElement(),
    footer: newElement(),
    themeBtn: newElement(),
    substrate: newElement(),
    menuCheckbox: (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({ tag: 'input' }),
    menuList: (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({ tag: 'ul' }),
    menuBtn: newElement(),
};



/***/ }),

/***/ "./src/assets/ts/common/returnContacts.ts":
/*!************************************************!*\
  !*** ./src/assets/ts/common/returnContacts.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnContacts)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/common/returnElement.ts");

function returnContact(header, href, descr) {
    var contact = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'article',
        classes: ['contacts__contact', 'contact', 'interactive'],
    });
    var contactTitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h4',
        classes: ['contact__title', 'title', 'text'],
        textContent: header,
    });
    var contactText = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'p',
        classes: ['contact__descr', 'text'],
    });
    var contactLink = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'a',
        attrib: [
            {
                name: 'href',
                value: href,
            },
            {
                name: 'rel',
                value: 'noopener',
            },
            {
                name: 'target',
                value: '_blank',
            },
        ],
        classes: ['contact__link'],
        textContent: descr,
    });
    contactText.append(contactLink);
    contact.append(contactTitle, contactText);
    return contact;
}
function returnContacts() {
    var contacts = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'section',
        classes: ['contacts'],
    });
    var contactsTitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h3',
        classes: ['contacts__title'],
        textContent: 'Контакты',
    });
    var contactLocation = returnContact('Местонахождение', 'https://maps.app.goo.gl/awAMRVKcbUeYWu1h8', 'Ростов-на-Дону');
    var contactTelegram = returnContact('Телеграм', 'https://t.me/alexey_gorbenko', '@alexey_gorbenko');
    var contactDiscord = returnContact('Discord', 'https://discordapp.com/users/873419814985674802', '@alexey_gorbenko');
    var contactEmail = returnContact('E-mail', 'mailto:a.v.gor@mail.ru', 'a.v.gor@mail.ru');
    contacts.append(contactsTitle, contactLocation, contactTelegram, contactDiscord, contactEmail);
    return contacts;
}


/***/ }),

/***/ "./src/assets/ts/common/returnElement.ts":
/*!***********************************************!*\
  !*** ./src/assets/ts/common/returnElement.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnElement)
/* harmony export */ });
function returnElement(elemData) {
    var element = document.createElement(elemData.tag);
    if (elemData.classes !== undefined) {
        elemData.classes.forEach(function (item) {
            element.classList.add(item);
        });
    }
    if (elemData.id !== undefined) {
        element.id = elemData.id;
    }
    if (elemData.attrib !== undefined) {
        elemData.attrib.forEach(function (i) {
            element.setAttribute(i.name, i.value);
        });
    }
    if (elemData.textContent !== undefined) {
        element.textContent = elemData.textContent;
    }
    if (elemData.tag === 'img' && elemData.src !== undefined) {
        element.setAttribute('src', elemData.src);
    }
    return element;
}


/***/ }),

/***/ "./src/assets/ts/common/returnEvolutionItem.ts":
/*!*****************************************************!*\
  !*** ./src/assets/ts/common/returnEvolutionItem.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnEvolutionItem)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/common/returnElement.ts");

function returnEvolutionItem(title, period, position, location, text, isEducation) {
    var itemClass = isEducation ? 'education__item' : 'experience__item';
    var item = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'li',
        classes: [
            'unord-list__item',
            'list__item',
            'evolution-ul__item',
            itemClass,
        ],
    });
    var article = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'article',
        classes: ['list__article', 'article-li', 'evolution-ul__article'],
    });
    var header = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['article-li__header'],
    });
    var articleTitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h3',
        classes: ['article-li__title', 'title'],
        textContent: title,
    });
    var articlePeriod = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'p',
        classes: ['article-li__period'],
        textContent: period,
    });
    var articlePosition = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'p',
        classes: ['article-li__position'],
        textContent: position,
    });
    var articleLocation = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'p',
        classes: ['article-li__location'],
        textContent: location,
    });
    var body = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['article-li__body'],
    });
    var articleText = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'p',
        classes: ['article-li__text', 'text'],
        textContent: text,
    });
    header.append(articleTitle, articlePeriod, articlePosition, articleLocation);
    body.append(articleText);
    article.append(header, body);
    item.append(article);
    return item;
}


/***/ }),

/***/ "./src/assets/ts/common/returnPersonalDescriptionText.ts":
/*!***************************************************************!*\
  !*** ./src/assets/ts/common/returnPersonalDescriptionText.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnPersonalDescriptionText)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/common/returnElement.ts");

function returnPersonalDescriptionText() {
    var personalDescriptionText = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['personal__descr-text'],
    });
    var personalName = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['personal__name', 'interactive'],
    });
    var personalFName = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'span',
        classes: ['personal__fname'],
        textContent: 'Алексей',
    });
    var br = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'br',
    });
    var personalLName = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'span',
        classes: ['personal__lname'],
        textContent: 'Горбенко',
    });
    var personalPosition = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['personal__position', 'interactive'],
        textContent: 'Front-end-разработчик',
    });
    personalName.append(personalFName, br, personalLName);
    personalDescriptionText.append(personalName, personalPosition);
    return personalDescriptionText;
}


/***/ }),

/***/ "./src/assets/ts/common/returnSectionObject.ts":
/*!*****************************************************!*\
  !*** ./src/assets/ts/common/returnSectionObject.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnSectionObject)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/common/returnElement.ts");

function returnSectionObject(props) {
    var tag = '';
    var classes = ['section'];
    var wrapperTag = 'section';
    var descriptionClasses = ['section__description', 'section__block'];
    var headerClasses = ['section__header', 'section__block'];
    var wrapperClasses = ['section__wrapper', 'wrapper'];
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
    }
    else {
        tag = 'div';
    }
    if (props.wrapperTag !== undefined) {
        wrapperTag = props.wrapperTag;
    }
    if (props.wrapperClasses !== undefined) {
        wrapperClasses = wrapperClasses.concat(props.wrapperClasses);
    }
    var section = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: tag,
        classes: classes,
    });
    section.classList.add('section');
    var wrapper = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: wrapperTag,
        classes: wrapperClasses,
    });
    var header = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: headerClasses,
    });
    var description = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: descriptionClasses,
    });
    if (props.title !== undefined &&
        props.subitle !== undefined &&
        props.id !== undefined) {
        var title = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'h2',
            classes: ['article-block__title', 'title'],
            textContent: props.title,
            id: props.id,
        });
        var subtitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
            tag: 'p',
            classes: ['article-block__subtitle', 'text'],
            textContent: props.subitle,
        });
        header.append(title, subtitle);
    }
    wrapper.append(header, description);
    section.append(wrapper);
    var result = {
        section: section,
        header: header,
        description: description,
    };
    return result;
}


/***/ }),

/***/ "./src/assets/ts/common/returnSocials.ts":
/*!***********************************************!*\
  !*** ./src/assets/ts/common/returnSocials.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnSocials)
/* harmony export */ });
/* harmony import */ var _returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnElement */ "./src/assets/ts/common/returnElement.ts");

function returnSocials() {
    var socials = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'section',
        classes: ['socials'],
    });
    var socialsTitle = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h3',
        classes: ['socials__title'],
        textContent: 'Социальные сети',
    });
    var linkLI = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'a',
        classes: ['socials__link', 'interactive'],
        attrib: [
            {
                name: 'href',
                value: 'https://www.linkedin.com/in/alexey-gorbenko',
            },
            {
                name: 'target',
                value: '_blank',
            },
        ],
    });
    var iconLi = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['socials__icon', 'socials__icon-li'],
    });
    var linkGH = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'a',
        classes: ['socials__link', 'interactive'],
        attrib: [
            {
                name: 'href',
                value: 'https://www.github.com/a-v-gor',
            },
            {
                name: 'target',
                value: '_blank',
            },
        ],
    });
    var iconGH = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['socials__icon', 'socials__icon-gh'],
    });
    var linkCW = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'a',
        classes: ['socials__link', 'interactive'],
        attrib: [
            {
                name: 'href',
                value: 'https://www.codewars.com/users/a-v-gor',
            },
            {
                name: 'target',
                value: '_blank',
            },
        ],
    });
    var iconCW = (0,_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['socials__icon', 'socials__icon-codewars'],
    });
    linkLI.append(iconLi);
    linkGH.append(iconGH);
    linkCW.append(iconCW);
    socials.append(socialsTitle, linkLI, linkGH, linkCW);
    return socials;
}


/***/ }),

/***/ "./src/assets/ts/header/menu.ts":
/*!**************************************!*\
  !*** ./src/assets/ts/header/menu.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeBurgerMenu: () => (/* binding */ closeBurgerMenu),
/* harmony export */   returnMenu: () => (/* binding */ returnMenu)
/* harmony export */ });
/* harmony import */ var _changeScrollBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../changeScrollBody */ "./src/assets/ts/changeScrollBody.ts");
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/pageElements */ "./src/assets/ts/common/pageElements.ts");
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");



function returnMenuElement(link, description) {
    var itemAbout = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'li',
        classes: ['menu__item'],
    });
    if (document.documentElement.clientWidth > 1023) {
        itemAbout.classList.add('interactive');
    }
    var linkAbout = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'a',
        classes: ['menu__link', 'link'],
        attrib: [
            {
                name: 'href',
                value: "#".concat(link),
            },
        ],
        textContent: description,
    });
    itemAbout.append(linkAbout);
    return itemAbout;
}
function returnMenu() {
    var menuWrapper = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'div',
        classes: ['menu'],
    });
    var menu = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'nav',
        classes: ['menu__nav'],
    });
    var inputCheckBox = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'input',
        classes: ['menu__input'],
        attrib: [
            { name: 'id', value: 'menu-input' },
            { name: 'type', value: 'checkbox' },
        ],
    });
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.menuCheckbox = inputCheckBox;
    var burgerButton = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'label',
        classes: ['menu__label'],
        attrib: [
            {
                name: 'for',
                value: 'menu-input',
            },
        ],
    });
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.menuBtn = burgerButton;
    var burgerIcon = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'span',
        classes: ['menu__icon'],
    });
    var navList = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'ul',
        classes: ['menu__list', 'menu-list'],
    });
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.menuList = navList;
    var itemIntro = returnMenuElement('about', 'О себе');
    var itemExpertise = returnMenuElement('expertise', 'Знания');
    var itemSkills = returnMenuElement('skills', 'Навыки');
    var itemExperience = returnMenuElement('experience', 'Опыт');
    var itemEducation = returnMenuElement('education', 'Образование');
    var itemPortfolio = returnMenuElement('portfolio', 'Портфолио');
    var itemContacts = returnMenuElement('contacts', 'Контакты');
    var themeBtn = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'div',
        classes: ['theme-btn', 'interactive'],
    });
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.themeBtn = themeBtn;
    var substrate = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'div',
        classes: ['menu__substrate'],
    });
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.substrate = substrate;
    navList.append(itemIntro, itemExpertise, itemSkills, itemExperience, itemEducation, itemPortfolio, itemContacts);
    burgerButton.append(burgerIcon);
    menu.append(inputCheckBox, burgerButton, navList, substrate);
    menuWrapper.append(menu, themeBtn);
    return menuWrapper;
}
function closeBurgerMenu() {
    var checkbox = _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.menuCheckbox;
    checkbox.checked = false;
    (0,_changeScrollBody__WEBPACK_IMPORTED_MODULE_0__.changeScrollBody)();
}



/***/ }),

/***/ "./src/assets/ts/header/returnHeader.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/header/returnHeader.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnHeader)
/* harmony export */ });
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/avatar.jpg */ "./src/assets/img/avatar.jpg");
/* harmony import */ var _common_returnPersonalDescriptionText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/returnPersonalDescriptionText */ "./src/assets/ts/common/returnPersonalDescriptionText.ts");
/* harmony import */ var _common_returnSocials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/returnSocials */ "./src/assets/ts/common/returnSocials.ts");
/* harmony import */ var _common_returnContacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/returnContacts */ "./src/assets/ts/common/returnContacts.ts");
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/pageElements */ "./src/assets/ts/common/pageElements.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu */ "./src/assets/ts/header/menu.ts");








function returnHeader() {
    var headerObject = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_5__["default"])({
        tag: 'header',
        classes: ['header'],
        wrapperTag: 'article',
        wrapperClasses: ['header__wrapper', 'personal'],
        headerClasses: ['header__header', 'interactive'],
        descriptionClasses: ['header__description'],
    });
    var title = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h2',
        classes: ['section__title'],
        textContent: 'Личная информация',
    });
    var photo = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'img',
        classes: ['header__photo'],
        src: _img_avatar_jpg__WEBPACK_IMPORTED_MODULE_1__,
        attrib: [{ name: 'alt', value: 'А.Горбенко' }],
    });
    headerObject.header.append(title, photo);
    var personalWrapper = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['header__descr-wrapper', 'personal__wrapper'],
    });
    var personalDescriptionText = (0,_common_returnPersonalDescriptionText__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var headerSocials = (0,_common_returnSocials__WEBPACK_IMPORTED_MODULE_3__["default"])();
    headerSocials.classList.add('header__socials');
    var headerContacts = (0,_common_returnContacts__WEBPACK_IMPORTED_MODULE_4__["default"])();
    headerContacts.classList.add('header__contacts');
    var menu = (0,_menu__WEBPACK_IMPORTED_MODULE_7__.returnMenu)();
    headerObject.description.append(menu);
    personalWrapper.append(personalDescriptionText, headerSocials, headerContacts);
    var description = headerObject.description;
    description.append(personalWrapper);
    _common_pageElements__WEBPACK_IMPORTED_MODULE_6__.pageElements.header = headerObject.section;
    return headerObject.section;
}


/***/ }),

/***/ "./src/assets/ts/interactive/interactive.ts":
/*!**************************************************!*\
  !*** ./src/assets/ts/interactive/interactive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkInteractive: () => (/* binding */ checkInteractive)
/* harmony export */ });
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pageElements */ "./src/assets/ts/common/pageElements.ts");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills */ "./src/assets/ts/interactive/skills.ts");
/* harmony import */ var _visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visible */ "./src/assets/ts/interactive/visible.ts");



function makeElementInteractive(elem, funcShow, funcHide) {
    var domRect = elem.getBoundingClientRect();
    if (elem === _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.header) {
        if (domRect.bottom >= window.innerHeight / 2) {
            funcShow();
        }
        else if (domRect.bottom <= 0) {
            funcHide();
        }
    }
    else if (elem === _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.footer) {
        if (domRect.top <= window.innerHeight / 2) {
            funcShow();
        }
        else if (domRect.top >= window.innerHeight) {
            funcHide();
        }
    }
    else {
        if (domRect.top <= window.innerHeight / 2 && domRect.bottom >= 0) {
            funcShow();
        }
        else {
            funcHide();
        }
    }
}
function checkInteractive() {
    var _a = [
        _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.header,
        _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.footer,
        _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.skills,
    ], header = _a[0], footer = _a[1], skills = _a[2];
    makeElementInteractive(header, _visible__WEBPACK_IMPORTED_MODULE_2__.showHeader, _visible__WEBPACK_IMPORTED_MODULE_2__.hideHeader);
    makeElementInteractive(footer, _visible__WEBPACK_IMPORTED_MODULE_2__.showFooter, _visible__WEBPACK_IMPORTED_MODULE_2__.hideFooter);
    makeElementInteractive(skills, _skills__WEBPACK_IMPORTED_MODULE_1__.showSkills, _skills__WEBPACK_IMPORTED_MODULE_1__.hideSkills);
}



/***/ }),

/***/ "./src/assets/ts/interactive/skills.ts":
/*!*********************************************!*\
  !*** ./src/assets/ts/interactive/skills.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideSkills: () => (/* binding */ hideSkills),
/* harmony export */   showSkills: () => (/* binding */ showSkills)
/* harmony export */ });
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pageElements */ "./src/assets/ts/common/pageElements.ts");

function checkSkillPosition(element) {
    var domRect = element.getBoundingClientRect();
    if (domRect.bottom <= window.innerHeight && domRect.top >= 0) {
        return true;
    }
    else {
        return false;
    }
}
function showSkillsProgress(show, dataArr) {
    var skillsProgressBars = _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.skills.querySelectorAll('.item__progress');
    skillsProgressBars.forEach(function (item, index) {
        if (show && dataArr && checkSkillPosition(item)) {
            item.setAttribute('value', dataArr[index]);
        }
        else {
            item.setAttribute('value', '0');
        }
    });
}
function returnPercents() {
    var progressNodeList = _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.skills.querySelectorAll('.item__percent');
    var percents = [];
    progressNodeList.forEach(function (item) {
        var percent = item.textContent;
        percents.push(percent);
    });
    return percents;
}
function showSkills() {
    var percents = returnPercents();
    showSkillsProgress(true, percents);
}
function hideSkills() {
    showSkillsProgress(false);
}



/***/ }),

/***/ "./src/assets/ts/interactive/visible.ts":
/*!**********************************************!*\
  !*** ./src/assets/ts/interactive/visible.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideFooter: () => (/* binding */ hideFooter),
/* harmony export */   hideHeader: () => (/* binding */ hideHeader),
/* harmony export */   showFooter: () => (/* binding */ showFooter),
/* harmony export */   showHeader: () => (/* binding */ showHeader)
/* harmony export */ });
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pageElements */ "./src/assets/ts/common/pageElements.ts");

function makeNodesVisible(nodes) {
    var timeToWait = 0;
    nodes.forEach(function (element) {
        function showElement() {
            var el = element;
            el.classList.remove('interactive_unactive');
        }
        setTimeout(showElement, timeToWait);
        timeToWait += 100;
    });
}
function hideElement(element) {
    element.classList.add('interactive_unactive');
}
function returnPageElements() {
    return [_common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.header, _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.footer];
}
function hideElements(param) {
    var _a = returnPageElements(), header = _a[0], footer = _a[1];
    var elementsToHide;
    if (param === 'header') {
        elementsToHide = header.querySelectorAll('.interactive');
    }
    else {
        elementsToHide = footer.querySelectorAll('.interactive');
    }
    elementsToHide.forEach(function (element) { return hideElement(element); });
}
function showElements(param) {
    var _a = returnPageElements(), header = _a[0], footer = _a[1];
    var elementsToHide;
    if (param === 'header') {
        elementsToHide = header.querySelectorAll('.interactive');
    }
    else {
        elementsToHide = footer.querySelectorAll('.interactive');
    }
    makeNodesVisible(elementsToHide);
}
function hideHeader() {
    hideElements('header');
}
function showHeader() {
    showElements('header');
}
function hideFooter() {
    hideElements('footer');
}
function showFooter() {
    showElements('footer');
}



/***/ }),

/***/ "./src/assets/ts/main/returnContactSection.ts":
/*!****************************************************!*\
  !*** ./src/assets/ts/main/returnContactSection.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnContactSection)
/* harmony export */ });
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pageElements */ "./src/assets/ts/common/pageElements.ts");
/* harmony import */ var _common_returnContacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/returnContacts */ "./src/assets/ts/common/returnContacts.ts");
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _common_returnPersonalDescriptionText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/returnPersonalDescriptionText */ "./src/assets/ts/common/returnPersonalDescriptionText.ts");
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");
/* harmony import */ var _common_returnSocials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/returnSocials */ "./src/assets/ts/common/returnSocials.ts");






function returnContactSection() {
    var contactsSectionObject = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_4__["default"])({
        wrapperClasses: ['article-block', 'contact-section', 'personal'],
        headerClasses: ['article-block__header', 'contact-section__header'],
        title: 'Контакты',
        subitle: 'Как со мной связаться.',
        descriptionClasses: ['contact-section__description'],
        id: 'contacts',
    });
    var footerContacts = (0,_common_returnContacts__WEBPACK_IMPORTED_MODULE_1__["default"])();
    footerContacts.classList.add('contact-section__contacts');
    var footerArticle = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'article',
        classes: ['section__wrapper', 'personal'],
    });
    var footerArticleTitle = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'h2',
        classes: ['section__title'],
        textContent: 'Personal info',
    });
    var personalWrapper = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tag: 'div',
        classes: ['personal__wrapper'],
    });
    var personalDescriptionText = (0,_common_returnPersonalDescriptionText__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var socials = (0,_common_returnSocials__WEBPACK_IMPORTED_MODULE_5__["default"])();
    personalWrapper.append(personalDescriptionText, socials);
    footerArticle.append(footerArticleTitle, personalWrapper);
    contactsSectionObject.description.append(footerContacts, footerArticle);
    _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.footer = contactsSectionObject.section;
    return contactsSectionObject.section;
}


/***/ }),

/***/ "./src/assets/ts/main/returnEducationSection.ts":
/*!******************************************************!*\
  !*** ./src/assets/ts/main/returnEducationSection.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnEducationSection)
/* harmony export */ });
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/returnEvolutionItem */ "./src/assets/ts/common/returnEvolutionItem.ts");
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");



function returnEducationSection() {
    var educationSectionObject = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_2__["default"])({
        wrapperClasses: ['article-block', 'education'],
        headerClasses: ['article-block__header', 'education__header'],
        descriptionClasses: ['education__description'],
        title: 'Образование',
        subitle: 'Scio me nihil scire.',
        id: 'education',
    });
    var list = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'ul',
        classes: [
            'article-block__ul',
            'unord-list',
            'list',
            'evolution-ul',
            'education__ul',
        ],
    });
    var rssMainItem = (0,_common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__["default"])('Rolling Scopes School', '2023', 'JS/Frontend Development Course.', 'Дистанционно', 'Git, GitHub, оформление коммитов и пулл реквестов. Адаптивная верстка. Core JS. Алгоритмические задачи. DOM, DOM Events, Browser API. Основы NodeJS. Webpack. TypeScript. Разработка UI-компонентов. Техническое интервью. Разработка в команде.', true);
    var rssPreItem = (0,_common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__["default"])('Rolling Scopes School', '2022', 'JS/Frontend-разработка. Подготовительный этап.', 'Дистанционно', 'Знакомство с системой контроля версий Git. Chrome Dev Tools, VS Code, Terminal. Основы HTML. Основы CSS. Знакомство с JavaScript. DOM API. DOM Events. Алгоритмы и Структуры Данных.', true);
    var rkriptItem = (0,_common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__["default"])('Ростовский-на-Дону колледж радиоэлектроники, информационных и промышленных технологий', '2016 – 2020', 'Программист', 'Ростов-на-Дону', 'Информационные технологии. Основы проектирования баз данных. Численные методы. Компьютерные сети. Менеджмент в профессиональной деятельности. Основы финансовой грамотности и предпринимательства. Компьютерная графика.', true);
    var kmidoItem = (0,_common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__["default"])('Краснодарский многопрофильный институт дополнительного образования', '2019', 'Инженер-программист', 'Дистанционно', 'Курс профессиональной переподготовки. Нормативно-правовое регулирование и законодательная база в сфере информационных и компьютерных технологий. Базовый английский язык для технической документации. Введение в программирование. Разработка Web-приложений на базе HTML5, CSS3, JavaScript.', true);
    list.append(rssMainItem, rssPreItem, rkriptItem, kmidoItem);
    educationSectionObject.description.append(list);
    return educationSectionObject.section;
}


/***/ }),

/***/ "./src/assets/ts/main/returnExperienceSection.ts":
/*!*******************************************************!*\
  !*** ./src/assets/ts/main/returnExperienceSection.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnExperienceSection)
/* harmony export */ });
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/returnEvolutionItem */ "./src/assets/ts/common/returnEvolutionItem.ts");
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");



function returnExperienceSection() {
    var experienceSectionObject = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_2__["default"])({
        wrapperClasses: ['article-block', 'experience'],
        headerClasses: ['article-block__header', 'experience__header'],
        descriptionClasses: ['experience__description'],
        title: 'Опыт',
        subitle: 'Per aspera ad astra.',
        id: 'experience',
    });
    var list = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'ul',
        classes: [
            'article-block__ul',
            'unord-list',
            'list',
            'evolution-ul',
            'experience__ul',
        ],
    });
    var petProjectsItem = (0,_common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__["default"])('Петпроекты', '2021 – Настоящее время', 'Front-end-разработчик', 'Ростов-на-Дону', 'Применение на практике знаний, оттачивание навыков верстки. Применение новых стандартов, современных направлений в разработке веб-приложений.', false);
    var kmvItem = (0,_common_returnEvolutionItem__WEBPACK_IMPORTED_MODULE_1__["default"])('ООО «КМВ-Сервис»', '2019 – Настоящее время', 'Системный администратор', 'Ростов-на-Дону', 'Техническое обслуживание компьютерной и оргтехники. Работа с заявками пользователей на первой и второй линии техподдержки. Устранение аппаратных и программных неполадок на автоматизированных рабочих местах. Несложный ремонт электроники.', false);
    list.append(petProjectsItem, kmvItem);
    experienceSectionObject.description.append(list);
    return experienceSectionObject.section;
}


/***/ }),

/***/ "./src/assets/ts/main/returnExpertiseSection.ts":
/*!******************************************************!*\
  !*** ./src/assets/ts/main/returnExpertiseSection.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnExpertiseSection)
/* harmony export */ });
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");


function returnListItem(itemTitle, itemText) {
    var item = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'li',
        classes: ['ord-list__item', 'list__item'],
    });
    var article = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'article',
        classes: ['list__article'],
    });
    var title = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h3',
        classes: ['ord-list__title', 'title'],
        textContent: itemTitle,
    });
    var text = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'p',
        classes: ['ord-list__text', 'text'],
        textContent: itemText,
    });
    article.append(title, text);
    item.append(article);
    return item;
}
function returnExpertiseSection() {
    var sectionObj = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_1__["default"])({
        wrapperClasses: ['article-block'],
        headerClasses: ['article-block__header'],
        title: 'Компетенции',
        subitle: 'Профессиональные знания.',
        id: 'expertise',
    });
    var list = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'ol',
        classes: ['article-block__ol', 'ord-list', 'list'],
    });
    var itemHTML = returnListItem('HTML/CSS', 'Валидная семантическая верстка в соответствии с требованиями HTML5. Верстка по PixelPerfect. Использование Flexbox, Grid. Препроцессор SCSS. БЭМ. Адаптивная и отзывчивая верстка mobile-first / desktop-first.');
    var itemJS = returnListItem('JavaScript', 'ES6. Типы данных, функции, объекты, классы, методы. Прототипы, наследование. Обработка ошибок. Замыкания. Промисы: fetch, async/await. Работа с DOM, события, жизненный цикл страницы. Модули. Web storage.');
    var itemTS = returnListItem('Typescript', 'Базовые типы. Типы, интерфейсы. Дженерики. Объединения / пересечения типов. Избегание типа «any».');
    var itemSoftware = returnListItem('Программное обеспечение', 'Visual Studio Code, Chrome DevTools, PixelPerfect, Figma, GIMP, Inkscape, Adobe Photoshop.');
    var itemDevelop = returnListItem('Средства разработки', 'Webpack, Typescript, Eslint, Stylelint, Prettier, Husky, SASS.');
    var itemTeam = returnListItem('Работа в команде', 'Agile-методология: Scrum, Kanban (Trello, Asana, GitHub Desktop).');
    list.append(itemHTML, itemJS, itemTS, itemSoftware, itemDevelop, itemTeam);
    sectionObj.description.append(list);
    return sectionObj.section;
}


/***/ }),

/***/ "./src/assets/ts/main/returnIntroSection.ts":
/*!**************************************************!*\
  !*** ./src/assets/ts/main/returnIntroSection.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnIntroSection)
/* harmony export */ });
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");

function returnIntroSection() {
    var sectionObj = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_0__["default"])({
        wrapperTag: 'article',
        wrapperClasses: ['article-block'],
        headerClasses: ['article-block__header'],
        title: 'О себе',
        subitle: 'Ключевые компетенции.',
        id: 'about',
    });
    sectionObj.description.innerHTML = "\n    <p class=\"article-block__text\">\u041D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439 front-end-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A. \u0425\u043E\u0447\u0443 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0438 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u043D\u0438\u044F \u0432 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435.</p>\n    <p class=\"article-block__text\">Fornt-end&nbsp;&ndash; \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u043E\u0432\u0430\u044F \u0434\u043B\u044F \u043C\u0435\u043D\u044F \u0441\u0444\u0435\u0440\u0430, \u043A\u0443\u0434\u0430 \u044F \u043F\u0435\u0440\u0435\u0445\u043E\u0436\u0443 \u0438\u0437 \u0441\u043C\u0435\u0436\u043D\u043E\u0439&nbsp;&ndash; \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F. \u0418\u0422-\u0431\u044D\u043A\u0433\u0440\u0430\u0443\u043D\u0434 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441 \u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u043B\u0438 \u0441 \u043B\u0435\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u0440\u0430\u0441\u043D\u044B\u0439 \u0434\u0438\u043F\u043B\u043E\u043C \u0432 <a class=\"article-block__link link\" href=\"http://rgkript.ru/\" target=\"_blank\" class=\"article-block__link\">\u0420\u0413\u041A\u0420\u0438\u041F\u0422</a> \u043F\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u00AB\u0442\u0435\u0445\u043D\u0438\u043A-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u00BB. \u0417\u0430\u0442\u0435\u043C&nbsp;&ndash; \u043A\u0443\u0440\u0441\u044B JS / Front-end \u043E\u0442 <a class=\"article-block__link link\" href=\"https://rs.school/courses/\" target=\"_blank\" class=\"article-block__link\">RSSchool</a>: <a class=\"article-block__link link\" href=\"https://rs.school/courses/javascript-preschool\" target=\"_blank\" class=\"article-block__link\">\u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439</a> \u0438 <a class=\"article-block__link link\" href=\"https://rs.school/courses/javascript-mentoring-program\" target=\"_blank\" class=\"article-block__link\">\u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439</a>, \u0433\u0434\u0435 \u0437\u0430\u043D\u044F\u043B \u043F\u043E\u0447\u0435\u0442\u043D\u043E\u0435 118-\u0435&nbsp;\u043C\u0435\u0441\u0442\u043E (\u043A \u0441\u043B\u043E\u0432\u0443, \u0432\u0441\u0435\u0433\u043E \u043D\u0430 \u043A\u0443\u0440\u0441 \u043F\u043E\u0441\u0442\u0443\u043F\u0438\u043B\u043E \u043E\u043A\u043E\u043B\u043E 8&nbsp;200&nbsp;\u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438&nbsp;&ndash; 531).</p>\n    <p class=\"article-block__text\">\u0425\u043E\u0440\u043E\u0448\u0435\u0435 \u0437\u043D\u0430\u043D\u0438\u0435 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0438\u0437\u0443\u0447\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E \u0432 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0435 \u0438 \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C / \u0443\u0442\u043E\u0447\u043D\u044F\u0442\u044C / \u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435: <a class=\"article-block__link link\" href=\"https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout\" target=\"_blank\" class=\"article-block__link\">\u0441\u0442\u0430\u0442\u044C\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 mdn</a> (<a class=\"article-block__link link\" href=\"https://github.com/mdn/translated-content/commit/57534ec7878cb97d33fff3173ca9d138bad4384d#diff-4b597b83b51827bfb8d612bf02c061810c70614513cae30f25ae1cd99ff486ce\" target=\"_blank\" class=\"article-block__link\">\u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043A\u043E\u043C\u043C\u0438\u0442</a>), <a class=\"article-block__link link\" href=\"https://habr.com/ru/articles/768304/\" target=\"_blank\" class=\"article-block__link\">\u0441\u0442\u0430\u0442\u044C\u044F</a> \u043E\u0431 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 CSS.</p>\n    <p class=\"article-block__text\">\u0417\u0430 \u0432\u0440\u0435\u043C\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0432 RSSchool \u0437\u0430\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043B \u0441\u0435\u0431\u044F \u043A\u0430\u043A \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438 \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0438\u0433\u0440\u043E\u043A: \u043E\u0442\u0437\u044B\u0432\u044B \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u044B \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 <a class=\"article-block__link link\" href=\"https://app.rs.school/cv/fb197dd1-e338-4171-9396-e96774f4f200\" target=\"_blank\" class=\"article-block__link\">\u0440\u0435\u0437\u044E\u043C\u0435</a> RSSchool.</p>";
    return sectionObj.section;
}


/***/ }),

/***/ "./src/assets/ts/main/returnMain.ts":
/*!******************************************!*\
  !*** ./src/assets/ts/main/returnMain.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnMain)
/* harmony export */ });
/* harmony import */ var _returnEducationSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./returnEducationSection */ "./src/assets/ts/main/returnEducationSection.ts");
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _returnExperienceSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./returnExperienceSection */ "./src/assets/ts/main/returnExperienceSection.ts");
/* harmony import */ var _returnExpertiseSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./returnExpertiseSection */ "./src/assets/ts/main/returnExpertiseSection.ts");
/* harmony import */ var _returnIntroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./returnIntroSection */ "./src/assets/ts/main/returnIntroSection.ts");
/* harmony import */ var _returnPortfolioSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./returnPortfolioSection */ "./src/assets/ts/main/returnPortfolioSection.ts");
/* harmony import */ var _returnSkillsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./returnSkillsSection */ "./src/assets/ts/main/returnSkillsSection.ts");
/* harmony import */ var _returnContactSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./returnContactSection */ "./src/assets/ts/main/returnContactSection.ts");








function returnMain() {
    var main = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: 'main',
        classes: ['main'],
    });
    var introSection = (0,_returnIntroSection__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var expertiseSection = (0,_returnExpertiseSection__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var skillsSection = (0,_returnSkillsSection__WEBPACK_IMPORTED_MODULE_6__["default"])();
    var experienceSection = (0,_returnExperienceSection__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var educationSection = (0,_returnEducationSection__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var portfolioSection = (0,_returnPortfolioSection__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var footerSection = (0,_returnContactSection__WEBPACK_IMPORTED_MODULE_7__["default"])();
    main.append(introSection, expertiseSection, skillsSection, experienceSection, educationSection, portfolioSection, footerSection);
    return main;
}


/***/ }),

/***/ "./src/assets/ts/main/returnPortfolioSection.ts":
/*!******************************************************!*\
  !*** ./src/assets/ts/main/returnPortfolioSection.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnPortfolioSection)
/* harmony export */ });
/* harmony import */ var _img_proj_portfolio_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/proj-portfolio.jpg */ "./src/assets/img/proj-portfolio.jpg");
/* harmony import */ var _img_proj_shelter_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/proj-shelter.jpg */ "./src/assets/img/proj-shelter.jpg");
/* harmony import */ var _img_proj_minesweeper_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/proj-minesweeper.jpg */ "./src/assets/img/proj-minesweeper.jpg");
/* harmony import */ var _img_proj_cssMemSlider_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/proj-cssMemSlider.jpg */ "./src/assets/img/proj-cssMemSlider.jpg");
/* harmony import */ var _img_proj_keyboard_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/proj-keyboard.png */ "./src/assets/img/proj-keyboard.png");
/* harmony import */ var _img_proj_movie_app_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/proj-movie-app.jpg */ "./src/assets/img/proj-movie-app.jpg");
/* harmony import */ var _img_proj_tic_tac_toe_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/proj-tic-tac-toe.jpg */ "./src/assets/img/proj-tic-tac-toe.jpg");
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");









function returnPortfolioParagraph() {
    var portfolioParagraph = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_7__["default"])({
        tag: 'p',
        classes: ['portfolio-article__text', 'text'],
    });
    return portfolioParagraph;
}
function returnPortfolioLink(link, text) {
    var portfolioLink = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_7__["default"])({
        tag: 'a',
        classes: ['portfolio-article__link', 'link'],
        attrib: [
            { name: 'href', value: link },
            { name: 'target', value: '_blank' },
        ],
        textContent: text,
    });
    return portfolioLink;
}
function returnArticle(title, description, deployLinkString, ghLinks, tasks, imgSrc, imgAlt) {
    var article = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_7__["default"])({
        tag: 'article',
        classes: ['portfolio__aritcle', 'portfolio-article'],
    });
    var articleWrapper = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_7__["default"])({
        tag: 'div',
        classes: ['portfolio-article__wrapper'],
    });
    var articleTitle = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_7__["default"])({
        tag: 'h3',
        classes: ['portfolio-article__title', 'title'],
        textContent: title,
    });
    var descriptionParagraph = returnPortfolioParagraph();
    descriptionParagraph.textContent = description;
    var deployParagraph = returnPortfolioParagraph();
    var deployLink = returnPortfolioLink(deployLinkString, 'Деплой');
    deployParagraph.append(deployLink, '.');
    var ghParagraph = returnPortfolioParagraph();
    ghLinks.forEach(function (linkString, idx) {
        var linkText = 'Github';
        if (ghLinks.length > 1) {
            linkText += ' ' + ++idx;
        }
        var link = returnPortfolioLink(linkString, linkText);
        ghParagraph.append(link, '. ');
    });
    var tasksParagraph = returnPortfolioParagraph();
    tasks.forEach(function (taskString, idx) {
        var linkText = 'Задание';
        if (tasks.length > 1) {
            linkText += ' ' + ++idx;
        }
        var link = returnPortfolioLink(taskString, linkText);
        tasksParagraph.append(link, '. ');
    });
    var articleImg = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_7__["default"])({
        tag: 'img',
        classes: ['portfolio-article__img'],
        attrib: [
            { name: 'src', value: imgSrc },
            { name: 'alt', value: imgAlt },
        ],
    });
    articleWrapper.append(articleTitle, descriptionParagraph, deployParagraph, ghParagraph, tasksParagraph);
    article.append(articleWrapper, articleImg);
    return article;
}
function returnPortfolioSection() {
    var portfolioSectionObject = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_8__["default"])({
        wrapperClasses: ['article-block', 'portfolio'],
        headerClasses: [
            'section__header',
            'section__block',
            'article-block__header',
            'portfolio__header',
        ],
        descriptionClasses: ['portfolio__description'],
        title: 'Портфолио',
        subitle: 'Выполненные проекты.',
        id: 'portfolio',
    });
    var portfolioArticle = returnArticle('Portfolio', 'Адаптивный landing page с интерактивностью.', 'https://a-v-gor.github.io/study-projects/portfolio/', [
        'https://github.com/a-v-gor/study-projects/tree/portfolio',
        'https://github.com/a-v-gor/study-projects/tree/portfolio-video',
    ], [
        'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/portfolio/portfolio.md',
        'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-3.md',
    ], _img_proj_portfolio_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Printscreen portfolio landing page');
    var cssSliderArticle = returnArticle('CSS слайдер', 'Слайдер на чистом CSS.', 'https://a-v-gor.github.io/cssMemSlider/cssMemSlider/', ['https://github.com/a-v-gor/cssMemSlider'], [
        'https://github.com/rolling-scopes-school/tasks/tree/master/tasks/css-meme-slider',
    ], _img_proj_cssMemSlider_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Virtual keyboard application page');
    var shelterArticle = returnArticle('Shelter', 'Адаптивный интерактивный сайт.', 'https://a-v-gor.github.io/study-projects/shelter/pages/main/', ['https://github.com/a-v-gor/study-projects/tree/shelter'], [
        'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/shelter/shelter.md',
    ], _img_proj_shelter_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Shelter application page');
    var minesweeperArticle = returnArticle('Сапер', 'Игра «Сапер».', 'https://a-v-gor.github.io/study-projects/minesweeper/', ['https://github.com/a-v-gor/study-projects/tree/minesweeper'], [
        'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/minesweeper/README.md',
    ], _img_proj_minesweeper_jpg__WEBPACK_IMPORTED_MODULE_2__, 'Minesweeper application page');
    var keyboardArticle = returnArticle('Виртуальная клавиатура', 'Виртуальная клавиатура.', 'https://a-v-gor.github.io/virtual-keyboard/', ['https://github.com/a-v-gor/virtual-keyboard'], [
        'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-en.md',
    ], _img_proj_keyboard_png__WEBPACK_IMPORTED_MODULE_4__, 'Virtual keyboard application page');
    var movieAppArticle = returnArticle('Поисковик по видео', 'Информация о фильмах по запросу пользователя (API).', 'https://a-v-gor.github.io/study-projects/movie-app/', ['https://github.com/a-v-gor/study-projects/tree/movie-app'], [
        'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-6.md',
    ], _img_proj_movie_app_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Printscreen movie application page');
    var ticTacToeArticle = returnArticle('Tic-tac-toe', 'Игра «крестики-нолики».', 'https://a-v-gor.github.io/study-projects/tic-tac-toe/', ['https://github.com/a-v-gor/study-projects/tree/tic-tac-toe'], [
        'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/js30%23/js30-7.md',
    ], _img_proj_tic_tac_toe_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Tic-tac-toe page');
    portfolioSectionObject.description.append(portfolioArticle, shelterArticle, minesweeperArticle, cssSliderArticle, keyboardArticle, movieAppArticle, ticTacToeArticle);
    return portfolioSectionObject.section;
}


/***/ }),

/***/ "./src/assets/ts/main/returnSkillsSection.ts":
/*!***************************************************!*\
  !*** ./src/assets/ts/main/returnSkillsSection.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnSkillsSection)
/* harmony export */ });
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/pageElements */ "./src/assets/ts/common/pageElements.ts");
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _common_returnSectionObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/returnSectionObject */ "./src/assets/ts/common/returnSectionObject.ts");



function returnSkillsItem(numPercent, id, labelString) {
    var item = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: 'li',
        classes: ['unord-list__item', 'list__item', 'item', 'skills__item'],
    });
    var percentBlock = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: 'div',
        classes: ['item__percent'],
        textContent: numPercent,
    });
    var labelElement = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: 'label',
        classes: ['item__label'],
        attrib: [
            {
                name: 'for',
                value: id,
            },
        ],
        textContent: labelString,
    });
    var progressElement = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: 'progress',
        classes: ['item__progress'],
        attrib: [
            {
                name: 'id',
                value: id,
            },
            {
                name: 'max',
                value: '100',
            },
            {
                name: 'value',
                value: numPercent,
            },
        ],
    });
    item.append(percentBlock, labelElement, progressElement);
    return item;
}
function returnSkillsSection() {
    var skillsSectionObject = (0,_common_returnSectionObject__WEBPACK_IMPORTED_MODULE_2__["default"])({
        wrapperTag: 'article',
        wrapperClasses: ['section__wrapper', 'article', 'skills'],
        headerClasses: ['article-block__header', 'skills__header'],
        descriptionClasses: ['skills__description'],
        title: 'Компетенции',
        subitle: 'Профессиональные навыки.',
        id: 'skills',
    });
    var skillsList = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_1__["default"])({
        tag: 'ul',
        classes: ['article-block__ul', 'unord-list', 'list', 'skills__list'],
    });
    var htmlElement = returnSkillsItem('90', 'html', 'HTML');
    var cssElement = returnSkillsItem('50', 'css3', 'CSS3 animation');
    var tsElement = returnSkillsItem('65', 'ts', 'Typescript');
    var gitElement = returnSkillsItem('80', 'git', 'GIT');
    var webpackElement = returnSkillsItem('95', 'webpack', 'Webpack');
    var seoElement = returnSkillsItem('90', 'seo', 'SEO');
    skillsList.append(htmlElement, cssElement, tsElement, gitElement, webpackElement, seoElement);
    skillsSectionObject.description.append(skillsList);
    _common_pageElements__WEBPACK_IMPORTED_MODULE_0__.pageElements.skills = skillsSectionObject.section;
    return skillsSectionObject.section;
}


/***/ }),

/***/ "./src/assets/ts/returnFooter.ts":
/*!***************************************!*\
  !*** ./src/assets/ts/returnFooter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnFooter)
/* harmony export */ });
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/returnElement */ "./src/assets/ts/common/returnElement.ts");

function returnFooter() {
    var footer = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'footer',
        classes: ['footer'],
    });
    var wrapper = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['footer__wrapper', 'wrapper'],
    });
    var copyrightString = '© А. Горбенко ' + new Date().getFullYear();
    var copyright = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['footer__copyright'],
        textContent: copyrightString,
    });
    var copyrightDesign = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'div',
        classes: ['footer__copyright'],
    });
    var copyrightDesignLink = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'a',
        classes: ['footer__link', 'link'],
        textContent: 'design: RuvenThemes',
        attrib: [
            {
                name: 'href',
                value: 'https://themeforest.net/user/ruventhemes',
            },
            {
                name: 'target',
                value: '_blank',
            },
        ],
    });
    copyrightDesign.append(copyrightDesignLink);
    wrapper.append(copyright, copyrightDesign);
    footer.append(wrapper);
    return footer;
}


/***/ }),

/***/ "./src/assets/ts/returnPage.ts":
/*!*************************************!*\
  !*** ./src/assets/ts/returnPage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnPage)
/* harmony export */ });
/* harmony import */ var _common_returnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/returnElement */ "./src/assets/ts/common/returnElement.ts");
/* harmony import */ var _header_returnHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/returnHeader */ "./src/assets/ts/header/returnHeader.ts");
/* harmony import */ var _main_returnMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/returnMain */ "./src/assets/ts/main/returnMain.ts");
/* harmony import */ var _returnFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./returnFooter */ "./src/assets/ts/returnFooter.ts");
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/theme */ "./src/assets/ts/theme/theme.ts");





function returnPage() {
    var body = document.body;
    body.classList.add('body');
    if (_theme_theme__WEBPACK_IMPORTED_MODULE_4__.theme === 'dark') {
        body.classList.add('body_dark');
    }
    var pageTitle = (0,_common_returnElement__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tag: 'h1',
        classes: ['body__title'],
        textContent: 'Desmond resume',
    });
    var header = (0,_header_returnHeader__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var main = (0,_main_returnMain__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var footer = (0,_returnFooter__WEBPACK_IMPORTED_MODULE_3__["default"])();
    body.append(pageTitle, header, main, footer);
}


/***/ }),

/***/ "./src/assets/ts/startApp.ts":
/*!***********************************!*\
  !*** ./src/assets/ts/startApp.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startApp: () => (/* binding */ startApp)
/* harmony export */ });
/* harmony import */ var _changeScrollBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeScrollBody */ "./src/assets/ts/changeScrollBody.ts");
/* harmony import */ var _common_pageElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/pageElements */ "./src/assets/ts/common/pageElements.ts");
/* harmony import */ var _header_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/menu */ "./src/assets/ts/header/menu.ts");
/* harmony import */ var _interactive_interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive/interactive */ "./src/assets/ts/interactive/interactive.ts");
/* harmony import */ var _interactive_visible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactive/visible */ "./src/assets/ts/interactive/visible.ts");
/* harmony import */ var _returnPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./returnPage */ "./src/assets/ts/returnPage.ts");
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/theme */ "./src/assets/ts/theme/theme.ts");







function startApp() {
    (0,_theme_theme__WEBPACK_IMPORTED_MODULE_6__.setTheme)();
    (0,_returnPage__WEBPACK_IMPORTED_MODULE_5__["default"])();
    document.addEventListener('DOMContentLoaded', _interactive_visible__WEBPACK_IMPORTED_MODULE_4__.hideHeader);
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.substrate.addEventListener('click', _header_menu__WEBPACK_IMPORTED_MODULE_2__.closeBurgerMenu);
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.menuList.addEventListener('click', _header_menu__WEBPACK_IMPORTED_MODULE_2__.closeBurgerMenu);
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.themeBtn.addEventListener('click', _theme_theme__WEBPACK_IMPORTED_MODULE_6__.changeTheme);
    _common_pageElements__WEBPACK_IMPORTED_MODULE_1__.pageElements.menuBtn.addEventListener('click', _changeScrollBody__WEBPACK_IMPORTED_MODULE_0__.changeScrollBody);
    window.addEventListener('load', _interactive_interactive__WEBPACK_IMPORTED_MODULE_3__.checkInteractive);
    document.addEventListener('scroll', _interactive_interactive__WEBPACK_IMPORTED_MODULE_3__.checkInteractive);
    window.addEventListener('beforeunload', _theme_theme__WEBPACK_IMPORTED_MODULE_6__.setThemeToLocalStorage);
}



/***/ }),

/***/ "./src/assets/ts/theme/theme.ts":
/*!**************************************!*\
  !*** ./src/assets/ts/theme/theme.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTheme: () => (/* binding */ changeTheme),
/* harmony export */   setTheme: () => (/* binding */ setTheme),
/* harmony export */   setThemeToLocalStorage: () => (/* binding */ setThemeToLocalStorage),
/* harmony export */   theme: () => (/* binding */ theme)
/* harmony export */ });
var theme;
function getThemeFromLocalStorage() {
    if (localStorage.getItem('resumeAG-theme') !== 'null') {
        return localStorage.getItem('resumeAG-theme');
    }
    else {
        return;
    }
}
function setTheme() {
    var themeFromLS = getThemeFromLocalStorage();
    if (typeof themeFromLS === 'string') {
        theme = themeFromLS;
    }
    else {
        var prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            theme = 'dark';
        }
        else {
            theme = 'light';
        }
    }
}
function setThemeToLocalStorage() {
    localStorage.setItem('resumeAG-theme', theme);
}
function changeTheme() {
    var body = document.body;
    body.classList.toggle('body_dark');
    theme = theme === 'dark' ? 'light' : 'dark';
}



/***/ }),

/***/ "./src/assets/img/avatar.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/avatar.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b52e3bfee47edac8e9c.jpg";

/***/ }),

/***/ "./src/assets/img/proj-cssMemSlider.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/proj-cssMemSlider.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca6ef267a05f9546fb1a.jpg";

/***/ }),

/***/ "./src/assets/img/proj-keyboard.png":
/*!******************************************!*\
  !*** ./src/assets/img/proj-keyboard.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c5dda3f49f948aca2ee.png";

/***/ }),

/***/ "./src/assets/img/proj-minesweeper.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/proj-minesweeper.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79f9db92dec5c99ac3e6.jpg";

/***/ }),

/***/ "./src/assets/img/proj-movie-app.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/proj-movie-app.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b3981b5dd326373f960.jpg";

/***/ }),

/***/ "./src/assets/img/proj-portfolio.jpg":
/*!*******************************************!*\
  !*** ./src/assets/img/proj-portfolio.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab77bc631d3ef152308.jpg";

/***/ }),

/***/ "./src/assets/img/proj-shelter.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/proj-shelter.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ba1572602151daf95fe.jpg";

/***/ }),

/***/ "./src/assets/img/proj-tic-tac-toe.jpg":
/*!*********************************************!*\
  !*** ./src/assets/img/proj-tic-tac-toe.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fb4a3880aa5625fe679.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/style.scss */ "./src/assets/scss/style.scss");
/* harmony import */ var _assets_ts_startApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ts/startApp */ "./src/assets/ts/startApp.ts");


(0,_assets_ts_startApp__WEBPACK_IMPORTED_MODULE_1__.startApp)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3NzL3N0eWxlLnNjc3M/YjM3NiIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2NoYW5nZVNjcm9sbEJvZHkudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9jb21tb24vcGFnZUVsZW1lbnRzLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvY29tbW9uL3JldHVybkNvbnRhY3RzLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvY29tbW9uL3JldHVybkVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9jb21tb24vcmV0dXJuRXZvbHV0aW9uSXRlbS50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2NvbW1vbi9yZXR1cm5QZXJzb25hbERlc2NyaXB0aW9uVGV4dC50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0LnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvY29tbW9uL3JldHVyblNvY2lhbHMudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9oZWFkZXIvbWVudS50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2hlYWRlci9yZXR1cm5IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9pbnRlcmFjdGl2ZS9pbnRlcmFjdGl2ZS50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2ludGVyYWN0aXZlL3NraWxscy50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2ludGVyYWN0aXZlL3Zpc2libGUudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9tYWluL3JldHVybkNvbnRhY3RTZWN0aW9uLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvbWFpbi9yZXR1cm5FZHVjYXRpb25TZWN0aW9uLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvbWFpbi9yZXR1cm5FeHBlcmllbmNlU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL21haW4vcmV0dXJuRXhwZXJ0aXNlU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL21haW4vcmV0dXJuSW50cm9TZWN0aW9uLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvbWFpbi9yZXR1cm5NYWluLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvbWFpbi9yZXR1cm5Qb3J0Zm9saW9TZWN0aW9uLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvbWFpbi9yZXR1cm5Ta2lsbHNTZWN0aW9uLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvcmV0dXJuRm9vdGVyLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvcmV0dXJuUGFnZS50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL3N0YXJ0QXBwLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvdGhlbWUvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBwYWdlRWxlbWVudHMgfSBmcm9tICcuL2NvbW1vbi9wYWdlRWxlbWVudHMnO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlU2Nyb2xsQm9keSgpIHtcclxuICBjb25zdCBjaGVja0JveCA9IDxIVE1MSW5wdXRFbGVtZW50PnBhZ2VFbGVtZW50cy5tZW51Q2hlY2tib3g7XHJcbiAgY29uc29sZS5sb2coY2hlY2tCb3guY2hlY2tlZCk7XHJcblxyXG4gIGlmIChcclxuICAgICFjaGVja0JveC5jaGVja2VkICYmXHJcbiAgICAhZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2JvZHlfc3RvcC1zY3JvbGwnKVxyXG4gICkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5X3N0b3Atc2Nyb2xsJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keV9zdG9wLXNjcm9sbCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY2hhbmdlU2Nyb2xsQm9keSB9O1xyXG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL3JldHVybkVsZW1lbnQnO1xyXG5cclxuZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcclxuICByZXR1cm4gcmV0dXJuRWxlbWVudCh7IHRhZzogJ2RpdicgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBhZ2VFbGVtZW50cyA9IHtcclxuICBoZWFkZXI6IG5ld0VsZW1lbnQoKSxcclxuICBza2lsbHM6IG5ld0VsZW1lbnQoKSxcclxuICBmb290ZXI6IG5ld0VsZW1lbnQoKSxcclxuICB0aGVtZUJ0bjogbmV3RWxlbWVudCgpLFxyXG4gIHN1YnN0cmF0ZTogbmV3RWxlbWVudCgpLFxyXG4gIG1lbnVDaGVja2JveDogcmV0dXJuRWxlbWVudCh7IHRhZzogJ2lucHV0JyB9KSxcclxuICBtZW51TGlzdDogcmV0dXJuRWxlbWVudCh7IHRhZzogJ3VsJyB9KSxcclxuICBtZW51QnRuOiBuZXdFbGVtZW50KCksXHJcbn07XHJcblxyXG5leHBvcnQgeyBwYWdlRWxlbWVudHMgfTtcclxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcclxuXHJcbmZ1bmN0aW9uIHJldHVybkNvbnRhY3QoaGVhZGVyOiBzdHJpbmcsIGhyZWY6IHN0cmluZywgZGVzY3I6IHN0cmluZykge1xyXG4gIGNvbnN0IGNvbnRhY3QgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2FydGljbGUnLFxyXG4gICAgY2xhc3NlczogWydjb250YWN0c19fY29udGFjdCcsICdjb250YWN0JywgJ2ludGVyYWN0aXZlJ10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaDQnLFxyXG4gICAgY2xhc3NlczogWydjb250YWN0X190aXRsZScsICd0aXRsZScsICd0ZXh0J10sXHJcbiAgICB0ZXh0Q29udGVudDogaGVhZGVyLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb250YWN0VGV4dCA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAncCcsXHJcbiAgICBjbGFzc2VzOiBbJ2NvbnRhY3RfX2Rlc2NyJywgJ3RleHQnXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29udGFjdExpbmsgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2EnLFxyXG4gICAgYXR0cmliOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnaHJlZicsXHJcbiAgICAgICAgdmFsdWU6IGhyZWYsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAncmVsJyxcclxuICAgICAgICB2YWx1ZTogJ25vb3BlbmVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICd0YXJnZXQnLFxyXG4gICAgICAgIHZhbHVlOiAnX2JsYW5rJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjbGFzc2VzOiBbJ2NvbnRhY3RfX2xpbmsnXSxcclxuICAgIHRleHRDb250ZW50OiBkZXNjcixcclxuICB9KTtcclxuXHJcbiAgY29udGFjdFRleHQuYXBwZW5kKGNvbnRhY3RMaW5rKTtcclxuXHJcbiAgY29udGFjdC5hcHBlbmQoY29udGFjdFRpdGxlLCBjb250YWN0VGV4dCk7XHJcblxyXG4gIHJldHVybiBjb250YWN0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5Db250YWN0cygpIHtcclxuICBjb25zdCBjb250YWN0cyA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnc2VjdGlvbicsXHJcbiAgICBjbGFzc2VzOiBbJ2NvbnRhY3RzJ10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RzVGl0bGUgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2gzJyxcclxuICAgIGNsYXNzZXM6IFsnY29udGFjdHNfX3RpdGxlJ10sXHJcbiAgICB0ZXh0Q29udGVudDogJ9Ca0L7QvdGC0LDQutGC0YsnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb250YWN0TG9jYXRpb24gPSByZXR1cm5Db250YWN0KFxyXG4gICAgJ9Cc0LXRgdGC0L7QvdCw0YXQvtC20LTQtdC90LjQtScsXHJcbiAgICAnaHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvYXdBTVJWS2NiVWVZV3UxaDgnLFxyXG4gICAgJ9Cg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDJ1xyXG4gICk7XHJcbiAgY29uc3QgY29udGFjdFRlbGVncmFtID0gcmV0dXJuQ29udGFjdChcclxuICAgICfQotC10LvQtdCz0YDQsNC8JyxcclxuICAgICdodHRwczovL3QubWUvYWxleGV5X2dvcmJlbmtvJyxcclxuICAgICdAYWxleGV5X2dvcmJlbmtvJ1xyXG4gICk7XHJcbiAgY29uc3QgY29udGFjdERpc2NvcmQgPSByZXR1cm5Db250YWN0KFxyXG4gICAgJ0Rpc2NvcmQnLFxyXG4gICAgJ2h0dHBzOi8vZGlzY29yZGFwcC5jb20vdXNlcnMvODczNDE5ODE0OTg1Njc0ODAyJyxcclxuICAgICdAYWxleGV5X2dvcmJlbmtvJ1xyXG4gICk7XHJcbiAgY29uc3QgY29udGFjdEVtYWlsID0gcmV0dXJuQ29udGFjdChcclxuICAgICdFLW1haWwnLFxyXG4gICAgJ21haWx0bzphLnYuZ29yQG1haWwucnUnLFxyXG4gICAgJ2Eudi5nb3JAbWFpbC5ydSdcclxuICApO1xyXG5cclxuICBjb250YWN0cy5hcHBlbmQoXHJcbiAgICBjb250YWN0c1RpdGxlLFxyXG4gICAgY29udGFjdExvY2F0aW9uLFxyXG4gICAgY29udGFjdFRlbGVncmFtLFxyXG4gICAgY29udGFjdERpc2NvcmQsXHJcbiAgICBjb250YWN0RW1haWxcclxuICApO1xyXG4gIHJldHVybiBjb250YWN0cztcclxufVxyXG4iLCJpbnRlcmZhY2UgSUVsZW1EYXRhIHtcbiAgdGFnOiBzdHJpbmc7XG4gIGNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgaWQ/OiBzdHJpbmc7XG4gIGF0dHJpYj86IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH1bXTtcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmc7XG4gIHNyYz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuRWxlbWVudChlbGVtRGF0YTogSUVsZW1EYXRhKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtRGF0YS50YWcpO1xuICBpZiAoZWxlbURhdGEuY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbURhdGEuY2xhc3Nlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoaXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LmlkID0gZWxlbURhdGEuaWQ7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLmF0dHJpYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbURhdGEuYXR0cmliLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGkubmFtZSwgaS52YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLnRleHRDb250ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbURhdGEudGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGVsZW1EYXRhLnRhZyA9PT0gJ2ltZycgJiYgZWxlbURhdGEuc3JjICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgZWxlbURhdGEuc3JjKTtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vcmV0dXJuRWxlbWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5Fdm9sdXRpb25JdGVtKFxyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgcGVyaW9kOiBzdHJpbmcsXHJcbiAgcG9zaXRpb246IHN0cmluZyxcclxuICBsb2NhdGlvbjogc3RyaW5nLFxyXG4gIHRleHQ6IHN0cmluZyxcclxuICBpc0VkdWNhdGlvbjogYm9vbGVhblxyXG4pOiBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3QgaXRlbUNsYXNzID0gaXNFZHVjYXRpb24gPyAnZWR1Y2F0aW9uX19pdGVtJyA6ICdleHBlcmllbmNlX19pdGVtJztcclxuICBjb25zdCBpdGVtID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsaScsXHJcbiAgICBjbGFzc2VzOiBbXHJcbiAgICAgICd1bm9yZC1saXN0X19pdGVtJyxcclxuICAgICAgJ2xpc3RfX2l0ZW0nLFxyXG4gICAgICAnZXZvbHV0aW9uLXVsX19pdGVtJyxcclxuICAgICAgaXRlbUNsYXNzLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBhcnRpY2xlID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdhcnRpY2xlJyxcclxuICAgIGNsYXNzZXM6IFsnbGlzdF9fYXJ0aWNsZScsICdhcnRpY2xlLWxpJywgJ2V2b2x1dGlvbi11bF9fYXJ0aWNsZSddLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGhlYWRlciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1saV9faGVhZGVyJ10sXHJcbiAgfSk7XHJcbiAgY29uc3QgYXJ0aWNsZVRpdGxlID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdoMycsXHJcbiAgICBjbGFzc2VzOiBbJ2FydGljbGUtbGlfX3RpdGxlJywgJ3RpdGxlJ10sXHJcbiAgICB0ZXh0Q29udGVudDogdGl0bGUsXHJcbiAgfSk7XHJcbiAgY29uc3QgYXJ0aWNsZVBlcmlvZCA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAncCcsXHJcbiAgICBjbGFzc2VzOiBbJ2FydGljbGUtbGlfX3BlcmlvZCddLFxyXG4gICAgdGV4dENvbnRlbnQ6IHBlcmlvZCxcclxuICB9KTtcclxuICBjb25zdCBhcnRpY2xlUG9zaXRpb24gPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ3AnLFxyXG4gICAgY2xhc3NlczogWydhcnRpY2xlLWxpX19wb3NpdGlvbiddLFxyXG4gICAgdGV4dENvbnRlbnQ6IHBvc2l0aW9uLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGFydGljbGVMb2NhdGlvbiA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAncCcsXHJcbiAgICBjbGFzc2VzOiBbJ2FydGljbGUtbGlfX2xvY2F0aW9uJ10sXHJcbiAgICB0ZXh0Q29udGVudDogbG9jYXRpb24sXHJcbiAgfSk7XHJcbiAgY29uc3QgYm9keSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1saV9fYm9keSddLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGFydGljbGVUZXh0ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdwJyxcclxuICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1saV9fdGV4dCcsICd0ZXh0J10sXHJcbiAgICB0ZXh0Q29udGVudDogdGV4dCxcclxuICB9KTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChhcnRpY2xlVGl0bGUsIGFydGljbGVQZXJpb2QsIGFydGljbGVQb3NpdGlvbiwgYXJ0aWNsZUxvY2F0aW9uKTtcclxuICBib2R5LmFwcGVuZChhcnRpY2xlVGV4dCk7XHJcbiAgYXJ0aWNsZS5hcHBlbmQoaGVhZGVyLCBib2R5KTtcclxuICBpdGVtLmFwcGVuZChhcnRpY2xlKTtcclxuICByZXR1cm4gaXRlbTtcclxufVxyXG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL3JldHVybkVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuUGVyc29uYWxEZXNjcmlwdGlvblRleHQoKSB7XHJcbiAgY29uc3QgcGVyc29uYWxEZXNjcmlwdGlvblRleHQgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc2VzOiBbJ3BlcnNvbmFsX19kZXNjci10ZXh0J10sXHJcbiAgfSk7XHJcbiAgY29uc3QgcGVyc29uYWxOYW1lID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NlczogWydwZXJzb25hbF9fbmFtZScsICdpbnRlcmFjdGl2ZSddLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBlcnNvbmFsRk5hbWUgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ3NwYW4nLFxyXG4gICAgY2xhc3NlczogWydwZXJzb25hbF9fZm5hbWUnXSxcclxuICAgIHRleHRDb250ZW50OiAn0JDQu9C10LrRgdC10LknLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGJyID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdicicsXHJcbiAgfSk7XHJcbiAgY29uc3QgcGVyc29uYWxMTmFtZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnc3BhbicsXHJcbiAgICBjbGFzc2VzOiBbJ3BlcnNvbmFsX19sbmFtZSddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICfQk9C+0YDQsdC10L3QutC+JyxcclxuICB9KTtcclxuICBjb25zdCBwZXJzb25hbFBvc2l0aW9uID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NlczogWydwZXJzb25hbF9fcG9zaXRpb24nLCAnaW50ZXJhY3RpdmUnXSxcclxuICAgIHRleHRDb250ZW50OiAnRnJvbnQtZW5kLdGA0LDQt9GA0LDQsdC+0YLRh9C40LonLFxyXG4gIH0pO1xyXG5cclxuICBwZXJzb25hbE5hbWUuYXBwZW5kKHBlcnNvbmFsRk5hbWUsIGJyLCBwZXJzb25hbExOYW1lKTtcclxuICBwZXJzb25hbERlc2NyaXB0aW9uVGV4dC5hcHBlbmQocGVyc29uYWxOYW1lLCBwZXJzb25hbFBvc2l0aW9uKTtcclxuXHJcbiAgcmV0dXJuIHBlcnNvbmFsRGVzY3JpcHRpb25UZXh0O1xyXG59XHJcbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vcmV0dXJuRWxlbWVudCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRhZz86IHN0cmluZztcclxuICBjbGFzc2VzPzogc3RyaW5nW107XHJcbiAgd3JhcHBlclRhZz86IHN0cmluZztcclxuICB3cmFwcGVyQ2xhc3Nlcz86IHN0cmluZ1tdO1xyXG4gIGhlYWRlckNsYXNzZXM/OiBzdHJpbmdbXTtcclxuICBkZXNjcmlwdGlvbkNsYXNzZXM/OiBzdHJpbmdbXTtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBzdWJpdGxlPzogc3RyaW5nO1xyXG4gIGlkPzogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgcmVzdWx0T2JqIHtcclxuICBzZWN0aW9uOiBIVE1MRWxlbWVudDtcclxuICBoZWFkZXI6IEhUTUxFbGVtZW50O1xyXG4gIGRlc2NyaXB0aW9uOiBIVE1MRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuU2VjdGlvbk9iamVjdChwcm9wczogUHJvcHMpOiByZXN1bHRPYmoge1xyXG4gIGxldCB0YWcgPSAnJztcclxuICBsZXQgY2xhc3NlcyA9IFsnc2VjdGlvbiddO1xyXG4gIGxldCB3cmFwcGVyVGFnID0gJ3NlY3Rpb24nO1xyXG4gIGxldCBkZXNjcmlwdGlvbkNsYXNzZXMgPSBbJ3NlY3Rpb25fX2Rlc2NyaXB0aW9uJywgJ3NlY3Rpb25fX2Jsb2NrJ107XHJcbiAgbGV0IGhlYWRlckNsYXNzZXMgPSBbJ3NlY3Rpb25fX2hlYWRlcicsICdzZWN0aW9uX19ibG9jayddO1xyXG4gIGxldCB3cmFwcGVyQ2xhc3NlcyA9IFsnc2VjdGlvbl9fd3JhcHBlcicsICd3cmFwcGVyJ107XHJcbiAgaWYgKHByb3BzLmNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KHByb3BzLmNsYXNzZXMpO1xyXG4gIH1cclxuICBpZiAocHJvcHMuaGVhZGVyQ2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBoZWFkZXJDbGFzc2VzID0gaGVhZGVyQ2xhc3Nlcy5jb25jYXQocHJvcHMuaGVhZGVyQ2xhc3Nlcyk7XHJcbiAgfVxyXG4gIGlmIChwcm9wcy5kZXNjcmlwdGlvbkNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgZGVzY3JpcHRpb25DbGFzc2VzID0gZGVzY3JpcHRpb25DbGFzc2VzLmNvbmNhdChwcm9wcy5kZXNjcmlwdGlvbkNsYXNzZXMpO1xyXG4gIH1cclxuICBpZiAocHJvcHMudGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHRhZyA9IHByb3BzLnRhZztcclxuICB9IGVsc2Uge1xyXG4gICAgdGFnID0gJ2Rpdic7XHJcbiAgfVxyXG4gIGlmIChwcm9wcy53cmFwcGVyVGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHdyYXBwZXJUYWcgPSBwcm9wcy53cmFwcGVyVGFnO1xyXG4gIH1cclxuICBpZiAocHJvcHMud3JhcHBlckNsYXNzZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgd3JhcHBlckNsYXNzZXMgPSB3cmFwcGVyQ2xhc3Nlcy5jb25jYXQocHJvcHMud3JhcHBlckNsYXNzZXMpO1xyXG4gIH1cclxuICBjb25zdCBzZWN0aW9uID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6IHRhZyxcclxuICAgIGNsYXNzZXM6IGNsYXNzZXMsXHJcbiAgfSk7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uJyk7XHJcbiAgY29uc3Qgd3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiB3cmFwcGVyVGFnLFxyXG4gICAgY2xhc3Nlczogd3JhcHBlckNsYXNzZXMsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGVhZGVyID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NlczogaGVhZGVyQ2xhc3NlcyxcclxuICB9KTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzZXM6IGRlc2NyaXB0aW9uQ2xhc3NlcyxcclxuICB9KTtcclxuICBpZiAoXHJcbiAgICBwcm9wcy50aXRsZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICBwcm9wcy5zdWJpdGxlICE9PSB1bmRlZmluZWQgJiZcclxuICAgIHByb3BzLmlkICE9PSB1bmRlZmluZWRcclxuICApIHtcclxuICAgIGNvbnN0IHRpdGxlID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICAgIHRhZzogJ2gyJyxcclxuICAgICAgY2xhc3NlczogWydhcnRpY2xlLWJsb2NrX190aXRsZScsICd0aXRsZSddLFxyXG4gICAgICB0ZXh0Q29udGVudDogcHJvcHMudGl0bGUsXHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSByZXR1cm5FbGVtZW50KHtcclxuICAgICAgdGFnOiAncCcsXHJcbiAgICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19fc3VidGl0bGUnLCAndGV4dCddLFxyXG4gICAgICB0ZXh0Q29udGVudDogcHJvcHMuc3ViaXRsZSxcclxuICAgIH0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSwgc3VidGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgd3JhcHBlci5hcHBlbmQoaGVhZGVyLCBkZXNjcmlwdGlvbik7XHJcbiAgc2VjdGlvbi5hcHBlbmQod3JhcHBlcik7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgIHNlY3Rpb246IHNlY3Rpb24sXHJcbiAgICBoZWFkZXI6IGhlYWRlcixcclxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vcmV0dXJuRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVyblNvY2lhbHMoKSB7XG4gIGNvbnN0IHNvY2lhbHMgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdzZWN0aW9uJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHMnXSxcbiAgfSk7XG4gIGNvbnN0IHNvY2lhbHNUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2gzJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHNfX3RpdGxlJ10sXG4gICAgdGV4dENvbnRlbnQ6ICfQodC+0YbQuNCw0LvRjNC90YvQtSDRgdC10YLQuCcsXG4gIH0pO1xuICBjb25zdCBsaW5rTEkgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdhJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHNfX2xpbmsnLCAnaW50ZXJhY3RpdmUnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxuICAgICAgICB2YWx1ZTogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGV4ZXktZ29yYmVua28nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RhcmdldCcsXG4gICAgICAgIHZhbHVlOiAnX2JsYW5rJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG4gIGNvbnN0IGljb25MaSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydzb2NpYWxzX19pY29uJywgJ3NvY2lhbHNfX2ljb24tbGknXSxcbiAgfSk7XG4gIGNvbnN0IGxpbmtHSCA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2EnLFxuICAgIGNsYXNzZXM6IFsnc29jaWFsc19fbGluaycsICdpbnRlcmFjdGl2ZSddLFxuICAgIGF0dHJpYjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnaHJlZicsXG4gICAgICAgIHZhbHVlOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hLXYtZ29yJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0YXJnZXQnLFxuICAgICAgICB2YWx1ZTogJ19ibGFuaycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBpY29uR0ggPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnc29jaWFsc19faWNvbicsICdzb2NpYWxzX19pY29uLWdoJ10sXG4gIH0pO1xuICBjb25zdCBsaW5rQ1cgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdhJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHNfX2xpbmsnLCAnaW50ZXJhY3RpdmUnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxuICAgICAgICB2YWx1ZTogJ2h0dHBzOi8vd3d3LmNvZGV3YXJzLmNvbS91c2Vycy9hLXYtZ29yJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0YXJnZXQnLFxuICAgICAgICB2YWx1ZTogJ19ibGFuaycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBpY29uQ1cgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnc29jaWFsc19faWNvbicsICdzb2NpYWxzX19pY29uLWNvZGV3YXJzJ10sXG4gIH0pO1xuXG4gIGxpbmtMSS5hcHBlbmQoaWNvbkxpKTtcbiAgbGlua0dILmFwcGVuZChpY29uR0gpO1xuICBsaW5rQ1cuYXBwZW5kKGljb25DVyk7XG4gIHNvY2lhbHMuYXBwZW5kKHNvY2lhbHNUaXRsZSwgbGlua0xJLCBsaW5rR0gsIGxpbmtDVyk7XG4gIHJldHVybiBzb2NpYWxzO1xufVxuIiwiaW1wb3J0IHsgY2hhbmdlU2Nyb2xsQm9keSB9IGZyb20gJy4uL2NoYW5nZVNjcm9sbEJvZHknO1xyXG5pbXBvcnQgeyBwYWdlRWxlbWVudHMgfSBmcm9tICcuLi9jb21tb24vcGFnZUVsZW1lbnRzJztcclxuaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi4vY29tbW9uL3JldHVybkVsZW1lbnQnO1xyXG5cclxuZnVuY3Rpb24gcmV0dXJuTWVudUVsZW1lbnQobGluazogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgY29uc3QgaXRlbUFib3V0ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsaScsXHJcbiAgICBjbGFzc2VzOiBbJ21lbnVfX2l0ZW0nXSxcclxuICB9KTtcclxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTAyMykge1xyXG4gICAgaXRlbUFib3V0LmNsYXNzTGlzdC5hZGQoJ2ludGVyYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBsaW5rQWJvdXQgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2EnLFxyXG4gICAgY2xhc3NlczogWydtZW51X19saW5rJywgJ2xpbmsnXSxcclxuICAgIGF0dHJpYjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxyXG4gICAgICAgIHZhbHVlOiBgIyR7bGlua31gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHRleHRDb250ZW50OiBkZXNjcmlwdGlvbixcclxuICB9KTtcclxuXHJcbiAgaXRlbUFib3V0LmFwcGVuZChsaW5rQWJvdXQpO1xyXG4gIHJldHVybiBpdGVtQWJvdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVybk1lbnUoKSB7XHJcbiAgY29uc3QgbWVudVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc2VzOiBbJ21lbnUnXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbWVudSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbmF2JyxcclxuICAgIGNsYXNzZXM6IFsnbWVudV9fbmF2J10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGlucHV0Q2hlY2tCb3ggPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2lucHV0JyxcclxuICAgIGNsYXNzZXM6IFsnbWVudV9faW5wdXQnXSxcclxuICAgIGF0dHJpYjogW1xyXG4gICAgICB7IG5hbWU6ICdpZCcsIHZhbHVlOiAnbWVudS1pbnB1dCcgfSxcclxuICAgICAgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAnY2hlY2tib3gnIH0sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBwYWdlRWxlbWVudHMubWVudUNoZWNrYm94ID0gaW5wdXRDaGVja0JveDtcclxuXHJcbiAgY29uc3QgYnVyZ2VyQnV0dG9uID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICBjbGFzc2VzOiBbJ21lbnVfX2xhYmVsJ10sXHJcbiAgICBhdHRyaWI6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdmb3InLFxyXG4gICAgICAgIHZhbHVlOiAnbWVudS1pbnB1dCcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBwYWdlRWxlbWVudHMubWVudUJ0biA9IGJ1cmdlckJ1dHRvbjtcclxuXHJcbiAgY29uc3QgYnVyZ2VySWNvbiA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnc3BhbicsXHJcbiAgICBjbGFzc2VzOiBbJ21lbnVfX2ljb24nXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbmF2TGlzdCA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAndWwnLFxyXG4gICAgY2xhc3NlczogWydtZW51X19saXN0JywgJ21lbnUtbGlzdCddLFxyXG4gIH0pO1xyXG5cclxuICBwYWdlRWxlbWVudHMubWVudUxpc3QgPSBuYXZMaXN0O1xyXG5cclxuICBjb25zdCBpdGVtSW50cm8gPSByZXR1cm5NZW51RWxlbWVudCgnYWJvdXQnLCAn0J4g0YHQtdCx0LUnKTtcclxuICBjb25zdCBpdGVtRXhwZXJ0aXNlID0gcmV0dXJuTWVudUVsZW1lbnQoJ2V4cGVydGlzZScsICfQl9C90LDQvdC40Y8nKTtcclxuICBjb25zdCBpdGVtU2tpbGxzID0gcmV0dXJuTWVudUVsZW1lbnQoJ3NraWxscycsICfQndCw0LLRi9C60LgnKTtcclxuICBjb25zdCBpdGVtRXhwZXJpZW5jZSA9IHJldHVybk1lbnVFbGVtZW50KCdleHBlcmllbmNlJywgJ9Ce0L/Ri9GCJyk7XHJcbiAgY29uc3QgaXRlbUVkdWNhdGlvbiA9IHJldHVybk1lbnVFbGVtZW50KCdlZHVjYXRpb24nLCAn0J7QsdGA0LDQt9C+0LLQsNC90LjQtScpO1xyXG4gIGNvbnN0IGl0ZW1Qb3J0Zm9saW8gPSByZXR1cm5NZW51RWxlbWVudCgncG9ydGZvbGlvJywgJ9Cf0L7RgNGC0YTQvtC70LjQvicpO1xyXG4gIGNvbnN0IGl0ZW1Db250YWN0cyA9IHJldHVybk1lbnVFbGVtZW50KCdjb250YWN0cycsICfQmtC+0L3RgtCw0LrRgtGLJyk7XHJcblxyXG4gIGNvbnN0IHRoZW1lQnRuID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NlczogWyd0aGVtZS1idG4nLCAnaW50ZXJhY3RpdmUnXSxcclxuICB9KTtcclxuXHJcbiAgcGFnZUVsZW1lbnRzLnRoZW1lQnRuID0gdGhlbWVCdG47XHJcblxyXG4gIGNvbnN0IHN1YnN0cmF0ZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzZXM6IFsnbWVudV9fc3Vic3RyYXRlJ10sXHJcbiAgfSk7XHJcblxyXG4gIHBhZ2VFbGVtZW50cy5zdWJzdHJhdGUgPSBzdWJzdHJhdGU7XHJcbiAgbmF2TGlzdC5hcHBlbmQoXHJcbiAgICBpdGVtSW50cm8sXHJcbiAgICBpdGVtRXhwZXJ0aXNlLFxyXG4gICAgaXRlbVNraWxscyxcclxuICAgIGl0ZW1FeHBlcmllbmNlLFxyXG4gICAgaXRlbUVkdWNhdGlvbixcclxuICAgIGl0ZW1Qb3J0Zm9saW8sXHJcbiAgICBpdGVtQ29udGFjdHNcclxuICApO1xyXG4gIGJ1cmdlckJ1dHRvbi5hcHBlbmQoYnVyZ2VySWNvbik7XHJcbiAgbWVudS5hcHBlbmQoaW5wdXRDaGVja0JveCwgYnVyZ2VyQnV0dG9uLCBuYXZMaXN0LCBzdWJzdHJhdGUpO1xyXG4gIG1lbnVXcmFwcGVyLmFwcGVuZChtZW51LCB0aGVtZUJ0bik7XHJcblxyXG4gIHJldHVybiBtZW51V3JhcHBlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VCdXJnZXJNZW51KCkge1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+cGFnZUVsZW1lbnRzLm1lbnVDaGVja2JveDtcclxuICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgY2hhbmdlU2Nyb2xsQm9keSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyByZXR1cm5NZW51LCBjbG9zZUJ1cmdlck1lbnUgfTtcclxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi4vY29tbW9uL3JldHVybkVsZW1lbnQnO1xyXG5pbXBvcnQgaW1nQXZhdGFyIGZyb20gJy4uLy4uL2ltZy9hdmF0YXIuanBnJztcclxuaW1wb3J0IHJldHVyblBlcnNvbmFsRGVzY3JpcHRpb25UZXh0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5QZXJzb25hbERlc2NyaXB0aW9uVGV4dCc7XHJcbmltcG9ydCByZXR1cm5Tb2NpYWxzIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Tb2NpYWxzJztcclxuaW1wb3J0IHJldHVybkNvbnRhY3RzIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Db250YWN0cyc7XHJcbmltcG9ydCByZXR1cm5TZWN0aW9uT2JqZWN0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0JztcclxuaW1wb3J0IHsgcGFnZUVsZW1lbnRzIH0gZnJvbSAnLi4vY29tbW9uL3BhZ2VFbGVtZW50cyc7XHJcbmltcG9ydCB7IHJldHVybk1lbnUgfSBmcm9tICcuL21lbnUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlck9iamVjdCA9IHJldHVyblNlY3Rpb25PYmplY3Qoe1xyXG4gICAgdGFnOiAnaGVhZGVyJyxcclxuICAgIGNsYXNzZXM6IFsnaGVhZGVyJ10sXHJcbiAgICB3cmFwcGVyVGFnOiAnYXJ0aWNsZScsXHJcbiAgICB3cmFwcGVyQ2xhc3NlczogWydoZWFkZXJfX3dyYXBwZXInLCAncGVyc29uYWwnXSxcclxuICAgIGhlYWRlckNsYXNzZXM6IFsnaGVhZGVyX19oZWFkZXInLCAnaW50ZXJhY3RpdmUnXSxcclxuICAgIGRlc2NyaXB0aW9uQ2xhc3NlczogWydoZWFkZXJfX2Rlc2NyaXB0aW9uJ10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdoMicsXHJcbiAgICBjbGFzc2VzOiBbJ3NlY3Rpb25fX3RpdGxlJ10sXHJcbiAgICB0ZXh0Q29udGVudDogJ9Cb0LjRh9C90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjycsXHJcbiAgfSk7XHJcbiAgY29uc3QgcGhvdG8gPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2ltZycsXHJcbiAgICBjbGFzc2VzOiBbJ2hlYWRlcl9fcGhvdG8nXSxcclxuICAgIHNyYzogaW1nQXZhdGFyLFxyXG4gICAgYXR0cmliOiBbeyBuYW1lOiAnYWx0JywgdmFsdWU6ICfQkC7Qk9C+0YDQsdC10L3QutC+JyB9XSxcclxuICB9KTtcclxuICBoZWFkZXJPYmplY3QuaGVhZGVyLmFwcGVuZCh0aXRsZSwgcGhvdG8pO1xyXG5cclxuICBjb25zdCBwZXJzb25hbFdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc2VzOiBbJ2hlYWRlcl9fZGVzY3Itd3JhcHBlcicsICdwZXJzb25hbF9fd3JhcHBlciddLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBlcnNvbmFsRGVzY3JpcHRpb25UZXh0ID0gcmV0dXJuUGVyc29uYWxEZXNjcmlwdGlvblRleHQoKTtcclxuICBjb25zdCBoZWFkZXJTb2NpYWxzID0gcmV0dXJuU29jaWFscygpO1xyXG4gIGhlYWRlclNvY2lhbHMuY2xhc3NMaXN0LmFkZCgnaGVhZGVyX19zb2NpYWxzJyk7XHJcbiAgY29uc3QgaGVhZGVyQ29udGFjdHMgPSByZXR1cm5Db250YWN0cygpO1xyXG4gIGhlYWRlckNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fY29udGFjdHMnKTtcclxuXHJcbiAgY29uc3QgbWVudSA9IHJldHVybk1lbnUoKTtcclxuICBoZWFkZXJPYmplY3QuZGVzY3JpcHRpb24uYXBwZW5kKG1lbnUpO1xyXG5cclxuICBwZXJzb25hbFdyYXBwZXIuYXBwZW5kKFxyXG4gICAgcGVyc29uYWxEZXNjcmlwdGlvblRleHQsXHJcbiAgICBoZWFkZXJTb2NpYWxzLFxyXG4gICAgaGVhZGVyQ29udGFjdHNcclxuICApO1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGhlYWRlck9iamVjdC5kZXNjcmlwdGlvbjtcclxuICBkZXNjcmlwdGlvbi5hcHBlbmQocGVyc29uYWxXcmFwcGVyKTtcclxuICBwYWdlRWxlbWVudHMuaGVhZGVyID0gaGVhZGVyT2JqZWN0LnNlY3Rpb247XHJcblxyXG4gIHJldHVybiBoZWFkZXJPYmplY3Quc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgeyBwYWdlRWxlbWVudHMgfSBmcm9tICcuLi9jb21tb24vcGFnZUVsZW1lbnRzJztcclxuaW1wb3J0IHsgaGlkZVNraWxscywgc2hvd1NraWxscyB9IGZyb20gJy4vc2tpbGxzJztcclxuaW1wb3J0IHsgaGlkZUZvb3RlciwgaGlkZUhlYWRlciwgc2hvd0Zvb3Rlciwgc2hvd0hlYWRlciB9IGZyb20gJy4vdmlzaWJsZSc7XHJcblxyXG5mdW5jdGlvbiBtYWtlRWxlbWVudEludGVyYWN0aXZlKFxyXG4gIGVsZW06IEhUTUxFbGVtZW50LFxyXG4gIGZ1bmNTaG93OiAoKSA9PiB2b2lkLFxyXG4gIGZ1bmNIaWRlOiAoKSA9PiB2b2lkXHJcbikge1xyXG4gIGNvbnN0IGRvbVJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGlmIChlbGVtID09PSBwYWdlRWxlbWVudHMuaGVhZGVyKSB7XHJcbiAgICBpZiAoZG9tUmVjdC5ib3R0b20gPj0gd2luZG93LmlubmVySGVpZ2h0IC8gMikge1xyXG4gICAgICBmdW5jU2hvdygpO1xyXG4gICAgfSBlbHNlIGlmIChkb21SZWN0LmJvdHRvbSA8PSAwKSB7XHJcbiAgICAgIGZ1bmNIaWRlKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChlbGVtID09PSBwYWdlRWxlbWVudHMuZm9vdGVyKSB7XHJcbiAgICBpZiAoZG9tUmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IC8gMikge1xyXG4gICAgICBmdW5jU2hvdygpO1xyXG4gICAgfSBlbHNlIGlmIChkb21SZWN0LnRvcCA+PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgZnVuY0hpZGUoKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKGRvbVJlY3QudG9wIDw9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgJiYgZG9tUmVjdC5ib3R0b20gPj0gMCkge1xyXG4gICAgICBmdW5jU2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZnVuY0hpZGUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSW50ZXJhY3RpdmUoKSB7XHJcbiAgY29uc3QgW2hlYWRlciwgZm9vdGVyLCBza2lsbHNdID0gW1xyXG4gICAgcGFnZUVsZW1lbnRzLmhlYWRlcixcclxuICAgIHBhZ2VFbGVtZW50cy5mb290ZXIsXHJcbiAgICBwYWdlRWxlbWVudHMuc2tpbGxzLFxyXG4gIF07XHJcbiAgbWFrZUVsZW1lbnRJbnRlcmFjdGl2ZShoZWFkZXIsIHNob3dIZWFkZXIsIGhpZGVIZWFkZXIpO1xyXG4gIG1ha2VFbGVtZW50SW50ZXJhY3RpdmUoZm9vdGVyLCBzaG93Rm9vdGVyLCBoaWRlRm9vdGVyKTtcclxuICBtYWtlRWxlbWVudEludGVyYWN0aXZlKHNraWxscywgc2hvd1NraWxscywgaGlkZVNraWxscyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNoZWNrSW50ZXJhY3RpdmUgfTtcclxuIiwiaW1wb3J0IHsgcGFnZUVsZW1lbnRzIH0gZnJvbSAnLi4vY29tbW9uL3BhZ2VFbGVtZW50cyc7XG5cbmZ1bmN0aW9uIGNoZWNrU2tpbGxQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICBjb25zdCBkb21SZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgaWYgKGRvbVJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb21SZWN0LnRvcCA+PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dTa2lsbHNQcm9ncmVzcyhzaG93OiBib29sZWFuLCBkYXRhQXJyPzogc3RyaW5nW10pIHtcbiAgY29uc3Qgc2tpbGxzUHJvZ3Jlc3NCYXJzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9XG4gICAgcGFnZUVsZW1lbnRzLnNraWxscy5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbV9fcHJvZ3Jlc3MnKTtcbiAgc2tpbGxzUHJvZ3Jlc3NCYXJzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKHNob3cgJiYgZGF0YUFyciAmJiBjaGVja1NraWxsUG9zaXRpb24oaXRlbSkpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGFBcnJbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXR1cm5QZXJjZW50cygpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHByb2dyZXNzTm9kZUxpc3QgPVxuICAgIHBhZ2VFbGVtZW50cy5za2lsbHMucXVlcnlTZWxlY3RvckFsbCgnLml0ZW1fX3BlcmNlbnQnKTtcbiAgY29uc3QgcGVyY2VudHM6IHN0cmluZ1tdID0gW107XG4gIHByb2dyZXNzTm9kZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBlcmNlbnQ6IHN0cmluZyA9IDxzdHJpbmc+aXRlbS50ZXh0Q29udGVudDtcbiAgICBwZXJjZW50cy5wdXNoKHBlcmNlbnQpO1xuICB9KTtcbiAgcmV0dXJuIHBlcmNlbnRzO1xufVxuXG5mdW5jdGlvbiBzaG93U2tpbGxzKCkge1xuICBjb25zdCBwZXJjZW50cyA9IHJldHVyblBlcmNlbnRzKCk7XG4gIHNob3dTa2lsbHNQcm9ncmVzcyh0cnVlLCBwZXJjZW50cyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVTa2lsbHMoKSB7XG4gIHNob3dTa2lsbHNQcm9ncmVzcyhmYWxzZSk7XG59XG5cbmV4cG9ydCB7IGhpZGVTa2lsbHMsIHNob3dTa2lsbHMgfTtcbiIsImltcG9ydCB7IHBhZ2VFbGVtZW50cyB9IGZyb20gJy4uL2NvbW1vbi9wYWdlRWxlbWVudHMnO1xyXG5cclxuZnVuY3Rpb24gbWFrZU5vZGVzVmlzaWJsZShub2RlczogTm9kZUxpc3QpIHtcclxuICBsZXQgdGltZVRvV2FpdCA9IDA7XHJcbiAgbm9kZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gc2hvd0VsZW1lbnQoKSB7XHJcbiAgICAgIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IDxIVE1MRWxlbWVudD5lbGVtZW50O1xyXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpbnRlcmFjdGl2ZV91bmFjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChzaG93RWxlbWVudCwgdGltZVRvV2FpdCk7XHJcbiAgICB0aW1lVG9XYWl0ICs9IDEwMDtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ludGVyYWN0aXZlX3VuYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHVyblBhZ2VFbGVtZW50cygpOiBIVE1MRWxlbWVudFtdIHtcclxuICByZXR1cm4gW3BhZ2VFbGVtZW50cy5oZWFkZXIsIHBhZ2VFbGVtZW50cy5mb290ZXJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRWxlbWVudHMocGFyYW06IHN0cmluZykge1xyXG4gIGNvbnN0IFtoZWFkZXIsIGZvb3Rlcl0gPSByZXR1cm5QYWdlRWxlbWVudHMoKTtcclxuICBsZXQgZWxlbWVudHNUb0hpZGU6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xyXG4gIGlmIChwYXJhbSA9PT0gJ2hlYWRlcicpIHtcclxuICAgIGVsZW1lbnRzVG9IaWRlID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmFjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50c1RvSGlkZSA9IGZvb3Rlci5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJhY3RpdmUnKTtcclxuICB9XHJcbiAgZWxlbWVudHNUb0hpZGUuZm9yRWFjaCgoZWxlbWVudCkgPT4gaGlkZUVsZW1lbnQoZWxlbWVudCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RWxlbWVudHMocGFyYW06IHN0cmluZykge1xyXG4gIGNvbnN0IFtoZWFkZXIsIGZvb3Rlcl0gPSByZXR1cm5QYWdlRWxlbWVudHMoKTtcclxuICBsZXQgZWxlbWVudHNUb0hpZGU6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xyXG4gIGlmIChwYXJhbSA9PT0gJ2hlYWRlcicpIHtcclxuICAgIGVsZW1lbnRzVG9IaWRlID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmFjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtZW50c1RvSGlkZSA9IGZvb3Rlci5xdWVyeVNlbGVjdG9yQWxsKCcuaW50ZXJhY3RpdmUnKTtcclxuICB9XHJcbiAgbWFrZU5vZGVzVmlzaWJsZShlbGVtZW50c1RvSGlkZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVIZWFkZXIoKSB7XHJcbiAgaGlkZUVsZW1lbnRzKCdoZWFkZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0hlYWRlcigpIHtcclxuICBzaG93RWxlbWVudHMoJ2hlYWRlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlRm9vdGVyKCkge1xyXG4gIGhpZGVFbGVtZW50cygnZm9vdGVyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XHJcbiAgc2hvd0VsZW1lbnRzKCdmb290ZXInKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaGlkZUhlYWRlciwgc2hvd0hlYWRlciwgaGlkZUZvb3Rlciwgc2hvd0Zvb3RlciB9O1xyXG4iLCJpbXBvcnQgeyBwYWdlRWxlbWVudHMgfSBmcm9tICcuLi9jb21tb24vcGFnZUVsZW1lbnRzJztcclxuaW1wb3J0IHJldHVybkNvbnRhY3RzIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Db250YWN0cyc7XHJcbmltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcclxuaW1wb3J0IHJldHVyblBlcnNvbmFsRGVzY3JpcHRpb25UZXh0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5QZXJzb25hbERlc2NyaXB0aW9uVGV4dCc7XHJcbmltcG9ydCByZXR1cm5TZWN0aW9uT2JqZWN0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0JztcclxuaW1wb3J0IHJldHVyblNvY2lhbHMgZnJvbSAnLi4vY29tbW9uL3JldHVyblNvY2lhbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuQ29udGFjdFNlY3Rpb24oKSB7XHJcbiAgY29uc3QgY29udGFjdHNTZWN0aW9uT2JqZWN0ID0gcmV0dXJuU2VjdGlvbk9iamVjdCh7XHJcbiAgICB3cmFwcGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrJywgJ2NvbnRhY3Qtc2VjdGlvbicsICdwZXJzb25hbCddLFxyXG4gICAgaGVhZGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrX19oZWFkZXInLCAnY29udGFjdC1zZWN0aW9uX19oZWFkZXInXSxcclxuICAgIHRpdGxlOiAn0JrQvtC90YLQsNC60YLRiycsXHJcbiAgICBzdWJpdGxlOiAn0JrQsNC6INGB0L4g0LzQvdC+0Lkg0YHQstGP0LfQsNGC0YzRgdGPLicsXHJcbiAgICBkZXNjcmlwdGlvbkNsYXNzZXM6IFsnY29udGFjdC1zZWN0aW9uX19kZXNjcmlwdGlvbiddLFxyXG4gICAgaWQ6ICdjb250YWN0cycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvb3RlckNvbnRhY3RzID0gcmV0dXJuQ29udGFjdHMoKTtcclxuICBmb290ZXJDb250YWN0cy5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXNlY3Rpb25fX2NvbnRhY3RzJyk7XHJcbiAgY29uc3QgZm9vdGVyQXJ0aWNsZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnYXJ0aWNsZScsXHJcbiAgICBjbGFzc2VzOiBbJ3NlY3Rpb25fX3dyYXBwZXInLCAncGVyc29uYWwnXSxcclxuICB9KTtcclxuICBjb25zdCBmb290ZXJBcnRpY2xlVGl0bGUgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2gyJyxcclxuICAgIGNsYXNzZXM6IFsnc2VjdGlvbl9fdGl0bGUnXSxcclxuICAgIHRleHRDb250ZW50OiAnUGVyc29uYWwgaW5mbycsXHJcbiAgfSk7XHJcbiAgY29uc3QgcGVyc29uYWxXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NlczogWydwZXJzb25hbF9fd3JhcHBlciddLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBlcnNvbmFsRGVzY3JpcHRpb25UZXh0ID0gcmV0dXJuUGVyc29uYWxEZXNjcmlwdGlvblRleHQoKTtcclxuICBjb25zdCBzb2NpYWxzID0gcmV0dXJuU29jaWFscygpO1xyXG5cclxuICBwZXJzb25hbFdyYXBwZXIuYXBwZW5kKHBlcnNvbmFsRGVzY3JpcHRpb25UZXh0LCBzb2NpYWxzKTtcclxuICBmb290ZXJBcnRpY2xlLmFwcGVuZChmb290ZXJBcnRpY2xlVGl0bGUsIHBlcnNvbmFsV3JhcHBlcik7XHJcbiAgY29udGFjdHNTZWN0aW9uT2JqZWN0LmRlc2NyaXB0aW9uLmFwcGVuZChmb290ZXJDb250YWN0cywgZm9vdGVyQXJ0aWNsZSk7XHJcbiAgcGFnZUVsZW1lbnRzLmZvb3RlciA9IGNvbnRhY3RzU2VjdGlvbk9iamVjdC5zZWN0aW9uO1xyXG4gIHJldHVybiBjb250YWN0c1NlY3Rpb25PYmplY3Quc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuLi9jb21tb24vcmV0dXJuRWxlbWVudCc7XHJcbmltcG9ydCByZXR1cm5Fdm9sdXRpb25JdGVtIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Fdm9sdXRpb25JdGVtJztcclxuaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuRWR1Y2F0aW9uU2VjdGlvbigpIHtcclxuICBjb25zdCBlZHVjYXRpb25TZWN0aW9uT2JqZWN0ID0gcmV0dXJuU2VjdGlvbk9iamVjdCh7XHJcbiAgICB3cmFwcGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrJywgJ2VkdWNhdGlvbiddLFxyXG4gICAgaGVhZGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrX19oZWFkZXInLCAnZWR1Y2F0aW9uX19oZWFkZXInXSxcclxuICAgIGRlc2NyaXB0aW9uQ2xhc3NlczogWydlZHVjYXRpb25fX2Rlc2NyaXB0aW9uJ10sXHJcbiAgICB0aXRsZTogJ9Ce0LHRgNCw0LfQvtCy0LDQvdC40LUnLFxyXG4gICAgc3ViaXRsZTogJ1NjaW8gbWUgbmloaWwgc2NpcmUuJyxcclxuICAgIGlkOiAnZWR1Y2F0aW9uJyxcclxuICB9KTtcclxuICBjb25zdCBsaXN0ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICd1bCcsXHJcbiAgICBjbGFzc2VzOiBbXHJcbiAgICAgICdhcnRpY2xlLWJsb2NrX191bCcsXHJcbiAgICAgICd1bm9yZC1saXN0JyxcclxuICAgICAgJ2xpc3QnLFxyXG4gICAgICAnZXZvbHV0aW9uLXVsJyxcclxuICAgICAgJ2VkdWNhdGlvbl9fdWwnLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCByc3NNYWluSXRlbSA9IHJldHVybkV2b2x1dGlvbkl0ZW0oXHJcbiAgICAnUm9sbGluZyBTY29wZXMgU2Nob29sJyxcclxuICAgICcyMDIzJyxcclxuICAgICdKUy9Gcm9udGVuZCBEZXZlbG9wbWVudCBDb3Vyc2UuJyxcclxuICAgICfQlNC40YHRgtCw0L3RhtC40L7QvdC90L4nLFxyXG4gICAgJ0dpdCwgR2l0SHViLCDQvtGE0L7RgNC80LvQtdC90LjQtSDQutC+0LzQvNC40YLQvtCyINC4INC/0YPQu9C7INGA0LXQutCy0LXRgdGC0L7Qsi4g0JDQtNCw0L/RgtC40LLQvdCw0Y8g0LLQtdGA0YHRgtC60LAuIENvcmUgSlMuINCQ0LvQs9C+0YDQuNGC0LzQuNGH0LXRgdC60LjQtSDQt9Cw0LTQsNGH0LguIERPTSwgRE9NIEV2ZW50cywgQnJvd3NlciBBUEkuINCe0YHQvdC+0LLRiyBOb2RlSlMuIFdlYnBhY2suIFR5cGVTY3JpcHQuINCg0LDQt9GA0LDQsdC+0YLQutCwIFVJLdC60L7QvNC/0L7QvdC10L3RgtC+0LIuINCi0LXRhdC90LjRh9C10YHQutC+0LUg0LjQvdGC0LXRgNCy0YzRji4g0KDQsNC30YDQsNCx0L7RgtC60LAg0LIg0LrQvtC80LDQvdC00LUuJyxcclxuICAgIHRydWVcclxuICApO1xyXG4gIGNvbnN0IHJzc1ByZUl0ZW0gPSByZXR1cm5Fdm9sdXRpb25JdGVtKFxyXG4gICAgJ1JvbGxpbmcgU2NvcGVzIFNjaG9vbCcsXHJcbiAgICAnMjAyMicsXHJcbiAgICAnSlMvRnJvbnRlbmQt0YDQsNC30YDQsNCx0L7RgtC60LAuINCf0L7QtNCz0L7RgtC+0LLQuNGC0LXQu9GM0L3Ri9C5INGN0YLQsNC/LicsXHJcbiAgICAn0JTQuNGB0YLQsNC90YbQuNC+0L3QvdC+JyxcclxuICAgICfQl9C90LDQutC+0LzRgdGC0LLQviDRgSDRgdC40YHRgtC10LzQvtC5INC60L7QvdGC0YDQvtC70Y8g0LLQtdGA0YHQuNC5IEdpdC4gQ2hyb21lIERldiBUb29scywgVlMgQ29kZSwgVGVybWluYWwuINCe0YHQvdC+0LLRiyBIVE1MLiDQntGB0L3QvtCy0YsgQ1NTLiDQl9C90LDQutC+0LzRgdGC0LLQviDRgSBKYXZhU2NyaXB0LiBET00gQVBJLiBET00gRXZlbnRzLiDQkNC70LPQvtGA0LjRgtC80Ysg0Lgg0KHRgtGA0YPQutGC0YPRgNGLINCU0LDQvdC90YvRhS4nLFxyXG4gICAgdHJ1ZVxyXG4gICk7XHJcbiAgY29uc3QgcmtyaXB0SXRlbSA9IHJldHVybkV2b2x1dGlvbkl0ZW0oXHJcbiAgICAn0KDQvtGB0YLQvtCy0YHQutC40Lkt0L3QsC3QlNC+0L3RgyDQutC+0LvQu9C10LTQtiDRgNCw0LTQuNC+0Y3Qu9C10LrRgtGA0L7QvdC40LrQuCwg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDQuCDQv9GA0L7QvNGL0YjQu9C10L3QvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LknLFxyXG4gICAgJzIwMTYg4oCTIDIwMjAnLFxyXG4gICAgJ9Cf0YDQvtCz0YDQsNC80LzQuNGB0YInLFxyXG4gICAgJ9Cg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDJyxcclxuICAgICfQmNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9C1INGC0LXRhdC90L7Qu9C+0LPQuNC4LiDQntGB0L3QvtCy0Ysg0L/RgNC+0LXQutGC0LjRgNC+0LLQsNC90LjRjyDQsdCw0Lcg0LTQsNC90L3Ri9GFLiDQp9C40YHQu9C10L3QvdGL0LUg0LzQtdGC0L7QtNGLLiDQmtC+0LzQv9GM0Y7RgtC10YDQvdGL0LUg0YHQtdGC0LguINCc0LXQvdC10LTQttC80LXQvdGCINCyINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtC5INC00LXRj9GC0LXQu9GM0L3QvtGB0YLQuC4g0J7RgdC90L7QstGLINGE0LjQvdCw0L3RgdC+0LLQvtC5INCz0YDQsNC80L7RgtC90L7RgdGC0Lgg0Lgg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LAuINCa0L7QvNC/0YzRjtGC0LXRgNC90LDRjyDQs9GA0LDRhNC40LrQsC4nLFxyXG4gICAgdHJ1ZVxyXG4gICk7XHJcbiAgY29uc3Qga21pZG9JdGVtID0gcmV0dXJuRXZvbHV0aW9uSXRlbShcclxuICAgICfQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQvNC90L7Qs9C+0L/RgNC+0YTQuNC70YzQvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0L7QsdGA0LDQt9C+0LLQsNC90LjRjycsXHJcbiAgICAnMjAxOScsXHJcbiAgICAn0JjQvdC20LXQvdC10YAt0L/RgNC+0LPRgNCw0LzQvNC40YHRgicsXHJcbiAgICAn0JTQuNGB0YLQsNC90YbQuNC+0L3QvdC+JyxcclxuICAgICfQmtGD0YDRgSDQv9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90L7QuSDQv9C10YDQtdC/0L7QtNCz0L7RgtC+0LLQutC4LiDQndC+0YDQvNCw0YLQuNCy0L3Qvi3Qv9GA0LDQstC+0LLQvtC1INGA0LXQs9GD0LvQuNGA0L7QstCw0L3QuNC1INC4INC30LDQutC+0L3QvtC00LDRgtC10LvRjNC90LDRjyDQsdCw0LfQsCDQsiDRgdGE0LXRgNC1INC40L3RhNC+0YDQvNCw0YbQuNC+0L3QvdGL0YUg0Lgg0LrQvtC80L/RjNGO0YLQtdGA0L3Ri9GFINGC0LXRhdC90L7Qu9C+0LPQuNC5LiDQkdCw0LfQvtCy0YvQuSDQsNC90LPQu9C40LnRgdC60LjQuSDRj9C30YvQuiDQtNC70Y8g0YLQtdGF0L3QuNGH0LXRgdC60L7QuSDQtNC+0LrRg9C80LXQvdGC0LDRhtC40LguINCS0LLQtdC00LXQvdC40LUg0LIg0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40LUuINCg0LDQt9GA0LDQsdC+0YLQutCwIFdlYi3Qv9GA0LjQu9C+0LbQtdC90LjQuSDQvdCwINCx0LDQt9C1IEhUTUw1LCBDU1MzLCBKYXZhU2NyaXB0LicsXHJcbiAgICB0cnVlXHJcbiAgKTtcclxuXHJcbiAgbGlzdC5hcHBlbmQocnNzTWFpbkl0ZW0sIHJzc1ByZUl0ZW0sIHJrcmlwdEl0ZW0sIGttaWRvSXRlbSk7XHJcbiAgZWR1Y2F0aW9uU2VjdGlvbk9iamVjdC5kZXNjcmlwdGlvbi5hcHBlbmQobGlzdCk7XHJcbiAgcmV0dXJuIGVkdWNhdGlvblNlY3Rpb25PYmplY3Quc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuLi9jb21tb24vcmV0dXJuRWxlbWVudCc7XHJcbmltcG9ydCByZXR1cm5Fdm9sdXRpb25JdGVtIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Fdm9sdXRpb25JdGVtJztcclxuaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuRXhwZXJpZW5jZVNlY3Rpb24oKSB7XHJcbiAgY29uc3QgZXhwZXJpZW5jZVNlY3Rpb25PYmplY3QgPSByZXR1cm5TZWN0aW9uT2JqZWN0KHtcclxuICAgIHdyYXBwZXJDbGFzc2VzOiBbJ2FydGljbGUtYmxvY2snLCAnZXhwZXJpZW5jZSddLFxyXG4gICAgaGVhZGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrX19oZWFkZXInLCAnZXhwZXJpZW5jZV9faGVhZGVyJ10sXHJcbiAgICBkZXNjcmlwdGlvbkNsYXNzZXM6IFsnZXhwZXJpZW5jZV9fZGVzY3JpcHRpb24nXSxcclxuICAgIHRpdGxlOiAn0J7Qv9GL0YInLFxyXG4gICAgc3ViaXRsZTogJ1BlciBhc3BlcmEgYWQgYXN0cmEuJyxcclxuICAgIGlkOiAnZXhwZXJpZW5jZScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxpc3QgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ3VsJyxcclxuICAgIGNsYXNzZXM6IFtcclxuICAgICAgJ2FydGljbGUtYmxvY2tfX3VsJyxcclxuICAgICAgJ3Vub3JkLWxpc3QnLFxyXG4gICAgICAnbGlzdCcsXHJcbiAgICAgICdldm9sdXRpb24tdWwnLFxyXG4gICAgICAnZXhwZXJpZW5jZV9fdWwnLFxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgcGV0UHJvamVjdHNJdGVtID0gcmV0dXJuRXZvbHV0aW9uSXRlbShcclxuICAgICfQn9C10YLQv9GA0L7QtdC60YLRiycsXHJcbiAgICAnMjAyMSDigJMg0J3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8nLFxyXG4gICAgJ0Zyb250LWVuZC3RgNCw0LfRgNCw0LHQvtGC0YfQuNC6JyxcclxuICAgICfQoNC+0YHRgtC+0LIt0L3QsC3QlNC+0L3RgycsXHJcbiAgICAn0J/RgNC40LzQtdC90LXQvdC40LUg0L3QsCDQv9GA0LDQutGC0LjQutC1INC30L3QsNC90LjQuSwg0L7RgtGC0LDRh9C40LLQsNC90LjQtSDQvdCw0LLRi9C60L7QsiDQstC10YDRgdGC0LrQuC4g0J/RgNC40LzQtdC90LXQvdC40LUg0L3QvtCy0YvRhSDRgdGC0LDQvdC00LDRgNGC0L7Qsiwg0YHQvtCy0YDQtdC80LXQvdC90YvRhSDQvdCw0L/RgNCw0LLQu9C10L3QuNC5INCyINGA0LDQt9GA0LDQsdC+0YLQutC1INCy0LXQsS3Qv9GA0LjQu9C+0LbQtdC90LjQuS4nLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG4gIGNvbnN0IGttdkl0ZW0gPSByZXR1cm5Fdm9sdXRpb25JdGVtKFxyXG4gICAgJ9Ce0J7QniDCq9Ca0JzQki3QodC10YDQstC40YHCuycsXHJcbiAgICAnMjAxOSDigJMg0J3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8nLFxyXG4gICAgJ9Ch0LjRgdGC0LXQvNC90YvQuSDQsNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCcsXHJcbiAgICAn0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMnLFxyXG4gICAgJ9Ci0LXRhdC90LjRh9C10YHQutC+0LUg0L7QsdGB0LvRg9C20LjQstCw0L3QuNC1INC60L7QvNC/0YzRjtGC0LXRgNC90L7QuSDQuCDQvtGA0LPRgtC10YXQvdC40LrQuC4g0KDQsNCx0L7RgtCwINGBINC30LDRj9Cy0LrQsNC80Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0L3QsCDQv9C10YDQstC+0Lkg0Lgg0LLRgtC+0YDQvtC5INC70LjQvdC40Lgg0YLQtdGF0L/QvtC00LTQtdGA0LbQutC4LiDQo9GB0YLRgNCw0L3QtdC90LjQtSDQsNC/0L/QsNGA0LDRgtC90YvRhSDQuCDQv9GA0L7Qs9GA0LDQvNC80L3Ri9GFINC90LXQv9C+0LvQsNC00L7QuiDQvdCwINCw0LLRgtC+0LzQsNGC0LjQt9C40YDQvtCy0LDQvdC90YvRhSDRgNCw0LHQvtGH0LjRhSDQvNC10YHRgtCw0YUuINCd0LXRgdC70L7QttC90YvQuSDRgNC10LzQvtC90YIg0Y3Qu9C10LrRgtGA0L7QvdC40LrQuC4nLFxyXG4gICAgZmFsc2VcclxuICApO1xyXG5cclxuICBsaXN0LmFwcGVuZChwZXRQcm9qZWN0c0l0ZW0sIGttdkl0ZW0pO1xyXG4gIGV4cGVyaWVuY2VTZWN0aW9uT2JqZWN0LmRlc2NyaXB0aW9uLmFwcGVuZChsaXN0KTtcclxuICByZXR1cm4gZXhwZXJpZW5jZVNlY3Rpb25PYmplY3Quc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuLi9jb21tb24vcmV0dXJuRWxlbWVudCc7XHJcbmltcG9ydCByZXR1cm5TZWN0aW9uT2JqZWN0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0JztcclxuXHJcbmZ1bmN0aW9uIHJldHVybkxpc3RJdGVtKGl0ZW1UaXRsZTogc3RyaW5nLCBpdGVtVGV4dDogc3RyaW5nKSB7XHJcbiAgY29uc3QgaXRlbSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbGknLFxyXG4gICAgY2xhc3NlczogWydvcmQtbGlzdF9faXRlbScsICdsaXN0X19pdGVtJ10sXHJcbiAgfSk7XHJcbiAgY29uc3QgYXJ0aWNsZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnYXJ0aWNsZScsXHJcbiAgICBjbGFzc2VzOiBbJ2xpc3RfX2FydGljbGUnXSxcclxuICB9KTtcclxuICBjb25zdCB0aXRsZSA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaDMnLFxyXG4gICAgY2xhc3NlczogWydvcmQtbGlzdF9fdGl0bGUnLCAndGl0bGUnXSxcclxuICAgIHRleHRDb250ZW50OiBpdGVtVGl0bGUsXHJcbiAgfSk7XHJcbiAgY29uc3QgdGV4dCA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAncCcsXHJcbiAgICBjbGFzc2VzOiBbJ29yZC1saXN0X190ZXh0JywgJ3RleHQnXSxcclxuICAgIHRleHRDb250ZW50OiBpdGVtVGV4dCxcclxuICB9KTtcclxuXHJcbiAgYXJ0aWNsZS5hcHBlbmQodGl0bGUsIHRleHQpO1xyXG4gIGl0ZW0uYXBwZW5kKGFydGljbGUpO1xyXG4gIHJldHVybiBpdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5FeHBlcnRpc2VTZWN0aW9uKCkge1xyXG4gIGNvbnN0IHNlY3Rpb25PYmogPSByZXR1cm5TZWN0aW9uT2JqZWN0KHtcclxuICAgIHdyYXBwZXJDbGFzc2VzOiBbJ2FydGljbGUtYmxvY2snXSxcclxuICAgIGhlYWRlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19faGVhZGVyJ10sXHJcbiAgICB0aXRsZTogJ9Ca0L7QvNC/0LXRgtC10L3RhtC40LgnLFxyXG4gICAgc3ViaXRsZTogJ9Cf0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3Ri9C1INC30L3QsNC90LjRjy4nLFxyXG4gICAgaWQ6ICdleHBlcnRpc2UnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGxpc3QgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ29sJyxcclxuICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19fb2wnLCAnb3JkLWxpc3QnLCAnbGlzdCddLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBpdGVtSFRNTCA9IHJldHVybkxpc3RJdGVtKFxyXG4gICAgJ0hUTUwvQ1NTJyxcclxuICAgICfQktCw0LvQuNC00L3QsNGPINGB0LXQvNCw0L3RgtC40YfQtdGB0LrQsNGPINCy0LXRgNGB0YLQutCwINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDRgtGA0LXQsdC+0LLQsNC90LjRj9C80LggSFRNTDUuINCS0LXRgNGB0YLQutCwINC/0L4gUGl4ZWxQZXJmZWN0LiDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSBGbGV4Ym94LCBHcmlkLiDQn9GA0LXQv9GA0L7RhtC10YHRgdC+0YAgU0NTUy4g0JHQrdCcLiDQkNC00LDQv9GC0LjQstC90LDRjyDQuCDQvtGC0LfRi9Cy0YfQuNCy0LDRjyDQstC10YDRgdGC0LrQsCBtb2JpbGUtZmlyc3QgLyBkZXNrdG9wLWZpcnN0LidcclxuICApO1xyXG4gIGNvbnN0IGl0ZW1KUyA9IHJldHVybkxpc3RJdGVtKFxyXG4gICAgJ0phdmFTY3JpcHQnLFxyXG4gICAgJ0VTNi4g0KLQuNC/0Ysg0LTQsNC90L3Ri9GFLCDRhNGD0L3QutGG0LjQuCwg0L7QsdGK0LXQutGC0YssINC60LvQsNGB0YHRiywg0LzQtdGC0L7QtNGLLiDQn9GA0L7RgtC+0YLQuNC/0YssINC90LDRgdC70LXQtNC+0LLQsNC90LjQtS4g0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7Qui4g0JfQsNC80YvQutCw0L3QuNGPLiDQn9GA0L7QvNC40YHRizogZmV0Y2gsIGFzeW5jL2F3YWl0LiDQoNCw0LHQvtGC0LAg0YEgRE9NLCDRgdC+0LHRi9GC0LjRjywg0LbQuNC30L3QtdC90L3Ri9C5INGG0LjQutC7INGB0YLRgNCw0L3QuNGG0YsuINCc0L7QtNGD0LvQuC4gV2ViIHN0b3JhZ2UuJ1xyXG4gICk7XHJcbiAgY29uc3QgaXRlbVRTID0gcmV0dXJuTGlzdEl0ZW0oXHJcbiAgICAnVHlwZXNjcmlwdCcsXHJcbiAgICAn0JHQsNC30L7QstGL0LUg0YLQuNC/0YsuINCi0LjQv9GLLCDQuNC90YLQtdGA0YTQtdC50YHRiy4g0JTQttC10L3QtdGA0LjQutC4LiDQntCx0YrQtdC00LjQvdC10L3QuNGPIC8g0L/QtdGA0LXRgdC10YfQtdC90LjRjyDRgtC40L/QvtCyLiDQmNC30LHQtdCz0LDQvdC40LUg0YLQuNC/0LAgwqthbnnCuy4nXHJcbiAgKTtcclxuICBjb25zdCBpdGVtU29mdHdhcmUgPSByZXR1cm5MaXN0SXRlbShcclxuICAgICfQn9GA0L7Qs9GA0LDQvNC80L3QvtC1INC+0LHQtdGB0L/QtdGH0LXQvdC40LUnLFxyXG4gICAgJ1Zpc3VhbCBTdHVkaW8gQ29kZSwgQ2hyb21lIERldlRvb2xzLCBQaXhlbFBlcmZlY3QsIEZpZ21hLCBHSU1QLCBJbmtzY2FwZSwgQWRvYmUgUGhvdG9zaG9wLidcclxuICApO1xyXG4gIGNvbnN0IGl0ZW1EZXZlbG9wID0gcmV0dXJuTGlzdEl0ZW0oXHJcbiAgICAn0KHRgNC10LTRgdGC0LLQsCDRgNCw0LfRgNCw0LHQvtGC0LrQuCcsXHJcbiAgICAnV2VicGFjaywgVHlwZXNjcmlwdCwgRXNsaW50LCBTdHlsZWxpbnQsIFByZXR0aWVyLCBIdXNreSwgU0FTUy4nXHJcbiAgKTtcclxuICBjb25zdCBpdGVtVGVhbSA9IHJldHVybkxpc3RJdGVtKFxyXG4gICAgJ9Cg0LDQsdC+0YLQsCDQsiDQutC+0LzQsNC90LTQtScsXHJcbiAgICAnQWdpbGUt0LzQtdGC0L7QtNC+0LvQvtCz0LjRjzogU2NydW0sIEthbmJhbiAoVHJlbGxvLCBBc2FuYSwgR2l0SHViIERlc2t0b3ApLidcclxuICApO1xyXG4gIGxpc3QuYXBwZW5kKGl0ZW1IVE1MLCBpdGVtSlMsIGl0ZW1UUywgaXRlbVNvZnR3YXJlLCBpdGVtRGV2ZWxvcCwgaXRlbVRlYW0pO1xyXG4gIHNlY3Rpb25PYmouZGVzY3JpcHRpb24uYXBwZW5kKGxpc3QpO1xyXG4gIHJldHVybiBzZWN0aW9uT2JqLnNlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuSW50cm9TZWN0aW9uKCkge1xyXG4gIGNvbnN0IHNlY3Rpb25PYmogPSByZXR1cm5TZWN0aW9uT2JqZWN0KHtcclxuICAgIHdyYXBwZXJUYWc6ICdhcnRpY2xlJyxcclxuICAgIHdyYXBwZXJDbGFzc2VzOiBbJ2FydGljbGUtYmxvY2snXSxcclxuICAgIGhlYWRlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19faGVhZGVyJ10sXHJcbiAgICB0aXRsZTogJ9CeINGB0LXQsdC1JyxcclxuICAgIHN1Yml0bGU6ICfQmtC70Y7Rh9C10LLRi9C1INC60L7QvNC/0LXRgtC10L3RhtC40LguJyxcclxuICAgIGlkOiAnYWJvdXQnLFxyXG4gIH0pO1xyXG4gIHNlY3Rpb25PYmouZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgPHAgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX190ZXh0XCI+0J3QsNGH0LjQvdCw0Y7RidC40LkgZnJvbnQtZW5kLdGA0LDQt9GA0LDQsdC+0YLRh9C40LouINCl0L7Rh9GDINGA0LXQsNC70LjQt9C+0LLQsNGC0Ywg0YHQstC+0Lkg0L/QvtGC0LXQvdGG0LjQsNC7INC4INC/0YDQuNC+0LHRgNC10YLQtdC90L3Ri9C1INC30L3QsNC90LjRjyDQsiDQv9GA0L7QtNGD0LrRgtC+0LLQvtC5INC60L7QvNCw0L3QtNC1LjwvcD5cclxuICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fdGV4dFwiPkZvcm50LWVuZCZuYnNwOyZuZGFzaDsg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC90L7QstCw0Y8g0LTQu9GPINC80LXQvdGPINGB0YTQtdGA0LAsINC60YPQtNCwINGPINC/0LXRgNC10YXQvtC20YMg0LjQtyDRgdC80LXQttC90L7QuSZuYnNwOyZuZGFzaDsg0YHQuNGB0YLQtdC80L3QvtCz0L4g0LDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjRjy4g0JjQoi3QsdGN0LrQs9GA0LDRg9C90LQg0Lgg0LjQvdGC0LXRgNC10YEg0Log0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y4g0L/QvtC30LLQvtC70LjQu9C4INGBINC70LXQs9C60L7RgdGC0YzRjiDQv9C+0LvRg9GH0LjRgtGMINC60YDQsNGB0L3Ri9C5INC00LjQv9C70L7QvCDQsiA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwOi8vcmdrcmlwdC5ydS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmtcIj7QoNCT0JrQoNC40J/QojwvYT4g0L/QviDRgdC/0LXRhtC40LDQu9GM0L3QvtGB0YLQuCDCq9GC0LXRhdC90LjQui3Qv9GA0L7Qs9GA0LDQvNC80LjRgdGCwrsuINCX0LDRgtC10LwmbmJzcDsmbmRhc2g7INC60YPRgNGB0YsgSlMgLyBGcm9udC1lbmQg0L7RgiA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9jb3Vyc2VzL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPlJTU2Nob29sPC9hPjogPGEgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX19saW5rIGxpbmtcIiBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvY291cnNlcy9qYXZhc2NyaXB0LXByZXNjaG9vbFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPtC/0L7QtNCz0L7RgtC+0LLQuNGC0LXQu9GM0L3Ri9C5PC9hPiDQuCA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9jb3Vyc2VzL2phdmFzY3JpcHQtbWVudG9yaW5nLXByb2dyYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmtcIj7QvtGB0L3QvtCy0L3QvtC5PC9hPiwg0LPQtNC1INC30LDQvdGP0Lsg0L/QvtGH0LXRgtC90L7QtSAxMTgt0LUmbmJzcDvQvNC10YHRgtC+ICjQuiDRgdC70L7QstGDLCDQstGB0LXQs9C+INC90LAg0LrRg9GA0YEg0L/QvtGB0YLRg9C/0LjQu9C+INC+0LrQvtC70L4gOCZuYnNwOzIwMCZuYnNwO9GH0LXQu9C+0LLQtdC6LCDRg9GB0L/QtdGI0L3QviDQt9Cw0LrQvtC90YfQuNC70LgmbmJzcDsmbmRhc2g7IDUzMSkuPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX190ZXh0XCI+0KXQvtGA0L7RiNC10LUg0LfQvdCw0L3QuNC1INCw0L3Qs9C70LjQudGB0LrQvtCz0L4g0Y/Qt9GL0LrQsCDQv9C+0LfQstC+0LvRj9C10YIg0LjQt9GD0YfQsNGC0Ywg0LTQvtC60YPQvNC10L3RgtCw0YbQuNGOINCyINC+0YDQuNCz0LjQvdCw0LvQtSDQuCDQuNGB0L/RgNCw0LLQu9GP0YLRjCAvINGD0YLQvtGH0L3Rj9GC0YwgLyDQv9GD0LHQu9C40LrQvtCy0LDRgtGMINC90LAg0YDRg9GB0YHQutC+0Lwg0Y/Qt9GL0LrQtTogPGEgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX19saW5rIGxpbmtcIiBocmVmPVwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvcnUvZG9jcy9XZWIvQ1NTL0NTU19ncmlkX2xheW91dC9CYXNpY19jb25jZXB0c19vZl9ncmlkX2xheW91dFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPtGB0YLQsNGC0YzRjyDQvdCwINGB0LDQudGC0LUgbWRuPC9hPiAoPGEgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX19saW5rIGxpbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21kbi90cmFuc2xhdGVkLWNvbnRlbnQvY29tbWl0LzU3NTM0ZWM3ODc4Y2I5N2QzM2ZmZjMxNzNjYTlkMTM4YmFkNDM4NGQjZGlmZi00YjU5N2I4M2I1MTgyN2JmYjhkNjEyYmYwMmMwNjE4MTBjNzA2MTQ1MTNjYWUzMGYyNWFlMWNkOTlmZjQ4NmNlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX19saW5rXCI+0YHRgdGL0LvQutCwINC90LAg0LrQvtC80LzQuNGCPC9hPiksIDxhIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGluayBsaW5rXCIgaHJlZj1cImh0dHBzOi8vaGFici5jb20vcnUvYXJ0aWNsZXMvNzY4MzA0L1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPtGB0YLQsNGC0YzRjzwvYT4g0L7QsSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQuCBDU1MuPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX190ZXh0XCI+0JfQsCDQstGA0LXQvNGPINC+0LHRg9GH0LXQvdC40Y8g0LIgUlNTY2hvb2wg0LfQsNGA0LXQutC+0LzQtdC90LTQvtCy0LDQuyDRgdC10LHRjyDQutCw0Log0L7RgtCy0LXRgtGB0YLQstC10L3QvdGL0Lkg0LjRgdC/0L7Qu9C90LjRgtC10LvRjCDQuCDRhdC+0YDQvtGI0LjQuSDQutC+0LzQsNC90LTQvdGL0Lkg0LjQs9GA0L7Qujog0L7RgtC30YvQstGLINC+0L/Rg9Cx0LvQuNC60L7QstCw0L3RiyDQvdCwINGB0YLRgNCw0L3QuNGG0LUgPGEgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX19saW5rIGxpbmtcIiBocmVmPVwiaHR0cHM6Ly9hcHAucnMuc2Nob29sL2N2L2ZiMTk3ZGQxLWUzMzgtNDE3MS05Mzk2LWU5Njc3NGY0ZjIwMFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPtGA0LXQt9GO0LzQtTwvYT4gUlNTY2hvb2wuPC9wPmA7XHJcbiAgcmV0dXJuIHNlY3Rpb25PYmouc2VjdGlvbjtcclxufVxyXG4iLCJpbXBvcnQgcmV0dXJuRWR1Y2F0aW9uU2VjdGlvbiBmcm9tICcuL3JldHVybkVkdWNhdGlvblNlY3Rpb24nO1xyXG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuLi9jb21tb24vcmV0dXJuRWxlbWVudCc7XHJcbmltcG9ydCByZXR1cm5FeHBlcmllbmNlU2VjdGlvbiBmcm9tICcuL3JldHVybkV4cGVyaWVuY2VTZWN0aW9uJztcclxuaW1wb3J0IHJldHVybkV4cGVydGlzZVNlY3Rpb24gZnJvbSAnLi9yZXR1cm5FeHBlcnRpc2VTZWN0aW9uJztcclxuaW1wb3J0IHJldHVybkludHJvU2VjdGlvbiBmcm9tICcuL3JldHVybkludHJvU2VjdGlvbic7XHJcbmltcG9ydCByZXR1cm5Qb3J0Zm9saW9TZWN0aW9uIGZyb20gJy4vcmV0dXJuUG9ydGZvbGlvU2VjdGlvbic7XHJcbmltcG9ydCByZXR1cm5Ta2lsbHNTZWN0aW9uIGZyb20gJy4vcmV0dXJuU2tpbGxzU2VjdGlvbic7XHJcbmltcG9ydCByZXR1cm5Db250YWN0U2VjdGlvbiBmcm9tICcuL3JldHVybkNvbnRhY3RTZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVybk1haW4oKSB7XHJcbiAgY29uc3QgbWFpbiA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnbWFpbicsXHJcbiAgICBjbGFzc2VzOiBbJ21haW4nXSxcclxuICB9KTtcclxuICBjb25zdCBpbnRyb1NlY3Rpb24gPSByZXR1cm5JbnRyb1NlY3Rpb24oKTtcclxuICBjb25zdCBleHBlcnRpc2VTZWN0aW9uID0gcmV0dXJuRXhwZXJ0aXNlU2VjdGlvbigpO1xyXG4gIGNvbnN0IHNraWxsc1NlY3Rpb24gPSByZXR1cm5Ta2lsbHNTZWN0aW9uKCk7XHJcbiAgY29uc3QgZXhwZXJpZW5jZVNlY3Rpb24gPSByZXR1cm5FeHBlcmllbmNlU2VjdGlvbigpO1xyXG4gIGNvbnN0IGVkdWNhdGlvblNlY3Rpb24gPSByZXR1cm5FZHVjYXRpb25TZWN0aW9uKCk7XHJcbiAgY29uc3QgcG9ydGZvbGlvU2VjdGlvbiA9IHJldHVyblBvcnRmb2xpb1NlY3Rpb24oKTtcclxuICBjb25zdCBmb290ZXJTZWN0aW9uID0gcmV0dXJuQ29udGFjdFNlY3Rpb24oKTtcclxuXHJcbiAgbWFpbi5hcHBlbmQoXHJcbiAgICBpbnRyb1NlY3Rpb24sXHJcbiAgICBleHBlcnRpc2VTZWN0aW9uLFxyXG4gICAgc2tpbGxzU2VjdGlvbixcclxuICAgIGV4cGVyaWVuY2VTZWN0aW9uLFxyXG4gICAgZWR1Y2F0aW9uU2VjdGlvbixcclxuICAgIHBvcnRmb2xpb1NlY3Rpb24sXHJcbiAgICBmb290ZXJTZWN0aW9uXHJcbiAgKTtcclxuICByZXR1cm4gbWFpbjtcclxufVxyXG4iLCJpbXBvcnQgaW1nUG9ydGZvbGlvIGZyb20gJy4uLy4uL2ltZy9wcm9qLXBvcnRmb2xpby5qcGcnO1xyXG5pbXBvcnQgaW1nU2hlbHRlciBmcm9tICcuLi8uLi9pbWcvcHJvai1zaGVsdGVyLmpwZyc7XHJcbmltcG9ydCBpbWdNaW5lc3dlZXBlciBmcm9tICcuLi8uLi9pbWcvcHJvai1taW5lc3dlZXBlci5qcGcnO1xyXG5pbXBvcnQgaW1nQ3NzU2xpZGVyIGZyb20gJy4uLy4uL2ltZy9wcm9qLWNzc01lbVNsaWRlci5qcGcnO1xyXG5pbXBvcnQgaW1nS2V5Ym9hcmQgZnJvbSAnLi4vLi4vaW1nL3Byb2ota2V5Ym9hcmQucG5nJztcclxuaW1wb3J0IGltZ01vdmllQXBwIGZyb20gJy4uLy4uL2ltZy9wcm9qLW1vdmllLWFwcC5qcGcnO1xyXG5pbXBvcnQgaW1nVGljVGFjVG9lIGZyb20gJy4uLy4uL2ltZy9wcm9qLXRpYy10YWMtdG9lLmpwZyc7XHJcbmltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcclxuaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xyXG5cclxuZnVuY3Rpb24gcmV0dXJuUG9ydGZvbGlvUGFyYWdyYXBoKCk6IEhUTUxFbGVtZW50IHtcclxuICBjb25zdCBwb3J0Zm9saW9QYXJhZ3JhcGggPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ3AnLFxyXG4gICAgY2xhc3NlczogWydwb3J0Zm9saW8tYXJ0aWNsZV9fdGV4dCcsICd0ZXh0J10sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHBvcnRmb2xpb1BhcmFncmFwaDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuUG9ydGZvbGlvTGluayhsaW5rOiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICBjb25zdCBwb3J0Zm9saW9MaW5rID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdhJyxcclxuICAgIGNsYXNzZXM6IFsncG9ydGZvbGlvLWFydGljbGVfX2xpbmsnLCAnbGluayddLFxyXG4gICAgYXR0cmliOiBbXHJcbiAgICAgIHsgbmFtZTogJ2hyZWYnLCB2YWx1ZTogbGluayB9LFxyXG4gICAgICB7IG5hbWU6ICd0YXJnZXQnLCB2YWx1ZTogJ19ibGFuaycgfSxcclxuICAgIF0sXHJcbiAgICB0ZXh0Q29udGVudDogdGV4dCxcclxuICB9KTtcclxuICByZXR1cm4gcG9ydGZvbGlvTGluaztcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0dXJuQXJ0aWNsZShcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgZGVwbG95TGlua1N0cmluZzogc3RyaW5nLFxyXG4gIGdoTGlua3M6IHN0cmluZ1tdLFxyXG4gIHRhc2tzOiBzdHJpbmdbXSxcclxuICBpbWdTcmM6IHN0cmluZyxcclxuICBpbWdBbHQ6IHN0cmluZ1xyXG4pIHtcclxuICBjb25zdCBhcnRpY2xlID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdhcnRpY2xlJyxcclxuICAgIGNsYXNzZXM6IFsncG9ydGZvbGlvX19hcml0Y2xlJywgJ3BvcnRmb2xpby1hcnRpY2xlJ10sXHJcbiAgfSk7XHJcbiAgY29uc3QgYXJ0aWNsZVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc2VzOiBbJ3BvcnRmb2xpby1hcnRpY2xlX193cmFwcGVyJ10sXHJcbiAgfSk7XHJcbiAgY29uc3QgYXJ0aWNsZVRpdGxlID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdoMycsXHJcbiAgICBjbGFzc2VzOiBbJ3BvcnRmb2xpby1hcnRpY2xlX190aXRsZScsICd0aXRsZSddLFxyXG4gICAgdGV4dENvbnRlbnQ6IHRpdGxlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBoID0gcmV0dXJuUG9ydGZvbGlvUGFyYWdyYXBoKCk7XHJcbiAgZGVzY3JpcHRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBjb25zdCBkZXBsb3lQYXJhZ3JhcGggPSByZXR1cm5Qb3J0Zm9saW9QYXJhZ3JhcGgoKTtcclxuICBjb25zdCBkZXBsb3lMaW5rID0gcmV0dXJuUG9ydGZvbGlvTGluayhkZXBsb3lMaW5rU3RyaW5nLCAn0JTQtdC/0LvQvtC5Jyk7XHJcbiAgZGVwbG95UGFyYWdyYXBoLmFwcGVuZChkZXBsb3lMaW5rLCAnLicpO1xyXG4gIGNvbnN0IGdoUGFyYWdyYXBoID0gcmV0dXJuUG9ydGZvbGlvUGFyYWdyYXBoKCk7XHJcbiAgZ2hMaW5rcy5mb3JFYWNoKChsaW5rU3RyaW5nOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgbGlua1RleHQgPSAnR2l0aHViJztcclxuICAgIGlmIChnaExpbmtzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgbGlua1RleHQgKz0gJyAnICsgKytpZHg7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaW5rID0gcmV0dXJuUG9ydGZvbGlvTGluayhsaW5rU3RyaW5nLCBsaW5rVGV4dCk7XHJcbiAgICBnaFBhcmFncmFwaC5hcHBlbmQobGluaywgJy4gJyk7XHJcbiAgfSk7XHJcbiAgY29uc3QgdGFza3NQYXJhZ3JhcGggPSByZXR1cm5Qb3J0Zm9saW9QYXJhZ3JhcGgoKTtcclxuICB0YXNrcy5mb3JFYWNoKCh0YXNrU3RyaW5nOiBzdHJpbmcsIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgbGlua1RleHQgPSAn0JfQsNC00LDQvdC40LUnO1xyXG4gICAgaWYgKHRhc2tzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgbGlua1RleHQgKz0gJyAnICsgKytpZHg7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaW5rID0gcmV0dXJuUG9ydGZvbGlvTGluayh0YXNrU3RyaW5nLCBsaW5rVGV4dCk7XHJcbiAgICB0YXNrc1BhcmFncmFwaC5hcHBlbmQobGluaywgJy4gJyk7XHJcbiAgfSk7XHJcbiAgY29uc3QgYXJ0aWNsZUltZyA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaW1nJyxcclxuICAgIGNsYXNzZXM6IFsncG9ydGZvbGlvLWFydGljbGVfX2ltZyddLFxyXG4gICAgYXR0cmliOiBbXHJcbiAgICAgIHsgbmFtZTogJ3NyYycsIHZhbHVlOiBpbWdTcmMgfSxcclxuICAgICAgeyBuYW1lOiAnYWx0JywgdmFsdWU6IGltZ0FsdCB9LFxyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgYXJ0aWNsZVdyYXBwZXIuYXBwZW5kKFxyXG4gICAgYXJ0aWNsZVRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb25QYXJhZ3JhcGgsXHJcbiAgICBkZXBsb3lQYXJhZ3JhcGgsXHJcbiAgICBnaFBhcmFncmFwaCxcclxuICAgIHRhc2tzUGFyYWdyYXBoXHJcbiAgKTtcclxuICBhcnRpY2xlLmFwcGVuZChhcnRpY2xlV3JhcHBlciwgYXJ0aWNsZUltZyk7XHJcbiAgcmV0dXJuIGFydGljbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVyblBvcnRmb2xpb1NlY3Rpb24oKSB7XHJcbiAgY29uc3QgcG9ydGZvbGlvU2VjdGlvbk9iamVjdCA9IHJldHVyblNlY3Rpb25PYmplY3Qoe1xyXG4gICAgd3JhcHBlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9jaycsICdwb3J0Zm9saW8nXSxcclxuICAgIGhlYWRlckNsYXNzZXM6IFtcclxuICAgICAgJ3NlY3Rpb25fX2hlYWRlcicsXHJcbiAgICAgICdzZWN0aW9uX19ibG9jaycsXHJcbiAgICAgICdhcnRpY2xlLWJsb2NrX19oZWFkZXInLFxyXG4gICAgICAncG9ydGZvbGlvX19oZWFkZXInLFxyXG4gICAgXSxcclxuICAgIGRlc2NyaXB0aW9uQ2xhc3NlczogWydwb3J0Zm9saW9fX2Rlc2NyaXB0aW9uJ10sXHJcbiAgICB0aXRsZTogJ9Cf0L7RgNGC0YTQvtC70LjQvicsXHJcbiAgICBzdWJpdGxlOiAn0JLRi9C/0L7Qu9C90LXQvdC90YvQtSDQv9GA0L7QtdC60YLRiy4nLFxyXG4gICAgaWQ6ICdwb3J0Zm9saW8nLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBvcnRmb2xpb0FydGljbGUgPSByZXR1cm5BcnRpY2xlKFxyXG4gICAgJ1BvcnRmb2xpbycsXHJcbiAgICAn0JDQtNCw0L/RgtC40LLQvdGL0LkgbGFuZGluZyBwYWdlINGBINC40L3RgtC10YDQsNC60YLQuNCy0L3QvtGB0YLRjNGOLicsXHJcbiAgICAnaHR0cHM6Ly9hLXYtZ29yLmdpdGh1Yi5pby9zdHVkeS1wcm9qZWN0cy9wb3J0Zm9saW8vJyxcclxuICAgIFtcclxuICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXYtZ29yL3N0dWR5LXByb2plY3RzL3RyZWUvcG9ydGZvbGlvJyxcclxuICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXYtZ29yL3N0dWR5LXByb2plY3RzL3RyZWUvcG9ydGZvbGlvLXZpZGVvJyxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL3BvcnRmb2xpby9wb3J0Zm9saW8ubWQnLFxyXG4gICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC90YXNrcy9ibG9iL21hc3Rlci90YXNrcy9qczMwJTIzL2pzMzAtMy5tZCcsXHJcbiAgICBdLFxyXG4gICAgaW1nUG9ydGZvbGlvLFxyXG4gICAgJ1ByaW50c2NyZWVuIHBvcnRmb2xpbyBsYW5kaW5nIHBhZ2UnXHJcbiAgKTtcclxuICBjb25zdCBjc3NTbGlkZXJBcnRpY2xlID0gcmV0dXJuQXJ0aWNsZShcclxuICAgICdDU1Mg0YHQu9Cw0LnQtNC10YAnLFxyXG4gICAgJ9Ch0LvQsNC50LTQtdGAINC90LAg0YfQuNGB0YLQvtC8IENTUy4nLFxyXG4gICAgJ2h0dHBzOi8vYS12LWdvci5naXRodWIuaW8vY3NzTWVtU2xpZGVyL2Nzc01lbVNsaWRlci8nLFxyXG4gICAgWydodHRwczovL2dpdGh1Yi5jb20vYS12LWdvci9jc3NNZW1TbGlkZXInXSxcclxuICAgIFtcclxuICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9yb2xsaW5nLXNjb3Blcy1zY2hvb2wvdGFza3MvdHJlZS9tYXN0ZXIvdGFza3MvY3NzLW1lbWUtc2xpZGVyJyxcclxuICAgIF0sXHJcbiAgICBpbWdDc3NTbGlkZXIsXHJcbiAgICAnVmlydHVhbCBrZXlib2FyZCBhcHBsaWNhdGlvbiBwYWdlJ1xyXG4gICk7XHJcbiAgY29uc3Qgc2hlbHRlckFydGljbGUgPSByZXR1cm5BcnRpY2xlKFxyXG4gICAgJ1NoZWx0ZXInLFxyXG4gICAgJ9CQ0LTQsNC/0YLQuNCy0L3Ri9C5INC40L3RgtC10YDQsNC60YLQuNCy0L3Ri9C5INGB0LDQudGCLicsXHJcbiAgICAnaHR0cHM6Ly9hLXYtZ29yLmdpdGh1Yi5pby9zdHVkeS1wcm9qZWN0cy9zaGVsdGVyL3BhZ2VzL21haW4vJyxcclxuICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL2Etdi1nb3Ivc3R1ZHktcHJvamVjdHMvdHJlZS9zaGVsdGVyJ10sXHJcbiAgICBbXHJcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL3NoZWx0ZXIvc2hlbHRlci5tZCcsXHJcbiAgICBdLFxyXG4gICAgaW1nU2hlbHRlcixcclxuICAgICdTaGVsdGVyIGFwcGxpY2F0aW9uIHBhZ2UnXHJcbiAgKTtcclxuICBjb25zdCBtaW5lc3dlZXBlckFydGljbGUgPSByZXR1cm5BcnRpY2xlKFxyXG4gICAgJ9Ch0LDQv9C10YAnLFxyXG4gICAgJ9CY0LPRgNCwIMKr0KHQsNC/0LXRgMK7LicsXHJcbiAgICAnaHR0cHM6Ly9hLXYtZ29yLmdpdGh1Yi5pby9zdHVkeS1wcm9qZWN0cy9taW5lc3dlZXBlci8nLFxyXG4gICAgWydodHRwczovL2dpdGh1Yi5jb20vYS12LWdvci9zdHVkeS1wcm9qZWN0cy90cmVlL21pbmVzd2VlcGVyJ10sXHJcbiAgICBbXHJcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL21pbmVzd2VlcGVyL1JFQURNRS5tZCcsXHJcbiAgICBdLFxyXG4gICAgaW1nTWluZXN3ZWVwZXIsXHJcbiAgICAnTWluZXN3ZWVwZXIgYXBwbGljYXRpb24gcGFnZSdcclxuICApO1xyXG4gIGNvbnN0IGtleWJvYXJkQXJ0aWNsZSA9IHJldHVybkFydGljbGUoXHJcbiAgICAn0JLQuNGA0YLRg9Cw0LvRjNC90LDRjyDQutC70LDQstC40LDRgtGD0YDQsCcsXHJcbiAgICAn0JLQuNGA0YLRg9Cw0LvRjNC90LDRjyDQutC70LDQstC40LDRgtGD0YDQsC4nLFxyXG4gICAgJ2h0dHBzOi8vYS12LWdvci5naXRodWIuaW8vdmlydHVhbC1rZXlib2FyZC8nLFxyXG4gICAgWydodHRwczovL2dpdGh1Yi5jb20vYS12LWdvci92aXJ0dWFsLWtleWJvYXJkJ10sXHJcbiAgICBbXHJcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL3ZpcnR1YWwta2V5Ym9hcmQvdmlydHVhbC1rZXlib2FyZC1lbi5tZCcsXHJcbiAgICBdLFxyXG4gICAgaW1nS2V5Ym9hcmQsXHJcbiAgICAnVmlydHVhbCBrZXlib2FyZCBhcHBsaWNhdGlvbiBwYWdlJ1xyXG4gICk7XHJcbiAgY29uc3QgbW92aWVBcHBBcnRpY2xlID0gcmV0dXJuQXJ0aWNsZShcclxuICAgICfQn9C+0LjRgdC60L7QstC40Log0L/QviDQstC40LTQtdC+JyxcclxuICAgICfQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDRhNC40LvRjNC80LDRhSDQv9C+INC30LDQv9GA0L7RgdGDINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAoQVBJKS4nLFxyXG4gICAgJ2h0dHBzOi8vYS12LWdvci5naXRodWIuaW8vc3R1ZHktcHJvamVjdHMvbW92aWUtYXBwLycsXHJcbiAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXYtZ29yL3N0dWR5LXByb2plY3RzL3RyZWUvbW92aWUtYXBwJ10sXHJcbiAgICBbXHJcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL2pzMzAlMjMvanMzMC02Lm1kJyxcclxuICAgIF0sXHJcbiAgICBpbWdNb3ZpZUFwcCxcclxuICAgICdQcmludHNjcmVlbiBtb3ZpZSBhcHBsaWNhdGlvbiBwYWdlJ1xyXG4gICk7XHJcbiAgY29uc3QgdGljVGFjVG9lQXJ0aWNsZSA9IHJldHVybkFydGljbGUoXHJcbiAgICAnVGljLXRhYy10b2UnLFxyXG4gICAgJ9CY0LPRgNCwIMKr0LrRgNC10YHRgtC40LrQuC3QvdC+0LvQuNC60LjCuy4nLFxyXG4gICAgJ2h0dHBzOi8vYS12LWdvci5naXRodWIuaW8vc3R1ZHktcHJvamVjdHMvdGljLXRhYy10b2UvJyxcclxuICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL2Etdi1nb3Ivc3R1ZHktcHJvamVjdHMvdHJlZS90aWMtdGFjLXRvZSddLFxyXG4gICAgW1xyXG4gICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC90YXNrcy9ibG9iL21hc3Rlci90YXNrcy9qczMwJTIzL2pzMzAtNy5tZCcsXHJcbiAgICBdLFxyXG4gICAgaW1nVGljVGFjVG9lLFxyXG4gICAgJ1RpYy10YWMtdG9lIHBhZ2UnXHJcbiAgKTtcclxuXHJcbiAgcG9ydGZvbGlvU2VjdGlvbk9iamVjdC5kZXNjcmlwdGlvbi5hcHBlbmQoXHJcbiAgICBwb3J0Zm9saW9BcnRpY2xlLFxyXG4gICAgc2hlbHRlckFydGljbGUsXHJcbiAgICBtaW5lc3dlZXBlckFydGljbGUsXHJcbiAgICBjc3NTbGlkZXJBcnRpY2xlLFxyXG4gICAga2V5Ym9hcmRBcnRpY2xlLFxyXG4gICAgbW92aWVBcHBBcnRpY2xlLFxyXG4gICAgdGljVGFjVG9lQXJ0aWNsZVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBwb3J0Zm9saW9TZWN0aW9uT2JqZWN0LnNlY3Rpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgcGFnZUVsZW1lbnRzIH0gZnJvbSAnLi4vY29tbW9uL3BhZ2VFbGVtZW50cyc7XHJcbmltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcclxuaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xyXG5cclxuZnVuY3Rpb24gcmV0dXJuU2tpbGxzSXRlbShudW1QZXJjZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGxhYmVsU3RyaW5nOiBzdHJpbmcpIHtcclxuICBjb25zdCBpdGVtID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsaScsXHJcbiAgICBjbGFzc2VzOiBbJ3Vub3JkLWxpc3RfX2l0ZW0nLCAnbGlzdF9faXRlbScsICdpdGVtJywgJ3NraWxsc19faXRlbSddLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHBlcmNlbnRCbG9jayA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzZXM6IFsnaXRlbV9fcGVyY2VudCddLFxyXG4gICAgdGV4dENvbnRlbnQ6IG51bVBlcmNlbnQsXHJcbiAgfSk7XHJcbiAgY29uc3QgbGFiZWxFbGVtZW50ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdsYWJlbCcsXHJcbiAgICBjbGFzc2VzOiBbJ2l0ZW1fX2xhYmVsJ10sXHJcbiAgICBhdHRyaWI6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdmb3InLFxyXG4gICAgICAgIHZhbHVlOiBpZCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICB0ZXh0Q29udGVudDogbGFiZWxTdHJpbmcsXHJcbiAgfSk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NFbGVtZW50ID0gcmV0dXJuRWxlbWVudCh7XHJcbiAgICB0YWc6ICdwcm9ncmVzcycsXHJcbiAgICBjbGFzc2VzOiBbJ2l0ZW1fX3Byb2dyZXNzJ10sXHJcbiAgICBhdHRyaWI6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdpZCcsXHJcbiAgICAgICAgdmFsdWU6IGlkLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ21heCcsXHJcbiAgICAgICAgdmFsdWU6ICcxMDAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3ZhbHVlJyxcclxuICAgICAgICB2YWx1ZTogbnVtUGVyY2VudCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gIGl0ZW0uYXBwZW5kKHBlcmNlbnRCbG9jaywgbGFiZWxFbGVtZW50LCBwcm9ncmVzc0VsZW1lbnQpO1xyXG4gIHJldHVybiBpdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5Ta2lsbHNTZWN0aW9uKCkge1xyXG4gIGNvbnN0IHNraWxsc1NlY3Rpb25PYmplY3QgPSByZXR1cm5TZWN0aW9uT2JqZWN0KHtcclxuICAgIHdyYXBwZXJUYWc6ICdhcnRpY2xlJyxcclxuICAgIHdyYXBwZXJDbGFzc2VzOiBbJ3NlY3Rpb25fX3dyYXBwZXInLCAnYXJ0aWNsZScsICdza2lsbHMnXSxcclxuICAgIGhlYWRlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19faGVhZGVyJywgJ3NraWxsc19faGVhZGVyJ10sXHJcbiAgICBkZXNjcmlwdGlvbkNsYXNzZXM6IFsnc2tpbGxzX19kZXNjcmlwdGlvbiddLFxyXG4gICAgdGl0bGU6ICfQmtC+0LzQv9C10YLQtdC90YbQuNC4JyxcclxuICAgIHN1Yml0bGU6ICfQn9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90YvQtSDQvdCw0LLRi9C60LguJyxcclxuICAgIGlkOiAnc2tpbGxzJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2tpbGxzTGlzdCA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAndWwnLFxyXG4gICAgY2xhc3NlczogWydhcnRpY2xlLWJsb2NrX191bCcsICd1bm9yZC1saXN0JywgJ2xpc3QnLCAnc2tpbGxzX19saXN0J10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGh0bWxFbGVtZW50ID0gcmV0dXJuU2tpbGxzSXRlbSgnOTAnLCAnaHRtbCcsICdIVE1MJyk7XHJcbiAgY29uc3QgY3NzRWxlbWVudCA9IHJldHVyblNraWxsc0l0ZW0oJzUwJywgJ2NzczMnLCAnQ1NTMyBhbmltYXRpb24nKTtcclxuICBjb25zdCB0c0VsZW1lbnQgPSByZXR1cm5Ta2lsbHNJdGVtKCc2NScsICd0cycsICdUeXBlc2NyaXB0Jyk7XHJcbiAgY29uc3QgZ2l0RWxlbWVudCA9IHJldHVyblNraWxsc0l0ZW0oJzgwJywgJ2dpdCcsICdHSVQnKTtcclxuICBjb25zdCB3ZWJwYWNrRWxlbWVudCA9IHJldHVyblNraWxsc0l0ZW0oJzk1JywgJ3dlYnBhY2snLCAnV2VicGFjaycpO1xyXG4gIGNvbnN0IHNlb0VsZW1lbnQgPSByZXR1cm5Ta2lsbHNJdGVtKCc5MCcsICdzZW8nLCAnU0VPJyk7XHJcblxyXG4gIHNraWxsc0xpc3QuYXBwZW5kKFxyXG4gICAgaHRtbEVsZW1lbnQsXHJcbiAgICBjc3NFbGVtZW50LFxyXG4gICAgdHNFbGVtZW50LFxyXG4gICAgZ2l0RWxlbWVudCxcclxuICAgIHdlYnBhY2tFbGVtZW50LFxyXG4gICAgc2VvRWxlbWVudFxyXG4gICk7XHJcbiAgc2tpbGxzU2VjdGlvbk9iamVjdC5kZXNjcmlwdGlvbi5hcHBlbmQoc2tpbGxzTGlzdCk7XHJcbiAgcGFnZUVsZW1lbnRzLnNraWxscyA9IHNraWxsc1NlY3Rpb25PYmplY3Quc2VjdGlvbjtcclxuICByZXR1cm4gc2tpbGxzU2VjdGlvbk9iamVjdC5zZWN0aW9uO1xyXG59XHJcbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vY29tbW9uL3JldHVybkVsZW1lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuRm9vdGVyKCkge1xyXG4gIGNvbnN0IGZvb3RlciA9IHJldHVybkVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZm9vdGVyJyxcclxuICAgIGNsYXNzZXM6IFsnZm9vdGVyJ10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fd3JhcHBlcicsICd3cmFwcGVyJ10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvcHlyaWdodFN0cmluZyA9ICfCqSDQkC4g0JPQvtGA0LHQtdC90LrQviAnICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICBjb25zdCBjb3B5cmlnaHQgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fY29weXJpZ2h0J10sXHJcbiAgICB0ZXh0Q29udGVudDogY29weXJpZ2h0U3RyaW5nLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb3B5cmlnaHREZXNpZ24gPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fY29weXJpZ2h0J10sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNvcHlyaWdodERlc2lnbkxpbmsgPSByZXR1cm5FbGVtZW50KHtcclxuICAgIHRhZzogJ2EnLFxyXG4gICAgY2xhc3NlczogWydmb290ZXJfX2xpbmsnLCAnbGluayddLFxyXG4gICAgdGV4dENvbnRlbnQ6ICdkZXNpZ246IFJ1dmVuVGhlbWVzJyxcclxuICAgIGF0dHJpYjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxyXG4gICAgICAgIHZhbHVlOiAnaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvdXNlci9ydXZlbnRoZW1lcycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAndGFyZ2V0JyxcclxuICAgICAgICB2YWx1ZTogJ19ibGFuaycsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBjb3B5cmlnaHREZXNpZ24uYXBwZW5kKGNvcHlyaWdodERlc2lnbkxpbmspO1xyXG4gIHdyYXBwZXIuYXBwZW5kKGNvcHlyaWdodCwgY29weXJpZ2h0RGVzaWduKTtcclxuICBmb290ZXIuYXBwZW5kKHdyYXBwZXIpO1xyXG5cclxuICByZXR1cm4gZm9vdGVyO1xyXG59XHJcbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vY29tbW9uL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IHJldHVybkhlYWRlciBmcm9tICcuL2hlYWRlci9yZXR1cm5IZWFkZXInO1xuaW1wb3J0IHJldHVybk1haW4gZnJvbSAnLi9tYWluL3JldHVybk1haW4nO1xuaW1wb3J0IHJldHVybkZvb3RlciBmcm9tICcuL3JldHVybkZvb3Rlcic7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUvdGhlbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5QYWdlKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5Jyk7XG4gIGlmICh0aGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5X2RhcmsnKTtcbiAgfVxuICBjb25zdCBwYWdlVGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdoMScsXG4gICAgY2xhc3NlczogWydib2R5X190aXRsZSddLFxuICAgIHRleHRDb250ZW50OiAnRGVzbW9uZCByZXN1bWUnLFxuICB9KTtcbiAgY29uc3QgaGVhZGVyID0gcmV0dXJuSGVhZGVyKCk7XG4gIGNvbnN0IG1haW4gPSByZXR1cm5NYWluKCk7XG4gIGNvbnN0IGZvb3RlciA9IHJldHVybkZvb3RlcigpO1xuXG4gIGJvZHkuYXBwZW5kKHBhZ2VUaXRsZSwgaGVhZGVyLCBtYWluLCBmb290ZXIpO1xufVxuIiwiaW1wb3J0IHsgY2hhbmdlU2Nyb2xsQm9keSB9IGZyb20gJy4vY2hhbmdlU2Nyb2xsQm9keSc7XHJcbmltcG9ydCB7IHBhZ2VFbGVtZW50cyB9IGZyb20gJy4vY29tbW9uL3BhZ2VFbGVtZW50cyc7XHJcbmltcG9ydCB7IGNsb3NlQnVyZ2VyTWVudSB9IGZyb20gJy4vaGVhZGVyL21lbnUnO1xyXG5pbXBvcnQgeyBjaGVja0ludGVyYWN0aXZlIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS9pbnRlcmFjdGl2ZSc7XHJcbmltcG9ydCB7IGhpZGVIZWFkZXIgfSBmcm9tICcuL2ludGVyYWN0aXZlL3Zpc2libGUnO1xyXG5pbXBvcnQgcmV0dXJuUGFnZSBmcm9tICcuL3JldHVyblBhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VUaGVtZSwgc2V0VGhlbWUsIHNldFRoZW1lVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3RoZW1lL3RoZW1lJztcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xyXG4gIHNldFRoZW1lKCk7XHJcbiAgcmV0dXJuUGFnZSgpO1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWRlSGVhZGVyKTtcclxuICBwYWdlRWxlbWVudHMuc3Vic3RyYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VCdXJnZXJNZW51KTtcclxuICBwYWdlRWxlbWVudHMubWVudUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUJ1cmdlck1lbnUpO1xyXG4gIHBhZ2VFbGVtZW50cy50aGVtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRoZW1lKTtcclxuICBwYWdlRWxlbWVudHMubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVNjcm9sbEJvZHkpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2hlY2tJbnRlcmFjdGl2ZSk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tJbnRlcmFjdGl2ZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIHNldFRoZW1lVG9Mb2NhbFN0b3JhZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgeyBzdGFydEFwcCB9O1xyXG4iLCJsZXQgdGhlbWU6IHN0cmluZztcclxuXHJcbmZ1bmN0aW9uIGdldFRoZW1lRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3VtZUFHLXRoZW1lJykgIT09ICdudWxsJykge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN1bWVBRy10aGVtZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcclxuICBjb25zdCB0aGVtZUZyb21MUyA9IGdldFRoZW1lRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIGlmICh0eXBlb2YgdGhlbWVGcm9tTFMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICB0aGVtZSA9IHRoZW1lRnJvbUxTO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcmVmZXJzRGFya1NjaGVtZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XHJcbiAgICBpZiAocHJlZmVyc0RhcmtTY2hlbWUubWF0Y2hlcykge1xyXG4gICAgICB0aGVtZSA9ICdkYXJrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoZW1lID0gJ2xpZ2h0JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFRoZW1lVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jlc3VtZUFHLXRoZW1lJywgdGhlbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2JvZHlfZGFyaycpO1xyXG4gIHRoZW1lID0gdGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRoZW1lLCBzZXRUaGVtZSwgc2V0VGhlbWVUb0xvY2FsU3RvcmFnZSwgY2hhbmdlVGhlbWUgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHN0YXJ0QXBwIH0gZnJvbSAnLi9hc3NldHMvdHMvc3RhcnRBcHAnO1xuXG5zdGFydEFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9