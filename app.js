const BOX__NOTIFICATIONS = document.querySelector('.box__notifications')
const BOX__RADIO = document.myForm.text
const requestURL = `https://raw.githubusercontent.com/sulemanof/js-lectures/master/dom-bom/MOCK_DATA.json`

function requstNotification(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            addElement(data)
        })
}

requstNotification(requestURL)

function addElement(arr) {
    BOX__RADIO.forEach((item) => {
        item.addEventListener('click', (event) => {
            let index = event.target.value
            let not = arr.find((item) => item.id == index)
            console.log(not.title)
        })
    })
}
