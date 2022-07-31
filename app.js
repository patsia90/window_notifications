const BOX__NOTIFICATIONS = document.querySelector('.box__notifications')
const BOX__BTN = document.getElementById('box__button')
const BOX__CHECKBOX = document.getElementById('box__checkbox')
const BOX__PREVIOUS = document.getElementById('box__previous')
const BOX__NEXT = document.getElementById('box__next')
const BOX = document.querySelector('.box')
const BOX__FORM = document.myForm.text
const BOX__RADIO = document.querySelector('.radio')

BOX__BTN.addEventListener('click', () => (BOX.style.display = 'none'))
BOX__CHECKBOX.addEventListener('change', save)

function loadNot(url) {
    return fetch(url).then((response) => response.json())
}

function save() {
    if (BOX__CHECKBOX.checked) {
        localStorage.setItem('checkbox', true)
    } else localStorage.setItem('checkbox', false)
}

function nextAddElement() {
    const arr = Array.from(BOX__FORM)
    let index = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked && i === 9) {
            index = arr[0]
        } else if (arr[i].checked) {
            index = arr[i + 1]
        }
    }
    index.click()
}

function prevAddElement() {
    const arr = Array.from(BOX__FORM)
    let index = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked && i !== 0) {
            index = arr[i - 1]
        } else if (arr[i].checked) {
            index = arr[arr.length - 1]
        }
    }
    index.click()
}

function showNot(data) {
    BOX__FORM.forEach((item) => {
        item.addEventListener('change', (event) => {
            let obj = data.find((elem) => elem.id == event.target.value)
            while (BOX__NOTIFICATIONS.firstChild) {
                BOX__NOTIFICATIONS.firstChild.remove()
            }
            BOX__NOTIFICATIONS.append(`${obj.id}. ${obj.phrase}`)
        })
    })
}

function loadPage() {
    if (JSON.parse(localStorage.getItem('checkbox')) === false) {
        loadNot(`https://raw.githubusercontent.com/sulemanof/js-lectures/master/dom-bom/MOCK_DATA.json`).then((data) => {
            showNot(data)
            nextAddElement(data)
            BOX__NEXT.addEventListener('click', () => nextAddElement(data))
            BOX__PREVIOUS.addEventListener('click', () => prevAddElement(data))
        })
    } else BOX.style.display = 'none'
}

loadPage()
