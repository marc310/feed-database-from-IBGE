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
        <button id="data_region">get Data</button>
        <!-- <button id="cidades">get cidades</button> -->
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
            <span>
            INSERT INTO `state` (`idstate`, `sta_name`, `sta_slug`, `country_code`, `active`) VALUES</span><br>
            <span>(1000866, 3, 'Ontario', 1),</span>
        </p>
    </div>

    <h5>Cidades: </h5>
    <div class="mb-5">
        <p>
        <blockquote>idcity	state_code	cit_name	cit_native	cit_slug	country_code	date_created	modified</blockquote>
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
    data_region = document.getElementById('data_region');

    data_region.addEventListener("click", function(){ 
        // alert("Hello World!"); 
        get_region_data();
    });
</script>