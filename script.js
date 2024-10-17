const image = document.querySelector('#image')

window.onload = async () => {
    // const response = await fetch('https://dog.ceo/api/breeds/image/random')
    // const json = await response.json()

    // console.log('load', json.message)
    // image.setAttribute('src', json.message)

    loadImage()
}

async function loadImage() {

    const imageApi = image.dataset.api
    const response = await fetch(imageApi)

    try {
        const json = await response.json()
        image.setAttribute('src', json.message)

    } catch (err) {
        console.log("Error con el JSON")
        image.setAttribute('src', response.url)
    }


}