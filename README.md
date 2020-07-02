# LP雛形

## 環境構築

### Windows

PowerShellを起動し、
コマンドを入力し以下をインストールします

- Scoop
  - `Set-ExecutionPolicy RemoteSigned -scope CurrentUser`
  - `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`
- Node.js
  - `scoop install nodejs`
- yarn
  - `scoop install yarn`
- @vue/cli
  - `npm install -g @vue/cli`
- VSCode(なければ)
  - `scoop bucket add extras`
  - `scoop install vscode`

### Mac

ターミナルを起動し、
コマンドを入力し以下をインストールします

- Homebrew
  - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`
- Node.js
  - `brew install node`
- yarn
  - `brew install yarn --ignore-dependencies`
- @vue/cli
  - `npm install -g @vue/cli`
- VSCode(なければ)
  - `brew cask`
  - `brew cask install visual-studio-code`

インストールが完了したら、以下コマンドを入力し、Vue UIを立ち上げる
- `vue ui`

Vue UI上で、プロジェクトを開き、 `serve` タスクを実行して、 `アプリを開く` ボタンをクリック

## コマンド

### インストール
```
yarn install
```

### 開発
```
yarn serve
```

### 静的サイト生成
```
yarn build
```

### Lint
```
yarn lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
