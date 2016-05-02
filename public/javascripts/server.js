
    $(window).load(function () {
      var socket = io();
      console.log(socket);
      var user1txt='';
      var user2txt='';
      var token = "http%3a%2f%2fschemas.xmlsoap.org%2fws%2f2005%2f05%2fidentity%2fclaims%2fnameidentifier=9WdP3&http%3a%2f%2fschemas.microsoft.com%2faccesscontrolservice%2f2010%2f07%2fclaims%2fidentityprovider=https%3a%2f%2fdatamarket.accesscontrol.windows.net%2f&Audience=http%3a%2f%2fapi.microsofttranslator.com&ExpiresOn=1462218413&Issuer=https%3a%2f%2fdatamarket.accesscontrol.windows.net%2f&HMACSHA256=S8oAAlLJBBOtJjmHxg5ui9XjHLLbl4XMEPYk%2bsyawFs%3d" ;
      $('#btnAjaxTranslate').click(function (evt) {
        var inputText = $('#txtAjaxInput').val();
        user1txt = inputText;
        var authToken =token;
        var data = {
          appId: 'Bearer ' + authToken,
          from: $("#user1").val(),
          to: $("#user2").val(),
          contentType: 'text/plain',
          text: inputText
        };
        $.ajax({
          url: "http://api.microsofttranslator.com/V2/Ajax.svc/Translate",
          dataType: 'jsonp',
          data: data,
          jsonp: 'oncomplete'
        })
        .done(function (jqXHR, textStatus, errorThrown) {
          console.log('done', this, jqXHR, textStatus, errorThrown);
          console.log(user1txt);
           $('#txtAjaxOutput').append(user1txt+"hi");
           $('#txtAjaxOutput2').append($('#txtAjaxOutput').text(jqXHR));
            // $('#txtAjaxOutput').text(user1txt+"hi");
            // $('#txtAjaxOutput2').text($('#txtAjaxOutput').text(jqXHR));

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.log('fail', this, jqXHR, textStatus, errorThrown);
        });
      });

      $('#btnAjaxTranslate2').click(function (evt) {
        var inputText2 = $('#txtAjaxInput2').val();
        user2txt =inputText2;
        var authToken =token;
        var data = {
          appId: 'Bearer ' + authToken,
          from: $("#user2").val(),
          to: $("#user1").val(),
          contentType: 'text/plain',
          text: inputText2
        };
        $.ajax({
          url: "http://api.microsofttranslator.com/V2/Ajax.svc/Translate",
          dataType: 'jsonp',
          data: data,
          jsonp: 'oncomplete'
        })
        .done(function (jqXHR, textStatus, errorThrown) {
          console.log('done', this, jqXHR, textStatus, errorThrown);
           $('#txtAjaxOutput2').append(user2txt+"<br>");
           $('#txtAjaxOutput').append($('#txtAjaxOutput2').text(jqXHR));

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.log('fail', this, jqXHR, textStatus, errorThrown);
        });
      });

    });
