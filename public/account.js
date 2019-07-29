

let userInfo = {
    "id": 3,
    "userName": "realUser221"
}

let profileInfo = {
    
}

let sessionToken = "bbbbbb"



const displayUserName = (data) => {
    $(".js-user-intro").append(` ${data.userName}`)


}

const getUserName = (callBackFn) => {

    callBackFn(userInfo)


}





const getSessionToken = () => {

}

const startApp = () => {
    getUserName(displayUserName)

}

$(startApp)