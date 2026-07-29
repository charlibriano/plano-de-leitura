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
  // Cobre por enquanto a 1ª semana do plano padrão (Evangelho +
  // História + Salmos): Gênesis 1-14, Mateus 1-7, Salmos 1-4,
  // Provérbios 1-3. O resto da Bíblia vai sendo preenchido aos
  // poucos — quando a chave não existe, o card mostra um aviso
  // gentil de "em breve" em vez de sumir ou dar erro.
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
    "Provérbios 3": {
      texto: "\"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.\" É um dos versículos mais conhecidos da Bíblia, e por um motivo: ele resume a essência da fé prática — reconhecer a Deus em tudo, não só nas grandes decisões.",
      pergunta: "Em que decisão recente confiei mais no meu próprio entendimento do que em Deus?"
    }
  };

