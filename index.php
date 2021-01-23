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
<hr/>
    <div class="mb-5 mt-5">
    <h2>Sample Data:</h2>
    <h3>O Script: deve retornar dados no formato SQL</h3>

    <h5>Country: </h5>
    <div class="mb-5">
        <p>
            <span>INSERT INTO `country` (`idcountry`, `phone_code`, `cou_native_name`, `cou_name`, `cou_currency`, `modified`, `date_created`) VALUES</span><br>
            <span>(3, '+1', 'Canadian', 'Canada', 2, '2020-12-28 15:55:13', '2020-12-28 15:55:13');</span>
        </p>
    </div>

    <h5>Estados: </h5>
    <div class="mb-5">
        <p>
            <span>INSERT INTO `state` (`idstate`, `country_code`, `sta_name`, `active`) VALUES</span><br>
            <span>(1000866, 3, 'Ontario', 1),</span>
        </p>
    </div>

    <h5>Cidades: </h5>
    <div class="mb-5">
        <p>
            <span>INSERT INTO `city` (`idcity`, `state_code`, `cit_name`, `cit_native`, `cit_slug`, `country_code`) VALUES</span><br>
            <span>(1016146, 1000875, 'Abbotsford', NULL, 'abbotsford', 3),</span>
        </p>
    </div>
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
        get_cidades(id);
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