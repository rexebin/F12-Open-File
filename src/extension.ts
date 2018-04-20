"use strict";

import { OpenRelativeFileDefinitionProvider } from "./open-file.provider";
import { ExtensionContext, languages, workspace } from "vscode";
import { Config } from "./config";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    languages.registerDefinitionProvider(
      { language: "*", scheme: "file" },
      new OpenRelativeFileDefinitionProvider()
    ),

    workspace.onDidChangeConfiguration(() => {
      Config.isSplit = workspace
        .getConfiguration("openFile")
        .get("openSideBySide");
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
