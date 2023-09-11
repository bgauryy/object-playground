//patchXMLHttpRequestOpen();
//patchXMLHttpRequestResponseText();
sendRequest();

function sendRequest() {
  const http = new XMLHttpRequest();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(http.responseText);
    }
  };
  http.open("GET", "//jsonplaceholder.typicode.com/todos/1");
  http.send();
}

function patchXMLHttpRequestOpen() {
  const origOpen = XMLHttpRequest.prototype.open;

  Object.defineProperty(XMLHttpRequest.prototype, 'open', {
    value: function (...args) {
      console.log(`It's a Trap! - calling ${args[1]}`);
      origOpen.apply(this, args);
    }
  });
}

function patchXMLHttpRequestResponseText() {
  const origDescriptor = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'responseText');

  Object.defineProperty(XMLHttpRequest.prototype, 'responseText', {
    get: function (...args) {
      console.log(`It's a trap - responseText`);
      return origDescriptor.get.call(this);
    }
  });
}