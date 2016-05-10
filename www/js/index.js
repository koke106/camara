/*      var app = {

          initialize: function() {
              this.bindEvents();
          },
         
          bindEvents: function() {
              var takePhoto = document.getElementById('takePhoto');
              takePhoto.addEventListener('click', app.takePhoto, false);
              var sendPhoto = document.getElementById('sendPhoto');
              sendPhoto.addEventListener('click', app.sendPhoto, false);
          },

          sendPhoto: function() {
            var formData = new FormData($("#photo"));
            $.ajax({
                url: "http://www.alu-ftth.com/appMovil/subeFoto.php",
                type: "POST",
                data: formData,
                contentType: false,
                processData: false,
                success: function(datos)
                {
                    alert("segunda"+datos);
                    $("#respuesta").html(datos);
                }
            });            
            /*var control = 0;


            var photo = document.getElementById('photo');
            photo.src = "data:image/jpeg;base64," + imageData;
            var imagen = photo.src;
            alert(imagen);

            $.post( "http://www.alu-ftth.com/appMovil/subeFoto.php", {img: imagen} )
              .done(function( data ) {
                alert('devuelve: ' + data); 
                control = 1;
            });
              
            alert('me voy con el control a ' + control);
            if (control == 1){
              $.post( "http://www.alu-ftth.com/appMovil/cargaFoto.php", { id: "1" })
              .done(function( data ) {
                console.log('devuelve: ' + data); 
                 alert('Cargada Imagen');
                 control = 1;
              });
            }
          },

          takePhoto: function(){
              navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
                  allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });
          },

          onPhotoDataSuccess: function(imageData) {
         
            var photo = document.getElementById('photo');

            photo.style.display = 'block';

            photo.src = "data:image/jpeg;base64," + imageData;

            $.post( "http://www.alu-ftth.com/appMovil/subeFoto.php", {img: imageData} )
              .done(function( data ) {
                alert('devuelve: ' + data); 
                control = 1;
            });

            var sendPhoto = document.getElementById('sendPhoto');
            takePhoto.style.display = 'none';
            sendPhoto.style.display = 'block';
            photo.style.display = 'block';
            
          },

          onFail: function(message) {
            alert('Failed because: ' + message);
          }

      };*/
      var app = {
        initialize: function() {
              //this.bindEvents();
              var phoneName = window.device.name;
              var phoneName = device.name;
              alert("nomnbreTlf "+phoneName);
          }
      }