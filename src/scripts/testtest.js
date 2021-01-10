/* jshint esversion: 6, asi: true, laxbreak: true*/
// #ifdef DEBUG
var Testtest =
// #endif
(()=>{

    /**
     * @class Testtest
     * @classdesc テストテスト
     * @extends {pc.ScriptType}
     * @property {number} num 数値
     * @property {object} a オブジェクト
     * @property {number} a.num オブジェクト数値
     */
    class Testtest extends pc.ScriptType{

        [Symbol()](){ 
            /** 
             * 数値 (PlayCanvas Attributes)
             * @type {number} 
             * @ignore
             * @example 
             * // 変更イベント購読
             * this.on( 'attr', ( name, value, valueOld ) =>{
             *     console.log(name + ' been changed from ' + valueOld + ' to ' + value);
             * } )
             * this.on( 'attr:num', ( value, valueOld ) =>{
             *     console.log('num been changed from ' + valueOld + ' to ' + value);
             * } )
             */    
            this.num = this.num;
            /** 
             * カウンタ
             * @type {number} 
             * @ignore
             */    
            this.count = this.count;
        }

        /**
         * PlayCanvas initialize method
         * @memberof Testtest
         */
        initialize(){
            this.num = 1000;
            console.log('initialize');
            console.log( this.entity.script.has( Testtest ) );
            console.log( this.entity.script.get( Testtest ).constructor.name );
        }

        /**
         * PlayCanvas update method
         * @param {number} dt
         * @memberof Testtest
         */
        update(dt){
            console.log( `${this.constructor.name} ${this.num + this.count}` );
        }

        /**
         * PlayCanvas swap method
         * @param {Testtest=} old
         */
        swap( old ){
            console.log( 'swap' );
            this.count = (old.count || 0|0);
            this.count++;
        }

    }

    pc.registerScript( Testtest, 'testtest' );

    Testtest.attributes.add( 'num', { type: 'number', default: 100 } );

    // #ifdef DEBUG
    return Testtest;
    // #endif
})();
