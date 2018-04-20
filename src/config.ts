import { workspace } from "vscode";
/**
 * Config store.
 */
export class Config {
  static isSplit = workspace
    .getConfiguration("openFile")
    .get<boolean>("openSideBySide");
}
