/* jshint esversion: 6, eqnull: true */
// #ifdef DEBUG
var Shot =
// #endif

class Shot extends pc.ScriptType {
    [Symbol()](){
        
        this.bulletTemplate = this.bulletTemplate;

    }

    initialize(){

    }
    update(dt){
        if(this.app.keyboard.wasPressed(pc.KEY_SPACE)){
            //Spaceキーを押したら
            this.shot();
        }
    }
    swap(){


    }

    shot(){
        //弾を発射する
        console.log("shot!");

        //bullet のテンプレートからインスタンスを作成
        var instance = this.bulletTemplate.resource.instantiate();
        //rootの子に加える
        this.app.root.addChild(instance);
    }

}

pc.registerScript( Shot );

Shot.attributes.add("bulletTemplate",{type:"asset",assetType: 'template'});