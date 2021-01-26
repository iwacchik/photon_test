/* jshint esversion: 6, eqnull: true */

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
    const hasInitialize = !!base.prototype.initialize;
    class Disposable extends base {
        initialize() { 
            if( hasInitialize )super.initialize();
            this.on( 'destroy', () => this.dispose.call( this ) );
            console.log("dispose initialize");
        }
        dispose() {
            console.log( "dispose default method" );
        }
    }
    return Disposable;
}

/**
 *
 * @param {number} count
 * @param {typeof pc.ScriptType} [base=pc.ScriptType]
 * @return {typeof pc.ScriptType} 
 */
function mixinDestroy(count, base = pc.ScriptType) {
    let _count = 0;
    const _maxCount = count;
    const hasUpdate = !!base.prototype.update;
    class Destroy extends base {
        /**
         * @param {number} dt
         */
        update( dt ){
            if( hasUpdate )super.update( dt );
            if( _count++ >= _maxCount ){
                this.entity.destroy();
            }          
        }
    }
    return Destroy;
}