/* React textarea auto-size */
/* https://www.npmjs.com/package/react-textarea-autosize */


/* https://codepen.io/vsync/pen/frudD */
const getScrollHeight = (elm) => {
    
    let savedValue = elm.value
    
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
}
  
const onExpandableTextareaInput = ({ target: elm }) => {
    
    if (!elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA') return
    
    let minRows = elm.getAttribute('data-min-rows')|0, rows;
    !elm._baseScrollHeight && getScrollHeight(elm)
  
    elm.rows = minRows
    rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 12)
    elm.rows = minRows + rows
}
  
document.addEventListener('input', onExpandableTextareaInput)