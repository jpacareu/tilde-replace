import * as vscode from 'vscode';

export function activate() {
	vscode.commands.registerCommand('extension.htmlTagWrap', () => {
		// The code you place here will be executed every time your command is executed
		var editor = vscode.window.activeTextEditor;
		if (editor != undefined) {
			var selection = editor.selection;
			var selectedText = editor.document.getText(selection);
			editor.edit((editBuilder) => {
				let text = selectedText
				.replace(/á/g,'\\u00E1')
				.replace(/é/g,'\\u00E9')
				.replace(/í/g,'\\u00ED')
				.replace(/ó/g,'\\u00F3')
				.replace(/ú/g,'\\u00FA')
				.replace(/Á/g,'\\u00C1')
				.replace(/É/g,'\\u00C9')
				.replace(/Í/g,'\\u00CD')
				.replace(/Ó/g,'\\u00D3')
				.replace(/Ú/g,'\\u00DA')
				.replace(/ñ/g,'\\u00F1')
				.replace(/Ñ/g,'\\u00D1')
				.replace(/\¿/g,'\\u00BF')
				.replace(/\?/g,'\\u003F');
				editBuilder.replace(selection, text);
			})
		};
	});
}