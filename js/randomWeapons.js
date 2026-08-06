/**
 * ランダム武器抽選
 */


const weapons = [
    /* シューター */
    {
        name: "わかばシューター",
        image: "Shooter/wakaba.png",
        type: "シューター"
    },
    {
        name: "もみじシューター",
        image: "Shooter/momiji.png",
        type: "シューター"
    },
    {
        name: "スプラシューター",
        image: "Shooter/sushi.png",
        type: "シューター"

    },
    {
        name: "スプラシューターコラボ",
        image: "Shooter/sushikora.png",
        type: "シューター"

    },
    {
        name: "スプラシューター煌",
        image: "Shooter/sushikou.png",
        type: "シューター"

    },
    {
        name: "プロモデラーMG",
        image: "Shooter/silver.png",
        type: "シューター"

    },
    {
        name: "プロモデラーRG",
        image: "Shooter/momiji.png",
        type: "シューター"

    },
    {
        name: "プロモデラー彩",
        image: "Shooter/modera-sai.png",
        type: "シューター"

    },
    {
        name: "N-ZAP85",
        image: "Shooter/zapkuro.png",
        type: "シューター"

    },
    {
        name: "N-ZAP89",
        image: "Shooter/zapaka.png",
        type: "シューター"

    },
    {
        name: "スペースシューター",
        image: "Shooter/supesyu.png",
        type: "シューター"

    },
    {
        name: "スペースシューターコラボ",
        image: "Shooter/supesyukorabo.png",
        type: "シューター"

    },
    {
        name: "プライムシューター",
        image: "Shooter/puraimu.png",
        type: "シューター"

    },
    {
        name: "プライムシューターコラボ",
        image: "Shooter/purakora.png",
        type: "シューター"

    },
    {
        name: "プライムシューターFRZN",
        image: "Shooter/puraimuFRZN.png",
        type: "シューター"

    },
    {
        name: "ボールドマーカー",
        image: "Shooter/bold.png",
        type: "シューター"

    },
    {
        name: "ボールドマーカーネオ",
        image: "Shooter/boldneo.png",
        type: "シューター"

    },
    {
        name: "52ガロン",
        image: "Shooter/52.png",
        type: "シューター"

    },
    {
        name: "52ガロンデコ",
        image: "Shooter/52deko.png",
        type: "シューター"

    },
    {
        name: "96ガロン",
        image: "Shooter/96.png",
        type: "シューター"

    },
    {
        name: "96ガロンデコ",
        image: "Shooter/96deko.png",
        type: "シューター"

    },
    {
        name: "96ガロン爪",
        image: "Shooter/96tume.png",
        type: "シューター"

    },
    {
        name: "シャープマーカー",
        image: "Shooter/sya-ka-.png",
        type: "シューター"

    },
    {
        name: "シャープマーカーネオ",
        image: "Shooter/sya-ka-neo.png",
        type: "シューター"

    },
    {
        name: "シャープマーカーGECK",
        image: "Shooter/sya-ka-GECK.png",
        type: "シューター"

    },
    {
        name: "ジェットスイーパー",
        image: "Shooter/jet.png",
        type: "シューター"

    },
    {
        name: "ジェットスイーパーカスタム",
        image: "Shooter/jetkasu.png",
        type: "シューター"

    },
    {
        name: "ジェットスイーパーCOBR",
        image: "Shooter/jetcobr.png",
        type: "シューター"

    },
    {
        name: "L3リールガン",
        image: "Shooter/L3.png",
        type: "シューター"

    },
    {
        name: "L3リールガンD",
        image: "Shooter/L3D.png",
        type: "シューター"

    },
    {
        name: "L3リールガン箔",
        image: "Shooter/L3haku.png",
        type: "シューター"

    },
    {
        name: "H3リールガン",
        image: "Shooter/H3.png",
        type: "シューター"

    },
    {
        name: "H3リールガンD",
        image: "Shooter/H3D.png",
        type: "シューター"

    },
    {
        name: "H3リールガンSNAK",
        image: "Shooter/H3SNAK.png",
        type: "シューター"

    },
    {
        name: "ボトルガイザー",
        image: "Shooter/botoru.png",
        type: "シューター"

    },
    {
        name: "ボトルガイザーフォイル",
        image: "Shooter/botorufoiru.png",
        type: "シューター"

    },
    /* ブラスター */
    {
        name: "ホットブラスター",
        image: "Blaster/hot.png",
        type: "ブラスター"
    },
    {
        name: "ホットブラスターカスタム",
        image: "Blaster/hotkasu.png",
        type: "ブラスター"
    },
    {
        name: "ホットブラスター艶",
        image: "Blaster/hoten.png",
        type: "ブラスター"
    },
    {
        name: "ロングブラスター",
        image: "Blaster/long.png",
        type: "ブラスター"
    },
    {
        name: "ロングブラスターカスタム",
        image: "Blaster/longkasu.png",
        type: "ブラスター"
    },
    {
        name: "ラピッドブラスター",
        image: "Blaster/rapid.png",
        type: "ブラスター"
    },
    {
        name: "ラピッドブラスターデコ",
        image: "Blaster/rapiddeko.png",
        type: "ブラスター"
    },
    {
        name: "ラピッドブラスターエリート",
        image: "Blaster/Reri-to.png",
        type: "ブラスター"
    },
    {
        name: "ラピッドブラスターエリートデコ",
        image: "Blaster/Reri-todeko.png",
        type: "ブラスター"
    },
    {
        name: "ラピッドブラスターエリートWNTR",
        image: "Blaster/Reri-toWNTR.png",
        type: "ブラスター"
    },
    {
        name: "ノヴァブラスター",
        image: "Blaster/nova.png",
        type: "ブラスター"
    },
    {
        name: "ノヴァブラスターネオ",
        image: "Blaster/novaneo.png",
        type: "ブラスター"
    },
    {
        name: "クラッシュブラスター",
        image: "Blaster/clash.png",
        type: "ブラスター"
    },
    {
        name: "クラッシュブラスターネオ",
        image: "Blaster/clashneo.png",
        type: "ブラスター"
    },
    {
        name: "S-BLAST91",
        image: "Blaster/S91.png",
        type: "ブラスター"
    },
    {
        name: "S-BLAST92",
        image: "Blaster/S92.png",
        type: "ブラスター"
    },
    /* ローラー */
    {
        name: "スプラローラー",
        image: "Roller/supuro-.png",
        type: "ローラー"
    },
    {
        name: "スプラローラーコラボ",
        image: "Roller/supuro-korabo.png",
        type: "ローラー"
    },
    {
        name: "カーボンローラー",
        image: "Roller/karo-ra.png",
        type: "ローラー"
    },
    {
        name: "カーボンローラーデコ",
        image: "Roller/karo-radeko.png",
        type: "ローラー"
    },
    {
        name: "カーボンローラーANGL",
        image: "Roller/karo-raANGL.png",
        type: "ローラー"
    },
    {
        name: "ダイナモローラー",
        image: "Roller/dainamo.png",
        type: "ローラー"
    },
    {
        name: "ダイナモローラーテスラ",
        image: "Roller/dainamotesra.png",
        type: "ローラー"
    },
    {
        name: "ダイナモローラー冥",
        image: "Roller/dainamomei.png",
        type: "ローラー"
    },
    {
        name: "ヴァリアブルローラー",
        image: "Roller/valiable.png",
        type: "ローラー"
    },
    {
        name: "ヴァリアブルローラーフォイル",
        image: "Roller/valiablefoiru.png",
        type: "ローラー"
    },
    {
        name: "ワイドローラー",
        image: "Roller/wide.png",
        type: "ローラー"
    },
    {
        name: "ワイドローラーコラボ",
        image: "Roller/widekorabo.png",
        type: "ローラー"
    },
    {
        name: "ワイドローラー惑",
        image: "Roller/widewaku.png",
        type: "ローラー"
    },
    /* フデ */
    {
        name: "パブロ",
        image: "Brush/pablo.png",
        type: "フデ"
    },
    {
        name: "パブロ・ヒュー",
        image: "Brush/pablohyu-.png",
        type: "フデ"
    },
    {
        name: "ホクサイ",
        image: "Brush/hokusai.png",
        type: "フデ"
    },
    {
        name: "ホクサイ・ヒュー",
        image: "Brush/hokusaihyu-.png",
        type: "フデ"
    },
    {
        name: "ホクサイ彗",
        image: "Brush/hokusaisui.png",
        type: "フデ"
    },
    {
        name: "フィンセント",
        image: "Brush/fin.png",
        type: "フデ"
    },
    {
        name: "フィンセント・ヒュー",
        image: "Brush/finhyu-.png",
        type: "フデ"
    },
    {
        name: "フィンセントBRNZ",
        image: "Brush/finBRNZ.png",
        type: "フデ"
    },
    /* チャージャー */
    {
        name: "スクイックリンα",
        image: "Charger/sukuikua.png",
        type: "チャージャー"
    },
    {
        name: "スクイックリンβ",
        image: "Charger/sukuikub.png",
        type: "チャージャー"
    },
    {
        name: "スプラチャージャー",
        image: "Charger/suputya.png",
        type: "チャージャー"
    },
    {
        name: "スプラチャージャーコラボ",
        image: "Charger/suputyakorabo.png",
        type: "チャージャー"
    },
    {
        name: "スプラチャージャーFRST",
        image: "Charger/suputyaFRST.png",
        type: "チャージャー"
    },
    {
        name: "スプラスコープ",
        image: "Charger/supusuko.png",
        type: "チャージャー"
    },
    {
        name: "スプラスコープコラボ",
        image: "Charger/supusukokorabo.png",
        type: "チャージャー"
    },
    {
        name: "スプラスコープFRST",
        image: "Charger/supusukoFRST.png",
        type: "チャージャー"
    },
    {
        name: "リッター4K",
        image: "Charger/ritta-.png",
        type: "チャージャー"
    },
    {
        name: "リッター4Kカスタム",
        image: "Charger/ritta-kasutamu.png",
        type: "チャージャー"
    },
    {
        name: "4Kスコープ",
        image: "Charger/4K.png",
        type: "チャージャー"
    },
    {
        name: "4Kスコープカスタム",
        image: "Charger/4Kkasutamu.png",
        type: "チャージャー"
    },
    {
        name: "14式竹筒銃・甲",
        image: "Charger/takekou.png",
        type: "チャージャー"
    },
    {
        name: "14式竹筒銃・乙",
        image: "Charger/takeotu.png",
        type: "チャージャー"
    },
    {
        name: "ソイチューバー",
        image: "Charger/soityu.png",
        type: "チャージャー"
    },
    {
        name: "ソイチューバーカスタム",
        image: "Charger/soityukasu.png",
        type: "チャージャー"
    },
    {
        name: "R-PEN/5H",
        image: "Charger/r-penH.png",
        type: "チャージャー"
    },
    {
        name: "R-PEN/5B",
        image: "Charger/r-penB.png",
        type: "チャージャー"
    },
    /* バケツ */
    {
        name: "バケットスロッシャー",
        image: "Bucket/baketu.png",
        type: "スロッシャー"
    },
    {
        name: "バケットスロッシャーデコ",
        image: "Bucket/baketudeko.png",
        type: "スロッシャー"
    },
    {
        name: "ヒッセン",
        image: "Bucket/hissen.png",
        type: "スロッシャー"
    },
    {
        name: "ヒッセン・ヒュー",
        image: "Bucket/hissenhyu-.png",
        type: "スロッシャー"
    },
    {
        name: "ヒッセンASH",
        image: "Bucket/hissenASH.png",
        type: "スロッシャー"
    },
    {
        name: "スクリュースロッシャー",
        image: "Bucket/sukusuro.png",
        type: "スロッシャー"
    },
    {
        name: "スクリュースロッシャーネオ",
        image: "Bucket/sukusuroneo.png",
        type: "スロッシャー"
    },
    {
        name: "オーバーフロッシャー",
        image: "Bucket/huro.png",
        type: "スロッシャー"
    },
    {
        name: "オーバーフロッシャーデコ",
        image: "Bucket/hurodeko.png",
        type: "スロッシャー"
    },
    {
        name: "エクスプロッシャー",
        image: "Bucket/ekusu.png",
        type: "スロッシャー"
    },
    {
        name: "エクスプロッシャーカスタム",
        image: "Bucket/ekusukasu.png",
        type: "スロッシャー"
    },
    {
        name: "モップリン",
        image: "Bucket/moprin.png",
        type: "スロッシャー"
    },
    {
        name: "モップリンD",
        image: "Bucket/moprinD.png",
        type: "スロッシャー"
    },
    {
        name: "モップリン角",
        image: "Bucket/moprintuno.png",
        type: "スロッシャー"
    },
    /* スピナー */
    {
        name: "スプラスピナー",
        image: "Spinner/supusupi.png",
        type: "スピナー"
    },
    {
        name: "スプラスピナーコラボ",
        image: "Spinner/supikora.png",
        type: "スピナー"
    },
    {
        name: "スプラスピナーPYTN",
        image: "Spinner/supusupiPYTN.png",
        type: "スピナー"
    },
    {
        name: "バレルスピナー",
        image: "Spinner/bareru.png",
        type: "スピナー"
    },
    {
        name: "バレルスピナーデコ",
        image: "Spinner/barerudeko.png",
        type: "スピナー"
    },
    {
        name: "ハイドラント",
        image: "Spinner/dora.png",
        type: "スピナー"
    },
    {
        name: "ハイドラントカスタム",
        image: "Spinner/dorakasu.png",
        type: "スピナー"
    },
    {
        name: "ハイドラント圧",
        image: "Spinner/doraatu.png",
        type: "スピナー"
    },
    {
        name: "クーゲルシュライバー",
        image: "Spinner/kuge.png",
        type: "スピナー"
    },
    {
        name: "クーゲルシュライバー・ヒュー",
        image: "Spinner/kugehhyu-.png",
        type: "スピナー"
    },
    {
        name: "ノーチラス47",
        image: "Spinner/noti47.png",
        type: "スピナー"
    },
    {
        name: "ノーチラス79",
        image: "Spinner/noti79.png",
        type: "スピナー"
    },
    {
        name: "イグザミナー",
        image: "Spinner/zami.png",
        type: "スピナー"
    },
    {
        name: "イグザミナー・ヒュー",
        image: "Spinner/zamihyu-.png",
        type: "スピナー"
    },
    /* マニューバー */
    {
        name: "スパッタリー",
        image: "Maneuver/supa.png",
        type: "マニューバー"
    },
    {
        name: "スパッタリー・ヒュー",
        image: "Maneuver/supahyu.png",
        type: "マニューバー"
    },
    {
        name: "スパッタリーOWL",
        image: "Maneuver/supaOWL.png",
        type: "マニューバー"
    },
    {
        name: "スプラマニューバー",
        image: "Maneuver/supumanyu.png",
        type: "マニューバー"
    },
    {
        name: "スプラマニューバーコラボ",
        image: "Maneuver/manyukora.png",
        type: "マニューバー"
    },
    {
        name: "スプラマニューバー耀",
        image: "Maneuver/manyuyou.png",
        type: "マニューバー"
    },
    {
        name: "ケルビン525",
        image: "Maneuver/kerubin.png",
        type: "マニューバー"
    },
    {
        name: "ケルビン525デコ",
        image: "Maneuver/kerubindeko.png",
        type: "マニューバー"
    },
    {
        name: "デュアルスイーパー",
        image: "Maneuver/dual.png",
        type: "マニューバー"
    },
    {
        name: "デュアルスイーパーカスタム",
        image: "Maneuver/dualkasu.png",
        type: "マニューバー"
    },
    {
        name: "デュアルスイーパー蹄",
        image: "Maneuver/dualhidume.png",
        type: "マニューバー"
    },
    {
        name: "クアッドホッパーブラック",
        image: "Maneuver/quadblack.png",
        type: "マニューバー"
    },
    {
        name: "クアッドホッパーホワイト",
        image: "Maneuver/dquadwhite.png",
        type: "マニューバー"
    },
    {
        name: "ガエンFF",
        image: "Maneuver/gaen.png",
        type: "マニューバー"
    },
    {
        name: "ガエンFFカスタム",
        image: "Maneuver/gaenkasutamu.png",
        type: "マニューバー"
    },
    /* シェルター */
    {
        name: "パラシェルター",
        image: "Shelter/para.png",
        type: "シェルター"
    },
    {
        name: "パラシェルターソレーラ",
        image: "Shelter/parasore.png",
        type: "シェルター"
    },
    {
        name: "キャンピングシェルター",
        image: "Shelter/camp.png",
        type: "シェルター"
    },
    {
        name: "キャンピングシェルターソレーラ",
        image: "Shelter/campsore.png",
        type: "シェルター"
    },
    {
        name: "キャンピングシェルターCREM",
        image: "Shelter/campCREM.png",
        type: "シェルター"
    },
    {
        name: "スパイガジェット",
        image: "Shelter/supagaje.png",
        type: "シェルター"
    },
    {
        name: "スパイガジェットソレーラ",
        image: "Shelter/supagajesore.png",
        type: "シェルター"
    },
    {
        name: "スパイガジェット繚",
        image: "Shelter/supagajeryou.png",
        type: "シェルター"
    },
    {
        name: "24式張替傘・甲",
        image: "Shelter/wagasa.png",
        type: "シェルター"
    },
    {
        name: "24式張替傘・乙",
        image: "Shelter/wagasaotu.png",
        type: "シェルター"
    },
    /* 弓 */
    {
        name: "トライストリンガー",
        image: "Bow/try.png",
        type: "弓"
    },
    {
        name: "トライストリンガーコラボ",
        image: "Bow/trykorabo.png",
        type: "弓"
    },
    {
        name: "トライストリンガー燈",
        image: "Bow/trytou.png",
        type: "弓"
    },
    {
        name: "LACT-450",
        image: "Bow/lact.png",
        type: "弓"
    },
    {
        name: "LACT-450デコ",
        image: "Bow/lactdeko.png",
        type: "弓"
    },
    {
        name: "LACT-450MILK",
        image: "Bow/lactmilk.png",
        type: "弓"
    },
    {
        name: "フルイドV",
        image: "Bow/full.png",
        type: "弓"
    },
    {
        name: "フルイドVカスタム",
        image: "Bow/fullkasu.png",
        type: "弓"
    },
    /* ワイパー */
    {
        name: "ドライブワイパー",
        image: "Wiper/drive.png",
        type: "ワイパー"
    },
    {
        name: "ドライブワイパーデコ",
        image: "Wiper/drivedeko.png",
        type: "ワイパー"
    },
    {
        name: "ドライブワイパーRUST",
        image: "Wiper/driveRUST.png",
        type: "ワイパー"
    },
    {
        name: "ジムワイパー",
        image: "Wiper/gim.png",
        type: "ワイパー"
    },
    {
        name: "ジムワイパー・ヒュー",
        image: "Wiper/gimhyu.png",
        type: "ワイパー"
    },
    {
        name: "ジムワイパー封",
        image: "Wiper/gimhuu.png",
        type: "ワイパー"
    },
    {
        name: "デンタルワイパーミント",
        image: "Wiper/dental.png",
        type: "ワイパー"
    },
    {
        name: "デンタルワイパースミ",
        image: "Wiper/dentalsumi.png",
        type: "ワイパー"
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
	selectedWeapon = pool[Math.floor(Math.random()* pool.length)];

    //履歴保存
	weaponHistory.push(selectedWeapon.name);
	if(weaponHistory.length > 10){
		weaponHistory.shift();
	}

    //武器
    document.getElementById("weapon").textContent = selectedWeapon.name;
    //武器画像
    document.getElementById("weaponImage").src = "img/" + selectedWeapon.image;

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