# KOF2015 デモアプリ
KOF2015 に利用するアプリ。

## 事前に
### nodebrewとNode.jsのインストール
```shell
$ cd ~/
$ curl -L git.io/nodebrew | perl - setup
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bashrc
$ source ~/.bashrc
# 安定版のNode.jsを使うように設定
$ nodebrew install-binary stable
$ echo 'nodebrew use stable > /dev/null' >> ~/.bashrc
$ source ~/.bashrc
```
### NPMの設定かつモジュールのインストール
```shell
npm install npm@2 -g
npm install
```

## 使い方
* npm run js # SoyのJavaScriptかつ全体のJavaScriptをコンパイルする
* npm run css # scss を css に変換する
* npm run all # 上記のコマンド、両方実行する

app/html/kintone.html を開く。
