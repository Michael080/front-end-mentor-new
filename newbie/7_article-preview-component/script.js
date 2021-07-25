const container = document.querySelector('.container');
const description = document.querySelector('.description');
// footer selectors
const footerInitial = document.querySelector('.footer-initial');
const footerActive = document.querySelector('.footer-active');
const btns = document.querySelectorAll('.btn-container');
// tooltip selectors
const tooltip = document.querySelector('.tooltip');

function getWidth() {
  return window.innerWidth;
}

function toggleFooters() {
    footerInitial.classList.toggle('hidden');
    footerActive.classList.toggle('hidden');
}

function adjustDescriptionMargin(type) {
  const marginActive = '37px';
  const marginHidden = '96px';

  const adjustMargin = {
    down: () => {
      description.style.marginBottom = marginActive;
    },
    up: () => {
      description.style.marginBottom = marginHidden;
    }
  }

  return adjustMargin[type]();
}

function toggleTooltip(isTooltipHidden, adjustMargin = false) {
  const marginActive = '37px';
  const marginHidden = '96px';

  if (isTooltipHidden && adjustMargin) {
    adjustDescriptionMargin('down');
    tooltip.classList.toggle('hidden');
  } else {
    adjustDescriptionMargin('up');
    tooltip.classList.toggle('hidden');
  }
}

// Add event-listeners
btns.forEach(btn => btn.addEventListener('click', screenStyles));

// Modify CSS according to users screen-size
function screenStyles() {
  const isClickEvent = event.type === 'click';
  const greaterThan899 = getWidth() >= 900;
  const isTooltipHidden = tooltip.classList.contains('hidden');

  // Toggle tooltip visibility on-click of share button
  function isGreater() {
    isClickEvent ? toggleTooltip(isTooltipHidden, true) : console.log('nope');
  }

  function notGreater() {
    toggleFooters();
    //  Hide tooltip
    isTooltipHidden ? false : tooltip.classList.add('hidden');
  }

  const objectSwitch = {
    'true': isGreater,
    'false': notGreater
  }

  if (isClickEvent) {
    console.log('CLICK');
    return objectSwitch[greaterThan899]();
  } else {
    
    if (!footerActive.classList.contains('hidden') && greaterThan899) {
      toggleFooters();
      toggleTooltip(true, true);
    } else if (!isTooltipHidden && !greaterThan899) {
      console.log('less than 899');
      toggleTooltip(isTooltipHidden, true);
      toggleFooters();
    }
  }
}

// Resize event-listener
window.addEventListener('resize', screenStyles);