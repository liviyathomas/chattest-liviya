let connection = new signalR.HubConnectionBuilder().withUrl("/ChatHub").build(); 
connection.start().then(() => console.log("connected"))
 .catch((err) => console.log(err));

//subscribe to event method
connection.on("Receivedmessage", (data) => {
    //use data
    var messageEle = document.querySelector("messages");
    var liELe = document.createElement("li");
    liELe.innerHTML = '<b>username: ${data.user}</b> ${data.message}';
    messageEle.appendChild(liELe);
});
//trigger server method
function send() {
    let username = document.querySelector("[name=username]").value;
    let message = document.querySelector("[name=msg]").value;
    if (username != "" && message != "") {
        connection.invoke("SendMessage", username, message).catch((err) => console.log(err));
    }

}
