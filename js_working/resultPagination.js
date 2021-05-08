// Need to work later!!

export const pagination = (resultArray) => {
  // console.log('Pagination needed!!', resultArray);

  const prevButton = document.getElementById('button_prev')
  const nextButton = document.getElementById('button_next')
  const clickPageNumber = document.querySelectorAll('.clickPageNumber')

  let current_page = 1
  const records_per_page = 10

  changePage(1, resultArray);
  pageNumbers(resultArray);
  selectedPage();
  clickPage();
  addEventListeners();
}

const addEventListeners = function () {
  prevButton.addEventListener('click', prevPage)
  nextButton.addEventListener('click', nextPage)
}

const selectedPage = function () {
  let page_number = document
    .getElementById('page_number')
    .getElementsByClassName('clickPageNumber')
  for (let i = 0; i < page_number.length; i++) {
    if (i == current_page - 1) {
      page_number[i].style.opacity = '1.0'
    } else {
      page_number[i].style.opacity = '0.5'
    }
  }
}

const checkButtonOpacity = function () {
  current_page == 1
    ? prevButton.classList.add('opacity')
    : prevButton.classList.remove('opacity')
  current_page == numPages()
    ? nextButton.classList.add('opacity')
    : nextButton.classList.remove('opacity')
}

const changePage = function (page, resultArray) {
  const listingTable = document.getElementById('listingTable')

  if (page < 1) {
    page = 1
  }
  if (page > numPages() - 1) {
    page = numPages()
  }

  listingTable.innerHTML = ''

  for (
    var i = (page - 1) * records_per_page;
    i < page * records_per_page && i < resultArray.length;
    i++
  ) {
    listingTable.innerHTML +=
      "<div class='objectBlock'>" + resultArray[i].adName + '</div>'
  }
  checkButtonOpacity()
  selectedPage()
}

const prevPage = function () {
  if (current_page > 1) {
    current_page--
    changePage(current_page)
  }
}

const nextPage = function () {
  if (current_page < numPages()) {
    current_page++
    changePage(current_page)
  }
}

const clickPage = function () {
  document.addEventListener('click', function (e) {
    if (
      e.target.nodeName == 'SPAN' &&
      e.target.classList.contains('clickPageNumber')
    ) {
      current_page = e.target.textContent
      changePage(current_page)
    }
  })
}

const pageNumbers = function (resultArray) {
  let pageNumber = document.getElementById('page_number')
  pageNumber.innerHTML = ''

  for (let i = 1; i < numPages() + 1; i++) {
    pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + '</span>'
  }
}

const numPages = function () {
  return Math.ceil(resultArray[i] / records_per_page)
}
