/**
 * ランダム武器抽選
 */


const weapons = [
    /* シューター */
    {
        name: "わかばシューター",
        image: "Shooter/wakaba.png",
        type: "シューター",
        sub: "スプラッシュボム",
        special: "グレートバリア"
    },
    {
        name: "もみじシューター",
        image: "Shooter/momiji.png",
        type: "シューター",
        sub: "ロボットボム",
        special: "ホップソナー"
    },
    {
        name: "スプラシューター",
        image: "Shooter/sushi.png",
        type: "シューター",
        sub: "キューバンボム",
        special: "ウルトラショット"
    },
    {
        name: "スプラシューターコラボ",
        image: "Shooter/sushikora.png",
        type: "シューター",
        sub: "スプラッシュボム",
        special: "トリプルトルネード"
    },
    {
        name: "スプラシューター煌",
        image: "Shooter/sushikou.png",
        type: "シューター",
        sub: "クイックボム",
        special: "テイオウイカ"
    },
    {
        name: "プロモデラーMG",
        image: "Shooter/silver.png",
        type: "シューター",
        sub: "タンサンボム",
        special: "サメライド"
    },
    {
        name: "プロモデラーRG",
        image: "Shooter/momiji.png",
        type: "シューター",
        sub: "スプリンクラー",
        special: "ナイスダマ"
    },
    {
        name: "プロモデラー彩",
        image: "Shooter/modera-sai.png",
        type: "シューター",
        sub: "クイックボム",
        special: "スミナガシート"
    },
    {
        name: "N-ZAP85",
        image: "Shooter/zapkuro.png",
        type: "シューター",
        sub: "キューバンボム",
        special: "エナジースタンド"
    },
    {
        name: "N-ZAP89",
        image: "Shooter/zapaka.png",
        type: "シューター",
        sub: "ロボットボム",
        special: "デコイチラシ"
    },
    {
        name: "スペースシューター",
        image: "Shooter/supesyu.png",
        type: "シューター",
        sub: "ポイントセンサー",
        special: "メガホンレーザー5.1ch"
    },
    {
        name: "スペースシューターコラボ",
        image: "Shooter/supesyukorabo.png",
        type: "シューター",
        sub: "トラップ",
        special: "ジェットパック"
    },
    {
        name: "プライムシューター",
        image: "Shooter/puraimu.png",
        type: "シューター",
        sub: "ラインマーカー",
        special: "カニタンク"
    },
    {
        name: "プライムシューターコラボ",
        image: "Shooter/purakora.png",
        type: "シューター",
        sub: "キューバンボム",
        special: "ナイスダマ"
    },
    {
        name: "プライムシューターFRZN",
        image: "Shooter/puraimuFRZN.png",
        type: "シューター",
        sub: "スプラッシュボム",
        special: "マルチミサイル"
    },
    {
        name: "ボールドマーカー",
        image: "Shooter/bold.png",
        type: "シューター",
        sub: "カーリングボム",
        special: "ウルトラハンコ"
    },
    {
        name: "ボールドマーカーネオ",
        image: "Shooter/boldneo.png",
        type: "シューター",
        sub: "ジャンプビーコン",
        special: "メガホンレーザー5.1ch"
    },
    {
        name: "52ガロン",
        image: "Shooter/52.png",
        type: "シューター",
        sub: "スプラッシュシールド",
        special: "メガホンレーザー5.1ch"
    },
    {
        name: "52ガロンデコ",
        image: "Shooter/52deko.png",
        type: "シューター",
        sub: "カーリングボム",
        special: "スミナガシート"
    },
    {
        name: "96ガロン",
        image: "Shooter/96.png",
        type: "シューター",
        sub: "スプリンクラー",
        special: "キューインキ"
    },
    {
        name: "96ガロンデコ",
        image: "Shooter/96deko.png",
        type: "シューター",
        sub: "スプラッシュシールド",
        special: "テイオウイカ"
    },
    {
        name: "96ガロン爪",
        image: "Shooter/96tume.png",
        type: "シューター",
        sub: "ラインマーカー",
        special: "エナジースタンド"
    },
    {
        name: "シャープマーカー",
        image: "Shooter/sya-ka-.png",
        type: "シューター",
        sub: "クイックボム",
        special: "カニタンク"
    },
    {
        name: "シャープマーカーネオ",
        image: "Shooter/sya-ka-neo.png",
        type: "シューター",
        sub: "キューバンボム",
        special: "トリプルトルネード"
    },
    {
        name: "シャープマーカーGECK",
        image: "Shooter/sya-ka-GECK.png",
        type: "シューター",
        sub: "ポイズンミスト",
        special: "アメフラシ"
    },
    {
        name: "ジェットスイーパー",
        image: "Shooter/jet.png",
        type: "シューター",
        sub: "ラインマーカー",
        special: "キューインキ"
    },
    {
        name: "ジェットスイーパーカスタム",
        image: "Shooter/jetkasu.png",
        type: "シューター",
        sub: "ポイズンミスト",
        special: "アメフラシ"
    },
    {
        name: "ジェットスイーパーCOBR",
        image: "Shooter/jetcobr.png",
        type: "シューター",
        sub: "クイックボム",
        special: "ウルトラチャクチ"
    },
    {
        name: "L3リールガン",
        image: "Shooter/L3.png",
        type: "シューター",
        sub: "カーリングボム",
        special: "カニタンク"
    },
    {
        name: "L3リールガンD",
        image: "Shooter/L3D.png",
        type: "シューター",
        sub: "クイックボム",
        special: "ウルトラハンコ"
    },
    {
        name: "L3リールガン箔",
        image: "Shooter/L3haku.png",
        type: "シューター",
        sub: "スプラッシュボム",
        special: "ジェットパック"
    },
    {
        name: "H3リールガン",
        image: "Shooter/H3.png",
        type: "シューター",
        sub: "ポイントセンサー",
        special: "エナジースタンド"
    },
    {
        name: "H3リールガンD",
        image: "Shooter/H3D.png",
        type: "シューター",
        sub: "スプラッシュシールド",
        special: "グレートバリア"
    },
    {
        name: "H3リールガンSNAK",
        image: "Shooter/H3SNAK.png",
        type: "シューター",
        sub: "キューバンボム",
        special: "トリプルトルネード"
    },
    {
        name: "ボトルガイザー",
        image: "Shooter/botoru.png",
        type: "シューター",
        sub: "スプラッシュシールド",
        special: "ウルトラショット"
    },
    {
        name: "ボトルガイザーフォイル",
        image: "Shooter/botorufoiru.png",
        type: "シューター",
        sub: "ロボットボム",
        special: "スミナガシート"
    },
    /* ブラスター */
    {
        name: "ホットブラスター",
        image: "Blaster/hot.png",
        type: "ブラスター",
        sub: "ロボットボム",
        special: "ショクワンダー"
    },
    {
        name: "ホットブラスターカスタム",
        image: "Blaster/hotkasu.png",
        type: "ブラスター",
        sub: "ポイントセンサー",
        special: "ウルトラチャクチ"
    },
    {
        name: "ホットブラスター艶",
        image: "Blaster/hoten.png",
        type: "ブラスター",
        sub: "ジャンプビーコン",
        special: "カニタンク"
    },
    {
        name: "ロングブラスター",
        image: "Blaster/long.png",
        type: "ブラスター",
        sub: "キューバンボム",
        special: "ホップソナー"
    },
    {
        name: "ロングブラスターカスタム",
        image: "Blaster/longkasu.png",
        type: "ブラスター",
        sub: "スプラッシュボム",
        special: "テイオウイカ"
    },
    {
        name: "ラピッドブラスター",
        image: "Blaster/rapid.png",
        type: "ブラスター",
        sub: "トラップ",
        special: "トリプルトルネード"
    },
    {
        name: "ラピッドブラスターデコ",
        image: "Blaster/rapiddeko.png",
        type: "ブラスター",
        sub: "トーピード",
        special: "ジェットパック"
    },
    {
        name: "ラピッドブラスターエリート",
        image: "Blaster/Reri-to.png",
        type: "ブラスター",
		sub: "ポイズンミスト",
		special: "キューインキ"
    },
    {
        name: "ラピッドブラスターエリートデコ",
        image: "Blaster/Reri-todeko.png",
        type: "ブラスター",
		sub: "ラインマーカー",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "ラピッドブラスターエリートWNTR",
        image: "Blaster/Reri-toWNTR.png",
        type: "ブラスター",
		sub: "キューバンボム",
		special: "エナジースタンド"
    },
    {
        name: "ノヴァブラスター",
        image: "Blaster/nova.png",
        type: "ブラスター",
		sub: "スプラッシュボム",
		special: "ショクワンダー"
    },
    {
        name: "ノヴァブラスターネオ",
        image: "Blaster/novaneo.png",
        type: "ブラスター",
		sub: "タンサンボム",
		special: "ウルトラハンコ"
    },
    {
        name: "クラッシュブラスター",
        image: "Blaster/clash.png",
        type: "ブラスター",
		sub: "スプラッシュボム",
		special: "ウルトラショット"
    },
    {
        name: "クラッシュブラスターネオ",
        image: "Blaster/clashneo.png",
        type: "ブラスター",
		sub: "カーリングボム",
		special: "デコイチラシ"
    },
    {
        name: "S-BLAST92",
        image: "Blaster/S92.png",
        type: "ブラスター",
		sub: "スプリンクラー",
		special: "サメライド"
    },
    {
        name: "S-BLAST91",
        image: "Blaster/S91.png",
        type: "ブラスター",
		sub: "クイックボム",
		special: "ナイスダマ"
    },
    /* ローラー */
    {
        name: "スプラローラー",
        image: "Roller/supuro-.png",
        type: "ローラー",
		sub: "カーリングボム",
		special: "グレートバリア"
    },
    {
        name: "スプラローラーコラボ",
        image: "Roller/supuro-korabo.png",
        type: "ローラー",
		sub: "ジャンプビーコン",
		special: "テイオウイカ"
    },
    {
        name: "カーボンローラー",
        image: "Roller/karo-ra.png",
        type: "ローラー",
		sub: "ロボットボム",
		special: "ショクワンダー"
    },
    {
        name: "カーボンローラーデコ",
        image: "Roller/karo-radeko.png",
        type: "ローラー",
		sub: "クイックボム",
		special: "ウルトラショット"
    },
    {
        name: "カーボンローラーANGL",
        image: "Roller/karo-raANGL.png",
        type: "ローラー",
		sub: "タンサンボム",
		special: "デコイチラシ"
    },
    {
        name: "ダイナモローラー",
        image: "Roller/dainamo.png",
        type: "ローラー",
		sub: "スプリンクラー",
		special: "エナジースタンド"
    },
    {
        name: "ダイナモローラーテスラ",
        image: "Roller/dainamotesra.png",
        type: "ローラー",
		sub: "スプラッシュボム",
		special: "デコイチラシ"
    },
    {
        name: "ダイナモローラー冥",
        image: "Roller/dainamomei.png",
        type: "ローラー",
		sub: "ポイントセンサー",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "ヴァリアブルローラー",
        image: "Roller/valiable.png",
        type: "ローラー",
		sub: "トラップ",
		special: "マルチミサイル"
    },
    {
        name: "ヴァリアブルローラーフォイル",
        image: "Roller/valiablefoiru.png",
        type: "ローラー",
		sub: "キューバンボム",
		special: "スミナガシート"
    },
    {
        name: "ワイドローラー",
        image: "Roller/wide.png",
        type: "ローラー",
		sub: "スプラッシュシールド",
		special: "キューインキ"
    },
    {
        name: "ワイドローラーコラボ",
        image: "Roller/widekorabo.png",
        type: "ローラー",
		sub: "ラインマーカー",
		special: "アメフラシ"
    },
    {
        name: "ワイドローラー惑",
        image: "Roller/widewaku.png",
        type: "ローラー",
		sub: "トーピード",
		special: "ウルトラチャクチ"
    },
    /* フデ */
    {
        name: "パブロ",
        image: "Brush/pablo.png",
        type: "フデ",
		sub: "スプラッシュボム",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "パブロ・ヒュー",
        image: "Brush/pablohyu-.png",
        type: "フデ",
		sub: "トラップ",
		special: "ウルトラハンコ"
    },
    {
        name: "ホクサイ",
        image: "Brush/hokusai.png",
        type: "フデ",
		sub: "キューバンボム",
		special: "ショクワンダー"
    },
    {
        name: "ホクサイ・ヒュー",
        image: "Brush/hokusaihyu-.png",
        type: "フデ",
		sub: "ジャンプビーコン",
		special: "アメフラシ"
    },
    {
        name: "ホクサイ彗",
        image: "Brush/hokusaisui.png",
        type: "フデ",
		sub: "ロボットボム",
		special: "テイオウイカ"
    },
    {
        name: "フィンセント",
        image: "Brush/fin.png",
        type: "フデ",
		sub: "カーリングボム",
		special: "ホップソナー"
    },
    {
        name: "フィンセント・ヒュー",
        image: "Brush/finhyu-.png",
        type: "フデ",
		sub: "ポイントセンサー",
		special: "マルチミサイル"
    },
    {
        name: "フィンセントBRNZ",
        image: "Brush/finBRNZ.png",
        type: "フデ",
		sub: "スプラッシュシールド",
		special: "ウルトラショット"
    },
    /* チャージャー */
    {
        name: "スクイックリンα",
        image: "Charger/sukuikua.png",
        type: "チャージャー",
		sub: "ポイントセンサー",
		special: "グレートバリア"
    },
    {
        name: "スクイックリンβ",
        image: "Charger/sukuikub.png",
        type: "チャージャー",
		sub: "ロボットボム",
		special: "ショクワンダー"
    },
    {
        name: "スプラチャージャー",
        image: "Charger/suputya.png",
        type: "チャージャー",
		sub: "スプラッシュボム",
		special: "キューインキ"
    },
    {
        name: "スプラチャージャーコラボ",
        image: "Charger/suputyakorabo.png",
        type: "チャージャー",
		sub: "スプラッシュシールド",
		special: "トリプルトルネード"
    },
    {
        name: "スプラチャージャーFRST",
        image: "Charger/suputyaFRST.png",
        type: "チャージャー",
		sub: "スプリンクラー",
		special: "カニタンク"
    },
    {
        name: "スプラスコープ",
        image: "Charger/supusuko.png",
        type: "チャージャー",
		sub: "スプラッシュボム",
		special: "キューインキ"
    },
    {
        name: "スプラスコープコラボ",
        image: "Charger/supusukokorabo.png",
        type: "チャージャー",
		sub: "スプラッシュシールド",
		special: "トリプルトルネード"
    },
    {
        name: "スプラスコープFRST",
        image: "Charger/supusukoFRST.png",
        type: "チャージャー",
		sub: "スプリンクラー",
		special: "カニタンク"
    },
    {
        name: "リッター4K",
        image: "Charger/ritta-.png",
        type: "チャージャー",
		sub: "トラップ",
		special: "ホップソナー"
    },
    {
        name: "リッター4Kカスタム",
        image: "Charger/ritta-kasutamu.png",
        type: "チャージャー",
		sub: "ジャンプビーコン",
		special: "テイオウイカ"
    },
    {
        name: "4Kスコープ",
        image: "Charger/4K.png",
        type: "チャージャー",
		sub: "トラップ",
		special: "ホップソナー"
    },
    {
        name: "4Kスコープカスタム",
        image: "Charger/4Kkasutamu.png",
        type: "チャージャー",
		sub: "ジャンプビーコン",
		special: "テイオウイカ"
    },
    {
        name: "14式竹筒銃・甲",
        image: "Charger/takekou.png",
        type: "チャージャー",
		sub: "ロボットボム",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "14式竹筒銃・乙",
        image: "Charger/takeotu.png",
        type: "チャージャー",
		sub: "タンサンボム",
		special: "デコイチラシ"
    },
    {
        name: "ソイチューバー",
        image: "Charger/soityu.png",
        type: "チャージャー",
		sub: "トーピード",
		special: "マルチミサイル"
    },
    {
        name: "ソイチューバーカスタム",
        image: "Charger/soityukasu.png",
        type: "チャージャー",
		sub: "タンサンボム",
		special: "ウルトラハンコ"
    },
    {
        name: "R-PEN/5H",
        image: "Charger/r-penH.png",
        type: "チャージャー",
		sub: "スプリンクラー",
		special: "エナジースタンド"
    },
    {
        name: "R-PEN/5B",
        image: "Charger/r-penB.png",
        type: "チャージャー",
		sub: "スプラッシュシールド",
		special: "アメフラシ"
    },
    /* バケツ */
    {
        name: "バケットスロッシャー",
        image: "Bucket/baketu.png",
        type: "スロッシャー",
		sub: "スプラッシュボム",
		special: "トリプルトルネード"
    },
    {
        name: "バケットスロッシャーデコ",
        image: "Bucket/baketudeko.png",
        type: "スロッシャー",
		sub: "ラインマーカー",
		special: "ショクワンダー"
    },
    {
        name: "ヒッセン",
        image: "Bucket/hissen.png",
        type: "スロッシャー",
		sub: "ポイズンミスト",
		special: "ジェットパック"
    },
    {
        name: "ヒッセン・ヒュー",
        image: "Bucket/hissenhyu-.png",
        type: "スロッシャー",
		sub: "タンサンボム",
		special: "エナジースタンド"
    },
    {
        name: "ヒッセンASH",
        image: "Bucket/hissenASH.png",
        type: "スロッシャー",
		sub: "スプラッシュボム",
		special: "スミナガシート"
    },
    {
        name: "スクリュースロッシャー",
        image: "Bucket/sukusuro.png",
        type: "スロッシャー",
		sub: "タンサンボム",
		special: "ナイスダマ"
    },
    {
        name: "スクリュースロッシャーネオ",
        image: "Bucket/sukusuroneo.png",
        type: "スロッシャー",
		sub: "ポイントセンサー",
		special: "ウルトラショット"
    },
    {
        name: "オーバーフロッシャー",
        image: "Bucket/huro.png",
        type: "スロッシャー",
		sub: "スプリンクラー",
		special: "アメフラシ"
    },
    {
        name: "オーバーフロッシャーデコ",
        image: "Bucket/hurodeko.png",
        type: "スロッシャー",
		sub: "ラインマーカー",
		special: "テイオウイカ"
    },
    {
        name: "エクスプロッシャー",
        image: "Bucket/ekusu.png",
        type: "スロッシャー",
		sub: "ポイントセンサー",
		special: "アメフラシ"
    },
    {
        name: "エクスプロッシャーカスタム",
        image: "Bucket/ekusukasu.png",
        type: "スロッシャー",
		sub: "スプラッシュシールド",
		special: "ウルトラチャクチ"
    },
    {
        name: "モップリン",
        image: "Bucket/moprin.png",
        type: "スロッシャー",
		sub: "キューバンボム",
		special: "サメライド"
    },
    {
        name: "モップリンD",
        image: "Bucket/moprinD.png",
        type: "スロッシャー",
		sub: "ジャンプビーコン",
		special: "ホップソナー"
    },
    {
        name: "モップリン角",
        image: "Bucket/moprintuno.png",
        type: "スロッシャー",
		sub: "カーリングボム",
		special: "カニタンク"
    },
    /* スピナー */
    {
        name: "スプラスピナー",
        image: "Spinner/supusupi.png",
        type: "スピナー",
		sub: "クイックボム",
		special: "ウルトラハンコ"
    },
    {
        name: "スプラスピナーコラボ",
        image: "Spinner/supikora.png",
        type: "スピナー",
		sub: "ポイズンミスト",
		special: "グレートバリア"
    },
    {
        name: "スプラスピナーPYTN",
        image: "Spinner/supusupiPYTN.png",
        type: "スピナー",
		sub: "ジャンプビーコン",
		special: "ウルトラショット"
    },
    {
        name: "バレルスピナー",
        image: "Spinner/bareru.png",
        type: "スピナー",
		sub: "スプリンクラー",
		special: "ホップソナー"
    },
    {
        name: "バレルスピナーデコ",
        image: "Spinner/barerudeko.png",
        type: "スピナー",
		sub: "ポイントセンサー",
		special: "テイオウイカ"
    },
    {
        name: "ハイドラント",
        image: "Spinner/dora.png",
        type: "スピナー",
		sub: "ロボットボム",
		special: "ナイスダマ"
    },
    {
        name: "ハイドラントカスタム",
        image: "Spinner/dorakasu.png",
        type: "スピナー",
		sub: "トラップ",
		special: "スミナガシート"
    },
    {
        name: "ハイドラント圧",
        image: "Spinner/doraatu.png",
        type: "スピナー",
		sub: "スプリンクラー",
		special: "グレートバリア"
    },
    {
        name: "クーゲルシュライバー",
        image: "Spinner/kuge.png",
        type: "スピナー",
		sub: "タンサンボム",
		special: "ジェットパック"
    },
    {
        name: "クーゲルシュライバー・ヒュー",
        image: "Spinner/kugehhyu-.png",
        type: "スピナー",
		sub: "トラップ",
		special: "キューインキ"
    },
    {
        name: "ノーチラス47",
        image: "Spinner/noti47.png",
        type: "スピナー",
		sub: "ポイントセンサー",
		special: "アメフラシ"
    },
    {
        name: "ノーチラス79",
        image: "Spinner/noti79.png",
        type: "スピナー",
		sub: "キューバンボム",
		special: "ウルトラチャクチ"
    },
    {
        name: "イグザミナー",
        image: "Spinner/zami.png",
        type: "スピナー",
		sub: "カーリングボム",
		special: "エナジースタンド"
    },
    {
        name: "イグザミナー・ヒュー",
        image: "Spinner/zamihyu-.png",
        type: "スピナー",
		sub: "スプラッシュボム",
		special: "カニタンク"
    },
    /* マニューバー */
    {
        name: "スパッタリー",
        image: "Maneuver/supa.png",
        type: "マニューバー",
		sub: "キューバンボム",
		special: "エナジースタンド"
    },
    {
        name: "スパッタリー・ヒュー",
        image: "Maneuver/supahyu.png",
        type: "マニューバー",
		sub: "トーピード",
		special: "サメライド"
    },
    {
        name: "スパッタリーOWL",
        image: "Maneuver/supaOWL.png",
        type: "マニューバー",
		sub: "スプラッシュボム",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "スプラマニューバー",
        image: "Maneuver/supumanyu.png",
        type: "マニューバー",
		sub: "キューバンボム",
		special: "カニタンク"
    },
    {
        name: "スプラマニューバーコラボ",
        image: "Maneuver/manyukora.png",
        type: "マニューバー",
		sub: "カーリングボム",
		special: "ウルトラチャクチ"
    },
    {
        name: "スプラマニューバー耀",
        image: "Maneuver/manyuyou.png",
        type: "マニューバー",
		sub: "タンサンボム",
		special: "グレートバリア"
    },
    {
        name: "ケルビン525",
        image: "Maneuver/kerubin.png",
        type: "マニューバー",
		sub: "スプラッシュシールド",
		special: "ナイスダマ"
    },
    {
        name: "ケルビン525デコ",
        image: "Maneuver/kerubindeko.png",
        type: "マニューバー",
		sub: "ポイントセンサー",
		special: "ウルトラショット"
    },
    {
        name: "デュアルスイーパー",
        image: "Maneuver/dual.png",
        type: "マニューバー",
		sub: "スプラッシュボム",
		special: "ホップソナー"
    },
    {
        name: "デュアルスイーパーカスタム",
        image: "Maneuver/dualkasu.png",
        type: "マニューバー",
		sub: "ジャンプビーコン",
		special: "デコイチラシ"
    },
    {
        name: "デュアルスイーパー蹄",
        image: "Maneuver/dualhidume.png",
        type: "マニューバー",
		sub: "ポイントセンサー",
		special: "スミナガシート"
    },
    {
        name: "クアッドホッパーブラック",
        image: "Maneuver/quadblack.png",
        type: "マニューバー",
		sub: "ロボットボム",
		special: "サメライド"
    },
    {
        name: "クアッドホッパーホワイト",
        image: "Maneuver/dquadwhite.png",
        type: "マニューバー",
		sub: "スプリンクラー",
		special: "ショクワンダー"
    },
    {
        name: "ガエンFF",
        image: "Maneuver/gaen.png",
        type: "マニューバー",
		sub: "トラップ",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "ガエンFFカスタム",
        image: "Maneuver/gaenkasutamu.png",
        type: "マニューバー",
		sub: "スプラッシュボム",
		special: "トリプルトルネード"
    },
    /* シェルター */
    {
        name: "パラシェルター",
        image: "Shelter/para.png",
        type: "シェルター",
		sub: "スプリンクラー",
		special: "トリプルトルネード"
    },
    {
        name: "パラシェルターソレーラ",
        image: "Shelter/parasore.png",
        type: "シェルター",
		sub: "ロボットボム",
		special: "ジェットパック"
    },
    {
        name: "キャンピングシェルター",
        image: "Shelter/camp.png",
        type: "シェルター",
		sub: "ジャンプビーコン",
		special: "キューインキ"
    },
    {
        name: "キャンピングシェルターソレーラ",
        image: "Shelter/campsore.png",
        type: "シェルター",
		sub: "トラップ",
		special: "ウルトラショット"
    },
    {
        name: "キャンピングシェルターCREM",
        image: "Shelter/campCREM.png",
        type: "シェルター",
		sub: "ポイズンミスト",
		special: "デコイチラシ"
    },
    {
        name: "スパイガジェット",
        image: "Shelter/supagaje.png",
        type: "シェルター",
		sub: "トラップ",
		special: "サメライド"
    },
    {
        name: "スパイガジェットソレーラ",
        image: "Shelter/supagajesore.png",
        type: "シェルター",
		sub: "トーピード",
		special: "スミナガシート"
    },
    {
        name: "スパイガジェット繚",
        image: "Shelter/supagajeryou.png",
        type: "シェルター",
		sub: "カーリングボム",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "24式張替傘・甲",
        image: "Shelter/wagasa.png",
        type: "シェルター",
		sub: "ラインマーカー",
		special: "グレートバリア"
    },
    {
        name: "24式張替傘・乙",
        image: "Shelter/wagasaotu.png",
        type: "シェルター",
		sub: "ポイズンミスト",
		special: "ウルトラチャクチ"
    },
    /* 弓 */
    {
        name: "トライストリンガー",
        image: "Bow/try.png",
        type: "弓",
		sub: "ポイズンミスト",
		special: "メガホンレーザー5.1ch"
    },
    {
        name: "トライストリンガーコラボ",
        image: "Bow/trykorabo.png",
        type: "弓",
		sub: "スプリンクラー",
		special: "デコイチラシ"
    },
    {
        name: "トライストリンガー燈",
        image: "Bow/trytou.png",
        type: "弓",
		sub: "ラインマーカー",
		special: "ジェットパック"
    },
    {
        name: "LACT-450",
        image: "Bow/lact.png",
        type: "弓",
		sub: "カーリングボム",
		special: "マルチミサイル"
    },
    {
        name: "LACT-450デコ",
        image: "Bow/lactdeko.png",
        type: "弓",
		sub: "スプラッシュシールド",
		special: "サメライド"
    },
    {
        name: "LACT-450MILK",
        image: "Bow/lactmilk.png",
        type: "弓",
		sub: "トーピード",
		special: "ナイスダマ"
    },
    {
        name: "フルイドV",
        image: "Bow/full.png",
        type: "弓",
		sub: "ロボットボム",
		special: "ウルトラハンコ"
    },
    {
        name: "フルイドVカスタム",
        image: "Bow/fullkasu.png",
        type: "弓",
		sub: "ポイントセンサー",
		special: "ホップソナー"
    },
    /* ワイパー */
    {
        name: "ドライブワイパー",
        image: "Wiper/drive.png",
        type: "ワイパー",
		sub: "トーピード",
		special: "ウルトラハンコ"
    },
    {
        name: "ドライブワイパーデコ",
        image: "Wiper/drivedeko.png",
        type: "ワイパー",
		sub: "ジャンプビーコン",
		special: "マルチミサイル"
    },
    {
        name: "ドライブワイパーRUST",
        image: "Wiper/driveRUST.png",
        type: "ワイパー",
		sub: "カーリングボム",
		special: "ウルトラショット"
    },
    {
        name: "ジムワイパー",
        image: "Wiper/gim.png",
        type: "ワイパー",
		sub: "クイックボム",
		special: "ショクワンダー"
    },
    {
        name: "ジムワイパー・ヒュー",
        image: "Wiper/gimhyu.png",
        type: "ワイパー",
		sub: "ポイズンミスト",
		special: "カニタンク"
    },
    {
        name: "ジムワイパー封",
        image: "Wiper/gimhuu.png",
        type: "ワイパー",
		sub: "スプラッシュシールド",
		special: "ナイスダマ"
    },
    {
        name: "デンタルワイパーミント",
        image: "Wiper/dental.png",
        type: "ワイパー",
		sub: "キューバンボム",
		special: "グレートバリア"
    },
    {
        name: "デンタルワイパースミ",
        image: "Wiper/dentalsumi.png",
        type: "ワイパー",
		sub: "スプラッシュシールド",
		special: "ジェットパック"
    },
];

