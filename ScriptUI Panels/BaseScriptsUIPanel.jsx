/*
    Base ScriptUI Panel v.0.1
    
    by Jorge Vásquez Pérez

    Changes 0.2:
        - None

*/

(function createNullsFromPaths (thisObj) {
    /* Build UI */
    function buildUI(thisObj) {

        var windowTitle = "windowTitle";
        var firstButton = "firstButton";
        var secondButton = "secondButton";
        var thirdButton = "thirdButton";
        var win = (thisObj instanceof Panel)? thisObj : new Window('palette', windowTitle);
            win.spacing = 0;
            win.margins = 4;
            var myButtonGroup = win.add ("group");
                myButtonGroup.spacing = 4;
                myButtonGroup.margins = 0;
                myButtonGroup.orientation = "row";
                win.button1 = myButtonGroup.add ("button", undefined, firstButton);
                win.button2 = myButtonGroup.add ("button", undefined, secondButton);
                win.button3 = myButtonGroup.add ("button", undefined, thirdButton);
                myButtonGroup.alignment = "center";
                myButtonGroup.alignChildren = "center";

            win.button1.onClick = function(){
                win.button1Click();
            }
            win.button2.onClick = function(){
                win.button2Click();
            }
            win.button3.onClick = function(){
                win.button3Click();
            }

        win.layout.layout(true);

        return win
    }


    // Show the Panel
    var w = buildUI(thisObj);
    if (w.toString() == "[object Panel]") {
        w;
    } else {
        w.show();
    }


    /* General functions */

    /* Project Specific functions */
    w.button1Click = function(){
        alert( w.button1.text + "was clicked"); //reference panel stuff
    }
    w.button2Click =function(){
        alert( w.button2.text + "was clicked");
    }
    w.button3Click = function(){
        alert( w.button3.text + "was clicked");
    }


})(this);
