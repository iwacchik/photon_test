/* jshint esversion: 6, eqnull: true */
// #ifdef DEBUG
var Bullet =
// #endif
 
class Bullet extends pc.ScriptType {
    initialize(){
        //tankの情報を取得
        var tank = this.app.root.findByName("Tank_base");
        //Tank_baseを探してlookAtForをthis.lookatforに代入する
        this.lookatfor = tank.lookAtFor;
        
        //タンクの座標を取得
        var tankPosition = tank.getLocalPosition();
        this.entity.setLocalPosition(tankPosition.x,tankPosition.y+0.5,tankPosition.z);//bulの位置をタンクの座標に合わせる

    }
    update( dt ){
        //向いている方向に飛ばす
        this.entity.translate(this.lookatfor);
    }
    swap( old ){

    }
}

pc.registerScript( Bullet );
