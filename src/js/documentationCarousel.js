const thumbnailsContainer = document.querySelector('#thumbnailsContainer');
const sidebarContainer = document.querySelector('#sideContainer');
const bigPict = document.querySelector('#bigPict');
const bigPictTitle = document.querySelector('#bigPictTitle');
const bigPictDesc = document.querySelector('#bigPictDesc');
const documentationPrevButton = document.querySelector('#documentationPrevButton');
const documentationNextButton = document.querySelector('#documentationNextButton');

const thumbnailsContainerHeight = 303;

const documentations = [
  {
    pict:'info-session-1.webp',
    title: "GDSC UII Info Session",
    description: "Info Session GDSC UII 2022."
  },
  {
    pict:'info-session-2.webp',
    title: "GDSC UII Info Session",
    description: "Refactory x GDSC UII 2022."
  },
  {
    pict:'it-career-1.webp',
    title: "GDSC UII IT Career Day",
    description: "Women Can Make IT Too in Tech by Rininta Hanum (Vice President of IBISMA UII)."
  },
  {
    pict:'it-career-2.webp',
    title: "GDSC UII IT Career Day",
    description: "Aryo Wirawan (Founder dan CEO Jala Tech) at Community Summit 2022."
  },
  {
    pict:'it-career-3.webp',
    title: "GDSC UII IT Career Day",
    description: "Lean Canvas Building Game at Community Summit 2022."
  },
  {
    pict:'hackathon-1.webp',
    title: "Health & Edu AI Hackathon",
    description: "Hestyriani Anisa Widyaningsih (CEO of Widya Edu) and Dara Mawar Jelita (Program Manager @ BLOCK71) at Health & Edu AI Hackathon 2022."
  },
  {
    pict:'hackathon-2.webp',
    title: "Health & Edu AI Hackathon",
    description: "Making Idea session at Health & Edu AI Hackathon 2022."
  },
  {
    pict:'hackathon-3.webp',
    title: "Health & Edu AI Hackathon",
    description: "Winners of Health & Edu AI Hackathon 2022"
  },
];
let bigPictIndex = 0;

const changeIndex = (index) => {
  bigPictIndex = index;
}

const generateThumbnail = (pict, index) => `<button aria-label="picture button" class="picture-button block lg:max-w-[60px] min-w-[60px] h-[60px] bg-slate-400 ${index === bigPictIndex ? ' border-4 border-yellow-500' : 'border border-black'}">
  <img class="h-full w-full object-cover" src="./Documentation_Photos/${pict}" alt="gdsc-event" />
</button>`

thumbnailsContainer.innerHTML = documentations.map((doct, index) => generateThumbnail(doct.pict, index)).join('');
bigPict.src = `./Documentation_Photos/${documentations[bigPictIndex].pict}`;
bigPictTitle.textContent = documentations[bigPictIndex].title;
bigPictDesc.textContent = documentations[bigPictIndex].description;

document.querySelectorAll('.picture-button').forEach((button, i) => {
  button.addEventListener('click', () => {
    bigPictIndex = i;
    changePict();
  });
});

documentationPrevButton.addEventListener('click', () => {
  if( bigPictIndex <= 0 ) {
    return;
  } 
  bigPictIndex--;
  if( bigPictIndex === 3 ) {
    sidebarContainer.scrollTo(0,0);
  } 
  changePict();
});

documentationNextButton.addEventListener('click', () => {
  if( bigPictIndex >= documentations.length-1 ) {
    return;
  }
  bigPictIndex++;
  if( bigPictIndex === 4 ) {
    sidebarContainer.scrollTo(0,thumbnailsContainerHeight);
  }

  changePict();
});

function changePict() {
  thumbnailsContainer.innerHTML = documentations.map((doct, index) => generateThumbnail(doct.pict, index)).join('');
  document.querySelectorAll('.picture-button').forEach((button, i) => {
    button.addEventListener('click', () => {
      bigPictIndex = i;
      changePict();
    });
  });
  bigPict.src = `./Documentation_Photos/${documentations[bigPictIndex].pict}`;
  bigPictTitle.textContent = documentations[bigPictIndex].title;
  bigPictDesc.textContent = documentations[bigPictIndex].description;
}


