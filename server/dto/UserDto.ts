export default class UserDto {
    name
    login
    email
    id
    isActivated
    about

    constructor(model) {
        this.name = model.name
        this.login = model.login
        this.email = model.email
        this.id = model.id
        this.isActivated = model.isActivated
        this.about = model.about
    }
}