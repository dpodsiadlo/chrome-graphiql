/* eslint-disable no-undef */
export default {
    editor: chrome.extension.getURL('editor.html'),
    options: 'chrome://extensions/?options=' + chrome.runtime.id,
}