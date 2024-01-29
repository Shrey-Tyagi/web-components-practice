export class ExpandableList extends HTMLUListElement {
  constructor() {
    super();
    this.style.position = 'relative';
    this.toggleBtn = document.createElement('button');
    this.toggleBtn.style.position = 'absolute';
    this.toggleBtn.style.border = 'none';
    this.toggleBtn.style.background = 'rgb(13, 74, 195)';
    this.toggleBtn.style.color = '#fff';
    this.toggleBtn.style.borderRadius = '15px';
    this.toggleBtn.style.top = '0';
    this.toggleBtn.style.left = '5px';
    this.toggleBtn.style.cursor = 'pointer';
    this.toggleBtn.innerText = '>';
    this.toggleBtn.addEventListener('click', () => {
      this.dataset.expanded = !this.isExpanded;
    });
    this.appendChild(this.toggleBtn);

    this.style.listStyle = 'none';
    this.style.padding = '1.5rem';

    this.style.transition =
      'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out';
  }

  get isExpanded() {
    return (
      this.dataset.expanded !== 'false' &&
      this.dataset.expanded != null
    );
  }

  static get observedAttributes() {
    return ['data-expanded'];
  }

  connectedCallback() {
    this.updateStyles();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    this.updateStyles();
  }

  updateStyles() {
    const transform = this.isExpanded ? 'rotate(90deg)' : '';
    this.toggleBtn.style.transform = transform;
    [...this.children].forEach((child) => {
      if (child !== this.toggleBtn) {
        child.style.display = this.isExpanded ? '' : 'none';
      }
    });
  }
}

customElements.define('expandable-list', ExpandableList, {
  extends: 'ul',
});
