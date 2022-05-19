/*1 Nos sites de notícias, é comum encontrarmos páginas com uma lista de links para as notícias publicadas, como por exemplo, a seção sobre política ou sobre esportes. Chamamos essas páginas de editorias.

Seu segundo exercício será composto por duas partes.

Na primeira, mais simples, você deve identificar o padrão de urls de editorias e notícias de um determinado site e escrever um (ou mais) regex para cada tipo que encontrar. Obs.: no mínimo um para cada tipo.

Na segunda parte, você deve escrever regex para encontrar o título, a data de publicação e o texto das notícias desse mesmo site.

O site que deve utilizar é o https://tecnoblog.net/ para a realização do seu exercício. */

const texto = `
-https://tecnoblog.net/sobre/sony/playstation-4/
-https://tecnoblog.net/sobre/microsoft/xbox-one/
-https://tecnoblog.net/sobre/apple/
`
console.log(texto.match(/(https:\/\/)(\w+)\.?(\w+)\/?(\w+)\/?(\w+)\/?(\w+)\/?\-?\w+/g))

//noticia 1

const texto1 = `
<h1 class="flipboard-title title" itemprop="headline">Os melhores jogos da semana até R$ 50 para PlayStation, Xbox, Switch e PC</h1>
<h2 class="flipboard-subtitle olho" itemprop="alternativeHeadline">Persona 5, Batman: Arkham Collection, Wolfstride e Prey são excelentes jogos que estão custando menos de R$ 50 nesta semana e que você precisa conhecer</h2>
<time datetime="2022-05-13T13:00:00+00:00">13/05/2022 às 10:00</time>
`
console.log(texto1.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto1.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto1.match(/<time [^>]*?>(.*?)<\/time>/gm))

//noticia 2

const texto2 = `
<h1 class="flipboard-title title" itemprop="headline">Xbox One chega ao fim: Microsoft cancelou a fabricação da linha de consoles</h1>
<h2 class="flipboard-subtitle olho" itemprop="alternativeHeadline">Nenhum Xbox One é fabricado mais desde o final de 2020, mas a Microsoft não havia informado ninguém sobre isso até agora...</h2>
<time datetime="2022-01-13T13:37:54+00:00">13/01/2022 às 10:37</time>
`

console.log(texto2.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto2.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto2.match(/<time [^>]*?>(.*?)<\/time>/gm))



//noticia 3
const texto3 = `
<h1 class="flipboard-title title" itemprop="headline">Apple “alerta” funcionários sobre consequências de se unir a sindicatos</h1>
<h2 class="flipboard-subtitle olho" itemprop="alternativeHeadline">Gerentes de várias lojas da Apple nos EUA foram orientados a comunicar funcionários sobre os "riscos" de se unir a sindicatos</h2>
<time datetime="2022-05-13T18:21:11+00:00">13/05/2022 às 15:21</time>
`

console.log(texto3.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto3.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto3.match(/<time [^>]*?>(.*?)<\/time>/gm))