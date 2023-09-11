//patchInputElement();

console.log(document.querySelector('input').value);

function patchInputElement() {
  const origValueDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

  Object.defineProperty(HTMLInputElement.prototype, 'value', {
    get: function (...args) {
      console.log(`It's a Trap!`);
      return origValueDescriptor.get.apply(this, args);
    }
  });
}
