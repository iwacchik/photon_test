/* jshint esversion: 6, asi: true, laxbreak: true*/

/**
 * ファイナライズインターフェース
 * need super.initialize()
 * @param {typeof pc.ScriptType} [base=pc.ScriptType] 継承元
 * @return {typeof pc.ScriptType}
 * @example
 * class Sample extends mixinDisposable(){
 *     initialize(){
 *         //必須
 *         super.initialize();
 *     }
 *     dispose(){
 *         //解放処理など
 *         //Release processing etc...
 *     }
 * }
 */
function mixinDisposable(base = pc.ScriptType) {
    class Disposable extends base {
        initialize() { 
            this.on( 'destroy', () => this.dispose.call( this ) )
            console.log("dispose initialize")
        }
        dispose() {
            console.log( "dispose default method" )
        }
    }
    return Disposable;
}