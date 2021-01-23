<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alimentador de Estados e Cidades do Brasil</title>
    
    <link rel="stylesheet" href="css/style.css">
    
</head>
<body>

    <!-- <input type="file" id="file" > -->

    <h1>Retorna Dados do IBGE</h1>

    <div class="mb-5 mt-5">
        <button id="estados">get estados</button>
        <button id="cidades">get cidades</button>
    </div>


</body>
</html>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/scripts.js"></script>

<script>
    estados = document.getElementById('estados');
    cidades = document.getElementById('cidades');

    estados.addEventListener("click", function(){ 
        // alert("Hello World!"); 
        get_estados();
    });

    cidades.addEventListener("click", function(){ 
        // alert("Hello World!"); 
        get_cidades();
    });
</script>




<script>

   // le arquivo com as variaveis
//    var conteudo = '';
   
//    document.getElementById('file').onchange = function(){

//     var file = this.files[0];

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
//     // debugger
// };



</script>