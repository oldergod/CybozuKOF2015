/**
 * @fileoverview 悟空ボウズマンを呼び出すボタンのクラス
 * @author Benoit Quenaudon https://github.com/oldergod
 */
goog.provide('kintone.component.Button');

goog.require('goog.soy');
goog.require('goog.ui.Component');
goog.require('kintone.component.Goku');
goog.require('kintone.template.soy');

/**
 * ボタンのコンストラクタ
 *
 * @param {boolean} anyBoolean 意味のないboolean
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
kintone.component.Button = function(anyBoolean, opt_domHelper) {
  kintone.component.Button.base(this, 'constructor', opt_domHelper);
};
goog.inherits(kintone.component.Button, goog.ui.Component);

/**
 * Domを生成する関数
 *
 * @override
 */
kintone.component.Button.prototype.createDom = function() {
  // kintone.template.soy.goku のテンプレートからDomを生成する
  var el = goog.soy.renderAsElement(kintone.template.soy.buttonDiv, null, null, this.getDomHelper());
  this.setElementInternal(el);
};

/**
 * documentに入れられた時に呼ばれた時、
 * ボタンにクリックされる事をListenする
 * @override
 */
kintone.component.Button.prototype.enterDocument = function() {
  kintone.component.Button.base(this, 'enterDocument');
  var callButton = goog.dom.getFirstElementChild(this.getContentElement());
  // クリックされた時に callBozuman を呼び出す
  this.getHandler().listen(callButton, goog.events.EventType.CLICK, this.callBozuman);
};

/**
 * 悟空ボウズマンを呼び出す関数
 */
kintone.component.Button.prototype.callBozuman = function() {
  var goku = new kintone.component.Goku();
  // 悟空ボウズマンをDocumentに入れる
  goku.render();

  // 当ボタン自体はdocumentから破壊する
  this.disposeInternal();
};

