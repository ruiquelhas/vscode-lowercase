const { Range, commands } = require('vscode')

function activate (context) {
  const disposable = commands.registerTextEditorCommand('lowercase.toLowerCase', toLowerCase)

  context.subscriptions.push(disposable)
}

function toLowerCase (editor) {
  return editor.edit(builder => {
    editor.selections.forEach(selection => {
      const range = new Range(selection.start, selection.end)
      const text = editor.document.getText(range) || ''
      const matches = text.match(/(?=.*[a-zA-Z]).+/g)

      if (!matches || !matches.length) {
        return
      }

      builder.replace(selection, text.toLowerCase())
    })
  })
}

function deactivate () {
  return
}

module.exports = { activate, toLowerCase, deactivate }
