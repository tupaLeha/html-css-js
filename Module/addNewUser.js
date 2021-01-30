function createFormField(config) {
    const {
        name,
        text,
        placeholder
    } = config
    const label = document.createElement('div');
    label.textContent = text
    label.className = 'label'

    const input = document.createElement('input');
    input.name = name;
    input.placeholder = placeholder;

    const wrapper = document.createElement('div');
    wrapper.className = 'form-field'

    wrapper.appendChild(label)
    wrapper.appendChild(input)
    return wrapper
}

const FORM_CONFIG = [
    {
        name: 'name',
        text: 'Name',
        placeholder: 'Enter your user name'
    },
    {
        name: 'email',
        text: 'Email',
        placeholder: 'Enter your user email'
    },
    {
        name: 'website',
        text: 'Website',
        placeholder: 'Enter your user website'
    }
]

const BUTTON_CONFIG = [
    {
        type: 'button',
        text: 'Cancel',
        color: 'danger',
    },
    {
        type: 'submit',
        text: 'Save',
        color: 'success',
    }
]

function createButton(config) {
    const {
        type,
        text,
        color
    } = config

    const button = document.createElement('button')
    button.type = type
    button.textContent = text
    button.className = `button-${color}`

    return button
}

function deleteForm(isNeedDelete) {
    const userList = document.getElementById('user-list');
    if (isNeedDelete && userList.getElementsByTagName('form').length > 0) {
        userList.getElementsByTagName('form')[0].remove()
    }
}

function onSubmit(event) {
    event.preventDefault()

    const {
        target: {
            elements
        }
    } = event
    const userList = document.getElementById('user-list');
    const user = {
        name: elements.name.value,
        email: elements.email.value,
        website: elements.website.value,
        id: Math.random(),
    }


    if (user.name.length === 0 || user.email.length === 0 || user.website.length === 0) {
        const warningText = document.createElement('div')
        const br = document.createElement('br')
        warningText.textContent = `Введите все поля!`
        warningText.style.color='red'
        userList.getElementsByTagName('form')[0].append(br)
        userList.getElementsByTagName('form')[0].append(warningText)
        return
    }

    if (user.name.length < 4 || user.email.length < 4 || user.website.length < 4) {
        alert("Каждое поле должно иметь 4 символа.");
        return
    }



    // createUserCard
    const {
        name,
        email,
        website
    } = user
    const userCard = document.createElement('div')
    // userCard.textContent = name
    userCard.className = 'user-card'

    const info = document.createElement('div')
    info.className = 'user-info'

    const userName = document.createElement('h4')
    userName.textContent = name

    const userEmail = document.createElement('div')
    userEmail.textContent = `Email: ${email}, website: ${website}`

    const userAvatar = document.createElement('img')
    userAvatar.src = AVATAR_URL + name

    userCard.appendChild(userAvatar)

    userCard.appendChild(info)
    info.appendChild(userName)
    info.appendChild(userEmail)

    document.getElementsByClassName('user-card')[0].insertAdjacentElement('beforebegin', userCard)
    deleteForm(true)
    blinkNewUser()
}

function blinkNewUser() {
    const userList = document.getElementById('user-list');
    const firstCard = userList.getElementsByClassName('user-card')[0];
    firstCard.style.borderColor = 'green'

    setTimeout(() => {
        firstCard.style.borderColor = '#9e9e9e'
    }, 5000)

}

function onButtonClick(event) {
    const userList = document.getElementById('user-list');
    if (userList.getElementsByTagName('form').length > 0) return
    const form = document.createElement('form');
    FORM_CONFIG.forEach(config => {
        const formField = createFormField(config)

        form.appendChild(formField)
    })
    const addUserButton = event.currentTarget

    const buttonsWrapper = document.createElement('div')
    buttonsWrapper.className = 'buttons-wrapper'
    console.log(buttonsWrapper)

    BUTTON_CONFIG.forEach(config => {
        const button = createButton(config)

        if (config.type === 'button') {
            button.onclick = () => {
                form.remove()
            }
        }

        buttonsWrapper.appendChild(button)
    })

    form.appendChild(buttonsWrapper)

    form.onsubmit = onSubmit

    addUserButton.after(form)
}

function addNewUserButtonHandler() {
    const buttonElement = document.getElementById('add-new-user');

    buttonElement.onclick = onButtonClick;
}