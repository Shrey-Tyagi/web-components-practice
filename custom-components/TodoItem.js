const templateTodoItem = document.createElement('template');
templateTodoItem.innerHTML = `
<style>
lable {
    color: green;
    display: block;
}
.description {
  color: red;
}
</style>

<lable>
  <input class="checkbox" type="checkbox" />
  <slot></slot>
  <div class="description">
    <slot name="description"></slot>
  </div>
</lable>

`;

export class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(templateTodoItem.content.cloneNode(true));
    this.checkbox = this.shadowRoot.querySelector('.checkbox');
  }

  static get observedAttributes() {
    return ['checked'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'checked') this.updateCheckbox(newValue);
  }

  updateCheckbox(value) {
    this.checkbox.checked = value != null && value !== 'fasle';
  }
}
customElements.define('todo-item', TodoItem);
