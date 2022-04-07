// CodeMirror
// var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
//   mode: "xml",
//   theme: "darcula",
//   lineNumbers: true,
// });
// var editor = CodeMirror.fromTextArea(document.getElementsByClassName("editor"), {
//   mode: "xml",
//   theme: "darcula",
//   lineNumbers: true,
// });

/**
 * 1) selector로 textarea element 복수 개를 조회한다.
 * 2) 조회한 element들을 반복문을 사용하여 CodeMirror 에디터를 생성한다.
 * @param {*} selector
 */
function drawEditor(selector) {
  const textareaElements = Array.prototype.slice.call(document.querySelectorAll(selector));

  for (var i = 0; i < textareaElements.length; i++) {
    const textareaElement = textareaElements[i];
    CodeMirror.fromTextArea(textareaElement, {
      mode: "xml",
      theme: "darcula",
      lineNumbers: true,
    });
  }
}
