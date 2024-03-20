import { updateMessageButton, updateMessageLabel } from './index.js';
export default class TodoList {
    node;
    constructor(node) {
        this.node = node;
        // Optionally bind and guarantee the context of the add method
        // this.add = this.add.bind(this);
    }
    add(subject, body) {
        const item = document.createElement('li');
        // item.innerHTML =
        item.innerHTML =
            `<h2>${subject}</h2><br>
            <p>${body}</p>`;
        item.className = 'todo-item';
        // item.style.display = "none";
        // Concern 3: Delete items
        item.addEventListener('click', (event) => {
            const target = event.target;
            if (item.classList.contains('clicked')) {
                return;
                // } else if (target.tagName === 'INPUT') {
            }
            else {
                messageCounter--;
                updateMessageButton(messageCounter);
                updateMessageLabel(messageCounter);
                item.style.textDecoration = 'line-through';
                item.classList.add('clicked', 'checked');
                // this.node.removeChild(item);
            }
        });
        // Concern 2 (continued)
        // this.node.appendChild(item);
        this.node.prepend(item);
    }
}
