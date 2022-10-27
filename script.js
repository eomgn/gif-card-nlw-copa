let isIgnite = true
let isExplorer = true

const card = document.querySelector('.card')
const bodyBG = document.querySelector('body')

function changeCard() {
   /* SELECT CLASS */

   /* BACKGROUND - CONDICIONAL TERNARIO */
   const bgExplorer = isExplorer
      ? (bodyBG.style.backgroundImage =
           'linear-gradient(150deg, #0f2b05, #000000)')
      : (bodyBG.style.backgroundImage =
           'linear-gradient(150deg, #313BC8, #000000)')
   isExplorer = !isExplorer

   /* IMG - CONDICIONAL TERNARIO */
   const backgroundImage = isIgnite
      ? 'url(./assets/bg-ignite.svg)'
      : 'url(./assets/bg-explorer.svg)'
   isIgnite = !isIgnite

   bodyBG.style.background = bgExplorer
   card.style.backgroundImage = backgroundImage
}
