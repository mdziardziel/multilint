const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	var configuration = vscode.workspace.getConfiguration('multilint');
	var linters = configuration.linters;

	let disposable = vscode.commands.registerCommand('extension.mlint', function () {
		let window = vscode.window;
		let document = window.activeTextEditor.document;
		let terminal = window.activeTerminal;
		
		if (terminal == undefined) {
			terminal = window.createTerminal();
		}

		let filePath = document.fileName;
		let languageId = document.languageId;

		let linter = linters[languageId];
		let finalString;

		if (linter) {
			let command = linter + " " + filePath;
			terminal.sendText(command, true);
			terminal.show(false);
			finalString = "Linter executed successfully!";
		} else {
			finalString = "Linter not found for " + languageId;
		}

		vscode.window.showInformationMessage(finalString);
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
