"use strict";

import { ExtensionContext, languages } from "vscode";
import { OpenRelativeFileDefinitionProvider } from "./open-file.provider";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    languages.registerDefinitionProvider(
      { language: "*", scheme: "file" },
      new OpenRelativeFileDefinitionProvider()
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
