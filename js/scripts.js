
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"


function escreverArquivo(content) { 
    // writeFile function is defined. 
    // Fire off the request to /form.php
    conteudo = String(content);
        $.ajax({
        type: 'POST',
        url: "write.php",
        data: {conteudo:conteudo},
            success: function(result) {
                console.log('the data was successfully sent to the server');
            }
        });
}

function get_estados(){

    url = apiUrl;

    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function() {
        console.log("Booo");
});

    // $.get("./helpers/estados.php", function(data){
    //     // alert("Data: " + data + "\nStatus: " + status);
    //     var obj = JSON.parse(data);

    //     console.log('Listando ' + obj.length + ' Estados Brasileiros');
        
    //     // var indexStateID = 469995;
    //     // var indexCityID = 782485;
    //     var line = 0;

    //     for(line; line < obj.length; line++){
    //         // console.log(obj[line].id)

    //         var id = obj[line].id;
    //         var sigla = obj[line].sigla;
    //         var nome = obj[line].nome;

    //         console.log('ID: ' + id + ' Estado: ' + nome + ' Sigla: ' + sigla )
    //     }

    //   });
}


function get_cidades(id){

    // id = '33'
    url = apiUrl + id + "/municipios";

    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log(data);
      }).catch(function() {
        console.log("Booo");
    });


    // httpGet(url);
    // $.get("./helpers/cidades.php", function(data){
    //     // alert("Data: " + data + "\nStatus: " + status);
    //     var obj = JSON.parse(data);

    //     console.log('Listando ' + obj.length + ' Cidades do Rio');
        
    //     // var indexStateID = 469995;
    //     // var indexCityID = 782485;
    //     var line = 0;

    //     for(line; line < obj.length; line++){
    //         // console.log(obj[line].id)

    //         var id = obj[line].id;
    //         var nome = obj[line].nome;

    //         console.log('ID: ' + id + ' Cidade: ' + nome )
    //     }

    //   });
}

// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

// function read_by_lines(data){

//     var file = data[0];

//     var reader = new FileReader();
//     reader.onload = function(progressEvent){
//     // Entire file
//     // console.log(this.result);

//     // By lines
//     var lines = this.result.split('\n');
//         for(var line = 0; line < lines.length; line++){
//             str = lines[line];
//             $val = str.split(",", 5);
//             retorno = String($val) + '),';
//             // console.log(retorno);
//             conteudo += retorno + '\n';
//         }
//         console.log(conteudo);
//         escreverArquivo(conteudo);
//     };
//     // conteudo = reader.readAsText(file);
//     reader.readAsText(file);

// }