/**
 * @fileoverview エントリーポイント用のファイル。
 * @author Benoit Quenaudon https://github.com/oldergod
 */
goog.provide('kintone.setup.init');

goog.require('kintone.component.Button');

/**
 * 表示済のコンテキストを消し、
 * 悟空ボウズマンを呼び出すボタンを表示する。
 */
kintone.setup.init = function() {
	goog.dom.removeChildren(document.body);
  var button = new kintone.component.Button(kintone.setup.anyBoolean());
  button.render();
};

document.addEventListener('DOMContentLoaded', kintone.setup.init);

/**
 * 意味のないBooleanを返す
 *
 * @return {boolean}
 */
kintone.setup.anyBoolean = function() {
	return true;
}