let weaponHistory = [];

//武器抽選
function randomWeapon() {
    let candidates = weapons;

    // チェックされている武器名を取得
    const checkedWeapons = [...document.querySelectorAll(".weaponCheckbox:checked")]
        .map(box => box.value);

    // チェックされた武器だけを抽選対象にする
    candidates = candidates.filter(weapon =>
        checkedWeapons.includes(weapon.name)
    );

    if (candidates.length === 0) {
        alert("抽選できる武器がありません。");
        return;
    }

    //武器の選出
    let selectedWeapon;

    //直近10回に出た武器を除外
    const availableCandidates = candidates.filter(weapon => !weaponHistory.includes(weapon.name));

    //全武器が10以下なら履歴無視
    const pool = availableCandidates.length > 0
        ? availableCandidates
        : candidates;

    //抽選	
    selectedWeapon = pool[Math.floor(Math.random() * pool.length)];

    //履歴保存
    weaponHistory.push(selectedWeapon.name);
    if (weaponHistory.length > 10) {
        weaponHistory.shift();
    }

    //武器
    document.getElementById("weapon").textContent = selectedWeapon.name;
    //武器画像
    document.getElementById("weaponImage").src = "img/" + selectedWeapon.image;
	//サブ
	document.getElementById("subWeapon").textContent = selectedWeapon.sub;
	//スペシャル
	document.getElementById("specialWeapon").textContent = selectedWeapon.special;
}

