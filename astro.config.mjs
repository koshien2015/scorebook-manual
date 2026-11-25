// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// GitHub Pages の公開先。リポジトリ名を変えたら base も合わせる
const SITE = 'https://koshien2015.github.io';
const BASE = '/scoresheet-manual';

const page = (slug, ja, zh) => ({
	label: ja,
	translations: { 'zh-TW': zh },
	slug,
});

export default defineConfig({
	site: SITE,
	base: BASE,
	integrations: [
		starlight({
			title: {
				ja: 'CAP-SCOREBOOK 記録者マニュアル',
				'zh-TW': 'CAP-SCOREBOOK 記錄員手冊',
			},
			defaultLocale: 'root',
			locales: {
				root: { label: '日本語', lang: 'ja' },
				'zh-tw': { label: '繁體中文', lang: 'zh-TW' },
			},
			sidebar: [
				page('prepare', '1. 試合の前に用意するもの', '1. 賽前準備'),
				page('create-game', '2. 試合を作ってスタメンを決める', '2. 建立比賽與先發名單'),
				page('at-bat', '3. 1打席を記録する', '3. 記錄一個打席'),
				page('substitution', '4. 選手交代と守備位置の変更', '4. 球員替換與守備位置變更'),
				page('fix', '5. 間違えたときの直し方', '5. 輸入錯誤時的修正方法'),
				page('finish', '6. 試合を終える（成績の確定）', '6. 結束比賽（確定成績）'),
				page('trouble', '7. 困ったとき', '7. 遇到問題時'),
			],
		}),
	],
});
