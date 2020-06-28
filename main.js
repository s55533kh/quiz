let que = document.getElementById("que");
let sen = document.getElementById("sen");
let A = document.getElementById("A");
let B = document.getElementById("B");
let C = document.getElementById("C");
let D = document.getElementById("D");

let sco = 0;
let i = 0;
let flag = 0;

let toi = new Array(9);
toi[0] = "Q1.関ヶ原の戦いは、何年ですか？";
toi[1] = "Q2.江戸時代「御三家」と呼ばれていなかったのはどこですか？";
toi[2] = "Q3.次のうち、関ヶ原の戦い以前から徳川家に従っていた大名はどれですか？";
toi[3] = "Q4.武家諸法度が定められた年と定めた人物との組み合わせが正しいものは、どれですか。？";
toi[4] = "Q5.江戸時代、総人口の約7%を占めた身分はどれですか？";
toi[5] = "Q6.幕府からキリスト教禁止令が出されたのは何年ですか？";
toi[6] = "Q7.1637年に起こる島原・天草一揆、島原は今の長崎県ですが、天草は今の何県でしょう？";
toi[7] = "Q8.元禄文化に活躍した人物ではないのはだれでしょう？";
toi[8] = "Q9.改革を行った人物とその改革の名称の組み合わせが正しいものはどれでしょう？";
toi[9] = "Q10.独自の改革を行った藩を雄藩といいますが、藩とその藩が行ったことの組み合わせが正しいものはどれでしょう？";
let sen2 = new Array(9);
sen2[0] = "A.1582年　B.1600年　C.1602年　D.1610年";
sen2[1] = "A.尾張　B.紀伊　C.水戸　D.上杉";
sen2[2] = "A.貴族大名　B.親藩　C.譜代大名　D.外様大名";
sen2[3] = "A.1615年-家康　B.1625年-家康　C.1615年-家光　D.1625年-家光";
sen2[4] = "A.百姓　B.武士　C.町人　D.えた、ひにん身分";
sen2[5] = "A.1610年　B.1612年　C.1618年　D.1624年";
sen2[6] = "A.熊本県　B.福岡県　C.佐賀県　D.大分県";
sen2[7] = "A.近松門左衛門　B.松尾芭蕉　C.葛飾北斎　D.井原西鶴";
sen2[8] = "A.徳川吉宗-寛政の改革　B.田沼意次-享保の改革　C.松平定信-享保の改革　D.水野忠邦-天保の改革";
sen2[9] = "A.薩摩藩-金融業　B.肥前藩-陶磁器の専売制　C.長州藩-黒砂糖の専売制　D.長州藩-陶磁器の専売制";
let ans = new Array(9);
ans = ["B", "D", "C", "A", "B", "B", "A", "C", "D", "B"];

A.addEventListener("click",() => {
    if(flag == 0){
        if(ans[i] == "A"){
            que.textContent = "正解！";
            sco++;
        } else {
            que.textContent = "不正解";
        }
        setTimeout(() => {
            if(i<9){
                que.textContent = toi[i+1];
                sen.textContent = sen2[i+1];
            }
            i++;
            if(i == 10){
                que.textContent = "10問中" +sco+ "問正解です。";
                if(sco == 10){
                    sen.textContent = "全問正解です！おめでとう！";
                } else {
                    sen.textContent = "間違えたところを復習しましょう！"
                }
                flag =1;
            }
        },1000);
    }
});

B.addEventListener("click",() => {
    if(flag == 0){
        if(ans[i] == "B"){
            que.textContent = "正解！";
            sco++;
        } else {
            que.textContent = "不正解";
        }
        setTimeout(() => {
            if(i<9){
                que.textContent = toi[i+1];
                sen.textContent = sen2[i+1];
            } 
            i++;
            if(i == 10){
                que.textContent = "10問中" +sco+ "問正解です。";
                if(sco == 10){
                    sen.textContent = "全問正解です！おめでとう！";
                } else {
                    sen.textContent = "間違えたところを復習しましょう！";
                }
                flag = 1;
            }
        },1000);
    }
});

C.addEventListener("click",() => {
    if(flag == 0){
        if(ans[i] == "C"){
            que.textContent = "正解！";
            sco++;
        } else {
            que.textContent = "不正解";
        }
        setTimeout(() => {
            if(i<9){
                que.textContent = toi[i+1];
                sen.textContent = sen2[i+1];
            }
            i++;
            if(i == 10){
                que.textContent = "10問中" +sco+ "問正解です。";
                if(sco == 10){
                    sen.textContent = "全問正解です！おめでとう！";
                } else {
                    sen.textContent = "間違えたところを復習しましょう！";
                }
                flag = 1;
            }
        },1000);
    }
});

D.addEventListener("click",() => {
    if(flag == 0){
        if(ans[i] == "D"){
            que.textContent = "正解！";
            sco++;
        } else {
            que.textContent = "不正解";
        }
        setTimeout(() => {
            if(i<9){
                que.textContent = toi[i+1];
                sen.textContent = sen2[i+1];
            } 
            i++;
            if(i == 10){
                que.textContent = "10問中" +sco+ "問正解です。";
                if(sco == 10){
                    sen.textContent = "全問正解です！おめでとう！";
                } else {
                    sen.textContent = "間違えたところを復習しましょう！";
                }
                flag = 1;
            }
        },1000);
    }
});
