const template = document.createElement('template');
template.innerHTML = `
<style>
.user {
  font-family: 'Arial', sans-serif;
  background: #f4f4f4;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  margin-bottom: 15px;
  border-bottom: darkorchid 5px solid;
}

.user img {
  width: 100%;
}

.user button {
  cursor: pointer;
  background: darkorchid;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
<div class="user">
  <img />
  <div>
    <h3></h3>
    <div class="info">
      <p><slot name="email" /></p>
      <p><slot name="phone" /></p>
    </div>
    <button id="toggle-info">Hide Info</button>
  </div>
</div>`;

export class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // this also returns this.shadowRoot so we can so something like const shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText =
      this.getAttribute('name');
    this.shadowRoot.querySelector('img').src =
      this.getAttribute('img-src');
    // this.innerHTML = `${this.getAttribute('name')}`;
  }
}

window.customElements.define('user-card', UserCard);

{
  /* <user-card
      name="Tyagi"
      img-src="https://avatars.githubusercontent.com/u/44650625?v=4"
    ></user-card>
    <user-card
      name="John Doe"
      img-src="https://randomuser.me/api/portraits/men/1.jpg"
    >
      <div slot="email">johndoe@gmail.com</div>
      <div slot="phone">555-555-5555</div>
    </user-card>
    <user-card
      name="Jane Doe"
      img-src="https://randomuser.me/api/portraits/women/1.jpg"
    >
      <div slot="email">janedoe@gmail.com</div>
      <div slot="phone">333-333-3333</div>
    </user-card> */
}
