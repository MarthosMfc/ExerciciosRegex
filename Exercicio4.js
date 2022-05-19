/*Nos sites de notícias, é comum encontrarmos páginas com uma lista de links para as notícias publicadas, como por exemplo, a seção sobre política ou sobre esportes. Chamamos essas páginas de editorias.

Seu segundo exercício será composto por duas partes.

Na primeira, mais simples, você deve identificar o padrão de urls de editorias e notícias de um determinado site e escrever um (ou mais) regex para cada tipo que encontrar. Obs.: no mínimo um para cada tipo.

Na segunda parte, você deve escrever regex para encontrar o título, a data de publicação e o texto das notícias desse mesmo site.

O site que deve utilizar é o https://www.r7.com/ para a realização do seu exercício.*/

const texto = `
https://esportes.r7.com/
https://noticias.r7.com/eleicoes-2022
https://noticias.r7.com/internacional/russia-x-ucrania
`
console.log(texto.match(/(https:\/\/)+(\w+)\.(\w+)\.(\w+)\/(\w+)?\/?\-?(\w+)?\-?(\w+)?\-?(\w+)?/g))

//noticia 1
const texto1 = `
<h1 class="toolkit-title">Jogadores estão mais expostos às ameaças e à violência no futebol</h1>
<h2 class="toolkit-subtitle mt-5">Último episódio foi envolvendo Jorge, do Palmeiras. Caso de Danilo Fernandes, atingido por estilhaços de vidro após uma bomba ser jogada no ônibus do Bahia, também marcou a atual temporada</h2>
<time datetime="2022-05-18T06:00:00-03:00" class="toolkit-signature__publication-time">18/05/2022 - 06h00<span class="toolkit-signature__publication-update">(Atualizado em 18/05/2022 - 08h47)</span></time>
`
console.log(texto1.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto1.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto1.match(/<time [^>]*?>(.*?)<\/time>/gm))

//noticia 2
const texto2 = `
<h1 class="toolkit-title">'Governo não tem interesse em atacar o sistema eleitoral', diz ministro Luiz Eduardo Ramos<br></h1>
<h2 class="toolkit-subtitle mt-5">Titular da Secretaria-Geral da Presidência garante que o Executivo federal não quer interferir nas eleições de outubro<br></h2>
<time datetime="2022-05-17T19:53:00-03:00" class="toolkit-signature__publication-time">17/05/2022 - 19h53 <span class="toolkit-signature__publication-update">(Atualizado em 17/05/2022 - 20h54)</span></time>
`
console.log(texto2.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto2.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto2.match(/<time [^>]*?>(.*?)<\/time>/gm))

//noticia 3
const texto3 = `
<h1 class="toolkit-title">Rússia anuncia a expulsão de diplomatas espanhóis, franceses e italianos </h1>
<h2 class="toolkit-subtitle mt-5">No total, 85 representantes europeus terão que deixar o país; Moscou foi alvo de vária sanções desde o início da guerra</h2>
<time datetime="2022-05-18T10:32:00-03:00" class="toolkit-signature__publication-time">18/05/2022 - 10h32<span class="toolkit-signature__publication-update">(Atualizado em 18/05/2022 - 10h32)</span></time>
`
console.log(texto3.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto3.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto3.match(/<time [^>]*?>(.*?)<\/time>/gm))

