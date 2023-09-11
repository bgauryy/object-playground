//patchRegex();

console.log(/xxx/.test('xxx'));


function patchRegex() {
  var origExecDescriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, 'exec');
  Object.defineProperty(RegExp.prototype, 'exec', {
    value: function (...args) {
      //UnPatch
      Object.defineProperty(RegExp.prototype, 'exec', origExecDescriptor);
      console.log(`It's a Trap!`);
      return origExecDescriptor.value.apply(this, args);
    }
  });
}