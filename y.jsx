
function getSelectedProjectItems(){
    var items = [];
    var p = app.project;
    for ( var i = 1 ; i <= p.numItems ; i ++ ){
        var item = p.item(i);
        if ( item.selected ){
            items.push(item);
        }
    }
    return items;
}
function selectLayersByParented( isParented ){
    layersToSelect = getLayersByParented( isParented );
    for ( var i = 0; i < layersToSelect.length; i ++ ){
        layerToSelect = layersToSelect[i];
        layerToSelect.selected = true;
    }
}
function getLayersByParented( isParented ){
    var active_comp = app.project.activeItem;
    var filtered_layers = [];

    for ( var i = 1; i <= active_comp.layers.length ; i ++ )
    {
        var my_layer = active_comp.layers[i];

        if ( (my_layer.parent == null) != isParented )
        {
            filtered_layers.push( my_layer );
        };
    }
    
    return filtered_layers 
}
function centerLayer( my_layer , size ){
    my_layer.position[0] = size[0]/2;
    my_layer.position[1] = size[1]/2;
    alert(my_layer.position);
}
function resizeCompCanvas( comp, new_size ){
    comp.width = new_size[0];
    comp.height = new_size[1];
};
function setFPS( comp, newFPS ){
    comp.frameDuration = 1/newFPS;
};
function setDuration( myComp, newSecondsDuration ){
    
};
function setDurationInFrames( myComp, newFrameDuration ){
    //myComp.
};
function resizeCompCanvasCentered( my_comp, new_size, keep_scaler ){
    app.beginUndoGroup("Resize Comp Canvas Centered")
    var n  = my_comp.layers.addNull();
    
    //center null on actual comp size
    n.position.setValue([my_comp.width/2,my_comp.height/2]);
    resizeCompCanvas( my_comp , new_size );
    
    //parent unparented layers to MAIN_SCALER
    var unparenterLayers = getLayersByParented( false );
    for ( var i = 0; i < unparenterLayers.length ; i ++ ){
        var current_layer = unparenterLayers[i];
        
        if ( (current_layer != n) && ( true )) {
            current_layer.parent = n;
        }
    }
    
    // center null to new comp size
    n.position.setValue(new_size/2);
   
   //get rid of scaling null or not.
    if (keep_scaler)
    {
        n.name = 'MAIN_SCALER';
    }else{
        n.remove()
    }
    app.endUndoGroup();
}