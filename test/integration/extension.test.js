/* global setup, suite, teardown, test */

const { Position, Range, Selection, window, workspace } = require('vscode')
const assert = require('assert')
const fs = require('fs-promise')
const lowercase = require('extension')
const os = require('os')
const path = require('path')

suite('integration tests', () => {
  let editor

  setup('create canvas', () => {
    if (window.activeTextEditor) {
      editor = window.activeTextEditor
      return
    }

    const newFile = path.join(os.tmpdir(), 'foobar.txt')

    return fs.createFile(newFile)
      .then(() => {
        return workspace.openTextDocument(newFile)
      })
      .then(doc => {
        return window.showTextDocument(doc)
      })
      .then(activeTextEditor => {
        editor = activeTextEditor
      })
  })

  teardown('reset canvas', () => {
    return editor.edit(builder => {
      builder.insert(new Position(0, 0), '')
    })
  })

  test('converts selections to lowercase', () => {
    const content = 'FOO\nBAR'
    const fooStart = new Position(0, 0)
    const fooEnd = new Position(0, 3)
    const barStart = new Position(1, 0)
    const barEnd = new Position(1, 3)

    return editor
      .edit(builder => {
        builder.insert(new Position(0, 0), content)
      })
      .then(() => {
        editor.selections = [
          new Selection(fooStart, fooEnd),
          new Selection(barStart, barEnd)
        ]

        return lowercase.toLowerCase(editor)
      })
      .then(result => {
        assert.ok(result)
        assert.equal(editor.document.getText(new Range(fooStart, fooEnd)), 'foo')
        assert.equal(editor.document.getText(new Range(barStart, barEnd)), 'bar')
      })
  })
})
