const navCloseBtn = document.querySelector('.header__nav--close');
const navOpenBtn = document.querySelector('.header__img--menu');

const navContainer = document.querySelector('.header__nav');

const subLinkContainerOne = document.querySelector('.link__sub--link');
const subLinkContainerTwo = document.querySelector('.link__sub--link-two');

const features = document.querySelector('.features');
const company = document.querySelector('.company');

let bodyEl = document.querySelector('body');

// ___________________________________________________________________________

navCloseBtn.addEventListener('click', function () {
	navContainer.classList.toggle('display-nav');
	bodyEl.classList.remove('overlay');
});

navOpenBtn.addEventListener('click', function () {
	navContainer.classList.toggle('display-nav');
	bodyEl.classList.add('overlay');
});

// ---------------------------------------------------------------------

// toggling sublinks of features and company

features.addEventListener('click', function () {
	const subLinkContainerOne = document.querySelector('.link__sub--link');

	const arrowUp = document.querySelector('.up');
	const arrowDown = document.querySelector('.down');

	handleSubLinks(subLinkContainerOne);

	handleArrow(arrowUp, arrowDown);
});

company.addEventListener('click', function () {
	const subLinkContainerTwo = document.querySelector('.link__sub--link-two');
    const arrowUpTwo = document.querySelector('.uptwo');
	const arrowDownTwo = document.querySelector('.downtwo');

	handleSubLinks(subLinkContainerTwo);
	handleArrow(arrowUpTwo, arrowDownTwo);
});

// function for hadling sublinks popup
function handleSubLinks(el) {
	if (el.classList.contains('hidden')) {
		el.classList.remove('hidden');
	} else {
		el.classList.add('hidden');
	}
}

// function for hadling arrow toggle
function handleArrow(arrow, arrowtwo) {
	if (arrow.classList.contains('hidden')) {
		arrow.classList.remove('hidden');
		arrowtwo.classList.add('hidden');
	} else if (arrowtwo.classList.contains('hidden')) {
		arrowtwo.classList.remove('hidden');
		arrow.classList.add('hidden');
	}
}
