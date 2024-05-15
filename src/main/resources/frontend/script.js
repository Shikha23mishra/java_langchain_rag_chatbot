function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<p>User: " + userInput + "</p>";

    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInput)
    })
    .then(response => response.json())
    .then(data => {
        chatBox.innerHTML += "<p>" + data.botResponse + "</p>";
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => console.error("Error:", error));

    document.getElementById("user-input").value = "";
}
