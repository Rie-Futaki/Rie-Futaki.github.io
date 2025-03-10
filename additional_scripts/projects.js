const ENG_button = document.querySelector(".eng");
const JPN_button = document.querySelector(".jpn");

const home = document.getElementById('home');
const home_ENG = home.textContent;
const home_JPN = "ホーム";

const projects = document.getElementById('projects');
const projects_ENG = projects.textContent;
const projects_JPN = "プロジェクト";

const language = document.getElementById('navbarDropdown');
const language_ENG = language.textContent;
const language_JPN = "言語";

const main_heading = document.getElementById('main_heading');
const main_heading_ENG = main_heading.textContent;
const main_heading_JPN = "プロジェクト・経験";

const web_projects = document.getElementById('web_projects');
const web_projects_ENG = web_projects.textContent;
const web_projects_JPN = "Web開発プロジェクト";

const bunny_project = document.getElementById('bunny_project');
const bunny_project_ENG = bunny_project.innerHTML;
const bunny_project_JPN = "<a href = \"https://github.com/Rie-Futaki/SVG-animation\" target = \"_blank\">うさぎSVGアニメーション</a>";

const wip = document.getElementById('wip');
const wip_ENG = wip.textContent;
const wip_JPN = "現在制作途中。もっと色々な動作や反応を足していきたいです。";

const about = document.querySelectorAll(".about");
const about_ENG = about[0].textContent;
const about_JPN = "プロジェクトについて:";

const bunny_about = document.getElementById('bunny_about');
const bunny_about_ENG = bunny_about.textContent;
const bunny_about_JPN = "個人的に作成したSVGアニメーションです。Adobe Illustratorで作ったうさぎのSVG画像コードをHTMLにインラインで直接書き加え、CSSとJavaScriptでアニメーションを付け加えました。ユーザーのマウスオーバー、クリックなどに反応します。";

const tools = document.querySelectorAll(".tools");
const tools_ENG = tools[0].textContent;
const tools_JPN = "使用したツール:";

const poke_project = document.getElementById('poke_project');
const poke_project_ENG = poke_project.innerHTML;
const poke_project_JPN = "<a href = \"https://github.com/Rie-Futaki/Pokedex\" target = \"_blank\">ポケモン図鑑（英語表記のみ）</a>";

const poke_about = document.getElementById('poke_about');
const poke_about_ENG = poke_about.innerHTML;
const poke_about_JPN =  "Web開発の授業の課題のひとつです。Async fetch APIで<a href = \"https://pokeapi.co\" target = \"_blank\">PokéAPI</a>からポケモンのデータを受信し、CSSグリッドで製作したレイアウトにドット絵と名前を表示します。<br>ポケモンをクリックすると、ダイアログボックスが表示され、そのポケモンの公式イラストと詳しい情報が表示される他、\"Catch!\”（ゲットする！）ボタンで捕まえることができます。ユーザーが捕まえたポケモンの情報はローカルストレージに保存されるので、ページをリフレッシュしても残ります。";

const office_about = document.getElementById('office_about');
const office_about_ENG = office_about.innerHTML;
const office_about_JPN = "Web開発の授業の課題のひとつです。見本となるデザイン案と同じレイアウトのものを２ページ、CSSとHTMLを使って製作しました。<br>CSSグリッドを使い、異なる画面サイズのデバイスでも見本と同じレイアウトになるように仕上げています。<br>この課題に取り組んだ際はまだSVGファイルの扱いに慣れておらず、用意されたロゴの色違いを作るためにSVGファイルをコピペして変える方法を使いましたが、後にSVGファイルをHTMLに加えてからCSSでfillプロパティを変更するほうが楽だったなと気付きました。";

const lqa_projects = document.getElementById('lqa_projects');
const lqa_projects_ENG = lqa_projects.textContent;
const lqa_projects_JPN = "LQAプロジェクト";

const lqa_skills = document.getElementById('lqa_skills');
const lqa_skills_ENG = lqa_skills.textContent;
const lqa_skills_JPN = "仕事内容とスキル";

const lqa_about = document.getElementById('lqa_about');
const lqa_about_ENG = lqa_projects.textContent;
const lqa_about_JPN = "臨時職員として採用され、その後正社員契約を結びました。長期運営中のモバイルやオンラインゲームの他、新作ゲームのLQAもいくつか経験させていただきました。";

const lqa1 = document.getElementById('lqa1');
const lqa1_ENG = lqa1.textContent;
const lqa1_JPN = "エンドユーザーの目線から作品をチェックし、テキストに間違いがないかを調べる。";

const lqa2 = document.getElementById('lqa2');
const lqa2_ENG = lqa2.textContent;
const lqa2_JPN = "ゲーム・アプリ内のすべてのテキスト・字幕において、不自然な表現や間違った表現がないか、表示にミスがないかの点検。";

const lqa3 = document.getElementById('lqa3');
const lqa3_ENG = lqa3.textContent;
const lqa3_JPN = "UIの見た目、機能性に問題がないかの点検。";

const lqa4 = document.getElementById('lqa4');
const lqa4_ENG = lqa4.textContent;
const lqa4_JPN = "他テスターやチームと連携して、バグを発見・報告。";

const lqa5 = document.getElementById('lqa5');
const lqa5_ENG = lqa5.textContent;
const lqa5_JPN = "Jiraなどのバグ追跡ツールの使用。";

const lqa6 = document.getElementById('lqa6');
const lqa6_ENG = lqa6.textContent;
const lqa6_JPN = "必要に応じて、編集と翻訳。";

