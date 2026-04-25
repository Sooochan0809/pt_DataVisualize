# pt_DataVisualize

pt_DataVisualize は、テキストデータの可視化方法をまとめた静的 Web プロジェクトです。入力された題名や用意したテキストを、複数の表現で見比べられるようにしています。

## 内容

- `index.html`: 各画面へのリンクをまとめたトップページ
- `input/index.html`: 表情画像に対する題名を入力する画面
- `karakasa/index.html`: 題名データを傘連判状のように円環配置する可視化
- `spider/index.html`: 中央の画像からテキストを放射状に配置するスパイダー図
- `cluster/index.html`: クラスター表示用の画面
- `karakasa/title.json`: 傘連判状で使用する題名データ
- `karakasa/sort-title-json.js`: 題名データを文字数順に並び替えるスクリプト

## 使い方

ブラウザで `index.html` を開くと、各可視化画面へ移動できます。

ローカルサーバーで確認する場合は、プロジェクトのルートで次のように起動します。

```sh
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開いてください。

## 題名データの並び替え

`karakasa/title.json` を文字数順に並び替えたい場合は、次のコマンドを実行します。

```sh
node karakasa/sort-title-json.js karakasa/title.json karakasa/title-sorted.json
```

並び替え結果は `karakasa/title-sorted.json` に出力されます。

## 備考

- 追加のパッケージインストールは不要です。
- `sample.png` は各可視化画面で使用している表情画像です。
