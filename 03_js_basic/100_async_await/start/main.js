// 非同期処理（Promise）
let a = 0;

init();

async function init(){
   const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a)
    }, 2000);
// }).catch((c) => {
//     console.log('catchが実行', c)
})
 console.log(result);

}



