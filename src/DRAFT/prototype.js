const obj = {};

obj.x = 'x'; //set
console.log(obj.x); //get
console.log(obj.hasOwnProperty('x')); //has
delete obj.x; //delete 


// ////////////////////////////////////////////////


// function SomeObject() {
//   this.prop = 'prop'
// }

// const obj = new SomeObject();

// console.log(obj.hasOwnProperty('prop')); //true
// console.log(obj.hasOwnProperty('hasOwnProperty')); //false
// console.log(obj.__proto__.constructor.name); //SomeObject
// console.log(obj.__proto__.__proto__.constructor.name); //Object


// ////////////////////////////////////////////////
const obj = {
    x: 'x'
};

Object.defineProperty(obj, 'x', {
    get: () =>: 'x' });

obj.x = 'y';
console.log(obj.x); x


// const obj = {
//   x: 'x'
// };

// Object.defineProperty(obj, 'x', { writable: false });
// obj.x = 'y';
// console.log(obj.x); x

// /////////////////

// const obj = {};

// Object.defineProperty(obj, 'x', { value: 'x' });
// console.log(obj.x);

// //////////////////////////////


// const obj = {
//   x: "x",
//   y: "y"
// }

// Object.defineProperty(obj, 'x', { enumerable: false });
// JSON.stringify(obj);



// ////////////////////////////////////////////////

const obj = {
    x: 'x'
};

Object.defineProperty(obj, 'x', { configurable: false, value: 'x' });
Object.defineProperty(obj, 'x', { configurable: false, get: () => 'y' });


// ////////////////////////////////////////

// o = Object.create(null);
// o.x = 'x';
// Object.defineProperty(o, 'x', { value: 'y' });

// console.log(o.x);
// o.x = 'xx';
// console.log(o.x);


// ///////////////////

// const o = {};
// let value = 'propValue';

// Object.defineProperty(o, "prop", {
//   get() {
//     console.log('get hook');
//     return value;
//   },
//   set(_value) {
//     console.log('set hook');
//     value = _value;
//   }
// });

// console.log(o.prop);
// o.prop = "new prop value";

// ///////////////////

// const o = {
//   x: 'x',
//   y: {
//     z: 'z'
//   }
// };
// Object.freeze(o);
// console.log(o.y.z); // z
// Object.defineProperty(o.y, 'z', { value: 'zz' });
// console.log(o.y.z); // zz
// Object.defineProperty(o, 'y', { value: 'zz' }); // Uncaught TypeError: Cannot redefine property

// ///////////////////

const o = {
    x: 'x',
    y: {
        z: 'z'
    }
};

console.log(Reflect.ownKeys(o)); // ['x', 'y']
Reflect.deleteProperty(o, 'x');
console.log(Reflect.ownKeys(o)); // ['y']

// ///////////////


// const object = {};

// object.x = 'x'; // set
// console.log(object.x); // get
// object.hasOwnProperty(x);
// delete object.x;
// object.hasOwnProperty(x);

// console.log(Reflect.ownKeys(o)); // ['x', 'y']
// Reflect.deleteProperty(o, 'x');
// console.log(Reflect.ownKeys(o)); // ['y']

// //////////

// const object = {
//     x: 'x'
// };

// let value;

// Object.defineProperty(object, 'x', {
//     get: () => {
//         console.log(`setting the value of 'x'`);
//         return value;
//     },
//     set: (_value) => {
//         console.log(`getting the value of 'x'`);
//         value = _value;
//     }
// });

// ////////////////////




const object = {
    x: 'x'
};
const descriptor = Object.getOwnPropertyDescriptor(object, 'x');

Object.defineProperty(object, 'x', {
    value: `Trap: ${descriptor.value}`,
});
console.log(object.x);


// ///////////
const object = {
    x: "x"
};

const handler = {
    get(target, prop, receiver) {
        console.log('Getting prop from proxy trap');
        return Reflect.get(target, prop);
    },
};
const proxyObj = new Proxy(object, handler);
// ///////////

// ///////////

// const http = new XMLHttpRequest();

// (function () {
//   const orig = XMLHttpRequest.prototype.open;

//   Object.defineProperty(XMLHttpRequest.prototype, 'open', {
//     value: function (method, path) {
//       console.log(`It's a Trap!`);
//       orig.apply(this, [method, path]);
//     }
//   });
// })();

// http.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(http.responseText);
//   }
// };
// http.open("GET", "//jsonplaceholder.typicode.com/todos/1");
// http.send();

// ////////////////////////////


// const http = new XMLHttpRequest();

// http.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(http.responseText);
//   }
// };
// http.open("GET", "//jsonplaceholder.typicode.com/todos/1");
// http.send();

// //////

// (function () {
//   const orig = RegExp.prototype.exec;

//   Object.defineProperty(RegExp.prototype, 'exec', {
//     value: function (string) {
//       //console.log(`It's a Trap!`);
//       return orig.call(this, string);
//     }
//   });
// })();

// /abcd/.test('xxxx');

// ////////////////////////////
// with ({
//   window: {
//     document: new Proxy(document, {
//       get: function (obj, prop) {
//         console.log(`Document trap for prop ${prop}`);
//         debugger;
//         return obj[prop];
//       }
//     })
//   }
// })
// (function (){
//   window.document.defaultView;
// })();

// ///////////////

// (function () {
//   const orig = History.prototype.pushState;

//   Object.defineProperty(History.prototype, 'pushState', {
//     value: function  trapHandler (...args) {
//       console.log(`It's a Trap!`);
//       return orig.apply(this, args);
//     }
//   });
// })();

// ////////////////

// Object.defineProperty({}, "someProp", {
//   value: '',
//   get() {
//     return '';
//   }
// });

// ////////////////
