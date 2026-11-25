# CAP-SCOREBOOK 記録者マニュアル

キャップ野球のスコア記録サービス CAP-SCOREBOOK で、試合を記録する人（スコアラー）のためのマニュアルです。日本語と繁体字中国語で書いています。

本文は markdown で、[Astro Starlight](https://starlight.astro.build/) でサイトにしています。

## 本文を直す

| 言語 | 場所 |
|---|---|
| 日本語 | `src/content/docs/*.md` |
| 繁体字中国語 | `src/content/docs/zh-tw/*.md` |

繁体字版が無いページは、日本語のページが表示されます。日本語のページを直したら、同じ名前の繁体字のページも直してください。

ページを足すときは、`astro.config.mjs` の `sidebar` にも1行足します。

配色とフォントは `src/styles/custom.css` にあります。CAP-SCOREBOOK のアプリと同じ値です。

## 手元で表示する

Node.js 22 が必要です。

1. 必要なパッケージをインストールします。`npm install` を実行します。
2. 開発用のサーバーを起動します。`npm run dev` を実行すると、表示用の URL がターミナルに出ます。
3. 公開用のファイルを作って確かめるときは、`npm run build` を実行します。`dist/` に出力されます。

## 公開

`main` ブランチに push すると、GitHub Actions が GitHub Pages に公開します（`.github/workflows/deploy.yml`）。

リポジトリ名を変えたときは、`astro.config.mjs` の `BASE` を合わせます。
