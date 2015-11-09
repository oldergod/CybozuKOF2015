/**
 * @fileoverview 悟空ボウズマン系のクラス：画像＋キャプション＋メッセージの3つ。
 * @author Benoit Quenaudon https://github.com/oldergod
 */
goog.provide('kintone.component.Goku');
goog.provide('kintone.component.GokuCaption');
goog.provide('kintone.component.GokuMessage');

goog.require('goog.events.EventHandler');
goog.require('goog.fx.dom.FadeIn');
goog.require('goog.fx.dom.Slide');
goog.require('goog.soy');
goog.require('goog.ui.Component');
goog.require('kintone.template.soy');

/**
 * 悟空ボウズマンのコンストラクタ
 *
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
kintone.component.Goku = function(opt_domHelper) {
  kintone.component.Goku.base(this, 'constructor', opt_domHelper);
};
goog.inherits(kintone.component.Goku, goog.ui.Component);

/**
 * Domを生成する関数
 *
 * @override
 */
kintone.component.Goku.prototype.createDom = function() {
  // kintone.template.soy.goku のテンプレートからDomを生成する
  var el = goog.soy.renderAsElement(kintone.template.soy.goku, null, null, this.getDomHelper());
  this.setElementInternal(el);
};

/**
 * documentに入れられた時に呼ばれた時、
 * 悟空ボウズマンが格好良く現れるように
 *
 * @override
 */
kintone.component.Goku.prototype.enterDocument = function() {
  // 画面の外から悟空ボウズマンをスライドさせるアニメーション
  var slideAnim = new goog.fx.dom.Slide(this.getContentElement(), [2500, -200], [250, 140], 1000);
  this.registerDisposable(slideAnim);

  // アニメーションが終わった時に関数を実行する用のEventHandler
  var handler = new goog.events.EventHandler(this);
  this.registerDisposable(handler);
  // アニメーションが終わったら、showGokuCaptionを呼び出す
  handler.listenWithScope(slideAnim, goog.fx.Transition.EventType.FINISH, kintone.component.Goku.prototype.showGokuCaption, false, null);

  // アニメーションを実行
  slideAnim.play();
};

/**
 * 悟空ボウズマンのキャプションを表示する
 */
kintone.component.Goku.prototype.showGokuCaption = function() {
	var gokuCaption = new kintone.component.GokuCaption();
	gokuCaption.render(this.getContentElement());
};

/**
 * 悟空ボウズマンのキャプションのコンストラクタ
 *
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
kintone.component.GokuCaption = function(opt_domHelper) {
  kintone.component.GokuCaption.base(this, 'constructor', opt_domHelper);
};
goog.inherits(kintone.component.GokuCaption, goog.ui.Component);

/**
 * @override
 */
kintone.component.GokuCaption.prototype.createDom = function() {
  // テンプレートからDOMを生成
  var el = goog.soy.renderAsElement(kintone.template.soy.gokuCaption, null, null, this.getDomHelper());
  this.setElementInternal(el);
};

/**
 * @override
 */
kintone.component.GokuCaption.prototype.enterDocument = function() {
  // キャプションを表示する用のアニメーション
	var fadeInAnim = new goog.fx.dom.FadeIn(this.getContentElement(), 50);
  this.registerDisposable(fadeInAnim);

  // アニメーションが終わった時に関数を実行する用のEventHandler
  var handler = new goog.events.EventHandler(this);
  this.registerDisposable(handler);
  // アニメーションが終わったら、showGokuMessageを呼び出す
  handler.listenWithScope(fadeInAnim, goog.fx.Transition.EventType.FINISH, kintone.component.GokuCaption.prototype.showGokuMessage, false, null);

  // アニメーションを実行
  fadeInAnim.play();
};

/**
 * 悟空ボウズマンのメッセージを表示する
 */
kintone.component.GokuCaption.prototype.showGokuMessage = function() {
	var gokuMessage = new kintone.component.GokuMessage();
	gokuMessage.render(this.getContentElement(true));
};


/**
 * 悟空ボウズマンのメッセージのコンストラクタ
 *
 * @param {goog.dom.DomHelper=} opt_domHelper
 * @constructor
 * @extends {goog.ui.Component}
 */
kintone.component.GokuMessage = function(opt_domHelper) {
  kintone.component.GokuMessage.base(this, 'constructor', opt_domHelper);
};
goog.inherits(kintone.component.GokuMessage, goog.ui.Component);

/**
 * @override
 */
kintone.component.GokuMessage.prototype.createDom = function() {
  // テンプレートからDOMを生成
  var el = goog.soy.renderAsElement(kintone.template.soy.gokuMessage, null, null, this.getDomHelper();
  this.setElementInternal(el);
};

/**
 * @override
 */
kintone.component.GokuMessage.prototype.enterDocument = function() {
  // メッセージを表示する用のアニメーション
	var fadeInAnim = new goog.fx.dom.FadeIn(this.getContentElement(), 1000);
  this.registerDisposable(fadeInAnim);
  // アニメーションを実行
  fadeInAnim.play();
};
