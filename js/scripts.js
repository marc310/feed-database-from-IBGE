
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
const S = ', '

const estadoInsert = 'INSERT INTO `state` (`idstate`, `sta_name`, `sta_slug`, `country_code`, `active`) VALUES'
const cityInsert = 'INSERT INTO `city` (`idcity`, `state_code`, `cit_name`, `cit_native`, `cit_slug`, `country_code`) VALUES'


async function get_region_data(){

    url = apiUrl;

    fetch(url).then(function(response) {
        return response.json();
      }).then(async function(data) {

        console.log('Listando ' + data.length + ' Estados Brasileiros');
        
        var line = 0;
        var content = ''
        var cities = ''

        
        // console.log(estadoInsert)
        
        for(line; line < data.length; line++){
            // console.log(data[line].id)
            content += estadoInsert + '\n'
            
            var id = data[line].id;
            var sg = data[line].sigla;
            var n = data[line].nome;

            // formata para inserir string com ''
            nome = '"' + n + '"'
            sigla = '"' + sg + '"'

            b = ';'

            fieldLine = '(' + id + S + nome + S + sigla + S + 1 + S + 1 + ')' + b
            content += fieldLine + '\n';

            // console.log(fieldLine)
            // fetch citys data
            // pega cidades pelo id do estado, e espera o resultado antes de prosseguir
            let cidades = await fetch(apiUrl + id + "/municipios")
            let res = await cidades.json()

            // console.log(res.length)
            // console.log(res)

            if (res.length > 1){
                // console.log(res.length)
                let line = 0
                content += cityInsert + '\n'

                for(line; line < res.length; line++){
                    var idEstado = res[line].microrregiao.mesorregiao.UF.id
                    var id = res[line].id;
                    var sg = res[line].sigla;
                    var nome = res[line].nome;
                    
                    b = line + 1 < res.length ? ',' : ';'
                    cityLine = '(' + id + S + idEstado + S + '"'+nome+'"' + S + 'NULL' + S + '"'+nome.toLowerCase()+'"' + S + 1 + ')' + b
                    content += cityLine + '\n';
                }
                // end for city
            }  
        }
        await escreverArquivo(content)
        // console.log(content)

      }).catch(function() {
        console.log("Booo");
});
}

async function escreverArquivo(content) { 
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