/*jshint esversion: 8, asi: true, laxbreak: true*/

(() => {

    class Test extends mixinDisposable(pc.ScriptType) {
        [Symbol()] () {
            this.name = this.name || ( null && '' )
            this.x = this.x || ( null && 0|0 )
        }
        initialize () {
            super.initialize()
            console.log( `${this.name} Test initialize` )
            
            console.log( Exitgames.Common.Logger.Level )
        }
        update ( dt ) {
            
            this.count = this.count || 0;
            
            console.log( this.count )
            if( this.count++ > 100 ){
                this.entity.destroy();
            }
        }
        dispose () {
            console.log( `${this.name} Test dispose` )            
        }
    }

    pc.registerScript(Test)
    
    Test.attributes.add( 'name', {
        type: 'string'
    } )
    
    Test.attributes.add( 'x', {
        type: 'number'
    } )
    
    
})()
