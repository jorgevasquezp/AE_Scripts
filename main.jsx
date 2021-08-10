#include "y.jsx";

function compareComps( compA, compB, precision ){
    // 0 = basic , 1 = advanced , 2 = certain
    var result = false;
    if ( precision == 0){
            propList = ["name","width","height","frameDuration","numLayers"];
            alert(propList);
        }
    for ( property in compA ){
        
        for ( var i = 0 ; i < propList.length ; i++ ){
            if ( property == propList[i] ){
                //alert( property + String(compA[property]) + "/" + String(compB[property]) + " : " + ( compA[property] == compB[property]) );
                if ( compA[property] == compB[property] ){
                    result = true;
                }else{
                    result = false;
                    return result;
                }
                
            }
        }
        
    }
    return result
}
function isSourceOneOfThese( layer , sourcesArray){
    for ( var p = 0 ; p < sourcesArray.length ; p++ ){
        if ( layer.source == sourcesArray[p] ){
            return true
        }
    }
    return false
}
function consolidateSelectedComps(){
    app.beginUndoGroup("Consolidate Selected Comps");
    //DANGER Comps might not be the same, they only have to be NAMED the same.
    var allCompItems = getAllProjectComps();
    var myItems = getSelectedProjectComps();
    // var allMyItems = []+myItems;
    var newSource = myItems.pop();

    for ( var i = 0 ; i < allCompItems.length ; i ++){
        var curComp = allCompItems[i];
        for ( var l = 1 ; l <= curComp.layers.length ; l ++){
            
            var curLayer = curComp.layers[l];
            //alert(newSource);
            //alert(myItems);

        if ( isSourceOneOfThese( curLayer , myItems )){
            if( curLayer.source != newSource ){
                curLayer.replaceSource(newSource,true);
                }
            }
        }
    }
    for ( var i = 0 ; i < myItems.length ; i ++){
        var myItem = myItems[i];
        myItem.remove();
    }
    app.endUndoGroup();
}

// var myItems = getSelectedProjectComps();
// var myLayer = app.project.activeItem.selectedLayers[0]
// alert(isSourceOneOfThese(myLayer, myItems))
//alert(compareComps( myItems[0], myItems[1], 0));

consolidateSelectedComps();

// a = app.project.items[1];
// b = app.project.items[2];
// // alert(a.frameDuration)
// // alert(b)
// var same = compareComps( a, b, 0 );
// alert(same);

// for ( property in a ){
//     alert( property );
// }


//my_comps = getSelectedProjectItems();
//var myLayers = app.project.activeItem.selectedLayers;
//var my_comp = getSelectedProjectItems()[0];

//zeroOutLayer(myLayers[0]);

//app.project.save();
//alert();

//resizeCompsCanvasCentered( [ 1080, 1080 ] , true ); //1x1
//resizeCompsCanvasCentered( [ 1080, 1350 ] , true ); //4x5
//resizeCompsCanvasCentered( [ 1080, 1920 ] , true );

//a="WTC2_1x1_TUNG_GLD_ROTO_Ghostface_02tl_03jvFIN"
//alert( insertAt( a,  "TXT", -12 ));

//insertAtSelectedItemsNames( "TXT", -12 ); // insert "TXT" into the 12th position from the end of all selected Items' names.
//insertAtSelectedItemsNames( "ROTO", -12 );
//insertAtSelectedItemsNames( "TXTLS", -12 );

//setFPS( my_comp, 24 );
//setCompsFPS( 12 );

//new_size = [ 4096, 2048 ];

//selectLayersByParented( false );

//resizeCompCanvasCentered( my_comp, new_size, true )

//alert(system.callSystem("whoami"))

//app.project.save()