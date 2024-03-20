import AddTodoForm from './AddTodoForm.js';
import TodoList from './TodoList.js';
const listNode = document.getElementById('list');
const formNode = document.getElementById('form');
const todoList = new TodoList(listNode);
let firstPage = false;
let secondPage = false;
globalThis.messageCounter = 0;
new AddTodoForm(formNode, (subject, body) => {
    if (list) {
        todoList.add(subject, body);
        messageCounter++;
        updateMessageButton(messageCounter);
        updateMessageLabel(messageCounter);
        list.style.display = "none";
    }
});
const addMessageButton = document.getElementById("addMessageButton");
const messageButton = document.getElementById("messageButton");
const form = document.getElementById("form");
const list = document.getElementById("list");
const listLabel = document.getElementById("listLabel");
const subject = document.getElementById("subject");
const body = document.getElementById("body");
const sectionFirstPage = document.getElementById("sectionFirstPage");
const sectionSecondPage = document.getElementById("sectionSecondPage");
// if(sectionFirstPage && sectionSecondPage) {
//     sectionFirstPage.style.display = 'block';
//     sectionSecondPage.style.display = 'none';
// }
if (messageButton && addMessageButton) {
    messageButton.addEventListener("click", handleClickMessageButton);
    addMessageButton.addEventListener("click", handleClickAddMessageButton);
}
function handleClickMessageButton() {
    if (form && list && listLabel && subject && body && sectionFirstPage && sectionSecondPage) {
        // form.style.display = "none";
        // list.style.display = "block";
        sectionFirstPage.style.display = "none";
        sectionSecondPage.style.display = "block";
        secondPage = true;
        firstPage = false;
        // Setzen Sie den Wert der Input-Felder auf einen leeren String
        body.value = "";
        subject.value = "";
        if (messageCounter === 0) {
            listLabel.style.display = "none";
        }
        else if (messageCounter >= 0) {
            // listLabel.style.display = "block";
            listLabel.innerHTML = `You have (${messageCounter}) unread messages`;
            // list.style.display = "block";
            sectionSecondPage.style.display = "block";
        }
    }
}
function handleClickAddMessageButton() {
    if (form && list && listLabel && sectionFirstPage && sectionSecondPage) {
        sectionFirstPage.style.display = 'block';
        sectionSecondPage.style.display = 'none';
        // form.style.display = "block";
        // list.style.display = "none";
        // listLabel.style.display = "none";
        firstPage = true;
        secondPage = false;
    }
}
export function updateMessageButton(messageCounter) {
    if (messageButton) {
        if (messageCounter > 0 && messageCounter <= 5) {
            messageButton.innerText = `MESSAGES (${messageCounter})`;
        }
        else if (messageCounter <= 0) {
            messageButton.innerText = `MESSAGES`;
        }
        else if (messageCounter < 5) {
            messageButton.innerText = 'MESSAGES (5+)';
        }
    }
}
export function updateMessageLabel(messageCounter) {
    if (listLabel && secondPage) {
        if (messageCounter >= 2) {
            listLabel.innerText = `You have (${messageCounter}) unread messages`;
        }
        else if (messageCounter == 1) {
            listLabel.innerText = `You have one unread message`;
        }
        else if (messageCounter == 0) {
            listLabel.innerText = ``;
            listLabel.style.display = "hidden";
        }
    }
}
