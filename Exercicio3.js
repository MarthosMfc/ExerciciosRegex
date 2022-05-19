/*
Nos sites de notícias, é comum encontrarmos páginas com uma lista de links para as notícias publicadas, como por exemplo, a seção sobre política ou sobre esportes. Chamamos essas páginas de editorias.

Seu segundo exercício será composto por duas partes.

Na primeira, mais simples, você deve identificar o padrão de urls de editorias e notícias de um determinado site e escrever um (ou mais) regex para cada tipo que encontrar. Obs.: no mínimo um para cada tipo.

Na segunda parte, você deve escrever regex para encontrar o título, a data de publicação e o texto das notícias desse mesmo site.

O site que deve utilizar é o https://g1.globo.com/ para a realização do seu exercício.
*/

const texto = `
https://g1.globo.com/economia/agronegocios/
https://g1.globo.com/ciencia/
https://g1.globo.com/educacao/
`
console.log(texto.match(/(https:\/\/)(\w+)\.?(\w+)\.\/?(\w+)\/?(\w+)\/?(\w+)\/?\-?\w+/g))



//noticia 1

const texto1 = `
<h1 class="content-head__title" itemprop="headline">Como a geada pode afetar a produção agrícola e quais alimentos podem ficar mais caros</h1>
<h2 class="content-head__subtitle" itemprop="alternativeHeadline"> Hortaliças, cana-de-açúcar e banana são os cultivos que mais sofrem com geadas por serem sensíveis às temperaturas baixas, segundo pesquisadores. Tomate, que já é 'vilão' da inflação, também pode ser afetado.</h2>
<time itemprop="datePublished" datetime="2022-05-17T17:19:29.871Z"> 17/05/2022 14h19 </time>
`
console.log(texto1.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto1.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto1.match(/<time [^>]*?>(.*?)<\/time>/gm))

//noticia 2

const texto2 = `
<h1 class="content-head__title" itemprop="headline">Vida em Marte? Sonda Perseverance da Nasa inicia busca inédita por sinais</h1>
<h2 class="content-head__subtitle" itemprop="alternativeHeadline">A sonda Perseverance da Nasa atingiu um momento importante de sua missão em Marte. Nesta terça-feira (17/5), o robô de seis rodas começará a escalar um antigo delta na cratera onde pousou.</h2>
<time itemprop="datePublished" datetime="2022-05-17T12:48:34.216Z"> 17/05/2022 09h48 </time>
`
console.log(texto2.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto2.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto2.match(/<time [^>]*?>(.*?)<\/time>/gm))



//noticia 3
const texto3 = `
<h1 class="content-head__title" itemprop="headline">Unicamp 2023: prazo para pedir isenção na taxa do vestibular começa nesta segunda; veja regras</h1>
<h2 class="content-head__subtitle" itemprop="alternativeHeadline">Candidatos podem solicitar gratuidade para comissão organizadora até 7 de junho. Nesta edição, quem não for contemplado paga R$ 192; inscrições ficam disponíveis entre agosto e setembro.</h2>
<time itemprop="datePublished" datetime="2022-05-16T10:35:26.719Z"> 16/05/2022 07h35 </time>
`
console.log(texto3.match(/<h1 [^>]*?>(.*?)<\/h1>/gm))
console.log(texto3.match(/<h2 [^>]*?>(.*?)<\/h2>/gm))
console.log(texto3.match(/<time [^>]*?>(.*?)<\/time>/gm))