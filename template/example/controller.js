(async function () {
    const value = await (await fetch('./script.js')).text();
    const editor = CodeMirror(document.getElementById('code'), {
        value,
        mode: "javascript",
        autoRefresh: true,
        theme: "default",
        lineWrapping: true,
        lineNumbers: true,
    });

    editor.setSize("100%", "100%");

    window.run = () => {
        eval(editor.getValue())
    }
    window.clearLog = () => {
        const pEl = document.getElementById('log');
        pEl.innerText = '';
    }
    window.back = () => {
        navigator.location.href = '/'
    }

    Object.defineProperty(console, 'log', {
        value: (log) => {
            const pEl = document.getElementById('log');
            pEl.innerText = `${pEl.innerText}\n\n${log}`;
        }
    })
})();