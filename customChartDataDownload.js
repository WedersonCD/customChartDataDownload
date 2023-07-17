define([
    'jquery',
    './properties',
    'qlik'
    
],function ($, props, qlik) {
    'use strict'
        return {
            definition: props,
            paint: function($element, layout){
                const mainDiv=document.createElement('div')
                mainDiv.id='minha-tabela';
                mainDiv.style.width='1920px';
                mainDiv.style.height='1080px';

                $element.append(mainDiv)
                
            }
        }


})