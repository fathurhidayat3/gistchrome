chrome.browserAction.onClicked.addListener(function(tab) {
    alert("adasd");
});

var fuser = document.getElementById("fuser");
var fname = document.getElementById("fpass");
var fname = document.getElementById("fname");
var fdesc = document.getElementById("fdesc");
var fcontent = document.getElementById("fcontent");
var fbutton = document.getElementById("fbutton");

fuser.focus();

fbutton.addEventListener("click", function pindah() {
    $.ajax({
        url: 'https://api.github.com/gists',
        type: 'POST',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(fuser.value + ":" + fpass.value));
        },
        data: '{"description": ' + "\"" + fdesc.value + "\"" + ', "public": true, "files": {' +
            "\"" + fname.value + "\"" + ': {"content": ' + "\"" + fcontent.value + "\"" + '}}}'

    }).done(function(response) {
        $("#fresult").html("<label>Your Gist is Here : </label><div>" + response.html_url + "</div>");
    });
});

var fhelp = document.getElementById("fhelp");

fhelp.addEventListener("click", function helper() {
    alert(
"GistChrome allow you to create gist using chrome extension. \
Fill the form depend on each input type and click add to generate your gist and link can be used as snippet. \
For this version provide paste code feature to textarea."
        );
});