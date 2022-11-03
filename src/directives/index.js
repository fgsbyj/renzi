export const imgerr={
    inserted:function(dom,options){
        dom.onerror=function(){
            dom.src=options.value
        }
    }
}
// export const mytext={
//     inserted:function(dom,options){
//         dom.onerror=function(){
//             dom.src=options.value
//         }
//     }
// }