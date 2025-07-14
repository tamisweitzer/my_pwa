
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="p-4 bg-lime-700 text-slate-100 flex flex-row justify-between">
      <h1><a href="/">MyPWA</a></h1>
      <nav>
        <a href="link1.html" class="ml-4">link1</a>
        <a href="link2.html" class="ml-4">link2</a>
        <a href="link3.html" class="ml-4">link3</a>
      </nav>
    </header>`;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <footer class="px-4 py-12 bg-red-700 text-slate-300">
      <p>MyPWA</p>
    </footer>
    `;
  }
}


customElements.define( 'main-header', Header );
customElements.define( 'main-footer', Footer );
