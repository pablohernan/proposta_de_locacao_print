/* global PipefyApp, emojis */
console.log('not load');
document.addEventListener("DOMContentLoaded", function(event) {

    console.log('##START##');
    var Promise = PipefyApp.Promise;
    console.log('##create card##');
    PipefyApp.initCall({    

        'card-buttons': function(p, pipe) {
          return [
            {
              icon: 'pp-ico-print',
              text: 'Imprimir - Proposta de Locação',
              callback: function(p) {

                  p.modal({
                    url: './popup.html',
                    height: '90%',
                    width: '90%',
                  });

              },
            }
          ]
        }

    });

});