'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import background2233 from './background-2233';
import vsHelp from './vsHelp';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "background-2233" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.background-2233.info', function () {
        vsHelp.showInfo('You can config your background-2233 in settings.json. Enjoy it!');
    });

    context.subscriptions.push(disposable);

    context.subscriptions.push(background2233.watch());

}

// this method is called when your extension is deactivated
export function deactivate() {
    // vscode.window.showInformationMessage('deactivated!');
}
