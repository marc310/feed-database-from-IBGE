
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
const geo = "http://www.geonames.org/childrenJSON?geonameId=3469034"
// const indexStateID = 39999;
// const indexCityID = 792999;
const S = ', '

const estadoInsert = 'INSERT INTO `state` (`idstate`, `sta_name`, `sta_slug`, `country_code`, `active`) VALUES'



function get_estados(){

    url = apiUrl;

    fetch(url).then(function(response) {
        return response.json();
      }).then(function(data) {
        //   console.log(data);
        //   var obj = JSON.parse(data);
        //   console.log(obj);

        console.log('Listando ' + data.length + ' Estados Brasileiros');
        
        var line = 0;
        var content = ''

        content += estadoInsert

        // console.log(estadoInsert)

        for(line; line < data.length; line++){
            // console.log(data[line].id)

            var id = data[line].id;
            var sg = data[line].sigla;
            var n = data[line].nome;

            // formata para inserir string com ''
            nome = "'" + n + "'"
            sigla = "'" + sg + "'"

            // console.log('ID: ' + id + ' Estado: ' + nome + ' Sigla: ' + sigla )
            // estado sql format fields
            // idstate	sta_name	country_code	active	modified	date_created
            // use 1 for country_code && 1 for active
            b = line + 1 < data.length ? ',' : ';'

            fieldLine = '(' + id + S + nome + S + sigla + S + 1 + S + 1 + ')' + b

            // console.log(fieldLine)

            content += fieldLine + '\n';
        }
        escreverArquivo(content)
        console.log(content)

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


function escreverArquivo(content) { 
    // writeFile function is defined. 
    // Fire off the request to /form.php
    conteudo = String(content);
    script_write = "./helpers/write.php";

        $.ajax({
        type: 'POST',
        url: script_write,
        data: {conteudo:conteudo},
            success: function(result) {
                console.log('the data was successfully sent to the server');
            }
        });
}