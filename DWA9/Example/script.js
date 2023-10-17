// Define the web component class
class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Create a shadow DOM
        this.label = this.getAttribute('label') || 'Default Label'; // Get the label attribute
    }

    // Define the template for the web component
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* Define the styles for the shadow DOM */
                button {
                    padding: 10px 20px;
                    background-color: #3498db;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <button>${this.label}</button>
        `;
    }
}

// Define the custom element
customElements.define('my-button', MyButton);
