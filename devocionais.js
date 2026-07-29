// ═══════════════════════════════════════════════════════════════
// DEVOCIONAIS — Plano de Leitura 2026
//
// Arquivo separado de propósito: o index.html não precisa inflar
// toda vez que um devocional novo entra, e fica fácil abrir só
// este arquivo pra escrever/revisar conteúdo, sem mexer no app.
//
// Como funciona:
// - Chave: "Livro capítulo" — exatamente como aparece no plano
//   (ex.: "Gênesis 1", "1 Coríntios 13"). Sem isso bater certinho
//   com o nome do livro usado no app, o devocional não aparece.
// - Cada entrada tem `texto` (a reflexão) e `pergunta` (aplicação).
// - Capítulo sem devocional cadastrado não quebra nada — o app
//   mostra um aviso gentil de "em breve" sozinho.
//
// Carregado ANTES do script principal no index.html, então
// DEVOTIONALS já existe quando o app for usá-lo.
// ═══════════════════════════════════════════════════════════════

  // ── DEVOCIONAIS ──────────────────────────────────────────────
  // Chave: "Livro capítulo" (mesmo formato usado no guidedList).
  //
  // COBERTURA ATUAL:
  //   ✔ Gênesis 1-50 (livro completo)
  //   ✔ Mateus 1-7
  //   ✔ Salmos 1-4  |  ✔ Provérbios 1-3
  //
  // PRÓXIMOS (ordem de prioridade — o que o plano padrão abre
  // como PRIMEIRA leitura do dia, que é o que este card usa):
  //   Êxodo → Números → Deuteronômio → Josué → Juízes → Rute →
  //   1-2 Samuel → 1-2 Reis → Esdras → Neemias → Ester,
  //   e em paralelo o restante de Mateus, Marcos, Lucas, João, Atos.
  //
  // Capítulo sem devocional não quebra nada — o app mostra um
  // aviso gentil de "em breve" em vez de sumir ou dar erro.
  const DEVOTIONALS = {
    "Gênesis 1": {
      texto: "Antes de qualquer mandamento, antes de qualquer aliança, a Bíblia começa com Deus criando por puro querer. Não havia necessidade — havia amor transbordando em forma de luz, mar, céu e vida. E no fim de cada dia, o mesmo veredito: \"viu que era bom\". Você também nasceu de uma decisão boa, não de um acidente.",
      pergunta: "O que muda em mim quando lembro que fui criado(a) por escolha, não por acaso?"
    },
    "Gênesis 2": {
      texto: "Deus não apenas criou o ser humano — Ele o formou com as mãos, como um oleiro cuidadoso, e soprou nele o próprio fôlego. Depois, plantou um jardim e disse que não era bom o homem estar só. Desde o início, Deus se importa com proximidade, com companhia, com um lugar pra chamar de lar.",
      pergunta: "Onde eu tenho sentido a proximidade de Deus essa semana — e onde tenho sentido falta dela?"
    },
    "Gênesis 3": {
      texto: "A serpente não ofereceu um pecado óbvio — ofereceu uma dúvida sobre o caráter de Deus: \"será que Ele realmente quer o seu bem?\". É a mesma pergunta que ainda hoje tenta plantar raiz. Mas repare: mesmo depois da queda, Deus é quem vai atrás do homem escondido, chamando \"onde você está?\".",
      pergunta: "Que dúvida sobre a bondade de Deus tenho carregado sem perceber?"
    },
    "Gênesis 4": {
      texto: "Caim e Abel trazem ofertas diferentes, mas o texto é claro: o problema nunca foi só o sacrifício, foi o coração por trás dele. Deus alerta Caim antes da tragédia — o pecado está à porta, mas ainda pode ser dominado. A graça chega antes do julgamento, sempre.",
      pergunta: "Existe algum ressentimento crescendo em mim que eu ainda posso deter, antes que vire ação?"
    },
    "Gênesis 5": {
      texto: "Uma genealogia parece só uma lista de nomes e números — até você notar o refrão repetido: \"e morreu... e morreu... e morreu\". No meio dela, um nome quebra o padrão: Enoque, que \"andou com Deus\", e simplesmente não foi encontrado, porque Deus o levou. Uma vida diferente é possível mesmo em meio à rotina da mortalidade.",
      pergunta: "O que significaria, na prática, \"andar com Deus\" na minha rotina desta semana?"
    },
    "Gênesis 6": {
      texto: "Num mundo que Deus descreve como corrompido a ponto de arrepender-se de tê-lo criado, há uma frase que muda tudo: \"Noé, porém, achou graça aos olhos do Senhor\". Em meio ao julgamento generalizado, a graça encontra um homem disposto a andar de modo diferente — e o convida pra dentro da arca.",
      pergunta: "Em que áreas da minha vida tenho seguido a cultura ao redor em vez de andar com Deus?"
    },
    "Gênesis 7": {
      texto: "Repare no pequeno detalhe: foi o próprio Senhor quem fechou a porta da arca atrás de Noé. Não foi Noé que se trancou por segurança — foi Deus quem selou a proteção. Ele não só chama para dentro; Ele garante o abrigo.",
      pergunta: "Onde na minha vida eu preciso confiar que Deus mesmo está fechando a porta por mim?"
    },
    "Gênesis 8": {
      texto: "\"Então Deus lembrou-se de Noé.\" Depois de meses dentro da arca, sem sinal nenhum, o texto não diz que Deus esqueceu e voltou a se importar — diz que chegou o momento certo de agir. Espera não é ausência de Deus; muitas vezes é o tempo Dele preparando a saída.",
      pergunta: "O que tenho feito enquanto espero — reclamado, ou like Noé, permanecido fiel dentro da arca?"
    },
    "Gênesis 9": {
      texto: "Depois do dilúvio, Deus faz uma aliança que não depende de nada que o homem faça — Ele mesmo põe o arco-íris no céu como lembrete. É uma promessa unilateral: Deus se compromete, e a garantia é o próprio caráter Dele, não o nosso desempenho.",
      pergunta: "Consigo confiar em promessas de Deus mesmo quando meu desempenho não é perfeito?"
    },
    "Gênesis 10": {
      texto: "Uma lista extensa de nomes e nações pode parecer distante, mas ela conta algo profundo: Deus está atento a cada povo, cada família, cada linhagem que viria a existir. Nada na história humana é anônimo demais pra estar fora do olhar Dele.",
      pergunta: "Confio que Deus conhece os detalhes da minha própria história, mesmo os que parecem pequenos demais?"
    },
    "Gênesis 11": {
      texto: "Babel é a história de pessoas tentando construir um nome grande por conta própria, alcançando os céus com as próprias mãos. Deus confunde a língua não por crueldade, mas porque unidade a serviço do orgulho não leva a lugar nenhum bom.",
      pergunta: "Tenho buscado fazer um nome pra mim mesmo, ou buscado glorificar o nome de Deus no que faço?"
    },
    "Gênesis 12": {
      texto: "\"Sai da tua terra... para a terra que eu te mostrarei.\" Deus não dá o mapa completo a Abrão — só o primeiro passo, e uma promessa. A fé bíblica, desde o início, é caminhar sem ver o destino inteiro, confiando em quem chama.",
      pergunta: "Que \"sai da tua terra\" Deus pode estar me pedindo agora — e o que me impede de dar esse passo?"
    },
    "Gênesis 13": {
      texto: "Diante do conflito com Ló, Abrão cede a melhor terra sem discutir — ele já tinha aprendido que a provisão dele não dependia de vencer disputas, mas de confiar em Deus. Logo depois, é justamente Deus quem amplia a promessa a ele.",
      pergunta: "Consigo abrir mão de vantagens imediatas confiando que Deus proverá de outra forma?"
    },
    "Gênesis 14": {
      texto: "No meio de uma guerra entre reis, aparece uma figura misteriosa: Melquisedeque, rei e sacerdote, que abençoa Abrão em nome do \"Deus Altíssimo\". Mesmo em terreno de batalha, Deus intercala lembretes de que Ele está no controle acima de qualquer trono humano.",
      pergunta: "Nas minhas próprias \"batalhas\" da semana, tenho parado pra reconhecer quem realmente está no controle?"
    },
    "Mateus 1": {
      texto: "A genealogia de Jesus inclui nomes que ninguém esperaria numa lista real: uma prostituta, uma estrangeira, um adultério coberto de vergonha. Deus não escondeu essas histórias — Ele as tornou parte da linhagem do Messias. A graça sempre trabalhou através de gente imperfeita.",
      pergunta: "Consigo acreditar que minha própria história, com tudo que ela tem, também pode fazer parte da obra de Deus?"
    },
    "Mateus 2": {
      texto: "Magos estrangeiros viajam de longe para adorar; um rei local trama pra matar. O mesmo Jesus provoca adoração e hostilidade — ainda hoje. José obedece cada instrução de Deus sem discutir, mesmo quando isso significa fugir no meio da noite.",
      pergunta: "Minha resposta a Jesus tem sido mais parecida com a dos magos, ou com a de Herodes?"
    },
    "Mateus 3": {
      texto: "João Batista vive no deserto, come gafanhotos, e prega arrependimento sem suavizar a mensagem. Quando Jesus é batizado — sem precisar disso pra si mesmo — o céu se abre e o Pai declara publicamente: \"este é o meu Filho amado\". A aprovação vem antes de qualquer milagre.",
      pergunta: "Vivo buscando a aprovação de Deus através de esforço, ou já descanso em ser amado(a) por Ele?"
    },
    "Mateus 4": {
      texto: "No deserto, faminto, Jesus é tentado exatamente nos pontos mais óbvios: pão, poder, proteção fácil. Cada vez, Ele responde com a Palavra, não com força própria. A vitória sobre a tentação começou muito antes da provação — começou no conhecimento das Escrituras.",
      pergunta: "Quando sou tentado(a), recorro à Palavra como Jesus fez, ou tento resolver sozinho(a)?"
    },
    "Mateus 5": {
      texto: "As bem-aventuranças invertem a lógica do mundo: bem-aventurados os pobres em espírito, os que choram, os mansos. Jesus não está descrevendo uma vida fácil — está descrevendo um coração que depende de Deus mais do que de si mesmo.",
      pergunta: "Qual dessas bem-aventuranças mais desafia a forma como tenho vivido essa semana?"
    },
    "Mateus 6": {
      texto: "\"Não podeis servir a Deus e ao dinheiro.\" No meio do Sermão do Monte, Jesus fala sobre oração, jejum e ansiedade — e a raiz de tudo é a mesma: onde está o meu tesouro, ali estará meu coração. As aves do céu não semeiam, e mesmo assim são sustentadas.",
      pergunta: "Onde tenho colocado minha confiança essa semana: nas minhas provisões, ou no Pai que sustenta as aves?"
    },
    "Mateus 7": {
      texto: "\"Não julgueis\" não é sobre nunca discernir certo e errado — é sobre examinar a própria trave antes de apontar o cisco no outro. Jesus fecha o sermão com uma escolha clara: casa sobre a rocha ou sobre a areia. Ouvir não basta; é preciso praticar.",
      pergunta: "Tenho só ouvido a Palavra essa semana, ou ela realmente virou prática na minha vida?"
    },
    "Salmos 1": {
      texto: "O Salterio abre com uma imagem simples: uma árvore plantada junto a ribeiros de águas, que dá fruto no tempo certo e cuja folha não cai. A diferença entre o justo e o ímpio não é sorte — é onde cada um planta suas raízes.",
      pergunta: "Minhas raízes essa semana estavam mais plantadas na Palavra, ou nas correntes ao redor?"
    },
    "Salmos 2": {
      texto: "As nações se agitam, tramam, se levantam contra Deus — e Ele ri. Não com desprezo cruel, mas com a serenidade de quem sabe que nenhum plano humano ameaça o Seu trono. Diante do caos do mundo, há um convite: \"bem-aventurados os que nele confiam\".",
      pergunta: "As notícias e agitações do mundo têm roubado minha paz, ou tenho descansado em quem realmente reina?"
    },
    "Salmos 3": {
      texto: "Davi escreve esse salmo fugindo do próprio filho, cercado de inimigos que dizem que nem Deus pode salvá-lo. Mesmo assim, ele consegue dormir e acordar em paz, porque sabe: \"tu, Senhor, és o escudo que me cerca\". A confiança não elimina o perigo — mas sustenta o sono no meio dele.",
      pergunta: "O que está roubando meu sono essa semana, e já entreguei isso a Deus como Davi fez?"
    },
    "Salmos 4": {
      texto: "\"Em paz me deito e logo pego no sono, porque só tu, Senhor, me fazes viver seguro.\" Depois de pedir socorro e refletir sobre os que buscam vaidade, o salmo termina numa nota de descanso genuíno — não porque tudo se resolveu, mas porque Deus é suficiente.",
      pergunta: "Consigo terminar meu dia em paz mesmo com coisas ainda não resolvidas?"
    },
    "Provérbios 1": {
      texto: "\"O temor do Senhor é o princípio do conhecimento.\" Provérbios não começa com regras — começa com uma postura de reverência diante de Deus, sem a qual nenhuma sabedoria de verdade se sustenta. A sabedoria bíblica não é só inteligência; é caráter formado na presença de Deus.",
      pergunta: "Tenho buscado conhecimento sem buscar, junto, o temor e a reverência a Deus?"
    },
    "Provérbios 2": {
      texto: "A sabedoria é comparada a um tesouro escondido — não cai do céu pronta, é buscada com esforço, como quem cava atrás de prata. E a promessa é clara: quem clama por discernimento, o encontra, porque é o próprio Senhor quem dá sabedoria.",
      pergunta: "Tenho buscado sabedoria com a mesma intensidade que buscaria um tesouro perdido?"
    },
    "Gênesis 15": {
      texto: "Abrão questiona Deus abertamente: “que me darás, se não tenho filhos?”. Deus não o repreende pela pergunta — leva-o para fora e mostra as estrelas. E vem o versículo que o Novo Testamento citará como fundamento da salvação: “creu Abrão ao Senhor, e isso lhe foi imputado para justiça”. Na cerimônia da aliança, quem passa entre os animais é Deus sozinho, comprometendo-se unilateralmente.",
      pergunta: "Levo minhas dúvidas honestas a Deus, ou finjo que não as tenho?"
    },
    "Gênesis 16": {
      texto: "Cansados de esperar, Sarai e Abrão tentam cumprir a promessa por atalho humano — e o resultado é dor para todos, especialmente para Hagar, usada e depois desprezada. É no deserto, fugindo, que Hagar recebe a visita de Deus e o chama de “El-Roi”: o Deus que vê. Ele encontra justamente quem todos descartaram.",
      pergunta: "Onde tenho tentado apressar Deus por conta própria em vez de esperar Nele?"
    },
    "Gênesis 17": {
      texto: "Aos noventa e nove anos, quando qualquer possibilidade humana já se esgotou, Deus se apresenta como El-Shaddai, o Todo-Poderoso, e reafirma a aliança. Muda os nomes: Abrão vira Abraão, pai de multidão; Sarai vira Sara. Deus dá nomes novos antes de a realidade mudar — a identidade vem da promessa, não da circunstância.",
      pergunta: "Que nome Deus me dá que ainda não corresponde ao que eu vejo em mim?"
    },
    "Gênesis 18": {
      texto: "Sara ri escondida ao ouvir a promessa, e Deus responde com a pergunta que atravessa toda a Escritura: “acaso para o Senhor há coisa demasiadamente difícil?”. Depois, algo notável: Deus escuta Abraão intercedendo por Sodoma, cedendo de cinquenta até dez justos. O Deus santo é também o Deus que ouve quem intercede.",
      pergunta: "Por quem eu tenho intercedido ultimamente — ou só tenho orado por mim?"
    },
    "Gênesis 19": {
      texto: "O juízo sobre Sodoma é real e sério, mas repare no gesto no meio dele: os anjos tomam Ló pela mão e o retiram à força, porque ele hesitava. A salvação de Ló não foi mérito dele, foi misericórdia insistente. E a mulher de Ló nos lembra que olhar para trás com o coração é diferente de apenas caminhar.",
      pergunta: "Existe algo que Deus está me tirando das mãos, e eu ainda estou hesitando em soltar?"
    },
    "Gênesis 20": {
      texto: "Abraão, o pai da fé, repete exatamente o mesmo medo de antes: mente sobre Sara para se proteger. Deus intervém — falando até com um rei pagão em sonho — não porque Abraão merecia, mas porque a promessa não dependia do desempenho dele. A fé genuína convive com fraquezas recorrentes.",
      pergunta: "Que medo antigo continua me levando a agir de um jeito que já sei que é errado?"
    },
    "Gênesis 21": {
      texto: "“E o Senhor visitou Sara como tinha dito.” Vinte e cinco anos depois da promessa, no tempo exato, Isaque nasce e o riso de dúvida se transforma em riso de alegria. No mesmo capítulo, Deus ouve o choro de Ismael no deserto e abre os olhos de Hagar para um poço que já estava ali.",
      pergunta: "Estou disposto(a) a esperar o tempo de Deus mesmo quando ele parece longo demais?"
    },
    "Gênesis 22": {
      texto: "Este é um dos textos mais difíceis da Bíblia, e deve ser lido com reverência: Deus prova Abraão, e no momento decisivo detém a mão dele. O cordeiro está preso no mato — “Deus proverá”. Um pai, um filho único, um monte e um substituto: os cristãos leem aqui, há séculos, a sombra do que Deus mesmo faria em favor de nós.",
      pergunta: "O que Deus me pede que eu solte, confiando que Ele mesmo provê?"
    },
    "Gênesis 23": {
      texto: "Sara morre, e Abraão compra uma caverna — o único pedaço de terra que ele possuirá na terra prometida a ele. Morre peregrino, com a promessa ainda no futuro, e mesmo assim crendo. Hebreus dirá depois que ele esperava uma cidade cujo arquiteto é Deus.",
      pergunta: "Consigo confiar em promessas de Deus cujo cumprimento talvez eu não veja por completo?"
    },
    "Gênesis 24": {
      texto: "O servo de Abraão não faz nada espetacular: ele ora, espera junto ao poço e observa. Nenhuma voz do céu, nenhum sinal impossível — apenas fidelidade comum e um pedido sincero. E ao final ele testemunha: “o Senhor me guiou no caminho”. Deus dirige mais pela obediência simples do que por sinais extraordinários.",
      pergunta: "Tenho buscado sinais espetaculares quando Deus quer me guiar pela obediência do dia comum?"
    },
    "Gênesis 25": {
      texto: "Abraão morre “farto de dias”, e a história segue com dois irmãos que já lutavam no ventre. Então Esaú vende o direito de primogênito por um prato de comida — troca o eterno pelo imediato porque estava com fome agora. É assim que quase sempre se perdem coisas sagradas: não por grandes decisões, mas por pequenas urgências.",
      pergunta: "Que coisa valiosa eu tenho trocado por alívio imediato?"
    },
    "Gênesis 26": {
      texto: "Isaque repete o erro do pai mentindo sobre a esposa, mas também mostra outra face: diante de disputas pelos poços, ele cede, cava outro, cede de novo — até chegar a Reobote, “o Senhor nos deu largueza”. Nem toda batalha precisa ser vencida para que Deus abra espaço.",
      pergunta: "Que disputa eu poderia simplesmente ceder, confiando que Deus abre outro espaço?"
    },
    "Gênesis 27": {
      texto: "Uma família inteira em ruínas: um pai que prefere um filho, uma mãe que arma o engano, um filho que mente na cara do pai cego. O texto não aprova nada disso — narra as consequências, que incluem vinte anos de exílio para Jacó. Deus cumpre seu propósito apesar do pecado, nunca por causa dele.",
      pergunta: "Tenho tentado alcançar por manipulação algo que só Deus pode dar?"
    },
    "Gênesis 28": {
      texto: "Jacó dorme no chão, fugindo das consequências do próprio engano, e é exatamente ali que Deus se revela — sem cobrança, com promessa. Ele acorda espantado: “certamente o Senhor está neste lugar, e eu não o sabia”. Deus encontra o fugitivo antes de ele consertar qualquer coisa.",
      pergunta: "Em que lugar “comum” da minha vida Deus pode estar presente sem eu perceber?"
    },
    "Gênesis 29": {
      texto: "Jacó serve sete anos por Raquel, e ao amor “pareceram-lhe poucos dias”. Depois é enganado por Labão — o enganador provando o próprio veneno. E no meio dessa história de preferências, há Lia, não amada, cujos filhos recebem nomes que são orações: “o Senhor atendeu à minha aflição”.",
      pergunta: "Já levei a Deus a dor de me sentir preterido(a), como Lia fez?"
    },
    "Gênesis 30": {
      texto: "Rivalidade entre irmãs, barganhas, disputa por filhos, negociação de rebanhos — é um capítulo humanamente sujo. E é dessa família desordenada que nascem as doze tribos de Israel. Deus não aprova a disfunção, mas também não desiste de trabalhar dentro dela.",
      pergunta: "Acredito que Deus pode fazer algo bom a partir da minha história desordenada?"
    },
    "Gênesis 31": {
      texto: "Depois de vinte anos e dez mudanças de salário, Jacó reconhece o que sustentou tudo: “o Deus de meu pai esteve comigo”. Ele não saiu vitorioso por esperteza própria; ele foi guardado. Em Mispá, ergue-se um monte de testemunho — Deus vigia entre os dois quando a confiança humana falha.",
      pergunta: "Ao olhar meus últimos anos, consigo apontar onde Deus esteve comigo?"
    },
    "Gênesis 32": {
      texto: "Na beira do rio, sozinho e com medo, Jacó luta a noite inteira e se recusa a soltar: “não te deixarei ir se me não abençoares”. Sai dali com um nome novo — Israel — e com o quadril desconjuntado. Prevaleceu, e saiu manquejando. Encontros verdadeiros com Deus abençoam e marcam ao mesmo tempo.",
      pergunta: "Estou disposto(a) a um encontro com Deus que me abençoe mas também me mude?"
    },
    "Gênesis 33": {
      texto: "Jacó esperava um exército inimigo e recebeu um abraço. Esaú corre, o abraça e chora — e Jacó diz: “vi o teu rosto como se tivesse visto o rosto de Deus”. A reconciliação que ele passou vinte anos temendo custou menos do que o medo que ele carregou.",
      pergunta: "Que reconciliação eu tenho evitado por medo de uma reação que talvez nem venha?"
    },
    "Gênesis 34": {
      texto: "Este é um capítulo de dor: uma violência grave contra Diná, seguida de vingança sangrenta dos irmãos e da passividade do pai. A Escritura não ameniza nem justifica nada disso — registra o horror com honestidade. Deus não fala neste capítulo, e esse silêncio nos ensina a não usar Seu nome para cobrir nossos próprios acertos de contas.",
      pergunta: "Já tentei justificar uma reação minha usando a linguagem da fé?"
    },
    "Gênesis 35": {
      texto: "“Levantemo-nos e subamos a Betel.” Jacó volta ao lugar do primeiro encontro, e o retorno começa com uma limpeza: enterrar os deuses estranhos que a família vinha carregando. No mesmo capítulo, Raquel morre dando à luz Benjamim — luto e adoração ocupando o mesmo espaço, como acontece na vida real.",
      pergunta: "Que “deus estranho” eu ainda carrego, mesmo sabendo a quem pertenço?"
    },
    "Gênesis 36": {
      texto: "Uma genealogia longa dos descendentes de Esaú — a linhagem que não recebeu a aliança. Deus registra esses nomes com o mesmo cuidado. Ele não é descuidado com ninguém, nem com quem fica fora do caminho central da história que Ele está escrevendo.",
      pergunta: "Trato as pessoas “fora do meu círculo” com o mesmo cuidado que Deus tem por elas?"
    },
    "Gênesis 37": {
      texto: "A túnica dada por favoritismo virou o pano ensanguentado que enganou o pai. Os sonhos de José irritaram os irmãos, e a inveja os levou a vendê-lo. Nada aqui parece plano de Deus — parece desastre puro. E é exatamente dentro desse desastre que Deus já estava trabalhando, sem avisar ninguém.",
      pergunta: "Que situação atual eu chamo de desastre, mas ainda não sei o fim?"
    },
    "Gênesis 38": {
      texto: "Um capítulo desconfortável no meio da história de José: Judá falha gravemente com Tamar, que age em desespero buscando o que lhe era devido. No fim, é Judá quem admite: “ela é mais justa do que eu”. E Mateus, séculos depois, colocará o nome de Tamar na genealogia de Jesus — a graça não apaga histórias difíceis, ela as redime.",
      pergunta: "Sou capaz de admitir, como Judá, quando o erro maior foi meu?"
    },
    "Gênesis 39": {
      texto: "Duas vezes neste capítulo o texto repete: “o Senhor era com José” — uma na casa de Potifar, outra na prisão. A presença de Deus não dependia da circunstância melhorar. E ao ser tentado, José define o pecado corretamente: “pecaria contra Deus”. Antes de ser contra alguém, o pecado é contra Ele.",
      pergunta: "Reconheço que meus pecados “privados” são, antes de tudo, contra Deus?"
    },
    "Gênesis 40": {
      texto: "José serve na prisão, interpreta os sonhos de dois companheiros, pede apenas para ser lembrado — e é esquecido por dois anos inteiros. O texto não romantiza isso. Fidelidade sem recompensa visível é uma das provas mais duras, e José a atravessa sem deixar de servir.",
      pergunta: "Consigo continuar fiel em algo que ninguém está vendo nem reconhecendo?"
    },
    "Gênesis 41": {
      texto: "Chamado diante do homem mais poderoso do mundo, José não aproveita o palco para si: “isso não está em mim; Deus é que dará resposta”. A promoção vem, mas o crédito é devolvido a quem pertence. E os nomes que ele dá aos filhos contam sua teologia: Deus o fez esquecer a dor e frutificar na terra da aflição.",
      pergunta: "Quando algo dá certo comigo, para quem vai o crédito na prática?"
    },
    "Gênesis 42": {
      texto: "José testa os irmãos, e algo desperta neles depois de vinte anos: “verdadeiramente somos culpados”. A providência de Deus não os trouxe ao Egito apenas por comida — trouxe-os ao lugar onde a consciência finalmente falou. Deus cuida das nossas necessidades e, no caminho, trata do nosso coração.",
      pergunta: "Deus pode estar usando uma necessidade minha para tratar de algo mais profundo?"
    },
    "Gênesis 43": {
      texto: "A fome aperta e eles precisam levar Benjamim. Judá — o mesmo que propôs vender José — agora se oferece como fiador do irmão mais novo. E José, ao ver o irmão, precisa sair da sala para chorar. Deus estava mudando os dois lados dessa história ao mesmo tempo.",
      pergunta: "Onde Deus tem trabalhado em mim de um jeito que só quem me conhece de longe notaria?"
    },
    "Gênesis 44": {
      texto: "O momento decisivo: com a taça na bagagem de Benjamim, Judá se oferece para ficar como escravo no lugar do irmão. O homem que vendeu um irmão agora se entrega por outro. Arrependimento verdadeiro não se prova com palavras — se prova quando a mesma situação aparece e a escolha é diferente.",
      pergunta: "Se a situação do meu maior erro se repetisse hoje, eu agiria diferente?"
    },
    "Gênesis 45": {
      texto: "“Não fostes vós que me enviastes para cá, senão Deus.” José não nega o que sofreu nem finge que foi tudo bonito — ele reconhece a mão de Deus acima da maldade humana. E chora, abraça, alimenta e perdoa. A soberania de Deus não elimina a dor; ela abre espaço para a graça.",
      pergunta: "Consigo enxergar a mão de Deus em algo que outras pessoas me fizeram de mal?"
    },
    "Gênesis 46": {
      texto: "Jacó, já velho, hesita em descer ao Egito, e Deus fala à noite: “não temas descer ao Egito... eu descerei contigo”. Deus não promete evitar o Egito — promete acompanhá-lo até lá. Às vezes a fidelidade de Deus se mostra não na circunstância evitada, mas na presença dentro dela.",
      pergunta: "Estou pedindo a Deus que mude minha circunstância, quando Ele está oferecendo Sua presença nela?"
    },
    "Gênesis 47": {
      texto: "Diante de Faraó, Jacó descreve a própria vida como uma “peregrinação” de dias “poucos e maus”. É uma avaliação sincera de uma vida difícil — e ainda assim ele abençoa o rei mais poderoso da terra. Ser honesto sobre as dores não impede alguém de ser canal de bênção.",
      pergunta: "Consigo ser honesto(a) sobre minhas dores sem deixar de abençoar quem está ao meu redor?"
    },
    "Gênesis 48": {
      texto: "Jacó cruza as mãos e coloca a direita sobre o mais novo, contrariando a ordem esperada — Deus segue escolhendo fora da lógica humana. E o velho patriarca resume sua vida numa frase: “o Deus que me sustentou toda a minha vida até este dia”. Depois de tudo, o veredito dele é sustento, não abandono.",
      pergunta: "Se eu resumisse minha vida numa frase hoje, ela reconheceria o sustento de Deus?"
    },
    "Gênesis 49": {
      texto: "Nas últimas palavras, Jacó abençoa cada filho com franqueza — inclusive apontando pecados. E sobre Judá, anuncia que o cetro não se apartará dele até que venha Aquele a quem pertence. As palavras de um moribundo carregam a esperança messiânica que atravessará todo o Antigo Testamento.",
      pergunta: "O que eu gostaria que ficasse das minhas palavras para quem vem depois de mim?"
    },
    "Gênesis 50": {
      texto: "Gênesis fecha com uma das frases mais profundas da Bíblia: “vós bem intentastes mal contra mim, porém Deus o intentou para bem”. José não reescreve o passado — chama o mal de mal e reconhece que Deus, sem ser cúmplice dele, o superou. E morre pedindo que seus ossos sejam levados, porque acreditava na promessa que ainda não tinha visto.",
      pergunta: "Existe um “intentaram mal” na minha história que eu ainda não entreguei a Deus?"
    },
    "Provérbios 3": {
      texto: "\"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.\" É um dos versículos mais conhecidos da Bíblia, e por um motivo: ele resume a essência da fé prática — reconhecer a Deus em tudo, não só nas grandes decisões.",
      pergunta: "Em que decisão recente confiei mais no meu próprio entendimento do que em Deus?"
    }
  };

