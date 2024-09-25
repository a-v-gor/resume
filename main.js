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
    if (document.documentElement.clientWidth < 1024 &&
        !checkBox.checked &&
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y3NzP2IzNzYiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9jaGFuZ2VTY3JvbGxCb2R5LnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvY29tbW9uL3BhZ2VFbGVtZW50cy50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2NvbW1vbi9yZXR1cm5Db250YWN0cy50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2NvbW1vbi9yZXR1cm5FbGVtZW50LnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvY29tbW9uL3JldHVybkV2b2x1dGlvbkl0ZW0udHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9jb21tb24vcmV0dXJuUGVyc29uYWxEZXNjcmlwdGlvblRleHQudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9jb21tb24vcmV0dXJuU2VjdGlvbk9iamVjdC50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL2NvbW1vbi9yZXR1cm5Tb2NpYWxzLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvaGVhZGVyL21lbnUudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9oZWFkZXIvcmV0dXJuSGVhZGVyLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvaW50ZXJhY3RpdmUvaW50ZXJhY3RpdmUudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9pbnRlcmFjdGl2ZS9za2lsbHMudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9pbnRlcmFjdGl2ZS92aXNpYmxlLnRzIiwid2VicGFjazovL3Jlc3VtZS8uL3NyYy9hc3NldHMvdHMvbWFpbi9yZXR1cm5Db250YWN0U2VjdGlvbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL21haW4vcmV0dXJuRWR1Y2F0aW9uU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL21haW4vcmV0dXJuRXhwZXJpZW5jZVNlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9tYWluL3JldHVybkV4cGVydGlzZVNlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9tYWluL3JldHVybkludHJvU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL21haW4vcmV0dXJuTWFpbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL21haW4vcmV0dXJuUG9ydGZvbGlvU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL21haW4vcmV0dXJuU2tpbGxzU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL3JldHVybkZvb3Rlci50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL3JldHVyblBhZ2UudHMiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Fzc2V0cy90cy9zdGFydEFwcC50cyIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvYXNzZXRzL3RzL3RoZW1lL3RoZW1lLnRzIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN1bWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9jb21tb24vcGFnZUVsZW1lbnRzJztcblxuZnVuY3Rpb24gY2hhbmdlU2Nyb2xsQm9keSgpIHtcbiAgY29uc3QgY2hlY2tCb3ggPSA8SFRNTElucHV0RWxlbWVudD5wYWdlRWxlbWVudHMubWVudUNoZWNrYm94O1xuICBpZiAoXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDwgMTAyNCAmJlxuICAgICFjaGVja0JveC5jaGVja2VkICYmXG4gICAgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdib2R5X3N0b3Atc2Nyb2xsJylcbiAgKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5X3N0b3Atc2Nyb2xsJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5X3N0b3Atc2Nyb2xsJyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2hhbmdlU2Nyb2xsQm9keSB9O1xuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcbiAgcmV0dXJuIHJldHVybkVsZW1lbnQoeyB0YWc6ICdkaXYnIH0pO1xufVxuXG5jb25zdCBwYWdlRWxlbWVudHMgPSB7XG4gIGhlYWRlcjogbmV3RWxlbWVudCgpLFxuICBza2lsbHM6IG5ld0VsZW1lbnQoKSxcbiAgZm9vdGVyOiBuZXdFbGVtZW50KCksXG4gIHRoZW1lQnRuOiBuZXdFbGVtZW50KCksXG4gIHN1YnN0cmF0ZTogbmV3RWxlbWVudCgpLFxuICBtZW51Q2hlY2tib3g6IHJldHVybkVsZW1lbnQoeyB0YWc6ICdpbnB1dCcgfSksXG4gIG1lbnVMaXN0OiByZXR1cm5FbGVtZW50KHsgdGFnOiAndWwnIH0pLFxuICBtZW51QnRuOiBuZXdFbGVtZW50KCksXG59O1xuXG5leHBvcnQgeyBwYWdlRWxlbWVudHMgfTtcbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vcmV0dXJuRWxlbWVudCc7XG5cbmZ1bmN0aW9uIHJldHVybkNvbnRhY3QoaGVhZGVyOiBzdHJpbmcsIGhyZWY6IHN0cmluZywgZGVzY3I6IHN0cmluZykge1xuICBjb25zdCBjb250YWN0ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnYXJ0aWNsZScsXG4gICAgY2xhc3NlczogWydjb250YWN0c19fY29udGFjdCcsICdjb250YWN0JywgJ2ludGVyYWN0aXZlJ10sXG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3RUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2g0JyxcbiAgICBjbGFzc2VzOiBbJ2NvbnRhY3RfX3RpdGxlJywgJ3RpdGxlJywgJ3RleHQnXSxcbiAgICB0ZXh0Q29udGVudDogaGVhZGVyLFxuICB9KTtcblxuICBjb25zdCBjb250YWN0VGV4dCA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ3AnLFxuICAgIGNsYXNzZXM6IFsnY29udGFjdF9fZGVzY3InLCAndGV4dCddLFxuICB9KTtcblxuICBjb25zdCBjb250YWN0TGluayA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2EnLFxuICAgIGF0dHJpYjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnaHJlZicsXG4gICAgICAgIHZhbHVlOiBocmVmLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3JlbCcsXG4gICAgICAgIHZhbHVlOiAnbm9vcGVuZXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RhcmdldCcsXG4gICAgICAgIHZhbHVlOiAnX2JsYW5rJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBjbGFzc2VzOiBbJ2NvbnRhY3RfX2xpbmsnXSxcbiAgICB0ZXh0Q29udGVudDogZGVzY3IsXG4gIH0pO1xuXG4gIGNvbnRhY3RUZXh0LmFwcGVuZChjb250YWN0TGluayk7XG5cbiAgY29udGFjdC5hcHBlbmQoY29udGFjdFRpdGxlLCBjb250YWN0VGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVybkNvbnRhY3RzKCkge1xuICBjb25zdCBjb250YWN0cyA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ3NlY3Rpb24nLFxuICAgIGNsYXNzZXM6IFsnY29udGFjdHMnXSxcbiAgfSk7XG5cbiAgY29uc3QgY29udGFjdHNUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2gzJyxcbiAgICBjbGFzc2VzOiBbJ2NvbnRhY3RzX190aXRsZSddLFxuICAgIHRleHRDb250ZW50OiAn0JrQvtC90YLQsNC60YLRiycsXG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRhY3RMb2NhdGlvbiA9IHJldHVybkNvbnRhY3QoXG4gICAgJ9Cc0LXRgdGC0L7QvdCw0YXQvtC20LTQtdC90LjQtScsXG4gICAgJ2h0dHBzOi8vbWFwcy5hcHAuZ29vLmdsL2F3QU1SVktjYlVlWVd1MWg4JyxcbiAgICAn0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMnXG4gICk7XG4gIGNvbnN0IGNvbnRhY3RUZWxlZ3JhbSA9IHJldHVybkNvbnRhY3QoXG4gICAgJ9Ci0LXQu9C10LPRgNCw0LwnLFxuICAgICdodHRwczovL3QubWUvYWxleGV5X2dvcmJlbmtvJyxcbiAgICAnQGFsZXhleV9nb3JiZW5rbydcbiAgKTtcbiAgY29uc3QgY29udGFjdERpc2NvcmQgPSByZXR1cm5Db250YWN0KFxuICAgICdEaXNjb3JkJyxcbiAgICAnaHR0cHM6Ly9kaXNjb3JkYXBwLmNvbS91c2Vycy84NzM0MTk4MTQ5ODU2NzQ4MDInLFxuICAgICdAYWxleGV5X2dvcmJlbmtvJ1xuICApO1xuICBjb25zdCBjb250YWN0RW1haWwgPSByZXR1cm5Db250YWN0KFxuICAgICdFLW1haWwnLFxuICAgICdtYWlsdG86YS52LmdvckBtYWlsLnJ1JyxcbiAgICAnYS52LmdvckBtYWlsLnJ1J1xuICApO1xuXG4gIGNvbnRhY3RzLmFwcGVuZChcbiAgICBjb250YWN0c1RpdGxlLFxuICAgIGNvbnRhY3RMb2NhdGlvbixcbiAgICBjb250YWN0VGVsZWdyYW0sXG4gICAgY29udGFjdERpc2NvcmQsXG4gICAgY29udGFjdEVtYWlsXG4gICk7XG4gIHJldHVybiBjb250YWN0cztcbn1cbiIsImludGVyZmFjZSBJRWxlbURhdGEge1xuICB0YWc6IHN0cmluZztcbiAgY2xhc3Nlcz86IHN0cmluZ1tdO1xuICBpZD86IHN0cmluZztcbiAgYXR0cmliPzogeyBuYW1lOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfVtdO1xuICB0ZXh0Q29udGVudD86IHN0cmluZztcbiAgc3JjPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5FbGVtZW50KGVsZW1EYXRhOiBJRWxlbURhdGEpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1EYXRhLnRhZyk7XG4gIGlmIChlbGVtRGF0YS5jbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtRGF0YS5jbGFzc2VzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChpdGVtKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZWxlbURhdGEuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuaWQgPSBlbGVtRGF0YS5pZDtcbiAgfVxuICBpZiAoZWxlbURhdGEuYXR0cmliICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbGVtRGF0YS5hdHRyaWIuZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaS5uYW1lLCBpLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZWxlbURhdGEudGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtRGF0YS50ZXh0Q29udGVudDtcbiAgfVxuICBpZiAoZWxlbURhdGEudGFnID09PSAnaW1nJyAmJiBlbGVtRGF0YS5zcmMgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCBlbGVtRGF0YS5zcmMpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuRXZvbHV0aW9uSXRlbShcbiAgdGl0bGU6IHN0cmluZyxcbiAgcGVyaW9kOiBzdHJpbmcsXG4gIHBvc2l0aW9uOiBzdHJpbmcsXG4gIGxvY2F0aW9uOiBzdHJpbmcsXG4gIHRleHQ6IHN0cmluZyxcbiAgaXNFZHVjYXRpb246IGJvb2xlYW5cbik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgaXRlbUNsYXNzID0gaXNFZHVjYXRpb24gPyAnZWR1Y2F0aW9uX19pdGVtJyA6ICdleHBlcmllbmNlX19pdGVtJztcbiAgY29uc3QgaXRlbSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2xpJyxcbiAgICBjbGFzc2VzOiBbXG4gICAgICAndW5vcmQtbGlzdF9faXRlbScsXG4gICAgICAnbGlzdF9faXRlbScsXG4gICAgICAnZXZvbHV0aW9uLXVsX19pdGVtJyxcbiAgICAgIGl0ZW1DbGFzcyxcbiAgICBdLFxuICB9KTtcbiAgY29uc3QgYXJ0aWNsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2FydGljbGUnLFxuICAgIGNsYXNzZXM6IFsnbGlzdF9fYXJ0aWNsZScsICdhcnRpY2xlLWxpJywgJ2V2b2x1dGlvbi11bF9fYXJ0aWNsZSddLFxuICB9KTtcbiAgY29uc3QgaGVhZGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ2FydGljbGUtbGlfX2hlYWRlciddLFxuICB9KTtcbiAgY29uc3QgYXJ0aWNsZVRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnaDMnLFxuICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1saV9fdGl0bGUnLCAndGl0bGUnXSxcbiAgICB0ZXh0Q29udGVudDogdGl0bGUsXG4gIH0pO1xuICBjb25zdCBhcnRpY2xlUGVyaW9kID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAncCcsXG4gICAgY2xhc3NlczogWydhcnRpY2xlLWxpX19wZXJpb2QnXSxcbiAgICB0ZXh0Q29udGVudDogcGVyaW9kLFxuICB9KTtcbiAgY29uc3QgYXJ0aWNsZVBvc2l0aW9uID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAncCcsXG4gICAgY2xhc3NlczogWydhcnRpY2xlLWxpX19wb3NpdGlvbiddLFxuICAgIHRleHRDb250ZW50OiBwb3NpdGlvbixcbiAgfSk7XG4gIGNvbnN0IGFydGljbGVMb2NhdGlvbiA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ3AnLFxuICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1saV9fbG9jYXRpb24nXSxcbiAgICB0ZXh0Q29udGVudDogbG9jYXRpb24sXG4gIH0pO1xuICBjb25zdCBib2R5ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ2FydGljbGUtbGlfX2JvZHknXSxcbiAgfSk7XG4gIGNvbnN0IGFydGljbGVUZXh0ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAncCcsXG4gICAgY2xhc3NlczogWydhcnRpY2xlLWxpX190ZXh0JywgJ3RleHQnXSxcbiAgICB0ZXh0Q29udGVudDogdGV4dCxcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZChhcnRpY2xlVGl0bGUsIGFydGljbGVQZXJpb2QsIGFydGljbGVQb3NpdGlvbiwgYXJ0aWNsZUxvY2F0aW9uKTtcbiAgYm9keS5hcHBlbmQoYXJ0aWNsZVRleHQpO1xuICBhcnRpY2xlLmFwcGVuZChoZWFkZXIsIGJvZHkpO1xuICBpdGVtLmFwcGVuZChhcnRpY2xlKTtcbiAgcmV0dXJuIGl0ZW07XG59XG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL3JldHVybkVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5QZXJzb25hbERlc2NyaXB0aW9uVGV4dCgpIHtcbiAgY29uc3QgcGVyc29uYWxEZXNjcmlwdGlvblRleHQgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsncGVyc29uYWxfX2Rlc2NyLXRleHQnXSxcbiAgfSk7XG4gIGNvbnN0IHBlcnNvbmFsTmFtZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydwZXJzb25hbF9fbmFtZScsICdpbnRlcmFjdGl2ZSddLFxuICB9KTtcbiAgY29uc3QgcGVyc29uYWxGTmFtZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ3NwYW4nLFxuICAgIGNsYXNzZXM6IFsncGVyc29uYWxfX2ZuYW1lJ10sXG4gICAgdGV4dENvbnRlbnQ6ICfQkNC70LXQutGB0LXQuScsXG4gIH0pO1xuICBjb25zdCBiciA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2JyJyxcbiAgfSk7XG4gIGNvbnN0IHBlcnNvbmFsTE5hbWUgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBjbGFzc2VzOiBbJ3BlcnNvbmFsX19sbmFtZSddLFxuICAgIHRleHRDb250ZW50OiAn0JPQvtGA0LHQtdC90LrQvicsXG4gIH0pO1xuICBjb25zdCBwZXJzb25hbFBvc2l0aW9uID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ3BlcnNvbmFsX19wb3NpdGlvbicsICdpbnRlcmFjdGl2ZSddLFxuICAgIHRleHRDb250ZW50OiAnRnJvbnQtZW5kLdGA0LDQt9GA0LDQsdC+0YLRh9C40LonLFxuICB9KTtcblxuICBwZXJzb25hbE5hbWUuYXBwZW5kKHBlcnNvbmFsRk5hbWUsIGJyLCBwZXJzb25hbExOYW1lKTtcbiAgcGVyc29uYWxEZXNjcmlwdGlvblRleHQuYXBwZW5kKHBlcnNvbmFsTmFtZSwgcGVyc29uYWxQb3NpdGlvbik7XG5cbiAgcmV0dXJuIHBlcnNvbmFsRGVzY3JpcHRpb25UZXh0O1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi9yZXR1cm5FbGVtZW50JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGFnPzogc3RyaW5nO1xuICBjbGFzc2VzPzogc3RyaW5nW107XG4gIHdyYXBwZXJUYWc/OiBzdHJpbmc7XG4gIHdyYXBwZXJDbGFzc2VzPzogc3RyaW5nW107XG4gIGhlYWRlckNsYXNzZXM/OiBzdHJpbmdbXTtcbiAgZGVzY3JpcHRpb25DbGFzc2VzPzogc3RyaW5nW107XG4gIHRpdGxlPzogc3RyaW5nO1xuICBzdWJpdGxlPzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIHJlc3VsdE9iaiB7XG4gIHNlY3Rpb246IEhUTUxFbGVtZW50O1xuICBoZWFkZXI6IEhUTUxFbGVtZW50O1xuICBkZXNjcmlwdGlvbjogSFRNTEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVyblNlY3Rpb25PYmplY3QocHJvcHM6IFByb3BzKTogcmVzdWx0T2JqIHtcbiAgbGV0IHRhZyA9ICcnO1xuICBsZXQgY2xhc3NlcyA9IFsnc2VjdGlvbiddO1xuICBsZXQgd3JhcHBlclRhZyA9ICdzZWN0aW9uJztcbiAgbGV0IGRlc2NyaXB0aW9uQ2xhc3NlcyA9IFsnc2VjdGlvbl9fZGVzY3JpcHRpb24nLCAnc2VjdGlvbl9fYmxvY2snXTtcbiAgbGV0IGhlYWRlckNsYXNzZXMgPSBbJ3NlY3Rpb25fX2hlYWRlcicsICdzZWN0aW9uX19ibG9jayddO1xuICBsZXQgd3JhcHBlckNsYXNzZXMgPSBbJ3NlY3Rpb25fX3dyYXBwZXInLCAnd3JhcHBlciddO1xuICBpZiAocHJvcHMuY2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2xhc3NlcyA9IGNsYXNzZXMuY29uY2F0KHByb3BzLmNsYXNzZXMpO1xuICB9XG4gIGlmIChwcm9wcy5oZWFkZXJDbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICBoZWFkZXJDbGFzc2VzID0gaGVhZGVyQ2xhc3Nlcy5jb25jYXQocHJvcHMuaGVhZGVyQ2xhc3Nlcyk7XG4gIH1cbiAgaWYgKHByb3BzLmRlc2NyaXB0aW9uQ2xhc3NlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVzY3JpcHRpb25DbGFzc2VzID0gZGVzY3JpcHRpb25DbGFzc2VzLmNvbmNhdChwcm9wcy5kZXNjcmlwdGlvbkNsYXNzZXMpO1xuICB9XG4gIGlmIChwcm9wcy50YWcgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZyA9IHByb3BzLnRhZztcbiAgfSBlbHNlIHtcbiAgICB0YWcgPSAnZGl2JztcbiAgfVxuICBpZiAocHJvcHMud3JhcHBlclRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgd3JhcHBlclRhZyA9IHByb3BzLndyYXBwZXJUYWc7XG4gIH1cbiAgaWYgKHByb3BzLndyYXBwZXJDbGFzc2VzICE9PSB1bmRlZmluZWQpIHtcbiAgICB3cmFwcGVyQ2xhc3NlcyA9IHdyYXBwZXJDbGFzc2VzLmNvbmNhdChwcm9wcy53cmFwcGVyQ2xhc3Nlcyk7XG4gIH1cbiAgY29uc3Qgc2VjdGlvbiA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogdGFnLFxuICAgIGNsYXNzZXM6IGNsYXNzZXMsXG4gIH0pO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24nKTtcbiAgY29uc3Qgd3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogd3JhcHBlclRhZyxcbiAgICBjbGFzc2VzOiB3cmFwcGVyQ2xhc3NlcyxcbiAgfSk7XG4gIGNvbnN0IGhlYWRlciA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogaGVhZGVyQ2xhc3NlcyxcbiAgfSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBkZXNjcmlwdGlvbkNsYXNzZXMsXG4gIH0pO1xuICBpZiAoXG4gICAgcHJvcHMudGl0bGUgIT09IHVuZGVmaW5lZCAmJlxuICAgIHByb3BzLnN1Yml0bGUgIT09IHVuZGVmaW5lZCAmJlxuICAgIHByb3BzLmlkICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgY29uc3QgdGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICAgIHRhZzogJ2gyJyxcbiAgICAgIGNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19fdGl0bGUnLCAndGl0bGUnXSxcbiAgICAgIHRleHRDb250ZW50OiBwcm9wcy50aXRsZSxcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICB9KTtcbiAgICBjb25zdCBzdWJ0aXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgICAgdGFnOiAncCcsXG4gICAgICBjbGFzc2VzOiBbJ2FydGljbGUtYmxvY2tfX3N1YnRpdGxlJywgJ3RleHQnXSxcbiAgICAgIHRleHRDb250ZW50OiBwcm9wcy5zdWJpdGxlLFxuICAgIH0pO1xuICAgIGhlYWRlci5hcHBlbmQodGl0bGUsIHN1YnRpdGxlKTtcbiAgfVxuXG4gIHdyYXBwZXIuYXBwZW5kKGhlYWRlciwgZGVzY3JpcHRpb24pO1xuICBzZWN0aW9uLmFwcGVuZCh3cmFwcGVyKTtcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgc2VjdGlvbjogc2VjdGlvbixcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4vcmV0dXJuRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVyblNvY2lhbHMoKSB7XG4gIGNvbnN0IHNvY2lhbHMgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdzZWN0aW9uJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHMnXSxcbiAgfSk7XG4gIGNvbnN0IHNvY2lhbHNUaXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2gzJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHNfX3RpdGxlJ10sXG4gICAgdGV4dENvbnRlbnQ6ICfQodC+0YbQuNCw0LvRjNC90YvQtSDRgdC10YLQuCcsXG4gIH0pO1xuICBjb25zdCBsaW5rTEkgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdhJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHNfX2xpbmsnLCAnaW50ZXJhY3RpdmUnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxuICAgICAgICB2YWx1ZTogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9hbGV4ZXktZ29yYmVua28nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RhcmdldCcsXG4gICAgICAgIHZhbHVlOiAnX2JsYW5rJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG4gIGNvbnN0IGljb25MaSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydzb2NpYWxzX19pY29uJywgJ3NvY2lhbHNfX2ljb24tbGknXSxcbiAgfSk7XG4gIGNvbnN0IGxpbmtHSCA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2EnLFxuICAgIGNsYXNzZXM6IFsnc29jaWFsc19fbGluaycsICdpbnRlcmFjdGl2ZSddLFxuICAgIGF0dHJpYjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnaHJlZicsXG4gICAgICAgIHZhbHVlOiAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9hLXYtZ29yJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0YXJnZXQnLFxuICAgICAgICB2YWx1ZTogJ19ibGFuaycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBpY29uR0ggPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnc29jaWFsc19faWNvbicsICdzb2NpYWxzX19pY29uLWdoJ10sXG4gIH0pO1xuICBjb25zdCBsaW5rQ1cgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdhJyxcbiAgICBjbGFzc2VzOiBbJ3NvY2lhbHNfX2xpbmsnLCAnaW50ZXJhY3RpdmUnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxuICAgICAgICB2YWx1ZTogJ2h0dHBzOi8vd3d3LmNvZGV3YXJzLmNvbS91c2Vycy9hLXYtZ29yJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0YXJnZXQnLFxuICAgICAgICB2YWx1ZTogJ19ibGFuaycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBpY29uQ1cgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnc29jaWFsc19faWNvbicsICdzb2NpYWxzX19pY29uLWNvZGV3YXJzJ10sXG4gIH0pO1xuXG4gIGxpbmtMSS5hcHBlbmQoaWNvbkxpKTtcbiAgbGlua0dILmFwcGVuZChpY29uR0gpO1xuICBsaW5rQ1cuYXBwZW5kKGljb25DVyk7XG4gIHNvY2lhbHMuYXBwZW5kKHNvY2lhbHNUaXRsZSwgbGlua0xJLCBsaW5rR0gsIGxpbmtDVyk7XG4gIHJldHVybiBzb2NpYWxzO1xufVxuIiwiaW1wb3J0IHsgY2hhbmdlU2Nyb2xsQm9keSB9IGZyb20gJy4uL2NoYW5nZVNjcm9sbEJvZHknO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzIH0gZnJvbSAnLi4vY29tbW9uL3BhZ2VFbGVtZW50cyc7XG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuLi9jb21tb24vcmV0dXJuRWxlbWVudCc7XG5cbmZ1bmN0aW9uIHJldHVybk1lbnVFbGVtZW50KGxpbms6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZykge1xuICBjb25zdCBpdGVtQWJvdXQgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdsaScsXG4gICAgY2xhc3NlczogWydtZW51X19pdGVtJ10sXG4gIH0pO1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTAyMykge1xuICAgIGl0ZW1BYm91dC5jbGFzc0xpc3QuYWRkKCdpbnRlcmFjdGl2ZScpO1xuICB9XG5cbiAgY29uc3QgbGlua0Fib3V0ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnYScsXG4gICAgY2xhc3NlczogWydtZW51X19saW5rJywgJ2xpbmsnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxuICAgICAgICB2YWx1ZTogYCMke2xpbmt9YCxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB0ZXh0Q29udGVudDogZGVzY3JpcHRpb24sXG4gIH0pO1xuXG4gIGl0ZW1BYm91dC5hcHBlbmQobGlua0Fib3V0KTtcbiAgcmV0dXJuIGl0ZW1BYm91dDtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTWVudSgpIHtcbiAgY29uc3QgbWVudVdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnbWVudSddLFxuICB9KTtcblxuICBjb25zdCBtZW51ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnbmF2JyxcbiAgICBjbGFzc2VzOiBbJ21lbnVfX25hdiddLFxuICB9KTtcblxuICBjb25zdCBpbnB1dENoZWNrQm94ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnaW5wdXQnLFxuICAgIGNsYXNzZXM6IFsnbWVudV9faW5wdXQnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHsgbmFtZTogJ2lkJywgdmFsdWU6ICdtZW51LWlucHV0JyB9LFxuICAgICAgeyBuYW1lOiAndHlwZScsIHZhbHVlOiAnY2hlY2tib3gnIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgcGFnZUVsZW1lbnRzLm1lbnVDaGVja2JveCA9IGlucHV0Q2hlY2tCb3g7XG5cbiAgY29uc3QgYnVyZ2VyQnV0dG9uID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnbGFiZWwnLFxuICAgIGNsYXNzZXM6IFsnbWVudV9fbGFiZWwnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZvcicsXG4gICAgICAgIHZhbHVlOiAnbWVudS1pbnB1dCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIHBhZ2VFbGVtZW50cy5tZW51QnRuID0gYnVyZ2VyQnV0dG9uO1xuXG4gIGNvbnN0IGJ1cmdlckljb24gPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBjbGFzc2VzOiBbJ21lbnVfX2ljb24nXSxcbiAgfSk7XG5cbiAgY29uc3QgbmF2TGlzdCA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ3VsJyxcbiAgICBjbGFzc2VzOiBbJ21lbnVfX2xpc3QnLCAnbWVudS1saXN0J10sXG4gIH0pO1xuXG4gIHBhZ2VFbGVtZW50cy5tZW51TGlzdCA9IG5hdkxpc3Q7XG5cbiAgY29uc3QgaXRlbUludHJvID0gcmV0dXJuTWVudUVsZW1lbnQoJ2Fib3V0JywgJ9CeINGB0LXQsdC1Jyk7XG4gIGNvbnN0IGl0ZW1FeHBlcnRpc2UgPSByZXR1cm5NZW51RWxlbWVudCgnZXhwZXJ0aXNlJywgJ9CX0L3QsNC90LjRjycpO1xuICBjb25zdCBpdGVtU2tpbGxzID0gcmV0dXJuTWVudUVsZW1lbnQoJ3NraWxscycsICfQndCw0LLRi9C60LgnKTtcbiAgY29uc3QgaXRlbUV4cGVyaWVuY2UgPSByZXR1cm5NZW51RWxlbWVudCgnZXhwZXJpZW5jZScsICfQntC/0YvRgicpO1xuICBjb25zdCBpdGVtRWR1Y2F0aW9uID0gcmV0dXJuTWVudUVsZW1lbnQoJ2VkdWNhdGlvbicsICfQntCx0YDQsNC30L7QstCw0L3QuNC1Jyk7XG4gIGNvbnN0IGl0ZW1Qb3J0Zm9saW8gPSByZXR1cm5NZW51RWxlbWVudCgncG9ydGZvbGlvJywgJ9Cf0L7RgNGC0YTQvtC70LjQvicpO1xuICBjb25zdCBpdGVtQ29udGFjdHMgPSByZXR1cm5NZW51RWxlbWVudCgnY29udGFjdHMnLCAn0JrQvtC90YLQsNC60YLRiycpO1xuXG4gIGNvbnN0IHRoZW1lQnRuID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ3RoZW1lLWJ0bicsICdpbnRlcmFjdGl2ZSddLFxuICB9KTtcblxuICBwYWdlRWxlbWVudHMudGhlbWVCdG4gPSB0aGVtZUJ0bjtcblxuICBjb25zdCBzdWJzdHJhdGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnbWVudV9fc3Vic3RyYXRlJ10sXG4gIH0pO1xuXG4gIHBhZ2VFbGVtZW50cy5zdWJzdHJhdGUgPSBzdWJzdHJhdGU7XG4gIG5hdkxpc3QuYXBwZW5kKFxuICAgIGl0ZW1JbnRybyxcbiAgICBpdGVtRXhwZXJ0aXNlLFxuICAgIGl0ZW1Ta2lsbHMsXG4gICAgaXRlbUV4cGVyaWVuY2UsXG4gICAgaXRlbUVkdWNhdGlvbixcbiAgICBpdGVtUG9ydGZvbGlvLFxuICAgIGl0ZW1Db250YWN0c1xuICApO1xuICBidXJnZXJCdXR0b24uYXBwZW5kKGJ1cmdlckljb24pO1xuICBtZW51LmFwcGVuZChpbnB1dENoZWNrQm94LCBidXJnZXJCdXR0b24sIG5hdkxpc3QsIHN1YnN0cmF0ZSk7XG4gIG1lbnVXcmFwcGVyLmFwcGVuZChtZW51LCB0aGVtZUJ0bik7XG5cbiAgcmV0dXJuIG1lbnVXcmFwcGVyO1xufVxuXG5mdW5jdGlvbiBjbG9zZUJ1cmdlck1lbnUoKSB7XG4gIGNvbnN0IGNoZWNrYm94ID0gPEhUTUxJbnB1dEVsZW1lbnQ+cGFnZUVsZW1lbnRzLm1lbnVDaGVja2JveDtcbiAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICBjaGFuZ2VTY3JvbGxCb2R5KCk7XG59XG5cbmV4cG9ydCB7IHJldHVybk1lbnUsIGNsb3NlQnVyZ2VyTWVudSB9O1xuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi4vY29tbW9uL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IGltZ0F2YXRhciBmcm9tICcuLi8uLi9pbWcvYXZhdGFyLmpwZyc7XG5pbXBvcnQgcmV0dXJuUGVyc29uYWxEZXNjcmlwdGlvblRleHQgZnJvbSAnLi4vY29tbW9uL3JldHVyblBlcnNvbmFsRGVzY3JpcHRpb25UZXh0JztcbmltcG9ydCByZXR1cm5Tb2NpYWxzIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Tb2NpYWxzJztcbmltcG9ydCByZXR1cm5Db250YWN0cyBmcm9tICcuLi9jb21tb24vcmV0dXJuQ29udGFjdHMnO1xuaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzIH0gZnJvbSAnLi4vY29tbW9uL3BhZ2VFbGVtZW50cyc7XG5pbXBvcnQgeyByZXR1cm5NZW51IH0gZnJvbSAnLi9tZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXJPYmplY3QgPSByZXR1cm5TZWN0aW9uT2JqZWN0KHtcbiAgICB0YWc6ICdoZWFkZXInLFxuICAgIGNsYXNzZXM6IFsnaGVhZGVyJ10sXG4gICAgd3JhcHBlclRhZzogJ2FydGljbGUnLFxuICAgIHdyYXBwZXJDbGFzc2VzOiBbJ2hlYWRlcl9fd3JhcHBlcicsICdwZXJzb25hbCddLFxuICAgIGhlYWRlckNsYXNzZXM6IFsnaGVhZGVyX19oZWFkZXInLCAnaW50ZXJhY3RpdmUnXSxcbiAgICBkZXNjcmlwdGlvbkNsYXNzZXM6IFsnaGVhZGVyX19kZXNjcmlwdGlvbiddLFxuICB9KTtcblxuICBjb25zdCB0aXRsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2gyJyxcbiAgICBjbGFzc2VzOiBbJ3NlY3Rpb25fX3RpdGxlJ10sXG4gICAgdGV4dENvbnRlbnQ6ICfQm9C40YfQvdCw0Y8g0LjQvdGE0L7RgNC80LDRhtC40Y8nLFxuICB9KTtcbiAgY29uc3QgcGhvdG8gPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdpbWcnLFxuICAgIGNsYXNzZXM6IFsnaGVhZGVyX19waG90byddLFxuICAgIHNyYzogaW1nQXZhdGFyLFxuICAgIGF0dHJpYjogW3sgbmFtZTogJ2FsdCcsIHZhbHVlOiAn0JAu0JPQvtGA0LHQtdC90LrQvicgfV0sXG4gIH0pO1xuICBoZWFkZXJPYmplY3QuaGVhZGVyLmFwcGVuZCh0aXRsZSwgcGhvdG8pO1xuXG4gIGNvbnN0IHBlcnNvbmFsV3JhcHBlciA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NlczogWydoZWFkZXJfX2Rlc2NyLXdyYXBwZXInLCAncGVyc29uYWxfX3dyYXBwZXInXSxcbiAgfSk7XG4gIGNvbnN0IHBlcnNvbmFsRGVzY3JpcHRpb25UZXh0ID0gcmV0dXJuUGVyc29uYWxEZXNjcmlwdGlvblRleHQoKTtcbiAgY29uc3QgaGVhZGVyU29jaWFscyA9IHJldHVyblNvY2lhbHMoKTtcbiAgaGVhZGVyU29jaWFscy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX3NvY2lhbHMnKTtcbiAgY29uc3QgaGVhZGVyQ29udGFjdHMgPSByZXR1cm5Db250YWN0cygpO1xuICBoZWFkZXJDb250YWN0cy5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfX2NvbnRhY3RzJyk7XG5cbiAgY29uc3QgbWVudSA9IHJldHVybk1lbnUoKTtcbiAgaGVhZGVyT2JqZWN0LmRlc2NyaXB0aW9uLmFwcGVuZChtZW51KTtcblxuICBwZXJzb25hbFdyYXBwZXIuYXBwZW5kKFxuICAgIHBlcnNvbmFsRGVzY3JpcHRpb25UZXh0LFxuICAgIGhlYWRlclNvY2lhbHMsXG4gICAgaGVhZGVyQ29udGFjdHNcbiAgKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGhlYWRlck9iamVjdC5kZXNjcmlwdGlvbjtcbiAgZGVzY3JpcHRpb24uYXBwZW5kKHBlcnNvbmFsV3JhcHBlcik7XG4gIHBhZ2VFbGVtZW50cy5oZWFkZXIgPSBoZWFkZXJPYmplY3Quc2VjdGlvbjtcblxuICByZXR1cm4gaGVhZGVyT2JqZWN0LnNlY3Rpb247XG59XG4iLCJpbXBvcnQgeyBwYWdlRWxlbWVudHMgfSBmcm9tICcuLi9jb21tb24vcGFnZUVsZW1lbnRzJztcbmltcG9ydCB7IGhpZGVTa2lsbHMsIHNob3dTa2lsbHMgfSBmcm9tICcuL3NraWxscyc7XG5pbXBvcnQgeyBoaWRlRm9vdGVyLCBoaWRlSGVhZGVyLCBzaG93Rm9vdGVyLCBzaG93SGVhZGVyIH0gZnJvbSAnLi92aXNpYmxlJztcblxuZnVuY3Rpb24gbWFrZUVsZW1lbnRJbnRlcmFjdGl2ZShcbiAgZWxlbTogSFRNTEVsZW1lbnQsXG4gIGZ1bmNTaG93OiAoKSA9PiB2b2lkLFxuICBmdW5jSGlkZTogKCkgPT4gdm9pZFxuKSB7XG4gIGNvbnN0IGRvbVJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBpZiAoZWxlbSA9PT0gcGFnZUVsZW1lbnRzLmhlYWRlcikge1xuICAgIGlmIChkb21SZWN0LmJvdHRvbSA+PSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB7XG4gICAgICBmdW5jU2hvdygpO1xuICAgIH0gZWxzZSBpZiAoZG9tUmVjdC5ib3R0b20gPD0gMCkge1xuICAgICAgZnVuY0hpZGUoKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZWxlbSA9PT0gcGFnZUVsZW1lbnRzLmZvb3Rlcikge1xuICAgIGlmIChkb21SZWN0LnRvcCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB7XG4gICAgICBmdW5jU2hvdygpO1xuICAgIH0gZWxzZSBpZiAoZG9tUmVjdC50b3AgPj0gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICBmdW5jSGlkZSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZG9tUmVjdC50b3AgPD0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAmJiBkb21SZWN0LmJvdHRvbSA+PSAwKSB7XG4gICAgICBmdW5jU2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jSGlkZSgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ludGVyYWN0aXZlKCkge1xuICBjb25zdCBbaGVhZGVyLCBmb290ZXIsIHNraWxsc10gPSBbXG4gICAgcGFnZUVsZW1lbnRzLmhlYWRlcixcbiAgICBwYWdlRWxlbWVudHMuZm9vdGVyLFxuICAgIHBhZ2VFbGVtZW50cy5za2lsbHMsXG4gIF07XG4gIG1ha2VFbGVtZW50SW50ZXJhY3RpdmUoaGVhZGVyLCBzaG93SGVhZGVyLCBoaWRlSGVhZGVyKTtcbiAgbWFrZUVsZW1lbnRJbnRlcmFjdGl2ZShmb290ZXIsIHNob3dGb290ZXIsIGhpZGVGb290ZXIpO1xuICBtYWtlRWxlbWVudEludGVyYWN0aXZlKHNraWxscywgc2hvd1NraWxscywgaGlkZVNraWxscyk7XG59XG5cbmV4cG9ydCB7IGNoZWNrSW50ZXJhY3RpdmUgfTtcbiIsImltcG9ydCB7IHBhZ2VFbGVtZW50cyB9IGZyb20gJy4uL2NvbW1vbi9wYWdlRWxlbWVudHMnO1xuXG5mdW5jdGlvbiBjaGVja1NraWxsUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgY29uc3QgZG9tUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGlmIChkb21SZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9tUmVjdC50b3AgPj0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93U2tpbGxzUHJvZ3Jlc3Moc2hvdzogYm9vbGVhbiwgZGF0YUFycj86IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHNraWxsc1Byb2dyZXNzQmFyczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPVxuICAgIHBhZ2VFbGVtZW50cy5za2lsbHMucXVlcnlTZWxlY3RvckFsbCgnLml0ZW1fX3Byb2dyZXNzJyk7XG4gIHNraWxsc1Byb2dyZXNzQmFycy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChzaG93ICYmIGRhdGFBcnIgJiYgY2hlY2tTa2lsbFBvc2l0aW9uKGl0ZW0pKSB7XG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhQXJyW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICcwJyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuUGVyY2VudHMoKTogc3RyaW5nW10ge1xuICBjb25zdCBwcm9ncmVzc05vZGVMaXN0ID1cbiAgICBwYWdlRWxlbWVudHMuc2tpbGxzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtX19wZXJjZW50Jyk7XG4gIGNvbnN0IHBlcmNlbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBwcm9ncmVzc05vZGVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBwZXJjZW50OiBzdHJpbmcgPSA8c3RyaW5nPml0ZW0udGV4dENvbnRlbnQ7XG4gICAgcGVyY2VudHMucHVzaChwZXJjZW50KTtcbiAgfSk7XG4gIHJldHVybiBwZXJjZW50cztcbn1cblxuZnVuY3Rpb24gc2hvd1NraWxscygpIHtcbiAgY29uc3QgcGVyY2VudHMgPSByZXR1cm5QZXJjZW50cygpO1xuICBzaG93U2tpbGxzUHJvZ3Jlc3ModHJ1ZSwgcGVyY2VudHMpO1xufVxuXG5mdW5jdGlvbiBoaWRlU2tpbGxzKCkge1xuICBzaG93U2tpbGxzUHJvZ3Jlc3MoZmFsc2UpO1xufVxuXG5leHBvcnQgeyBoaWRlU2tpbGxzLCBzaG93U2tpbGxzIH07XG4iLCJpbXBvcnQgeyBwYWdlRWxlbWVudHMgfSBmcm9tICcuLi9jb21tb24vcGFnZUVsZW1lbnRzJztcblxuZnVuY3Rpb24gbWFrZU5vZGVzVmlzaWJsZShub2RlczogTm9kZUxpc3QpIHtcbiAgbGV0IHRpbWVUb1dhaXQgPSAwO1xuICBub2Rlcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZnVuY3Rpb24gc2hvd0VsZW1lbnQoKSB7XG4gICAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZWxlbWVudDtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludGVyYWN0aXZlX3VuYWN0aXZlJyk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoc2hvd0VsZW1lbnQsIHRpbWVUb1dhaXQpO1xuICAgIHRpbWVUb1dhaXQgKz0gMTAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnRlcmFjdGl2ZV91bmFjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5QYWdlRWxlbWVudHMoKTogSFRNTEVsZW1lbnRbXSB7XG4gIHJldHVybiBbcGFnZUVsZW1lbnRzLmhlYWRlciwgcGFnZUVsZW1lbnRzLmZvb3Rlcl07XG59XG5cbmZ1bmN0aW9uIGhpZGVFbGVtZW50cyhwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IFtoZWFkZXIsIGZvb3Rlcl0gPSByZXR1cm5QYWdlRWxlbWVudHMoKTtcbiAgbGV0IGVsZW1lbnRzVG9IaWRlOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PjtcbiAgaWYgKHBhcmFtID09PSAnaGVhZGVyJykge1xuICAgIGVsZW1lbnRzVG9IaWRlID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmFjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnRzVG9IaWRlID0gZm9vdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnRlcmFjdGl2ZScpO1xuICB9XG4gIGVsZW1lbnRzVG9IaWRlLmZvckVhY2goKGVsZW1lbnQpID0+IGhpZGVFbGVtZW50KGVsZW1lbnQpKTtcbn1cblxuZnVuY3Rpb24gc2hvd0VsZW1lbnRzKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3QgW2hlYWRlciwgZm9vdGVyXSA9IHJldHVyblBhZ2VFbGVtZW50cygpO1xuICBsZXQgZWxlbWVudHNUb0hpZGU6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+O1xuICBpZiAocGFyYW0gPT09ICdoZWFkZXInKSB7XG4gICAgZWxlbWVudHNUb0hpZGUgPSBoZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnLmludGVyYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudHNUb0hpZGUgPSBmb290ZXIucXVlcnlTZWxlY3RvckFsbCgnLmludGVyYWN0aXZlJyk7XG4gIH1cbiAgbWFrZU5vZGVzVmlzaWJsZShlbGVtZW50c1RvSGlkZSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVIZWFkZXIoKSB7XG4gIGhpZGVFbGVtZW50cygnaGVhZGVyJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dIZWFkZXIoKSB7XG4gIHNob3dFbGVtZW50cygnaGVhZGVyJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVGb290ZXIoKSB7XG4gIGhpZGVFbGVtZW50cygnZm9vdGVyJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dGb290ZXIoKSB7XG4gIHNob3dFbGVtZW50cygnZm9vdGVyJyk7XG59XG5cbmV4cG9ydCB7IGhpZGVIZWFkZXIsIHNob3dIZWFkZXIsIGhpZGVGb290ZXIsIHNob3dGb290ZXIgfTtcbiIsImltcG9ydCB7IHBhZ2VFbGVtZW50cyB9IGZyb20gJy4uL2NvbW1vbi9wYWdlRWxlbWVudHMnO1xuaW1wb3J0IHJldHVybkNvbnRhY3RzIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Db250YWN0cyc7XG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuLi9jb21tb24vcmV0dXJuRWxlbWVudCc7XG5pbXBvcnQgcmV0dXJuUGVyc29uYWxEZXNjcmlwdGlvblRleHQgZnJvbSAnLi4vY29tbW9uL3JldHVyblBlcnNvbmFsRGVzY3JpcHRpb25UZXh0JztcbmltcG9ydCByZXR1cm5TZWN0aW9uT2JqZWN0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0JztcbmltcG9ydCByZXR1cm5Tb2NpYWxzIGZyb20gJy4uL2NvbW1vbi9yZXR1cm5Tb2NpYWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuQ29udGFjdFNlY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRhY3RzU2VjdGlvbk9iamVjdCA9IHJldHVyblNlY3Rpb25PYmplY3Qoe1xuICAgIHdyYXBwZXJDbGFzc2VzOiBbJ2FydGljbGUtYmxvY2snLCAnY29udGFjdC1zZWN0aW9uJywgJ3BlcnNvbmFsJ10sXG4gICAgaGVhZGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrX19oZWFkZXInLCAnY29udGFjdC1zZWN0aW9uX19oZWFkZXInXSxcbiAgICB0aXRsZTogJ9Ca0L7QvdGC0LDQutGC0YsnLFxuICAgIHN1Yml0bGU6ICfQmtCw0Log0YHQviDQvNC90L7QuSDRgdCy0Y/Qt9Cw0YLRjNGB0Y8uJyxcbiAgICBkZXNjcmlwdGlvbkNsYXNzZXM6IFsnY29udGFjdC1zZWN0aW9uX19kZXNjcmlwdGlvbiddLFxuICAgIGlkOiAnY29udGFjdHMnLFxuICB9KTtcblxuICBjb25zdCBmb290ZXJDb250YWN0cyA9IHJldHVybkNvbnRhY3RzKCk7XG4gIGZvb3RlckNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbl9fY29udGFjdHMnKTtcbiAgY29uc3QgZm9vdGVyQXJ0aWNsZSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2FydGljbGUnLFxuICAgIGNsYXNzZXM6IFsnc2VjdGlvbl9fd3JhcHBlcicsICdwZXJzb25hbCddLFxuICB9KTtcbiAgY29uc3QgZm9vdGVyQXJ0aWNsZVRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnaDInLFxuICAgIGNsYXNzZXM6IFsnc2VjdGlvbl9fdGl0bGUnXSxcbiAgICB0ZXh0Q29udGVudDogJ1BlcnNvbmFsIGluZm8nLFxuICB9KTtcbiAgY29uc3QgcGVyc29uYWxXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ3BlcnNvbmFsX193cmFwcGVyJ10sXG4gIH0pO1xuICBjb25zdCBwZXJzb25hbERlc2NyaXB0aW9uVGV4dCA9IHJldHVyblBlcnNvbmFsRGVzY3JpcHRpb25UZXh0KCk7XG4gIGNvbnN0IHNvY2lhbHMgPSByZXR1cm5Tb2NpYWxzKCk7XG5cbiAgcGVyc29uYWxXcmFwcGVyLmFwcGVuZChwZXJzb25hbERlc2NyaXB0aW9uVGV4dCwgc29jaWFscyk7XG4gIGZvb3RlckFydGljbGUuYXBwZW5kKGZvb3RlckFydGljbGVUaXRsZSwgcGVyc29uYWxXcmFwcGVyKTtcbiAgY29udGFjdHNTZWN0aW9uT2JqZWN0LmRlc2NyaXB0aW9uLmFwcGVuZChmb290ZXJDb250YWN0cywgZm9vdGVyQXJ0aWNsZSk7XG4gIHBhZ2VFbGVtZW50cy5mb290ZXIgPSBjb250YWN0c1NlY3Rpb25PYmplY3Quc2VjdGlvbjtcbiAgcmV0dXJuIGNvbnRhY3RzU2VjdGlvbk9iamVjdC5zZWN0aW9uO1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi4vY29tbW9uL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IHJldHVybkV2b2x1dGlvbkl0ZW0gZnJvbSAnLi4vY29tbW9uL3JldHVybkV2b2x1dGlvbkl0ZW0nO1xuaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5FZHVjYXRpb25TZWN0aW9uKCkge1xuICBjb25zdCBlZHVjYXRpb25TZWN0aW9uT2JqZWN0ID0gcmV0dXJuU2VjdGlvbk9iamVjdCh7XG4gICAgd3JhcHBlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9jaycsICdlZHVjYXRpb24nXSxcbiAgICBoZWFkZXJDbGFzc2VzOiBbJ2FydGljbGUtYmxvY2tfX2hlYWRlcicsICdlZHVjYXRpb25fX2hlYWRlciddLFxuICAgIGRlc2NyaXB0aW9uQ2xhc3NlczogWydlZHVjYXRpb25fX2Rlc2NyaXB0aW9uJ10sXG4gICAgdGl0bGU6ICfQntCx0YDQsNC30L7QstCw0L3QuNC1JyxcbiAgICBzdWJpdGxlOiAnU2NpbyBtZSBuaWhpbCBzY2lyZS4nLFxuICAgIGlkOiAnZWR1Y2F0aW9uJyxcbiAgfSk7XG4gIGNvbnN0IGxpc3QgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICd1bCcsXG4gICAgY2xhc3NlczogW1xuICAgICAgJ2FydGljbGUtYmxvY2tfX3VsJyxcbiAgICAgICd1bm9yZC1saXN0JyxcbiAgICAgICdsaXN0JyxcbiAgICAgICdldm9sdXRpb24tdWwnLFxuICAgICAgJ2VkdWNhdGlvbl9fdWwnLFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCByc3NNYWluSXRlbSA9IHJldHVybkV2b2x1dGlvbkl0ZW0oXG4gICAgJ1JvbGxpbmcgU2NvcGVzIFNjaG9vbCcsXG4gICAgJzIwMjMnLFxuICAgICdKUy9Gcm9udGVuZCBEZXZlbG9wbWVudCBDb3Vyc2UuJyxcbiAgICAn0JTQuNGB0YLQsNC90YbQuNC+0L3QvdC+JyxcbiAgICAnR2l0LCBHaXRIdWIsINC+0YTQvtGA0LzQu9C10L3QuNC1INC60L7QvNC80LjRgtC+0LIg0Lgg0L/Rg9C70Lsg0YDQtdC60LLQtdGB0YLQvtCyLiDQkNC00LDQv9GC0LjQstC90LDRjyDQstC10YDRgdGC0LrQsC4gQ29yZSBKUy4g0JDQu9Cz0L7RgNC40YLQvNC40YfQtdGB0LrQuNC1INC30LDQtNCw0YfQuC4gRE9NLCBET00gRXZlbnRzLCBCcm93c2VyIEFQSS4g0J7RgdC90L7QstGLIE5vZGVKUy4gV2VicGFjay4gVHlwZVNjcmlwdC4g0KDQsNC30YDQsNCx0L7RgtC60LAgVUkt0LrQvtC80L/QvtC90LXQvdGC0L7Qsi4g0KLQtdGF0L3QuNGH0LXRgdC60L7QtSDQuNC90YLQtdGA0LLRjNGOLiDQoNCw0LfRgNCw0LHQvtGC0LrQsCDQsiDQutC+0LzQsNC90LTQtS4nLFxuICAgIHRydWVcbiAgKTtcbiAgY29uc3QgcnNzUHJlSXRlbSA9IHJldHVybkV2b2x1dGlvbkl0ZW0oXG4gICAgJ1JvbGxpbmcgU2NvcGVzIFNjaG9vbCcsXG4gICAgJzIwMjInLFxuICAgICdKUy9Gcm9udGVuZC3RgNCw0LfRgNCw0LHQvtGC0LrQsC4g0J/QvtC00LPQvtGC0L7QstC40YLQtdC70YzQvdGL0Lkg0Y3RgtCw0L8uJyxcbiAgICAn0JTQuNGB0YLQsNC90YbQuNC+0L3QvdC+JyxcbiAgICAn0JfQvdCw0LrQvtC80YHRgtCy0L4g0YEg0YHQuNGB0YLQtdC80L7QuSDQutC+0L3RgtGA0L7Qu9GPINCy0LXRgNGB0LjQuSBHaXQuIENocm9tZSBEZXYgVG9vbHMsIFZTIENvZGUsIFRlcm1pbmFsLiDQntGB0L3QvtCy0YsgSFRNTC4g0J7RgdC90L7QstGLIENTUy4g0JfQvdCw0LrQvtC80YHRgtCy0L4g0YEgSmF2YVNjcmlwdC4gRE9NIEFQSS4gRE9NIEV2ZW50cy4g0JDQu9Cz0L7RgNC40YLQvNGLINC4INCh0YLRgNGD0LrRgtGD0YDRiyDQlNCw0L3QvdGL0YUuJyxcbiAgICB0cnVlXG4gICk7XG4gIGNvbnN0IHJrcmlwdEl0ZW0gPSByZXR1cm5Fdm9sdXRpb25JdGVtKFxuICAgICfQoNC+0YHRgtC+0LLRgdC60LjQuS3QvdCwLdCU0L7QvdGDINC60L7Qu9C70LXQtNC2INGA0LDQtNC40L7RjdC70LXQutGC0YDQvtC90LjQutC4LCDQuNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9GFINC4INC/0YDQvtC80YvRiNC70LXQvdC90YvRhSDRgtC10YXQvdC+0LvQvtCz0LjQuScsXG4gICAgJzIwMTYg4oCTIDIwMjAnLFxuICAgICfQn9GA0L7Qs9GA0LDQvNC80LjRgdGCJyxcbiAgICAn0KDQvtGB0YLQvtCyLdC90LAt0JTQvtC90YMnLFxuICAgICfQmNC90YTQvtGA0LzQsNGG0LjQvtC90L3Ri9C1INGC0LXRhdC90L7Qu9C+0LPQuNC4LiDQntGB0L3QvtCy0Ysg0L/RgNC+0LXQutGC0LjRgNC+0LLQsNC90LjRjyDQsdCw0Lcg0LTQsNC90L3Ri9GFLiDQp9C40YHQu9C10L3QvdGL0LUg0LzQtdGC0L7QtNGLLiDQmtC+0LzQv9GM0Y7RgtC10YDQvdGL0LUg0YHQtdGC0LguINCc0LXQvdC10LTQttC80LXQvdGCINCyINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtC5INC00LXRj9GC0LXQu9GM0L3QvtGB0YLQuC4g0J7RgdC90L7QstGLINGE0LjQvdCw0L3RgdC+0LLQvtC5INCz0YDQsNC80L7RgtC90L7RgdGC0Lgg0Lgg0L/RgNC10LTQv9GA0LjQvdC40LzQsNGC0LXQu9GM0YHRgtCy0LAuINCa0L7QvNC/0YzRjtGC0LXRgNC90LDRjyDQs9GA0LDRhNC40LrQsC4nLFxuICAgIHRydWVcbiAgKTtcbiAgY29uc3Qga21pZG9JdGVtID0gcmV0dXJuRXZvbHV0aW9uSXRlbShcbiAgICAn0JrRgNCw0YHQvdC+0LTQsNGA0YHQutC40Lkg0LzQvdC+0LPQvtC/0YDQvtGE0LjQu9GM0L3Ri9C5INC40L3RgdGC0LjRgtGD0YIg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7Qs9C+INC+0LHRgNCw0LfQvtCy0LDQvdC40Y8nLFxuICAgICcyMDE5JyxcbiAgICAn0JjQvdC20LXQvdC10YAt0L/RgNC+0LPRgNCw0LzQvNC40YHRgicsXG4gICAgJ9CU0LjRgdGC0LDQvdGG0LjQvtC90L3QvicsXG4gICAgJ9Ca0YPRgNGBINC/0YDQvtGE0LXRgdGB0LjQvtC90LDQu9GM0L3QvtC5INC/0LXRgNC10L/QvtC00LPQvtGC0L7QstC60LguINCd0L7RgNC80LDRgtC40LLQvdC+LdC/0YDQsNCy0L7QstC+0LUg0YDQtdCz0YPQu9C40YDQvtCy0LDQvdC40LUg0Lgg0LfQsNC60L7QvdC+0LTQsNGC0LXQu9GM0L3QsNGPINCx0LDQt9CwINCyINGB0YTQtdGA0LUg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDQuCDQutC+0LzQv9GM0Y7RgtC10YDQvdGL0YUg0YLQtdGF0L3QvtC70L7Qs9C40LkuINCR0LDQt9C+0LLRi9C5INCw0L3Qs9C70LjQudGB0LrQuNC5INGP0LfRi9C6INC00LvRjyDRgtC10YXQvdC40YfQtdGB0LrQvtC5INC00L7QutGD0LzQtdC90YLQsNGG0LjQuC4g0JLQstC10LTQtdC90LjQtSDQsiDQv9GA0L7Qs9GA0LDQvNC80LjRgNC+0LLQsNC90LjQtS4g0KDQsNC30YDQsNCx0L7RgtC60LAgV2ViLdC/0YDQuNC70L7QttC10L3QuNC5INC90LAg0LHQsNC30LUgSFRNTDUsIENTUzMsIEphdmFTY3JpcHQuJyxcbiAgICB0cnVlXG4gICk7XG5cbiAgbGlzdC5hcHBlbmQocnNzTWFpbkl0ZW0sIHJzc1ByZUl0ZW0sIHJrcmlwdEl0ZW0sIGttaWRvSXRlbSk7XG4gIGVkdWNhdGlvblNlY3Rpb25PYmplY3QuZGVzY3JpcHRpb24uYXBwZW5kKGxpc3QpO1xuICByZXR1cm4gZWR1Y2F0aW9uU2VjdGlvbk9iamVjdC5zZWN0aW9uO1xufVxuIiwiaW1wb3J0IHJldHVybkVsZW1lbnQgZnJvbSAnLi4vY29tbW9uL3JldHVybkVsZW1lbnQnO1xuaW1wb3J0IHJldHVybkV2b2x1dGlvbkl0ZW0gZnJvbSAnLi4vY29tbW9uL3JldHVybkV2b2x1dGlvbkl0ZW0nO1xuaW1wb3J0IHJldHVyblNlY3Rpb25PYmplY3QgZnJvbSAnLi4vY29tbW9uL3JldHVyblNlY3Rpb25PYmplY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5FeHBlcmllbmNlU2VjdGlvbigpIHtcbiAgY29uc3QgZXhwZXJpZW5jZVNlY3Rpb25PYmplY3QgPSByZXR1cm5TZWN0aW9uT2JqZWN0KHtcbiAgICB3cmFwcGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrJywgJ2V4cGVyaWVuY2UnXSxcbiAgICBoZWFkZXJDbGFzc2VzOiBbJ2FydGljbGUtYmxvY2tfX2hlYWRlcicsICdleHBlcmllbmNlX19oZWFkZXInXSxcbiAgICBkZXNjcmlwdGlvbkNsYXNzZXM6IFsnZXhwZXJpZW5jZV9fZGVzY3JpcHRpb24nXSxcbiAgICB0aXRsZTogJ9Ce0L/Ri9GCJyxcbiAgICBzdWJpdGxlOiAnUGVyIGFzcGVyYSBhZCBhc3RyYS4nLFxuICAgIGlkOiAnZXhwZXJpZW5jZScsXG4gIH0pO1xuXG4gIGNvbnN0IGxpc3QgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICd1bCcsXG4gICAgY2xhc3NlczogW1xuICAgICAgJ2FydGljbGUtYmxvY2tfX3VsJyxcbiAgICAgICd1bm9yZC1saXN0JyxcbiAgICAgICdsaXN0JyxcbiAgICAgICdldm9sdXRpb24tdWwnLFxuICAgICAgJ2V4cGVyaWVuY2VfX3VsJyxcbiAgICBdLFxuICB9KTtcblxuICBjb25zdCBwZXRQcm9qZWN0c0l0ZW0gPSByZXR1cm5Fdm9sdXRpb25JdGVtKFxuICAgICfQn9C10YLQv9GA0L7QtdC60YLRiycsXG4gICAgJzIwMjEg4oCTINCd0LDRgdGC0L7Rj9GJ0LXQtSDQstGA0LXQvNGPJyxcbiAgICAnRnJvbnQtZW5kLdGA0LDQt9GA0LDQsdC+0YLRh9C40LonLFxuICAgICfQoNC+0YHRgtC+0LIt0L3QsC3QlNC+0L3RgycsXG4gICAgJ9Cf0YDQuNC80LXQvdC10L3QuNC1INC90LAg0L/RgNCw0LrRgtC40LrQtSDQt9C90LDQvdC40LksINC+0YLRgtCw0YfQuNCy0LDQvdC40LUg0L3QsNCy0YvQutC+0LIg0LLQtdGA0YHRgtC60LguINCf0YDQuNC80LXQvdC10L3QuNC1INC90L7QstGL0YUg0YHRgtCw0L3QtNCw0YDRgtC+0LIsINGB0L7QstGA0LXQvNC10L3QvdGL0YUg0L3QsNC/0YDQsNCy0LvQtdC90LjQuSDQsiDRgNCw0LfRgNCw0LHQvtGC0LrQtSDQstC10LEt0L/RgNC40LvQvtC20LXQvdC40LkuJyxcbiAgICBmYWxzZVxuICApO1xuICBjb25zdCBrbXZJdGVtID0gcmV0dXJuRXZvbHV0aW9uSXRlbShcbiAgICAn0J7QntCeIMKr0JrQnNCSLdCh0LXRgNCy0LjRgcK7JyxcbiAgICAnMjAxOSDigJMg0J3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8nLFxuICAgICfQodC40YHRgtC10LzQvdGL0Lkg0LDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YAnLFxuICAgICfQoNC+0YHRgtC+0LIt0L3QsC3QlNC+0L3RgycsXG4gICAgJ9Ci0LXRhdC90LjRh9C10YHQutC+0LUg0L7QsdGB0LvRg9C20LjQstCw0L3QuNC1INC60L7QvNC/0YzRjtGC0LXRgNC90L7QuSDQuCDQvtGA0LPRgtC10YXQvdC40LrQuC4g0KDQsNCx0L7RgtCwINGBINC30LDRj9Cy0LrQsNC80Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lkg0L3QsCDQv9C10YDQstC+0Lkg0Lgg0LLRgtC+0YDQvtC5INC70LjQvdC40Lgg0YLQtdGF0L/QvtC00LTQtdGA0LbQutC4LiDQo9GB0YLRgNCw0L3QtdC90LjQtSDQsNC/0L/QsNGA0LDRgtC90YvRhSDQuCDQv9GA0L7Qs9GA0LDQvNC80L3Ri9GFINC90LXQv9C+0LvQsNC00L7QuiDQvdCwINCw0LLRgtC+0LzQsNGC0LjQt9C40YDQvtCy0LDQvdC90YvRhSDRgNCw0LHQvtGH0LjRhSDQvNC10YHRgtCw0YUuINCd0LXRgdC70L7QttC90YvQuSDRgNC10LzQvtC90YIg0Y3Qu9C10LrRgtGA0L7QvdC40LrQuC4nLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgbGlzdC5hcHBlbmQocGV0UHJvamVjdHNJdGVtLCBrbXZJdGVtKTtcbiAgZXhwZXJpZW5jZVNlY3Rpb25PYmplY3QuZGVzY3JpcHRpb24uYXBwZW5kKGxpc3QpO1xuICByZXR1cm4gZXhwZXJpZW5jZVNlY3Rpb25PYmplY3Quc2VjdGlvbjtcbn1cbiIsImltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCByZXR1cm5TZWN0aW9uT2JqZWN0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0JztcblxuZnVuY3Rpb24gcmV0dXJuTGlzdEl0ZW0oaXRlbVRpdGxlOiBzdHJpbmcsIGl0ZW1UZXh0OiBzdHJpbmcpIHtcbiAgY29uc3QgaXRlbSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2xpJyxcbiAgICBjbGFzc2VzOiBbJ29yZC1saXN0X19pdGVtJywgJ2xpc3RfX2l0ZW0nXSxcbiAgfSk7XG4gIGNvbnN0IGFydGljbGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdhcnRpY2xlJyxcbiAgICBjbGFzc2VzOiBbJ2xpc3RfX2FydGljbGUnXSxcbiAgfSk7XG4gIGNvbnN0IHRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnaDMnLFxuICAgIGNsYXNzZXM6IFsnb3JkLWxpc3RfX3RpdGxlJywgJ3RpdGxlJ10sXG4gICAgdGV4dENvbnRlbnQ6IGl0ZW1UaXRsZSxcbiAgfSk7XG4gIGNvbnN0IHRleHQgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdwJyxcbiAgICBjbGFzc2VzOiBbJ29yZC1saXN0X190ZXh0JywgJ3RleHQnXSxcbiAgICB0ZXh0Q29udGVudDogaXRlbVRleHQsXG4gIH0pO1xuXG4gIGFydGljbGUuYXBwZW5kKHRpdGxlLCB0ZXh0KTtcbiAgaXRlbS5hcHBlbmQoYXJ0aWNsZSk7XG4gIHJldHVybiBpdGVtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5FeHBlcnRpc2VTZWN0aW9uKCkge1xuICBjb25zdCBzZWN0aW9uT2JqID0gcmV0dXJuU2VjdGlvbk9iamVjdCh7XG4gICAgd3JhcHBlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9jayddLFxuICAgIGhlYWRlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19faGVhZGVyJ10sXG4gICAgdGl0bGU6ICfQmtC+0LzQv9C10YLQtdC90YbQuNC4JyxcbiAgICBzdWJpdGxlOiAn0J/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70YzQvdGL0LUg0LfQvdCw0L3QuNGPLicsXG4gICAgaWQ6ICdleHBlcnRpc2UnLFxuICB9KTtcbiAgY29uc3QgbGlzdCA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ29sJyxcbiAgICBjbGFzc2VzOiBbJ2FydGljbGUtYmxvY2tfX29sJywgJ29yZC1saXN0JywgJ2xpc3QnXSxcbiAgfSk7XG5cbiAgY29uc3QgaXRlbUhUTUwgPSByZXR1cm5MaXN0SXRlbShcbiAgICAnSFRNTC9DU1MnLFxuICAgICfQktCw0LvQuNC00L3QsNGPINGB0LXQvNCw0L3RgtC40YfQtdGB0LrQsNGPINCy0LXRgNGB0YLQutCwINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDRgtGA0LXQsdC+0LLQsNC90LjRj9C80LggSFRNTDUuINCS0LXRgNGB0YLQutCwINC/0L4gUGl4ZWxQZXJmZWN0LiDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSBGbGV4Ym94LCBHcmlkLiDQn9GA0LXQv9GA0L7RhtC10YHRgdC+0YAgU0NTUy4g0JHQrdCcLiDQkNC00LDQv9GC0LjQstC90LDRjyDQuCDQvtGC0LfRi9Cy0YfQuNCy0LDRjyDQstC10YDRgdGC0LrQsCBtb2JpbGUtZmlyc3QgLyBkZXNrdG9wLWZpcnN0LidcbiAgKTtcbiAgY29uc3QgaXRlbUpTID0gcmV0dXJuTGlzdEl0ZW0oXG4gICAgJ0phdmFTY3JpcHQnLFxuICAgICdFUzYuINCi0LjQv9GLINC00LDQvdC90YvRhSwg0YTRg9C90LrRhtC40LgsINC+0LHRitC10LrRgtGLLCDQutC70LDRgdGB0YssINC80LXRgtC+0LTRiy4g0J/RgNC+0YLQvtGC0LjQv9GLLCDQvdCw0YHQu9C10LTQvtCy0LDQvdC40LUuINCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0LouINCX0LDQvNGL0LrQsNC90LjRjy4g0J/RgNC+0LzQuNGB0Ys6IGZldGNoLCBhc3luYy9hd2FpdC4g0KDQsNCx0L7RgtCwINGBIERPTSwg0YHQvtCx0YvRgtC40Y8sINC20LjQt9C90LXQvdC90YvQuSDRhtC40LrQuyDRgdGC0YDQsNC90LjRhtGLLiDQnNC+0LTRg9C70LguIFdlYiBzdG9yYWdlLidcbiAgKTtcbiAgY29uc3QgaXRlbVRTID0gcmV0dXJuTGlzdEl0ZW0oXG4gICAgJ1R5cGVzY3JpcHQnLFxuICAgICfQkdCw0LfQvtCy0YvQtSDRgtC40L/Riy4g0KLQuNC/0YssINC40L3RgtC10YDRhNC10LnRgdGLLiDQlNC20LXQvdC10YDQuNC60LguINCe0LHRitC10LTQuNC90LXQvdC40Y8gLyDQv9C10YDQtdGB0LXRh9C10L3QuNGPINGC0LjQv9C+0LIuINCY0LfQsdC10LPQsNC90LjQtSDRgtC40L/QsCDCq2FuecK7LidcbiAgKTtcbiAgY29uc3QgaXRlbVNvZnR3YXJlID0gcmV0dXJuTGlzdEl0ZW0oXG4gICAgJ9Cf0YDQvtCz0YDQsNC80LzQvdC+0LUg0L7QsdC10YHQv9C10YfQtdC90LjQtScsXG4gICAgJ1Zpc3VhbCBTdHVkaW8gQ29kZSwgQ2hyb21lIERldlRvb2xzLCBQaXhlbFBlcmZlY3QsIEZpZ21hLCBHSU1QLCBJbmtzY2FwZSwgQWRvYmUgUGhvdG9zaG9wLidcbiAgKTtcbiAgY29uc3QgaXRlbURldmVsb3AgPSByZXR1cm5MaXN0SXRlbShcbiAgICAn0KHRgNC10LTRgdGC0LLQsCDRgNCw0LfRgNCw0LHQvtGC0LrQuCcsXG4gICAgJ1dlYnBhY2ssIFR5cGVzY3JpcHQsIEVzbGludCwgU3R5bGVsaW50LCBQcmV0dGllciwgSHVza3ksIFNBU1MuJ1xuICApO1xuICBjb25zdCBpdGVtVGVhbSA9IHJldHVybkxpc3RJdGVtKFxuICAgICfQoNCw0LHQvtGC0LAg0LIg0LrQvtC80LDQvdC00LUnLFxuICAgICdBZ2lsZS3QvNC10YLQvtC00L7Qu9C+0LPQuNGPOiBTY3J1bSwgS2FuYmFuIChUcmVsbG8sIEFzYW5hLCBHaXRIdWIgRGVza3RvcCkuJ1xuICApO1xuICBsaXN0LmFwcGVuZChpdGVtSFRNTCwgaXRlbUpTLCBpdGVtVFMsIGl0ZW1Tb2Z0d2FyZSwgaXRlbURldmVsb3AsIGl0ZW1UZWFtKTtcbiAgc2VjdGlvbk9iai5kZXNjcmlwdGlvbi5hcHBlbmQobGlzdCk7XG4gIHJldHVybiBzZWN0aW9uT2JqLnNlY3Rpb247XG59XG4iLCJpbXBvcnQgcmV0dXJuU2VjdGlvbk9iamVjdCBmcm9tICcuLi9jb21tb24vcmV0dXJuU2VjdGlvbk9iamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVybkludHJvU2VjdGlvbigpIHtcbiAgY29uc3Qgc2VjdGlvbk9iaiA9IHJldHVyblNlY3Rpb25PYmplY3Qoe1xuICAgIHdyYXBwZXJUYWc6ICdhcnRpY2xlJyxcbiAgICB3cmFwcGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrJ10sXG4gICAgaGVhZGVyQ2xhc3NlczogWydhcnRpY2xlLWJsb2NrX19oZWFkZXInXSxcbiAgICB0aXRsZTogJ9CeINGB0LXQsdC1JyxcbiAgICBzdWJpdGxlOiAn0JrQu9GO0YfQtdCy0YvQtSDQutC+0LzQv9C10YLQtdC90YbQuNC4LicsXG4gICAgaWQ6ICdhYm91dCcsXG4gIH0pO1xuICBzZWN0aW9uT2JqLmRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGBcbiAgICA8cCBjbGFzcz1cImFydGljbGUtYmxvY2tfX3RleHRcIj7QndCw0YfQuNC90LDRjtGJ0LjQuSBmcm9udC1lbmQt0YDQsNC30YDQsNCx0L7RgtGH0LjQui4g0KXQvtGH0YMg0YDQtdCw0LvQuNC30L7QstCw0YLRjCDRgdCy0L7QuSDQv9C+0YLQtdC90YbQuNCw0Lsg0Lgg0L/RgNC40L7QsdGA0LXRgtC10L3QvdGL0LUg0LfQvdCw0L3QuNGPINCyINC/0YDQvtC00YPQutGC0L7QstC+0Lkg0LrQvtC80LDQvdC00LUuPC9wPlxuICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fdGV4dFwiPkZvcm50LWVuZCZuYnNwOyZuZGFzaDsg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC90L7QstCw0Y8g0LTQu9GPINC80LXQvdGPINGB0YTQtdGA0LAsINC60YPQtNCwINGPINC/0LXRgNC10YXQvtC20YMg0LjQtyDRgdC80LXQttC90L7QuSZuYnNwOyZuZGFzaDsg0YHQuNGB0YLQtdC80L3QvtCz0L4g0LDQtNC80LjQvdC40YHRgtGA0LjRgNC+0LLQsNC90LjRjy4g0JjQoi3QsdGN0LrQs9GA0LDRg9C90LQg0Lgg0LjQvdGC0LXRgNC10YEg0Log0L/RgNC+0LPRgNCw0LzQvNC40YDQvtCy0LDQvdC40Y4g0L/QvtC30LLQvtC70LjQu9C4INGBINC70LXQs9C60L7RgdGC0YzRjiDQv9C+0LvRg9GH0LjRgtGMINC60YDQsNGB0L3Ri9C5INC00LjQv9C70L7QvCDQsiA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwOi8vcmdrcmlwdC5ydS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmtcIj7QoNCT0JrQoNC40J/QojwvYT4g0L/QviDRgdC/0LXRhtC40LDQu9GM0L3QvtGB0YLQuCDCq9GC0LXRhdC90LjQui3Qv9GA0L7Qs9GA0LDQvNC80LjRgdGCwrsuINCX0LDRgtC10LwmbmJzcDsmbmRhc2g7INC60YPRgNGB0YsgSlMgLyBGcm9udC1lbmQg0L7RgiA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9jb3Vyc2VzL1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPlJTU2Nob29sPC9hPjogPGEgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX19saW5rIGxpbmtcIiBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvY291cnNlcy9qYXZhc2NyaXB0LXByZXNjaG9vbFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPtC/0L7QtNCz0L7RgtC+0LLQuNGC0LXQu9GM0L3Ri9C5PC9hPiDQuCA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9jb3Vyc2VzL2phdmFzY3JpcHQtbWVudG9yaW5nLXByb2dyYW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmtcIj7QvtGB0L3QvtCy0L3QvtC5PC9hPiwg0LPQtNC1INC30LDQvdGP0Lsg0L/QvtGH0LXRgtC90L7QtSAxMTgt0LUmbmJzcDvQvNC10YHRgtC+ICjQuiDRgdC70L7QstGDLCDQstGB0LXQs9C+INC90LAg0LrRg9GA0YEg0L/QvtGB0YLRg9C/0LjQu9C+INC+0LrQvtC70L4gOCZuYnNwOzIwMCZuYnNwO9GH0LXQu9C+0LLQtdC6LCDRg9GB0L/QtdGI0L3QviDQt9Cw0LrQvtC90YfQuNC70LgmbmJzcDsmbmRhc2g7IDUzMSkuPC9wPlxuICAgIDxwIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fdGV4dFwiPtCl0L7RgNC+0YjQtdC1INC30L3QsNC90LjQtSDQsNC90LPQu9C40LnRgdC60L7Qs9C+INGP0LfRi9C60LAg0L/QvtC30LLQvtC70Y/QtdGCINC40LfRg9GH0LDRgtGMINC00L7QutGD0LzQtdC90YLQsNGG0LjRjiDQsiDQvtGA0LjQs9C40L3QsNC70LUg0Lgg0LjRgdC/0YDQsNCy0LvRj9GC0YwgLyDRg9GC0L7Rh9C90Y/RgtGMIC8g0L/Rg9Cx0LvQuNC60L7QstCw0YLRjCDQvdCwINGA0YPRgdGB0LrQvtC8INGP0LfRi9C60LU6IDxhIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGluayBsaW5rXCIgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL3J1L2RvY3MvV2ViL0NTUy9DU1NfZ3JpZF9sYXlvdXQvQmFzaWNfY29uY2VwdHNfb2ZfZ3JpZF9sYXlvdXRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmtcIj7RgdGC0LDRgtGM0Y8g0L3QsCDRgdCw0LnRgtC1IG1kbjwvYT4gKDxhIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGluayBsaW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tZG4vdHJhbnNsYXRlZC1jb250ZW50L2NvbW1pdC81NzUzNGVjNzg3OGNiOTdkMzNmZmYzMTczY2E5ZDEzOGJhZDQzODRkI2RpZmYtNGI1OTdiODNiNTE4MjdiZmI4ZDYxMmJmMDJjMDYxODEwYzcwNjE0NTEzY2FlMzBmMjVhZTFjZDk5ZmY0ODZjZVwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzPVwiYXJ0aWNsZS1ibG9ja19fbGlua1wiPtGB0YHRi9C70LrQsCDQvdCwINC60L7QvNC80LjRgjwvYT4pLCA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwczovL2hhYnIuY29tL3J1L2FydGljbGVzLzc2ODMwNC9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmtcIj7RgdGC0LDRgtGM0Y88L2E+INC+0LEg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LggQ1NTLjwvcD5cbiAgICA8cCBjbGFzcz1cImFydGljbGUtYmxvY2tfX3RleHRcIj7Ql9CwINCy0YDQtdC80Y8g0L7QsdGD0YfQtdC90LjRjyDQsiBSU1NjaG9vbCDQt9Cw0YDQtdC60L7QvNC10L3QtNC+0LLQsNC7INGB0LXQsdGPINC60LDQuiDQvtGC0LLQtdGC0YHRgtCy0LXQvdC90YvQuSDQuNGB0L/QvtC70L3QuNGC0LXQu9GMINC4INGF0L7RgNC+0YjQuNC5INC60L7QvNCw0L3QtNC90YvQuSDQuNCz0YDQvtC6OiDQvtGC0LfRi9Cy0Ysg0L7Qv9GD0LHQu9C40LrQvtCy0LDQvdGLINC90LAg0YHRgtGA0LDQvdC40YbQtSA8YSBjbGFzcz1cImFydGljbGUtYmxvY2tfX2xpbmsgbGlua1wiIGhyZWY9XCJodHRwczovL2FwcC5ycy5zY2hvb2wvY3YvZmIxOTdkZDEtZTMzOC00MTcxLTkzOTYtZTk2Nzc0ZjRmMjAwXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJhcnRpY2xlLWJsb2NrX19saW5rXCI+0YDQtdC30Y7QvNC1PC9hPiBSU1NjaG9vbC48L3A+YDtcbiAgcmV0dXJuIHNlY3Rpb25PYmouc2VjdGlvbjtcbn1cbiIsImltcG9ydCByZXR1cm5FZHVjYXRpb25TZWN0aW9uIGZyb20gJy4vcmV0dXJuRWR1Y2F0aW9uU2VjdGlvbic7XG5pbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuLi9jb21tb24vcmV0dXJuRWxlbWVudCc7XG5pbXBvcnQgcmV0dXJuRXhwZXJpZW5jZVNlY3Rpb24gZnJvbSAnLi9yZXR1cm5FeHBlcmllbmNlU2VjdGlvbic7XG5pbXBvcnQgcmV0dXJuRXhwZXJ0aXNlU2VjdGlvbiBmcm9tICcuL3JldHVybkV4cGVydGlzZVNlY3Rpb24nO1xuaW1wb3J0IHJldHVybkludHJvU2VjdGlvbiBmcm9tICcuL3JldHVybkludHJvU2VjdGlvbic7XG5pbXBvcnQgcmV0dXJuUG9ydGZvbGlvU2VjdGlvbiBmcm9tICcuL3JldHVyblBvcnRmb2xpb1NlY3Rpb24nO1xuaW1wb3J0IHJldHVyblNraWxsc1NlY3Rpb24gZnJvbSAnLi9yZXR1cm5Ta2lsbHNTZWN0aW9uJztcbmltcG9ydCByZXR1cm5Db250YWN0U2VjdGlvbiBmcm9tICcuL3JldHVybkNvbnRhY3RTZWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuTWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ21haW4nLFxuICAgIGNsYXNzZXM6IFsnbWFpbiddLFxuICB9KTtcbiAgY29uc3QgaW50cm9TZWN0aW9uID0gcmV0dXJuSW50cm9TZWN0aW9uKCk7XG4gIGNvbnN0IGV4cGVydGlzZVNlY3Rpb24gPSByZXR1cm5FeHBlcnRpc2VTZWN0aW9uKCk7XG4gIGNvbnN0IHNraWxsc1NlY3Rpb24gPSByZXR1cm5Ta2lsbHNTZWN0aW9uKCk7XG4gIGNvbnN0IGV4cGVyaWVuY2VTZWN0aW9uID0gcmV0dXJuRXhwZXJpZW5jZVNlY3Rpb24oKTtcbiAgY29uc3QgZWR1Y2F0aW9uU2VjdGlvbiA9IHJldHVybkVkdWNhdGlvblNlY3Rpb24oKTtcbiAgY29uc3QgcG9ydGZvbGlvU2VjdGlvbiA9IHJldHVyblBvcnRmb2xpb1NlY3Rpb24oKTtcbiAgY29uc3QgZm9vdGVyU2VjdGlvbiA9IHJldHVybkNvbnRhY3RTZWN0aW9uKCk7XG5cbiAgbWFpbi5hcHBlbmQoXG4gICAgaW50cm9TZWN0aW9uLFxuICAgIGV4cGVydGlzZVNlY3Rpb24sXG4gICAgc2tpbGxzU2VjdGlvbixcbiAgICBleHBlcmllbmNlU2VjdGlvbixcbiAgICBlZHVjYXRpb25TZWN0aW9uLFxuICAgIHBvcnRmb2xpb1NlY3Rpb24sXG4gICAgZm9vdGVyU2VjdGlvblxuICApO1xuICByZXR1cm4gbWFpbjtcbn1cbiIsImltcG9ydCBpbWdQb3J0Zm9saW8gZnJvbSAnLi4vLi4vaW1nL3Byb2otcG9ydGZvbGlvLmpwZyc7XG5pbXBvcnQgaW1nU2hlbHRlciBmcm9tICcuLi8uLi9pbWcvcHJvai1zaGVsdGVyLmpwZyc7XG5pbXBvcnQgaW1nTWluZXN3ZWVwZXIgZnJvbSAnLi4vLi4vaW1nL3Byb2otbWluZXN3ZWVwZXIuanBnJztcbmltcG9ydCBpbWdDc3NTbGlkZXIgZnJvbSAnLi4vLi4vaW1nL3Byb2otY3NzTWVtU2xpZGVyLmpwZyc7XG5pbXBvcnQgaW1nS2V5Ym9hcmQgZnJvbSAnLi4vLi4vaW1nL3Byb2ota2V5Ym9hcmQucG5nJztcbmltcG9ydCBpbWdNb3ZpZUFwcCBmcm9tICcuLi8uLi9pbWcvcHJvai1tb3ZpZS1hcHAuanBnJztcbmltcG9ydCBpbWdUaWNUYWNUb2UgZnJvbSAnLi4vLi4vaW1nL3Byb2otdGljLXRhYy10b2UuanBnJztcbmltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCByZXR1cm5TZWN0aW9uT2JqZWN0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0JztcblxuZnVuY3Rpb24gcmV0dXJuUG9ydGZvbGlvUGFyYWdyYXBoKCk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgcG9ydGZvbGlvUGFyYWdyYXBoID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAncCcsXG4gICAgY2xhc3NlczogWydwb3J0Zm9saW8tYXJ0aWNsZV9fdGV4dCcsICd0ZXh0J10sXG4gIH0pO1xuICByZXR1cm4gcG9ydGZvbGlvUGFyYWdyYXBoO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Qb3J0Zm9saW9MaW5rKGxpbms6IHN0cmluZywgdGV4dDogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBwb3J0Zm9saW9MaW5rID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnYScsXG4gICAgY2xhc3NlczogWydwb3J0Zm9saW8tYXJ0aWNsZV9fbGluaycsICdsaW5rJ10sXG4gICAgYXR0cmliOiBbXG4gICAgICB7IG5hbWU6ICdocmVmJywgdmFsdWU6IGxpbmsgfSxcbiAgICAgIHsgbmFtZTogJ3RhcmdldCcsIHZhbHVlOiAnX2JsYW5rJyB9LFxuICAgIF0sXG4gICAgdGV4dENvbnRlbnQ6IHRleHQsXG4gIH0pO1xuICByZXR1cm4gcG9ydGZvbGlvTGluaztcbn1cblxuZnVuY3Rpb24gcmV0dXJuQXJ0aWNsZShcbiAgdGl0bGU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgZGVwbG95TGlua1N0cmluZzogc3RyaW5nLFxuICBnaExpbmtzOiBzdHJpbmdbXSxcbiAgdGFza3M6IHN0cmluZ1tdLFxuICBpbWdTcmM6IHN0cmluZyxcbiAgaW1nQWx0OiBzdHJpbmdcbikge1xuICBjb25zdCBhcnRpY2xlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnYXJ0aWNsZScsXG4gICAgY2xhc3NlczogWydwb3J0Zm9saW9fX2FyaXRjbGUnLCAncG9ydGZvbGlvLWFydGljbGUnXSxcbiAgfSk7XG4gIGNvbnN0IGFydGljbGVXcmFwcGVyID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ3BvcnRmb2xpby1hcnRpY2xlX193cmFwcGVyJ10sXG4gIH0pO1xuICBjb25zdCBhcnRpY2xlVGl0bGUgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdoMycsXG4gICAgY2xhc3NlczogWydwb3J0Zm9saW8tYXJ0aWNsZV9fdGl0bGUnLCAndGl0bGUnXSxcbiAgICB0ZXh0Q29udGVudDogdGl0bGUsXG4gIH0pO1xuICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaCA9IHJldHVyblBvcnRmb2xpb1BhcmFncmFwaCgpO1xuICBkZXNjcmlwdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICBjb25zdCBkZXBsb3lQYXJhZ3JhcGggPSByZXR1cm5Qb3J0Zm9saW9QYXJhZ3JhcGgoKTtcbiAgY29uc3QgZGVwbG95TGluayA9IHJldHVyblBvcnRmb2xpb0xpbmsoZGVwbG95TGlua1N0cmluZywgJ9CU0LXQv9C70L7QuScpO1xuICBkZXBsb3lQYXJhZ3JhcGguYXBwZW5kKGRlcGxveUxpbmssICcuJyk7XG4gIGNvbnN0IGdoUGFyYWdyYXBoID0gcmV0dXJuUG9ydGZvbGlvUGFyYWdyYXBoKCk7XG4gIGdoTGlua3MuZm9yRWFjaCgobGlua1N0cmluZzogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGxldCBsaW5rVGV4dCA9ICdHaXRodWInO1xuICAgIGlmIChnaExpbmtzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxpbmtUZXh0ICs9ICcgJyArICsraWR4O1xuICAgIH1cbiAgICBjb25zdCBsaW5rID0gcmV0dXJuUG9ydGZvbGlvTGluayhsaW5rU3RyaW5nLCBsaW5rVGV4dCk7XG4gICAgZ2hQYXJhZ3JhcGguYXBwZW5kKGxpbmssICcuICcpO1xuICB9KTtcbiAgY29uc3QgdGFza3NQYXJhZ3JhcGggPSByZXR1cm5Qb3J0Zm9saW9QYXJhZ3JhcGgoKTtcbiAgdGFza3MuZm9yRWFjaCgodGFza1N0cmluZzogc3RyaW5nLCBpZHg6IG51bWJlcikgPT4ge1xuICAgIGxldCBsaW5rVGV4dCA9ICfQl9Cw0LTQsNC90LjQtSc7XG4gICAgaWYgKHRhc2tzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxpbmtUZXh0ICs9ICcgJyArICsraWR4O1xuICAgIH1cbiAgICBjb25zdCBsaW5rID0gcmV0dXJuUG9ydGZvbGlvTGluayh0YXNrU3RyaW5nLCBsaW5rVGV4dCk7XG4gICAgdGFza3NQYXJhZ3JhcGguYXBwZW5kKGxpbmssICcuICcpO1xuICB9KTtcbiAgY29uc3QgYXJ0aWNsZUltZyA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2ltZycsXG4gICAgY2xhc3NlczogWydwb3J0Zm9saW8tYXJ0aWNsZV9faW1nJ10sXG4gICAgYXR0cmliOiBbXG4gICAgICB7IG5hbWU6ICdzcmMnLCB2YWx1ZTogaW1nU3JjIH0sXG4gICAgICB7IG5hbWU6ICdhbHQnLCB2YWx1ZTogaW1nQWx0IH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgYXJ0aWNsZVdyYXBwZXIuYXBwZW5kKFxuICAgIGFydGljbGVUaXRsZSxcbiAgICBkZXNjcmlwdGlvblBhcmFncmFwaCxcbiAgICBkZXBsb3lQYXJhZ3JhcGgsXG4gICAgZ2hQYXJhZ3JhcGgsXG4gICAgdGFza3NQYXJhZ3JhcGhcbiAgKTtcbiAgYXJ0aWNsZS5hcHBlbmQoYXJ0aWNsZVdyYXBwZXIsIGFydGljbGVJbWcpO1xuICByZXR1cm4gYXJ0aWNsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuUG9ydGZvbGlvU2VjdGlvbigpIHtcbiAgY29uc3QgcG9ydGZvbGlvU2VjdGlvbk9iamVjdCA9IHJldHVyblNlY3Rpb25PYmplY3Qoe1xuICAgIHdyYXBwZXJDbGFzc2VzOiBbJ2FydGljbGUtYmxvY2snLCAncG9ydGZvbGlvJ10sXG4gICAgaGVhZGVyQ2xhc3NlczogW1xuICAgICAgJ3NlY3Rpb25fX2hlYWRlcicsXG4gICAgICAnc2VjdGlvbl9fYmxvY2snLFxuICAgICAgJ2FydGljbGUtYmxvY2tfX2hlYWRlcicsXG4gICAgICAncG9ydGZvbGlvX19oZWFkZXInLFxuICAgIF0sXG4gICAgZGVzY3JpcHRpb25DbGFzc2VzOiBbJ3BvcnRmb2xpb19fZGVzY3JpcHRpb24nXSxcbiAgICB0aXRsZTogJ9Cf0L7RgNGC0YTQvtC70LjQvicsXG4gICAgc3ViaXRsZTogJ9CS0YvQv9C+0LvQvdC10L3QvdGL0LUg0L/RgNC+0LXQutGC0YsuJyxcbiAgICBpZDogJ3BvcnRmb2xpbycsXG4gIH0pO1xuICBjb25zdCBwb3J0Zm9saW9BcnRpY2xlID0gcmV0dXJuQXJ0aWNsZShcbiAgICAnUG9ydGZvbGlvJyxcbiAgICAn0JDQtNCw0L/RgtC40LLQvdGL0LkgbGFuZGluZyBwYWdlINGBINC40L3RgtC10YDQsNC60YLQuNCy0L3QvtGB0YLRjNGOLicsXG4gICAgJ2h0dHBzOi8vYS12LWdvci5naXRodWIuaW8vc3R1ZHktcHJvamVjdHMvcG9ydGZvbGlvLycsXG4gICAgW1xuICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXYtZ29yL3N0dWR5LXByb2plY3RzL3RyZWUvcG9ydGZvbGlvJyxcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vYS12LWdvci9zdHVkeS1wcm9qZWN0cy90cmVlL3BvcnRmb2xpby12aWRlbycsXG4gICAgXSxcbiAgICBbXG4gICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC90YXNrcy9ibG9iL21hc3Rlci90YXNrcy9wb3J0Zm9saW8vcG9ydGZvbGlvLm1kJyxcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL2pzMzAlMjMvanMzMC0zLm1kJyxcbiAgICBdLFxuICAgIGltZ1BvcnRmb2xpbyxcbiAgICAnUHJpbnRzY3JlZW4gcG9ydGZvbGlvIGxhbmRpbmcgcGFnZSdcbiAgKTtcbiAgY29uc3QgY3NzU2xpZGVyQXJ0aWNsZSA9IHJldHVybkFydGljbGUoXG4gICAgJ0NTUyDRgdC70LDQudC00LXRgCcsXG4gICAgJ9Ch0LvQsNC50LTQtdGAINC90LAg0YfQuNGB0YLQvtC8IENTUy4nLFxuICAgICdodHRwczovL2Etdi1nb3IuZ2l0aHViLmlvL2Nzc01lbVNsaWRlci9jc3NNZW1TbGlkZXIvJyxcbiAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXYtZ29yL2Nzc01lbVNsaWRlciddLFxuICAgIFtcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL3RyZWUvbWFzdGVyL3Rhc2tzL2Nzcy1tZW1lLXNsaWRlcicsXG4gICAgXSxcbiAgICBpbWdDc3NTbGlkZXIsXG4gICAgJ1ZpcnR1YWwga2V5Ym9hcmQgYXBwbGljYXRpb24gcGFnZSdcbiAgKTtcbiAgY29uc3Qgc2hlbHRlckFydGljbGUgPSByZXR1cm5BcnRpY2xlKFxuICAgICdTaGVsdGVyJyxcbiAgICAn0JDQtNCw0L/RgtC40LLQvdGL0Lkg0LjQvdGC0LXRgNCw0LrRgtC40LLQvdGL0Lkg0YHQsNC50YIuJyxcbiAgICAnaHR0cHM6Ly9hLXYtZ29yLmdpdGh1Yi5pby9zdHVkeS1wcm9qZWN0cy9zaGVsdGVyL3BhZ2VzL21haW4vJyxcbiAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXYtZ29yL3N0dWR5LXByb2plY3RzL3RyZWUvc2hlbHRlciddLFxuICAgIFtcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL3NoZWx0ZXIvc2hlbHRlci5tZCcsXG4gICAgXSxcbiAgICBpbWdTaGVsdGVyLFxuICAgICdTaGVsdGVyIGFwcGxpY2F0aW9uIHBhZ2UnXG4gICk7XG4gIGNvbnN0IG1pbmVzd2VlcGVyQXJ0aWNsZSA9IHJldHVybkFydGljbGUoXG4gICAgJ9Ch0LDQv9C10YAnLFxuICAgICfQmNCz0YDQsCDCq9Ch0LDQv9C10YDCuy4nLFxuICAgICdodHRwczovL2Etdi1nb3IuZ2l0aHViLmlvL3N0dWR5LXByb2plY3RzL21pbmVzd2VlcGVyLycsXG4gICAgWydodHRwczovL2dpdGh1Yi5jb20vYS12LWdvci9zdHVkeS1wcm9qZWN0cy90cmVlL21pbmVzd2VlcGVyJ10sXG4gICAgW1xuICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9yb2xsaW5nLXNjb3Blcy1zY2hvb2wvdGFza3MvYmxvYi9tYXN0ZXIvdGFza3MvbWluZXN3ZWVwZXIvUkVBRE1FLm1kJyxcbiAgICBdLFxuICAgIGltZ01pbmVzd2VlcGVyLFxuICAgICdNaW5lc3dlZXBlciBhcHBsaWNhdGlvbiBwYWdlJ1xuICApO1xuICBjb25zdCBrZXlib2FyZEFydGljbGUgPSByZXR1cm5BcnRpY2xlKFxuICAgICfQktC40YDRgtGD0LDQu9GM0L3QsNGPINC60LvQsNCy0LjQsNGC0YPRgNCwJyxcbiAgICAn0JLQuNGA0YLRg9Cw0LvRjNC90LDRjyDQutC70LDQstC40LDRgtGD0YDQsC4nLFxuICAgICdodHRwczovL2Etdi1nb3IuZ2l0aHViLmlvL3ZpcnR1YWwta2V5Ym9hcmQvJyxcbiAgICBbJ2h0dHBzOi8vZ2l0aHViLmNvbS9hLXYtZ29yL3ZpcnR1YWwta2V5Ym9hcmQnXSxcbiAgICBbXG4gICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3JvbGxpbmctc2NvcGVzLXNjaG9vbC90YXNrcy9ibG9iL21hc3Rlci90YXNrcy92aXJ0dWFsLWtleWJvYXJkL3ZpcnR1YWwta2V5Ym9hcmQtZW4ubWQnLFxuICAgIF0sXG4gICAgaW1nS2V5Ym9hcmQsXG4gICAgJ1ZpcnR1YWwga2V5Ym9hcmQgYXBwbGljYXRpb24gcGFnZSdcbiAgKTtcbiAgY29uc3QgbW92aWVBcHBBcnRpY2xlID0gcmV0dXJuQXJ0aWNsZShcbiAgICAn0J/QvtC40YHQutC+0LLQuNC6INC/0L4g0LLQuNC00LXQvicsXG4gICAgJ9CY0L3RhNC+0YDQvNCw0YbQuNGPINC+INGE0LjQu9GM0LzQsNGFINC/0L4g0LfQsNC/0YDQvtGB0YMg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPIChBUEkpLicsXG4gICAgJ2h0dHBzOi8vYS12LWdvci5naXRodWIuaW8vc3R1ZHktcHJvamVjdHMvbW92aWUtYXBwLycsXG4gICAgWydodHRwczovL2dpdGh1Yi5jb20vYS12LWdvci9zdHVkeS1wcm9qZWN0cy90cmVlL21vdmllLWFwcCddLFxuICAgIFtcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL2pzMzAlMjMvanMzMC02Lm1kJyxcbiAgICBdLFxuICAgIGltZ01vdmllQXBwLFxuICAgICdQcmludHNjcmVlbiBtb3ZpZSBhcHBsaWNhdGlvbiBwYWdlJ1xuICApO1xuICBjb25zdCB0aWNUYWNUb2VBcnRpY2xlID0gcmV0dXJuQXJ0aWNsZShcbiAgICAnVGljLXRhYy10b2UnLFxuICAgICfQmNCz0YDQsCDCq9C60YDQtdGB0YLQuNC60Lgt0L3QvtC70LjQutC4wrsuJyxcbiAgICAnaHR0cHM6Ly9hLXYtZ29yLmdpdGh1Yi5pby9zdHVkeS1wcm9qZWN0cy90aWMtdGFjLXRvZS8nLFxuICAgIFsnaHR0cHM6Ly9naXRodWIuY29tL2Etdi1nb3Ivc3R1ZHktcHJvamVjdHMvdHJlZS90aWMtdGFjLXRvZSddLFxuICAgIFtcbiAgICAgICdodHRwczovL2dpdGh1Yi5jb20vcm9sbGluZy1zY29wZXMtc2Nob29sL3Rhc2tzL2Jsb2IvbWFzdGVyL3Rhc2tzL2pzMzAlMjMvanMzMC03Lm1kJyxcbiAgICBdLFxuICAgIGltZ1RpY1RhY1RvZSxcbiAgICAnVGljLXRhYy10b2UgcGFnZSdcbiAgKTtcblxuICBwb3J0Zm9saW9TZWN0aW9uT2JqZWN0LmRlc2NyaXB0aW9uLmFwcGVuZChcbiAgICBwb3J0Zm9saW9BcnRpY2xlLFxuICAgIHNoZWx0ZXJBcnRpY2xlLFxuICAgIG1pbmVzd2VlcGVyQXJ0aWNsZSxcbiAgICBjc3NTbGlkZXJBcnRpY2xlLFxuICAgIGtleWJvYXJkQXJ0aWNsZSxcbiAgICBtb3ZpZUFwcEFydGljbGUsXG4gICAgdGljVGFjVG9lQXJ0aWNsZVxuICApO1xuXG4gIHJldHVybiBwb3J0Zm9saW9TZWN0aW9uT2JqZWN0LnNlY3Rpb247XG59XG4iLCJpbXBvcnQgeyBwYWdlRWxlbWVudHMgfSBmcm9tICcuLi9jb21tb24vcGFnZUVsZW1lbnRzJztcbmltcG9ydCByZXR1cm5FbGVtZW50IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCByZXR1cm5TZWN0aW9uT2JqZWN0IGZyb20gJy4uL2NvbW1vbi9yZXR1cm5TZWN0aW9uT2JqZWN0JztcblxuZnVuY3Rpb24gcmV0dXJuU2tpbGxzSXRlbShudW1QZXJjZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGxhYmVsU3RyaW5nOiBzdHJpbmcpIHtcbiAgY29uc3QgaXRlbSA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2xpJyxcbiAgICBjbGFzc2VzOiBbJ3Vub3JkLWxpc3RfX2l0ZW0nLCAnbGlzdF9faXRlbScsICdpdGVtJywgJ3NraWxsc19faXRlbSddLFxuICB9KTtcbiAgY29uc3QgcGVyY2VudEJsb2NrID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ2l0ZW1fX3BlcmNlbnQnXSxcbiAgICB0ZXh0Q29udGVudDogbnVtUGVyY2VudCxcbiAgfSk7XG4gIGNvbnN0IGxhYmVsRWxlbWVudCA9IHJldHVybkVsZW1lbnQoe1xuICAgIHRhZzogJ2xhYmVsJyxcbiAgICBjbGFzc2VzOiBbJ2l0ZW1fX2xhYmVsJ10sXG4gICAgYXR0cmliOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdmb3InLFxuICAgICAgICB2YWx1ZTogaWQsXG4gICAgICB9LFxuICAgIF0sXG4gICAgdGV4dENvbnRlbnQ6IGxhYmVsU3RyaW5nLFxuICB9KTtcbiAgY29uc3QgcHJvZ3Jlc3NFbGVtZW50ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAncHJvZ3Jlc3MnLFxuICAgIGNsYXNzZXM6IFsnaXRlbV9fcHJvZ3Jlc3MnXSxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ21heCcsXG4gICAgICAgIHZhbHVlOiAnMTAwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgICAgIHZhbHVlOiBudW1QZXJjZW50LFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcblxuICBpdGVtLmFwcGVuZChwZXJjZW50QmxvY2ssIGxhYmVsRWxlbWVudCwgcHJvZ3Jlc3NFbGVtZW50KTtcbiAgcmV0dXJuIGl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVyblNraWxsc1NlY3Rpb24oKSB7XG4gIGNvbnN0IHNraWxsc1NlY3Rpb25PYmplY3QgPSByZXR1cm5TZWN0aW9uT2JqZWN0KHtcbiAgICB3cmFwcGVyVGFnOiAnYXJ0aWNsZScsXG4gICAgd3JhcHBlckNsYXNzZXM6IFsnc2VjdGlvbl9fd3JhcHBlcicsICdhcnRpY2xlJywgJ3NraWxscyddLFxuICAgIGhlYWRlckNsYXNzZXM6IFsnYXJ0aWNsZS1ibG9ja19faGVhZGVyJywgJ3NraWxsc19faGVhZGVyJ10sXG4gICAgZGVzY3JpcHRpb25DbGFzc2VzOiBbJ3NraWxsc19fZGVzY3JpcHRpb24nXSxcbiAgICB0aXRsZTogJ9Ca0L7QvNC/0LXRgtC10L3RhtC40LgnLFxuICAgIHN1Yml0bGU6ICfQn9GA0L7RhNC10YHRgdC40L7QvdCw0LvRjNC90YvQtSDQvdCw0LLRi9C60LguJyxcbiAgICBpZDogJ3NraWxscycsXG4gIH0pO1xuXG4gIGNvbnN0IHNraWxsc0xpc3QgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICd1bCcsXG4gICAgY2xhc3NlczogWydhcnRpY2xlLWJsb2NrX191bCcsICd1bm9yZC1saXN0JywgJ2xpc3QnLCAnc2tpbGxzX19saXN0J10sXG4gIH0pO1xuXG4gIGNvbnN0IGh0bWxFbGVtZW50ID0gcmV0dXJuU2tpbGxzSXRlbSgnOTAnLCAnaHRtbCcsICdIVE1MJyk7XG4gIGNvbnN0IGNzc0VsZW1lbnQgPSByZXR1cm5Ta2lsbHNJdGVtKCc1MCcsICdjc3MzJywgJ0NTUzMgYW5pbWF0aW9uJyk7XG4gIGNvbnN0IHRzRWxlbWVudCA9IHJldHVyblNraWxsc0l0ZW0oJzY1JywgJ3RzJywgJ1R5cGVzY3JpcHQnKTtcbiAgY29uc3QgZ2l0RWxlbWVudCA9IHJldHVyblNraWxsc0l0ZW0oJzgwJywgJ2dpdCcsICdHSVQnKTtcbiAgY29uc3Qgd2VicGFja0VsZW1lbnQgPSByZXR1cm5Ta2lsbHNJdGVtKCc5NScsICd3ZWJwYWNrJywgJ1dlYnBhY2snKTtcbiAgY29uc3Qgc2VvRWxlbWVudCA9IHJldHVyblNraWxsc0l0ZW0oJzkwJywgJ3NlbycsICdTRU8nKTtcblxuICBza2lsbHNMaXN0LmFwcGVuZChcbiAgICBodG1sRWxlbWVudCxcbiAgICBjc3NFbGVtZW50LFxuICAgIHRzRWxlbWVudCxcbiAgICBnaXRFbGVtZW50LFxuICAgIHdlYnBhY2tFbGVtZW50LFxuICAgIHNlb0VsZW1lbnRcbiAgKTtcbiAgc2tpbGxzU2VjdGlvbk9iamVjdC5kZXNjcmlwdGlvbi5hcHBlbmQoc2tpbGxzTGlzdCk7XG4gIHBhZ2VFbGVtZW50cy5za2lsbHMgPSBza2lsbHNTZWN0aW9uT2JqZWN0LnNlY3Rpb247XG4gIHJldHVybiBza2lsbHNTZWN0aW9uT2JqZWN0LnNlY3Rpb247XG59XG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdmb290ZXInLFxuICAgIGNsYXNzZXM6IFsnZm9vdGVyJ10sXG4gIH0pO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzZXM6IFsnZm9vdGVyX193cmFwcGVyJywgJ3dyYXBwZXInXSxcbiAgfSk7XG5cbiAgY29uc3QgY29weXJpZ2h0U3RyaW5nID0gJ8KpINCQLiDQk9C+0YDQsdC10L3QutC+ICcgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgY29weXJpZ2h0ID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fY29weXJpZ2h0J10sXG4gICAgdGV4dENvbnRlbnQ6IGNvcHlyaWdodFN0cmluZyxcbiAgfSk7XG5cbiAgY29uc3QgY29weXJpZ2h0RGVzaWduID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fY29weXJpZ2h0J10sXG4gIH0pO1xuXG4gIGNvbnN0IGNvcHlyaWdodERlc2lnbkxpbmsgPSByZXR1cm5FbGVtZW50KHtcbiAgICB0YWc6ICdhJyxcbiAgICBjbGFzc2VzOiBbJ2Zvb3Rlcl9fbGluaycsICdsaW5rJ10sXG4gICAgdGV4dENvbnRlbnQ6ICdkZXNpZ246IFJ1dmVuVGhlbWVzJyxcbiAgICBhdHRyaWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2hyZWYnLFxuICAgICAgICB2YWx1ZTogJ2h0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L3VzZXIvcnV2ZW50aGVtZXMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ3RhcmdldCcsXG4gICAgICAgIHZhbHVlOiAnX2JsYW5rJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSk7XG5cbiAgY29weXJpZ2h0RGVzaWduLmFwcGVuZChjb3B5cmlnaHREZXNpZ25MaW5rKTtcbiAgd3JhcHBlci5hcHBlbmQoY29weXJpZ2h0LCBjb3B5cmlnaHREZXNpZ24pO1xuICBmb290ZXIuYXBwZW5kKHdyYXBwZXIpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG4iLCJpbXBvcnQgcmV0dXJuRWxlbWVudCBmcm9tICcuL2NvbW1vbi9yZXR1cm5FbGVtZW50JztcbmltcG9ydCByZXR1cm5IZWFkZXIgZnJvbSAnLi9oZWFkZXIvcmV0dXJuSGVhZGVyJztcbmltcG9ydCByZXR1cm5NYWluIGZyb20gJy4vbWFpbi9yZXR1cm5NYWluJztcbmltcG9ydCByZXR1cm5Gb290ZXIgZnJvbSAnLi9yZXR1cm5Gb290ZXInO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lL3RoZW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuUGFnZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keScpO1xuICBpZiAodGhlbWUgPT09ICdkYXJrJykge1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keV9kYXJrJyk7XG4gIH1cbiAgY29uc3QgcGFnZVRpdGxlID0gcmV0dXJuRWxlbWVudCh7XG4gICAgdGFnOiAnaDEnLFxuICAgIGNsYXNzZXM6IFsnYm9keV9fdGl0bGUnXSxcbiAgICB0ZXh0Q29udGVudDogJ0Rlc21vbmQgcmVzdW1lJyxcbiAgfSk7XG4gIGNvbnN0IGhlYWRlciA9IHJldHVybkhlYWRlcigpO1xuICBjb25zdCBtYWluID0gcmV0dXJuTWFpbigpO1xuICBjb25zdCBmb290ZXIgPSByZXR1cm5Gb290ZXIoKTtcblxuICBib2R5LmFwcGVuZChwYWdlVGl0bGUsIGhlYWRlciwgbWFpbiwgZm9vdGVyKTtcbn1cbiIsImltcG9ydCB7IGNoYW5nZVNjcm9sbEJvZHkgfSBmcm9tICcuL2NoYW5nZVNjcm9sbEJvZHknO1xuaW1wb3J0IHsgcGFnZUVsZW1lbnRzIH0gZnJvbSAnLi9jb21tb24vcGFnZUVsZW1lbnRzJztcbmltcG9ydCB7IGNsb3NlQnVyZ2VyTWVudSB9IGZyb20gJy4vaGVhZGVyL21lbnUnO1xuaW1wb3J0IHsgY2hlY2tJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgaGlkZUhlYWRlciB9IGZyb20gJy4vaW50ZXJhY3RpdmUvdmlzaWJsZSc7XG5pbXBvcnQgcmV0dXJuUGFnZSBmcm9tICcuL3JldHVyblBhZ2UnO1xuaW1wb3J0IHsgY2hhbmdlVGhlbWUsIHNldFRoZW1lLCBzZXRUaGVtZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi90aGVtZS90aGVtZSc7XG5cbmZ1bmN0aW9uIHN0YXJ0QXBwKCkge1xuICBzZXRUaGVtZSgpO1xuICByZXR1cm5QYWdlKCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWRlSGVhZGVyKTtcbiAgcGFnZUVsZW1lbnRzLnN1YnN0cmF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQnVyZ2VyTWVudSk7XG4gIHBhZ2VFbGVtZW50cy5tZW51TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQnVyZ2VyTWVudSk7XG4gIHBhZ2VFbGVtZW50cy50aGVtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRoZW1lKTtcbiAgcGFnZUVsZW1lbnRzLm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VTY3JvbGxCb2R5KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGVja0ludGVyYWN0aXZlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tJbnRlcmFjdGl2ZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBzZXRUaGVtZVRvTG9jYWxTdG9yYWdlKTtcbn1cblxuZXhwb3J0IHsgc3RhcnRBcHAgfTtcbiIsImxldCB0aGVtZTogc3RyaW5nO1xuXG5mdW5jdGlvbiBnZXRUaGVtZUZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVzdW1lQUctdGhlbWUnKSAhPT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN1bWVBRy10aGVtZScpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUaGVtZSgpIHtcbiAgY29uc3QgdGhlbWVGcm9tTFMgPSBnZXRUaGVtZUZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgaWYgKHR5cGVvZiB0aGVtZUZyb21MUyA9PT0gJ3N0cmluZycpIHtcbiAgICB0aGVtZSA9IHRoZW1lRnJvbUxTO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHByZWZlcnNEYXJrU2NoZW1lID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcbiAgICBpZiAocHJlZmVyc0RhcmtTY2hlbWUubWF0Y2hlcykge1xuICAgICAgdGhlbWUgPSAnZGFyayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW1lID0gJ2xpZ2h0JztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VGhlbWVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jlc3VtZUFHLXRoZW1lJywgdGhlbWUpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnYm9keV9kYXJrJyk7XG4gIHRoZW1lID0gdGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG59XG5cbmV4cG9ydCB7IHRoZW1lLCBzZXRUaGVtZSwgc2V0VGhlbWVUb0xvY2FsU3RvcmFnZSwgY2hhbmdlVGhlbWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vYXNzZXRzL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBzdGFydEFwcCB9IGZyb20gJy4vYXNzZXRzL3RzL3N0YXJ0QXBwJztcblxuc3RhcnRBcHAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==