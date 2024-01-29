export class ZButton extends HTMLButtonElement {
  constructor() {
    super();

    this.style.backgroundColor = 'rgb(13, 74, 195)';
    this.style.borderRadius = '6px';
    this.style.borderWidth = '0';
    this.style.boxShadow =
      'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px';
    this.style.color = '#fff';
    this.style.cursor = 'pointer';
    this.style.fontFamily =
      '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif';
    this.style.fontSize = '16px';
    this.style.height = '44px';
    this.style.margin = '12px 0 0';
    this.style.overflow = 'hidden';
    this.style.padding = '10px 20px';
    this.style.transition = 'all .2s,box-shadow .08s ease-in';

    this.addEventListener(
      'mouseenter',
      this.handleMouseEnter.bind(this)
    );
    this.addEventListener(
      'mouseleave',
      this.handleMouseLeave.bind(this)
    );
    this.addEventListener('click', this.handleButtonClick.bind(this));
  }

  handleMouseEnter() {
    // Adjust styles for hover
    this.style.backgroundColor = 'rgb(0, 41, 112)';
  }

  handleMouseLeave() {
    // Revert styles when not hovered
    this.style.backgroundColor = 'rgb(13, 74, 195)';
  }

  handleButtonClick(event) {
    // ... (ripple effect code etc)
  }
}

customElements.define('z-button', ZButton, { extends: 'button' });