//武器除外チェックリスト
function createWeaponList() {

    const area = document.getElementById("weaponSelectArea");
    area.innerHTML = `
		<div class="bulkActions">
			<button id="selectAllWeapons">全選択</button>
			<button id="deselectAllWeapons">全解除</button>
		</div>
	`;

    //武器種ごとにまとめる
    const weaponTypes = {};

    weapons.forEach(weapon => {
        if (!weaponTypes[weapon.type]) {
            weaponTypes[weapon.type] = [];
        }
        weaponTypes[weapon.type].push(weapon);
    });

    //HTML作成
    for (const type in weaponTypes) {

        const typeDiv = document.createElement("div");
        typeDiv.className = "weaponType";

        const weaponList = document.createElement("div");
        weaponList.className = "weaponList";
        weaponList.style.display = "none";

        //親要素
        typeDiv.innerHTML = `
		<div class="typeHeader">
        	<span class="toggle">▶</span>    
			
			<label>
                <input
                    type="checkbox"
                    class="typeCheckbox"
                    data-type="${type}"
                    checked
                >
                <strong>${type}</strong>
            </label>
		</div>
        `;

        //子要素
        weaponTypes[type].forEach(weapon => {
            weaponList.innerHTML += `
                <div class="weaponItem">
                    <label>
                        <input
                            type="checkbox"
                            class="weaponCheckbox"
                            data-type="${type}"
                            value="${weapon.name}"
                            checked
                        >
                        ${weapon.name}
                    </label>
                </div>
            `;
        });

        typeDiv.appendChild(weaponList);
        area.appendChild(typeDiv);
    }

    //全選択
    document.getElementById("selectAllWeapons").addEventListener("click", () => {
        document.querySelectorAll(".typeCheckbox, .weaponCheckbox").forEach(box => {
            box.checked = true;
            box.indeterminate = false;
        });
    });
    //全解除
    document.getElementById("deselectAllWeapons").addEventListener("click", () => {
        document.querySelectorAll(".typeCheckbox, .weaponCheckbox").forEach(box => {
            box.checked = false;
            box.indeterminate = false;
        });
    });
}

