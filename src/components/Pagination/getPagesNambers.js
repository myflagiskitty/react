export default (currentPage, pagesNumber) => {//текущая страница    всего страниц
  // текущая страница 1, всего страниц 1000
  // вернуться массив [1,2,3, undefined,1000]
  if (currentPage <= 3) {
    if (currentPage === 1) {
      return [currentPage, currentPage + 1, currentPage + 2, undefined, pagesNumber]
    }
    if (currentPage === 2) {
      return [currentPage - 1, currentPage, currentPage + 1, undefined, pagesNumber]
    }
    if (currentPage === 3) {
      return [currentPage - 2, currentPage - 1, currentPage, undefined, pagesNumber]
    }
  }
  // текущая страница 100, всего страниц 1000
  // вернуться массив [1,undefined,99,100,101, undefined,1000]
  if (currentPage >= 4 && currentPage <= pagesNumber - 3) {
    return [1, undefined, currentPage, currentPage + 1, currentPage + 2, undefined, pagesNumber]
  }

  // текущая страница 1000, всего страниц 1000
  // вернуться массив [1, undefined, 998, 999, 1000]
  if (currentPage === pagesNumber || currentPage === pagesNumber - 1 || currentPage === pagesNumber - 2) {
    if (currentPage === pagesNumber) {
      return [1, undefined, currentPage - 2, currentPage - 1, pagesNumber]
    }
    if (currentPage === pagesNumber - 1) {
      return [1, undefined, currentPage - 1, currentPage, pagesNumber]
    }
    if (currentPage === pagesNumber - 2) {
      return [1, undefined, currentPage, currentPage + 1, pagesNumber]
    }
  }
}