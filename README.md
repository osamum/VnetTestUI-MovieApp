# VnetTestUI-MovieApp

このプロジェクトは、Azure PaaS のデプロイから運用までを説明するハンズオン用のアプリケーションです。

このアプリケーションは、Azure App Service の[仮想ネットワーク統合](https://learn.microsoft.com/ja-jp/azure/app-service/overview-vnet-integration)を使用して仮想ネットワーク内にあアプリケーションの REST API を呼び出し、結果をレンダリングします。

<br>

## 動作環境

このアプリケーションは Node.js と Express で作成された非常にシンプルなアプリケーションであるため Node.js と Express が動作する環境であれば動作します。


## プロジェクトの入手と実行の準備

このリポジトリをクローンするか、ZIP ファイルをダウンロードしてください。

```bash
git clone　リポジドリのURL
```

ローカルで動作させる場合はプロジェクトのルートディレクトリに移動し、以下のコマンドを実行してください。

```bash
npm install
```

このアプリケーションを実行するには使用する REST API の URL を設定する必要があります。

プロジェクト routes/index.js の 2 行目にある MOVIEAPP_API を、ハンズオン用の演習アプリケーションがホストする REST API の URL に変更してください。

```javascript
const MOVIEAPP_API = `ここに MovieApp-XYZ API の URL を入力してください``;
```

<br>

## アプリケーションの実行

ハンズオンでは、このアプリケーションを仮想ネットワーク統合された Azure App Service にデプロイして実行しますが、ローカルで実行するには、プロジェクトのルートディレクトリに移動し、以下のコマンドを実行してください。

```bash

npm start

``` 
