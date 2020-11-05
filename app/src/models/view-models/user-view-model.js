export class UserViewModel {
    constructor(user) {
        this.id = user._id;
        this.username = user.username;
        this.email = user.email;
        this.createdAt = user.createdAt;
    }
}    