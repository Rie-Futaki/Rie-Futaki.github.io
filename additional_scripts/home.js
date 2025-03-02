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

const greet = document.getElementById('greeting');
const greet_ENG = greet.textContent;
const greet_JPN = "ようこそ ＆ はじめまして！";

const greet2 = document.getElementById('greeting2');
const greet2_ENG = greet2.textContent;
const greet2_JPN = "私のGitHubページに訪問いただき、ありがとうございます。";

const about = document.getElementById('about');
const about_ENG = about.textContent;
const about_JPN = "現在、カナダ・オンタリオ州のアルゴンキン・カレッジでWeb開発とWebアプリケーションを勉強している、二木理慧と申します。";

const about2 = document.getElementById('about2');
const about2_ENG = about2.textContent;
const about2_JPN = "2015年から2022年にかけてオタワ大学で心理学と社会学を学び、研究の面白さ、そして得た発見を伝えるための的確な表現力の大切さを実感しました。その後は英和・和英のローカライズ（LQA）テスターとして、さまざまなゲーム・アプリのチェックをさせていただきました。小さなバグや違和感も見逃さないよう、丁寧にひとつひとつタスクをこなすこと、そしてなにより「チームの一員となって、よりよい作品を世に送り出す」お手伝いができ、とてもいい経験になりました。これまではLQAテスターとして、バグを見つけ出して報告するまでが仕事でしたが、これからはコードも書けるように勉強中です。";

const about3 = document.getElementById('about3');
const about3_ENG = about3.textContent;
const about3_JPN = "今までの経験と新たに得たプログラミングスキルを活かして、Web開発という新しい分野でもチームに貢献できるよう頑張りたいと思っています。";

const closing = document.getElementById('closing');
const closing_ENG = closing.textContent;
const closing_JPN = "どうぞよろしくお願いします。";

const salutation = document.getElementById('salutation');
const salutation_ENG = salutation.textContent;
const salutation_JPN = "二木理慧";

const skills = document.getElementById('skills');
const skills_ENG = skills.textContent;
const skills_JPN = "スキル";

const prog_langs = document.getElementById('prog_langs');
const prog_langs_ENG = prog_langs.textContent;
const prog_langs_JPN = "プログラミング・マークアップ言語";

const frameworks = document.getElementById('frameworks');
const frameworks_ENG = frameworks.textContent;
const frameworks_JPN = "フレームワーク・ライブラリなど";

const software = document.getElementById('software');
const software_ENG = software.textContent;
const software_JPN = "管理システム・ソフトウェア";

const jira = document.getElementById('jira');
const jira_ENG = jira.textContent;
const jira_JPN = "Jira バグ追跡ツール";

const databases = document.getElementById('databases');
const databases_ENG = databases.textContent;
const databases_JPN = "データベース関連";

const design = document.getElementById('design');
const design_ENG = design.textContent;
const design_JPN = "Web デザイン";

const others = document.getElementById('others');
const others_ENG = others.textContent;
const others_JPN = "その他のスキル";

const qualitative = document.getElementById('qualitative');
const qualitative_ENG = qualitative.textContent;
const qualitative_JPN = "定性分析";

const quantitative = document.getElementById('quantitative');
const quantitative_ENG = quantitative.textContent;
const quantitative_JPN = "定量分析";

const lqa = document.getElementById('lqa');
const lqa_ENG = lqa.textContent;
const lqa_JPN = "ローカライズQA（和英、英和）";

const french = document.getElementById('french');
const french_ENG = french.textContent;
const french_JPN = "フランス語*（現在DELF B2）";

const learning = document.getElementById('learning');
const learning_ENG = learning.textContent;
const learning_JPN = "*現在勉強中です。";

const backToTop = document.getElementById('backToTop');
const backToTop_ENG = backToTop.textContent;
const backToTop_JPN = "ページトップへ戻る";

const texts = [home, projects, language, greet, greet2, about, about2, about3, closing, salutation, skills, prog_langs, frameworks, software, jira, databases, design, others, qualitative, quantitative,lqa, french, learning, backToTop]
const ENG_texts = [home_ENG, projects_ENG, language_ENG, greet_ENG, greet2_ENG, about_ENG, about2_ENG, about3_ENG, closing_ENG, salutation_ENG, skills_ENG, prog_langs_ENG, frameworks_ENG, software_ENG, jira_ENG, databases_ENG, design_ENG, others_ENG, qualitative_ENG, quantitative_ENG, lqa_ENG, french_ENG, learning_ENG, backToTop_ENG]
const JPN_texts = [home_JPN, projects_JPN, language_JPN, greet_JPN, greet2_JPN, about_JPN, about2_JPN, about3_JPN, closing_JPN, salutation_JPN, skills_JPN, prog_langs_JPN, frameworks_JPN, software_JPN, jira_JPN, databases_JPN, design_JPN, others_JPN, qualitative_JPN, quantitative_JPN, lqa_JPN, french_JPN, learning_JPN, backToTop_JPN]


function changeToJPN(){
    for (let i = 0; i < texts.length; i++){
            texts[i].textContent = JPN_texts[i]
        }
}

function changeToENG(){
    for (let i = 0; i < texts.length; i++){
        texts[i].textContent = ENG_texts[i]
    }
}

ENG_button.addEventListener('click', function(){
    changeToENG();
})

JPN_button.addEventListener('click', function(){
    changeToJPN();
})