const ubisoft = document.getElementById('ubisoft');
const ubisoft_ENG = ubisoft.innerHTML;
const ubisoft_JPN = '<a href = "https://www.ubisoft.com/ja-jp/game/for-honor" target = "_blank" class = "text-center">フォーオナー</a>';

const ubisoft_desc = document.getElementById('ubisoft_desc');
const ubisoft_desc_ENG = ubisoft_desc.innerHTML;
const ubisoft_desc_JPN = '<p><a href = "https://www.ubisoft.com/ja-jp/" target = "_blank">ユービーアイソフト</a>から2017年にリリースされ、現在もサービスが続いている歴史ファンタジーアクションゲーム。 <br>2023年度のLQAチームの一員として、アップデート内容のローカライズをチェックさせていただきました。</p>';

const coatsink_desc = document.getElementById('coatsink_desc');
const coatsink_desc_ENG = coatsink_desc.innerHTML;
const coatsink_desc_JPN = '<p><a href = "https://coatsink.com" target = "_blank">Coatsink</a>による、2022年にリリースされたちょっと風変わりなソウルライク。風刺と数々の有名ゲームへのオマージュが面白い作品。<br>ゲーム内のテキストおよびサブタイトルのチェックをさせていただきました。</p>';

const other_projects = document.getElementById('other_projects');
const other_projects_ENG = other_projects.textContent;
const other_projects_JPN = "その他の経験・スキル";

const french = document.getElementById('french');
const french_ENG = french.textContent;
const french_JPN = "フランス語: 2024年11月にDELF B2試験合格。";

const MA = document.getElementById('MA');
const MA_ENG = MA.innerHTML;
const MA_JPN = "2022年オタワ大学社会学科 卒業 文学修士: <a href = \"https://ruor.uottawa.ca/server/api/core/bitstreams/4da3ee97-df79-4537-be1c-e4abf29cef18/content\" target = \"_blank\">修士論文</a>";

const BA = document.getElementById('BA');
const BA_ENG = BA.textContent;
const BA_JPN = "2019年オタワ大学心理学科 卒業 文学士";

const backToTop = document.getElementById('backToTop');
const backToTop_ENG = backToTop.textContent;
const backToTop_JPN = "ページトップへ戻る";

const texts = [home, projects, language, main_heading, web_projects, wip, bunny_about, lqa_projects, lqa_about, lqa_skills, lqa1, lqa2, lqa3, lqa4, lqa5, lqa6, other_projects, french, BA, backToTop]
const ENG_texts = [home_ENG, projects_ENG, language_ENG, main_heading_ENG, web_projects_ENG, wip_ENG, 
                bunny_about_ENG, lqa_projects_ENG, lqa_about_ENG, lqa_skills_ENG, lqa1_ENG, lqa2_ENG, lqa3_ENG, 
                lqa4_ENG, lqa5_ENG, lqa6_ENG, other_projects_ENG, french_ENG, BA_ENG, backToTop_ENG]
const JPN_texts = [home_JPN, projects_JPN, language_JPN, main_heading_JPN, web_projects_JPN, wip_JPN, 
                bunny_about_JPN, lqa_projects_JPN, lqa_about_JPN, lqa_skills_JPN, lqa1_JPN, lqa2_JPN, lqa3_JPN, 
                lqa4_JPN, lqa5_JPN, lqa6_JPN, other_projects_JPN, french_JPN, BA_JPN, backToTop_JPN]

const changeHTML = [bunny_project, poke_project, poke_about, office_about, ubisoft, ubisoft_desc, coatsink_desc, MA];
const HTML_ENG = [bunny_project_ENG, poke_project_ENG, poke_about_ENG, office_about_ENG, ubisoft_ENG, ubisoft_desc_ENG, coatsink_desc_ENG, MA_ENG];
const HTML_JPN = [bunny_project_JPN, poke_project_JPN, poke_about_JPN, office_about_JPN, ubisoft_JPN, ubisoft_desc_JPN, coatsink_desc_JPN, MA_JPN];

function changeToJPN(){
    for (let i = 0; i < texts.length; i++){
        texts[i].textContent = JPN_texts[i]
    }

    for (let i = 0; i < changeHTML.length; i++){
        changeHTML[i].innerHTML = HTML_JPN[i]
    }

    for (let i = 0; i < about.length; i++){
        about[i].textContent = about_JPN
    }

    for (let i = 0; i < tools.length; i++){
        tools[i].textContent = tools_JPN
    }
}

function changeToENG(){
    for (let i = 0; i < texts.length; i++){
        texts[i].textContent = ENG_texts[i]
    }

    for (let i = 0; i < changeHTML.length; i++){
        changeHTML[i].innerHTML = HTML_ENG[i]
    }

    for (let i = 0; i < about.length; i++){
        about[i].textContent = about_ENG
    }

    for (let i = 0; i < tools.length; i++){
        tools[i].textContent = tools_ENG
    }
}

ENG_button.addEventListener('click', function(){
    changeToENG();
})

JPN_button.addEventListener('click', function(){
    changeToJPN();
})

/* Added:
id = "ubisoft_desc" text: A long-running multiplayer online battle game from <a href = "https://www.ubisoft.com/en-us/" target = "_blank">Ubisoft</a>, with lots of fun historical and cultural allusions.<br>Checked localizations of updates as part of the 2023 LQA team.
id = "coatsink" text: The Last Hero of Nostalgaia
id = "coatsink_desc" text: A quirky, satirical soulslike released in 2022 by <a href = "https://coatsink.com" target = "_blank">Coatsink</a>!<br>Checked all in-game texts and subtitles.  */

/* Has JPN webpage:

Ubisoft main page: https://www.ubisoft.com/ja-jp/ 
 */