document.addEventListener("change", function(e) {
    if (e.target.classList.contains("typeCheckbox")) {
        const type = e.target.dataset.type;
        const checked = e.target.checked;

        document.querySelectorAll(`.weaponCheckbox[data-type="${type}"]`)
            .forEach(box => {
                box.checked = checked;
            });
    }

    //子チェックボックスが変更された場合
    if (e.target.classList.contains("weaponCheckbox")) {
        const type = e.target.dataset.type;

        //同じ武器種の子チェックボックス
        const children = document.querySelectorAll(`.weaponCheckbox[data-type="${type}"]`
        );

        //親チェックボックス
        const parent = document.querySelector(`.typeCheckbox[data-type="${type}"]`
        );

        const checkedCount = [...children].filter(box => box.checked).length;

        if (checkedCount === 0) {
            //全部OFF
            parent.checked = false;
            parent.indeterminate = false;
        } else if (checkedCount === children.length) {
            //全部ON
            parent.checked = true;
            parent.indeterminate = false;
        } else {
            //一部ON
            parent.checked = false;
            parent.indeterminate = true;
        }
    }
});


//チェックリストの開閉
document.addEventListener("click", function(e) {

    if (!e.target.classList.contains("toggle")) {
        return;
    }

    const header = e.target.closest(".typeHeader");
    const weaponList = header.parentElement.querySelector(".weaponList");
    const toggle = e.target;

    if (getComputedStyle(weaponList).display === "none") {
        weaponList.style.display = "grid";
        toggle.textContent = "▼";
    } else {
        weaponList.style.display = "none";
        toggle.textContent = "▶";
    }
});

//チェックリスト呼び出し
window.onload = function() {
    createWeaponList();

    //親チェックリストの開閉
    const toggleButton = document.getElementById("toggleExclude");
    const weaponArea = document.getElementById("weaponSelectArea");

    toggleButton.addEventListener("click", function() {
        if (weaponArea.style.display === "none" || weaponArea.style.display === "") {
            weaponArea.style.display = "block";
            toggleButton.textContent = "▲ 抽選対象武器選択";
        } else {
            weaponArea.style.display = "none";
            toggleButton.textContent = "▼ 抽選対象武器選択";
        }
    });
};