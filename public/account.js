

let userInfo = {
    "id": 3,
    "userName": "realUser221"
}

let emailSettings = {
    "emailAddress": "fakeemail@email.com",
    "sendMessageNotifications" : true,
    "sendTransactionNotifications" : false

}

let profileSettings = {
    "name":"Christopher",
    "image":"smiley.jpg"
    
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
    $('.js-email-section').append(`<p>Your email address is: ${data.emailAddress}<button>Change Email Address</button></p>
    <p><input type = "checkbox" id = "message-notifications" name="message-notifications" checked><label for="message-notifications">
    Send Message Notifications</label> </p>
    <p><input type = "checkbox" id = "transaction-notifications" name="transaction-notifications" checked><label for = "transaction-notifications">
    Send Transaction Notifications</label></p>`)

    if(data.sendMessageNotifications == false){
        $("#message-notifications").prop("checked", false)

    }

    if(data.sendMessageNotifications == true){
        $("#message-notifications").prop("checked", true)
        
    }

    if(data.sendTransactionNotifications == false){
        $("#transaction-notifications").prop("checked", false)

    }

    if(data.sendTransactionNotifications == true){
        $("#transaction-notifications").prop("checked", true)
        
    }


}

const handleProfileSettings = (callBackFn) => {
    let profileSettingsShown = false;


    $('.js-profile-link').on('click', function(event){
        event.preventDefault()
        if(profileSettingsShown == false) {

            callBackFn(profileSettings)
            profileSettingsShown = true;
            
        }

        else{
            $('.js-profile-section').empty()
            profileSettingsShown = false;
        }
        
    })

}

const displayProfile = (data) => {
    $('.js-profile-section').append(`<p>Your Name is: ${data.name}<button>Change Name</button></p>
    <p>Profile Image: <img src = ${data.image} height = 30 width =30 ><button>Change Image</button></p>`)

}






const getSessionToken = () => {

}

const startApp = () => {
    getUserName(displayUserName)
    handleEmailSettings(displayEmailSettings)
    handleProfileSettings(displayProfile)

}

$(startApp)