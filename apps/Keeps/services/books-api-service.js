export const BooksApiService = {
    getBooks
}

function getBooks(searchBy) {
    console.log('searchBy', searchBy)
    const prm = axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchBy}%20javascript`)
        .then(res => res.data)
    return prm;
}

// function getUserRepos(user) {
//     const prm = axios.get(`https://api.github.com/users/${user.login}/repos`)
//         .then(res => res.data)

//     return prm;
// }

// function loadUsersData() {
//    const users = loadFromStorage(KEY)
//     if (!users||!users.length){
//         return ask()
//         .then(users => {
//             var allUsersPrms = users.map(user => getUserRepos(user))
//             return Promise.all(allUsersPrms)
//             .then(users => saveToStorage(KEY,users))
//         })
//     }
//     else return users
// }