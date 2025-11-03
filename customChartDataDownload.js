define([
    'jquery',
    './properties',
    'qlik'

], function ($, props, qlik) {

    function getBaseHTML(objectDivID, buttonId, iconClass, label) {

        //*
        var html = `
                <div style='height:100%;display: flex; flex-direction: column'>
                    <div style='flex:2'><button class='lui-button' id=${buttonId} type='button'> <span class='${iconClass}'></span> ${label} </button></div>
                    <div style='flex:8' id= '${objectDivID}'></div>
                </div>
            `;
        //*/

        return html

    }


    function setExportButtonAction(BUTTOM_ID, object, layout) {

        if (layout.settings.type == 'image') {

            document.getElementById(BUTTOM_ID).onclick = function () {
                object.exportImg({ height: layout.settings.image.height, width: layout.settings.image.width, format: 'png' }).then((link) => {
                    window.open(link)
                })
            }

        } else if (layout.settings.type == 'PDF') {
            document.getElementById(BUTTOM_ID).onclick = function () {
                const settings = {
                    objectSize:{height: layout.settings.image.height, width: layout.settings.image.width},
                    aspectRatio: 0,
                    orientation: "portrait" 
                };
                object.exportPdf(settings).then((link) => {

                    window.open(link)
                })
            }

        } else {
            document.getElementById(BUTTOM_ID).onclick = function () {
                object.exportData({ format: 'OOXML' }).then((link) => {
                    window.open(link)
                })
            }
        }


    }

    return {
        definition: props,
        paint: async function ($element, layout) {

            const MAIN_DIV_ID = 'Main_Div_' + layout.qInfo.qId
            const BUTTOM_ID = 'Button_' + layout.qInfo.qId

            const baseHTML = getBaseHTML(MAIN_DIV_ID, BUTTOM_ID, layout.settings.html.buttomClass, layout.settings.html.buttomLabel)
            $element.html(baseHTML)

            const APP = await qlik.currApp(this);
            const OBJ = await APP.visualization.get(layout.settings.object.id);

            setExportButtonAction(BUTTOM_ID, OBJ, layout)

        }
    }


})