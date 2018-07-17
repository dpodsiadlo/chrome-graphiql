document.querySelectorAll('a[href^="graphiql://"]').forEach(el => {

    const editor = chrome.runtime.getURL('editor.html')

    const newHref = el.getAttribute('href').replace(/^graphiql:\/\/.*\?/i, editor + '#')

    el.setAttribute('href', newHref)
    el.setAttribute('target', 'graphiql-editor')
})