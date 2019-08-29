'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const n = Math.floor(Math.random() * 16);
        // btn.textContent = n;  //クリックするとテキストがhit!に変形

        switch (n){
            case 0:
                btn.textContent = '満身創痍';
                break;
            case 1:
                btn.textContent = '百花繚乱';
                break;
            case 2:
                btn.textContent = '泰然自若';
                break;
            case 3:
                btn.textContent = '捲土重来';
                break;
            case 4:
                btn.textContent = '乾坤一擲';
                break;
            case 5:
                btn.textContent = '慇懃無礼';
                break;
            case 7:
                btn.textContent = '晴耕雨読';
                break;
            case 8:
                btn.textContent = '面従腹背';
                break;
            case 9:
                btn.textContent = '不撓不屈';
                break;
            case 10:
                btn.textContent = '率先垂範';
                break;
            case 11:
                btn.textContent = '呉越同舟';
                break;
            case 12:
                btn.textContent = '公明正大';
                break;
            case 13:
                btn.textContent = '唯々諾々';
                break;
            case 14:
                btn.textContent = '侃侃諤諤';
                break;
            case 15:
                btn.textContent = '艱難辛苦';
                break;
            case 16:
                btn.textContent = '喜色満面';
                break;
        }
    });
}