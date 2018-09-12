function activateGallery () {

  let thumbnails = document.querySelectorAll('#gallery-thumbs img')
  let mainImage = document.querySelector('#gallery-photo img')

  let galleryInfo = document.querySelector('#gallery-info')
  let title = galleryInfo.querySelector('.title')
  let description = galleryInfo.querySelector('.description')

  thumbnails.forEach(function (thumbnail) {

    // Preload large images
    let newImageSrc = thumbnail.dataset.largeVersion
    let largeVersion = new Image()
    largeVersion.src = newImageSrc

    thumbnail.addEventListener('click', function () {
      let newImageSrc = thumbnail.dataset.largeVersion
      let newImageAlt = thumbnail.alt
      mainImage.setAttribute('src', newImageSrc)
      mainImage.setAttribute('alt', newImageAlt)
      title.textContent = thumbnail.dataset.title
      description.textContent = thumbnail.dataset.description

      document.querySelector('.current').classList.remove('current')
      thumbnail.parentNode.classList.add('current')
    })
  })
}
