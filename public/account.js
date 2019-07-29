

let userInfo = {
    "id": 3,
    "userName": "realUser221"
}

let emailSettings = {
    "emailAddress": "fakeemail@email.com",
    "sendMessageNotifications" : true,
    "sendTransactionNotifications" : false

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

const handleEmailSettings = (callBackFn) => {

    let emailSettingsShown = false;


    $('.js-email-link').on('click', function(event){
        event.preventDefault()
        if(emailSettingsShown == false) {

            callBackFn(emailSettings)
            emailSettingsShown = true;
            
        }

        else{
            $('.js-email-section').empty()
            emailSettingsShown = false;
        }
        
    })

}

const displayEmailSettings = (data) => {
    $('.js-email-section').append(`<p>Your email address is: ${data.emailAddress}</p>
    <p>Send Message Notifications: ${data.sendMessageNotifications}</p>
    <p>Send Transaction Notifications: ${data.sendTransactionNotifications}</p>`)


}






const getSessionToken = () => {

}

const startApp = () => {
    getUserName(displayUserName)
    handleEmailSettings(displayEmailSettings)

}

$(startApp)