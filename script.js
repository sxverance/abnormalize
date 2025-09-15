// ===========================
// VARIABLE DECLARATIONS
// ===========================
const introScreen = document.getElementById('introScreen');
const winterMsg = document.getElementById('winterMessage');
const innerSnowContainer = winterMsg.querySelector('.inner-snow');
const trailContainer = winterMsg.querySelector('.trail-container');
const outerSnowContainer = document.querySelector('.snow');
const infoPanel = document.getElementById('infoPanel');

// ===========================
// INTRO SCREEN + WINTER MESSAGE
// ===========================
window.addEventListener('load', () => {
  // Step 1: Fade out intro after 3 seconds
  setTimeout(() => {
    introScreen.classList.add('fade-out');

    // Step 2: Show winter message after intro fades (1 second delay)
    setTimeout(() => {
      winterMsg.classList.add('show');

      // Step 3: Start inner snowflakes inside winter message
      const innerSnowInterval = setInterval(() => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('inner-snowflake');
        snowflake.textContent = '❄';

        snowflake.style.left = Math.random() * 80 + '%';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.style.animationDuration = (Math.random() * 2 + 2) + 's';

        innerSnowContainer.appendChild(snowflake);

        setTimeout(() => snowflake.remove(), 4000);
      }, 300);

      // Step 4: Start glitter trail particles
      const trailInterval = setInterval(() => {
        const particle = document.createElement('div');
        particle.classList.add('trail-particle');
        particle.textContent = '❄✨';

        const randomX = (Math.random() - 0.5) * 50; // horizontal drift
        const randomY = Math.random() * 50 + 30;    // vertical drift
        const randomDuration = Math.random() * 1 + 0.8; // seconds

        particle.style.setProperty('--x', randomX + 'px');
        particle.style.setProperty('--y', randomY + 'px');
        particle.style.animationDuration = randomDuration + 's';
        particle.style.left = '50%';
        particle.style.top = '0px';

        trailContainer.appendChild(particle);
        setTimeout(() => particle.remove(), randomDuration * 1000);
      }, 100);

      // Step 5: Stop inner snow and trail particles after 5 seconds
      setTimeout(() => {
        clearInterval(innerSnowInterval);
        clearInterval(trailInterval);
      }, 5000);

    }, 1000); // Delay before showing winter message
  }, 3000); // Delay before fading out intro
});

// ===========================
// TOGGLE PANEL FUNCTION
// ===========================
function togglePanel() {
  infoPanel.classList.toggle('open');
}

// ===========================
// OUTER SNOWFALL EFFECT
// ===========================
function createOuterSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';

  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
  snowflake.style.opacity = Math.random();

  outerSnowContainer.appendChild(snowflake);

  setTimeout(() => snowflake.remove(), 5000);
}

// Continuous outer snow
setInterval(createOuterSnowflake, 200);

// After winter message fades (5 seconds after showing it)
setTimeout(() => {
  const pageFooter = document.getElementById('pageFooter');
  pageFooter.classList.add('show');
}, 5000 + 3000 + 1000); 
/* Explanation of timing:
   3000ms intro screen
 + 1000ms delay before winter message
 + 5000ms winter message duration
 = 9000ms total
*/

