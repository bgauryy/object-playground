with ({
    window: {
        document: new Proxy(document, {
            get: function (obj, prop) {
                console.log(`It's a trap for prop - ${prop}`);
                const value = obj[prop];

                if (typeof value === 'function') {
                    return obj[prop].bind(document);
                } else {
                    return value;
                }
            }
        })
    }
})
(function () {
    // Trapped Scope
    const el = window.document.querySelector('body');
    console.log(el.tagName);
})();