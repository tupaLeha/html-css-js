const AVATAR_URL = 'https://eu.ui-avatars.com/api/?name='
const createUserCard = (user) => {

    const { name,
        email,
        website
    } = user
    const userCard  = document.createElement('div')
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

    userListElem.appendChild(userCard)


    // img.after(info)
}
const showUsers = (users) => {
    // const newTag = document.createElement('div')
    // newTag.textContent = 'Im Created'
    //
    // document.body.appendChild(newTag)
    users.forEach(createUserCard)
}