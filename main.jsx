#include "y.jsx";
my_comps = getSelectedProjectItems();
var my_comp = getSelectedProjectItems()[0];

// new_size = [ 240,320 ];
//new_size = [ 4096, 2048 ];



//setFPS( my_comp, 24 );

for ( var i = 0 ; i < my_comps.length ; i++ ){
    var my_comp = my_comps[i];
    setFPS( my_comp, 24 );
}

//selectLayersByParented( false );

//resizeCompCanvasCentered( my_comp, new_size, true )
//alert(system.callSystem("whoami"))