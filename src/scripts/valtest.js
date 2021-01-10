/* jshint esversion: 10, asi: true, laxbreak: true*/

/** 
 * @param {string} newTitle
 * @return {string} string
 */
function test (newTitle){
    console.log(newTitle)
    return "string";
}


var num;

num = test;


/** 
 * @type {Function} 
 * @returns {string} string
 * すごい数値 */


num = num( "" );


// const test = async () => {  }
// test();


/**
 * @typedef {Object} Props
 * @property {string} name 名前
 * @property {number?=} version バージョン
 */
/**
 * @type {Props}
 */
const test3 = { name: "test"};

/**
 * @class Valtest
 * @classdesc ヴァルテスト
 * 
 * @property {string} name
 * @property {number} version
 */
class Valtest {
    
    [Symbol()](){
        /** @type {string} */
        this.name = this.name;
        /** @type {number} */
        this.version = this.version;
    }


    /**
     * Creates an instance of Valtest.
     * @param {Props} prop
     * @memberof Valtest
     */
    constructor( prop ){  
        this.name = prop.name;
        this.version = prop.version || 0;
    }


    /**
     * セットアップ
     * @return {void}
     * @memberof Valtest
     */
    setup(){

    }

}



/** 
 * @namespace
 */
var util = {};

/** 
 * @namespace aaa
 * @memberof util
 */
util.aaa = {};

/**
 * テスト
 * @memberof aaa
 * @param {string} name
 * @return {void}
 */
util.aaa.test = ( name ) => { console.log( name ); }

util.aaa.test( "" );