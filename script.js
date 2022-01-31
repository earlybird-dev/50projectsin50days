const columns = document.querySelectorAll('.column')
console.log(columns)

columns.forEach(function (column) {
  column.addEventListener('click', function () {
    columns.forEach(function (column) {
      column.classList.remove('active')
      column.classList.add('non-active')
    })
    column.classList.remove('non-active')
    column.classList.add('active')
  })
})
