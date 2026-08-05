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
  // ══════════════════════════════════════════════════════════
  // COBERTURA ATUAL
  //
  //   >>> ANTIGO TESTAMENTO: 100% COMPLETO <<<
  //   39 livros, 929 capítulos — de Gênesis 1 a Malaquias 4.
  //
  //   NOVO TESTAMENTO: em andamento
  //     ✔ Mateus 1-7
  //
  // ORDEM RESTANTE (Novo Testamento):
  //   Mateus (8-28) → Marcos → Lucas → João → Atos →
  //   Romanos → 1-2 Coríntios → Gálatas → Efésios → Filipenses →
  //   Colossenses → 1-2 Tessalonicenses → 1-2 Timóteo → Tito →
  //   Filemom → Hebreus → Tiago → 1-2 Pedro → 1-2-3 João →
  //   Judas → Apocalipse
  // ══════════════════════════════════════════════════════════

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
    "Êxodo 1": {
      texto: "Gerações depois de José, “levantou-se sobre o Egito um novo rei que não conhecia a José”. O medo do faraó gera opressão, e a opressão gera crescimento — “quanto mais os afligiam, tanto mais eles se multiplicavam”. No meio disso, duas parteiras desobedecem a ordem de matar por temerem mais a Deus do que ao rei.",
      pergunta: "Já precisei escolher entre agradar uma autoridade humana e obedecer a Deus?"
    },
    "Êxodo 2": {
      texto: "Um bebê escondido numa cesta de junco, encontrado pela própria filha do rei que ordenara sua morte — a providência de Deus trabalha nos detalhes mais improváveis. Anos depois, Moisés foge para o deserto, e o texto resume: “Deus ouviu o gemido deles... e atentou para eles”. Antes de qualquer resposta visível, Deus já estava ouvindo.",
      pergunta: "Tenho confiado que Deus ouve mesmo quando ainda não vejo resposta?"
    },
    "Êxodo 3": {
      texto: "Numa sarça que arde sem se consumir, Deus se apresenta pelo nome que resume tudo sobre Ele: “EU SOU O QUE SOU”. Ele não é um deus entre outros, é a própria existência. E chama Moisés — um fugitivo, gago, inseguro — não porque ele era capaz, mas porque Deus disse “certamente serei contigo”.",
      pergunta: "Tenho deixado minha insegurança impedir algo que Deus está me chamando a fazer?"
    },
    "Êxodo 4": {
      texto: "Moisés apresenta desculpa atrás de desculpa, e Deus responde cada uma com paciência — até prover Arão como porta-voz. A ira do Senhor se acende só quando a resistência já beira a recusa teimosa. Deus é paciente com nossas dúvidas, mas também nos chama a agir de uma vez.",
      pergunta: "Que desculpa tenho repetido para adiar algo que sei que Deus está me pedindo?"
    },
    "Êxodo 5": {
      texto: "O primeiro resultado da obediência de Moisés não é libertação — é piora: faraó aumenta a carga de trabalho dos hebreus. Moisés volta a Deus quase acusador: “por que me enviaste?”. Nem sempre obedecer melhora as coisas imediatamente; às vezes o caminho da fé passa por piorar antes de melhorar.",
      pergunta: "Já desanimei da obediência porque ela não trouxe alívio imediato?"
    },
    "Êxodo 6": {
      texto: "Diante do desânimo de Moisés, Deus reafirma quem Ele é: “Eu sou o Senhor... e estabeleci a minha aliança”. A resposta a Moisés não é uma explicação lógica, é um lembrete de identidade e aliança. Quando a fé vacila, o antídoto bíblico é sempre lembrar quem Deus é e o que Ele prometeu.",
      pergunta: "Quando desanimo, tenho o hábito de voltar às promessas de Deus, ou só à minha frustração?"
    },
    "Êxodo 7": {
      texto: "A primeira praga transforma o Nilo, deus egípcio da vida, em sangue e morte. Cada praga que vem a seguir vai desmontar, uma a uma, os deuses do Egito. Não é apenas uma demonstração de poder — é um julgamento público de que só existe um Deus verdadeiro.",
      pergunta: "Que “deuses” modernos — segurança, dinheiro, controle — Deus talvez precise desmontar na minha vida?"
    },
    "Êxodo 8": {
      texto: "Rãs, piolhos, moscas — pragas cada vez mais próximas e incômodas. Faraó barganha, promete deixar o povo ir, e volta atrás assim que o alívio chega. É um retrato cru do coração endurecido: promessas feitas sob pressão que se desfazem quando a pressão passa.",
      pergunta: "Já fiz promessas a Deus na aflição que esqueci assim que a aflição passou?"
    },
    "Êxodo 9": {
      texto: "Deus explica a Moisés por que poupou faraó até agora: “para te mostrar o meu poder, e para que o meu nome seja anunciado em toda a terra”. Mesmo a resistência humana acaba servindo ao propósito maior de Deus de revelar quem Ele é a todas as nações.",
      pergunta: "Consigo confiar que Deus usa até resistência e dificuldade para revelar Sua glória?"
    },
    "Êxodo 10": {
      texto: "Faraó tenta negociar liberdade parcial — “vão só os homens” — e Moisés recusa: a adoração a Deus não se barganha pela metade. A décima praga já se aproxima, e a escuridão que cobre o Egito é literal e também simbólica: trevas sobre quem recusa a luz.",
      pergunta: "Tenho oferecido a Deus uma obediência parcial, negociando o que entrego de fato?"
    },
    "Êxodo 11": {
      texto: "Antes da praga final, Deus já prepara a saída: instrui o povo a pedir objetos de prata e ouro aos egípcios. Mesmo em meio ao juízo mais severo, Deus está simultaneamente organizando provisão e bênção para o Seu povo. Julgamento e cuidado caminham juntos nas mãos Dele.",
      pergunta: "Consigo enxergar a provisão de Deus mesmo em meio a um tempo difícil?"
    },
    "Êxodo 12": {
      texto: "A Páscoa nasce aqui: um cordeiro sem defeito, o sangue no batente da porta, e a morte que passa adiante quem está coberto por ele. Não foi a bondade pessoal dos israelitas que os salvou — foi o sangue aplicado. Séculos depois, o Novo Testamento chamará Jesus de “nosso Cordeiro pascal”.",
      pergunta: "Minha segurança diante de Deus está no sangue do Cordeiro, ou na minha própria bondade?"
    },
    "Êxodo 13": {
      texto: "Deus institui a consagração dos primogênitos como lembrete perpétuo da libertação, e guia o povo por nuvem de dia e fogo de noite — nunca os deixando sem direção visível. Repare que Ele escolhe um caminho mais longo, evitando a guerra, porque conhecia a fragilidade deles.",
      pergunta: "Tenho confiado que o caminho mais longo que Deus escolhe pode ser o mais sábio pra mim?"
    },
    "Êxodo 14": {
      texto: "Encurralados entre o exército egípcio e o mar, o povo entra em pânico. Moisés responde com uma das frases mais firmes da Escritura: “o Senhor pelejará por vós, e vós vos calareis”. E então, o impossível: o mar se abre. Deus não evitou o beco sem saída — Ele o transformou em palco do Seu poder.",
      pergunta: "Estou num “beco sem saída” onde só resta ficar quieto e deixar Deus agir?"
    },
    "Êxodo 15": {
      texto: "Do outro lado do mar, o povo canta — o primeiro hino registrado da Bíblia. Louvor genuíno nasce depois de ver Deus agir, não antes. Poucos versículos depois, porém, eles já reclamam de sede em Mara. A memória da libertação é curta quando a próxima dificuldade chega.",
      pergunta: "Minha gratidão dura mais que a próxima dificuldade, ou esfria rápido como a do povo?"
    },
    "Êxodo 16": {
      texto: "Diante da fome no deserto, Deus provê maná — mas com uma regra: colher só o suficiente para o dia, sem guardar excesso (exceto véspera de sábado). É um treino diário de dependência: Deus ensina o povo a confiar de novo a cada manhã, não a acumular segurança própria.",
      pergunta: "Tenho tentado acumular segurança para o amanhã em vez de confiar em Deus a cada dia?"
    },
    "Êxodo 17": {
      texto: "O povo briga por água, e Deus instrui Moisés a ferir a rocha para que dela jorre água — imagem que Paulo depois associará a Cristo. No mesmo capítulo, enquanto Moisés ergue os braços em oração, Israel vence a batalha contra Amaleque; quando os braços descem, perdem. A intercessão sustenta a vitória.",
      pergunta: "Tenho “erguido as mãos” em oração por batalhas que outros estão enfrentando?"
    },
    "Êxodo 18": {
      texto: "Jetro, sogro de Moisés, vê o líder sobrecarregado julgando o povo sozinho do amanhecer à noite, e dá um conselho prático: delegar. Moisés, o homem que falou com Deus face a face, tinha humildade para ouvir um conselho sábio de um parente. Liderar bem inclui saber repartir a carga.",
      pergunta: "Tenho tentado carregar sozinho(a) algo que Deus quer que eu divida com outros?"
    },
    "Êxodo 19": {
      texto: "No Sinai, Deus propõe uma aliança: “sereis a minha propriedade peculiar... reino de sacerdotes e nação santa”. Antes de dar qualquer mandamento, Ele já os havia libertado e chamado de Seus. A obediência que vem a seguir é resposta ao amor já recebido, não condição para ganhá-lo.",
      pergunta: "Vivo a obediência a Deus como resposta ao Seu amor, ou como tentativa de merecê-lo?"
    },
    "Êxodo 20": {
      texto: "Os Dez Mandamentos começam não com uma ordem, mas com uma identidade: “Eu sou o Senhor teu Deus, que te tirei da terra do Egito”. A lei nasce da graça já recebida. Cada mandamento que segue protege o relacionamento — com Deus e com o próximo — de quem já foi libertado.",
      pergunta: "Vejo os mandamentos de Deus como fardo, ou como proteção de alguém que me ama?"
    },
    "Êxodo 21": {
      texto: "Leis sobre escravos, ferimentos, responsabilidade — regras que hoje soam distantes, mas que, no contexto da época, limitavam abusos comuns em culturas vizinhas (como a duração máxima da escravidão). Deus estabelece justiça prática dentro de uma sociedade real, não regras abstratas.",
      pergunta: "Tenho buscado justiça prática nas minhas relações do dia a dia, não só boas intenções?"
    },
    "Êxodo 22": {
      texto: "Entre leis sobre furto e restituição, aparece um princípio que atravessa toda a Lei: proteção ao estrangeiro, à viúva e ao órfão — “porque estrangeiros fostes na terra do Egito”. A memória da própria fragilidade deveria gerar compaixão pelos frágeis ao redor.",
      pergunta: "Minha própria experiência de dificuldade tem me tornado mais compassivo(a) com quem sofre hoje?"
    },
    "Êxodo 23": {
      texto: "Entre leis civis, um mandamento surpreendente: ajudar até o animal do inimigo caído sob o peso da carga. A justiça bíblica não se limita a quem gostamos — ultrapassa a linha da simpatia pessoal. E a promessa de um anjo guiando o povo reforça: a obediência tem companhia divina.",
      pergunta: "Já fiz o bem a alguém que considero adversário, só porque era o certo a fazer?"
    },
    "Êxodo 24": {
      texto: "O povo responde à leitura da Lei com uma só voz: “tudo o que o Senhor tem falado, faremos”. Moisés sobe ao monte e permanece lá quarenta dias na presença da glória de Deus, descrita como “fogo devorador” aos olhos dos que ficaram embaixo. Santidade real é ao mesmo tempo gloriosa e temível.",
      pergunta: "Minha resposta às promessas de Deus tem sido tão pronta quanto a do povo aqui?"
    },
    "Êxodo 25": {
      texto: "Deus dá instruções detalhadas para a arca, a mesa, o candelabro — cada objeto do tabernáculo carregava significado. E o motivo central é dito claramente: “façam-me um santuário, para que eu habite no meio deles”. Deus deseja proximidade real, não apenas leis à distância.",
      pergunta: "Tenho tratado minha vida como um lugar onde Deus realmente habita?"
    },
    "Êxodo 26": {
      texto: "As instruções continuam — cortinas, cobertas, tábuas revestidas de ouro — construindo um espaço de camadas entre o povo comum e o Santo dos Santos. O cuidado extremo com cada detalhe revela o quanto Deus leva a sério a santidade do encontro com Ele.",
      pergunta: "Trato meu tempo com Deus com o mesmo cuidado que Ele demonstra aqui pelos detalhes?"
    },
    "Êxodo 27": {
      texto: "O altar de bronze, onde os sacrifícios eram oferecidos, fica na entrada do tabernáculo — antes de qualquer outro móvel. A ordem é intencional: não se chega à presença de Deus sem primeiro passar pelo lugar do sacrifício. O caminho até Ele sempre passou por uma oferta.",
      pergunta: "Reconheço que meu acesso a Deus depende de um sacrifício que não é meu, mas de Cristo?"
    },
    "Êxodo 28": {
      texto: "As vestes sacerdotais de Arão levam pedras gravadas com os nomes das doze tribos, carregadas “sobre o coração” diante do Senhor continuamente. O sumo sacerdote representava o povo inteiro diante de Deus — sombra do que Jesus faria, intercedendo por nós permanentemente.",
      pergunta: "Tenho vivido consciente de que sou representado(a) diante de Deus por Alguém que me carrega no coração?"
    },
    "Êxodo 29": {
      texto: "A consagração de Arão e seus filhos envolve lavagem, vestimenta e sangue aplicado na orelha, no polegar e no pé — simbolizando que ouvir, agir e andar precisavam ser purificados. Deus promete então: “habitarei no meio dos filhos de Israel”. A consagração sempre visa comunhão, não apenas ritual.",
      pergunta: "Que área da minha vida — o que ouço, faço ou para onde ando — precisa de purificação hoje?"
    },
    "Êxodo 30": {
      texto: "O altar do incenso, o óleo da unção, a bacia de bronze para lavar mãos e pés — cada objeto reforça que aproximar-se de Deus exige preparo. Ninguém entrava casualmente na presença dEle. Isso não afasta, mas ensina reverência diante de quem é santo.",
      pergunta: "Tenho me aproximado de Deus com reverência, ou com casualidade descuidada?"
    },
    "Êxodo 31": {
      texto: "Deus escolhe Bezalel e Oolibe e os enche do Seu Espírito especificamente para trabalhos artísticos — talhar pedra, entalhar madeira, tecer. O dom criativo aqui é chamado explicitamente de obra do Espírito de Deus. Habilidade prática também é vocação espiritual.",
      pergunta: "Já enxerguei minha própria habilidade prática ou criativa como um dom dado pelo Espírito?"
    },
    "Êxodo 32": {
      texto: "Enquanto Moisés ainda está no monte, o povo já funde um bezerro de ouro e o chama de deus que os tirou do Egito — esquecendo em semanas o que Deus fizera. Moisés intercede tão intensamente que pede para ser apagado do livro da vida no lugar deles. Um retrato vivo de infidelidade humana e intercessão fiel.",
      pergunta: "Com que rapidez esqueço o que Deus já fez por mim quando surge um novo desconforto?"
    },
    "Êxodo 33": {
      texto: "Depois da traição do bezerro, Moisés pede algo ousado: “rogo-te que me mostres a tua glória”. Deus responde que Sua bondade passará diante dele, mas “não poderás ver a minha face, porque homem nenhum verá a minha face e viverá”. A intimidade com Deus é real, mas Sua santidade permanece inalcançável em plenitude por nós.",
      pergunta: "Tenho buscado a presença de Deus com a mesma ousadia e humildade de Moisés?"
    },
    "Êxodo 34": {
      texto: "Deus proclama o próprio nome a Moisés: “o Senhor, o Senhor Deus, compassivo e misericordioso... que não tem por inocente o culpado”. É a descrição mais completa do caráter de Deus em todo o Antigo Testamento — justiça e misericórdia juntas, sem contradição. Moisés desce com o rosto literalmente radiante.",
      pergunta: "Minha imagem de Deus tem espaço tanto para Sua justiça quanto para Sua misericórdia?"
    },
    "Êxodo 35": {
      texto: "O povo é convidado a contribuir para o tabernáculo “de coração disposto”, e a resposta é tão generosa que Moisés precisa pedir que parem de trazer mais. Depois do episódio vergonhoso do bezerro de ouro, o mesmo povo agora oferece com alegria. Arrependimento genuíno se mostra em generosidade renovada.",
      pergunta: "Minha generosidade tem sido de coração disposto, ou por obrigação?"
    },
    "Êxodo 36": {
      texto: "Um detalhe raro na Bíblia: há tanta oferta que é preciso conter o povo de continuar trazendo. Não faltou recurso para a obra de Deus — sobrou. Quando o coração do povo está alinhado com o propósito Dele, a provisão costuma superar a necessidade.",
      pergunta: "Já vivi uma situação onde a provisão de Deus superou o que eu esperava?"
    },
    "Êxodo 37": {
      texto: "Bezalel constrói a arca, a mesa e o candelabro exatamente conforme instruído — precisão artesanal a serviço da adoração. Nada aqui é decorativo por acaso; cada peça carrega teologia embutida em madeira e ouro. Trabalho excelente pode ser, em si, um ato de adoração.",
      pergunta: "Meu trabalho, feito com excelência, tem sido uma forma de adoração a Deus?"
    },
    "Êxodo 38": {
      texto: "O relato detalha exatamente quanto ouro, prata e bronze foram usados na construção — uma prestação de contas pública e transparente da oferta do povo. Não há vergonha em prestar contas cuidadosas do que é dedicado a Deus; pelo contrário, isso honra a confiança recebida.",
      pergunta: "Tenho sido transparente e cuidadoso(a) com o que administro em nome de Deus?"
    },
    "Êxodo 39": {
      texto: "Tudo é concluído “como o Senhor ordenara a Moisés” — frase repetida ao longo do capítulo como um refrão de fidelidade. Moisés os abençoa ao ver a obra terminada exatamente conforme instruído. Obediência completa, sem atalhos nem adaptações próprias, resulta em bênção reconhecida.",
      pergunta: "Tenho feito as coisas “como o Senhor ordenou”, ou ajustado à minha própria conveniência?"
    },
    "Êxodo 40": {
      texto: "O livro termina com a glória do Senhor enchendo o tabernáculo de tal forma que nem Moisés podia entrar — e a nuvem de dia e o fogo de noite guiando o povo em cada etapa da jornada. Deus, que os tirou do Egito, agora habita literalmente no meio deles. A libertação sempre teve como alvo a presença.",
      pergunta: "Meu objetivo final com Deus é escapar de dificuldades, ou viver perto da Sua presença?"
    },
    "Levítico 1": {
      texto: "O livro abre com o holocausto — a oferta inteiramente queimada, sem sobrar nada para o ofertante. O animal precisava ser “sem defeito”, e o adorante impunha a mão sobre ele, identificando-se com aquele substituto. Desde a primeira página, o custo de aproximar-se de Deus é visível.",
      pergunta: "O que eu ofereço a Deus é entrega inteira, ou apenas a parte que me sobra?"
    },
    "Levítico 2": {
      texto: "A oferta de manjares — farinha, azeite e incenso, sem fermento nem mel — era a única sem sangue, expressando dedicação do trabalho diário. E devia ser temperada com sal, “o sal da aliança”, símbolo de algo que preserva e não se corrompe.",
      pergunta: "Tenho oferecido a Deus o fruto do meu trabalho comum, ou só o que considero “espiritual”?"
    },
    "Levítico 3": {
      texto: "A oferta pacífica era a única em que o ofertante comia parte do sacrifício — uma refeição compartilhada diante de Deus, celebrando comunhão restaurada. A gordura, considerada a melhor parte, era reservada exclusivamente para o Senhor.",
      pergunta: "Tenho reservado para Deus a melhor parte, ou o que sobra depois de tudo?"
    },
    "Levítico 4": {
      texto: "Aqui aparecem os sacrifícios pelo pecado cometido “por ignorância” — erros não intencionais. O texto ensina algo desconfortável: o pecado permanece pecado mesmo quando não houve intenção, e ainda assim Deus provê um caminho de reconciliação para ele.",
      pergunta: "Tenho levado a Deus até as falhas que cometi sem perceber na hora?"
    },
    "Levítico 5": {
      texto: "A oferta pela culpa incluía restituição concreta a quem foi prejudicado, acrescida de um quinto do valor. Arrependimento diante de Deus, no sistema bíblico, andava junto com reparação prática ao próximo lesado.",
      pergunta: "Existe algum dano que eu preciso reparar concretamente, e não apenas confessar?"
    },
    "Levítico 6": {
      texto: "Instruções aos sacerdotes, incluindo uma ordem curiosa: o fogo do altar “arderá continuamente; não se apagará”. Alguém precisava alimentar aquela chama todos os dias, sem exceção, mesmo quando ninguém estava olhando.",
      pergunta: "O que tenho feito, diariamente e sem plateia, para manter viva a chama da minha fé?"
    },
    "Levítico 7": {
      texto: "Mais detalhes sobre as ofertas, incluindo a de ação de graças, que devia ser comida no mesmo dia — nada podia ser guardado para depois. Gratidão tinha prazo: era para ser vivida no momento, não adiada.",
      pergunta: "Tenho adiado gratidão que deveria expressar hoje mesmo?"
    },
    "Levítico 8": {
      texto: "A consagração de Arão e seus filhos: lavados com água, vestidos, ungidos com óleo, com sangue aplicado na orelha, no polegar e no dedo do pé. Ouvir, agir e caminhar — cada área da vida marcada como pertencente a Deus.",
      pergunta: "Que área da minha vida — o que ouço, o que faço, para onde vou — ainda não entreguei a Deus?"
    },
    "Levítico 9": {
      texto: "Depois de sete dias de preparo, Arão oferece os primeiros sacrifícios e abençoa o povo — e a glória do Senhor aparece diante de todos. O preparo cuidadoso e demorado precedeu a manifestação visível de Deus.",
      pergunta: "Tenho tido paciência com o preparo, ou quero o resultado antes do processo?"
    },
    "Levítico 10": {
      texto: "Nadabe e Abiú oferecem “fogo estranho” que Deus não ordenara, e morrem diante do altar. Um capítulo severo que ensina o que os anteriores vinham construindo: adoração é como Deus determina, não como cada um inventa por conta própria.",
      pergunta: "Tenho adorado a Deus do jeito que Ele pede, ou do jeito que me parece mais conveniente?"
    },
    "Levítico 11": {
      texto: "As leis alimentares distinguem animais puros e impuros, com a justificativa central: “sereis santos, porque eu sou santo”. Antes de qualquer explicação de higiene, o propósito era formar um povo visivelmente separado no cotidiano mais banal — até no que se come.",
      pergunta: "Minha fé aparece nas escolhas comuns do meu dia, ou fica só nos momentos religiosos?"
    },
    "Levítico 12": {
      texto: "Leis sobre purificação após o parto, com uma provisão de graça notável: quem não pudesse oferecer um cordeiro podia trazer duas rolinhas. Foi exatamente essa oferta dos pobres que Maria e José levaram ao apresentar Jesus no templo.",
      pergunta: "Reconheço que Deus sempre abriu caminho para quem tinha menos recursos?"
    },
    "Levítico 13": {
      texto: "Regras minuciosas sobre lepra e doenças de pele, com o sacerdote examinando e declarando puro ou impuro. O leproso vivia isolado, gritando “imundo”. É por isso que Jesus tocar um leproso, séculos depois, seria um gesto tão escandaloso e tão bonito.",
      pergunta: "Tenho me aproximado de pessoas que a sociedade prefere manter isoladas?"
    },
    "Levítico 14": {
      texto: "O ritual de purificação do leproso curado envolvia duas aves: uma morta, outra solta viva no campo depois de mergulhada no sangue da primeira. Restauração à comunidade não era automática — havia um caminho, e ele custava vida.",
      pergunta: "Tenho ajudado alguém a ser reintegrado depois de um período de afastamento?"
    },
    "Levítico 15": {
      texto: "Leis sobre fluxos corporais e impureza temporária. Nada aqui é vergonha do corpo — é pedagogia: o povo aprendia, no corpo e na rotina, que existe distância entre a santidade de Deus e a condição humana, e que essa distância precisa ser atravessada por Ele.",
      pergunta: "Reconheço minha real distância da santidade de Deus, sem me acostumar com ela?"
    },
    "Levítico 16": {
      texto: "O Dia da Expiação, o capítulo central do livro: um bode sacrificado e outro solto no deserto, levando simbolicamente as iniquidades do povo. Uma vez por ano, o sumo sacerdote entrava no Santo dos Santos. Hebreus dirá que Cristo entrou uma vez por todas, com o próprio sangue.",
      pergunta: "Tenho vivido a liberdade de saber que minhas culpas foram levadas para longe?"
    },
    "Levítico 17": {
      texto: "“A vida da carne está no sangue... é o sangue que fará expiação pela alma.” O versículo que explica todo o sistema sacrificial: não era ritual mágico, era o reconhecimento de que a vida é sagrada e que a reconciliação custa vida.",
      pergunta: "Tenho tratado o perdão que recebi como algo barato, ou reconheço o que ele custou?"
    },
    "Levítico 18": {
      texto: "Uma lista de proibições sexuais que separava Israel das práticas de Canaã e Egito, com a advertência de que a própria terra “vomitaria” quem as praticasse. O texto trata a sexualidade como algo com limites dados por Deus, não como território neutro.",
      pergunta: "Tenho respeitado os limites que Deus estabeleceu, ou os tratado como opinião ultrapassada?"
    },
    "Levítico 19": {
      texto: "O coração ético do livro: respeitar os pais, não roubar, pagar o salário do trabalhador no mesmo dia, não ser parcial com ricos nem pobres, deixar as sobras da colheita para o necessitado — e o mandamento que Jesus chamaria de segundo maior: “amarás o teu próximo como a ti mesmo”.",
      pergunta: "Meu amor ao próximo tem sido sentimento, ou prática concreta como este capítulo descreve?"
    },
    "Levítico 20": {
      texto: "Penalidades severas para idolatria, sacrifício de crianças a Moloque e imoralidade — leis dadas a uma nação específica sob aliança específica. O fundamento repetido é sempre o mesmo: “sede santos, porque eu, o Senhor, sou santo”.",
      pergunta: "O que me motiva a evitar o pecado: medo da consequência, ou o desejo de refletir quem Deus é?"
    },
    "Levítico 21": {
      texto: "Exigências especiais para os sacerdotes, com padrões mais altos de conduta e pureza — quem representa Deus diante do povo carrega responsabilidade proporcional. Liderança espiritual nunca foi apenas privilégio.",
      pergunta: "Tenho reconhecido que qualquer influência que exerço vem com responsabilidade maior?"
    },
    "Levítico 22": {
      texto: "Ofertas defeituosas eram recusadas — cego, aleijado, ferido não seriam aceitos. Séculos depois, Malaquias repreenderia o povo por oferecer justamente o refugo. Deus não aceita como adoração aquilo que não nos custa nada.",
      pergunta: "O que eu tenho oferecido a Deus me custa algo de verdade?"
    },
    "Levítico 23": {
      texto: "O calendário das festas: Páscoa, Primícias, Pentecostes, Trombetas, Expiação, Tabernáculos. O ano inteiro do povo era estruturado em torno de lembrar o que Deus fizera — memória organizada em ritmo, não deixada ao acaso.",
      pergunta: "Meu ano tem algum ritmo organizado para lembrar do que Deus fez por mim?"
    },
    "Levítico 24": {
      texto: "O azeite do candelabro e os pães da proposição deviam ser renovados continuamente, semana após semana. Junto a isso, a lei do “olho por olho” — que, ao contrário do que parece, limitava a vingança, impedindo que a retaliação fosse maior que a ofensa.",
      pergunta: "Tenho respondido a ofensas com medida justa, ou com retaliação maior do que recebi?"
    },
    "Levítico 25": {
      texto: "O ano sabático e o Jubileu: a cada cinquenta anos, dívidas perdoadas, terras devolvidas, escravos libertados. Deus instituiu na lei um reinício estrutural, para que a desigualdade não se tornasse permanente entre gerações.",
      pergunta: "Tenho contribuído para que outros tenham a chance de recomeçar, ou só cobrado o que me é devido?"
    },
    "Levítico 26": {
      texto: "Bênçãos para a obediência e disciplinas progressivas para a rebeldia — mas o capítulo não termina em ameaça. Termina com Deus prometendo lembrar da aliança mesmo depois do exílio: “não os rejeitarei para os destruir de todo”.",
      pergunta: "Confio que a disciplina de Deus tem como alvo a restauração, não o abandono?"
    },
    "Levítico 27": {
      texto: "O livro fecha com regras sobre votos, dedicações e o dízimo — “o dízimo é santo ao Senhor”. Depois de tanta instrução sobre santidade, o encerramento é prático: aquilo que se promete a Deus deve ser honrado com seriedade.",
      pergunta: "Tenho honrado com seriedade aquilo que prometi a Deus?"
    },
    "Números 1": {
      texto: "O livro começa com um censo cuidadoso, tribo por tribo, homem por homem apto para a guerra. Pode parecer burocrático, mas revela algo profundo: Deus conhece Seu povo por nome, não como massa anônima. Antes de qualquer batalha, Ele organiza, conta e cuida de cada família.",
      pergunta: "Sinto que sou apenas um número para Deus, ou confio que Ele me conhece individualmente?"
    },
    "Números 2": {
      texto: "Cada tribo recebe uma posição específica ao redor do tabernáculo — nada aleatório, tudo com a presença de Deus no centro do acampamento. A ordem do povo gira literalmente em torno de onde Deus habita. Organização e adoração não são opostos; aqui, uma serve à outra.",
      pergunta: "Minha vida está organizada em torno da presença de Deus, ou Ele fica na periferia da minha rotina?"
    },
    "Números 3": {
      texto: "Os levitas são separados para o serviço do tabernáculo no lugar dos primogênitos de Israel — um povo inteiro representado por uma tribo dedicada ao serviço sagrado. Deus estabelece que o cuidado com as coisas santas exige gente designada, treinada, disposta a servir sem protagonismo.",
      pergunta: "Tenho servido a Deus em tarefas que não trazem reconhecimento, só porque são necessárias?"
    },
    "Números 4": {
      texto: "Instruções detalhadas sobre como cada família levítica deveria transportar os móveis sagrados — cobertos, protegidos, carregados com reverência extrema, sob pena de morte se tocassem o que não deviam. O texto ensina que lidar com o sagrado exige cuidado, não familiaridade descuidada.",
      pergunta: "Tenho tratado as coisas de Deus com a reverência que elas merecem?"
    },
    "Números 5": {
      texto: "Leis sobre pureza no acampamento e um ritual específico para casos de suspeita de infidelidade — Deus se importa tanto com a santidade coletiva quanto com a justiça em relações quebradas de confiança. Nada na vida da comunidade fica fora do olhar Dele, nem o que acontece em segredo.",
      pergunta: "Vivo de um jeito consistente mesmo no que ninguém mais vê?"
    },
    "Números 6": {
      texto: "O voto nazireu era uma consagração voluntária — abster-se de vinho, não cortar o cabelo, evitar contato com mortos, por um tempo determinado, como sinal visível de dedicação especial a Deus. O capítulo termina com a bênção sacerdotal mais conhecida da Bíblia: “o Senhor te abençoe e te guarde”.",
      pergunta: "Já considerei separar um tempo específico só para me dedicar mais a Deus?"
    },
    "Números 7": {
      texto: "Doze líderes de tribo trazem ofertas idênticas para a dedicação do altar, e o texto repete cada oferta, tribo por tribo, sem resumir. Deus não trata a generosidade de ninguém como “mais uma igual às outras” — cada oferta é registrada com o mesmo cuidado, individualmente.",
      pergunta: "Confio que minha oferta ou serviço, mesmo parecido com o de outros, é visto por Deus individualmente?"
    },
    "Números 8": {
      texto: "Os levitas passam por um rito de purificação e consagração antes de assumirem o serviço — água de purificação, oferta, imposição de mãos de todo o povo sobre eles. A consagração não era automática; exigia preparo intencional antes do serviço começar.",
      pergunta: "Tenho me preparado espiritualmente antes de servir, ou entro direto sem preparo?"
    },
    "Números 9": {
      texto: "Um grupo estava impuro na época da Páscoa e pergunta a Moisés se ficaria de fora — e Deus institui uma segunda data, um mês depois, para quem estivesse impossibilitado. Mesmo dentro da Lei rígida, Deus abre espaço de graça para circunstâncias legítimas.",
      pergunta: "Já assumi que estava “fora” de algo com Deus, quando Ele poderia estar abrindo uma segunda chance?"
    },
    "Números 10": {
      texto: "As trombetas de prata marcavam quando o acampamento devia se mover, seguindo a nuvem sobre o tabernáculo. Moisés convida seu cunhado Hobabe a acompanhá-los, prometendo compartilhar a bênção que Deus prometera. A jornada de fé raramente é solitária — Deus convida companhia no caminho.",
      pergunta: "Tenho convidado outros a caminhar comigo na fé, ou tenho seguido sozinho(a)?"
    },
    "Números 11": {
      texto: "O povo se cansa do maná e chora por carne, lembrando com saudade distorcida da “fartura” da escravidão no Egito. Deus provê codornizes, mas também disciplina a ingratidão. No mesmo capítulo, Moisés, exausto, clama por ajuda — e Deus distribui Seu Espírito sobre setenta anciãos para dividir o peso.",
      pergunta: "Tenho romantizado um passado ruim só porque o presente exige fé e paciência?"
    },
    "Números 12": {
      texto: "Miriã e Arão criticam Moisés, disfarçando ciúme de liderança como questionamento espiritual. Deus responde defendendo Moisés diretamente — “com ele falarei boca a boca” — e Miriã é disciplinada com lepra temporária. Críticas disfarçadas de espiritualidade não escapam do olhar de Deus.",
      pergunta: "Já critiquei alguém usando linguagem espiritual pra disfarçar um sentimento pessoal?"
    },
    "Números 13": {
      texto: "Doze espias exploram Canaã; dez voltam com relatório de medo — “éramos como gafanhotos aos nossos olhos” — e só Josué e Calebe creem que Deus cumprirá a promessa apesar dos gigantes. A mesma terra, os mesmos fatos, duas leituras completamente diferentes de fé.",
      pergunta: "Diante de um obstáculo grande, minha primeira reação tem sido medo ou fé no tamanho de Deus?"
    },
    "Números 14": {
      texto: "O povo chora a noite inteira, planeja voltar ao Egito e quase apedreja Josué e Calebe por discordarem. Como consequência, toda aquela geração incrédula vagaria quarenta anos no deserto até morrer, exceto os dois fiéis. A incredulidade coletiva teve um custo real e duradouro.",
      pergunta: "Tenho deixado o medo da maioria influenciar minha própria fé?"
    },
    "Números 15": {
      texto: "No meio do julgamento pela incredulidade, Deus já fala sobre ofertas “quando entrardes na terra” — reafirmando que a promessa ainda estava de pé, mesmo após o fracasso da geração atual. O capítulo também distingue pecado por erro de pecado deliberado e desafiador.",
      pergunta: "Tenho tratado meus erros involuntários com o mesmo peso de uma rebelião deliberada contra Deus?"
    },
    "Números 16": {
      texto: "Corá lidera uma rebelião contra a liderança de Moisés e Arão, questionando por que só eles teriam autoridade espiritual. A terra se abre e os engole — um julgamento severo contra a inveja disfarçada de reivindicação por “igualdade” espiritual mal aplicada.",
      pergunta: "Já disfarcei inveja de liderança alheia como se fosse busca por justiça?"
    },
    "Números 17": {
      texto: "Para encerrar as dúvidas sobre a liderança escolhida por Deus, Ele faz a vara de Arão florescer da noite para o dia — brotar, florir e dar amêndoas, sem intervenção humana nenhuma. Autoridade legítima não precisa se provar com força; Deus mesmo a confirma.",
      pergunta: "Tenho tentado provar meu próprio valor à força, quando poderia confiar que Deus confirma quem Ele chama?"
    },
    "Números 18": {
      texto: "Deus reafirma o sustento dos levitas e sacerdotes através dos dízimos do povo — eles não teriam herança de terra, porque “eu sou a tua parte e a tua herança”. Quem serve em tempo integral ao sagrado é sustentado pela própria comunidade que serve, por instrução direta de Deus.",
      pergunta: "Tenho contribuído para sustentar quem dedica a vida ao serviço direto do Reino?"
    },
    "Números 19": {
      texto: "O ritual da novilha vermelha, cujas cinzas purificavam quem tocara um morto, soa estranho aos olhos modernos, mas ensinava algo central: a morte contamina, e a purificação exige um processo específico instituído por Deus, não invenção humana.",
      pergunta: "Tenho buscado a purificação no jeito que Deus estabelece, ou nos meus próprios critérios?"
    },
    "Números 20": {
      texto: "Cansado da reclamação por água, Moisés fere a rocha duas vezes com raiva, em vez de apenas falar a ela como Deus ordenara — e por esse único ato, é impedido de entrar na terra prometida. Um lembrete severo de que líderes espirituais também respondem por sua obediência exata.",
      pergunta: "Tenho tratado a raiva momentânea como algo sem consequência na minha vida espiritual?"
    },
    "Números 21": {
      texto: "Depois de nova reclamação, serpentes venenosas atacam o povo, e Deus instrui Moisés a erguer uma serpente de bronze — quem olhasse para ela viveria. Jesus mesmo usará essa imagem para explicar Sua própria crucificação: olhar para Ele, e não fazer nada além disso, traz vida.",
      pergunta: "Tenho tentado “resolver” meu pecado por mim mesmo, em vez de simplesmente olhar para Cristo?"
    },
    "Números 22": {
      texto: "Balaão, profeta pagão contratado para amaldiçoar Israel, é impedido por um anjo que nem ele consegue ver — mas sua jumenta vê, e fala. Deus usa até um animal para deter um profeta relutante em fazer o certo. Nada escapa do controle Dele, nem contratos hostis contra Seu povo.",
      pergunta: "Confio que Deus pode intervir mesmo quando não vejo nenhum obstáculo visível no meu caminho?"
    },
    "Números 23": {
      texto: "Contratado para amaldiçoar, Balaão só consegue abençoar: “como amaldiçoarei a quem Deus não amaldiçoou?”. A boca dele estava sob o controle de Deus, não do rei que o pagava. Nenhuma intenção humana hostil consegue reverter o que Deus decidiu abençoar.",
      pergunta: "Já temi que a hostilidade de alguém pudesse anular uma bênção que Deus já decidiu me dar?"
    },
    "Números 24": {
      texto: "Balaão profetiza involuntariamente sobre a grandeza futura de Israel, incluindo uma referência distante ao Messias: “uma estrela procederá de Jacó”. Mesmo um profeta pago para o mal acaba sendo instrumento involuntário da verdade de Deus.",
      pergunta: "Já vi Deus usar uma situação ou pessoa inesperada para revelar algo verdadeiro na minha vida?"
    },
    "Números 25": {
      texto: "O povo se envolve em idolatria e imoralidade com mulheres moabitas, e uma praga mata milhares. Fineias age com zelo drástico para deter o mal, e Deus elogia sua atitude com uma aliança de paz. É um capítulo difícil, que mostra o quanto a idolatria custava caro em Israel.",
      pergunta: "Tenho tratado o compromisso com Deus como algo sério, ou negociável diante de tentação?"
    },
    "Números 26": {
      texto: "Um segundo censo, décadas depois do primeiro — a geração incrédula já havia morrido no deserto, e uma nova geração se prepara para entrar na terra. O texto marca a passagem do tempo e da fidelidade de Deus mesmo através da disciplina e da espera.",
      pergunta: "Confio que Deus continua trabalhando mesmo em períodos longos que parecem “tempo perdido”?"
    },
    "Números 27": {
      texto: "As filhas de Zelofeade pedem herança, já que o pai morrera sem filhos homens, e Deus valida o pedido delas, ajustando a lei da herança. Deus ouve pedidos de justiça, inclusive de quem a cultura da época normalmente ignoraria.",
      pergunta: "Tenho levado a Deus pedidos de justiça que pareciam grandes demais ou impossíveis?"
    },
    "Números 28": {
      texto: "Um calendário detalhado de ofertas diárias, semanais e mensais — a adoração organizada em ritmo constante, não apenas em momentos espontâneos de emoção. Deus estabelece disciplina regular como parte central da vida com Ele.",
      pergunta: "Minha vida com Deus tem ritmo constante, ou só reajo em momentos de emoção forte?"
    },
    "Números 29": {
      texto: "As festas anuais — trombetas, expiação, tabernáculos — pontuavam o calendário inteiro de Israel com lembretes de quem Deus é e o que Ele fez. Um povo inteiro organizando o tempo em torno da memória e da adoração a Deus.",
      pergunta: "Meu calendário tem algum ritmo dedicado a lembrar e adorar a Deus?"
    },
    "Números 30": {
      texto: "Leis sobre votos e promessas — o texto trata compromissos verbais com Deus como algo sério, que não deve ser feito levianamente. Palavras diante de Deus carregam peso; não são apenas intenção passageira.",
      pergunta: "Tenho cumprido as promessas que fiz a Deus, ou as tratei como palavras leves?"
    },
    "Números 31": {
      texto: "A guerra contra Midiã, motivada pela sedução idolátrica do capítulo 25, é conduzida com instruções específicas de Deus, incluindo a purificação dos soldados depois da batalha. Mesmo em contexto de guerra antiga, a pureza diante de Deus continuava sendo prioridade.",
      pergunta: "Tenho buscado pureza mesmo nos contextos mais duros e conturbados da minha vida?"
    },
    "Números 32": {
      texto: "As tribos de Rúben e Gade pedem para se estabelecer antes do Jordão, e Moisés inicialmente suspeita de covardia — até elas se comprometerem a lutar junto das outras tribos primeiro. Boas intenções pessoais precisam ser acompanhadas de compromisso real com a comunidade.",
      pergunta: "Tenho cumprido minha parte com a comunidade de fé, mesmo quando meus interesses pessoais já foram resolvidos?"
    },
    "Números 33": {
      texto: "Um resumo detalhado de todas as paradas da jornada no deserto — quarenta anos reduzidos a uma lista de lugares. Cada parada, mesmo as difíceis, fez parte do caminho até a promessa. Nada da jornada foi desperdiçado ou esquecido por Deus.",
      pergunta: "Consigo olhar para as “paradas difíceis” da minha própria jornada como parte do caminho, não desvio dele?"
    },
    "Números 34": {
      texto: "As fronteiras exatas da terra prometida são delineadas com precisão — Deus não dá uma promessa vaga, dá limites concretos e claros. A fidelidade Dele se expressa em especificidade, não em generalidades soltas.",
      pergunta: "Tenho tratado as promessas de Deus como algo vago, quando Ele costuma ser específico?"
    },
    "Números 35": {
      texto: "Deus institui cidades de refúgio, onde quem matasse alguém acidentalmente poderia se abrigar da vingança até um julgamento justo. Mesmo numa sociedade antiga, Deus protegia contra justiça precipitada, distinguindo acidente de assassinato deliberado.",
      pergunta: "Tenho sido justo(a) ao julgar as intenções de outra pessoa, ou precipitado(a) demais?"
    },
    "Números 36": {
      texto: "O livro termina resolvendo um detalhe legal sobre o casamento das filhas de Zelofeade, garantindo que a herança da tribo permanecesse intacta. Um final aparentemente burocrático, mas que mostra Deus cuidando até dos detalhes administrativos da vida do Seu povo.",
      pergunta: "Confio que Deus se importa até com os detalhes “pequenos” e práticos da minha vida?"
    },
    "Deuteronômio 1": {
      texto: "Moisés relembra a jornada desde o Sinai, incluindo o fracasso dos espias e a incredulidade que custou quarenta anos no deserto. Repassar a história não é nostalgia vazia — é preparar o coração da nova geração para não repetir o mesmo erro dos pais.",
      pergunta: "Tenho aprendido com os erros do passado, ou corro risco de repeti-los?"
    },
    "Deuteronômio 2": {
      texto: "Deus instrui Israel a não provocar Edom, Moabe e Amom, porque Ele já havia dado terra a esses povos também. A soberania de Deus sobre as nações não se limita a Israel — Ele governa a história de todos os povos, mesmo os que não fazem parte da aliança.",
      pergunta: "Reconheço que Deus está no controle mesmo de nações e situações fora do meu ambiente de fé?"
    },
    "Deuteronômio 3": {
      texto: "Moisés relembra as vitórias contra Basã e pede a Deus, mais uma vez, para entrar na terra prometida — e o pedido é negado, com a ordem de subir ao monte apenas para ver a terra à distância. Mesmo grandes líderes enfrentam limites que Deus não remove, apesar da súplica sincera.",
      pergunta: "Como reajo quando Deus não muda algo que peço insistentemente?"
    },
    "Deuteronômio 4": {
      texto: "Moisés adverte contra fazer qualquer imagem esculpida de Deus, porque no Horebe o povo só ouviu uma voz, não viu forma alguma. E promete: “se dali buscares ao Senhor teu Deus, o acharás, se o buscares de todo o teu coração”. Buscar de coração inteiro sempre encontra resposta.",
      pergunta: "Tenho buscado a Deus de todo o coração, ou de forma superficial?"
    },
    "Deuteronômio 5": {
      texto: "Os Dez Mandamentos são repetidos à nova geração, com Moisés lembrando que a aliança não foi só com os pais no Horebe, mas “conosco, todos nós, os que hoje aqui estamos vivos”. A aliança de Deus atravessa gerações — não é história antiga, é presente vivo.",
      pergunta: "Vivo a fé como herança viva, ou como história distante que não me toca de verdade?"
    },
    "Deuteronômio 6": {
      texto: "O “Shemá” — “ouve, Israel, o Senhor nosso Deus é o único Senhor” — se torna o centro espiritual de Israel, seguido da ordem de ensinar isso aos filhos “sentado em tua casa, andando pelo caminho, ao deitar-te e ao levantar-te”. A fé não é evento semanal, é impregnada no cotidiano inteiro.",
      pergunta: "Tenho ensinado ou vivido minha fé nos momentos comuns do dia, não só nos religiosos?"
    },
    "Deuteronômio 7": {
      texto: "Deus explica por que escolheu Israel: não por serem o povo maior ou melhor, mas “porque o Senhor vos amou”. A eleição não se baseou em mérito — foi puro amor voluntário de Deus. Isso desmonta qualquer orgulho espiritual antes mesmo de começar.",
      pergunta: "Tenho tratado o amor de Deus por mim como mérito próprio, ou como puro dom?"
    },
    "Deuteronômio 8": {
      texto: "“Não te esqueças do Senhor teu Deus” — o aviso se repete porque a fartura costuma apagar a memória da dependência. Moisés lembra que o deserto humilhou o povo de propósito, “para saberem que o homem não viverá só de pão”. A escassez às vezes ensina o que a abundância esconde.",
      pergunta: "A prosperidade tem me aproximado de Deus, ou me feito esquecê-Lo?"
    },
    "Deuteronômio 9": {
      texto: "Moisés é claro: a terra não seria dada por justiça própria de Israel, mas pela maldade das nações anteriores e pela fidelidade de Deus à promessa aos patriarcas — “não é por tua justiça... porque és povo de dura cerviz”. Um lembrete direto contra qualquer orgulho de merecimento.",
      pergunta: "Tenho me achado merecedor(a) de bênçãos que, na verdade, são pura graça?"
    },
    "Deuteronômio 10": {
      texto: "Depois de tudo, Moisés resume o que Deus pede: “que temas ao Senhor teu Deus, que andes em todos os Seus caminhos, e que O ames”. E acrescenta: “circuncidai o prepúcio do vosso coração” — o ritual externo sempre apontava para uma mudança interna real.",
      pergunta: "Minha religiosidade externa corresponde a uma mudança real de coração?"
    },
    "Deuteronômio 11": {
      texto: "Moisés contrasta o Egito, irrigado por esforço humano, com a terra prometida, que “bebe da chuva do céu” — dependência direta de Deus, não de sistema próprio de irrigação. A vida na promessa exigiria fé contínua, não autossuficiência.",
      pergunta: "Tenho preferido depender dos meus próprios sistemas em vez de confiar em Deus diretamente?"
    },
    "Deuteronômio 12": {
      texto: "Deus instrui a destruição dos lugares de adoração pagã e o estabelecimento de um único local de adoração legítima — não porque o lugar importava mais que o coração, mas porque a unidade e a pureza da adoração precisavam de limites claros.",
      pergunta: "Tenho misturado práticas contrárias à fé com minha adoração a Deus, achando que “não faz diferença”?"
    },
    "Deuteronômio 13": {
      texto: "Um alerta sério: mesmo que um profeta faça sinal verdadeiro, se ele conduzir à idolatria, não deve ser seguido — “o Senhor vosso Deus vos experimenta, para saber se O amais”. Sinais impressionantes não substituem fidelidade à revelação já dada.",
      pergunta: "Tenho testado ensinamentos “impressionantes” pela Palavra, ou só pela emoção que provocam?"
    },
    "Deuteronômio 14": {
      texto: "Leis alimentares e o lembrete de dizimar “para que aprendas a temer ao Senhor teu Deus todos os dias”. Práticas repetidas de disciplina física e financeira treinavam o povo para uma reverência constante, não ocasional.",
      pergunta: "Minhas disciplinas práticas (finanças, hábitos) refletem reverência a Deus?"
    },
    "Deuteronômio 15": {
      texto: "A cada sete anos, dívidas deveriam ser perdoadas e escravos libertados generosamente — “não te será isso pesado aos teus olhos... porque por isso te abençoará o Senhor”. Generosidade periódica e estrutural era mandamento, não sugestão opcional.",
      pergunta: "Tenho praticado generosidade estrutural, ou só quando é conveniente?"
    },
    "Deuteronômio 16": {
      texto: "As três festas anuais — Páscoa, Semanas e Tabernáculos — reuniam o povo para celebrar coletivamente o que Deus fizera. A alegria diante de Deus era mandamento explícito: “te alegrarás perante o Senhor teu Deus”.",
      pergunta: "Minha vida de fé tem espaço real para alegria celebrada, não só obrigação cumprida?"
    },
    "Deuteronômio 17": {
      texto: "Instruções para um futuro rei incluem um limite notável: ele deveria copiar a Lei com as próprias mãos e lê-la todos os dias de sua vida, “para que se não eleve o seu coração acima de seus irmãos”. Até o poder máximo humano deveria se submeter à Palavra escrita.",
      pergunta: "Tenho permitido que a Palavra molde minhas decisões, mesmo quando tenho autoridade para decidir sozinho(a)?"
    },
    "Deuteronômio 18": {
      texto: "Deus promete levantar um profeta “dentre seus irmãos, semelhante a mim” — referência que os primeiros cristãos entenderiam como apontando para Jesus. E proíbe práticas ocultistas comuns entre as nações vizinhas, porque o povo de Deus não precisava de adivinhação: tinha a própria voz Dele.",
      pergunta: "Tenho buscado direção em fontes que não vêm de Deus, quando Ele já fala através da Sua Palavra?"
    },
    "Deuteronômio 19": {
      texto: "As cidades de refúgio são detalhadas novamente, junto com a exigência de duas ou três testemunhas para condenar alguém — proteção contra acusação falsa e julgamento precipitado. A justiça de Deus exigia processo cuidadoso, não reação impulsiva.",
      pergunta: "Tenho julgado alguém rápido demais, sem ouvir toda a história?"
    },
    "Deuteronômio 20": {
      texto: "Leis de guerra incluem uma cláusula surpreendente: quem tivesse construído casa nova, plantado vinha nova ou se casado recentemente, era dispensado do combate. Mesmo em contexto de guerra, Deus considerava a vida e as alegrias pessoais das pessoas.",
      pergunta: "Tenho enxergado Deus como alguém que também se importa com minhas alegrias pessoais, não só meus deveres?"
    },
    "Deuteronômio 21": {
      texto: "Leis sobre herança, filhos rebeldes e um homem enforcado em madeiro — “maldito por Deus é aquele que é pendurado no madeiro” — versículo que Paulo aplicará diretamente à cruz de Cristo, que levou sobre si a maldição que não era Sua.",
      pergunta: "Reconheço o peso do que Jesus carregou por mim ao morrer amaldiçoado em meu lugar?"
    },
    "Deuteronômio 22": {
      texto: "Leis diversas sobre cuidado com o próximo, incluindo devolver um animal perdido do vizinho mesmo sem ser pedido. A ética bíblica não se limitava a “não prejudicar” — incluía ativamente cuidar do bem do outro, mesmo sem ninguém cobrar.",
      pergunta: "Tenho ajudado ativamente, ou só evitado prejudicar quando é conveniente?"
    },
    "Deuteronômio 23": {
      texto: "Leis sobre pureza no acampamento durante a guerra, incluindo instrução de higiene — porque “o Senhor teu Deus anda no meio do teu arraial”. A consciência da presença de Deus deveria moldar até os detalhes mais práticos e íntimos da vida.",
      pergunta: "Vivo consciente da presença de Deus até nos detalhes mais íntimos da minha rotina?"
    },
    "Deuteronômio 24": {
      texto: "Leis sobre divórcio, penhor e o mandamento repetido de não oprimir o pobre, o órfão e a viúva — “lembra-te de que foste servo no Egito”. A memória da própria fragilidade deveria produzir compaixão prática constante pelos vulneráveis.",
      pergunta: "Tenho tratado com compaixão prática quem está em posição mais frágil que a minha?"
    },
    "Deuteronômio 25": {
      texto: "Entre leis diversas, o mandamento de não vendar o boi enquanto debulha o grão — deixando o animal comer do próprio trabalho. Se até o cuidado com animais de trabalho importava a Deus, quanto mais o cuidado justo com pessoas.",
      pergunta: "Tenho sido justo(a) com quem trabalha para mim ou comigo?"
    },
    "Deuteronômio 26": {
      texto: "Ao trazer as primícias da colheita, o israelita deveria recitar em voz alta toda a história da libertação — de peregrino errante a herdeiro da terra. Lembrar em voz alta a própria história de graça mantinha viva a gratidão de geração em geração.",
      pergunta: "Tenho contado a história do que Deus já fez por mim, para mim mesmo(a) e para outros?"
    },
    "Deuteronômio 27": {
      texto: "O povo é instruído a erguer pedras com a Lei escrita ao entrar na terra, e a proclamar bênçãos e maldições dos montes Gerizim e Ebal. A escolha entre obediência e desobediência seria pública, visível, sem meio-termo confortável.",
      pergunta: "Tenho tratado minha relação com Deus como algo privado demais, evitando compromisso público?"
    },
    "Deuteronômio 28": {
      texto: "Um capítulo longo de bênçãos condicionadas à obediência e maldições severas à desobediência. O texto não promete prosperidade automática — descreve consequências reais de uma aliança que exige fidelidade genuína, não mágica de fórmula.",
      pergunta: "Tenho tratado a fé como fórmula automática, ou como aliança que exige fidelidade real?"
    },
    "Deuteronômio 29": {
      texto: "Moisés renova a aliança com a nova geração, reconhecendo abertamente: “não vos tem dado o Senhor coração para entender... até o dia de hoje”. Mesmo testemunhas diretas dos milagres do Egito ainda precisavam que Deus abrisse seus corações para compreender de verdade.",
      pergunta: "Tenho pedido a Deus que abra meu entendimento, e não só minha experiência religiosa?"
    },
    "Deuteronômio 30": {
      texto: "Depois de tantas advertências, vem uma promessa impressionante: mesmo após o exílio pela desobediência, se o povo voltasse a Deus de coração, Ele os restauraria. E a Palavra é descrita como algo próximo, “na tua boca e no teu coração”, não distante ou inalcançável.",
      pergunta: "Tenho tratado a volta a Deus como algo distante e difícil, quando Ele a torna acessível?"
    },
    "Deuteronômio 31": {
      texto: "Moisés, aos 120 anos, transfere a liderança a Josué publicamente, encorajando-o: “sê forte e corajoso... o Senhor teu Deus é contigo”. Passar o bastão com bênção clara, sem se apegar ao próprio protagonismo, é um ato de liderança madura e humilde.",
      pergunta: "Tenho sabido “passar o bastão” com generosidade, sem me apegar ao protagonismo?"
    },
    "Deuteronômio 32": {
      texto: "O “Cântico de Moisés” celebra o caráter de Deus — “a Rocha, cuja obra é perfeita” — e ao mesmo tempo lamenta a futura infidelidade do povo. Louvor sincero pode conter, ao mesmo tempo, celebração e lamento honesto sobre a própria fraqueza.",
      pergunta: "Minha adoração tem espaço para celebrar Deus e lamentar minhas próprias falhas ao mesmo tempo?"
    },
    "Deuteronômio 33": {
      texto: "Antes de morrer, Moisés abençoa cada tribo individualmente, uma última demonstração de amor pastoral por um povo que ele liderou por quarenta anos difíceis, apesar de nunca poder entrar na terra prometida com eles.",
      pergunta: "Tenho servido e abençoado outros mesmo quando não vejo o fruto completo do meu próprio esforço?"
    },
    "Deuteronômio 34": {
      texto: "Moisés vê a terra prometida do alto do monte Nebo e morre ali, sem entrar nela — “nunca mais se levantou em Israel profeta como Moisés, a quem o Senhor conhecesse face a face”. Um final agridoce: fidelidade completa até o fim, sem ver o cumprimento total da promessa nesta vida.",
      pergunta: "Consigo confiar em Deus mesmo sabendo que talvez não veja o cumprimento completo de tudo que espero?"
    },
    "Josué 1": {
      texto: "Depois da morte de Moisés, Deus se dirige a Josué diretamente: “sê forte e corajoso” — repetido três vezes no mesmo capítulo. A coragem exigida não vinha da capacidade de Josué, mas da promessa: “o Senhor teu Deus é contigo por onde quer que andares”.",
      pergunta: "Que tarefa exige coragem de mim agora, sabendo que Deus promete estar comigo nela?"
    },
    "Josué 2": {
      texto: "Raabe, prostituta em Jericó, esconde os espias israelitas e declara fé em Deus antes mesmo de conhecê-Lo pessoalmente: “o Senhor, vosso Deus, é Deus em cima no céu e embaixo na terra”. Ela entra depois na genealogia de Jesus — a graça alcança quem menos se espera.",
      pergunta: "Tenho subestimado a capacidade de Deus alcançar alguém que parece distante demais da fé?"
    },
    "Josué 3": {
      texto: "O povo atravessa o Jordão em cheia total quando os sacerdotes pisam na água carregando a arca — o rio só se abre depois do passo de fé, não antes. Deus muitas vezes espera o movimento de obediência antes de manifestar o milagre visível.",
      pergunta: "Tenho esperado ver o milagre antes de dar o passo, quando Deus pede o passo primeiro?"
    },
    "Josué 4": {
      texto: "Doze pedras são erguidas como memorial da travessia, “para que sirva de sinal entre vós; e quando vossos filhos perguntarem... lhes direis”. Memoriais físicos existiam para que a memória da fidelidade de Deus não se perdesse com o tempo.",
      pergunta: "Tenho memoriais — físicos ou de memória — que lembram meus filhos ou a mim mesmo(a) da fidelidade de Deus?"
    },
    "Josué 5": {
      texto: "Antes da primeira batalha, todo o povo é circuncidado, cumprindo um mandamento adiado durante o deserto. E Josué encontra o “príncipe do exército do Senhor”, diante de quem se prostra — a batalha pertencia primeiro a Deus, e a obediência vinha antes da estratégia militar.",
      pergunta: "Tenho colocado a obediência a Deus antes da minha própria estratégia para resolver algo?"
    },
    "Josué 6": {
      texto: "A conquista de Jericó começa com uma ordem estranha: marchar em silêncio ao redor da cidade por sete dias, sem estratégia militar convencional nenhuma. A vitória viria por obediência a um método que não fazia sentido humano — só fé.",
      pergunta: "Já obedeci a algo que Deus pediu mesmo sem entender completamente a lógica por trás?"
    },
    "Josué 7": {
      texto: "Acã esconde objetos roubados de Jericó, contrariando ordem direta de Deus, e Israel é derrotado inesperadamente em Ai por causa disso. Um pecado escondido de um só homem afetou toda a comunidade — desobediência raramente fica isolada.",
      pergunta: "Tenho pensado que meu pecado “privado” não afeta ninguém além de mim?"
    },
    "Josué 8": {
      texto: "Depois de lidar com o pecado de Acã, Israel volta a Ai com estratégia militar cuidadosa e vence. Deus não removeu a necessidade de sabedoria prática — a fé e o planejamento sábio caminharam juntos na vitória seguinte.",
      pergunta: "Tenho combinado fé genuína com sabedoria prática, ou dependido só de uma das duas?"
    },
    "Josué 9": {
      texto: "Os gibeonitas enganam Israel fingindo vir de terra distante, e Josué faz aliança sem consultar a Deus primeiro. O erro custa consequências futuras — decisões importantes tomadas por aparência, sem buscar Deus, trazem riscos reais.",
      pergunta: "Tenho tomado decisões importantes rápido demais, sem antes buscar Deus?"
    },
    "Josué 10": {
      texto: "Numa batalha decisiva, Josué pede que o sol pare — e Deus atende, “um dia como este nunca houve antes nem depois”. Deus interveio na própria ordem da criação para garantir a vitória do Seu povo naquele momento específico.",
      pergunta: "Confio que Deus pode agir de formas extraordinárias, além do que considero “normal”?"
    },
    "Josué 11": {
      texto: "As campanhas continuam pelo norte de Canaã, e o texto resume: “Josué tomou toda esta terra... conforme tudo o que o Senhor tinha dito a Moisés”. A conquista se cumpria exatamente conforme a promessa antiga, sem desvio.",
      pergunta: "Consigo enxergar promessas antigas de Deus se cumprindo na minha vida hoje?"
    },
    "Josué 12": {
      texto: "Uma lista extensa de reis derrotados — trinta e um ao todo. Pode parecer só uma lista, mas é um registro de que cada promessa de vitória feita antes se cumpriu, uma por uma, nominalmente, sem exceção.",
      pergunta: "Consigo listar, como este capítulo, as vitórias específicas que Deus já me deu?"
    },
    "Josué 13": {
      texto: "Mesmo já idoso, Josué recebe instrução para continuar dividindo a terra que ainda restava a conquistar. A tarefa não terminou com a idade avançada — Deus continuava chamando à obra mesmo quando o corpo já cansava.",
      pergunta: "Tenho usado a idade ou o cansaço como desculpa para parar de servir a Deus?"
    },
    "Josué 14": {
      texto: "Calebe, aos oitenta e cinco anos, pede a mesma montanha difícil que espiara quarenta e cinco anos antes: “ainda hoje estou tão forte como no dia em que Moisés me enviou”. Sua fé permaneceu firme por décadas, sem desgaste com o tempo.",
      pergunta: "Minha fé de hoje é tão firme quanto era em outro momento marcante da minha vida?"
    },
    "Josué 15": {
      texto: "A herança de Judá é descrita em detalhe extenso, cidade por cidade, fronteira por fronteira. Deus cumpria a promessa com precisão geográfica real, não com generalidades vagas sobre “bênção”.",
      pergunta: "Tenho esperado bênçãos vagas de Deus, quando Ele costuma agir com detalhes concretos?"
    },
    "Josué 16": {
      texto: "A herança de Efraim é registrada, mas o texto nota que eles não expulsaram completamente os cananeus de Gezer, deixando-os como trabalho forçado. Uma obediência parcial que geraria problemas mais adiante na história de Israel.",
      pergunta: "Que “obediência parcial” eu tenho deixado de completar, achando que já é suficiente?"
    },
    "Josué 17": {
      texto: "As filhas de Zelofeade reaparecem, agora recebendo de fato a herança que a Lei havia garantido a elas em Números. A promessa feita décadas antes finalmente se cumpre na prática — Deus não esquece compromissos, mesmo que demorem.",
      pergunta: "Tenho uma promessa antiga de Deus que ainda espero ver cumprida na prática?"
    },
    "Josué 18": {
      texto: "Sete tribos ainda não haviam tomado posse da terra já conquistada, e Josué os repreende: “até quando sereis remissos?”. A terra já pertencia a eles por promessa — faltava apenas ocupá-la de fato com ação.",
      pergunta: "Tenho demorado a “ocupar” algo que Deus já me deu, por acomodação ou medo?"
    },
    "Josué 19": {
      texto: "A divisão da terra continua até a última tribo, Simeão, recebendo território dentro da porção de Judá. Cada tribo, sem exceção, recebeu sua parte — a fidelidade de Deus alcançou todos, do maior ao menor grupo.",
      pergunta: "Tenho confiado que Deus também tem uma “porção” específica reservada para mim?"
    },
    "Josué 20": {
      texto: "As seis cidades de refúgio são finalmente designadas dentro da terra, cumprindo a instrução dada ainda no deserto. Proteção contra injustiça e vingança precipitada fazia parte estrutural da sociedade que Deus estabelecia.",
      pergunta: "Tenho oferecido “refúgio” — paciência, espaço para explicação — a quem errou sem intenção?"
    },
    "Josué 21": {
      texto: "Os levitas recebem cidades espalhadas por todas as tribos, já que não teriam território próprio — “nenhuma coisa faltou de todo o bem que o Senhor falara à casa de Israel: tudo se cumpriu”. Uma declaração completa de fidelidade cumprida.",
      pergunta: "Tenho parado para reconhecer quando Deus cumpre completamente o que prometeu?"
    },
    "Josué 22": {
      texto: "Um mal-entendido quase gera guerra civil quando duas tribos e meia constroem um altar do outro lado do Jordão — mas o conflito se resolve com diálogo honesto em vez de reação precipitada. A comunicação evitou uma tragédia desnecessária.",
      pergunta: "Tenho buscado esclarecer mal-entendidos com diálogo, ou reagido antes de entender a real intenção?"
    },
    "Josué 23": {
      texto: "Já velho, Josué reúne o povo e adverte: “não vos mistureis com estas nações... mas apegai-vos ao Senhor vosso Deus”. Ele reconhece que nenhuma promessa de Deus falhou, e alerta que a fidelidade futura dependia da escolha contínua deles.",
      pergunta: "Tenho me apegado a Deus de forma contínua, ou só em momentos de crise?"
    },
    "Josué 24": {
      texto: "No discurso final, Josué desafia: “escolhei hoje a quem sirvais”, e declara sua própria decisão: “eu e a minha casa serviremos ao Senhor”. O livro termina com uma escolha pessoal e familiar clara, sem ambiguidade nem meio-termo.",
      pergunta: "Se eu declarasse hoje, como Josué, a quem sirvo — a resposta seria clara ou ambígua?"
    },
    "Juízes 1": {
      texto: "Depois da morte de Josué, cada tribo tenta conquistar sua própria porção, com sucesso parcial — muitos cananeus permanecem na terra porque não foram completamente expulsos. O padrão de obediência incompleta que começa aqui vai custar caro ao longo de todo o livro.",
      pergunta: "Tenho deixado “inimigos” conhecidos permanecerem na minha vida por comodismo, achando que já bastou o esforço até aqui?"
    },
    "Juízes 2": {
      texto: "Um anjo confronta o povo por fazerem alianças com os cananeus em vez de destruir seus altares, e anuncia que essas nações se tornariam “espinhos nos vossos lados”. O capítulo resume o ciclo que definirá todo o livro: pecado, opressão, clamor, libertação — repetido continuamente.",
      pergunta: "Reconheço padrões repetidos de pecado na minha vida que eu deveria confrontar de vez, não só suportar?"
    },
    "Juízes 3": {
      texto: "Deus levanta Otniel, e depois Eúde — que engana o rei opressor Eglom com uma coragem quase cômica — para libertar o povo. Cada libertador é imperfeito e inesperado, mas Deus os usa mesmo assim para responder ao clamor do Seu povo.",
      pergunta: "Tenho subestimado como Deus pode usar pessoas ou métodos inesperados para responder minha oração?"
    },
    "Juízes 4": {
      texto: "Débora, profetisa e juíza, lidera Israel numa época em que “não havia homem” disposto a liderar a batalha — Baraque só vai se ela for junto. A vitória final vem, de forma irônica, pela mão de outra mulher, Jael. Deus levanta quem está disponível, não necessariamente quem se esperaria.",
      pergunta: "Tenho me colocado disponível para o que Deus pede, mesmo quando não é o papel “esperado” para mim?"
    },
    "Juízes 5": {
      texto: "O Cântico de Débora celebra a vitória com detalhes vívidos, contrastando as tribos que ajudaram com as que ficaram de fora confortavelmente — “Meroz seja amaldiçoada... porque não vieram em socorro do Senhor”. Omissão diante da necessidade comum também tem peso.",
      pergunta: "Tenho ficado de fora, confortável, quando poderia ter ajudado em algo importante?"
    },
    "Juízes 6": {
      texto: "Gideão se esconde num lagar debulhando trigo com medo dos midianitas quando o anjo do Senhor o chama de “homem valente”. Gideão duvida, pede sinais repetidos (o velo de lã), e Deus, pacientemente, responde a cada pedido de confirmação.",
      pergunta: "Tenho pedido a Deus confirmações repetidas, e Ele tem sido paciente comigo nisso?"
    },
    "Juízes 7": {
      texto: "Deus reduz o exército de Gideão de 32 mil para apenas 300 homens, explicando: “para que Israel não se glorie contra mim, dizendo: a minha mão me livrou”. A vitória viria de um jeito tão desproporcional que ninguém pudesse atribuí-la à própria força.",
      pergunta: "Tenho atribuído a mim mesmo(a) vitórias que, na verdade, só Deus poderia ter dado?"
    },
    "Juízes 8": {
      texto: "Depois da vitória, o povo pede que Gideão se torne rei, e ele recusa corretamente: “o Senhor é quem dominará sobre vós”. Mas logo depois faz um efod de ouro que se torna armadilha idolátrica para sua própria família. Um final que mistura humildade genuína com uma falha grave.",
      pergunta: "Consigo reconhecer que até depois de uma vitória espiritual, ainda posso cair em erro?"
    },
    "Juízes 9": {
      texto: "Abimeleque, filho de Gideão, mata setenta irmãos para tomar o poder por ambição pura — sem chamado de Deus, só desejo de controle. O capítulo é um retrato sombrio de liderança buscada por vaidade, terminando em morte violenta e caos.",
      pergunta: "Tenho buscado posição ou reconhecimento por ambição própria, sem chamado real de Deus?"
    },
    "Juízes 10": {
      texto: "O ciclo se repete: o povo abandona Deus, serve a outros deuses, sofre opressão, clama. Desta vez, Deus responde com dureza inicial — “ide, e clamai aos deuses que escolhestes” — antes de, movido de compaixão, ainda assim intervir. Um retrato de paciência que não é ilimitadamente passiva.",
      pergunta: "Já tratei o socorro de Deus como automático, sem considerar a seriedade da minha infidelidade repetida?"
    },
    "Juízes 11": {
      texto: "Jefté, filho rejeitado por sua origem, é chamado de volta quando o povo precisa dele. Ele faz um voto precipitado e trágico antes da batalha, cujas consequências o texto narra com pesar, sem aprovar a decisão impulsiva.",
      pergunta: "Já fiz um voto ou promessa precipitada a Deus sem pensar nas consequências reais?"
    },
    "Juízes 12": {
      texto: "Um conflito interno entre Efraim e os gileaditas termina em guerra civil sangrenta, identificada por um teste de pronúncia da palavra “Shibolete”. Divisões internas dentro do próprio povo de Deus se mostram tão destrutivas quanto qualquer inimigo externo.",
      pergunta: "Tenho alimentado divisão desnecessária dentro da minha própria comunidade de fé?"
    },
    "Juízes 13": {
      texto: "Um anjo anuncia a Manoá e sua esposa o nascimento de Sansão, consagrado como nazireu desde o ventre. Mesmo antes de nascer, a vida dele já carregava propósito específico de Deus — um lembrete de que o chamado pode preceder até a consciência da própria pessoa.",
      pergunta: "Reconheço que Deus pode ter propósitos para minha vida que antecedem minha própria compreensão deles?"
    },
    "Juízes 14": {
      texto: "Sansão insiste em casar com uma filisteia contra o conselho dos pais, movido por impulso e não por sabedoria — “ela agrada aos meus olhos”. O padrão de decisões guiadas por desejo imediato, não discernimento, começa a definir toda a trajetória trágica dele.",
      pergunta: "Tenho tomado decisões importantes guiado(a) só pelo que “agrada aos meus olhos” no momento?"
    },
    "Juízes 15": {
      texto: "Sansão realiza façanhas de força extraordinária contra os filisteus, sempre em resposta a provocações pessoais, não como líder estratégico do povo. Seu dom era real, mas usado de forma reativa e individual, não como serviço maduro à nação.",
      pergunta: "Tenho usado meus dons de forma reativa e pessoal, em vez de servir com maturidade a um propósito maior?"
    },
    "Juízes 16": {
      texto: "Dalila insiste até Sansão revelar o segredo da própria força, e ele perde tudo — cabelo, força, visão, liberdade — por não conseguir dizer não a um padrão repetido de fraqueza. No fim, cego e humilhado, ele clama a Deus uma última vez, e é ouvido.",
      pergunta: "Existe um padrão repetido de fraqueza que tenho ignorado até perder algo essencial por causa dele?"
    },
    "Juízes 17": {
      texto: "Mica rouba prata da própria mãe, devolve, e usa parte dela para fazer ídolos — misturando adoração a Deus com idolatria doméstica, contratando até um levita para “abençoar” esse arranjo torto. O texto resume a época: “cada um fazia o que parecia direito aos seus próprios olhos”.",
      pergunta: "Tenho misturado fé genuína com práticas que, no fundo, contradizem o que Deus realmente pede?"
    },
    "Juízes 18": {
      texto: "A tribo de Dã rouba os ídolos de Mica e o próprio levita, estabelecendo idolatria formal em seu território. O caos moral e espiritual do capítulo anterior se institucionaliza — o que era erro pessoal vira prática de uma tribo inteira.",
      pergunta: "Tenho permitido que um erro pessoal meu se torne padrão aceito ao meu redor?"
    },
    "Juízes 19": {
      texto: "Um dos capítulos mais sombrios da Bíblia: um levita entrega sua concubina a uma multidão violenta em Gibeá, resultando em morte brutal. O texto não celebra nada disso — narra com honestidade crua o quanto a sociedade havia se corrompido sem liderança fiel a Deus.",
      pergunta: "Reconheço que sociedades sem referência a Deus tendem à degradação moral, não ao contrário?"
    },
    "Juízes 20": {
      texto: "As demais tribos se unem para julgar a atrocidade de Gibeá, resultando em guerra civil devastadora contra a tribo de Benjamim. Mesmo a justiça buscada corretamente aqui vem acompanhada de perda enorme — o pecado não resolvido a tempo cobra um preço alto de todos.",
      pergunta: "Tenho adiado lidar com um problema sério, sabendo que quanto mais espera, maior o custo de resolvê-lo?"
    },
    "Juízes 21": {
      texto: "O livro termina em desordem total — a tribo de Benjamim quase desaparece, e soluções improvisadas e violentas tentam reconstruir o que a guerra destruiu. A última frase resume tudo: “cada um fazia o que parecia direito aos seus próprios olhos”. Sem um rei fiel a Deus, tudo se desfaz.",
      pergunta: "O que “parece direito aos meus próprios olhos” pode estar, na verdade, distante do que Deus considera certo?"
    },
    "Rute 1": {
      texto: "Depois de perder marido e os dois filhos, Noemi decide voltar para Belém, e Rute, sua nora moabita, se recusa a abandoná-la: “o teu povo será o meu povo, e o teu Deus, o meu Deus”. Um voto de lealdade extraordinário, feito por alguém sem nenhuma obrigação legal de mantê-lo.",
      pergunta: "Tenho demonstrado lealdade e amor mesmo quando não há obrigação nenhuma me forçando a isso?"
    },
    "Rute 2": {
      texto: "Rute vai catar espigas nos campos para sustentar as duas, e “por acaso” chega à propriedade de Boaz, parente próximo de Noemi. Nada nesse “acaso” era coincidência — a providência de Deus trabalha silenciosamente através de decisões comuns, como escolher em qual campo trabalhar.",
      pergunta: "Consigo reconhecer a mão de Deus em coincidências aparentemente comuns da minha própria vida?"
    },
    "Rute 3": {
      texto: "Seguindo o costume da época, Noemi orienta Rute a pedir a Boaz que exerça seu papel de resgatador (goel) para a família. O gesto de Rute é ousado, mas dentro dos limites de honra e integridade — Boaz reconhece: “sei que és mulher virtuosa”.",
      pergunta: "Tenho agido com ousadia e integridade ao mesmo tempo, sem escolher entre uma coisa e outra?"
    },
    "Rute 4": {
      texto: "Boaz resgata Rute publicamente, casando-se com ela diante das testemunhas da cidade. O filho deles, Obede, se torna avô de Davi — e, gerações depois, ancestral de Jesus. Uma história pessoal de fidelidade comum se revela, no fim, parte da linhagem do Messias.",
      pergunta: "Consigo confiar que atos pequenos e fiéis de hoje podem ter um propósito maior do que imagino agora?"
    },
    "1 Samuel 1": {
      texto: "Ana, estéril e afligida pela rival Penina, ora com tanta angústia que o sacerdote Eli a confunde com bêbada. Ela promete devolver o filho a Deus se Ele a atender, e cumpre a promessa entregando Samuel ainda pequeno. Oração desesperada, respondida por Deus, honrada com fidelidade.",
      pergunta: "Tenho cumprido promessas feitas a Deus nos meus momentos de maior necessidade?"
    },
    "1 Samuel 2": {
      texto: "O cântico de Ana antecipa temas que ecoarão em Maria séculos depois — Deus que humilha o soberbo e exalta o humilde. No mesmo capítulo, os filhos de Eli abusam do sacerdócio sem correção séria do pai, plantando a queda de toda uma linhagem.",
      pergunta: "Tenho corrigido com seriedade erros graves de quem está sob minha responsabilidade?"
    },
    "1 Samuel 3": {
      texto: "Menino ainda, Samuel ouve a voz de Deus à noite e não a reconhece, até Eli perceber e instruí-lo: “fala, Senhor, porque o teu servo ouve”. Uma criança se torna profeta porque estava disposta a ouvir — a idade não impediu o chamado.",
      pergunta: "Tenho ensinado alguém mais jovem a reconhecer a voz de Deus, como Eli fez com Samuel?"
    },
    "1 Samuel 4": {
      texto: "Israel leva a arca da aliança para a batalha como amuleto de sorte, sem arrependimento real, e é derrotada — a arca é capturada, e Eli morre ao saber a notícia. Rituais sagrados sem coração fiel não garantem vitória nenhuma.",
      pergunta: "Tenho tratado símbolos ou rituais religiosos como garantia automática, sem coração realmente voltado a Deus?"
    },
    "1 Samuel 5": {
      texto: "A arca capturada derruba a estátua do deus filisteu Dagom repetidamente e traz pragas sobre as cidades onde é colocada. Mesmo em terreno inimigo, sem exército israelita algum, a presença de Deus continua soberana sobre qualquer ídolo.",
      pergunta: "Confio que Deus continua soberano mesmo em situações onde pareço estar sem nenhum controle?"
    },
    "1 Samuel 6": {
      texto: "Os filisteus, aterrorizados, devolvem a arca com ofertas de reparação, seguindo até um teste com vacas para confirmar que o desastre vinha realmente de Deus. Até pagãos reconheciam mais rápido o poder Dele do que muitas vezes Israel reconhecia.",
      pergunta: "Tenho sido lento(a) para reconhecer a mão de Deus agindo claramente ao meu redor?"
    },
    "1 Samuel 7": {
      texto: "Samuel convoca o povo ao arrependimento genuíno, e Israel derrota os filisteus depois de anos de dominação. Ele ergue uma pedra chamada Ebenézer — “até aqui nos ajudou o Senhor” — um marco físico de gratidão por vitória que só veio depois de arrependimento real.",
      pergunta: "Tenho meu próprio “Ebenézer” — um lembrete concreto de onde Deus me ajudou até aqui?"
    },
    "1 Samuel 8": {
      texto: "Cansado dos filhos corruptos de Samuel, o povo pede um rei “como todas as nações têm”, rejeitando implicitamente o governo direto de Deus. Samuel avisa dos custos reais de um rei humano, mas o povo insiste mesmo assim.",
      pergunta: "Já preferi uma solução “como todo mundo tem” em vez de confiar no jeito que Deus já provia?"
    },
    "1 Samuel 9": {
      texto: "Saul, procurando jumentas perdidas do pai, acaba encontrando Samuel e sendo ungido rei sem nunca ter buscado esse papel. Deus muitas vezes intercepta pessoas no meio de tarefas comuns para revelar um propósito maior que elas nem imaginavam.",
      pergunta: "Já fui surpreendido(a) por um propósito de Deus no meio de uma tarefa completamente comum?"
    },
    "1 Samuel 10": {
      texto: "Ungido em segredo, Saul se esconde entre a bagagem no dia de ser apresentado publicamente como rei — um homem inseguro colocado numa posição de grande responsabilidade. Deus escolhe, mas a insegurança humana ainda precisa ser enfrentada.",
      pergunta: "Tenho deixado a insegurança me impedir de assumir algo que Deus já confirmou pra mim?"
    },
    "1 Samuel 11": {
      texto: "Saul reage com coragem real à ameaça contra Jabes-Gileade, unindo o povo numa vitória convincente — seu primeiro grande teste como rei, e ele o passa bem. O início do reinado mostrava potencial genuíno, antes das falhas que viriam depois.",
      pergunta: "Reconheço que alguém (ou eu mesmo) pode ter um bom começo, mesmo sabendo que o caminho ainda será testado?"
    },
    "1 Samuel 12": {
      texto: "Samuel, já velho, presta contas publicamente de toda sua liderança íntegra, e reforça que a monarquia não isenta o povo de continuar fiel a Deus — “tementes o Senhor, e servi-o fielmente”. Liderança humana nunca substitui a fidelidade pessoal exigida de cada um.",
      pergunta: "Tenho terceirizado minha responsabilidade espiritual para líderes, em vez de buscar Deus pessoalmente?"
    },
    "1 Samuel 13": {
      texto: "Sob pressão, sem Samuel presente na hora combinada, Saul oferece o sacrifício que só o sacerdote deveria oferecer — impaciência disfarçada de necessidade urgente. Samuel chega logo depois e anuncia que o reino seria tirado dele por essa desobediência.",
      pergunta: "Já tomei um atalho desobediente por impaciência, justificando como “necessidade da situação”?"
    },
    "1 Samuel 14": {
      texto: "Jônatas, filho de Saul, ataca sozinho um posto filisteu com fé notável: “nada pode impedir que o Senhor salve, seja com muitos, seja com poucos”. A vitória vem através de coragem baseada em confiança em Deus, não em número de soldados.",
      pergunta: "Tenho deixado a aparente falta de recursos me impedir de agir com fé como Jônatas?"
    },
    "1 Samuel 15": {
      texto: "Deus ordena a Saul destruir totalmente os amalequitas, e Saul poupa o rei e o melhor do gado — desobediência disfarçada de “sacrifício religioso” depois. Samuel responde com uma das frases mais fortes da Escritura: “obedecer é melhor do que sacrificar”.",
      pergunta: "Tenho disfarçado desobediência parcial como se fosse uma forma aceitável de servir a Deus?"
    },
    "1 Samuel 16": {
      texto: "Deus rejeita a aparência impressionante dos irmãos mais velhos de Davi e escolhe o mais novo, um pastor: “o Senhor olha para o coração”. A unção vem antes de qualquer prova pública — Deus vê potencial onde os outros só veem irrelevância.",
      pergunta: "Tenho julgado a mim mesmo(a) ou outros pela aparência, quando Deus olha para o coração?"
    },
    "1 Samuel 17": {
      texto: "Davi, ainda jovem, enfrenta Golias não com armadura emprestada, mas com a mesma confiança que já usara contra leão e urso: “o Senhor... também me livrará da mão deste filisteu”. A fé testada em pequenas batalhas privadas prepara para a grande batalha pública.",
      pergunta: "As batalhas “pequenas” e privadas que já venci com Deus têm me preparado para desafios maiores?"
    },
    "1 Samuel 18": {
      texto: "Saul, tomado de ciúme pelo sucesso e popularidade de Davi, começa a tramar contra ele — mesmo sendo Davi genuinamente leal. A inveja transforma alguém próximo em ameaça imaginária, distorcendo completamente a realidade.",
      pergunta: "Já deixei a inveja distorcer minha percepção sobre alguém que, na verdade, não me ameaça?"
    },
    "1 Samuel 19": {
      texto: "Jônatas intercede corajosamente por Davi diante do próprio pai, e depois ajuda Davi a escapar de uma tentativa direta de assassinato. Uma amizade leal que escolhe a justiça mesmo contra o interesse familiar imediato.",
      pergunta: "Tenho sido leal à justiça mesmo quando isso contraria interesses de quem me é próximo?"
    },
    "1 Samuel 20": {
      texto: "Davi e Jônatas fazem um pacto de aliança e amizade que atravessaria gerações, com Jônatas reconhecendo abertamente que Davi seria rei em seu lugar — sem inveja, apenas lealdade genuína ao propósito de Deus, mesmo custando o próprio trono.",
      pergunta: "Consigo apoiar o sucesso de outra pessoa mesmo quando isso significa abrir mão de algo meu?"
    },
    "1 Samuel 21": {
      texto: "Fugindo, Davi finge loucura diante do rei filisteu Aquis para escapar com vida — um momento de desespero e engano que o próprio Davi lamentaria depois em salmos. Nem todo herói bíblico age com perfeição em cada capítulo.",
      pergunta: "Reconheço que até pessoas de fé genuína têm momentos de desespero que não representam o melhor deles?"
    },
    "1 Samuel 22": {
      texto: "Saul, enfurecido, ordena a matança de sacerdotes inteiros por ajudarem Davi involuntariamente — um retrato de tirania paranoica descontrolada. Davi, escondido numa caverna, começa a reunir os que também estavam angustiados e endividados ao seu redor.",
      pergunta: "Tenho sido refúgio para pessoas angustiadas ao meu redor, como Davi se tornou na caverna?"
    },
    "1 Samuel 23": {
      texto: "Davi consulta a Deus repetidamente antes de agir — “descerei eu?”, “entregar-me-ão?” — em vez de confiar apenas na própria estratégia. Saul o persegue de perto, mas uma intervenção providencial (um ataque filisteu) o desvia bem na hora certa.",
      pergunta: "Tenho consultado a Deus antes de agir, ou decidido primeiro e pedido bênção depois?"
    },
    "1 Samuel 24": {
      texto: "Numa caverna, Davi tem a chance perfeita de matar Saul e recusa, cortando apenas uma parte da veste dele como prova — “o Senhor me guarde de fazer tal coisa ao meu senhor, ao ungido do Senhor”. Poupar um inimigo vulnerável exigiu mais caráter do que atacá-lo.",
      pergunta: "Tenho poupado alguém que estava vulnerável diante de mim, mesmo tendo motivo para agir diferente?"
    },
    "1 Samuel 25": {
      texto: "Abigail intervém sabiamente para impedir que Davi cometa um massacre por vingança contra o marido tolo dela, Nabal. Davi reconhece: “bendito seja o Senhor... que hoje te enviou ao meu encontro”. Um conselho sábio e corajoso evitou um erro irreversível.",
      pergunta: "Já ouvi um conselho sábio que me impediu de agir por raiva de forma irreversível?"
    },
    "1 Samuel 26": {
      texto: "Pela segunda vez, Davi tem chance de matar Saul dormindo e novamente recusa, levando apenas a lança e o jarro d’água como prova — reafirmando o mesmo princípio de não tocar no ungido do Senhor, mesmo perseguido injustamente por ele.",
      pergunta: "Tenho mantido o mesmo princípio de integridade mesmo quando a situação se repete e a tentação volta?"
    },
    "1 Samuel 27": {
      texto: "Cansado da perseguição constante, Davi se refugia entre os próprios filisteus, um território que anos antes evitara. O texto narra com honestidade essa fase de fé cansada — mesmo homens segundo o coração de Deus atravessam períodos de exaustão espiritual real.",
      pergunta: "Reconheço meus próprios períodos de cansaço espiritual sem me julgar por eles?"
    },
    "1 Samuel 28": {
      texto: "Desesperado e sem resposta de Deus por sonhos, profetas ou Urim, Saul recorre proibidamente a uma médium para invocar Samuel — um ato de desespero espiritual que só aprofunda sua ruína. Buscar respostas fora dos meios legítimos de Deus nunca traz paz real.",
      pergunta: "Já busquei respostas em fontes que sei que não vêm de Deus, por desespero de ter uma resposta rápida?"
    },
    "1 Samuel 29": {
      texto: "Providencialmente, os comandantes filisteus desconfiam de Davi e o dispensam da batalha contra Israel — poupando-o de um conflito moral impossível de resolver bem. Às vezes a providência de Deus age através da desconfiança alheia, evitando um dilema que a pessoa não conseguiria resolver sozinha.",
      pergunta: "Já fui poupado(a) de uma situação difícil por circunstâncias que, à época, pareciam apenas contrárias?"
    },
    "1 Samuel 30": {
      texto: "Ao encontrar seu acampamento destruído e a própria tropa cogitando apedrejá-lo, Davi “fortaleceu-se no Senhor seu Deus” antes de agir. Ele busca a Deus primeiro, recupera tudo, e ainda divide os despojos generosamente com quem ficara para trás cansado.",
      pergunta: "Tenho me fortalecido em Deus antes de agir em momentos de crise, ou reajo primeiro e busco Deus depois?"
    },
    "1 Samuel 31": {
      texto: "Saul e Jônatas morrem em batalha contra os filisteus, um final trágico para o primeiro rei de Israel — talento real desperdiçado por décadas de desobediência e ciúme não tratados. O livro termina como advertência viva sobre o custo de um coração que resiste à correção de Deus.",
      pergunta: "Tenho permitido que Deus corrija áreas do meu coração antes que o custo de ignorá-las se torne grande demais?"
    },
    "2 Samuel 1": {
      texto: "Ao saber da morte de Saul e Jônatas, Davi não comemora a eliminação de quem o perseguiu — ele rasga as vestes, jejua e compõe um lamento sincero: “como caíram os valorosos!”. Luto genuíno até por um inimigo mostra maturidade de coração rara.",
      pergunta: "Consigo lamentar sinceramente até a queda de alguém que me fez mal?"
    },
    "2 Samuel 2": {
      texto: "Davi é ungido rei sobre Judá, enquanto Isbosete, filho de Saul, é proclamado rei sobre o restante de Israel — um reino dividido que levaria anos de guerra civil para se resolver. A promessa de Deus a Davi se cumpria devagar, não instantaneamente.",
      pergunta: "Tenho paciência para ver promessas de Deus se cumprirem por etapas, não de uma vez só?"
    },
    "2 Samuel 3": {
      texto: "Abner, general de Isbosete, decide se aliar a Davi, mas é assassinado traiçoeiramente por Joabe em vingança pessoal. Davi lamenta publicamente e amaldiçoa o ato, recusando-se a lucrar politicamente com uma traição, mesmo vantajosa para ele.",
      pergunta: "Já recusei tirar vantagem de algo errado feito por outra pessoa, mesmo que isso me beneficiasse?"
    },
    "2 Samuel 4": {
      texto: "Homens assassinam Isbosete esperando recompensa de Davi por eliminar seu rival — e Davi os executa por matarem um inocente em sua própria cama. Davi recusa consistentemente construir seu reinado sobre sangue derramado por ambição alheia.",
      pergunta: "Tenho recusado vantagens que vêm às custas de injustiça contra outra pessoa?"
    },
    "2 Samuel 5": {
      texto: "Finalmente ungido rei sobre todo Israel, Davi conquista Jerusalém e a torna capital — “Davi ia crescendo cada vez mais, porque o Senhor, o Deus dos Exércitos, era com ele”. Décadas de espera desde a unção em 1 Samuel 16 finalmente se cumprem por completo.",
      pergunta: "Tenho reconhecido que o tempo de espera de Deus, mesmo longo, sempre teve propósito?"
    },
    "2 Samuel 6": {
      texto: "Davi traz a arca de volta com celebração exuberante, dançando “com toda a força” diante do Senhor — e é criticado por sua esposa Mical por essa expressão pública de adoração. Davi responde que preferia se humilhar ainda mais diante de Deus do que se importar com aparência social.",
      pergunta: "Tenho me contido na minha adoração a Deus por medo do que os outros vão pensar?"
    },
    "2 Samuel 7": {
      texto: "Davi deseja construir um templo para Deus, mas é o próprio Deus quem inverte a proposta: promete construir uma “casa” a Davi — uma dinastia eterna. O maior desejo de servir a Deus se transforma numa promessa ainda maior recebida dEle.",
      pergunta: "Tenho tentado dar a Deus algo, quando Ele quer, na verdade, me dar algo maior primeiro?"
    },
    "2 Samuel 8": {
      texto: "Um resumo das vitórias militares de Davi, consolidando o reino, com uma nota importante: “o Senhor dava vitória a Davi por onde quer que ele ia”. O sucesso consistente do reinado é atribuído diretamente à presença de Deus, não à genialidade militar sozinha.",
      pergunta: "Tenho atribuído meus sucessos consistentes à presença de Deus na minha vida?"
    },
    "2 Samuel 9": {
      texto: "Davi busca ativamente um descendente de Saul para mostrar bondade “por amor de Jônatas”, e encontra Mefibosete, aleijado dos pés, trazendo-o para comer à mesa real permanentemente. Um gesto de graça imerecida para com o neto do antigo inimigo.",
      pergunta: "Tenho procurado ativamente a quem mostrar bondade imerecida, como Davi fez por amor de uma amizade antiga?"
    },
    "2 Samuel 10": {
      texto: "Uma tentativa de gentileza diplomática de Davi é interpretada como espionagem, resultando em guerra desnecessária provocada pela desconfiança alheia. Intenções boas nem sempre são recebidas como tal — e às vezes o conflito vem de fora, não de erro próprio.",
      pergunta: "Já tive boas intenções mal interpretadas, gerando conflito que eu não provoquei?"
    },
    "2 Samuel 11": {
      texto: "No auge do poder, Davi vê Bate-Seba, comete adultério, e depois manda matar o marido dela, Urias, para encobrir o pecado. Um dos maiores fracassos morais da Bíblia, cometido por alguém descrito como “homem segundo o coração de Deus” — ninguém está imune à queda.",
      pergunta: "Tenho me sentido “imune” a certos pecados só porque minha fé parece madura?"
    },
    "2 Samuel 12": {
      texto: "O profeta Natã confronta Davi com uma parábola até ele mesmo pronunciar seu próprio julgamento — “tu és este homem”. Davi se arrepende genuinamente, e Deus perdoa, mas as consequências práticas do pecado permanecem reais e dolorosas.",
      pergunta: "Já precisei ser confrontado por alguém para enxergar meu próprio pecado com clareza?"
    },
    "2 Samuel 13": {
      texto: "Amnom, filho de Davi, viola a irmã Tamar, e Davi — apesar de irado — não pune nem corrige de forma alguma, deixando a ferida aberta. Absalão guarda ódio silencioso por dois anos antes de vingar a irmã com sangue. Negligência paterna gera consequências trágicas mais adiante.",
      pergunta: "Tenho evitado corrigir erros sérios de quem amo, por conforto ou medo do confronto?"
    },
    "2 Samuel 14": {
      texto: "Joabe arquiteta a volta de Absalão do exílio, mas Davi o mantém à distância emocional por mais dois anos, mesmo fisicamente próximo. Reconciliação incompleta — perdão de fachada sem restauração real de relacionamento — deixa a ferida infeccionar ainda mais.",
      pergunta: "Tenho oferecido perdão de fachada, sem realmente restaurar o relacionamento na prática?"
    },
    "2 Samuel 15": {
      texto: "Absalão, ressentido, conquista o coração do povo com charme calculado e lidera uma rebelião contra o próprio pai. Davi foge de Jerusalém humilhado, mas ainda confia: “se eu achar graça aos olhos do Senhor, ele me tornará a trazer”. Mesmo na crise, entrega o resultado a Deus.",
      pergunta: "Consigo entregar a Deus o resultado de uma crise, em vez de lutar para controlar tudo sozinho(a)?"
    },
    "2 Samuel 16": {
      texto: "Fugindo, Davi é amaldiçoado publicamente por Simei, e recusa que seus homens o matem: “deixai-o, e amaldiçoe, porque o Senhor lho disse”. Davi escolhe humildade diante de humilhação injusta, confiando que Deus veria e julgaria no tempo certo.",
      pergunta: "Consigo suportar humilhação injusta sem revidar, confiando no julgamento de Deus?"
    },
    "2 Samuel 17": {
      texto: "Deus intervém sutilmente fazendo o conselho tolo de Husai parecer melhor que o conselho sábio de Aitofel aos olhos de Absalão — “para que o Senhor trouxesse mal sobre Absalão”. Providência silenciosa trabalhando através de decisões humanas aparentemente comuns.",
      pergunta: "Consigo confiar que Deus pode trabalhar mesmo através de decisões que parecem apenas humanas?"
    },
    "2 Samuel 18": {
      texto: "Apesar de tudo que Absalão fizera, Davi ordena que o tratem “com brandura” na batalha — e ao saber de sua morte, chora de forma avassaladora: “meu filho Absalão... quem me dera que eu morrera por ti”. O amor de um pai permanece mesmo diante da traição mais profunda.",
      pergunta: "Existe alguém que me traiu profundamente, mas por quem ainda sinto amor genuíno?"
    },
    "2 Samuel 19": {
      texto: "Joabe repreende Davi por seu luto excessivo estar desmoralizando o próprio exército que acabara de arriscar a vida por ele — um lembrete difícil de que liderança exige, às vezes, equilibrar dor pessoal com responsabilidade pública.",
      pergunta: "Tenho equilibrado minha dor pessoal com as responsabilidades que outros dependem de mim para cumprir?"
    },
    "2 Samuel 20": {
      texto: "Uma nova rebelião surge, liderada por Seba, e é encerrada quando uma mulher sábia de Abel negocia a entrega dele para evitar destruição total da cidade. Sabedoria prática e coragem de uma pessoa comum evitaram uma tragédia maior.",
      pergunta: "Já usei sabedoria e coragem para evitar um conflito maior, mesmo sem posição de destaque?"
    },
    "2 Samuel 21": {
      texto: "Uma fome de três anos é atribuída a um pecado antigo de Saul contra os gibeonitas, e Davi busca reparação para restaurar a aliança quebrada. Pecados não resolvidos, mesmo de gerações passadas, podem continuar afetando o presente até serem tratados.",
      pergunta: "Existe algo não resolvido no meu passado — ou de gerações antes de mim — que ainda precisa de reparação?"
    },
    "2 Samuel 22": {
      texto: "Davi entoa um longo cântico de gratidão, quase idêntico ao Salmo 18, celebrando Deus como rocha, fortaleza e libertador ao longo de toda uma vida de perseguição e guerra. Olhando para trás, ele reconhece: cada capítulo difícil teve a mão de Deus presente.",
      pergunta: "Se eu olhasse para minha própria história como Davi fez, conseguiria compor um cântico de gratidão sincero?"
    },
    "2 Samuel 23": {
      texto: "As “últimas palavras” de Davi descrevem o governante ideal como alguém que governa “no temor de Deus”, como manhã sem nuvens. Em seguida, uma lista detalhada dos “valentes” de Davi — reconhecendo publicamente cada homem que serviu fielmente ao seu lado.",
      pergunta: "Tenho reconhecido publicamente quem serviu fielmente ao meu lado ao longo do caminho?"
    },
    "2 Samuel 24": {
      texto: "Davi ordena um censo motivado por orgulho, trazendo julgamento sobre o povo, e escolhe genuinamente sofrer nas mãos de Deus a se entregar à misericórdia humana. Ele compra um local de sacrifício recusando recebê-lo de graça: “não oferecerei ao Senhor meu Deus holocaustos que não me custem nada”.",
      pergunta: "Tenho oferecido a Deus apenas o que não me custa nada, ou uma adoração que realmente custa algo?"
    },
    "1 Reis 1": {
      texto: "Já velho, Davi vê o filho Adonias tentar tomar o trono por conta própria, e reage garantindo que Salomão, o filho prometido, fosse ungido rei conforme já havia decidido diante de Deus. Mesmo enfraquecido, Davi cumpre sua palavra até o fim.",
      pergunta: "Tenho cumprido compromissos importantes mesmo quando já não tenho a mesma força de antes?"
    },
    "1 Reis 2": {
      texto: "Nas últimas instruções a Salomão, Davi pede fidelidade a Deus como prioridade — “guarda os preceitos do Senhor teu Deus” — antes de resolver contas pendentes de justiça na corte. Um reinado começa acertando tanto o coração quanto a ordem prática.",
      pergunta: "Tenho colocado a fidelidade a Deus como prioridade antes de resolver questões práticas urgentes?"
    },
    "1 Reis 3": {
      texto: "Diante da oferta de Deus para pedir o que quisesse, Salomão pede sabedoria para governar, não riquezas ou vida longa — e Deus, satisfeito com o pedido, concede tudo junto. Buscar primeiro o que serve ao propósito de Deus trouxe, de bônus, o resto também.",
      pergunta: "Tenho pedido a Deus sabedoria para servir, ou apenas bênçãos para meu próprio conforto?"
    },
    "1 Reis 4": {
      texto: "O reinado de Salomão é descrito em prosperidade extraordinária, paz e sabedoria reconhecida internacionalmente — “falou três mil provérbios”. O auge material do reino de Israel nasce diretamente do dom espiritual pedido no capítulo anterior.",
      pergunta: "Tenho visto a sabedoria de Deus produzir frutos concretos e visíveis na minha própria vida?"
    },
    "1 Reis 5": {
      texto: "Salomão negocia com Hirão, rei de Tiro, os materiais para construir o templo — cedros, pedras, mão de obra especializada. Antes de qualquer construção espiritual grandiosa, houve planejamento cuidadoso, parceria estratégica e trabalho organizado.",
      pergunta: "Tenho investido preparo e planejamento cuidadoso nas obras que dedico a Deus?"
    },
    "1 Reis 6": {
      texto: "A construção do templo é descrita em detalhe minucioso — dimensões, madeira, ouro cobrindo cada superfície interna. E Deus reafirma a Salomão: “se andares nos meus estatutos... habitarei no meio dos filhos de Israel”. A presença de Deus sempre dependeu de fidelidade contínua, não só de um prédio impressionante.",
      pergunta: "Tenho confundido estrutura religiosa impressionante com fidelidade real de coração?"
    },
    "1 Reis 7": {
      texto: "Enquanto o templo levou sete anos, o próprio palácio de Salomão levou treze — um detalhe que muitos comentaristas notam com certa inquietação. Mesmo em meio à obra dedicada a Deus, sinais de prioridades que começariam a se desviar já apareciam.",
      pergunta: "Tenho notado sinais sutis de que minhas prioridades começam a se desviar, mesmo em meio ao que parece bom?"
    },
    "1 Reis 8": {
      texto: "Na dedicação do templo, Salomão ora publicamente reconhecendo que nem os céus mais altos poderiam conter a Deus — “quanto menos esta casa que tenho edificado”. Um lembrete de humildade genuína mesmo diante da maior conquista arquitetônica de sua vida.",
      pergunta: "Consigo manter humildade genuína mesmo diante da minha maior conquista?"
    },
    "1 Reis 9": {
      texto: "Deus responde a Salomão à noite, confirmando a aliança, mas com um aviso sério: se o povo se desviasse para outros deuses, o próprio templo se tornaria ruína e advertência às nações. A bênção vinha condicionada à fidelidade contínua, não era garantia automática.",
      pergunta: "Tenho tratado bênçãos passadas como garantia automática, sem considerar a fidelidade contínua que elas exigem?"
    },
    "1 Reis 10": {
      texto: "A rainha de Sabá viaja de longe para testemunhar a sabedoria de Salomão, e ao ver tudo, declara que nem metade do que ouvira lhe fora contado. A fama da sabedoria de Deus, vivida com integridade, atravessava fronteiras e atraía até estrangeiros para reconhecê-Lo.",
      pergunta: "Minha vida atrai outros a reconhecer a Deus, como aconteceu com a rainha de Sabá?"
    },
    "1 Reis 11": {
      texto: "Salomão, o homem mais sábio da história bíblica, permite que suas setecentas esposas estrangeiras desviassem seu coração para outros deuses na velhice. Nem a maior sabedoria imaginável protege automaticamente contra escolhas repetidas de compromisso espiritual.",
      pergunta: "Tenho permitido pequenas concessões repetidas que, aos poucos, desviam meu coração de Deus?"
    },
    "1 Reis 12": {
      texto: "Roboão, filho de Salomão, rejeita o conselho sábio dos anciãos e escolhe governar com dureza ainda maior que o pai — resultando na divisão do reino em Israel e Judá. Uma decisão de liderança arrogante fraturou permanentemente o que gerações haviam construído.",
      pergunta: "Tenho ouvido conselho sábio antes de tomar decisões que afetam outras pessoas além de mim?"
    },
    "1 Reis 13": {
      texto: "Um profeta anônimo confronta o novo altar idólatra de Jeroboão, mas depois é enganado por outro “profeta” mentiroso e desobedece uma instrução clara de Deus — pagando caro por isso. Discernimento espiritual exige atenção mesmo diante de vozes que parecem religiosas.",
      pergunta: "Tenho testado tudo que ouço, mesmo de fontes que parecem espirituais, contra o que Deus já revelou claramente?"
    },
    "1 Reis 14": {
      texto: "Jeroboão consulta secretamente uma profetisa sobre o filho doente, mas Deus já sabia de tudo e envia julgamento sobre a casa dele pela idolatria instaurada. Tentar esconder de Deus através de disfarces nunca funcionou — Ele vê além da aparência.",
      pergunta: "Já tentei esconder de Deus algo que, no fundo, sei que Ele já vê completamente?"
    },
    "1 Reis 15": {
      texto: "Reis se sucedem em Judá e Israel, alguns fiéis como Asa, que “fez o que era reto aos olhos do Senhor”, outros não. O padrão bíblico é claro: cada geração é avaliada por sua própria fidelidade, não pela reputação dos pais.",
      pergunta: "Tenho construído minha própria fidelidade a Deus, sem depender da fé herdada de outros?"
    },
    "1 Reis 16": {
      texto: "Uma sucessão rápida e violenta de reis maus em Israel culmina em Acabe, descrito como pior que todos antes dele, que se casa com Jezabel e introduz adoração a Baal em larga escala. O capítulo mostra o quanto liderança sem temor a Deus pode acelerar a degradação de uma nação.",
      pergunta: "Tenho reconhecido a importância de líderes — em qualquer esfera — que temem verdadeiramente a Deus?"
    },
    "1 Reis 17": {
      texto: "Elias anuncia seca como julgamento e é sustentado por Deus de formas extraordinárias — corvos trazendo comida, depois uma viúva pobre cuja farinha e azeite não se esgotam. Deus provê de maneiras inesperadas para quem obedece um chamado difícil.",
      pergunta: "Confio que Deus pode prover de formas inesperadas quando obedeço a um chamado difícil?"
    },
    "1 Reis 18": {
      texto: "No Monte Carmelo, Elias desafia os profetas de Baal num confronto público decisivo, e o fogo do céu consome o sacrifício encharcado de água — “o Senhor é Deus! o Senhor é Deus!”. Um dos momentos mais dramáticos de confirmação pública de quem realmente reina.",
      pergunta: "Tenho tido a coragem de Elias para tomar posição pública clara sobre a quem sirvo?"
    },
    "1 Reis 19": {
      texto: "Logo depois da maior vitória de sua vida, Elias entra em profundo desânimo e deseja morrer, fugindo de Jezabel. Deus não o repreende — envia um anjo com comida, deixa-o dormir, e finalmente se revela não no vento forte, nem no terremoto, mas “numa voz mansa e delicada”.",
      pergunta: "Já experimentei um colapso emocional logo depois de uma grande vitória espiritual?"
    },
    "1 Reis 20": {
      texto: "Acabe vence uma batalha contra a Síria por instrução direta de um profeta de Deus, mas depois poupa o rei inimigo por interesse político, contrariando o julgamento de Deus. Vitória militar não substitui obediência completa ao que foi ordenado.",
      pergunta: "Tenho cumprido parcialmente uma instrução clara de Deus, negociando o resto por interesse próprio?"
    },
    "1 Reis 21": {
      texto: "Acabe cobiça a vinha de Nabote, e Jezabel arquiteta um assassinato judicial para tomá-la à força. Elias confronta o rei diretamente com julgamento severo — mesmo o poder mais absoluto não está acima da justiça de Deus.",
      pergunta: "Reconheço que nenhuma posição de poder, minha ou de outros, está acima da justiça de Deus?"
    },
    "1 Reis 22": {
      texto: "Acabe ignora o aviso do profeta Micaías, preferindo ouvir apenas conselheiros que diziam o que ele queria ouvir, e morre em batalha exatamente como fora avisado. O livro termina com um alerta claro sobre o perigo de cercar-se só de vozes que concordam.",
      pergunta: "Tenho me cercado apenas de vozes que concordam comigo, evitando quem me diria a verdade difícil?"
    },
    "2 Reis 1": {
      texto: "O rei Acazias, ferido, envia mensageiros consultar um deus estrangeiro em vez do Deus de Israel, e Elias intercepta com julgamento severo: “acaso não há Deus em Israel, para consultardes a Baal-Zebube?”. Buscar respostas fora de Deus, quando Ele está disponível, é insulto direto à Sua suficiência.",
      pergunta: "Tenho buscado respostas em outros lugares antes de perguntar a Deus primeiro?"
    },
    "2 Reis 2": {
      texto: "Eliseu insiste em acompanhar Elias até o fim, recusando-se a deixá-lo, e testemunha o mestre sendo levado ao céu num redemoinho, com carruagem e cavalos de fogo. Recebe então porção dobrada do espírito de Elias — perseverança fiel é recompensada com herança espiritual real.",
      pergunta: "Tenho perseverado ao lado de quem me ensina, mesmo quando seria mais fácil desistir do acompanhamento?"
    },
    "2 Reis 3": {
      texto: "Numa aliança militar entre reis, a água providenciada por Deus no deserto engana visualmente os inimigos moabitas, que a confundem com sangue e atacam precipitadamente, sendo derrotados. Deus usa até um fenômeno natural inesperado para conceder vitória.",
      pergunta: "Já vi Deus usar uma circunstância aparentemente comum de forma surpreendente a meu favor?"
    },
    "2 Reis 4": {
      texto: "Eliseu multiplica o azeite de uma viúva endividada, ressuscita o filho de uma mulher hospitaleira de Suném, e neutraliza um alimento envenenado — três milagres consecutivos de provisão e vida em meio à necessidade cotidiana das pessoas comuns.",
      pergunta: "Tenho confiado que Deus se importa com as necessidades práticas e cotidianas da minha vida?"
    },
    "2 Reis 5": {
      texto: "Naamã, general estrangeiro leproso, quase perde a cura por orgulho, recusando-se a simplesmente mergulhar sete vezes no Jordão como instruído — até um servo humilde convencê-lo a obedecer o simples. A cura veio pela obediência humilde, não por um ritual grandioso.",
      pergunta: "Tenho rejeitado uma solução simples de Deus porque esperava algo mais impressionante?"
    },
    "2 Reis 6": {
      texto: "Cercado por um exército inimigo, o servo de Eliseu entra em pânico, até o profeta orar para que seus olhos se abram e ele veja carruagens de fogo protegendo-os — “os que estão conosco são mais do que os que estão com eles”. Realidade espiritual invisível supera qualquer ameaça visível.",
      pergunta: "Consigo confiar na proteção invisível de Deus quando só enxergo a ameaça visível?"
    },
    "2 Reis 7": {
      texto: "Durante um cerco desesperador com fome extrema, quatro leprosos decidem se arriscar até o acampamento inimigo — e descobrem que Deus já havia espalhado os inimigos em pânico, deixando provisão abundante para trás. A libertação já estava pronta antes de ser descoberta.",
      pergunta: "Tenho me arriscado a agir mesmo em desespero, confiando que Deus pode já ter preparado a saída?"
    },
    "2 Reis 8": {
      texto: "A mulher de Suném recupera suas terras perdidas depois de contar sua história ao próprio rei, no momento exato em que o servo de Eliseu narrava o milagre dela. Coincidência de tempo perfeitamente orquestrada por Deus para restaurar o que fora perdido.",
      pergunta: "Já vivi uma “coincidência” de tempo tão precisa que só poderia ser obra de Deus?"
    },
    "2 Reis 9": {
      texto: "Jeú é ungido para julgar a casa de Acabe e executa esse julgamento com fúria implacável, incluindo a morte de Jezabel — cumprindo, ainda que de forma violenta, o que fora profetizado décadas antes. A palavra de Deus se cumpre, mesmo que o instrumento humano seja imperfeito.",
      pergunta: "Confio que a palavra de Deus se cumprirá, mesmo quando o processo não é como eu esperaria?"
    },
    "2 Reis 10": {
      texto: "Jeú elimina toda a adoração a Baal em Israel com zelo determinado, mas o texto nota que ele “não se apartou dos pecados de Jeroboão” — zelo contra um pecado específico não significa fidelidade completa a Deus em tudo.",
      pergunta: "Tenho combatido com zelo um pecado específico enquanto ignoro outros na minha própria vida?"
    },
    "2 Reis 11": {
      texto: "Atalia, ao assumir o trono, tenta exterminar toda a linhagem real, mas o bebê Joás é escondido e protegido secretamente por seis anos até ser coroado. Mesmo diante de um plano de extermínio total, Deus preservou a promessa messiânica através de um remanescente escondido.",
      pergunta: "Confio que Deus pode preservar Seus propósitos mesmo quando tudo parece ameaçado de destruição?"
    },
    "2 Reis 12": {
      texto: "Joás organiza o reparo do templo, arrecadando fundos com sistema transparente e confiável — “não se tomava conta aos homens em cuja mão entregavam o dinheiro... porque procediam com fidelidade”. Confiança bem estabelecida vem de integridade comprovada ao longo do tempo.",
      pergunta: "Tenho sido íntegro(a) o suficiente para que outros confiem em mim sem precisar fiscalizar cada detalhe?"
    },
    "2 Reis 13": {
      texto: "Eliseu, já em seu leito de morte, ainda profetiza vitórias para o rei Joás — e mesmo depois de morto, um cadáver jogado em seu túmulo ressuscita ao tocar seus ossos. O poder de Deus sobre a vida continua ativo mesmo além da vida terrena do profeta.",
      pergunta: "Tenho deixado um legado que continua impactando outros mesmo depois que eu não estiver mais presente?"
    },
    "2 Reis 14": {
      texto: "Amazias vence os edomitas, mas depois traz os deuses deles para adorar — sendo repreendido por um profeta: “por que buscas os deuses do povo, que não livraram o seu povo da tua mão?”. Vitória não deveria gerar admiração pelo derrotado, mas gratidão a quem realmente concedeu a vitória.",
      pergunta: "Já admirei ou copiei algo de alguém que, na verdade, eu tinha acabado de superar com a ajuda de Deus?"
    },
    "2 Reis 15": {
      texto: "Uma sucessão rápida de reis em Israel, muitos assassinados em golpes violentos — sinal de instabilidade política crescente à medida que o reino do norte se aproximava do colapso final. A infidelidade espiritual contínua corroía também a estabilidade nacional.",
      pergunta: "Reconheço como a infidelidade espiritual pode corroer, a longo prazo, outras áreas da minha vida além da fé?"
    },
    "2 Reis 16": {
      texto: "Acaz, rei de Judá, chega a sacrificar o próprio filho ao fogo, imitando práticas pagãs abomináveis, e busca aliança com a Assíria em vez de confiar em Deus. Um retrato extremo de quanto a idolatria pode degradar até os valores mais básicos de uma pessoa.",
      pergunta: "Tenho buscado alianças ou soluções mundanas em vez de confiar primeiro em Deus diante do medo?"
    },
    "2 Reis 17": {
      texto: "O reino do norte, Israel, cai definitivamente diante da Assíria, e o texto explica claramente o motivo: “porque os filhos de Israel pecaram contra o Senhor... e temeram a outros deuses”. Um resumo teológico direto de séculos de infidelidade acumulada, sem eufemismo.",
      pergunta: "Reconheço que consequências sérias, individuais ou coletivas, costumam vir de infidelidade acumulada ao longo do tempo?"
    },
    "2 Reis 18": {
      texto: "Ezequias se torna um dos poucos reis descritos com aprovação quase total: “confiou no Senhor Deus de Israel, de modo que não houve outro semelhante a ele”. Diante da ameaça assíria, ele recusa se render ao medo transmitido pelas palavras intimidadoras do inimigo.",
      pergunta: "Tenho permitido que palavras intimidadoras de circunstâncias externas abalem minha confiança em Deus?"
    },
    "2 Reis 19": {
      texto: "Diante da ameaça iminente de Senaqueribe, Ezequias estende a carta ameaçadora “perante o Senhor” em oração, e Deus responde destruindo o exército assírio numa só noite. Levar o medo diretamente à presença de Deus, em vez de guardá-lo sozinho, muda tudo.",
      pergunta: "Tenho levado meus medos diretamente à presença de Deus, ou os carregado sozinho(a)?"
    },
    "2 Reis 20": {
      texto: "Doente e prestes a morrer, Ezequias chora e ora, e Deus estende sua vida por mais quinze anos. Mas depois, por orgulho, ele mostra todos os tesouros do reino a mensageiros babilônios — plantando, sem perceber, a semente do exílio futuro de Judá.",
      pergunta: "Tenho sido cuidadoso(a) mesmo em momentos de bênção, para não plantar, sem perceber, sementes de problemas futuros?"
    },
    "2 Reis 21": {
      texto: "Manassés, filho de Ezequias, reverte tudo — reconstrói altares pagãos, pratica feitiçaria e até sacrifica filhos ao fogo, tornando-se um dos piores reis da história de Judá. O legado espiritual de um pai fiel não garante automaticamente a fidelidade do filho.",
      pergunta: "Tenho investido intencionalmente na formação espiritual de quem vem depois de mim, sem assumir que “vai dar certo sozinho”?"
    },
    "2 Reis 22": {
      texto: "O rei Josias, ainda jovem, ordena o reparo do templo, e durante a obra encontra-se o Livro da Lei perdido havia gerações. Ao ouvir a Palavra lida, ele rasga as vestes em arrependimento genuíno — redescobrir a Escritura esquecida provoca reforma real de coração.",
      pergunta: "Já experimentei redescobrir uma verdade da Palavra que parecia esquecida, e isso mudou algo em mim?"
    },
    "2 Reis 23": {
      texto: "Josias lidera a maior reforma religiosa da história de Judá, destruindo altares pagãos por todo o reino e celebrando a Páscoa como não se via “desde os dias dos juízes”. Um único rei fiel reverteu décadas de idolatria acumulada por gerações anteriores.",
      pergunta: "Tenho subestimado o impacto que uma única pessoa fiel pode ter na reversão de um padrão negativo?"
    },
    "2 Reis 24": {
      texto: "Apesar da reforma de Josias, o julgamento contra Judá pela idolatria acumulada de Manassés já estava decretado — Nabucodonosor invade, e o exílio babilônico começa em etapas. Reforma sincera não anula necessariamente todas as consequências já em movimento.",
      pergunta: "Tenho aceitado que algumas consequências continuam mesmo depois de um arrependimento sincero, sem que isso anule a graça recebida?"
    },
    "2 Reis 25": {
      texto: "Jerusalém cai, o templo é destruído, e o povo é levado cativo para a Babilônia — o fim trágico de séculos de história que começara com tanta promessa em Gênesis. O livro termina, porém, com uma nota de esperança contida: o rei exilado Joaquim é libertado da prisão e tratado com bondade na corte babilônica.",
      pergunta: "Consigo enxergar sinais de esperança de Deus mesmo no meio da consequência mais dura de uma longa jornada de infidelidade?"
    },
    "1 Crônicas 1": {
      texto: "O livro começa com uma genealogia que vai de Adão em diante — escrita para um povo que acabara de voltar do exílio e precisava relembrar quem era. Antes de reconstruir o futuro, era preciso recuperar a memória de onde tinham vindo.",
      pergunta: "Tenho valorizado a memória de onde vim, ou vivo desconectado(a) da minha própria história?"
    },
    "1 Crônicas 2": {
      texto: "A linhagem de Judá é detalhada com atenção especial, porque dela viria Davi — e, muito depois, o Messias. Entre tantos nomes, aparece até Acã, o que trouxe desgraça a Israel. A genealogia não esconde os nomes vergonhosos.",
      pergunta: "Consigo aceitar que minha história inclui capítulos dos quais não me orgulho, sem apagá-los?"
    },
    "1 Crônicas 3": {
      texto: "Os descendentes de Davi são listados, incluindo a linhagem real que atravessou o exílio. Mesmo com o trono destruído e o povo cativo, a linha davídica continuou — a promessa de Deus não morreu junto com a monarquia.",
      pergunta: "Confio que promessas de Deus continuam de pé mesmo quando as estruturas visíveis desabam?"
    },
    "1 Crônicas 4": {
      texto: "No meio de nomes obscuros, aparece Jabez, com uma oração breve: “abençoa-me e amplia os meus limites... e livra-me do mal”. Deus atendeu. Uma vida quase anônima registrada para sempre por causa de uma oração sincera.",
      pergunta: "Tenho apresentado a Deus pedidos sinceros, mesmo me sentindo pequeno(a) demais para isso?"
    },
    "1 Crônicas 5": {
      texto: "A genealogia registra que Rúben perdeu o direito de primogênito por profanar o leito do pai, e que as tribos do leste venceram batalhas “porque clamaram a Deus na peleja”. Vitória atribuída à dependência, não à força militar.",
      pergunta: "Tenho clamado a Deus antes das batalhas, ou só depois que elas dão errado?"
    },
    "1 Crônicas 6": {
      texto: "A linhagem sacerdotal de Levi, incluindo os cantores que Davi designou “para o serviço do canto na casa do Senhor”. Havia gente cuja vocação vitalícia era simplesmente conduzir a adoração do povo.",
      pergunta: "Reconheço o valor de quem dedica a vida a servir na adoração, mesmo sem destaque pessoal?"
    },
    "1 Crônicas 7": {
      texto: "Genealogias de várias tribos, com números de homens valentes prontos para a guerra. Cada tribo tinha sua contribuição registrada — ninguém era invisível na contabilidade de Deus sobre o Seu povo.",
      pergunta: "Tenho me sentido invisível, esquecendo que Deus registra cada um individualmente?"
    },
    "1 Crônicas 8": {
      texto: "A linhagem de Benjamim, incluindo a família de Saul. Mesmo depois do fracasso do primeiro rei, sua descendência continua registrada com dignidade — o erro de um homem não apaga toda a sua linhagem da história.",
      pergunta: "Tenho julgado famílias inteiras pelo erro de uma pessoa?"
    },
    "1 Crônicas 9": {
      texto: "A lista dos que voltaram do exílio para Jerusalém, incluindo porteiros que guardavam as portas do templo em turnos, “de manhã em manhã”. Fidelidade organizada em funções pequenas e repetitivas sustentava a casa de Deus.",
      pergunta: "Tenho sido fiel nas tarefas pequenas e repetitivas que ninguém aplaude?"
    },
    "1 Crônicas 10": {
      texto: "A morte de Saul é resumida com um veredito direto: morreu “pela sua transgressão... e também por ter consultado uma médium”. Crônicas não suaviza o motivo da queda do primeiro rei de Israel.",
      pergunta: "Tenho sido honesto(a) comigo mesmo(a) sobre as causas reais dos meus fracassos?"
    },
    "1 Crônicas 11": {
      texto: "Davi é ungido rei sobre todo Israel e conquista Jerusalém. O capítulo lista seus valentes, incluindo três que atravessaram o acampamento inimigo só para trazer água que Davi desejara — e ele a derramou diante do Senhor, recusando beber algo que custara tanto risco.",
      pergunta: "Tenho reconhecido o preço que outros pagaram por coisas que recebo com facilidade?"
    },
    "1 Crônicas 12": {
      texto: "Guerreiros de todas as tribos se juntam a Davi, incluindo os filhos de Issacar, “entendidos nos tempos, para saberem o que Israel devia fazer”. Discernimento sobre o momento é descrito como habilidade tão valiosa quanto força militar.",
      pergunta: "Tenho buscado discernimento sobre o tempo certo, ou só sobre o que fazer?"
    },
    "1 Crônicas 13": {
      texto: "A tentativa de trazer a arca num carro novo termina com a morte de Uzá ao tocá-la. Boa intenção não substituiu obediência ao método que Deus estabelecera — os levitas é que deviam carregá-la, nos ombros.",
      pergunta: "Tenho substituído a obediência ao que Deus pede pela minha própria boa intenção?"
    },
    "1 Crônicas 14": {
      texto: "Antes de enfrentar os filisteus, Davi consulta a Deus — e na segunda batalha recebe instrução diferente da primeira: esperar o som nas amoreiras. O método que funcionou antes não seria repetido automaticamente.",
      pergunta: "Tenho repetido fórmulas que funcionaram antes, sem perguntar a Deus sobre a situação atual?"
    },
    "1 Crônicas 15": {
      texto: "Davi corrige o erro anterior: desta vez os levitas carregam a arca conforme a Lei, “porque não a levamos da primeira vez segundo a ordenança”. Reconhecer o erro e refazer do jeito certo é sinal de humildade, não de fraqueza.",
      pergunta: "Tenho voltado atrás para refazer algo do jeito certo, mesmo custando tempo e orgulho?"
    },
    "1 Crônicas 16": {
      texto: "Com a arca instalada, Davi entrega um salmo de louvor aos levitas: “dai graças ao Senhor, invocai o seu nome; fazei conhecidos entre os povos os seus feitos”. A adoração organizada se torna parte permanente da vida nacional.",
      pergunta: "Tenho tornado conhecidos os feitos de Deus, ou os guardo só para mim?"
    },
    "1 Crônicas 17": {
      texto: "Davi quer construir uma casa para Deus, e Deus responde prometendo construir uma casa para Davi — uma dinastia eterna. A resposta de Davi é humildade pura: “quem sou eu, Senhor Deus, e qual é a minha casa?”.",
      pergunta: "Consigo receber a generosidade de Deus com humildade, sem achar que a mereci?"
    },
    "1 Crônicas 18": {
      texto: "Um resumo das vitórias militares de Davi, com a nota que atravessa todo o livro: “o Senhor guardava a Davi por onde quer que ia”. E ele reinava “fazendo juízo e justiça a todo o seu povo” — poder exercido com responsabilidade.",
      pergunta: "Tenho exercido qualquer autoridade que possuo com justiça, não apenas com eficiência?"
    },
    "1 Crônicas 19": {
      texto: "Uma gentileza diplomática de Davi é interpretada como espionagem, e os embaixadores são humilhados publicamente. O conflito que se segue não nasceu de erro de Davi — às vezes a hostilidade vem sem que tenhamos causado.",
      pergunta: "Como reajo quando minhas boas intenções são interpretadas da pior forma possível?"
    },
    "1 Crônicas 20": {
      texto: "Batalhas contra os filisteus e a queda de gigantes descendentes de Rafa. Curiosamente, Crônicas omite aqui o episódio com Bate-Seba — o autor escolhe focar no legado do reino, não porque o pecado não tenha existido, mas porque seu propósito é outro.",
      pergunta: "Tenho enxergado que cada relato bíblico tem um propósito específico, e não é omissão desonesta?"
    },
    "1 Crônicas 21": {
      texto: "Davi ordena o censo por orgulho e traz praga sobre o povo. Ao comprar a eira de Ornã para o altar, recusa recebê-la de graça: “não tomarei o que é teu para o Senhor, nem oferecerei holocausto que nada me custe”.",
      pergunta: "O que tenho oferecido a Deus me custa algo real, ou só o que não me faz falta?"
    },
    "1 Crônicas 22": {
      texto: "Impedido de construir o templo por ter derramado muito sangue, Davi dedica os últimos anos a preparar tudo para Salomão — material, mão de obra, instruções. Trabalhar para uma obra que outro concluirá exige generosidade rara.",
      pergunta: "Consigo trabalhar por algo cujo fruto talvez só outra pessoa colha?"
    },
    "1 Crônicas 23": {
      texto: "Davi organiza os levitas em turnos de serviço, com funções específicas: uns nos portões, outros nos cantos, outros nos utensílios. Estrutura e planejamento a serviço da adoração, não como burocracia vazia.",
      pergunta: "Tenho organizado minha vida de forma que ela sustente, e não atrapalhe, minha vida com Deus?"
    },
    "1 Crônicas 24": {
      texto: "As divisões sacerdotais são estabelecidas por sorteio, “tanto para o pequeno como para o grande”. Ninguém recebeu privilégio por influência — a distribuição foi deliberadamente imparcial.",
      pergunta: "Tenho tratado pessoas com imparcialidade, independentemente da posição delas?"
    },
    "1 Crônicas 25": {
      texto: "Os músicos são organizados para “profetizar com harpas, com alaúdes e com címbalos”. A música no templo não era enfeite: era ministério, com dedicação e treino equivalentes ao de qualquer outra função sagrada.",
      pergunta: "Tenho tratado a adoração musical como ministério sério, ou como acessório do culto?"
    },
    "1 Crônicas 26": {
      texto: "Os porteiros são designados por sorteio para cada portão, e alguns ficam responsáveis pelos tesouros da casa de Deus. Funções de guarda e administração descritas com a mesma dignidade das sacerdotais.",
      pergunta: "Tenho valorizado funções administrativas e práticas como parte legítima do serviço a Deus?"
    },
    "1 Crônicas 27": {
      texto: "A organização militar e administrativa do reino, com chefes de divisões mensais e supervisores de campos, vinhas e rebanhos. Um reino bem governado exigia estrutura civil competente, não só fervor espiritual.",
      pergunta: "Tenho cuidado da competência prática nas áreas que Deus colocou sob minha responsabilidade?"
    },
    "1 Crônicas 28": {
      texto: "Davi entrega publicamente a Salomão as plantas do templo e o encoraja: “sê forte e corajoso, e faze a obra... não temas, porque o Senhor Deus está contigo; não te deixará, nem te desamparará”. Transição de liderança feita com bênção, não com apego.",
      pergunta: "Tenho encorajado quem vem depois de mim, em vez de me agarrar ao meu próprio papel?"
    },
    "1 Crônicas 29": {
      texto: "Davi oferece do próprio tesouro e o povo contribui com alegria. Sua oração final resume tudo: “tudo vem de ti, e do que é teu to damos”. Generosidade que reconhece não estar dando nada que já não fosse de Deus.",
      pergunta: "Reconheço que tudo o que ofereço a Deus já pertencia a Ele antes de chegar às minhas mãos?"
    },
    "2 Crônicas 1": {
      texto: "Salomão, no início do reinado, pede sabedoria e conhecimento para governar bem o povo — e Deus, agradado por ele não ter pedido riquezas nem a morte dos inimigos, concede tudo junto. O pedido revela o coração.",
      pergunta: "Se eu pudesse pedir uma coisa a Deus hoje, o que meu pedido revelaria sobre meu coração?"
    },
    "2 Crônicas 2": {
      texto: "Salomão organiza a construção do templo com uma consciência humilde: “quem seria capaz de lhe edificar casa, visto que os céus não o podem conter?”. Ele constrói sabendo, desde o início, que a obra jamais seria proporcional a Deus.",
      pergunta: "Tenho consciência de que nada que eu faça para Deus é proporcional a quem Ele é?"
    },
    "2 Crônicas 3": {
      texto: "O templo é erguido no monte Moriá — o mesmo lugar onde Abraão fora provado com Isaque, e onde Davi comprara a eira de Ornã. Deus tece a história em lugares que carregam memória de gerações anteriores.",
      pergunta: "Consigo enxergar como Deus tem conectado momentos distantes da minha própria história?"
    },
    "2 Crônicas 4": {
      texto: "A descrição dos utensílios — o mar de bronze, as bacias, os candeeiros de ouro. Cada peça tinha função na adoração, e cada uma foi feita com excelência. Cuidado com o detalhe como forma de reverência.",
      pergunta: "Tenho feito com excelência as coisas que dedico a Deus, ou com pressa e desleixo?"
    },
    "2 Crônicas 5": {
      texto: "Quando os cantores e músicos louvam “como um só”, a glória do Senhor enche o templo em forma de nuvem, e os sacerdotes não conseguem continuar o serviço. Unidade na adoração precedeu a manifestação da presença.",
      pergunta: "Tenho contribuído para a unidade na adoração, ou trazido divisão para dentro dela?"
    },
    "2 Crônicas 6": {
      texto: "A longa oração de dedicação de Salomão antecipa todos os cenários futuros — derrota, seca, fome, exílio — e pede que Deus ouça do céu quando o povo se voltar para Ele. Uma oração que já contava com o fracasso humano e com a misericórdia divina.",
      pergunta: "Tenho orado prevendo minha própria fraqueza futura, e não só o momento presente?"
    },
    "2 Crônicas 7": {
      texto: "Fogo desce do céu e a glória enche a casa. E vem a promessa mais citada do livro: “se o meu povo, que se chama pelo meu nome, se humilhar, e orar... então eu ouvirei dos céus, perdoarei os seus pecados e sararei a sua terra”.",
      pergunta: "Tenho começado pela humilhação e oração, ou tento consertar minha situação sozinho(a) primeiro?"
    },
    "2 Crônicas 8": {
      texto: "Salomão consolida cidades, obras e a organização do culto, mantendo os turnos sacerdotais que Davi estabelecera. O sucesso administrativo do reino não substituiu a estrutura de adoração — as duas coisas andaram juntas.",
      pergunta: "Tenho deixado o sucesso prático ocupar o espaço que era da minha vida com Deus?"
    },
    "2 Crônicas 9": {
      texto: "A rainha de Sabá vem de longe, testa Salomão e conclui que nem metade lhe fora contado — e louva ao Deus de Israel por isso. A sabedoria vivida com integridade atraiu uma estrangeira a reconhecer o Senhor.",
      pergunta: "Minha vida tem levado outros a reconhecer Deus, ou apenas a me admirar?"
    },
    "2 Crônicas 10": {
      texto: "Roboão despreza o conselho dos anciãos e escolhe o dos jovens que cresceram com ele, prometendo governar com dureza ainda maior. O reino se divide. Uma decisão arrogante custou o que gerações levaram décadas construindo.",
      pergunta: "Tenho buscado conselho de quem tem experiência, ou só de quem pensa igual a mim?"
    },
    "2 Crônicas 11": {
      texto: "Roboão fortalece Judá, e sacerdotes e levitas de todo Israel migram para lá porque Jeroboão os rejeitara. Quando a liderança abandona a verdade, os fiéis se movem para onde ainda podem servir a Deus com integridade.",
      pergunta: "Tenho buscado ambientes onde posso servir a Deus com integridade, mesmo custando conforto?"
    },
    "2 Crônicas 12": {
      texto: "Quando Roboão se fortalece, abandona a Lei — e sofre invasão. Ao se humilhar, recebe alívio parcial. O texto resume seu problema: “fez o mal, porquanto não dispôs o seu coração para buscar ao Senhor”.",
      pergunta: "Meu coração está disposto a buscar a Deus, ou apenas reage quando algo dá errado?"
    },
    "2 Crônicas 13": {
      texto: "Abias enfrenta um exército duas vezes maior e vence porque “se apoiaram no Senhor Deus de seus pais”. No meio da batalha, os sacerdotes tocam as trombetas e o povo grita — dependência declarada antes da vitória.",
      pergunta: "Em que tenho me apoiado quando enfrento algo maior do que minha capacidade?"
    },
    "2 Crônicas 14": {
      texto: "Asa remove os altares estranhos e, diante de um exército imenso, ora: “Senhor, nada para ti é ajudar, quer o poderoso, quer o de nenhuma força”. A vitória vem, e ela nasceu de uma reforma feita antes da crise.",
      pergunta: "Tenho feito reformas no meu coração antes das crises, ou só durante elas?"
    },
    "2 Crônicas 15": {
      texto: "O profeta Azarias declara: “o Senhor está convosco, enquanto vós estais com ele; se o buscardes, o achareis”. Asa responde renovando a aliança com todo o povo, com alegria e juramento público.",
      pergunta: "Tenho buscado a Deus de forma que Ele possa ser encontrado, ou de longe e sem compromisso?"
    },
    "2 Crônicas 16": {
      texto: "No fim da vida, Asa faz aliança com a Síria em vez de confiar em Deus, e é repreendido: “os olhos do Senhor passam por toda a terra, para mostrar-se forte com aqueles cujo coração é perfeito para com ele”. Depois, doente, busca médicos e não o Senhor.",
      pergunta: "Tenho confiado menos em Deus justamente nas áreas em que já vi Sua fidelidade antes?"
    },
    "2 Crônicas 17": {
      texto: "Josafá fortalece o reino e faz algo notável: envia príncipes, levitas e sacerdotes para ensinar a Lei pelas cidades de Judá, “levando consigo o livro da Lei”. Reforma que começa pelo ensino da Palavra ao povo comum.",
      pergunta: "Tenho investido em conhecer a Palavra, ou dependo só do que ouço de terceiros?"
    },
    "2 Crônicas 18": {
      texto: "Josafá se alia a Acabe e quase morre por isso, ignorando o único profeta que falava a verdade. Alianças com quem despreza a Deus custam caro, mesmo quando parecem estratégicas.",
      pergunta: "Tenho feito alianças convenientes que comprometem meus princípios?"
    },
    "2 Crônicas 19": {
      texto: "Repreendido pelo vidente Jeú, Josafá corrige o rumo e nomeia juízes com instrução clara: “vede o que fazeis, porque não julgais da parte do homem, senão da parte do Senhor”. Justiça exercida como responsabilidade diante de Deus.",
      pergunta: "Tenho tratado minhas decisões como algo de que prestarei contas a Deus?"
    },
    "2 Crônicas 20": {
      texto: "Diante de exércitos aliados, Josafá ora: “em nós não há força... porém os nossos olhos estão postos em ti”. Deus responde que a batalha é Dele, e o povo vence enviando cantores à frente do exército, louvando antes da vitória.",
      pergunta: "Consigo louvar antes de ver a resposta, ou só depois que o problema se resolve?"
    },
    "2 Crônicas 21": {
      texto: "Jeorão mata os próprios irmãos e conduz Judá à idolatria, morrendo de doença dolorosa “sem deixar saudades”. Um resumo trágico de uma vida com poder e sem caráter.",
      pergunta: "Que tipo de memória minha vida está construindo para quem fica?"
    },
    "2 Crônicas 22": {
      texto: "Acazias reina apenas um ano, aconselhado pela mãe “para proceder impiamente”. Depois, Atalia tenta exterminar a linhagem real, mas o bebê Joás é escondido no templo por seis anos, preservando a promessa.",
      pergunta: "Tenho tido cuidado com as vozes que aconselham minhas decisões mais importantes?"
    },
    "2 Crônicas 23": {
      texto: "O sacerdote Joiada organiza corajosamente a coroação de Joás e a queda de Atalia, restaurando a aliança entre o povo e Deus. Fé combinada com coragem prática e planejamento cuidadoso.",
      pergunta: "Tenho unido minha fé a coragem prática, ou espero que tudo se resolva sozinho?"
    },
    "2 Crônicas 24": {
      texto: "Joás repara o templo enquanto Joiada vive — mas depois da morte do sacerdote, abandona o Senhor e chega a mandar matar o filho de Joiada, que o repreendia. Fé sustentada apenas pela influência de outro não sobrevive à ausência dele.",
      pergunta: "Minha fé se sustenta sozinha, ou depende de alguém que me mantém no caminho?"
    },
    "2 Crônicas 25": {
      texto: "Amazias obedece parcialmente — “fez o que era reto, porém não com coração perfeito” — e depois adora os deuses dos edomitas que acabara de derrotar. Obediência pela metade abre a porta para a queda inteira.",
      pergunta: "Existe alguma obediência minha que é real, mas feita “sem coração perfeito”?"
    },
    "2 Crônicas 26": {
      texto: "Uzias prospera enquanto busca ao Senhor, mas “havendo-se já fortificado, exaltou-se o seu coração” e ele invade o santuário para queimar incenso, sendo ferido de lepra. O sucesso testou algo que a dificuldade nunca havia testado.",
      pergunta: "O sucesso tem me tornado mais grato, ou mais autossuficiente?"
    },
    "2 Crônicas 27": {
      texto: "Jotão “fez o que era reto aos olhos do Senhor... e se fortificou, porque dirigiu os seus caminhos perante o Senhor”. Um reinado bom, resumido em poucos versículos — nem toda fidelidade rende histórias dramáticas.",
      pergunta: "Consigo ser fiel mesmo quando minha história não parece extraordinária?"
    },
    "2 Crônicas 28": {
      texto: "Acaz sacrifica os próprios filhos e fecha as portas do templo. No meio do caos, um profeta convence os vencedores de Israel a devolverem os cativos de Judá com roupa e comida — misericórdia inesperada em meio à degradação geral.",
      pergunta: "Tenho demonstrado misericórdia inesperada, mesmo com quem seria “inimigo”?"
    },
    "2 Crônicas 29": {
      texto: "Ezequias reabre as portas do templo no primeiro mês do seu reinado e restaura o culto, dizendo aos levitas: “não sejais negligentes”. A prioridade da restauração espiritual foi imediata, não deixada para depois.",
      pergunta: "O que tenho adiado restaurar na minha vida com Deus?"
    },
    "2 Crônicas 30": {
      texto: "Ezequias convida todo o povo, inclusive as tribos do norte, para a Páscoa. Muitos zombam, mas alguns se humilham e vão. E Deus atende a oração por quem participou sem a purificação exigida — a misericórdia superou o ritual.",
      pergunta: "Já rejeitei alguém por não cumprir todos os requisitos, quando Deus estava disposto a receber?"
    },
    "2 Crônicas 31": {
      texto: "Depois da celebração, o povo traz ofertas em tal abundância que sobram montões, e o culto é reorganizado. Ezequias “fez o que era bom, e reto, e verdadeiro perante o Senhor” em tudo que empreendeu.",
      pergunta: "Minha alegria espiritual tem se traduzido em generosidade prática?"
    },
    "2 Crônicas 32": {
      texto: "Senaqueribe cerca Jerusalém com ameaças e zombarias, e Ezequias ora junto com o profeta Isaías. Deus envia um anjo e o exército assírio é destruído. Mas depois, o rei se enche de orgulho, e precisa se humilhar novamente.",
      pergunta: "Depois de um livramento, tenho me mantido humilde ou me sentido merecedor(a)?"
    },
    "2 Crônicas 33": {
      texto: "Manassés é o pior rei de Judá — feitiçaria, ídolos no templo, sacrifício de filhos. Levado cativo com ganchos, ele se humilha profundamente, e Deus o restaura. Um dos retratos mais radicais de arrependimento genuíno na Bíblia.",
      pergunta: "Acredito que ninguém está longe demais para ser alcançado por um arrependimento sincero?"
    },
    "2 Crônicas 34": {
      texto: "Josias, ainda jovem, busca ao Senhor e ordena o reparo do templo. Durante a obra, encontram o Livro da Lei esquecido — e ao ouvi-lo, ele rasga as vestes. A Palavra redescoberta produziu quebrantamento antes de produzir reforma.",
      pergunta: "Quando leio a Palavra, ela ainda me confronta, ou já a leio sem ser tocado(a)?"
    },
    "2 Crônicas 35": {
      texto: "Josias celebra a maior Páscoa desde os dias de Samuel, com organização detalhada e generosidade pessoal. Mas morre em batalha por não ouvir uma advertência que vinha de onde ele não esperava.",
      pergunta: "Tenho ignorado advertências só porque vieram de uma fonte inesperada?"
    },
    "2 Crônicas 36": {
      texto: "O livro termina com a queda de Jerusalém, o templo incendiado e o exílio — “porque zombavam dos mensageiros de Deus... até que não houve remédio”. E, no último versículo, o decreto de Ciro autorizando a volta: a história não termina em ruína.",
      pergunta: "Consigo enxergar que, mesmo depois da consequência mais dura, Deus ainda escreve um recomeço?"
    },
    "Esdras 1": {
      texto: "Ciro, rei pagão da Pérsia, decreta a libertação dos judeus para reconstruir o templo — cumprindo exatamente o que Jeremias profetizara décadas antes do exílio terminar. Deus move até o coração de um rei estrangeiro para cumprir uma promessa feita ao Seu povo.",
      pergunta: "Confio que Deus pode usar até pessoas ou circunstâncias fora da fé para cumprir promessas feitas a mim?"
    },
    "Esdras 2": {
      texto: "Uma lista extensa de quem retornou do exílio, família por família — quase cinquenta mil pessoas decidindo deixar a segurança da Babilônia para reconstruir ruínas incertas em Jerusalém. Voltar ao propósito de Deus exigiu coragem de abrir mão de conforto estabelecido.",
      pergunta: "Tenho tido coragem de abrir mão de conforto estabelecido para retomar algo que Deus pede?"
    },
    "Esdras 3": {
      texto: "Antes mesmo de reconstruir o templo por completo, o povo já reergue o altar e recomeça os sacrifícios — priorizando adoração antes de infraestrutura completa. Quando o alicerce do novo templo é lançado, há choro de alegria misturado com choro de saudade dos mais velhos.",
      pergunta: "Tenho priorizado adoração genuína antes de esperar que tudo esteja perfeitamente estruturado?"
    },
    "Esdras 4": {
      texto: "Opositores locais tentam sabotar a reconstrução com acusações falsas ao rei persa, e a obra é interrompida por anos. Nem todo projeto fiel a Deus avança sem oposição — às vezes o atraso vem de fora, não de falta de fé de quem constrói.",
      pergunta: "Tenho desanimado diante de oposição externa a algo que sei que é obra de Deus?"
    },
    "Esdras 5": {
      texto: "Os profetas Ageu e Zacarias incentivam o povo a retomar a obra parada, e as autoridades persas, ao investigarem, confirmam a legitimidade do decreto original de Ciro. Encorajamento profético certo, no momento certo, reacende um projeto que estava esquecido.",
      pergunta: "Já precisei de uma palavra de encorajamento externa para retomar algo que eu havia abandonado?"
    },
    "Esdras 6": {
      texto: "O rei Dario não só confirma o decreto anterior como ordena que o próprio tesouro real financie a obra — o templo é finalmente concluído e dedicado com grande alegria. O que parecia impossível diante da oposição se cumpre completamente no tempo certo de Deus.",
      pergunta: "Consigo lembrar de uma vez em que algo que parecia impossível se resolveu completamente no tempo certo?"
    },
    "Esdras 7": {
      texto: "Esdras, sacerdote e escriba dedicado, viaja de Babilônia a Jerusalém décadas depois, descrito como alguém que “tinha preparado o seu coração para buscar a lei do Senhor, e para a cumprir, e para ensinar”. Estudo sério da Palavra sempre precede o ensino fiel dela a outros.",
      pergunta: "Tenho preparado meu coração para estudar a Palavra antes de tentar ensinar ou aplicar algo dela?"
    },
    "Esdras 8": {
      texto: "Antes da longa e perigosa viagem, Esdras convoca jejum coletivo, admitindo que teve vergonha de pedir escolta militar ao rei depois de ter declarado publicamente que a mão de Deus os protegeria. Coerência entre o que se declara e o que se pratica exige coragem real.",
      pergunta: "Minhas ações têm sido coerentes com o que declaro publicamente sobre minha confiança em Deus?"
    },
    "Esdras 9": {
      texto: "Ao chegar, Esdras descobre que o povo voltou a se casar com nações idólatras vizinhas, repetindo o mesmo erro que gerou o exílio, e reage com profunda angústia e oração de confissão coletiva — “ó meu Deus, envergonhado e confundido estou”.",
      pergunta: "Já senti vergonha genuína ao perceber que repeti um padrão de erro que já havia custado caro antes?"
    },
    "Esdras 10": {
      texto: "O povo se compromete publicamente a corrigir o erro, mesmo sendo uma decisão dolorosa e complexa de se implementar. O livro termina não numa vitória triunfante, mas num compromisso difícil e sincero de recomeçar corretamente.",
      pergunta: "Tenho tido coragem de tomar decisões difíceis para corrigir um erro, mesmo sem solução fácil ou confortável?"
    },
    "Neemias 1": {
      texto: "Ao saber que os muros de Jerusalém continuavam em ruínas, Neemias, servindo na corte persa, chora, jejua e ora por dias — antes de qualquer ação, vem oração persistente e confissão dos pecados do próprio povo, não só reclamação da situação.",
      pergunta: "Diante de um problema que me aflige, minha primeira reação tem sido orar com profundidade, ou só reclamar?"
    },
    "Neemias 2": {
      texto: "O rei percebe a tristeza no rosto de Neemias e pergunta o motivo — e Neemias, depois de orar rapidamente em silêncio, pede autorização para reconstruir a cidade. Oração breve e instantânea, no meio de uma conversa, também tem poder real.",
      pergunta: "Tenho orado rapidamente em momentos decisivos, confiando que Deus ouve mesmo orações breves?"
    },
    "Neemias 3": {
      texto: "Uma lista detalhada de quem construiu cada trecho do muro — sacerdotes, perfumistas, ourives, famílias inteiras trabalhando lado a lado nas partes próximas de suas próprias casas. A reconstrução envolveu todo tipo de pessoa, cada uma fazendo sua parte específica.",
      pergunta: "Tenho feito minha parte específica na obra de Deus, mesmo que pareça pequena comparada à de outros?"
    },
    "Neemias 4": {
      texto: "Diante de zombaria e ameaça de ataque, os construtores trabalham com a ferramenta numa mão e a arma na outra — vigilância prática e fé não eram opostas. Neemias responde às ameaças com oração e organização estratégica, não com pânico.",
      pergunta: "Consigo equilibrar fé genuína com preparo prático diante de uma ameaça real?"
    },
    "Neemias 5": {
      texto: "Neemias descobre que ricos da própria comunidade exploravam os pobres com juros excessivos durante a crise, e confronta isso abertamente, recusando até seu próprio direito legal de sustento como governador. Liderança íntegra exige agir contra injustiça mesmo dentro do próprio grupo.",
      pergunta: "Tenho recusado vantagens pessoais legítimas quando isso poderia prejudicar quem tem menos que eu?"
    },
    "Neemias 6": {
      texto: "Inimigos tentam repetidamente distrair Neemias da obra com convites suspeitos e acusações falsas, e ele responde com uma frase que se tornou clássica: “estou fazendo uma grande obra, e não posso descer”. Foco na tarefa dada por Deus resiste a distrações constantes.",
      pergunta: "Tenho mantido o foco numa tarefa importante de Deus, mesmo diante de distrações e provocações repetidas?"
    },
    "Neemias 7": {
      texto: "O muro está concluído em apenas 52 dias, e Neemias organiza porteiros, cantores e levitas para a segurança e adoração da cidade recém-fortificada. Concluir a obra física é só o começo — a organização contínua da vida comunitária vem em seguida.",
      pergunta: "Depois de concluir algo importante, tenho me organizado para sustentar o que foi construído?"
    },
    "Neemias 8": {
      texto: "Esdras lê a Lei publicamente por horas, e o povo chora ao ouvir — mas os líderes os instruem: “não vos entristeçais, porque a alegria do Senhor é a vossa força”. Convicção genuína sobre o pecado deveria levar à alegria da graça, não ao desespero permanente.",
      pergunta: "Tenho permitido que a convicção sobre meu pecado se transforme em alegria pela graça, e não em desespero?"
    },
    "Neemias 9": {
      texto: "O povo faz uma longa oração de confissão coletiva, relembrando toda a história de fidelidade de Deus e infidelidade humana desde Abraão. Lembrar a história inteira — o bem e o mal — ajuda a comunidade a entender de onde veio e para onde precisa ir.",
      pergunta: "Tenho conhecido bem a minha própria história com Deus, incluindo os momentos de infidelidade dela?"
    },
    "Neemias 10": {
      texto: "O povo assina um compromisso formal e coletivo de obediência — dízimos, sábado, casamentos dentro da fé. Um compromisso público e por escrito reforçava a seriedade da decisão de viver diferente a partir daquele momento.",
      pergunta: "Já assumi um compromisso claro e concreto (não só uma intenção vaga) de mudar algo na minha vida com Deus?"
    },
    "Neemias 11": {
      texto: "Como a cidade reconstruída estava pouco povoada, o povo lança sortes para decidir quem se mudaria para Jerusalém — e alguns se oferecem voluntariamente, sendo elogiados por isso. Sacrifício pessoal voluntário pelo bem comum é destacado como virtude notável.",
      pergunta: "Tenho me oferecido voluntariamente para algo necessário, mesmo que exija sacrifício pessoal?"
    },
    "Neemias 12": {
      texto: "A dedicação do muro é celebrada com dois grandes coros cantando em direções opostas ao redor da cidade, com tanta alegria que “se ouvia até de longe”. Celebração pública e sonora marca a conclusão de uma obra longa e difícil.",
      pergunta: "Tenho celebrado publicamente e com alegria genuína quando Deus completa algo difícil na minha vida?"
    },
    "Neemias 13": {
      texto: "Depois de voltar temporariamente à Pérsia, Neemias retorna e encontra o povo já relaxando nos compromissos assumidos — profanando o sábado, tolerando casamentos mistos outra vez. Ele reage com firmeza imediata, mostrando que vigilância contínua é necessária mesmo após reformas bem-sucedidas.",
      pergunta: "Tenho mantido vigilância contínua sobre compromissos que já assumi, ou relaxo assim que ninguém está cobrando?"
    },
    "Ester 1": {
      texto: "A rainha Vasti se recusa a ser exibida como troféu diante de convidados embriagados, e é deposta por isso — abrindo caminho para Ester. Um ato de dignidade pessoal, mesmo custando caro, acaba servindo a um propósito muito maior que a própria Vasti nunca conheceria.",
      pergunta: "Já mantive minha dignidade mesmo sabendo que isso custaria caro no momento?"
    },
    "Ester 2": {
      texto: "Ester se torna rainha depois de um processo longo, mas mantém em segredo sua identidade judaica, seguindo o conselho de Mardoqueu. Discrição estratégica, guiada por sabedoria, prepararia o terreno para o momento certo de agir mais adiante.",
      pergunta: "Tenho sabedoria para saber quando falar e quando guardar silêncio estratégico?"
    },
    "Ester 3": {
      texto: "Hamã, ofendido por Mardoqueu não se curvar a ele, arquiteta um genocídio contra todos os judeus do império, disfarçado de decreto legal. Ódio pessoal não tratado pode escalar rapidamente para destruição em massa quando ganha poder institucional.",
      pergunta: "Tenho visto como ressentimentos pessoais, quando ganham poder, podem causar destruição desproporcional?"
    },
    "Ester 4": {
      texto: "Mardoqueu desafia Ester a agir, alertando que talvez ela tivesse chegado à posição de rainha “para tal tempo como este”. Ester decide arriscar a própria vida, indo ao rei sem ser chamada: “se perecer, pereça”.",
      pergunta: "Reconheço que a posição em que estou hoje pode existir por um propósito maior de Deus, “para tal tempo como este”?"
    },
    "Ester 5": {
      texto: "Ester planeja cuidadosamente sua abordagem ao rei, convidando-o e a Hamã para dois banquetes consecutivos em vez de fazer o pedido de imediato. Sabedoria estratégica e paciência no timing certo, não pressa emocional, guiam o momento da revelação.",
      pergunta: "Tenho tido paciência para escolher o momento certo antes de agir numa situação delicada?"
    },
    "Ester 6": {
      texto: "Numa noite sem sono, o rei manda ler os registros do reino e descobre que Mardoqueu nunca fora recompensado por salvar sua vida anos antes — e força justamente Hamã a honrá-lo publicamente. Uma “coincidência” de insônia muda todo o rumo da história.",
      pergunta: "Já vivi um “acaso” aparentemente pequeno que, olhando para trás, teve um propósito claro de Deus?"
    },
    "Ester 7": {
      texto: "No segundo banquete, Ester finalmente revela seu povo e acusa Hamã diretamente diante do rei — o mesmo homem que arquitetara a forca para Mardoqueu acaba sendo enforcado nela. A justiça de Deus muitas vezes se revela através da reviravolta exata do plano do próprio malfeitor.",
      pergunta: "Confio que a justiça de Deus pode se revelar mesmo quando o mal parece estar vencendo?"
    },
    "Ester 8": {
      texto: "Como a lei persa não podia ser revogada, um novo decreto é emitido permitindo aos judeus se defenderem — Deus trabalha até dentro das limitações burocráticas de um sistema imperfeito para preservar Seu povo.",
      pergunta: "Confio que Deus pode agir mesmo dentro de sistemas ou situações limitadas e imperfeitas?"
    },
    "Ester 9": {
      texto: "Os judeus se defendem com sucesso, e a data que seria de destruição se transforma em celebração anual — a festa de Purim. O que fora planejado para aniquilação vira memorial permanente de livramento.",
      pergunta: "Tenho algum “dia difícil” da minha história que Deus transformou em motivo de celebração e gratidão?"
    },
    "Ester 10": {
      texto: "O livro termina com Mardoqueu em posição de grande honra, buscando “o bem do seu povo”. Curiosamente, Deus não é mencionado nominalmente uma única vez em todo o livro de Ester — e ainda assim Sua mão providencial está visível em cada capítulo.",
      pergunta: "Consigo reconhecer a mão de Deus mesmo quando Ele parece “silencioso”, sem intervenção visível e direta?"
    },
    "Jó 1": {
      texto: "Jó é descrito como “íntegro e reto”, e sua tragédia não nasce de pecado algum — Satanás desafia se sua fé resistiria sem as bênçãos. Perdendo tudo num só dia, a resposta de Jó desarma qualquer teologia simplista: “o Senhor o deu, o Senhor o tirou; bendito seja o nome do Senhor”.",
      pergunta: "Minha fé resistiria se as bênçãos que hoje tenho fossem removidas de repente?"
    },
    "Jó 2": {
      texto: "Depois de perder bens e filhos, Jó ainda é atingido no próprio corpo com chagas dolorosas. Sua esposa sugere “amaldiçoa a Deus, e morre”, e ele recusa: “receberíamos o bem de Deus, e o mal não receberíamos?”. Fé genuína não depende de circunstâncias favoráveis.",
      pergunta: "Tenho tratado bênçãos e dificuldades como vindas da mesma mão soberana de Deus?"
    },
    "Jó 3": {
      texto: "Depois de sete dias de silêncio ao lado dele, Jó finalmente fala — e amaldiçoa o próprio dia de nascimento, num lamento cru e desesperado. A Bíblia registra honestamente essa angústia extrema, sem apressar uma resposta piedosa antes da hora.",
      pergunta: "Tenho permitido a mim mesmo(a) — ou a outros — expressar dor genuína sem apressar uma resposta “espiritual” pronta?"
    },
    "Jó 4": {
      texto: "Elifaz, o primeiro amigo a falar, sugere que sofrimento sempre indica pecado escondido: “quem sendo inocente jamais pereceu?”. É uma teologia que soa piedosa, mas o livro inteiro, no final, revelará que Deus a rejeita como errada.",
      pergunta: "Já assumi erradamente que o sofrimento de alguém era prova de pecado escondido?"
    },
    "Jó 5": {
      texto: "Elifaz continua seu conselho, corretamente lembrando que Deus é grande e misericordioso, mas aplicando isso de forma errada à situação de Jó — verdades certas, aplicadas no lugar errado, ainda machucam. Nem toda frase teologicamente correta conforta quem sofre.",
      pergunta: "Tenho oferecido verdades corretas, mas no momento ou contexto errado, para quem está sofrendo?"
    },
    "Jó 6": {
      texto: "Jó responde que sua angústia pesa mais que a areia dos mares, e pede compaixão em vez de correção precipitada: “compaixão devia o desesperado receber de seu amigo”. Antes de aconselhar, é preciso primeiro escutar de verdade.",
      pergunta: "Tenho oferecido compaixão antes de correção quando alguém próximo está sofrendo?"
    },
    "Jó 7": {
      texto: "Jó descreve suas noites insones e sua sensação de que a vida é like “um sopro”, questionando diretamente a Deus por que Ele parece tão atento a vigiar seus erros. A queixa é dirigida a Deus diretamente, não escondida — Jó nunca deixa de falar com Ele, mesmo na dor.",
      pergunta: "Quando estou sofrendo, continuo falando diretamente com Deus, ou me afasto Dele em silêncio?"
    },
    "Jó 8": {
      texto: "Bildade, o segundo amigo, argumenta com mais dureza ainda: se os filhos de Jó morreram, deve ter sido por pecado deles. Mais uma vez, sofrimento é tratado como equação matemática de causa e efeito — uma simplificação que a própria história de Jó desmentirá.",
      pergunta: "Tenho tratado a dor alheia como uma equação simples de causa e efeito, sem espaço pra mistério?"
    },
    "Jó 9": {
      texto: "Jó reconhece a grandeza incompreensível de Deus, mas lamenta não ter “árbitro” que pudesse mediar entre eles — um anseio por alguém que ligasse o divino e o humano, que os cristãos entenderiam mais tarde como apontando para Cristo.",
      pergunta: "Reconheço em Cristo o mediador que Jó ansiava sem ainda conhecer?"
    },
    "Jó 10": {
      texto: "Num dos lamentos mais dolorosos do livro, Jó pergunta a Deus diretamente por que o formou apenas para depois destruí-lo. A honestidade brutal da oração de Jó mostra que Deus suporta perguntas difíceis feitas com sinceridade, não apenas louvor confortável.",
      pergunta: "Tenho medo de fazer perguntas difíceis e honestas a Deus, achando que isso seria desrespeito?"
    },
    "Jó 11": {
      texto: "Zofar, o terceiro amigo, é ainda mais direto: sugere que Jó provavelmente merece até menos punição do que realmente recebeu. A crueldade disfarçada de conselho espiritual piora a dor em vez de aliviá-la.",
      pergunta: "Já fui duro(a) demais com alguém que sofre, disfarçando dureza de “conselho espiritual”?"
    },
    "Jó 12": {
      texto: "Jó responde com ironia afiada: “vós, na verdade, sois o povo, e convosco morrerá a sabedoria”. Ele reconhece a soberania de Deus sobre tudo, mas rejeita a arrogância de amigos que acham ter todas as respostas sobre o sofrimento dos outros.",
      pergunta: "Tenho sido humilde o suficiente para admitir que nem sempre entendo o sofrimento alheio completamente?"
    },
    "Jó 13": {
      texto: "Jó declara que prefere argumentar diretamente com Deus a continuar ouvindo os “médicos que não valem nada” de seus amigos — e afirma, apesar de tudo: “ainda que ele me mate, nele esperarei”. Confiança que persiste mesmo sem entender o motivo do sofrimento.",
      pergunta: "Minha confiança em Deus resiste mesmo quando não entendo o motivo de algo difícil que enfrento?"
    },
    "Jó 14": {
      texto: "Jó reflete sobre a brevidade da vida humana, comparada a uma flor que murcha, e pergunta se o homem, uma vez morto, poderia viver de novo — um vislumbre de esperança de ressurreição em meio ao desespero mais profundo.",
      pergunta: "Consigo manter esperança de eternidade mesmo em meio a um momento de desespero real?"
    },
    "Jó 15": {
      texto: "Elifaz retoma a acusação com ainda mais severidade, insinuando que a própria fala de Jó prova sua culpa. O ciclo de acusação sem evidência se intensifica — os amigos preferem defender sua teoria a realmente ouvir a dor de Jó.",
      pergunta: "Tenho defendido minha própria teoria em vez de realmente ouvir alguém que discorda ou sofre?"
    },
    "Jó 16": {
      texto: "Jó chama seus amigos de “consoladores miseráveis”, sentindo-se ainda mais sozinho por causa deles do que por causa da própria tragédia — e ainda assim declara que tem uma “testemunha nos céus” a seu favor. Solidão humana não significa abandono divino.",
      pergunta: "Já me senti mais sozinho(a) pela reação errada das pessoas do que pela própria dificuldade?"
    },
    "Jó 17": {
      texto: "Jó descreve seu espírito quebrantado e seus dias “extintos”, sentindo-se zombado por aqueles que deveriam confortá-lo. A honestidade sobre o desespero, registrada sem censura na Escritura, valida que a dor profunda não é falta de fé.",
      pergunta: "Tenho me julgado por sentir desespero, achando que isso seria sinal de pouca fé?"
    },
    "Jó 18": {
      texto: "Bildade descreve com detalhes o destino do ímpio, implicitamente aplicando tudo a Jó — retratos vívidos de julgamento, mas aplicados injustamente à pessoa errada. Discurso teológico tecnicamente correto pode ainda assim ser uma acusação injusta.",
      pergunta: "Tenho usado verdades gerais da fé para julgar injustamente uma situação específica que não entendo por completo?"
    },
    "Jó 19": {
      texto: "No meio do sofrimento e abandono de amigos e família, Jó declara uma das afirmações de fé mais poderosas da Bíblia: “eu sei que o meu Redentor vive... depois de consumida a minha pele, todavia, em minha carne verei a Deus”. Esperança de ressurreição brilhando em meio à escuridão total.",
      pergunta: "Consigo declarar esperança em Deus mesmo quando tudo ao redor parece perdido?"
    },
    "Jó 20": {
      texto: "Zofar retoma o argumento com ainda mais intensidade, descrevendo a breve alegria do ímpio antes da destruição — mais uma vez, teoria consistente, mas aplicada de forma cruel e equivocada à situação real de Jó.",
      pergunta: "Tenho repetido argumentos que soam sábios, mas que na prática machucam quem já está sofrendo?"
    },
    "Jó 21": {
      texto: "Jó desafia diretamente a teoria dos amigos com observação real: muitos ímpios vivem prósperos e morrem em paz, contrariando a equação simples de que sofrimento sempre é castigo. A realidade é mais complexa do que fórmulas teológicas fáceis.",
      pergunta: "Tenho reconhecido que nem sempre a vida segue fórmulas simples de causa e efeito espiritual?"
    },
    "Jó 22": {
      texto: "Elifaz vai ainda mais longe, inventando pecados específicos que Jó supostamente cometeu, sem nenhuma evidência real — acusação que se torna calúnia disfarçada de discernimento espiritual.",
      pergunta: "Já inventei ou presumi motivos para o sofrimento de alguém, sem nenhuma evidência real?"
    },
    "Jó 23": {
      texto: "Jó deseja poder apresentar seu caso diretamente diante de Deus, confiando que sairia “como o ouro” depois do teste — mas lamenta não conseguir encontrá-Lo apesar de procurar em todas as direções. A sensação de ausência de Deus no meio da dor é real e registrada sem censura.",
      pergunta: "Já senti que Deus estava ausente, mesmo continuando a buscá-Lo com sinceridade?"
    },
    "Jó 24": {
      texto: "Jó aponta injustiças reais no mundo — órfãos e pobres oprimidos sem punição visível para os opressores — questionando por que Deus parece silencioso diante disso. Uma queixa honesta sobre o problema do mal no mundo, sem resposta fácil oferecida ainda.",
      pergunta: "Já questionei honestamente a Deus sobre injustiças visíveis no mundo ao meu redor?"
    },
    "Jó 25": {
      texto: "Bildade oferece sua última e mais curta fala, reconhecendo brevemente a grandeza incompreensível de Deus diante da pequenez humana — quase como se os amigos estivessem se esgotando de argumentos diante da resistência de Jó.",
      pergunta: "Reconheço minha própria pequenez diante da grandeza de Deus, mesmo sem todas as respostas?"
    },
    "Jó 26": {
      texto: "Jó responde com ironia aos “conselhos” pobres de Bildade, e depois descreve com poesia grandiosa o poder de Deus sobre a criação — “eis que estas são só as orlas dos seus caminhos... quem entenderia o trovão do seu poder?”. Mesmo em meio à disputa, Jó nunca perde a reverência por Deus.",
      pergunta: "Consigo manter reverência genuína por Deus mesmo no meio de uma discussão ou dificuldade acalorada?"
    },
    "Jó 27": {
      texto: "Jó jura solenemente manter sua integridade até o fim: “longe de mim que eu vos justifique; até que eu expire, nunca apartarei de mim a minha sinceridade”. Recusa-se a fingir um pecado que não cometeu só para agradar seus acusadores.",
      pergunta: "Tenho me recusado a fingir culpa que não é minha só para acalmar quem me acusa injustamente?"
    },
    "Jó 28": {
      texto: "Um poema magnífico sobre a busca humana por sabedoria — minerada como prata e ouro, mas impossível de encontrar por esforço próprio. A conclusão é clara: “o temor do Senhor, isso é a sabedoria”. Nem toda pergunta profunda tem resposta acessível fora de Deus.",
      pergunta: "Tenho buscado sabedoria verdadeira através da reverência a Deus, não só do esforço intelectual próprio?"
    },
    "Jó 29": {
      texto: "Jó relembra com saudade os dias em que era respeitado, ajudava os necessitados e sentia a bênção evidente de Deus sobre sua vida — um contraste doloroso com sua situação presente de perda total.",
      pergunta: "Consigo lembrar com gratidão de tempos de bênção, sem deixar que a saudade se torne amargura?"
    },
    "Jó 30": {
      texto: "Agora, Jó é zombado até por gente que antes desprezaria, sentindo-se completamente abandonado, física e socialmente. A queda de honra para humilhação total é descrita com dor crua, sem qualquer suavização literária.",
      pergunta: "Já experimentei uma reviravolta dolorosa de status ou reputação, e como reagi a ela?"
    },
    "Jó 31": {
      texto: "Num juramento extenso e detalhado, Jó declara sua integridade em cada área da vida — olhos, mãos, riqueza, tratamento aos servos — desafiando qualquer acusação específica contra ele. Um exame de consciência corajoso e completo.",
      pergunta: "Conseguiria fazer um juramento tão detalhado quanto o de Jó sobre a integridade da minha própria vida?"
    },
    "Jó 32": {
      texto: "Eliú, mais jovem, quebra o silêncio depois de esperar respeitosamente os mais velhos falarem primeiro — irritado tanto com a arrogância dos amigos quanto com a autojustificação de Jó. Sua fala introduz uma perspectiva diferente antes da resposta final de Deus.",
      pergunta: "Tenho esperado com humildade o momento certo de falar, mesmo tendo algo importante a dizer?"
    },
    "Jó 33": {
      texto: "Eliú argumenta que Deus fala de várias formas — sonhos, sofrimento, um mensageiro — para afastar o homem do orgulho e da destruição. Ele sugere que o sofrimento pode ter propósito redentor, não apenas punitivo.",
      pergunta: "Já considerei que uma dificuldade poderia ter um propósito redentor, não apenas punição?"
    },
    "Jó 34": {
      texto: "Eliú defende vigorosamente a justiça absoluta de Deus: “longe esteja de Deus a impiedade, e do Todo-Poderoso a injustiça”. Ele corrige tanto o exagero dos amigos quanto certos excessos na autodefesa de Jó.",
      pergunta: "Tenho equilibrado defender minha integridade com reconhecer, ao mesmo tempo, a justiça perfeita de Deus?"
    },
    "Jó 35": {
      texto: "Eliú questiona se a justiça ou injustiça humana realmente afeta a grandeza de Deus, e sugere que muitas orações não são respondidas por serem feitas com orgulho, não por Deus ser indiferente ao sofrimento genuíno.",
      pergunta: "Tenho examinado se minhas orações vêm de um coração humilde, não apenas de reivindicação orgulhosa?"
    },
    "Jó 36": {
      texto: "Eliú descreve Deus como grande em poder, mas nunca desprezando o aflito — preparando o terreno para a revelação final que viria diretamente de Deus nos capítulos seguintes. Sofrimento e grandeza divina não são incompatíveis.",
      pergunta: "Consigo conciliar a grandeza incompreensível de Deus com Sua atenção pessoal ao meu sofrimento?"
    },
    "Jó 37": {
      texto: "Eliú termina contemplando o poder de Deus nas tempestades e nos fenômenos naturais — trovão, neve, vento — como prelúdio poético direto à voz de Deus que finalmente vai falar do meio de um redemoinho no próximo capítulo.",
      pergunta: "Tenho parado para contemplar a grandeza de Deus revelada na criação ao meu redor?"
    },
    "Jó 38": {
      texto: "Depois de capítulos de discurso humano, Deus finalmente responde — não explicando o motivo do sofrimento de Jó, mas fazendo pergunta atrás de pergunta sobre a criação: “onde estavas tu quando eu lançava os fundamentos da terra?”. A resposta de Deus não é explicação, é revelação de grandeza.",
      pergunta: "Consigo confiar em Deus mesmo quando Ele não me dá a explicação que eu esperava receber?"
    },
    "Jó 39": {
      texto: "Deus continua o desafio com exemplos da natureza selvagem — cabras monteses, avestruzes, cavalos de guerra — cada um funcionando perfeitamente sob o cuidado divino, muito além do controle ou entendimento humano completo.",
      pergunta: "Reconheço áreas da criação e da vida que estão completamente além do meu controle, mas sob o cuidado de Deus?"
    },
    "Jó 40": {
      texto: "Confrontado pela grandeza de Deus, Jó finalmente responde: “eis que sou vil; que te responderia eu? A minha mão ponho sobre a minha boca”. Diante da revelação de quem Deus realmente é, a autodefesa de Jó se dissolve em silêncio humilde.",
      pergunta: "Já experimentei um momento em que, diante da grandeza de Deus, minhas próprias defesas simplesmente se calaram?"
    },
    "Jó 41": {
      texto: "Deus descreve o Leviatã, uma criatura poderosa e temível que nenhum ser humano poderia domar — reforçando ainda mais que existem forças e mistérios no universo completamente além da capacidade humana de controlar ou compreender.",
      pergunta: "Consigo aceitar que existem coisas na vida que simplesmente não estão sob meu controle nem entendimento?"
    },
    "Jó 42": {
      texto: "Jó se arrepende “em pó e cinza”, não por pecado que causara o sofrimento, mas por ter falado do que não entendia completamente. Deus repreende os amigos por sua teologia errada, restaura Jó em dobro, e o livro termina com relacionamento restaurado, não com explicação completa do sofrimento.",
      pergunta: "Consigo confiar em Deus mesmo sem receber, nesta vida, a explicação completa de todo sofrimento que enfrentei?"
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
    "Salmos 5": {
      texto: "Davi ora pela manhã, antes de qualquer outra coisa: “de manhã ouvirás a minha voz”. Estabelecer a primeira conversa do dia com Deus, antes das distrações começarem, molda o resto de tudo que vem depois.",
      pergunta: "Minha primeira conversa do dia costuma ser com Deus, ou com as distrações que já começam cedo?"
    },
    "Salmos 6": {
      texto: "Um dos salmos penitenciais mais crus: “estou fatigado com o meu gemido; toda a noite faço nadar a minha cama”. Davi chora abertamente diante de Deus, sem vergonha da própria fraqueza, e termina confiando que o Senhor ouviu seu choro.",
      pergunta: "Tenho permitido a mim mesmo(a) chorar abertamente diante de Deus, sem esconder minha fraqueza?"
    },
    "Salmos 7": {
      texto: "Diante de acusação injusta, Davi pede que Deus mesmo seja o juiz: “julgue-me o Senhor conforme a minha justiça”. Ele não tenta se vingar com as próprias mãos — entrega o veredito a quem realmente julga com justiça perfeita.",
      pergunta: "Tenho entregue a Deus o julgamento de situações onde fui acusado(a) injustamente?"
    },
    "Salmos 8": {
      texto: "Contemplando o céu estrelado, Davi se pergunta como Deus, tão grande, se importa com o homem — e ainda assim o coroou “de glória e de honra”. A grandeza do universo, em vez de diminuir o valor humano, revela o quanto Deus escolheu valorizá-lo.",
      pergunta: "Já contemplei a grandeza da criação e me perguntei por que Deus se importa tanto assim comigo?"
    },
    "Salmos 9": {
      texto: "Davi louva a Deus por julgar com retidão e ser “refúgio para o oprimido, refúgio em tempos de angústia”. A justiça de Deus não é abstrata — ela protege ativamente quem está mais vulnerável e sem defesa.",
      pergunta: "Tenho buscado refúgio em Deus especificamente nos meus tempos de angústia mais intensa?"
    },
    "Salmos 10": {
      texto: "O salmista questiona por que Deus parece distante quando o ímpio prospera e oprime os fracos — “por que te escondes nos tempos de angústia?”. Uma queixa honesta que termina, mesmo assim, com confiança de que Deus ouve o clamor do humilde.",
      pergunta: "Consigo trazer minhas perguntas honestas sobre a aparente distância de Deus, sem perder a confiança Nele?"
    },
    "Salmos 11": {
      texto: "Diante do conselho de fugir do perigo, Davi responde com firmeza: “no Senhor confio; como dizeis, pois, à minha alma: foge...?”. Confiança genuína em Deus às vezes significa permanecer firme, não fugir da dificuldade.",
      pergunta: "Tenho permanecido firme na fé quando o conselho ao redor sugeria apenas fugir da dificuldade?"
    },
    "Salmos 12": {
      texto: "Davi lamenta um mundo onde “a lisonja fala cada um com o seu próximo” — palavras vazias e enganosas por todo lado — em contraste com “as palavras do Senhor são palavras puras... prata refinada”. A confiabilidade da Palavra de Deus contrasta com a instabilidade das palavras humanas.",
      pergunta: "Tenho valorizado a Palavra de Deus como algo mais confiável do que as opiniões instáveis ao meu redor?"
    },
    "Salmos 13": {
      texto: "Um lamento intenso — “até quando, Senhor?” repetido quatro vezes — que termina, ainda assim, em confiança renovada: “no teu amor confiei... cantarei ao Senhor”. A honestidade da dor não impede o retorno à fé antes do fim do próprio salmo.",
      pergunta: "Consigo, como Davi, passar da dúvida angustiada de volta à confiança, dentro do mesmo momento de oração?"
    },
    "Salmos 14": {
      texto: "“Diz o néscio no seu coração: não há Deus” — o salmo descreve a corrupção moral que nasce quando a existência de Deus é negada no coração, não apenas intelectualmente. Sem referência a Deus, a bússola moral se perde.",
      pergunta: "Vivo com plena consciência prática de que Deus existe, ou às vezes ajo como se Ele não estivesse olhando?"
    },
    "Salmos 15": {
      texto: "O salmo pergunta quem pode habitar no santo monte de Deus, e responde com um retrato de integridade prática: quem fala a verdade, não caluniar, cumpre juramentos mesmo quando prejudica a si mesmo. Proximidade com Deus se reflete em caráter concreto no dia a dia.",
      pergunta: "Minha integridade se sustenta mesmo quando cumprir a palavra dada me prejudica de alguma forma?"
    },
    "Salmos 16": {
      texto: "“Tu me farás ver a vereda da vida; na tua presença há fartura de alegria”. Um salmo de confiança serena, que Pedro citará em Atos referindo-se à ressurreição de Cristo — esperança que vai além da morte, ancorada na presença de Deus.",
      pergunta: "Onde tenho buscado alegria plena — na presença de Deus, ou em fontes que sempre acabam vazias?"
    },
    "Salmos 17": {
      texto: "Davi pede que Deus examine seu coração e prove que não há maldade nele — confiança que vem de uma vida realmente vivida com integridade diante do escrutínio divino, não de arrogância vazia.",
      pergunta: "Estaria disposto(a) a pedir que Deus examinasse profundamente meu coração agora mesmo?"
    },
    "Salmos 18": {
      texto: "Um cântico extenso de gratidão por libertação de todos os inimigos, repetindo imagens poderosas: rocha, fortaleza, escudo. Olhando para trás numa vida inteira de perseguição, Davi só encontra motivo para louvor, não amargura.",
      pergunta: "Consigo olhar para os desafios superados na minha vida e encontrar motivo genuíno de louvor?"
    },
    "Salmos 19": {
      texto: "“Os céus declaram a glória de Deus” através da criação silenciosa, e depois o salmo muda de foco para a Lei de Deus, “mais desejável do que o ouro”. Duas revelações de Deus — natureza e Palavra — apontando para a mesma verdade.",
      pergunta: "Tenho prestado atenção às duas formas como Deus se revela: a criação ao redor e Sua Palavra escrita?"
    },
    "Salmos 20": {
      texto: "Uma oração de bênção pelo rei antes da batalha: “uns confiam em carros, e outros em cavalos; nós, porém, faremos menção do nome do Senhor”. A verdadeira fonte de confiança nunca esteve nos recursos visíveis, mas no próprio Deus.",
      pergunta: "Onde tenho colocado minha confiança nos momentos decisivos: em recursos próprios, ou no nome de Deus?"
    },
    "Salmos 21": {
      texto: "Continuação do tema anterior, celebrando que o rei confiou no Senhor e recebeu vitória — “tu o preveniste com bênçãos de bondade”. Deus muitas vezes age antes mesmo de sermos gratos ou de percebermos Sua provisão.",
      pergunta: "Consigo reconhecer bênçãos que Deus já colocou no meu caminho antes mesmo de eu pedir?"
    },
    "Salmos 22": {
      texto: "Começa com o grito que Jesus repetiria na cruz — “Deus meu, Deus meu, por que me desamparaste?” — e descreve sofrimento com detalhes impressionantemente próximos da crucificação, séculos antes dela acontecer. O salmo termina, porém, em vitória e louvor internacional.",
      pergunta: "Consigo, como este salmo, expressar honestamente o abandono sentido, sem perder de vista a esperança final?"
    },
    "Salmos 23": {
      texto: "O salmo mais conhecido da Bíblia: “o Senhor é o meu pastor, nada me faltará”. Mesmo no “vale da sombra da morte”, a presença de Deus — “tu estás comigo” — remove o medo, não necessariamente a dificuldade.",
      pergunta: "Tenho experimentado a presença de Deus como suficiente mesmo em vales difíceis, não apenas nos pastos verdes?"
    },
    "Salmos 24": {
      texto: "“A terra é do Senhor, e a sua plenitude”. O salmo pergunta quem pode subir ao monte do Senhor, respondendo com pureza de mãos e coração, e termina celebrando a entrada do “Rei da glória” — antecipação da vinda triunfante de Cristo.",
      pergunta: "Vivo consciente de que tudo que possuo, na verdade, pertence a Deus?"
    },
    "Salmos 25": {
      texto: "Um salmo de confiança e pedido de direção: “ensina-me os teus caminhos... guia-me na tua verdade”. Davi reconhece pecados da juventude e pede que Deus os esqueça segundo Sua misericórdia, não segundo o mérito dele.",
      pergunta: "Tenho pedido a Deus direção ativa para os próximos passos da minha vida?"
    },
    "Salmos 26": {
      texto: "Davi pede que Deus o examine e prove sua integridade, evitando companhia de hipócritas e mentirosos — “lavarei as minhas mãos na inocência”. Um retrato de alguém que escolhe deliberadamente suas companhias e seus caminhos.",
      pergunta: "Tenho sido intencional na escolha de com quem convivo mais de perto?"
    },
    "Salmos 27": {
      texto: "“O Senhor é a minha luz e a minha salvação; a quem temerei?”. Mesmo cercado por inimigos, o maior desejo de Davi é simples: habitar na casa do Senhor e contemplar Sua formosura — presença desejada acima de qualquer proteção.",
      pergunta: "Meu maior desejo diante de dificuldades é a proteção de Deus, ou a presença Dele mesmo?"
    },
    "Salmos 28": {
      texto: "Davi clama para não ser tratado como os ímpios, que falam paz mas guardam maldade no coração, e termina em confiança: “o Senhor é a minha força e o meu escudo”. Coerência entre palavra e coração é tema recorrente nos salmos.",
      pergunta: "Minhas palavras de paz correspondem ao que realmente guardo no coração sobre outras pessoas?"
    },
    "Salmos 29": {
      texto: "Um salmo que celebra a voz do Senhor sobre as águas, quebrando cedros, sacudindo o deserto — poder cósmico retratado com imagens de tempestade. E termina em paz: “o Senhor dará força ao seu povo; o Senhor abençoará o seu povo com paz”.",
      pergunta: "Consigo enxergar tanto o poder tremendo de Deus quanto Sua promessa pessoal de paz para mim?"
    },
    "Salmos 30": {
      texto: "Depois de uma doença grave, Davi celebra a cura: “o choro pode durar uma noite, mas a alegria vem pela manhã”. Ele confessa que, na prosperidade, achou que nunca seria abalado — até a dificuldade lembrá-lo de que tudo dependia de Deus.",
      pergunta: "A prosperidade já me fez esquecer, temporariamente, de quanto dependo de Deus?"
    },
    "Salmos 31": {
      texto: "“Nas tuas mãos entrego o meu espírito” — palavras que Jesus repetiria na cruz. Davi descreve angústia profunda, sentindo-se “esquecido como um morto”, mas termina reafirmando: “as minhas ocasiões estão nas tuas mãos”.",
      pergunta: "Consigo entregar até os momentos mais incertos da minha vida nas mãos de Deus, como Davi e depois Jesus fizeram?"
    },
    "Salmos 32": {
      texto: "“Bem-aventurado aquele cuja transgressão é perdoada” — Davi descreve o peso físico de guardar pecado escondido, “envelheceram os meus ossos”, e o alívio de confessar abertamente. Confissão sincera traz leveza que o silêncio nunca traria.",
      pergunta: "Tenho carregado algum peso que só a confissão sincera a Deus poderia aliviar de verdade?"
    },
    "Salmos 33": {
      texto: "Um chamado ao louvor coletivo: “alegrai-vos no Senhor”, celebrando a palavra de Deus que criou os céus e a soberania Dele sobre planos de nações inteiras — “o conselho do Senhor permanece para sempre”. Nenhum plano humano supera o propósito de Deus.",
      pergunta: "Confio que os planos de Deus permanecem firmes mesmo quando os planos humanos ao redor parecem incertos?"
    },
    "Salmos 34": {
      texto: "Escrito depois de Davi fingir loucura para escapar de Aquis (1 Samuel 21), o salmo celebra: “provai e vede que o Senhor é bom”. Mesmo num momento de vergonha e desespero pessoal, ele encontra motivo genuíno para louvor depois.",
      pergunta: "Consigo encontrar motivo de louvor mesmo depois de um momento do qual não me orgulho?"
    },
    "Salmos 35": {
      texto: "Davi pede que Deus lute suas batalhas — “combate, Senhor, contra os que contendem comigo” — entregando conflitos pessoais diretamente a Deus em vez de vingança própria, mesmo diante de traição por quem antes era próximo.",
      pergunta: "Tenho entregue a Deus batalhas pessoais, especialmente contra quem já foi próximo e me traiu?"
    },
    "Salmos 36": {
      texto: "O salmo contrasta a maldade do ímpio, “que não teme a Deus diante dos seus olhos”, com a grandeza do amor de Deus, “que chega até aos céus”. E conclui: “em ti está o manancial da vida”. Tudo que sustenta vida verdadeira brota Dele.",
      pergunta: "Tenho buscado o “manancial da vida” em Deus, ou em fontes que sempre acabam secando?"
    },
    "Salmos 37": {
      texto: "“Não te enfades por causa dos malfeitores... eles murcharão”. Um salmo sábio sobre paciência diante da prosperidade aparente dos ímpios, aconselhando a confiar no tempo de Deus em vez de invejar o sucesso alheio.",
      pergunta: "Tenho invejado a prosperidade de alguém que não vive com integridade?"
    },
    "Salmos 38": {
      texto: "Um lamento intenso sobre pecado e suas consequências físicas e emocionais — “não há sanidade na minha carne, por causa da tua indignação”. Davi não esconde a dor real que o próprio pecado causou, nem culpa outros por ela.",
      pergunta: "Tenho assumido responsabilidade honesta pelas consequências dos meus próprios erros?"
    },
    "Salmos 39": {
      texto: "Davi reflete sobre a brevidade da vida — “és uma mão-cheia de dias, e a minha existência é como nada diante de ti” — e pede que Deus lhe mostre isso claramente, para viver com mais sabedoria o tempo que resta.",
      pergunta: "Vivo consciente da brevidade da vida de um jeito que muda minhas prioridades diárias?"
    },
    "Salmos 40": {
      texto: "“Esperei pacientemente no Senhor, e ele se inclinou para mim”. Davi celebra um resgate específico, e declara que sacrifícios não bastavam — Deus queria um coração obediente, tema que Hebreus depois aplicará a Cristo.",
      pergunta: "Tenho oferecido a Deus rituais externos, quando Ele deseja principalmente um coração obediente?"
    },
    "Salmos 41": {
      texto: "Um salmo sobre cuidar do pobre — “bem-aventurado o que atende ao pobre” — e sobre a dor de ser traído por “o meu próprio amigo íntimo”, antecipando o que Jesus viveria com Judas, citado diretamente por Ele mesmo em João 13.",
      pergunta: "Tenho cuidado ativamente de quem tem menos, mesmo quando isso não traz retorno visível?"
    },
    "Salmos 42": {
      texto: "“Como a corça brama pelas correntes das águas, assim a minha alma brama por ti”. Um dos retratos mais bonitos de anseio espiritual genuíno, escrito por alguém longe do templo, sedento por presença, não apenas por alívio de circunstância.",
      pergunta: "Minha alma tem “bramado” por Deus com esse tipo de sede genuína, ou minha busca tem sido morna?"
    },
    "Salmos 43": {
      texto: "Continuação do lamento anterior, com o mesmo refrão de autoexame: “por que te abates, ó minha alma? espera em Deus”. O salmista fala consigo mesmo, direcionando a própria alma de volta à esperança, em vez de só sentir o desânimo passivamente.",
      pergunta: "Tenho aprendido a “falar com minha própria alma”, direcionando-a ativamente de volta à esperança em Deus?"
    },
    "Salmos 44": {
      texto: "O povo relembra vitórias do passado dadas por Deus, mas agora enfrenta derrota que parece inexplicável — “tudo isto nos sobreveio; todavia não nos esquecemos de ti”. Um lamento honesto sobre sofrimento sem causa clara de pecado pessoal.",
      pergunta: "Consigo permanecer fiel a Deus mesmo quando o sofrimento presente não parece ter explicação clara?"
    },
    "Salmos 45": {
      texto: "Um salmo real e messiânico, celebrando as bodas de um rei descrito com linguagem que Hebreus aplicará diretamente a Cristo: “o teu trono, ó Deus, é eterno e para sempre”. Beleza poética apontando para o Rei definitivo.",
      pergunta: "Consigo ver em Cristo o Rei ideal que este salmo celebra de forma antecipada?"
    },
    "Salmos 46": {
      texto: "“Deus é o nosso refúgio e fortaleza” — mesmo que a terra se mude e os montes se abalem no coração do mar, o salmo declara paz: “aquietai-vos, e sabei que eu sou Deus”. Estabilidade que não depende da estabilidade das circunstâncias.",
      pergunta: "Consigo me aquietar e reconhecer a soberania de Deus mesmo em meio a circunstâncias que abalam tudo ao redor?"
    },
    "Salmos 47": {
      texto: "Um chamado exuberante ao louvor com aplausos e gritos de alegria — “Deus subiu com júbilo”. A adoração aqui não é contida nem discreta; é celebração física e sonora do reinado de Deus sobre todas as nações.",
      pergunta: "Minha adoração tem espaço para alegria expressiva, ou fica sempre contida e discreta?"
    },
    "Salmos 48": {
      texto: "Um cântico celebrando Jerusalém, “a cidade do nosso Deus”, sua beleza e segurança sob a proteção divina — um convite a contemplar e contar às gerações futuras as maravilhas de Deus vividas ali.",
      pergunta: "Tenho contado às próximas gerações as maravilhas que Deus já fez comigo e ao meu redor?"
    },
    "Salmos 49": {
      texto: "Uma reflexão de sabedoria sobre a igualdade de todos diante da morte, ricos e pobres — “o homem que está em honra e não tem entendimento é semelhante aos animais”. Riqueza acumulada não compra livramento da mortalidade.",
      pergunta: "Tenho vivido consciente de que riqueza material não resolve as questões mais profundas da existência?"
    },
    "Salmos 50": {
      texto: "Deus declara que não precisa de sacrifícios de animais como se estivesse faminto — “se eu tivesse fome, não to diria”. O que Ele realmente deseja é gratidão sincera e cumprimento dos votos feitos, não ritual vazio de aparência religiosa.",
      pergunta: "Minha religiosidade tem sido ritual de aparência, ou gratidão sincera de coração?"
    },
    "Salmos 51": {
      texto: "O salmo de arrependimento mais profundo da Bíblia, escrito por Davi depois do pecado com Bate-Seba: “tem misericórdia de mim, ó Deus... cria em mim, ó Deus, um coração puro”. Confissão sem desculpas, pedindo transformação real, não apenas perdão superficial.",
      pergunta: "Meu arrependimento tem pedido apenas perdão, ou também transformação real e profunda de coração?"
    },
    "Salmos 52": {
      texto: "Contra quem se vangloria da própria maldade e confia nas riquezas, o salmista contrasta: “eu, porém, sou como a oliveira verde na casa de Deus; confio na misericórdia de Deus para sempre”. Segurança que não depende de força ou riqueza próprias.",
      pergunta: "Minha segurança está enraizada na misericórdia de Deus, ou em recursos que podem falhar?"
    },
    "Salmos 53": {
      texto: "Quase idêntico ao Salmo 14, repete: “diz o néscio no seu coração: não há Deus”. A repetição no cânone bíblico reforça a seriedade do tema — negar Deus no coração corrompe profundamente o caráter humano, mesmo sem negação intelectual explícita.",
      pergunta: "Tenho vivido de forma prática como se Deus existisse de verdade, presente em cada decisão?"
    },
    "Salmos 54": {
      texto: "Escrito quando os zifeus traíram Davi a Saul, o salmo mostra alguém traído por quase-vizinhos apelando diretamente a Deus: “eis que Deus é o meu ajudador”. Traição de gente próxima não precisa ser respondida com vingança, mas com apelo a Deus.",
      pergunta: "Como reajo quando sou traído(a) por alguém que deveria estar do meu lado?"
    },
    "Salmos 55": {
      texto: "Um lamento sobre traição de amigo íntimo, tão doloroso que Davi deseja fugir “como pomba” para o deserto. E ainda assim conclui: “lança o teu cuidado sobre o Senhor, e ele te susterá”. Dor real, entregue de verdade.",
      pergunta: "Tenho lançado meus cuidados mais pesados sobre Deus, confiando que Ele realmente sustenta?"
    },
    "Salmos 56": {
      texto: "“No dia em que temer, eu em ti confiarei”. Uma fórmula simples e poderosa para lidar com medo real — não a ausência de medo, mas a decisão deliberada de confiar apesar dele.",
      pergunta: "Consigo, como este salmo ensina, escolher confiar mesmo no exato momento em que sinto medo?"
    },
    "Salmos 57": {
      texto: "Escondido numa caverna fugindo de Saul, Davi ainda assim declara: “desperta, glória minha... cantarei louvores entre as nações”. Adoração genuína pode nascer até no esconderijo mais desesperador da vida.",
      pergunta: "Consigo adorar genuinamente a Deus mesmo no meu momento mais escondido e difícil?"
    },
    "Salmos 58": {
      texto: "Um clamor forte por justiça contra juízes corruptos que “tramam violência com as mãos”, pedindo que Deus intervenha claramente para que os homens reconheçam: “deveras há Deus que julga na terra”. Justiça divina como esperança contra corrupção sistêmica.",
      pergunta: "Tenho clamado a Deus por justiça diante de estruturas corruptas que pareciam intocáveis?"
    },
    "Salmos 59": {
      texto: "Escrito quando Saul cercou a casa de Davi para matá-lo (1 Samuel 19), o salmo declara: “tu, Senhor, és a minha fortaleza”. Mesmo diante de ameaça de morte iminente, dentro da própria casa, ele encontra refúgio real em Deus.",
      pergunta: "Onde busco refúgio quando a ameaça parece estar bem próxima, dentro do meu próprio espaço seguro?"
    },
    "Salmos 60": {
      texto: "Depois de uma derrota militar difícil de entender, Davi ora: “tu nos rejeitaste... voltaste a nós”, buscando entendimento honesto e ainda assim confiando: “em Deus faremos proezas”. Derrota temporária não anula a confiança na vitória final de Deus.",
      pergunta: "Consigo manter confiança em Deus mesmo depois de uma derrota difícil de entender?"
    },
    "Salmos 61": {
      texto: "“Guia-me à rocha que é mais alta do que eu” — Davi reconhece que precisa de algo maior que sua própria força para se firmar. E pede para “habitar na tua tenda para sempre”, um desejo de proximidade contínua com Deus, não só socorro pontual.",
      pergunta: "Tenho buscado a Deus só nos momentos de crise, ou desejo habitar continuamente perto Dele?"
    },
    "Salmos 62": {
      texto: "“A minha alma espera somente em Deus” — repetido com ênfase, contrastando confiança em riquezas “vaidade” com confiança única em Deus como rocha e refúgio. Um chamado a não dividir a confiança entre Deus e outras seguranças.",
      pergunta: "Minha confiança está dividida entre Deus e outras seguranças, ou é somente Nele?"
    },
    "Salmos 63": {
      texto: "Escrito no deserto, longe de conforto, Davi declara: “tenho sede de ti; a minha carne te deseja”, e afirma que Seu amor é “melhor que a vida”. Anseio físico e espiritual por Deus, mesmo em circunstância árida e desconfortável.",
      pergunta: "Consigo buscar a Deus com intensidade mesmo em períodos áridos e desconfortáveis da vida?"
    },
    "Salmos 64": {
      texto: "Davi pede proteção contra conspiração secreta de inimigos que “afiam a língua como espada”, confiando que Deus os atingirá de repente. Palavras cruéis planejadas em segredo não escapam do conhecimento de Deus.",
      pergunta: "Confio que Deus vê e responde a injustiças planejadas contra mim mesmo em segredo?"
    },
    "Salmos 65": {
      texto: "Um salmo de louvor pela provisão da terra — chuva, colheita, fartura — celebrando Deus como quem “aquieta o ruído dos mares” e coroa o ano com Sua bondade. Gratidão pela provisão material como forma legítima de adoração.",
      pergunta: "Tenho parado para agradecer especificamente pela provisão material que recebo constantemente?"
    },
    "Salmos 66": {
      texto: "“Vinde, e vede as obras de Deus” — um convite a testemunhar publicamente o que Deus fez, incluindo disciplina através de provações: “tu, ó Deus, nos provaste... mas nos trouxeste a um lugar de fartura”. Provação com propósito de refino, não punição vazia.",
      pergunta: "Consigo enxergar provações passadas como refino que me trouxe a um lugar melhor?"
    },
    "Salmos 67": {
      texto: "“Tenha Deus misericórdia de nós, e nos abençoe... para que se conheça na terra o teu caminho”. A bênção pessoal não é fim em si mesma — existe para que outras nações também conheçam a Deus através dela.",
      pergunta: "Tenho enxergado as bênçãos recebidas como oportunidade de apontar outros a Deus, não só conforto pessoal?"
    },
    "Salmos 68": {
      texto: "Um cântico triunfante celebrando Deus como “pai dos órfãos e juiz das viúvas”, que liberta cativos e sustenta os oprimidos. Paulo citará este salmo em Efésios sobre Cristo subindo ao alto e dando dons aos homens.",
      pergunta: "Reconheço Deus como defensor ativo de quem está mais vulnerável e sem proteção?"
    },
    "Salmos 69": {
      texto: "Um lamento intenso — “afundei em profundo lamaçal” — citado várias vezes no Novo Testamento em relação ao sofrimento de Cristo, incluindo “deram-me fel por mantimento”. Sofrimento pessoal profundo que a tradição cristã lê como sombra do Calvário.",
      pergunta: "Consigo trazer minha dor mais profunda a Deus com a mesma honestidade crua deste salmo?"
    },
    "Salmos 70": {
      texto: "Um pedido curto e urgente por ajuda imediata: “ó Deus, apressa-te em me acudir”. Nem toda oração precisa ser longa ou elaborada — Deus ouve também os clamores breves e urgentes do momento de aflição.",
      pergunta: "Tenho me sentido livre para orar de forma breve e urgente quando a situação exige?"
    },
    "Salmos 71": {
      texto: "Uma oração de alguém já idoso, refletindo sobre uma vida inteira de dependência de Deus desde a juventude — “desde a minha mocidade tu me ensinaste”. E pede: “não me desampares agora que estou velho”. Fé que atravessa décadas.",
      pergunta: "Consigo imaginar minha fé sustentada com a mesma consistência ao longo de toda uma vida, até a velhice?"
    },
    "Salmos 72": {
      texto: "Uma oração por um rei justo, que “julgará os aflitos do povo... salvará os filhos do necessitado” — descrição que aponta além de Salomão para o reinado ideal do próprio Messias, cujo domínio se estenderia “de mar a mar”.",
      pergunta: "Tenho orado por líderes que governem com justiça e cuidado pelos mais vulneráveis?"
    },
    "Salmos 73": {
      texto: "Asafe confessa que quase tropeçou ao ver a prosperidade dos ímpios, até entrar “no santuário de Deus” e entender o destino final deles. A perspectiva eterna, buscada na presença de Deus, corrige a inveja gerada pela visão limitada do presente.",
      pergunta: "Tenho buscado a perspectiva eterna de Deus quando a prosperidade alheia ameaça abalar minha fé?"
    },
    "Salmos 74": {
      texto: "Um lamento sobre a destruição do templo, questionando “por que rejeitas para sempre?”, mas relembrando o poder de Deus na criação como fundamento para esperar restauração. Memória da fidelidade passada sustenta esperança presente.",
      pergunta: "Tenho usado a memória da fidelidade passada de Deus para sustentar esperança numa crise atual?"
    },
    "Salmos 75": {
      texto: "“Não vem nem do oriente, nem do ocidente... mas Deus é o juiz”. Um lembrete de que exaltação e humilhação vêm da mão de Deus, não de esforço próprio ou sorte geográfica — Ele é quem decide o tempo certo de cada coisa.",
      pergunta: "Tenho reconhecido que meu tempo de exaltação ou espera está nas mãos de Deus, não no meu controle?"
    },
    "Salmos 76": {
      texto: "Um cântico celebrando o poder de Deus como guerreiro que quebra armas e subjuga reis — “és tremendo; e quem subsistirá diante de ti quando te irares?”. Reverência diante de um Deus poderoso o suficiente para deter qualquer ameaça.",
      pergunta: "Minha reverência por Deus reflete o quanto Ele é verdadeiramente poderoso?"
    },
    "Salmos 77": {
      texto: "Numa noite de angústia sem conseguir dormir, o salmista pergunta se Deus esqueceu de ser gracioso — até decidir deliberadamente “lembrar-me dos feitos do Senhor”. Escolher lembrar ativamente a fidelidade passada muda a perspectiva presente.",
      pergunta: "Já precisei lembrar deliberadamente o que Deus já fez, para sair de um ciclo de angústia?"
    },
    "Salmos 78": {
      texto: "Um longo salmo histórico recontando a infidelidade repetida de Israel apesar dos milagres constantes de Deus — “esqueceram-se dos seus feitos”. A repetição da história serve como advertência viva para não repetir os mesmos erros.",
      pergunta: "Tenho aprendido com os erros repetidos de gerações passadas, ou corro risco de repeti-los?"
    },
    "Salmos 79": {
      texto: "Um lamento sobre a destruição de Jerusalém, pedindo perdão pelos “pecados dos nossos pais” e libertação — “ajuda-nos, ó Deus da nossa salvação, por amor da glória do teu nome”. Motivação de oração centrada na glória de Deus, não só no alívio próprio.",
      pergunta: "Minhas orações são motivadas pela glória de Deus, ou apenas pelo meu próprio alívio?"
    },
    "Salmos 80": {
      texto: "Um clamor repetido três vezes — “faze resplandecer o teu rosto, e seremos salvos” — usando a imagem de Israel como videira que Deus plantou e agora parece abandonada. Súplica persistente por restauração da presença de Deus.",
      pergunta: "Tenho persistido em oração por restauração, mesmo quando a resposta demora a chegar?"
    },
    "Salmos 81": {
      texto: "Deus lamenta que, apesar de tudo que fez ao libertar Seu povo, eles “não me quiseram ouvir” — e ainda assim declara: “ah, se me ouvisses, ó Israel!”. Um convite aberto à obediência que traria bênção plena, ainda disponível apesar do passado.",
      pergunta: "Existe algo que Deus tem pedido repetidamente, e eu ainda não escutei de verdade?"
    },
    "Salmos 82": {
      texto: "Deus confronta juízes que deveriam defender o fraco e o órfão, mas falham nessa responsabilidade — “defendei o pobre e o órfão; fazei justiça ao aflito”. Autoridade dada por Deus vem acompanhada de responsabilidade real por justiça.",
      pergunta: "Tenho usado qualquer autoridade que tenho para defender quem precisa de proteção?"
    },
    "Salmos 83": {
      texto: "Um clamor urgente contra uma coalizão de nações inimigas conspirando para apagar o nome de Israel — pedindo que Deus aja “para que saibam que só tu, cujo nome é Jeová, és o Altíssimo sobre toda a terra”. O objetivo final é sempre o reconhecimento de quem Deus é.",
      pergunta: "Mesmo diante de uma ameaça pessoal, meu maior desejo é que Deus seja reconhecido como Senhor?"
    },
    "Salmos 84": {
      texto: "“Quão amáveis são os teus tabernáculos, Senhor dos Exércitos!”. Um dos salmos mais bonitos sobre anseio pela presença de Deus — “mais vale um dia nos teus átrios do que mil noutro lugar”. Preferir estar perto de Deus a qualquer outra recompensa.",
      pergunta: "Preferiria genuinamente um dia na presença de Deus a mil dias de qualquer outra coisa?"
    },
    "Salmos 85": {
      texto: "Uma oração por restauração depois do exílio — “não tornarás a vivificar-nos?” — culminando na bela imagem de que “a misericórdia e a verdade se encontraram; a justiça e a paz se beijaram”. Atributos de Deus que parecem opostos se encontram em harmonia perfeita.",
      pergunta: "Consigo enxergar como a justiça e a misericórdia de Deus trabalham juntas, não uma contra a outra?"
    },
    "Salmos 86": {
      texto: "Uma oração pessoal e humilde: “inclina, Senhor, os teus ouvidos... porque sou pobre e necessitado”. Davi reconhece sua própria fragilidade sem vergonha, pedindo diretamente por ajuda, ensino e um coração unido para temer o nome de Deus.",
      pergunta: "Tenho pedido a Deus um coração “unido”, sem divisão entre o que declaro crer e como realmente vivo?"
    },
    "Salmos 87": {
      texto: "Um cântico curto celebrando Sião, mas com uma visão surpreendente: nações estrangeiras — Egito, Babilônia, Filístia — sendo registradas como se tivessem nascido ali. Um vislumbre antecipado de que a família de Deus incluiria gente de todo lugar.",
      pergunta: "Tenho enxergado a família de Deus como algo que ultrapassa minhas próprias fronteiras culturais?"
    },
    "Salmos 88": {
      texto: "O salmo mais sombrio de todo o Saltério — termina sem nenhuma nota de esperança visível, apenas: “a escuridão é a minha companheira íntima”. A Escritura registra honestamente que existe dor tão profunda que não encontra resolução dentro do próprio poema.",
      pergunta: "Sinto liberdade para trazer a Deus uma dor tão profunda que ainda não encontrei resolução para ela?"
    },
    "Salmos 89": {
      texto: "Um longo salmo celebrando a aliança eterna de Deus com a linhagem de Davi, seguido de lamento angustiado pela aparente ruptura dessa promessa diante das dificuldades atuais do reino. Tensão real entre a promessa eterna e a experiência presente de crise.",
      pergunta: "Consigo segurar, ao mesmo tempo, uma promessa eterna de Deus e uma dificuldade presente real, sem abandonar nenhuma das duas?"
    },
    "Salmos 90": {
      texto: "O único salmo atribuído a Moisés: “ensina-nos a contar os nossos dias, de tal maneira que alcancemos coração de sabedoria”. Uma reflexão sóbria sobre a brevidade da vida diante da eternidade de Deus, “de geração em geração tu és Deus”.",
      pergunta: "Tenho “contado meus dias” de forma que isso realmente molde minhas escolhas com sabedoria?"
    },
    "Salmos 91": {
      texto: "“Aquele que habita no esconderijo do Altíssimo... descansará à sombra do Onipotente”. Um salmo de proteção intensa, com imagens de refúgio sob asas e anjos guardando os caminhos — o mesmo texto que Satanás distorceria ao tentar Jesus no deserto, provando que promessas de Deus não são fórmula para testar Sua fidelidade.",
      pergunta: "Tenho confiado nas promessas de proteção de Deus sem transformá-las em exigência ou teste?"
    },
    "Salmos 92": {
      texto: "Um salmo para o dia de sábado, celebrando que “bom é louvar ao Senhor” de manhã e de noite. Descreve o justo como palmeira e cedro que “na velhice ainda darão frutos”. Fidelidade a longo prazo produz frutos que só o tempo revela.",
      pergunta: "Tenho esperado frutos imediatos, ou confio que a fidelidade a longo prazo dará fruto no tempo certo?"
    },
    "Salmos 93": {
      texto: "“O Senhor reina; está vestido de majestade”. Um salmo curto celebrando a soberania de Deus firme como o mundo que Ele estabeleceu — mesmo quando “os rios levantam as suas ondas”, o trono Dele permanece desde a eternidade.",
      pergunta: "Confio no reinado firme de Deus mesmo quando as circunstâncias ao redor levantam ondas?"
    },
    "Salmos 94": {
      texto: "Um clamor por justiça contra os que oprimem viúvas e órfãos, questionando “até quando os ímpios triunfarão?”. E a resposta serena: “o Senhor é o meu alto refúgio”. Justiça de Deus como esperança concreta, não vingança pessoal.",
      pergunta: "Tenho entregue a Deus o clamor por justiça em situações que não posso resolver sozinho(a)?"
    },
    "Salmos 95": {
      texto: "Um convite ao louvor — “vinde, adoremos e prostremo-nos” — seguido de uma advertência séria: “não endureçais o vosso coração” como no deserto. Adoração genuína e coração aberto à voz de Deus caminham sempre juntos.",
      pergunta: "Meu coração tem estado aberto à voz de Deus, ou endurecido por resistência acumulada?"
    },
    "Salmos 96": {
      texto: "“Cantai ao Senhor um cântico novo... anunciai entre as nações a sua glória”. Um chamado missionário antigo, convocando toda a terra a reconhecer o Senhor, com até a natureza — campos, árvores e mar — participando da celebração.",
      pergunta: "Tenho anunciado a bondade de Deus além do meu círculo mais próximo?"
    },
    "Salmos 97": {
      texto: "“O Senhor reina; regozije-se a terra”. Um salmo que mistura imagens de nuvens, fogo e relâmpagos com o conforto de que “a luz semeia-se para o justo”. Grandeza temível e cuidado pessoal na mesma descrição de Deus.",
      pergunta: "Consigo segurar juntas as duas verdades: um Deus imensamente poderoso e pessoalmente cuidadoso?"
    },
    "Salmos 98": {
      texto: "Outro chamado ao cântico novo pela vitória de Deus, terminando com a criação inteira aplaudindo — “batam palmas os rios, e regozijem-se os montes” — diante da vinda de Deus para julgar o mundo com justiça e equidade.",
      pergunta: "Consigo enxergar o julgamento justo de Deus como algo digno de celebração, não apenas de temor?"
    },
    "Salmos 99": {
      texto: "“O Senhor reina; tremam os povos... santo é ele”. A santidade de Deus é enfatizada três vezes, junto à lembrança de que Moisés, Arão e Samuel clamaram e foram atendidos — santidade que não impede proximidade com quem O busca.",
      pergunta: "A santidade de Deus tem me aproximado com reverência, ou me afastado por medo?"
    },
    "Salmos 100": {
      texto: "Um salmo curto e alegre: “servi ao Senhor com alegria; entrai na sua presença com canto”. Reconhece que “ele nos fez, e não nós a nós mesmos” — a alegria da adoração nasce de saber a quem pertencemos.",
      pergunta: "Minha adoração tem sido com alegria genuína, ou apenas obrigação cumprida?"
    },
    "Salmos 101": {
      texto: "Davi declara um compromisso pessoal de integridade dentro da própria casa: “andarei em integridade de coração no meio da minha casa”. Ele decide o que não vai tolerar diante dos próprios olhos — santidade começa no ambiente doméstico e privado.",
      pergunta: "Minha integridade dentro de casa é a mesma que demonstro em público?"
    },
    "Salmos 102": {
      texto: "Uma oração de aflito, comparando seus dias a “fumaça” e a si mesmo a um pássaro solitário no telhado. Mas termina contrastando sua fragilidade com a permanência de Deus — “tu és o mesmo, e os teus anos não terão fim”, versículo aplicado a Cristo em Hebreus.",
      pergunta: "Consigo ancorar minha fragilidade passageira na permanência inabalável de Deus?"
    },
    "Salmos 103": {
      texto: "“Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum dos seus benefícios”. Um dos salmos mais amados, celebrando perdão, cura e compaixão — “quanto está longe o oriente do ocidente, assim afasta de nós as nossas transgressões”.",
      pergunta: "Tenho lembrado ativamente dos benefícios de Deus, ou esquecido deles com facilidade?"
    },
    "Salmos 104": {
      texto: "Um poema magnífico sobre a criação, descrevendo Deus cuidando de cada detalhe — fontes nos vales, ervas para o gado, a lua marcando estações. Toda a criação depende continuamente Dele: “todos esperam de ti que lhes dês o seu alimento a seu tempo”.",
      pergunta: "Tenho reconhecido a mão de Deus sustentando continuamente até os detalhes da natureza ao meu redor?"
    },
    "Salmos 105": {
      texto: "Um salmo histórico recontando a fidelidade de Deus desde Abraão até o Êxodo, enfatizando que Ele “lembrou-se da sua santa palavra”. A história de Israel é narrada aqui não pelos erros do povo, mas pela constância das promessas de Deus.",
      pergunta: "Consigo recontar minha própria história enfatizando a fidelidade de Deus, não só minhas falhas?"
    },
    "Salmos 106": {
      texto: "O complemento do salmo anterior: a mesma história, mas agora do ângulo da infidelidade repetida do povo — “esqueceram-se de Deus, seu Salvador”. E ainda assim, “muitas vezes os livrou”. Graça persistente diante de reincidência constante.",
      pergunta: "Reconheço quantas vezes Deus já me livrou, mesmo depois de eu repetir os mesmos erros?"
    },
    "Salmos 107": {
      texto: "“Rendam graças ao Senhor os remidos”, com quatro histórias de pessoas em aflições diferentes — perdidos no deserto, presos, doentes, marinheiros em tempestade — todas terminando com o mesmo refrão: “clamaram ao Senhor, e ele os livrou”.",
      pergunta: "Tenho clamado a Deus na minha aflição específica, confiando que Ele responde a cada tipo de necessidade?"
    },
    "Salmos 108": {
      texto: "Davi declara: “preparado está o meu coração, ó Deus; cantarei”. Combinando trechos de salmos anteriores, ele reafirma confiança de que “em Deus faremos proezas”, reconhecendo que “vão é o socorro do homem”.",
      pergunta: "Meu coração está “preparado” para adorar, mesmo antes das circunstâncias melhorarem?"
    },
    "Salmos 109": {
      texto: "Um salmo imprecatório duro, onde Davi clama por julgamento contra acusadores que retribuíram mal por bem. Textos assim mostram que a Bíblia permite trazer a Deus até a raiva mais crua — entregando a Ele o julgamento em vez de executá-lo por conta própria.",
      pergunta: "Tenho levado até minha raiva mais crua a Deus, em vez de agir por vingança própria?"
    },
    "Salmos 110": {
      texto: "O salmo mais citado do Antigo Testamento no Novo: “disse o Senhor ao meu Senhor: assenta-te à minha direita”. Jesus mesmo o usa para questionar os fariseus sobre a identidade do Messias, e Hebreus o aplica ao sacerdócio eterno de Cristo.",
      pergunta: "Reconheço em Jesus tanto o Rei quanto o Sacerdote eterno que este salmo anuncia?"
    },
    "Salmos 111": {
      texto: "Um salmo alfabético celebrando as obras e a fidelidade de Deus, concluindo com a máxima da sabedoria bíblica: “o temor do Senhor é o princípio da sabedoria”. Conhecimento verdadeiro sempre começa em reverência, não em informação acumulada.",
      pergunta: "Meu conhecimento sobre Deus tem produzido reverência genuína, ou apenas informação?"
    },
    "Salmos 112": {
      texto: "Descreve o homem que teme ao Senhor: seu coração “está seguro, confiando no Senhor”, ele não teme más notícias, é generoso e compassivo. Firmeza interior que nasce da confiança, não de circunstâncias favoráveis.",
      pergunta: "Meu coração está firme o suficiente para não temer más notícias antes mesmo delas chegarem?"
    },
    "Salmos 113": {
      texto: "Celebra o Deus que “se inclina para ver o que está nos céus e na terra”, levantando o pobre do pó e dando filhos à estéril. Grandeza infinita que se curva especificamente para cuidar dos mais humildes e esquecidos.",
      pergunta: "Tenho me inclinado, como Deus faz, para enxergar e cuidar de quem é esquecido ao meu redor?"
    },
    "Salmos 114": {
      texto: "Um salmo poético sobre o Êxodo, descrevendo o mar fugindo e os montes saltando diante da presença de Deus. Toda a criação reage à Sua presença — “treme, terra, na presença do Senhor”.",
      pergunta: "Tenho reagido à presença de Deus com a mesma reverência que a própria criação demonstra?"
    },
    "Salmos 115": {
      texto: "“Não a nós, Senhor, não a nós, mas ao teu nome dá glória”. O salmo ridiculariza ídolos que têm boca sem falar e olhos sem ver, contrastando com o Deus vivo — e adverte: “semelhantes a eles se tornam os que os fazem”.",
      pergunta: "Tenho buscado glória para mim mesmo(a), ou dirigido todo reconhecimento ao nome de Deus?"
    },
    "Salmos 116": {
      texto: "“Amo ao Senhor, porque ele ouviu a minha voz”. Um testemunho pessoal de livramento da morte, culminando na pergunta: “que darei eu ao Senhor por todos os benefícios que me tem feito?”. Gratidão que busca uma resposta concreta.",
      pergunta: "Já me perguntei o que posso oferecer a Deus em resposta ao que Ele já fez por mim?"
    },
    "Salmos 117": {
      texto: "O capítulo mais curto de toda a Bíblia — apenas dois versículos — convocando todas as nações a louvar ao Senhor pela Sua misericórdia e verdade eternas. Brevidade que não diminui o alcance universal da mensagem.",
      pergunta: "Reconheço que a misericórdia de Deus alcança pessoas muito além do meu círculo cultural?"
    },
    "Salmos 118": {
      texto: "“Melhor é confiar no Senhor do que confiar no homem”. Contém o versículo que Jesus aplicaria a Si mesmo: “a pedra que os edificadores rejeitaram, essa foi posta por cabeça de esquina”, e a frase gritada na entrada triunfal — “bendito o que vem em nome do Senhor”.",
      pergunta: "Tenho confiado mais em pessoas e recursos humanos do que no próprio Senhor?"
    },
    "Salmos 119": {
      texto: "O capítulo mais longo da Bíblia, um poema alfabético inteiro dedicado ao amor pela Palavra de Deus — “lâmpada para os meus pés é a tua palavra”. Cada uma das 176 estrofes celebra os estatutos, mandamentos e promessas do Senhor de um ângulo diferente.",
      pergunta: "A Palavra de Deus tem sido lâmpada real para os meus passos, ou algo que consulto raramente?"
    },
    "Salmos 120": {
      texto: "O primeiro dos “Cânticos dos Degraus”, cantados por peregrinos subindo a Jerusalém. Começa com um clamor por livramento de lábios mentirosos, e o lamento de quem vive entre gente que odeia a paz: “eu sou pela paz; mas quando falo, eles são pela guerra”.",
      pergunta: "Tenho buscado paz mesmo quando as pessoas ao meu redor preferem o conflito?"
    },
    "Salmos 121": {
      texto: "“Elevarei os meus olhos para os montes, de onde vem o meu socorro”. Um dos cânticos de peregrinação mais amados, garantindo que Deus “não dormita nem dorme” e guarda a saída e a entrada do Seu povo, desde agora e para sempre.",
      pergunta: "Tenho descansado sabendo que Deus me guarda continuamente, mesmo enquanto eu durmo?"
    },
    "Salmos 122": {
      texto: "“Alegrei-me quando me disseram: vamos à casa do Senhor”. Alegria genuína pela oportunidade de adorar junto com o povo de Deus, junto de uma oração pela paz de Jerusalém.",
      pergunta: "Sinto alegria genuína ao ir adorar junto com outros, ou trato isso como obrigação?"
    },
    "Salmos 123": {
      texto: "Como servos que olham para as mãos de seus senhores, o salmista levanta os olhos a Deus esperando misericórdia — uma postura de dependência humilde diante do desprezo que vinha dos soberbos.",
      pergunta: "Tenho levantado os olhos a Deus com essa dependência humilde, esperando Sua misericórdia?"
    },
    "Salmos 124": {
      texto: "“Se não fora o Senhor, que esteve ao nosso lado...” — uma reflexão sobre o que teria acontecido sem a intervenção de Deus. A alma escapou “como um pássaro do laço dos passarinheiros”, porque o laço se quebrou.",
      pergunta: "Consigo identificar situações onde, se não fosse por Deus, o resultado teria sido muito pior?"
    },
    "Salmos 125": {
      texto: "“Os que confiam no Senhor serão como o monte de Sião, que não se abala”. E assim como montes cercam Jerusalém, Deus cerca o Seu povo — proteção que envolve por todos os lados, agora e para sempre.",
      pergunta: "Tenho me sentido cercado(a) pela proteção de Deus, ou exposto(a) por todos os lados?"
    },
    "Salmos 126": {
      texto: "“Os que semeiam em lágrimas segarão com alegria”. Escrito na volta do exílio, quando “a nossa boca se encheu de riso”, mas ainda pedindo restauração completa. Lágrimas do plantio não são desperdício — são semente.",
      pergunta: "Consigo enxergar minhas lágrimas atuais como semente de uma colheita futura?"
    },
    "Salmos 127": {
      texto: "“Se o Senhor não edificar a casa, em vão trabalham os que a edificam”. Um alerta contra o esforço ansioso e sem Deus — “inútil vos será levantar de madrugada” — e uma celebração dos filhos como herança do Senhor.",
      pergunta: "Tenho trabalhado com ansiedade excessiva, esquecendo que o resultado depende de Deus?"
    },
    "Salmos 128": {
      texto: "Descreve a bênção sobre quem teme ao Senhor: comer do trabalho das próprias mãos, ver a família ao redor da mesa “como plantas de oliveira”. Uma visão simples e concreta de vida abençoada no cotidiano.",
      pergunta: "Tenho valorizado as bênçãos simples e cotidianas que já recebo?"
    },
    "Salmos 129": {
      texto: "“Muitas vezes me angustiaram desde a minha mocidade... mas não prevaleceram contra mim”. Reconhecimento de uma vida inteira de aflição, e de que a aflição, apesar de real, nunca teve a última palavra.",
      pergunta: "Consigo olhar para trás e reconhecer que as aflições, apesar de reais, não prevaleceram sobre mim?"
    },
    "Salmos 130": {
      texto: "“Das profundezas a ti clamo, ó Senhor”. Um dos salmos penitenciais mais profundos, reconhecendo que “se observares as iniquidades, quem subsistirá?” — e concluindo que no Senhor há perdão e copiosa redenção.",
      pergunta: "Tenho clamado a Deus desde as “profundezas”, confiando que Nele há perdão abundante?"
    },
    "Salmos 131": {
      texto: "Um salmo curto e humilde: “não se elevou o meu coração... comportei-me e aquietei a minha alma, como uma criança desmamada”. Descanso tranquilo que não exige entender tudo nem controlar tudo.",
      pergunta: "Consigo aquietar minha alma como uma criança tranquila, sem exigir entender tudo?"
    },
    "Salmos 132": {
      texto: "Relembra o zelo de Davi por encontrar um lugar para a arca, e a promessa de Deus de estabelecer sua descendência no trono — “do fruto do teu ventre porei sobre o teu trono”, promessa que aponta para Cristo.",
      pergunta: "Tenho o mesmo zelo de Davi para dar lugar a Deus na minha vida?"
    },
    "Salmos 133": {
      texto: "“Quão bom e quão suave é que os irmãos vivam em união!”. Comparada ao óleo precioso e ao orvalho, a unidade entre o povo de Deus é onde “o Senhor ordena a bênção e a vida para sempre”.",
      pergunta: "Tenho contribuído para a unidade entre irmãos, ou para a divisão?"
    },
    "Salmos 134": {
      texto: "O último cântico dos degraus, uma bênção curta aos que servem “de noite na casa do Senhor” — reconhecimento dos que servem nos horários e funções que ninguém vê nem aplaude.",
      pergunta: "Tenho valorizado quem serve nos bastidores, nos horários e funções que ninguém percebe?"
    },
    "Salmos 135": {
      texto: "Louvor ao Deus que “faz tudo o que lhe apraz” nos céus e na terra, contrastado novamente com ídolos que têm boca e não falam. A soberania real de Deus diante da impotência daquilo que os homens fabricam.",
      pergunta: "Existe algo fabricado por mim — plano, imagem, segurança — que ocupou o lugar de Deus?"
    },
    "Salmos 136": {
      texto: "Vinte e seis versículos, e todos terminam com o mesmo refrão: “porque a sua benignidade dura para sempre”. Repetição intencional, recontando a criação e o Êxodo, martelando uma única verdade até ela se fixar no coração.",
      pergunta: "Preciso repetir a mim mesmo(a) alguma verdade sobre Deus até ela realmente se fixar?"
    },
    "Salmos 137": {
      texto: "“Junto aos rios da Babilônia, ali nos assentamos e choramos”. O lamento cru dos exilados que não conseguiam cantar em terra estranha — incluindo versos finais de raiva brutal que a Escritura registra sem endossar, mostrando dor real levada a Deus.",
      pergunta: "Tenho levado a Deus até os sentimentos que me envergonham, em vez de escondê-los?"
    },
    "Salmos 138": {
      texto: "“No dia em que eu clamei, me escutaste”. Davi louva a Deus por responder e fortalecê-lo, confiando que “o Senhor aperfeiçoará o que me diz respeito” — obra começada que Ele mesmo se compromete a concluir.",
      pergunta: "Confio que Deus vai concluir a obra que começou em mim, mesmo inacabada agora?"
    },
    "Salmos 139": {
      texto: "Um dos textos mais íntimos da Bíblia: Deus conhece o sentar e o levantar, cerca por trás e pela frente, e formou cada pessoa no ventre materno — “de um modo assombroso e admirável”. Termina pedindo: “sonda-me, ó Deus, e conhece o meu coração”.",
      pergunta: "Tenho coragem de pedir a Deus que sonde meu coração completamente?"
    },
    "Salmos 140": {
      texto: "Uma oração por livramento de homens violentos e de línguas afiadas “como a da serpente”, confiando que “o Senhor susterá a causa do aflito e o direito do necessitado”.",
      pergunta: "Tenho confiado que Deus sustenta a causa de quem é atacado injustamente?"
    },
    "Salmos 141": {
      texto: "“Põe, ó Senhor, uma guarda à minha boca”. Uma oração pelo controle das próprias palavras e do próprio coração, pedindo até que o justo o repreenda — reconhecendo correção como bondade, não ofensa.",
      pergunta: "Tenho recebido correção como bondade, ou reagido a ela como ofensa pessoal?"
    },
    "Salmos 142": {
      texto: "Escrito numa caverna, Davi confessa: “não há quem cuide da minha alma”. Solidão profunda levada diretamente a Deus, com a declaração: “tu és o meu refúgio, e a minha porção na terra dos viventes”.",
      pergunta: "Quando me sinto completamente sozinho(a), levo essa solidão a Deus ou a carrego calado(a)?"
    },
    "Salmos 143": {
      texto: "“Faze-me ouvir a tua benignidade pela manhã... ensina-me a fazer a tua vontade”. Um pedido de direção que nasce do desespero, reconhecendo que “nenhum vivente se justificará à tua vista”.",
      pergunta: "Tenho pedido a Deus que me ensine a fazer Sua vontade, não só que resolva meus problemas?"
    },
    "Salmos 144": {
      texto: "Davi louva a Deus como “a minha rocha, que adestra as minhas mãos para a peleja”, e se admira: “que é o homem, para que dele tomes conhecimento?”. Termina pedindo bênção sobre famílias, celeiros e paz nas ruas.",
      pergunta: "Tenho me admirado com o fato de Deus tomar conhecimento de alguém como eu?"
    },
    "Salmos 145": {
      texto: "“Grande é o Senhor, e mui digno de louvor; e a sua grandeza é inescrutável”. Um salmo alfabético celebrando que Deus é “bom para todos”, sustenta os que caem e está perto de todos que O invocam em verdade.",
      pergunta: "Tenho invocado a Deus “em verdade”, com sinceridade, confiando que Ele está perto?"
    },
    "Salmos 146": {
      texto: "“Não confieis em príncipes... cujo espírito sai”. Contrasta a fragilidade de qualquer poder humano com o Deus que “faz justiça aos oprimidos, dá pão aos famintos” e reina para sempre.",
      pergunta: "Tenho colocado esperança em líderes ou sistemas humanos que inevitavelmente falham?"
    },
    "Salmos 147": {
      texto: "Deus “sara os quebrantados de coração e lhes ata as feridas” — e o mesmo Deus “conta o número das estrelas e chama a todas pelos seus nomes”. Poder cósmico e cuidado íntimo lado a lado, no mesmo versículo.",
      pergunta: "Consigo acreditar que o mesmo Deus que nomeia estrelas cuida das minhas feridas pessoais?"
    },
    "Salmos 148": {
      texto: "Uma convocação universal ao louvor: anjos, sol, lua, estrelas, monstros marinhos, fogo, granizo, montes, árvores, animais, reis, jovens e velhos — absolutamente tudo convocado a louvar o nome do Senhor.",
      pergunta: "Tenho enxergado toda a criação ao meu redor como convocada a louvar a Deus?"
    },
    "Salmos 149": {
      texto: "“Cantai ao Senhor um cântico novo”, celebrando que “o Senhor se agrada do seu povo” e adorna os humildes com a salvação. Louvor que envolve alegria, dança e instrumentos — celebração plena e sem contenção.",
      pergunta: "Consigo crer que Deus genuinamente se agrada de mim, e não apenas me tolera?"
    },
    "Salmos 150": {
      texto: "O grande final do Saltério: seis versículos, treze convocações ao louvor, cada instrumento chamado a participar — trombeta, harpa, tamboril, cordas, órgão, címbalos. E o encerramento perfeito: “tudo quanto tem fôlego louve ao Senhor”.",
      pergunta: "Enquanto eu tiver fôlego, tenho usado essa vida para louvar a Deus?"
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
    },
    "Provérbios 4": {
      texto: "Um pai transmite ao filho o que ele mesmo recebeu do próprio pai — sabedoria atravessando três gerações. E vem o conselho central: “sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida”. O coração não é guardado por acidente, mas por vigilância deliberada.",
      pergunta: "O que tenho deixado entrar no meu coração sem nenhuma vigilância?"
    },
    "Provérbios 5": {
      texto: "Uma advertência franca contra o adultério, descrevendo como os lábios da mulher estranha “destilam favos de mel” mas o fim é amargo como absinto. Em contraste, o texto celebra com alegria a fidelidade no casamento: “alegra-te com a mulher da tua mocidade”.",
      pergunta: "Tenho protegido ativamente meu casamento, ou apenas evitado o erro quando ele já estava perto demais?"
    },
    "Provérbios 6": {
      texto: "Alertas práticos sobre fiança precipitada, preguiça — “vai ter com a formiga, ó preguiçoso” — e uma lista das sete coisas que o Senhor odeia, encerrando com “o que semeia contendas entre irmãos”. Sabedoria bíblica é intensamente prática, não abstrata.",
      pergunta: "Tenho semeado paz ou contenda nas relações ao meu redor?"
    },
    "Provérbios 7": {
      texto: "A história detalhada de um jovem “falto de juízo” sendo seduzido passo a passo, começando por simplesmente passar pela rua errada no fim da tarde. A queda raramente começa no ato — começa muito antes, na proximidade descuidada com a tentação.",
      pergunta: "Existe alguma “rua” que eu continuo frequentando, sabendo aonde ela leva?"
    },
    "Provérbios 8": {
      texto: "A Sabedoria personificada clama nas ruas e declara que estava com Deus antes da criação do mundo — “eu estava com ele, e era seu deleite”. Cristãos leem aqui um vislumbre daquele que João chamaria de o Verbo que estava no princípio com Deus.",
      pergunta: "Tenho buscado a sabedoria que clama abertamente, ou passado por ela sem prestar atenção?"
    },
    "Provérbios 9": {
      texto: "Dois convites são feitos na mesma rua: a Sabedoria prepara banquete e convida os simples a viver; a Loucura, sentada à porta, também convida — “as águas roubadas são doces”. Ambas chamam; o destino de cada convite é radicalmente diferente.",
      pergunta: "Quais convites tenho aceitado ultimamente — os da sabedoria ou os da facilidade?"
    },
    "Provérbios 10": {
      texto: "Começam os provérbios curtos de Salomão, em contrastes diretos: o justo e o ímpio, o diligente e o preguiçoso, o que guarda a boca e o que fala demais. “Na multidão de palavras não falta transgressão; mas o que modera os seus lábios é prudente.”",
      pergunta: "Tenho falado demais em situações onde o silêncio seria mais sábio?"
    },
    "Provérbios 11": {
      texto: "“Balança enganosa é abominação para o Senhor” — a integridade nos negócios importa a Deus tanto quanto a devoção religiosa. E uma promessa notável sobre generosidade: “há quem espalhe, e ainda se lhe acrescente mais”.",
      pergunta: "Minha integridade nos negócios e no dinheiro reflete a mesma fé que declaro?"
    },
    "Provérbios 12": {
      texto: "Contrastes entre o justo e o perverso, com destaque para o cuidado com as palavras: “há quem fale como que espada penetrante, mas a língua dos sábios é medicina”. Palavras podem ferir ou curar — e a escolha é diária.",
      pergunta: "Minhas palavras têm sido espada ou remédio para quem convive comigo?"
    },
    "Provérbios 13": {
      texto: "“O que anda com os sábios, será sábio, mas o companheiro dos tolos será afligido.” Companhia molda caráter silenciosamente, com o tempo — ninguém escolhe amizades sem escolher também, indiretamente, quem vai se tornar.",
      pergunta: "As pessoas com quem ando mais de perto têm me puxado para cima ou para baixo?"
    },
    "Provérbios 14": {
      texto: "“Há caminho que ao homem parece direito, mas o fim dele são os caminhos da morte.” Uma das advertências mais sóbrias do livro: a intuição pessoal, sozinha, não é bússola confiável — ela pode se sentir certa e estar completamente errada.",
      pergunta: "Tenho confiado apenas na minha intuição em decisões que precisavam de conselho e oração?"
    },
    "Provérbios 15": {
      texto: "“A resposta branda desvia o furor.” Um capítulo inteiro sobre o poder das palavras suaves diante da ira, e sobre Deus enxergar além da aparência: “os olhos do Senhor estão em todo lugar, contemplando os maus e os bons”.",
      pergunta: "Como tenho respondido quando alguém me trata com dureza?"
    },
    "Provérbios 16": {
      texto: "“Ao homem pertencem os planos do coração, mas do Senhor vem a resposta da língua” — e mais adiante: “o coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos”. Planejar é sábio; controlar o resultado nunca foi nosso.",
      pergunta: "Tenho feito meus planos com as mãos abertas, reconhecendo que Deus dirige os passos?"
    },
    "Provérbios 17": {
      texto: "“Melhor é um bocado seco, e com ele a tranquilidade, do que a casa cheia de vítimas com contenda.” Paz doméstica vale mais que abundância material — uma medida de riqueza bem diferente da que o mundo costuma usar.",
      pergunta: "Tenho buscado mais abundância material do que paz na minha própria casa?"
    },
    "Provérbios 18": {
      texto: "“O que responde antes de ouvir, mostra a sua estultícia e vergonha.” Um capítulo sobre a língua, a arrogância e o valor da amizade — terminando com um amigo “mais chegado do que um irmão”.",
      pergunta: "Tenho ouvido de verdade antes de responder, ou já respondo formulando enquanto o outro ainda fala?"
    },
    "Provérbios 19": {
      texto: "“Melhor é o pobre que anda na sua integridade, do que o perverso de lábios e tolo.” E a lembrança de que a impaciência gera erro: “a estultícia do homem perverte o seu caminho, e o seu coração se irrita contra o Senhor”.",
      pergunta: "Tenho deixado a impaciência tomar decisões que exigiam calma?"
    },
    "Provérbios 20": {
      texto: "“O vinho é escarnecedor, a bebida forte alvoroçadora.” Advertências práticas sobre autocontrole, honestidade nos pesos e medidas, e o reconhecimento humilde: “quem pode dizer: purifiquei o meu coração?”.",
      pergunta: "Existe alguma área onde tenho perdido o autocontrole e minimizado isso?"
    },
    "Provérbios 21": {
      texto: "“Como ribeiros de águas assim é o coração do rei na mão do Senhor; ele o inclina a todo o seu querer.” Nem o poder mais absoluto escapa da direção soberana de Deus — e “o cavalo prepara-se para o dia da batalha, mas do Senhor vem a vitória”.",
      pergunta: "Tenho me preparado com diligência, mas confiado o resultado a Deus?"
    },
    "Provérbios 22": {
      texto: "“Instrui o menino no caminho em que deve andar.” Junto com advertências sobre dívida — “o que toma emprestado é servo do que empresta” — e o cuidado com o pobre, que Deus mesmo defende na causa dele.",
      pergunta: "Tenho investido intencionalmente na formação de quem está sob minha influência?"
    },
    "Provérbios 23": {
      texto: "Advertências contra a ganância — “não te fatigues para enriqueceres... porque as riquezas fazem para si asas” — e contra os excessos da bebida, descritos com realismo cru. Sabedoria que protege do que promete prazer e entrega ruína.",
      pergunta: "Tenho me esgotado buscando algo que, no fim, tem asas e voa?"
    },
    "Provérbios 24": {
      texto: "“Se te mostrares frouxo no dia da angústia, a tua força será pequena.” E o conselho de não se alegrar com a queda do inimigo — a justiça de Deus não é desculpa para satisfação pessoal com a desgraça alheia.",
      pergunta: "Já senti secreta satisfação com a queda de alguém de quem não gosto?"
    },
    "Provérbios 25": {
      texto: "“Como maçãs de ouro em salvas de prata, assim é a palavra dita a seu tempo.” Não basta falar o certo — o momento importa tanto quanto o conteúdo. E o conselho de tratar o inimigo com bondade, citado por Paulo em Romanos.",
      pergunta: "Tenho falado a coisa certa no momento errado, perdendo o efeito do que era verdadeiro?"
    },
    "Provérbios 26": {
      texto: "Retratos afiados do tolo, do preguiçoso e do intrigante — “como o carvão para as brasas, e a lenha para o fogo, assim é o homem contencioso para acender rixas”. Nem toda discussão precisa de mais combustível.",
      pergunta: "Tenho jogado lenha em discussões que já poderiam ter se apagado?"
    },
    "Provérbios 27": {
      texto: "“Não te glories do dia de amanhã, porque não sabes o que trará.” E a imagem clássica: “como o ferro com o ferro se afia, assim o homem afia o rosto do seu amigo”. Amizade verdadeira inclui atrito que aperfeiçoa.",
      pergunta: "Tenho amigos que me afiam com honestidade, ou só que concordam comigo?"
    },
    "Provérbios 28": {
      texto: "“O que encobre as suas transgressões nunca prosperará; mas o que as confessa e deixa alcançará misericórdia.” Confissão sem abandono do erro é incompleta; abandono sem confissão é solitário. O texto pede os dois juntos.",
      pergunta: "Tenho confessado e também abandonado, ou parado na metade do caminho?"
    },
    "Provérbios 29": {
      texto: "“Não havendo profecia, o povo se corrompe.” Sem visão e direção vinda de Deus, comunidades se desfazem. E ainda: “o temor do homem armará laços, mas o que confia no Senhor será posto em alto retiro”.",
      pergunta: "O medo do que os outros pensam tem me prendido em algum laço?"
    },
    "Provérbios 30": {
      texto: "As palavras de Agur, com uma humildade rara: “na verdade que eu sou mais brutal do que ninguém”. E o pedido equilibrado: nem pobreza que leve ao roubo, nem riqueza que leve ao esquecimento de Deus — “dá-me o pão da minha porção”.",
      pergunta: "Consigo pedir a Deus o suficiente, sem exigir demais nem temer a falta?"
    },
    "Provérbios 31": {
      texto: "O livro encerra com o retrato da mulher virtuosa — trabalhadora, generosa, forte, que “estende as mãos ao pobre” e cuja boca fala com sabedoria. E o versículo que resume tudo: “enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa será louvada”.",
      pergunta: "Tenho valorizado nas pessoas — e em mim — o que passa, ou o que permanece?"
    },
    "Eclesiastes 1": {
      texto: "“Vaidade de vaidades, tudo é vaidade.” O Pregador começa com um diagnóstico brutal: gerações vêm e vão, o sol nasce e se põe, os rios correm para o mar que nunca enche. Sem Deus, a vida é um ciclo sem sentido — e o livro passará doze capítulos provando isso.",
      pergunta: "Já senti esse cansaço de estar correndo em círculos sem chegar a lugar nenhum?"
    },
    "Eclesiastes 2": {
      texto: "O Pregador testa tudo: prazer, riqueza, grandes obras, sabedoria. Constrói casas, planta vinhas, acumula ouro, e conclui: “olhei para todas as obras das minhas mãos... e eis que tudo era vaidade”. Ele teve o que quis e ainda faltava algo.",
      pergunta: "O que eu tenho perseguido achando que, se conseguir, finalmente vou me sentir satisfeito(a)?"
    },
    "Eclesiastes 3": {
      texto: "“Tudo tem o seu tempo determinado” — nascer e morrer, chorar e rir, calar e falar. E no meio da lista, uma frase que explica a inquietação humana: Deus “pôs a eternidade no coração do homem”. Fomos feitos para algo maior do que este ciclo comporta.",
      pergunta: "Tenho respeitado o tempo de cada coisa, ou tentado forçar o que ainda não chegou?"
    },
    "Eclesiastes 4": {
      texto: "O Pregador observa a opressão, a inveja que move o trabalho e a solidão de quem trabalha sem ter para quem deixar. E conclui: “melhor é serem dois do que um... o cordão de três dobras não se quebra depressa”.",
      pergunta: "Tenho construído relações que me sustentem, ou trabalhado sozinho(a) demais?"
    },
    "Eclesiastes 5": {
      texto: "“Guarda o teu pé, quando entrares na casa de Deus... não te precipites com a tua boca.” Uma advertência contra promessas religiosas feitas por impulso, e contra a ilusão do dinheiro: “quem amar o dinheiro nunca se fartará de dinheiro”.",
      pergunta: "Tenho falado com Deus com mais palavras do que reverência?"
    },
    "Eclesiastes 6": {
      texto: "Um homem pode ter riquezas, bens, honra e muitos filhos, e ainda assim não desfrutar de nada disso. O Pregador chama isso de “vaidade e péssima enfermidade” — ter tudo e não conseguir usufruir é uma pobreza que o dinheiro não resolve.",
      pergunta: "Tenho conseguido desfrutar do que já tenho, ou vivo mirando sempre no próximo objetivo?"
    },
    "Eclesiastes 7": {
      texto: "Provérbios sóbrios: “melhor é a tristeza do que o riso, porque com a tristeza do rosto se faz melhor o coração”. E o conselho de não idealizar o passado — “não digas: por que foram os dias passados melhores do que estes?”.",
      pergunta: "Tenho idealizado um passado que talvez nunca tenha sido tão bom quanto lembro?"
    },
    "Eclesiastes 8": {
      texto: "Diante das injustiças que ficam sem resposta e dos mistérios que ninguém decifra, o Pregador admite os limites do entendimento humano — mas mantém a convicção de que “bem sucederá aos que temem a Deus”, mesmo sem enxergar como.",
      pergunta: "Consigo confiar em Deus mesmo diante de injustiças que não vejo serem resolvidas?"
    },
    "Eclesiastes 9": {
      texto: "A morte alcança justos e ímpios igualmente, e ninguém sabe o que vem pela frente. Por isso o conselho: coma seu pão com alegria, viva com quem você ama e “tudo quanto te vier à mão para fazer, faze-o conforme as tuas forças”.",
      pergunta: "Tenho feito com dedicação o que está diante de mim hoje, ou vivendo à espera de outra vida?"
    },
    "Eclesiastes 10": {
      texto: "“Assim como as moscas mortas fazem exalar mau cheiro... assim é para o famoso em sabedoria e em honra um pouco de estultícia.” Pequenas tolices podem estragar uma reputação construída por anos.",
      pergunta: "Existe alguma “pequena tolice” minha que está estragando algo grande?"
    },
    "Eclesiastes 11": {
      texto: "“Lança o teu pão sobre as águas... quem observa o vento nunca semeará.” Um chamado à ação generosa e corajosa apesar da incerteza — esperar a certeza total é garantir que nada será plantado.",
      pergunta: "Tenho adiado agir esperando uma certeza que talvez nunca venha?"
    },
    "Eclesiastes 12": {
      texto: "O livro fecha com um retrato poético do envelhecimento e com a conclusão de tudo: “teme a Deus, e guarda os seus mandamentos; porque este é o dever de todo o homem”. Depois de testar tudo debaixo do sol, o Pregador só encontra sentido acima dele.",
      pergunta: "Depois de tudo que já busquei, tenho chegado à mesma conclusão do Pregador?"
    },
    "Cantares 1": {
      texto: "O livro se abre com o desejo declarado sem constrangimento entre dois noivos. A Escritura dedica um livro inteiro ao amor conjugal — sinal de que romance, atração e afeto não são temas menores nem indignos diante de Deus.",
      pergunta: "Tenho tratado o amor no casamento como algo digno de cuidado e celebração?"
    },
    "Cantares 2": {
      texto: "“Eu sou a rosa de Sarom... como o lírio entre os espinhos, assim é a minha amiga entre as filhas.” Elogios que exaltam a pessoa amada acima de todas as outras. E o refrão repetido: “não acordeis o amor até que ele queira”.",
      pergunta: "Tenho expressado em palavras o valor de quem amo, ou presumido que já sabem?"
    },
    "Cantares 3": {
      texto: "A noiva procura pela cidade quem sua alma ama, e ao encontrá-lo não o solta. Depois, a descrição do cortejo nupcial de Salomão. Amor que busca ativamente e celebra publicamente o compromisso.",
      pergunta: "Tenho buscado ativamente quem amo, ou deixado a relação no piloto automático?"
    },
    "Cantares 4": {
      texto: "O noivo descreve a beleza da amada em detalhe poético, chamando-a de “jardim fechado, fonte selada” — uma imagem de exclusividade e entrega reservada. A intimidade é celebrada dentro de limites que a protegem.",
      pergunta: "Tenho protegido a exclusividade do que é reservado ao meu compromisso?"
    },
    "Cantares 5": {
      texto: "Um momento de desencontro: ela demora a abrir, ele já se foi, e ela sai à procura, ferida pelos guardas da cidade. O livro não esconde que até o amor genuíno passa por hesitações e reencontros difíceis.",
      pergunta: "Tenho reparado desencontros com quem amo, ou deixado a distância se acumular?"
    },
    "Cantares 6": {
      texto: "“Eu sou do meu amado, e o meu amado é meu.” Uma declaração de pertencimento mútuo — não posse controladora, mas entrega recíproca e voluntária de dois que escolheram um ao outro.",
      pergunta: "Meu relacionamento tem sido entrega mútua, ou cobrança de um lado só?"
    },
    "Cantares 7": {
      texto: "Elogios que celebram o corpo e a presença da amada, com desejo expresso sem vergonha dentro do compromisso. A Bíblia não trata o desejo como problema a ser tolerado, mas como dom a ser vivido no lugar certo.",
      pergunta: "Tenho enxergado o desejo dentro do casamento como algo bom, dado por Deus?"
    },
    "Cantares 8": {
      texto: "O clímax do livro: “o amor é forte como a morte... as muitas águas não poderiam apagar este amor”. Um amor que não se compra com riquezas e não se apaga com dificuldades. Muitos leem aqui também um retrato do amor de Deus pelo Seu povo.",
      pergunta: "Meu amor tem resistido às “muitas águas”, ou esfriado na primeira dificuldade?"
    },
    "Isaías 1": {
      texto: "Deus rejeita sacrifícios oferecidos por mãos “cheias de sangue”, e pede o oposto: “aprendei a fazer o bem, procurai o juízo, ajudai o oprimido”. E então a oferta que atravessa o livro: “ainda que os vossos pecados sejam como a escarlata, eles se tornarão brancos como a neve”.",
      pergunta: "Minha religiosidade tem vindo acompanhada de justiça prática com o próximo?"
    },
    "Isaías 2": {
      texto: "Uma visão dos últimos dias: as nações subindo ao monte do Senhor, transformando espadas em arados e lanças em foices. E o alerta: “deixai-vos do homem, cujo fôlego está no seu nariz”. Confiar em gente é apostar em quem depende de um sopro.",
      pergunta: "Tenho colocado em pessoas uma confiança que só cabe em Deus?"
    },
    "Isaías 3": {
      texto: "Deus anuncia a remoção dos líderes e da estabilidade de Judá — “darei meninos por seus príncipes”. A sociedade se desfaz de cima para baixo quando a corrupção alcança quem deveria proteger o povo.",
      pergunta: "Tenho orado por quem lidera, sabendo o efeito que a liderança tem sobre todos?"
    },
    "Isaías 4": {
      texto: "Depois do juízo, uma promessa: o “Renovo do Senhor” será formoso e glorioso, e Deus criará sobre Sião uma nuvem de dia e um clarão de fogo à noite — a mesma proteção do Êxodo, prometida de novo. Julgamento nunca é a última palavra.",
      pergunta: "Consigo enxergar promessa de restauração mesmo em meio a um tempo de correção?"
    },
    "Isaías 5": {
      texto: "A parábola da vinha: Deus preparou tudo, esperou uvas boas e colheu uvas bravas. Seguem seis “ais” contra quem ajunta casa a casa, chama o mal de bem e é sábio aos próprios olhos.",
      pergunta: "Tenho chamado de bem alguma coisa que sei, no fundo, que é mal?"
    },
    "Isaías 6": {
      texto: "Isaías vê o Senhor no trono, os serafins clamando “santo, santo, santo”, e sua primeira reação é desespero: “ai de mim, porque sou perdido”. Purificado por uma brasa do altar, ele responde ao chamado: “eis-me aqui, envia-me a mim”.",
      pergunta: "Minha resposta ao chamado de Deus tem sido “eis-me aqui”, ou uma lista de desculpas?"
    },
    "Isaías 7": {
      texto: "Diante do medo do rei Acaz, Deus oferece um sinal e ele recusa por falsa piedade. O sinal vem assim mesmo: “eis que a virgem conceberá... e será o seu nome Emanuel”. Mateus citará essa promessa ao narrar o nascimento de Jesus.",
      pergunta: "Tenho recusado a ajuda de Deus disfarçando isso de humildade?"
    },
    "Isaías 8": {
      texto: "Enquanto o povo consulta médiuns, Deus manda buscar respostas “à lei e ao testemunho”. E se apresenta como “santuário” para quem O teme e “pedra de tropeço” para quem O rejeita — o mesmo Deus, dois destinos diferentes.",
      pergunta: "Tenho buscado respostas na Palavra, ou em fontes que prometem atalho?"
    },
    "Isaías 9": {
      texto: "“O povo que andava em trevas viu uma grande luz.” Nasce o menino cujos nomes anunciam quem Ele é: Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz — e do Seu governo e paz não haverá fim.",
      pergunta: "Tenho vivido como quem já viu a luz, ou ainda ando como quem está no escuro?"
    },
    "Isaías 10": {
      texto: "Ai dos que decretam leis injustas “para privarem do juízo os necessitados”. E um alerta à Assíria, instrumento do juízo divino, que se gaba como se a força fosse sua: “porventura, gloriar-se-á o machado contra o que corta com ele?”.",
      pergunta: "Tenho me gabado de capacidades que, na verdade, foram dadas por Deus?"
    },
    "Isaías 11": {
      texto: "Do tronco cortado de Jessé brota um renovo sobre quem repousa o Espírito do Senhor. Ele julgará com justiça os pobres, e a criação será reconciliada — o lobo com o cordeiro, a criança brincando junto à cova da víbora.",
      pergunta: "Tenho esperança na restauração completa que Deus promete, ou parei na dificuldade presente?"
    },
    "Isaías 12": {
      texto: "Um cântico curto de gratidão depois do juízo: “tu, Senhor, me consolaste”. E a imagem que ficou: “vós tirareis águas com alegria das fontes da salvação”. Alegria que nasce de ter sido salvo, não de circunstância favorável.",
      pergunta: "Minha alegria tem nascido da salvação recebida, ou depende das circunstâncias?"
    },
    "Isaías 13": {
      texto: "Uma profecia contra a Babilônia, o império mais poderoso da época, anunciando sua queda completa. Deus não governa só Israel — Ele julga impérios inteiros e determina o fim de cada um.",
      pergunta: "Reconheço que Deus governa também sobre as forças que parecem grandes demais para cair?"
    },
    "Isaías 14": {
      texto: "A queda do rei da Babilônia é descrita com a fala de quem dizia “subirei ao céu... serei semelhante ao Altíssimo”. Orgulho que se leva ao extremo termina no abismo — o padrão que a Escritura repete desde o Éden.",
      pergunta: "Existe alguma área onde meu orgulho tem crescido sem ser confrontado?"
    },
    "Isaías 15": {
      texto: "Um oráculo sobre Moabe, e o que chama atenção é o tom: não há comemoração pela desgraça alheia. O profeta lamenta — “o meu coração clama por causa de Moabe”. Julgamento anunciado com dor, não com prazer.",
      pergunta: "Tenho lamentado a queda alheia, ou secretamente me alegrado com ela?"
    },
    "Isaías 16": {
      texto: "O lamento por Moabe continua, e o texto ainda aponta para um trono estabelecido “em benignidade... julgando e buscando o juízo”. Mesmo em oráculo de juízo, aparece a esperança de um governo justo que virá.",
      pergunta: "Consigo manter esperança em justiça futura mesmo vendo injustiça agora?"
    },
    "Isaías 17": {
      texto: "Damasco cairá, e o texto explica a raiz: “te esqueceste do Deus da tua salvação, e não te lembraste da rocha da tua fortaleza”. Esquecimento de Deus é descrito como a causa, não a consequência, da ruína.",
      pergunta: "O que tenho plantado que não tem raiz na rocha da minha salvação?"
    },
    "Isaías 18": {
      texto: "Uma mensagem à distante Cuxe, com a imagem de Deus observando tranquilo “como o ardor do sol resplandecente”, esperando o tempo exato de agir. A quietude de Deus não é ausência — é timing.",
      pergunta: "Tenho confundido o silêncio de Deus com desinteresse da parte Dele?"
    },
    "Isaías 19": {
      texto: "Depois de anunciar juízo sobre o Egito, vem uma reviravolta impressionante: haverá altar ao Senhor no Egito, e Deus chamará “bendito o meu povo Egito, e Assíria, obra das minhas mãos”. Inimigos históricos incluídos na bênção.",
      pergunta: "Consigo imaginar Deus alcançando alguém que hoje considero inimigo?"
    },
    "Isaías 20": {
      texto: "Isaías caminha descalço e despido por três anos como sinal profético contra a confiança no Egito. Obediência que custa dignidade pública — o profeta virou a própria mensagem.",
      pergunta: "Estaria disposto(a) a obedecer a Deus em algo que me custasse imagem diante dos outros?"
    },
    "Isaías 21": {
      texto: "Uma sentinela é postada para vigiar e anunciar o que vê: “caiu, caiu Babilônia”. O papel do profeta é ficar acordado enquanto os outros dormem, e falar o que enxerga, mesmo sem ser agradável.",
      pergunta: "Tenho ficado atento ao que Deus mostra, ou preferido a distração confortável?"
    },
    "Isaías 22": {
      texto: "Diante da ameaça, Jerusalém se prepara militarmente, conta as casas, reforça muros — mas “não olhastes para o que fez isto”. Toda a competência técnica aplicada, e nenhum olhar para Deus.",
      pergunta: "Tenho resolvido problemas com competência, mas sem olhar para Deus no processo?"
    },
    "Isaías 23": {
      texto: "Tiro, a potência comercial da época, é derrubada. Deus “o determinou, para profanar a soberba de toda a glória”. Nenhum império econômico é intocável quando se ergue contra o Senhor.",
      pergunta: "Tenho tratado poder econômico como algo mais sólido do que ele realmente é?"
    },
    "Isaías 24": {
      texto: "Um juízo em escala global: a terra inteira sob julgamento, “porque traspassaram as leis, mudaram o estatuto, quebraram a aliança eterna”. E no meio da devastação, vozes ainda cantando a majestade do Senhor.",
      pergunta: "Consigo louvar a Deus mesmo quando tudo ao redor parece se desfazer?"
    },
    "Isaías 25": {
      texto: "Uma promessa gloriosa: Deus prepara um banquete para todos os povos, “devorará a morte para sempre” e “enxugará as lágrimas de todos os rostos”. Apocalipse retomará essa mesma imagem no último capítulo da Bíblia.",
      pergunta: "Tenho vivido com a esperança de que Deus vai enxugar toda lágrima um dia?"
    },
    "Isaías 26": {
      texto: "“Tu conservarás em paz aquele cuja mente está firme em ti, porque ele confia em ti.” Paz descrita não como ausência de problema, mas como resultado de uma mente ancorada em Deus.",
      pergunta: "Minha mente tem estado firme em Deus, ou oscilando com cada notícia?"
    },
    "Isaías 27": {
      texto: "A vinha de Deus, que no capítulo 5 produzira uvas bravas, aparece agora sendo guardada por Ele mesmo: “eu, o Senhor, a guardo, e a cada momento a regarei”. O mesmo Deus que julga é o que restaura.",
      pergunta: "Confio que Deus continua cuidando de mim mesmo depois de ter me corrigido?"
    },
    "Isaías 28": {
      texto: "Deus ensina “preceito sobre preceito, regra sobre regra, um pouco aqui, um pouco ali” — instrução paciente e gradual. E anuncia a pedra angular preciosa: “aquele que crer não se apresse”.",
      pergunta: "Tenho tido paciência com o jeito gradual como Deus me ensina?"
    },
    "Isaías 29": {
      texto: "“Este povo se aproxima de mim com a sua boca, e com os seus lábios me honra, mas o seu coração se afasta de mim.” Jesus citaria exatamente esse versículo contra a religiosidade dos fariseus.",
      pergunta: "Minha adoração tem sido de boca, ou de coração?"
    },
    "Isaías 30": {
      texto: "O povo desce ao Egito buscando ajuda sem consultar a Deus, e Ele responde: “na volta e no descanso estaria a vossa salvação; na quietude e na confiança estaria a vossa força; mas não quisestes”.",
      pergunta: "Tenho buscado solução na agitação, quando Deus oferecia força na quietude?"
    },
    "Isaías 31": {
      texto: "“Ai dos que descem ao Egito a buscar socorro, e se estribam em cavalos... mas não atentam para o Santo de Israel.” Confiança em recursos visíveis descrita como abandono prático de Deus.",
      pergunta: "Em que “cavalos” eu tenho me apoiado ultimamente?"
    },
    "Isaías 32": {
      texto: "Uma visão de um rei que reinará com justiça, onde cada homem será “como um esconderijo contra o vento”. Liderança descrita como abrigo para os outros, não como plataforma para si mesmo.",
      pergunta: "Tenho sido abrigo para alguém, ou apenas buscado meu próprio abrigo?"
    },
    "Isaías 33": {
      texto: "Diante do desespero, a pergunta: “quem dentre nós habitará com o fogo consumidor?”. A resposta descreve quem anda em justiça e fala com retidão — e a promessa: “o Senhor é o nosso Rei, ele nos salvará”.",
      pergunta: "Tenho vivido de um jeito que suportaria estar perto da santidade de Deus?"
    },
    "Isaías 34": {
      texto: "Um juízo severo sobre as nações e sobre Edom, com linguagem de devastação total. O capítulo termina mandando buscar “no livro do Senhor” — mesmo o anúncio mais duro vem acompanhado do convite a verificar a Palavra.",
      pergunta: "Tenho verificado na Palavra aquilo que ouço sobre Deus, em vez de aceitar qualquer versão?"
    },
    "Isaías 35": {
      texto: "Depois do capítulo mais sombrio, o mais luminoso: o deserto florescerá como a rosa, os olhos dos cegos se abrirão, o coxo saltará como cervo. E haverá um “caminho santo” por onde os remidos voltarão com júbilo.",
      pergunta: "Consigo enxergar o deserto atual como lugar onde Deus ainda pode fazer florescer algo?"
    },
    "Isaías 36": {
      texto: "O general assírio zomba publicamente de Ezequias e de Deus, tentando quebrar a moral do povo com propaganda em hebraico, para todos entenderem. E o povo, orientado pelo rei, permanece calado — não responde à provocação.",
      pergunta: "Tenho sabido quando não responder a provocações que só querem me desestabilizar?"
    },
    "Isaías 37": {
      texto: "Ezequias leva a carta ameaçadora ao templo e a estende diante do Senhor. Deus responde, e o exército assírio é destruído numa noite. O rei não discutiu com o inimigo — levou o problema para a presença de Deus.",
      pergunta: "O que eu preciso literalmente “estender diante do Senhor” em vez de ficar remoendo?"
    },
    "Isaías 38": {
      texto: "Ezequias adoece de morte, chora e ora, e recebe mais quinze anos de vida. Seu cântico de gratidão reconhece: “eis que foi para minha paz que tive grande amargura”. A doença o aproximou de Deus.",
      pergunta: "Alguma dificuldade já me trouxe uma paz que o conforto nunca teria trazido?"
    },
    "Isaías 39": {
      texto: "Ezequias mostra todos os tesouros aos embaixadores da Babilônia, e Isaías anuncia que tudo aquilo será levado dali um dia. Um momento de vaidade com consequências para gerações seguintes.",
      pergunta: "Tenho pensado no efeito que minhas escolhas de hoje terão sobre quem vem depois?"
    },
    "Isaías 40": {
      texto: "“Consolai, consolai o meu povo.” Começa a segunda parte do livro, com a promessa de que a palavra de Deus permanece para sempre, e a imagem que sustenta gerações: “os que esperam no Senhor renovarão as suas forças... correrão e não se cansarão”.",
      pergunta: "Tenho esperado no Senhor para renovar as forças, ou tentado seguir só na minha energia?"
    },
    "Isaías 41": {
      texto: "“Não temas, porque eu sou contigo... eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.” Deus fala a um povo pequeno e assustado, chamando-o de “verme de Jacó” e prometendo transformá-lo em instrumento afiado.",
      pergunta: "Tenho me sentido pequeno demais para o que Deus pode fazer através de mim?"
    },
    "Isaías 42": {
      texto: "O primeiro Cântico do Servo: “eis aqui o meu servo... não quebrará a cana trilhada, nem apagará o pavio que fumega”. Mateus aplicará esse texto diretamente a Jesus — força que não esmaga o que já está frágil.",
      pergunta: "Tenho tratado com delicadeza pessoas que já estão “trilhadas” pela vida?"
    },
    "Isaías 43": {
      texto: "“Não temas, porque eu te remi; chamei-te pelo teu nome, tu és meu.” Quando passares pelas águas, pelo fogo, Deus estará junto. E a promessa de novidade: “eis que faço uma coisa nova; agora sairá à luz”.",
      pergunta: "Consigo crer que Deus me chama pelo nome, não como parte de uma multidão anônima?"
    },
    "Isaías 44": {
      texto: "Deus ridiculariza a fabricação de ídolos: o homem corta uma árvore, com metade cozinha o pão, com a outra metade faz um deus e se prostra diante dele. Absurdo que fica evidente quando descrito passo a passo.",
      pergunta: "Se eu descrevesse passo a passo o que tem ocupado meu coração, pareceria razoável?"
    },
    "Isaías 45": {
      texto: "Deus chama Ciro, um rei pagão, de “meu ungido”, e declara: “eu sou o Senhor, e não há outro”. Ele usa quem quiser, inclusive quem não O conhece, para cumprir Seus propósitos com o Seu povo.",
      pergunta: "Tenho limitado as formas pelas quais Deus pode agir na minha vida?"
    },
    "Isaías 46": {
      texto: "Os ídolos precisam ser carregados em carroças, pesando sobre os animais cansados. Deus faz o contrário: “eu vos carreguei desde o ventre... até a vossa velhice eu serei o mesmo”. Ídolos pesam; Deus sustenta.",
      pergunta: "O que tenho carregado que deveria estar me carregando?"
    },
    "Isaías 47": {
      texto: "A queda da Babilônia é anunciada com uma acusação central: “disseste no teu coração: eu sou, e não há outra além de mim”. Autossuficiência declarada como raiz da ruína.",
      pergunta: "Existe algo em mim que diz, no fundo, “eu me basto”?"
    },
    "Isaías 48": {
      texto: "Deus repreende um povo teimoso — “sabia que procederias mui perfidamente” — e ainda assim declara: “por amor do meu nome retardarei a minha ira”. Ele age por causa de quem Ele é, não do que merecemos.",
      pergunta: "Consigo aceitar que a paciência de Deus comigo é por causa Dele, não do meu mérito?"
    },
    "Isaías 49": {
      texto: "Segundo Cântico do Servo, que será “luz para os gentios”. E a imagem mais terna do livro: “pode uma mulher esquecer-se de seu filho... elas mesmas podem esquecer-se, mas eu não me esquecerei de ti”.",
      pergunta: "Tenho me sentido esquecido(a) por Deus, quando Ele diz o contrário de forma tão enfática?"
    },
    "Isaías 50": {
      texto: "Terceiro Cântico do Servo: “dei as minhas costas aos que me feriam... não escondi o meu rosto dos que me afrontavam”. Uma descrição do sofrimento voluntário, aceito com o rosto firme “como um seixo”.",
      pergunta: "Tenho enfrentado dificuldade com o rosto firme, ou fugido dela ao primeiro sinal?"
    },
    "Isaías 51": {
      texto: "“Olhai para a rocha de onde fostes cortados.” Deus chama o povo a lembrar de Abraão e Sara — de como Ele multiplicou a partir de um casal sem filhos. Memória da fidelidade passada como base para confiar agora.",
      pergunta: "De qual “rocha” eu fui cortado, e tenho lembrado disso quando duvido?"
    },
    "Isaías 52": {
      texto: "“Quão formosos são sobre os montes os pés do que anuncia as boas novas.” E começa o quarto Cântico do Servo, com a descrição de alguém tão desfigurado que assombra a muitos — antecipando o que viria no capítulo seguinte.",
      pergunta: "Meus pés têm levado boas novas a alguém, ou fico esperando que outros levem?"
    },
    "Isaías 53": {
      texto: "O texto mais impressionante do Antigo Testamento: “ele foi ferido pelas nossas transgressões... o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados”. Setecentos anos antes da cruz, o Novo Testamento inteiro já estava aqui.",
      pergunta: "Tenho dimensionado o que custou a Ele a paz que eu recebo de graça?"
    },
    "Isaías 54": {
      texto: "À mulher estéril é dito que cante, porque terá mais filhos que a casada. E vem a promessa: “os montes se retirarão, mas a minha benignidade não se apartará de ti”. Aliança de paz mais estável que a geografia.",
      pergunta: "Confio que o amor de Deus por mim é mais estável do que qualquer circunstância?"
    },
    "Isaías 55": {
      texto: "“Ó vós, todos os que tendes sede, vinde às águas... comprai sem dinheiro e sem preço.” Um convite gratuito e universal. E o lembrete de que os pensamentos de Deus não são os nossos, nem Seus caminhos os nossos.",
      pergunta: "Tenho tentado pagar por algo que Deus oferece de graça?"
    },
    "Isaías 56": {
      texto: "Deus promete aos estrangeiros e aos eunucos — os excluídos do templo pela Lei — um lugar e um nome “melhor do que o de filhos e filhas”. Sua casa “será chamada casa de oração para todos os povos”.",
      pergunta: "Tenho ajudado a fazer da comunidade de fé um lugar onde os excluídos cabem?"
    },
    "Isaías 57": {
      texto: "Depois de denunciar a idolatria, Deus revela onde escolhe habitar: “no alto e santo lugar, mas também com o contrito e abatido de espírito, para vivificar o espírito dos abatidos”. Altura máxima e proximidade máxima ao mesmo tempo.",
      pergunta: "Tenho levado a Deus meu espírito abatido, sabendo que é exatamente ali que Ele habita?"
    },
    "Isaías 58": {
      texto: "Deus rejeita o jejum que convive com opressão e aponta o jejum que Ele escolhe: soltar as ligaduras da impiedade, repartir o pão com o faminto, agasalhar o nu. Espiritualidade medida pela justiça praticada.",
      pergunta: "Meu esforço religioso tem se traduzido em cuidado concreto com quem tem fome?"
    },
    "Isaías 59": {
      texto: "“As vossas iniquidades fazem separação entre vós e o vosso Deus.” O diagnóstico é duro: não é que Deus não ouça, é que o pecado interrompe. E então Ele mesmo intervém, vestindo justiça como couraça, porque não havia ninguém para interceder.",
      pergunta: "Existe algo em mim que tem interrompido minha comunhão com Deus?"
    },
    "Isaías 60": {
      texto: "“Levanta-te, resplandece, porque vem a tua luz.” A glória do Senhor nasce sobre um povo em trevas, e as nações caminham em direção a esse brilho. A luz não é gerada por eles — é recebida e refletida.",
      pergunta: "Tenho refletido a luz que recebi, ou tentado brilhar com luz própria?"
    },
    "Isaías 61": {
      texto: "“O Espírito do Senhor Deus está sobre mim... para pregar boas novas aos mansos, para curar os quebrantados de coração.” Foi exatamente esse texto que Jesus leu na sinagoga de Nazaré, dizendo: hoje se cumpriu.",
      pergunta: "Tenho levado boas novas aos quebrantados, ou só convivido com quem já está bem?"
    },
    "Isaías 62": {
      texto: "Deus promete dar a Sião um nome novo, e declara: “como o noivo se alegra da noiva, assim se alegrará de ti o teu Deus”. Não tolerância resignada — alegria de noivo.",
      pergunta: "Consigo crer que Deus se alegra comigo, e não apenas me suporta?"
    },
    "Isaías 63": {
      texto: "Um retrato do Deus que pisa o lagar do juízo sozinho, seguido de uma oração que relembra as misericórdias antigas: “em toda a angústia deles foi ele angustiado”. Deus não é indiferente ao sofrimento do Seu povo.",
      pergunta: "Tenho crido que Deus se angustia junto comigo, e não apenas observa de longe?"
    },
    "Isaías 64": {
      texto: "“Ah! se fendesses os céus e descesses!” Um clamor por intervenção, misturado com confissão: “todas as nossas justiças são como trapo da imundícia”. E a imagem final: “tu és o oleiro, e todos nós a obra das tuas mãos”.",
      pergunta: "Tenho me colocado como barro nas mãos do Oleiro, ou resistido ao formato que Ele dá?"
    },
    "Isaías 65": {
      texto: "Deus diz que se deixou achar por quem nem perguntava por Ele. E anuncia “novos céus e nova terra”, onde não se ouvirá mais choro nem clamor, e o trabalho não será em vão.",
      pergunta: "Tenho vivido com esperança concreta nos novos céus e nova terra que Deus promete?"
    },
    "Isaías 66": {
      texto: "O livro fecha com Deus perguntando que casa poderiam construir para Ele, e respondendo onde olha: “para o pobre e abatido de espírito, e que treme da minha palavra”. Depois de 66 capítulos, o que impressiona a Deus é um coração humilde.",
      pergunta: "Ainda tremo diante da Palavra de Deus, ou já me acostumei com ela?"
    },
    "Jeremias 1": {
      texto: "“Antes que te formasse no ventre te conheci... e te constituí profeta às nações.” Jeremias alega ser jovem demais, e Deus responde tirando a desculpa: “não digas: sou uma criança... a todos a quem eu te enviar irás”.",
      pergunta: "Que desculpa eu tenho usado para adiar algo que Deus já deixou claro?"
    },
    "Jeremias 2": {
      texto: "Deus acusa o povo de dois males: “deixaram-me a mim, que sou a fonte das águas vivas, e cavaram cisternas rotas, que não retêm as águas”. Trocaram água viva por reservatórios furados — e ainda tiveram trabalho para cavá-los.",
      pergunta: "Que “cisterna rota” eu tenho me esforçado para manter, em vez de beber da fonte?"
    },
    "Jeremias 3": {
      texto: "Apesar da infidelidade descrita como adultério, Deus chama: “volta, ó infiel Israel... porque sou misericordioso”. O convite ao retorno vem antes de qualquer condição, direto de quem foi traído.",
      pergunta: "Tenho demorado a voltar para Deus achando que preciso me consertar primeiro?"
    },
    "Jeremias 4": {
      texto: "“Lavra para ti campo de lavoura, e não semeies entre espinhos.” Deus pede circuncisão do coração, não apenas mudança externa. Jeremias, ao ver a devastação que vem, se angustia: “as paredes do meu coração!”.",
      pergunta: "Tenho semeado boas intenções entre espinhos que nunca arranquei?"
    },
    "Jeremias 5": {
      texto: "Deus manda procurar em Jerusalém “um homem que pratique a justiça” — e a busca fracassa. O mais grave é a conclusão: “os profetas profetizam falsamente... e o meu povo assim o deseja”. O engano só prospera porque agrada.",
      pergunta: "Tenho preferido ouvir o que me agrada, mesmo suspeitando que não é verdade?"
    },
    "Jeremias 6": {
      texto: "“Ponde-vos nos caminhos, e vede, e perguntai pelas veredas antigas... e andai por elas.” Um chamado a buscar o caminho testado, não a novidade — mas o povo responde: “não andaremos”.",
      pergunta: "Tenho desprezado caminhos antigos e testados em nome de algo que só parece novo?"
    },
    "Jeremias 7": {
      texto: "No portão do templo, Jeremias denuncia quem repete “templo do Senhor, templo do Senhor” como amuleto enquanto rouba e oprime. Estrutura religiosa não protege quem vive na injustiça.",
      pergunta: "Tenho usado minha vida religiosa como garantia, sem mudar o que faço fora dela?"
    },
    "Jeremias 8": {
      texto: "“Passou a sega, findou o verão, e nós não estamos salvos.” O tempo da colheita acabou e nada mudou. E o lamento do profeta: “não há bálsamo em Gileade?” — ferida que continua aberta por falta de quem queira ser curado.",
      pergunta: "Existe alguma decisão que eu venho adiando até o “verão” acabar?"
    },
    "Jeremias 9": {
      texto: "“Prouvera que a minha cabeça se tornasse em águas, e os meus olhos em uma fonte de lágrimas!” Jeremias chora pelo próprio povo. E Deus define do que se gloriar: não sabedoria, força ou riqueza, mas conhecê-Lo.",
      pergunta: "Do que eu tenho me gloriado, quando o texto diz que só conhecer a Deus vale isso?"
    },
    "Jeremias 10": {
      texto: "Contra os ídolos que precisam ser pregados com martelo “para que não bambeie”, o profeta contrasta: “o Senhor é o verdadeiro Deus; ele é o Deus vivo”. Um deus que precisa ser segurado não segura ninguém.",
      pergunta: "O que eu tenho segurado, que deveria ser o que me sustenta?"
    },
    "Jeremias 11": {
      texto: "Deus denuncia a quebra da aliança, e Jeremias descobre uma conspiração contra sua vida — vinda de sua própria cidade, Anatote. Ele se compara a “um cordeiro manso, que se leva ao matadouro”.",
      pergunta: "Como tenho reagido quando a oposição vem de perto, e não de longe?"
    },
    "Jeremias 12": {
      texto: "Jeremias questiona diretamente: “por que prospera o caminho dos ímpios?”. Deus responde com uma pergunta mais dura: se ele se cansa correndo com homens de pé, como correrá com cavalos? Está sendo preparado para coisa maior.",
      pergunta: "Tenho enxergado a dificuldade atual como preparo para algo maior?"
    },
    "Jeremias 13": {
      texto: "O cinto de linho escondido junto ao rio apodrece, e Deus explica: assim faria à soberba de Judá. O povo que deveria estar “apegado” a Ele como um cinto ao corpo se afastou e se estragou.",
      pergunta: "Tenho estado apegado a Deus, ou guardado longe, apodrecendo aos poucos?"
    },
    "Jeremias 14": {
      texto: "Diante da seca, Jeremias intercede — e Deus diz para não orar mais por aquele povo. Os falsos profetas continuam anunciando paz; Deus os desmente: “profetizam falsamente em meu nome”.",
      pergunta: "Tenho verificado se a “palavra de paz” que ouço vem realmente de Deus?"
    },
    "Jeremias 15": {
      texto: "Jeremias confessa: “achando-se as tuas palavras, logo as comi... elas eram o gozo do meu coração”. Mas também lamenta sua dor sem fim. Deus responde chamando-o de volta e prometendo ser “muro de bronze” a seu favor.",
      pergunta: "A Palavra de Deus ainda tem sido alimento e alegria para mim?"
    },
    "Jeremias 16": {
      texto: "Deus proíbe Jeremias de casar e de ter filhos, para que sua própria vida fosse sinal do juízo que vinha. Obediência que custou ao profeta a possibilidade de uma vida comum.",
      pergunta: "Estaria disposto(a) a obedecer a Deus em algo que custasse meus planos pessoais?"
    },
    "Jeremias 17": {
      texto: "“Enganoso é o coração, mais do que todas as coisas.” E o contraste: maldito quem confia no homem, bendito quem confia no Senhor — árvore plantada junto às águas, que não teme o calor nem deixa de dar fruto na seca.",
      pergunta: "Minhas raízes estão em algo que sobreviveria a uma seca prolongada?"
    },
    "Jeremias 18": {
      texto: "Na casa do oleiro, o vaso se estraga na mão e ele o refaz. Deus é o Oleiro que refaz — mas o barro precisa se deixar moldar. A imagem não é de destruição, é de refazimento.",
      pergunta: "Tenho resistido às mãos que querem me refazer melhor?"
    },
    "Jeremias 19": {
      texto: "Jeremias quebra uma botija diante dos anciãos como sinal de que Deus quebraria aquele povo, “como se quebra o vaso do oleiro, que não pode mais refazer-se”. Há um ponto em que o endurecimento se torna irreversível.",
      pergunta: "Existe algo em mim endurecendo a ponto de não se deixar mais moldar?"
    },
    "Jeremias 20": {
      texto: "Espancado e preso no tronco, Jeremias explode: “enganaste-me, Senhor... tornou-se-me em meu coração como fogo ardente, encerrado nos meus ossos; e estou fatigado de sofrer, e não posso mais”. Fé e exaustão no mesmo capítulo.",
      pergunta: "Tenho sido honesto(a) com Deus sobre meu cansaço, em vez de fingir força?"
    },
    "Jeremias 21": {
      texto: "O rei Zedequias pede a Jeremias que consulte a Deus esperando milagre — e recebe a resposta que não queria: a cidade cairá. O profeta não amaciou a mensagem para agradar o poder.",
      pergunta: "Tenho buscado a Deus querendo confirmação, ou realmente disposto(a) a ouvir?"
    },
    "Jeremias 22": {
      texto: "Deus define o que espera do rei: “executai o juízo e a justiça, e livrai o espoliado da mão do opressor”. E compara dois reis: um que julgou a causa do pobre — “porventura não é isso conhecer-me?” — e outro que só pensou em palácios.",
      pergunta: "Conhecer a Deus, na prática, tem me levado a defender quem é oprimido?"
    },
    "Jeremias 23": {
      texto: "Contra pastores que dispersam o rebanho, Deus promete levantar “um Renovo justo” que reinará com prudência. E denuncia profetas que “dizem uma visão do seu coração, não da boca do Senhor”.",
      pergunta: "Tenho confundido meus próprios desejos com direção vinda de Deus?"
    },
    "Jeremias 24": {
      texto: "A visão dos dois cestos de figos: os bons são os exilados, os maus são os que ficaram. Deus inverte a lógica — quem parecia castigado estava sendo preservado, e teria coração para conhecê-Lo.",
      pergunta: "Já julguei errado quem estava sendo abençoado e quem não estava?"
    },
    "Jeremias 25": {
      texto: "Setenta anos de cativeiro são anunciados com prazo definido. Mesmo o juízo mais severo vem com data para terminar — Deus não abandona indefinidamente, mesmo quando disciplina duramente.",
      pergunta: "Consigo confiar que há prazo até para os tempos difíceis que Deus permite?"
    },
    "Jeremias 26": {
      texto: "Jeremias quase é morto por pregar no templo, mas alguns anciãos lembram de Miqueias, que profetizou coisa parecida e foi ouvido. A memória histórica de uma geração salvou a vida do profeta.",
      pergunta: "Tenho aprendido com a história, ou repetido erros que outros já pagaram caro?"
    },
    "Jeremias 27": {
      texto: "Deus manda Jeremias usar canga de madeira no pescoço e anunciar submissão à Babilônia. Aceitar a disciplina de Deus, mesmo humilhante, era o caminho de vida — resistir seria a morte.",
      pergunta: "Tenho resistido a algo que Deus está usando para me corrigir?"
    },
    "Jeremias 28": {
      texto: "O profeta Hananias quebra a canga de Jeremias e anuncia libertação em dois anos — mensagem agradável e falsa. Ele morre naquele mesmo ano. Nem toda palavra encorajadora vem de Deus.",
      pergunta: "Tenho testado as promessas animadoras que ouço, ou aceito por vontade de que sejam verdade?"
    },
    "Jeremias 29": {
      texto: "Aos exilados, Deus manda construir casas, plantar hortas e buscar a paz da cidade inimiga. E vem o versículo tão citado — “eu bem sei os pensamentos que tenho a vosso respeito, pensamentos de paz” — dito a um povo que ainda passaria setenta anos no exílio.",
      pergunta: "Tenho vivido bem o lugar onde estou, mesmo não sendo onde eu queria estar?"
    },
    "Jeremias 30": {
      texto: "Em meio ao juízo, uma promessa de restauração: “restaurarei a saúde e curarei as tuas chagas, diz o Senhor”. O mesmo Deus que permitiu a ferida se compromete a curá-la.",
      pergunta: "Tenho levado a Deus feridas que Ele mesmo promete curar?"
    },
    "Jeremias 31": {
      texto: "“Com amor eterno te amei; por isso com benignidade te atraí.” E a promessa da nova aliança: “porei a minha lei no seu interior, e a escreverei no seu coração” — texto que Hebreus aplica diretamente ao que Cristo realizou.",
      pergunta: "Tenho vivido a lei de Deus como algo escrito no coração, ou como regra externa?"
    },
    "Jeremias 32": {
      texto: "Com a cidade cercada e prestes a cair, Deus manda Jeremias comprar um campo — um investimento absurdo em terra que seria perdida. Sinal profético de que “ainda se comprarão casas, campos e vinhas nesta terra”.",
      pergunta: "Tenho agido com esperança concreta, mesmo quando o cenário não a justifica?"
    },
    "Jeremias 33": {
      texto: "“Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.” No auge da prisão e do cerco, Deus promete revelação e restauração para além do que o profeta conseguia imaginar.",
      pergunta: "Tenho clamado a Deus esperando algo que ainda não sei, ou só o que já imagino?"
    },
    "Jeremias 34": {
      texto: "O povo liberta seus escravos conforme a Lei e depois volta atrás, tomando-os de novo. Deus condena duramente esse arrependimento revertido — obediência que dura pouco é tratada como zombaria.",
      pergunta: "Já voltei atrás em algo bom que tinha decidido fazer diante de Deus?"
    },
    "Jeremias 35": {
      texto: "Os recabitas recusam beber vinho por fidelidade a uma ordem do antepassado deles, e Deus os usa como exemplo constrangedor: eles obedeceram um pai humano, e Judá não obedeceu ao Deus vivo.",
      pergunta: "Existem compromissos humanos que eu honro mais do que os que fiz com Deus?"
    },
    "Jeremias 36": {
      texto: "O rei Jeoaquim corta o rolo da profecia com um canivete e o queima pedaço por pedaço. Deus manda escrever tudo de novo, com acréscimos. Destruir a mensagem não anula a Palavra.",
      pergunta: "Tenho tentado “cortar” partes da Palavra que me incomodam?"
    },
    "Jeremias 37": {
      texto: "Jeremias é preso acusado de deserção, e mesmo assim o rei o chama em segredo para perguntar: “há alguma palavra do Senhor?”. Ele responde a mesma coisa de sempre, sem mudar o recado para sair da cadeia.",
      pergunta: "Tenho mantido a verdade mesmo quando mudá-la traria alívio imediato?"
    },
    "Jeremias 38": {
      texto: "Jogado numa cisterna de lama para morrer, Jeremias é resgatado por Ebede-Meleque, um estrangeiro etíope que arriscou tudo e usou trapos velhos para não machucar as axilas do profeta ao puxá-lo. Coragem com delicadeza.",
      pergunta: "Tenho sido cuidadoso(a) nos detalhes ao ajudar alguém, ou apenas resolvido o problema?"
    },
    "Jeremias 39": {
      texto: "Jerusalém cai exatamente como fora anunciado por décadas. No meio da destruição, Deus manda avisar Ebede-Meleque de que ele será poupado, “porquanto confiaste em mim”. Deus não esquece quem agiu com fé.",
      pergunta: "Confio que Deus registra atos de fé que ninguém mais viu?"
    },
    "Jeremias 40": {
      texto: "O comandante babilônico liberta Jeremias e reconhece que a queda veio porque o povo pecou contra Deus. Um pagão enxerga a verdade teológica que Judá se recusara a admitir por gerações.",
      pergunta: "Tenho aceitado a verdade quando ela vem de quem eu não esperaria?"
    },
    "Jeremias 41": {
      texto: "Ismael assassina o governador Gedalias por ambição e mergulha o remanescente no caos. Depois da tragédia nacional, a violência interna continua machucando os que sobraram.",
      pergunta: "Tenho contribuído para curar ou para ferir ainda mais quem já está fragilizado?"
    },
    "Jeremias 42": {
      texto: "O povo jura obedecer o que Deus responder, seja o que for. Ele responde: fiquem na terra. Dez dias de espera pela resposta, e um juramento que logo seria quebrado.",
      pergunta: "Tenho perguntado a Deus já com a resposta decidida no coração?"
    },
    "Jeremias 43": {
      texto: "Acusando Jeremias de mentir, o povo desce ao Egito levando o profeta à força — exatamente o oposto do que jurara. Deus anuncia que o desastre os alcançaria justamente onde buscaram segurança.",
      pergunta: "Tenho fugido para lugares que parecem seguros, mas que Deus não indicou?"
    },
    "Jeremias 44": {
      texto: "No Egito, o povo declara abertamente que voltará a queimar incenso à “rainha dos céus”, porque antes “tínhamos fartura de pão”. Nostalgia distorcida transformando idolatria em boa lembrança.",
      pergunta: "Tenho romantizado um tempo em que eu estava mais distante de Deus?"
    },
    "Jeremias 45": {
      texto: "Baruque, o escriba, lamenta seu cansaço, e Deus responde: “buscas para ti grandes coisas? Não as busques”. Mas promete preservar sua vida. Consolo realista, sem promessa de grandeza.",
      pergunta: "Tenho buscado grandeza para mim, quando Deus oferece algo mais simples e seguro?"
    },
    "Jeremias 46": {
      texto: "Profecia contra o Egito, a potência em que Judá tanto confiou. E no meio do oráculo às nações, uma palavra a Israel: “não temas, servo meu Jacó... eu te livrarei de longe”.",
      pergunta: "Tenho colocado esperança em potências que Deus já disse que cairão?"
    },
    "Jeremias 47": {
      texto: "Um oráculo curto contra os filisteus, com a imagem de águas que sobem e inundam tudo. O profeta pergunta à espada do Senhor “até quando não te aquietarás?” — juízo que ele mesmo desejaria ver terminar.",
      pergunta: "Consigo desejar o fim do sofrimento até de quem está do outro lado?"
    },
    "Jeremias 48": {
      texto: "Contra Moabe, com um diagnóstico preciso: “esteve descansado desde a sua mocidade... não foi mudado de vasilha em vasilha”. Nunca foi sacudido, e por isso nunca amadureceu.",
      pergunta: "Períodos de sacudida na minha vida têm me amadurecido ou só me irritado?"
    },
    "Jeremias 49": {
      texto: "Oráculos contra vários povos, incluindo Edom, a quem Deus diz: “a soberba do teu coração te enganou”. E ainda assim promete cuidar dos órfãos e viúvas que restarem entre os julgados.",
      pergunta: "Em que a soberba do meu coração pode estar me enganando agora?"
    },
    "Jeremias 50": {
      texto: "A Babilônia, instrumento do juízo, será julgada também. E o povo receberá perdão: “buscar-se-á a maldade de Israel, e não haverá nenhuma”. O carrasco não fica impune, e o culpado é limpo.",
      pergunta: "Consigo crer que meus pecados podem ser procurados e simplesmente não encontrados?"
    },
    "Jeremias 51": {
      texto: "A queda definitiva da Babilônia é anunciada e o rolo com a profecia é jogado no Eufrates com uma pedra amarrada. Palavra escrita, selada e entregue ao rio — Deus cumpre o que anuncia, mesmo décadas depois.",
      pergunta: "Tenho paciência com promessas de Deus cujo cumprimento demora?"
    },
    "Jeremias 52": {
      texto: "O livro termina com o relato frio da queda de Jerusalém e do exílio — e, no último parágrafo, o rei Joaquim libertado da prisão e recebendo ração diária do rei da Babilônia até morrer. Um fio mínimo de graça no fim do escombro.",
      pergunta: "Consigo procurar o fio de graça que Deus deixa até nos finais mais duros?"
    },
    "Lamentações 1": {
      texto: "“Como está solitária a cidade outrora tão populosa!” O livro abre com Jerusalém retratada como viúva que chora à noite sem ninguém para consolá-la. A Escritura dedica um livro inteiro ao luto — dor não precisa ser apressada para virar lição.",
      pergunta: "Tenho permitido a mim mesmo(a) — e aos outros — lamentar sem pressa de superar?"
    },
    "Lamentações 2": {
      texto: "O profeta reconhece que a destruição veio da mão de Deus, sem suavizar: “o Senhor fez o que intentou”. E ainda assim clama por misericórdia, com os olhos que “se desfazem em lágrimas”. Reconhecer a justiça do juízo não impede o clamor.",
      pergunta: "Consigo reconhecer minha responsabilidade em algo e, mesmo assim, clamar por misericórdia?"
    },
    "Lamentações 3": {
      texto: "No centro exato do livro, o giro: “as misericórdias do Senhor são a causa de não sermos consumidos... novas são cada manhã; grande é a tua fidelidade”. A esperança não nega a dor dos capítulos anteriores — nasce no meio dela.",
      pergunta: "Consigo reconhecer misericórdias novas nesta manhã, mesmo com a dor de ontem ainda presente?"
    },
    "Lamentações 4": {
      texto: "A descrição da fome no cerco é crua e insuportável — mães incapazes de alimentar os filhos. O texto não poupa o leitor, porque o pecado que parecia abstrato produziu consequências concretas e terríveis.",
      pergunta: "Tenho levado a sério que escolhas erradas produzem consequências reais sobre pessoas reais?"
    },
    "Lamentações 5": {
      texto: "O livro termina sem final feliz: “converte-nos a ti, Senhor, e nos converteremos... se é que não nos rejeitaste de todo”. Uma oração que fecha em incerteza, com um pedido em vez de uma garantia — honestidade até o último versículo.",
      pergunta: "Consigo levar a Deus orações que terminam em pergunta, e não em certeza?"
    },
    "Ezequiel 1": {
      texto: "No exílio, junto ao rio Quebar, Ezequiel vê os céus se abrirem: criaturas viventes, rodas dentro de rodas, e sobre tudo um trono. A visão termina com cuidado nas palavras — “a aparência da semelhança da glória do Senhor”. Deus aparece longe da terra prometida, mostrando que não estava preso ao templo.",
      pergunta: "Tenho limitado a presença de Deus a lugares específicos, esquecendo que Ele alcança onde estou?"
    },
    "Ezequiel 2": {
      texto: "Deus chama Ezequiel de “filho do homem” e o envia a um povo rebelde, avisando de antemão: “quer ouçam quer deixem de ouvir”. O sucesso da missão não seria medido pela resposta das pessoas, mas pela fidelidade em falar.",
      pergunta: "Tenho medido minha obediência pelo resultado que ela produz nos outros?"
    },
    "Ezequiel 3": {
      texto: "O profeta come o rolo, que é doce na boca, e é constituído “atalaia sobre a casa de Israel” — se não avisar, o sangue será cobrado dele. Uma responsabilidade pesada, ligada ao que sabemos e calamos.",
      pergunta: "Existe algo que Deus me deu para dizer, e eu tenho calado por conveniência?"
    },
    "Ezequiel 4": {
      texto: "Ezequiel encena o cerco de Jerusalém com um tijolo, e depois deita sobre um lado por 390 dias e sobre o outro por 40. Obediência que transformou o corpo do profeta em mensagem viva, por mais de um ano.",
      pergunta: "Minha vida tem comunicado a mensagem que minha boca diz acreditar?"
    },
    "Ezequiel 5": {
      texto: "O profeta corta os próprios cabelos e barba, dividindo-os em três partes como sinal do destino de Jerusalém. Deus explica: “ela se rebelou contra os meus juízos mais do que as nações”. Privilégio maior gera responsabilidade maior.",
      pergunta: "Tenho vivido à altura da luz que já recebi, ou abaixo dela?"
    },
    "Ezequiel 6": {
      texto: "Juízo contra os montes de Israel e seus altares idólatras, com um refrão que se repetirá dezenas de vezes no livro: “e saberão que eu sou o Senhor”. O propósito final do juízo não é destruir, é fazer conhecer.",
      pergunta: "O que Deus tem usado na minha vida para que eu O conheça de verdade?"
    },
    "Ezequiel 7": {
      texto: "“Vem o fim, vem o fim.” A prata e o ouro serão lançados nas ruas, incapazes de livrar ninguém no dia da ira. Segurança financeira exposta como ilusão diante do juízo.",
      pergunta: "Em que segurança material eu confio mais do que gostaria de admitir?"
    },
    "Ezequiel 8": {
      texto: "Levado em visão ao templo, Ezequiel vê abominações escondidas nas salas internas — líderes praticando idolatria em segredo, dizendo “o Senhor não nos vê”. O que estava oculto é escancarado diante do profeta.",
      pergunta: "Existe algo que faço acreditando que ninguém — nem Deus — está vendo?"
    },
    "Ezequiel 9": {
      texto: "Antes do juízo, um homem vestido de linho marca a testa dos que “suspiram e gemem por causa de todas as abominações”. Deus distingue quem se importa com o que está errado, mesmo sem poder mudar tudo.",
      pergunta: "Tenho me entristecido com o que entristece a Deus, ou me acostumado com isso?"
    },
    "Ezequiel 10": {
      texto: "A glória do Senhor se move e começa a deixar o templo. Aos poucos, Deus se retira de uma casa que se tornou irreconhecível. O momento mais trágico do livro é silencioso — não é destruição, é partida.",
      pergunta: "Tenho percebido quando algo que fazia parte da minha vida com Deus foi silenciosamente esvaziado?"
    },
    "Ezequiel 11": {
      texto: "Junto ao juízo, uma promessa central: “tirarei da sua carne o coração de pedra e lhes darei um coração de carne”. Deus não pede que mudem sozinhos — Ele se compromete a fazer o transplante.",
      pergunta: "Tenho pedido a Deus um coração novo, ou tentado consertar o antigo por esforço próprio?"
    },
    "Ezequiel 12": {
      texto: "O profeta encena a mudança de um exilado, cavando a parede e saindo com a bagagem à vista de todos. Contra os que diziam “a visão é para muitos dias”, Deus responde: nenhuma palavra minha será adiada.",
      pergunta: "Tenho tratado avisos de Deus como algo distante, que não me alcança agora?"
    },
    "Ezequiel 13": {
      texto: "Contra profetas que rebocam um muro fraco com cal, fazendo parecer firme o que vai cair. Eles “viram vaidade e adivinhação mentirosa, dizendo: o Senhor disse”. Aparência de solidez sobre estrutura podre.",
      pergunta: "Tenho “rebocado” algo na minha vida em vez de consertar a estrutura?"
    },
    "Ezequiel 14": {
      texto: "Anciãos vêm consultar o profeta com “ídolos no coração”, e Deus recusa responder assim. Mesmo que Noé, Daniel e Jó estivessem ali, salvariam apenas a si mesmos — ninguém é salvo pela fé de outro.",
      pergunta: "Tenho vindo a Deus com o coração dividido, esperando resposta mesmo assim?"
    },
    "Ezequiel 15": {
      texto: "A parábola da videira inútil: sua madeira não serve nem para fazer um prego. A videira só tem valor pelo fruto. Israel era chamado a frutificar, não a impressionar por outra qualidade.",
      pergunta: "Tenho buscado ser útil a Deus por qualidades que não são o fruto que Ele pede?"
    },
    "Ezequiel 16": {
      texto: "Deus descreve Jerusalém como criança abandonada que Ele resgatou, criou e cobriu de bênçãos, e que depois se voltou contra Ele. A infidelidade é retratada com linguagem dura de traição conjugal — e ainda assim o capítulo termina com Deus prometendo lembrar da aliança e perdoar.",
      pergunta: "Tenho lembrado de onde Deus me tirou, ou tratado o que recebi como mérito próprio?"
    },
    "Ezequiel 17": {
      texto: "A parábola das duas águias e da videira denuncia a quebra de um juramento feito em nome de Deus. E termina com Deus prometendo plantar Ele mesmo um ramo tenro que se tornará cedro majestoso.",
      pergunta: "Tenho honrado os compromissos que assumi diante de Deus, mesmo quando ficou difícil?"
    },
    "Ezequiel 18": {
      texto: "Contra o provérbio “os pais comeram uvas verdes e os dentes dos filhos se embotaram”, Deus estabelece: “a alma que pecar, essa morrerá”. Ninguém é condenado pelo pecado alheio — e Ele declara: “não tenho prazer na morte do que morre... convertei-vos e vivei”.",
      pergunta: "Tenho culpado minha história familiar por escolhas que hoje são minhas?"
    },
    "Ezequiel 19": {
      texto: "Um lamento em forma de poema sobre os príncipes de Israel — leões capturados e uma videira arrancada. A queda da liderança narrada como tragédia, não como vitória de quem estava certo.",
      pergunta: "Consigo lamentar a queda de quem errou, sem satisfação por ter avisado antes?"
    },
    "Ezequiel 20": {
      texto: "Uma retrospectiva da história de Israel, em que Deus repete: “fiz porém isto por amor do meu nome, para que não fosse profanado”. A fidelidade de Deus não se explica pelo comportamento do povo, mas pelo caráter Dele.",
      pergunta: "Consigo aceitar que a paciência de Deus comigo tem a ver com quem Ele é, não com o que mereço?"
    },
    "Ezequiel 21": {
      texto: "A espada do Senhor é anunciada, afiada e polida, e nem o rei escapa: “tira o diadema... o que é humilde será exaltado, e o que é alto será abatido”. Nenhuma coroa humana é permanente.",
      pergunta: "Tenho me apoiado em posições e títulos que podem ser removidos a qualquer momento?"
    },
    "Ezequiel 22": {
      texto: "Deus busca “um homem que faça um muro e que se ponha na brecha perante mim” — e não acha ninguém. A ausência de intercessores é descrita como uma das causas do juízo.",
      pergunta: "Tenho me colocado na brecha por alguém em oração, ou apenas comentado o problema?"
    },
    "Ezequiel 23": {
      texto: "Duas irmãs simbolizam Samaria e Jerusalém, e sua infidelidade é retratada com linguagem intencionalmente chocante de prostituição. O objetivo do desconforto é que o leitor sinta o quanto a idolatria é traição, não apenas erro doutrinário.",
      pergunta: "Tenho tratado a idolatria do coração como falha pequena, quando Deus a trata como traição?"
    },
    "Ezequiel 24": {
      texto: "A esposa de Ezequiel morre, e Deus o proíbe de fazer luto público — sinal do choque que virá quando o templo cair. O profeta obedece, e o custo pessoal da obediência atinge o ponto mais alto do livro.",
      pergunta: "Existe algum custo pessoal que tenho evitado para não obedecer a Deus completamente?"
    },
    "Ezequiel 25": {
      texto: "Oráculos contra Amom, Moabe, Edom e Filístia — nações que bateram palmas quando Jerusalém caiu. Alegrar-se com a desgraça alheia é tratado por Deus como ofensa que tem consequência.",
      pergunta: "Já me alegrei, mesmo em silêncio, com a queda de alguém?"
    },
    "Ezequiel 26": {
      texto: "Contra Tiro, que viu na ruína de Jerusalém uma oportunidade comercial — “ela se quebrou... eu me encherei”. Lucrar com a tragédia dos outros é denunciado como maldade, não esperteza.",
      pergunta: "Tenho enxergado oportunidade onde deveria enxergar dor alheia?"
    },
    "Ezequiel 27": {
      texto: "Um lamento poético descreve Tiro como um navio magnífico, carregado das riquezas de todo o mundo conhecido — e afundando no meio dos mares. Toda aquela glória comercial descrita justamente no momento do naufrágio.",
      pergunta: "O que eu construí que não sobreviveria a uma tempestade forte?"
    },
    "Ezequiel 28": {
      texto: "Contra o príncipe de Tiro, que dizia “eu sou Deus”. O texto descreve alguém que estava “no Éden”, perfeito em seus caminhos até que a iniquidade se achou nele — passagem que muitos leem também como retrato da queda do orgulho em sua origem.",
      pergunta: "Onde meu coração tem se elevado para além do que sou?"
    },
    "Ezequiel 29": {
      texto: "Contra o faraó do Egito, que dizia “o meu rio é meu, e eu o fiz para mim”. Ele reivindicava a criação de algo que apenas recebeu. Deus o chama de “cajado de cana” que fura a mão de quem se apoia nele.",
      pergunta: "Tenho reivindicado como meu o que na verdade me foi dado?"
    },
    "Ezequiel 30": {
      texto: "O “dia do Senhor” contra o Egito é anunciado, com seus aliados caindo junto. Quem se apoiou naquela potência descobre que apoio humano não sustenta no dia da prova.",
      pergunta: "Em que apoio humano eu tenho confiado mais do que deveria?"
    },
    "Ezequiel 31": {
      texto: "O Egito é comparado a um cedro magnífico do Líbano, mais alto que todas as árvores, em cujos ramos as aves faziam ninho — e que foi derrubado porque “se elevou o seu coração na sua altura”.",
      pergunta: "O sucesso tem elevado meu coração, ou aumentado minha gratidão?"
    },
    "Ezequiel 32": {
      texto: "Um lamento fúnebre pelo faraó, descendo à cova junto de outros impérios já caídos. A lista de nações mortas serve de espelho: todas se achavam permanentes, e todas estão no mesmo lugar agora.",
      pergunta: "Tenho vivido consciente de que nada humano é permanente?"
    },
    "Ezequiel 33": {
      texto: "O papel do atalaia é retomado, agora com o coração de Deus explicitado: “vivo eu... não tenho prazer na morte do ímpio, mas em que o ímpio se converta e viva”. O aviso existe para salvar, não para condenar.",
      pergunta: "Tenho avisado com o coração de quem quer ver o outro viver, ou de quem quer ter razão?"
    },
    "Ezequiel 34": {
      texto: "Contra pastores que apascentam a si mesmos, deixando as ovelhas feridas sem curativo. E a promessa: “eu mesmo apascentarei as minhas ovelhas... buscarei a perdida”. Jesus retomaria essa imagem ao se chamar o Bom Pastor.",
      pergunta: "Tenho cuidado de quem está sob minha responsabilidade, ou me servido dessa posição?"
    },
    "Ezequiel 35": {
      texto: "Contra Edom, que guardou “ódio perpétuo” e entregou os israelitas à espada no dia da calamidade deles. Rancor mantido por gerações é tratado como pecado com consequência própria.",
      pergunta: "Existe algum rancor antigo que eu venho alimentando há tempo demais?"
    },
    "Ezequiel 36": {
      texto: "A promessa mais completa de renovação: “derramarei água pura sobre vós... dar-vos-ei um coração novo e porei dentro de vós um espírito novo”. Deus se compromete a fazer o que o povo não conseguia fazer sozinho.",
      pergunta: "Tenho dependido de Deus para mudar o que eu já tentei mudar e não consegui?"
    },
    "Ezequiel 37": {
      texto: "O vale de ossos secos: Deus pergunta “viverão estes ossos?”, e Ezequiel responde com sabedoria: “Senhor, tu o sabes”. Ao som da profecia, ossos se juntam, ganham carne e recebem fôlego — um exército de pé onde havia só pó.",
      pergunta: "Que “ossos secos” na minha vida eu já dei como impossíveis de reviver?"
    },
    "Ezequiel 38": {
      texto: "A profecia contra Gogue descreve uma coalizão hostil que sobe contra o povo restaurado — e Deus declara que Ele mesmo será conhecido e santificado diante de muitas nações naquele confronto.",
      pergunta: "Confio que Deus permanece no controle mesmo diante de ameaças maiores que eu?"
    },
    "Ezequiel 39": {
      texto: "O fim de Gogue é anunciado, e Deus explica o propósito: “saberão as nações que os da casa de Israel foram levados cativos pela sua iniquidade”. Ele fará conhecido o Seu nome e não esconderá mais o rosto.",
      pergunta: "Tenho entendido que os propósitos de Deus vão além da minha história pessoal?"
    },
    "Ezequiel 40": {
      texto: "Começa a longa visão do novo templo, com um homem medindo cada porta e átrio com precisão. Depois de tanta destruição, Deus mostra um projeto detalhado — restauração planejada, não improvisada.",
      pergunta: "Consigo crer que Deus tem um projeto detalhado, mesmo quando só vejo escombros?"
    },
    "Ezequiel 41": {
      texto: "As medidas continuam pelo santuário interior, incluindo os querubins e palmeiras esculpidos nas paredes. Cada detalhe registrado com cuidado, como quem descreve algo precioso demais para resumir.",
      pergunta: "Tenho dado atenção aos detalhes daquilo que digo valorizar?"
    },
    "Ezequiel 42": {
      texto: "As câmaras santas onde os sacerdotes comeriam as ofertas e guardariam as vestes, separando “o santo do profano”. Havia espaço físico dedicado à distinção entre o comum e o sagrado.",
      pergunta: "Tenho mantido alguma separação clara entre o que é sagrado e o que é comum na minha rotina?"
    },
    "Ezequiel 43": {
      texto: "A glória do Senhor retorna ao templo pela porta oriental — a mesma por onde havia saído nos capítulos 10 e 11. Deus volta para a casa que abandonara, e declara: “aqui habitarei no meio dos filhos de Israel para sempre”.",
      pergunta: "Existe algum espaço na minha vida de onde a presença de Deus se afastou e precisa voltar?"
    },
    "Ezequiel 44": {
      texto: "A porta oriental permanece fechada porque o Senhor entrou por ela. E os sacerdotes fiéis, que não se desviaram quando o povo se desviou, recebem função de ensinar o povo a discernir entre o santo e o profano.",
      pergunta: "Tenho permanecido fiel mesmo quando a maioria ao meu redor se desviou?"
    },
    "Ezequiel 45": {
      texto: "A divisão da terra reserva porções santas e estabelece pesos e medidas justos: “tereis balanças justas”. Santidade e honestidade comercial aparecem no mesmo capítulo, sem separação entre o culto e o negócio.",
      pergunta: "Minha honestidade nos negócios reflete a mesma fé que pratico no culto?"
    },
    "Ezequiel 46": {
      texto: "Regras sobre as ofertas do príncipe e do povo nas festas, e uma norma curiosa: quem entra por uma porta deve sair pela oposta, sem voltar pelo mesmo caminho. Adoração que não deixa a pessoa sair igual a como entrou.",
      pergunta: "Tenho saído dos meus encontros com Deus diferente de como entrei?"
    },
    "Ezequiel 47": {
      texto: "Do templo brota um rio que cresce: água até os tornozelos, joelhos, cintura, e depois um rio que não se pode atravessar. Onde ele chega, tudo vive — até o Mar Morto se torna saudável.",
      pergunta: "Tenho entrado mais fundo no que Deus oferece, ou parado na altura dos tornozelos?"
    },
    "Ezequiel 48": {
      texto: "A divisão final da terra entre as tribos, com as portas da cidade nomeadas uma a uma. E o último versículo dá o nome da cidade restaurada: “O Senhor está ali”. Depois de 48 capítulos, a conclusão é presença.",
      pergunta: "Se minha vida recebesse um nome hoje, ele diria “o Senhor está ali”?"
    },
    "Daniel 1": {
      texto: "Levados para a Babilônia e treinados na cultura do império, Daniel “propôs no seu coração não se contaminar” com a comida do rei. Ele aceitou o nome novo e a educação estrangeira, mas traçou uma linha onde importava — e negociou com respeito, não com confronto.",
      pergunta: "Onde estão as minhas linhas inegociáveis, e eu as defino antes da pressão chegar?"
    },
    "Daniel 2": {
      texto: "Diante da ameaça de morte, Daniel pede tempo e convoca os amigos para orar. Ao receber a revelação do sonho, sua primeira reação não é correr ao rei — é louvar: “seja bendito o nome de Deus... porque dele é a sabedoria e a força”.",
      pergunta: "Minha primeira reação diante de uma resposta de Deus tem sido gratidão ou pressa?"
    },
    "Daniel 3": {
      texto: "Diante da fornalha, os três amigos declaram: Deus pode nos livrar, “e se não, fica sabendo, ó rei, que não serviremos a teus deuses”. Fé que permanece mesmo sem garantia de livramento — e no fogo, havia um quarto homem com eles.",
      pergunta: "Minha fé depende de Deus fazer o que peço, ou permanece mesmo se Ele não fizer?"
    },
    "Daniel 4": {
      texto: "Nabucodonosor é advertido, ignora o aviso por doze meses e é humilhado até reconhecer que “o Altíssimo tem domínio sobre o reino dos homens”. O testemunho é escrito pelo próprio rei, contando a própria queda.",
      pergunta: "Tenho ignorado avisos que Deus já me deu há tempo?"
    },
    "Daniel 5": {
      texto: "Belsazar profana os utensílios do templo numa festa, e uma mão escreve na parede. Daniel o confronta: “tu, Belsazar, não humilhaste o teu coração, ainda que soubeste de tudo isto”. Conhecer o erro dos outros não ensinou nada a ele.",
      pergunta: "Tenho aprendido com os erros que vejo nos outros, ou só os julgado?"
    },
    "Daniel 6": {
      texto: "Já idoso, Daniel continua orando três vezes ao dia com as janelas abertas, mesmo sabendo do decreto. Não mudou nada na rotina — nem para esconder, nem para aparecer. Na cova, Deus fecha a boca dos leões.",
      pergunta: "Minha rotina com Deus muda conforme quem está olhando?"
    },
    "Daniel 7": {
      texto: "A visão das quatro bestas e do “Ancião de Dias” no trono, com o “filho do homem” recebendo domínio eterno — título que Jesus usaria para Si mesmo mais que qualquer outro. Impérios passam; esse reino não passará.",
      pergunta: "Tenho me impressionado mais com os impérios do momento do que com o Reino eterno?"
    },
    "Daniel 8": {
      texto: "A visão do carneiro e do bode, com detalhes que se cumpririam na história dos medos, persas e gregos. Daniel adoece diante do peso do que viu — receber revelação não é experiência confortável.",
      pergunta: "Tenho buscado revelação de Deus com reverência, ou com curiosidade?"
    },
    "Daniel 9": {
      texto: "Lendo Jeremias, Daniel entende os setenta anos e reage orando e confessando — usando “nós pecamos”, incluindo a si mesmo num pecado que ele não cometera. Intercessão que assume o peso do povo.",
      pergunta: "Consigo interceder assumindo o peso junto, em vez de acusar de fora?"
    },
    "Daniel 10": {
      texto: "Depois de três semanas de jejum, um mensageiro celestial explica que a resposta saíra desde o primeiro dia, mas fora retida por um conflito espiritual. A demora não significava silêncio nem recusa.",
      pergunta: "Tenho interpretado demora como negativa de Deus?"
    },
    "Daniel 11": {
      texto: "Uma profecia longa e minuciosa sobre reis do norte e do sul, guerras e alianças. No meio da história política complexa, uma frase se destaca: “o povo que conhece ao seu Deus se esforçará e fará proezas”.",
      pergunta: "Conheço a Deus o suficiente para permanecer firme quando o cenário se complica?"
    },
    "Daniel 12": {
      texto: "O livro fecha com a promessa da ressurreição — “muitos dos que dormem no pó da terra ressuscitarão” — e uma orientação a Daniel: “vai-te até ao fim... descansarás e estarás na tua sorte no fim dos dias”.",
      pergunta: "Tenho vivido com a esperança da ressurreição como algo concreto, não abstrato?"
    },
    "Oséias 1": {
      texto: "Deus manda Oséias casar-se com uma mulher infiel, para que o próprio casamento do profeta se tornasse a mensagem. Os filhos recebem nomes que anunciam juízo — e no fim do capítulo, a promessa de que “não meu povo” voltará a ser chamado “filhos do Deus vivo”.",
      pergunta: "Deus já usou minha própria história como mensagem para outras pessoas?"
    },
    "Oséias 2": {
      texto: "Deus descreve o povo correndo atrás de amantes sem perceber que era Ele quem dava o trigo, o vinho e o azeite. E anuncia que a levará ao deserto para “falar-lhe ao coração” — disciplina com propósito de reconquista, não de abandono.",
      pergunta: "Tenho atribuído a outras fontes as bênçãos que na verdade vieram de Deus?"
    },
    "Oséias 3": {
      texto: "Deus manda Oséias amar novamente a esposa adúltera, e ele a compra de volta por quinze moedas e cevada. Um amor que resgata literalmente, pagando o preço de trazer de volta quem já havia se vendido.",
      pergunta: "Consigo dimensionar o preço que Deus pagou para me trazer de volta?"
    },
    "Oséias 4": {
      texto: "“O meu povo está sendo destruído, porque lhe falta o conhecimento.” Não era falta de religião — era ignorância sobre quem Deus é, e os sacerdotes tinham parte nisso por não ensinarem.",
      pergunta: "Tenho buscado conhecer a Deus de verdade, ou me contentado com o que já sei?"
    },
    "Oséias 5": {
      texto: "Deus se retira e diz: “irei, tornarei ao meu lugar, até que se reconheçam culpados e busquem a minha face”. Às vezes o silêncio de Deus é estratégia pastoral, não desinteresse.",
      pergunta: "Já interpretei um período de silêncio como abandono, quando era um chamado a buscar?"
    },
    "Oséias 6": {
      texto: "O povo diz palavras bonitas de arrependimento, mas Deus responde: “a vossa piedade é como a nuvem da manhã, e como o orvalho que cedo passa”. E define o que quer: “misericórdia, e não sacrifício”.",
      pergunta: "Meu arrependimento tem durado, ou evaporado como orvalho da manhã?"
    },
    "Oséias 7": {
      texto: "Efraim é comparado a “um bolo que não foi virado” — queimado de um lado, cru do outro. E a cabelos brancos que ele não percebe: o declínio avançando sem que a pessoa note.",
      pergunta: "Existe algum declínio na minha vida que os outros já veem e eu ainda não?"
    },
    "Oséias 8": {
      texto: "“Porque semearam vento, segarão tormenta.” Israel fez reis sem consultar Deus e fabricou ídolos com prata. Colheita proporcional ao que foi plantado, mesmo quando o plantio parecia inofensivo.",
      pergunta: "O que tenho semeado que talvez venha a colher em proporção maior?"
    },
    "Oséias 9": {
      texto: "O juízo se aproxima e o profeta é chamado de louco pelo povo. Deus lembra que os encontrou “como uvas no deserto” — alegria inicial que foi trocada pela vergonha de Baal-Peor.",
      pergunta: "Tenho lembrado da alegria dos meus primeiros passos com Deus?"
    },
    "Oséias 10": {
      texto: "“Semeai para vós em justiça, ceifai segundo a misericórdia; lavrai o campo de lavoura, porque é tempo de buscar ao Senhor.” Um chamado à ação enquanto ainda há tempo de plantar.",
      pergunta: "Existe um campo na minha vida que eu preciso lavrar agora, antes que passe o tempo?"
    },
    "Oséias 11": {
      texto: "Um dos textos mais ternos do AT: “quando Israel era menino, eu o amei... eu ensinei a andar a Efraim; tomei-os pelos seus braços”. E o conflito no coração de Deus: “como te entregaria?... o meu coração está comovido dentro de mim”.",
      pergunta: "Consigo enxergar Deus como quem me ensinou a andar, e não apenas como juiz?"
    },
    "Oséias 12": {
      texto: "Jacó é lembrado lutando com o anjo e chorando por misericórdia. E o chamado: “converte-te a teu Deus; guarda a benignidade e o juízo, e em teu Deus espera sempre”.",
      pergunta: "Tenho esperado sempre em Deus, ou só nos momentos em que preciso de algo?"
    },
    "Oséias 13": {
      texto: "Deus se compara a quem cuidou do povo no deserto, e adverte: “na sua pastagem se fartaram; e, estando fartos, ensoberbeceu-se o seu coração, e, por isso, se esqueceram de mim”. A fartura foi mais perigosa que a fome.",
      pergunta: "A abundância tem me tornado mais grato ou mais esquecido?"
    },
    "Oséias 14": {
      texto: "O livro fecha com o convite mais bonito: “tomai convosco palavras, e convertei-vos ao Senhor”. E a resposta de Deus: “sararei a sua infidelidade, eu voluntariamente os amarei”. Amor oferecido por vontade própria, sem exigência prévia.",
      pergunta: "Tenho crido que Deus me ama voluntariamente, e não a contragosto?"
    },
    "Joel 1": {
      texto: "Uma praga de gafanhotos devasta tudo, e o profeta chama o povo a lamentar e convocar um jejum solene. A catástrofe natural é lida como convocação espiritual, não apenas como má sorte agrícola.",
      pergunta: "Tenho lido as crises da minha vida como chamados, ou apenas como azar?"
    },
    "Joel 2": {
      texto: "“Rasgai o vosso coração, e não as vossas vestes.” Deus promete restaurar “os anos que comeu o gafanhoto” e derramar Seu Espírito sobre toda a carne — profecia que Pedro citaria no dia de Pentecostes.",
      pergunta: "O que eu preciso rasgar por dentro, e não apenas demonstrar por fora?"
    },
    "Joel 3": {
      texto: "O juízo das nações no “vale da decisão”, com arados virando espadas — o inverso de Isaías 2, agora para a guerra final. E a promessa: “o Senhor será o refúgio do seu povo”.",
      pergunta: "Tenho tratado Deus como refúgio real, ou como último recurso?"
    },
    "Amós 1": {
      texto: "Amós, pastor de Tecoa, começa denunciando as nações vizinhas por crueldades de guerra — “por três transgressões, e por quatro, não retirarei o castigo”. Deus responsabiliza povos que nem tinham a Lei, por crimes contra a humanidade básica.",
      pergunta: "Reconheço que existem padrões morais que valem para todos, não só para quem é religioso?"
    },
    "Amós 2": {
      texto: "Depois de julgar os vizinhos — o que agradava ao público israelita — Amós vira a mira para Israel: vendem “o justo por dinheiro, e o necessitado por um par de sapatos”. O sermão que aplaudiam alcança quem aplaudia.",
      pergunta: "Tenho aplaudido críticas aos outros sem aplicá-las a mim mesmo?"
    },
    "Amós 3": {
      texto: "“Porventura andarão dois juntos, se não estiverem de acordo?” Uma série de perguntas mostrando que nada acontece sem causa — e que a advertência profética é o aviso antes do juízo, como o leão que ruge antes do bote.",
      pergunta: "Tenho prestado atenção aos avisos que antecedem as consequências?"
    },
    "Amós 4": {
      texto: "Deus lista as tentativas de despertar o povo — fome, seca, pragas, guerra — cada uma seguida do mesmo refrão: “contudo não vos convertestes a mim”. Cinco chances ignoradas antes do “prepara-te para te encontrares com o teu Deus”.",
      pergunta: "Quantos avisos eu já recebi sobre algo que ainda não mudei?"
    },
    "Amós 5": {
      texto: "“Buscai-me, e vivei.” Deus rejeita as festas religiosas de um povo injusto — “tira de mim o estrépito dos teus cânticos” — e pede o que realmente quer: “corra o juízo como as águas, e a justiça como o ribeiro impetuoso”.",
      pergunta: "Minha adoração convive com injustiças que eu poderia corrigir?"
    },
    "Amós 6": {
      texto: "“Ai dos que vivem sossegados em Sião... e não se afligem pela ruína de José.” O pecado aqui não é fazer o mal, é o conforto indiferente diante do sofrimento alheio.",
      pergunta: "Tenho me acomodado no meu conforto enquanto ignoro a ruína ao redor?"
    },
    "Amós 7": {
      texto: "Amós intercede duas vezes e Deus se arrepende do juízo. Depois, o prumo é levantado no meio do povo. E quando o sacerdote manda o profeta embora, ele responde: “eu não era profeta... o Senhor me tirou de após o gado”.",
      pergunta: "Tenho aceitado ser usado por Deus mesmo sem ter o currículo que eu acharia necessário?"
    },
    "Amós 8": {
      texto: "O cesto de frutas maduras anuncia que o fim amadureceu. E vem uma fome descrita como a pior de todas: “não fome de pão, nem sede de água, mas de ouvir as palavras do Senhor”.",
      pergunta: "Tenho valorizado o acesso que tenho à Palavra, ou tratado como algo comum demais?"
    },
    "Amós 9": {
      texto: "Depois de nove capítulos duros, o final se abre em esperança: Deus levantará “o tabernáculo caído de Davi” e plantará o povo em sua terra, “e não serão mais arrancados”. Tiago citaria esse texto no concílio de Jerusalém.",
      pergunta: "Consigo esperar restauração de algo que hoje está caído na minha vida?"
    },
    "Obadias 1": {
      texto: "O menor livro do AT denuncia Edom por ter ficado assistindo enquanto Jerusalém era saqueada — “no dia em que estavas em frente dele, tu eras como um deles”. Omissão diante do sofrimento de um irmão é tratada como cumplicidade.",
      pergunta: "Já fiquei “em frente”, apenas assistindo, quando alguém precisava que eu agisse?"
    },
    "Jonas 1": {
      texto: "Chamado a Nínive, Jonas foge na direção oposta e paga a passagem do próprio desvio. Na tempestade, dorme enquanto marinheiros pagãos oram — e são eles que acabam temendo ao Senhor.",
      pergunta: "Tenho pago o preço de fugir de algo que Deus já deixou claro?"
    },
    "Jonas 2": {
      texto: "Do ventre do peixe, Jonas ora reconhecendo: “a salvação vem do Senhor”. Um louvor nascido do lugar mais improvável, depois que todas as saídas humanas se esgotaram.",
      pergunta: "Já precisei chegar ao fundo para reconhecer de onde vem minha salvação?"
    },
    "Jonas 3": {
      texto: "Nínive se arrepende do rei ao último cidadão, e Deus não traz o mal anunciado. A maior conversão em massa da Bíblia veio de uma pregação de oito palavras, feita por um profeta contrariado.",
      pergunta: "Deus pode usar meu trabalho mesmo quando meu coração não está totalmente nele?"
    },
    "Jonas 4": {
      texto: "Jonas fica furioso com a misericórdia de Deus e confessa que fugiu por saber que Ele perdoaria. O livro termina com uma pergunta sem resposta: “não hei de eu ter compaixão da grande cidade?”. A pergunta fica para o leitor.",
      pergunta: "Existe alguém a quem eu preferiria que Deus não estendesse misericórdia?"
    },
    "Miqueias 1": {
      texto: "O profeta anuncia juízo sobre Samaria e Jerusalém, e reage andando “despojado e nu”, uivando como chacal. A dor pelo pecado do próprio povo é vivida no corpo, não apenas anunciada de longe.",
      pergunta: "Tenho me entristecido de verdade com o pecado, ou apenas comentado sobre ele?"
    },
    "Miqueias 2": {
      texto: "Ai dos que “de noite intentam a iniquidade e a praticam pela manhã” porque têm poder para isso. Planejar o mal com antecedência é tratado como agravante, não como estratégia inteligente.",
      pergunta: "Existe algum mal pequeno que eu venho planejando em vez de abandonar?"
    },
    "Miqueias 3": {
      texto: "Contra líderes que “aborrecem o bem e amam o mal”, e profetas que anunciam paz para quem lhes dá comida e guerra para quem não dá. Mensagem espiritual ajustada conforme o pagamento.",
      pergunta: "Tenho ajustado o que digo conforme o interesse de quem me ouve?"
    },
    "Miqueias 4": {
      texto: "A visão do monte do Senhor exaltado, com nações convertendo espadas em arados, e cada um sentado debaixo da sua videira “sem haver quem os espante”. Paz descrita como segurança cotidiana, não abstração.",
      pergunta: "Tenho contribuído para que as pessoas ao meu redor se sintam seguras?"
    },
    "Miqueias 5": {
      texto: "“E tu, Belém-Efrata, posto que pequena entre os milhares de Judá, de ti me sairá o que governará em Israel.” Sete séculos antes, o lugar exato do nascimento do Messias — e a escolha recai sobre a cidade pequena.",
      pergunta: "Tenho desprezado lugares e pessoas pequenas que Deus pode ter escolhido?"
    },
    "Miqueias 6": {
      texto: "Depois de perguntar o que Deus exige — bezerros? milhares de carneiros? o primogênito? — vem a resposta que resume os profetas: “que pratiques a justiça, e ames a misericórdia, e andes humildemente com o teu Deus”.",
      pergunta: "Qual dos três me falta mais hoje: justiça, misericórdia ou humildade?"
    },
    "Miqueias 7": {
      texto: "O profeta lamenta a ausência de gente íntegra, mas declara: “eu, porém, olharei para o Senhor... quando eu cair, levantar-me-ei”. E fecha perguntando quem é como Deus, “que lança todos os pecados nas profundezas do mar”.",
      pergunta: "Consigo crer que meus pecados foram lançados no fundo do mar, e não guardados numa lista?"
    },
    "Naum 1": {
      texto: "“O Senhor é bom, é fortaleza no dia da angústia, e conhece os que confiam nele” — dito no meio de um oráculo de juízo contra Nínive, a mesma cidade que se arrependera nos dias de Jonas e voltara à violência.",
      pergunta: "Tenho voltado a padrões que já havia abandonado uma vez?"
    },
    "Naum 2": {
      texto: "A queda de Nínive é descrita com o barulho de carros de guerra e o saque da cidade que saqueara tantas. O império que aterrorizava o mundo conhecido descrito como leão cuja caverna ficou vazia.",
      pergunta: "Tenho temido poderes que, do ponto de vista de Deus, são passageiros?"
    },
    "Naum 3": {
      texto: "“Ai da cidade ensanguentada!” Nínive é comparada a Tebas, que também parecia invencível e caiu. O profeta pergunta: “és tu melhor do que Tebas?”. Ninguém aprende com a história alheia se acha que é exceção.",
      pergunta: "Tenho me achado exceção às regras que vejo se cumprirem com todo mundo?"
    },
    "Habacuque 1": {
      texto: "O profeta começa reclamando com Deus: “até quando clamarei e não me escutarás?”. E quando Deus responde que usará os caldeus, ainda piores, a resposta gera uma pergunta ainda maior. Fé que discute com honestidade.",
      pergunta: "Tenho levado a Deus perguntas honestas, ou fingido que entendo tudo?"
    },
    "Habacuque 2": {
      texto: "Deus manda escrever a visão em tábuas, “para que a possa ler quem passa correndo”, e declara: “o justo viverá pela sua fé” — versículo que Paulo usaria três vezes e que acenderia a Reforma.",
      pergunta: "Tenho vivido pela fé, ou pela clareza que exijo antes de confiar?"
    },
    "Habacuque 3": {
      texto: "A oração final: mesmo que a figueira não floresça, nem haja fruto na vide, nem gado nos currais — “todavia eu me alegrarei no Senhor”. Alegria que sobrevive à perda completa de tudo que sustentava a segurança.",
      pergunta: "Minha alegria sobreviveria se as fontes visíveis de segurança acabassem?"
    },
    "Sofonias 1": {
      texto: "O “grande dia do Senhor” é anunciado contra os que dizem no coração: “o Senhor não faz o bem, nem faz o mal”. A indiferença prática — crer que Deus não age — é tratada como pecado sério.",
      pergunta: "Tenho vivido como se Deus não estivesse envolvido no meu dia a dia?"
    },
    "Sofonias 2": {
      texto: "“Buscai ao Senhor, vós todos os mansos da terra... buscai a justiça, buscai a mansidão.” No meio do anúncio de juízo às nações, um convite específico aos humildes: talvez sejam escondidos no dia da ira.",
      pergunta: "Tenho buscado mansidão, ou tratado isso como fraqueza?"
    },
    "Sofonias 3": {
      texto: "O livro fecha com uma das imagens mais surpreendentes da Bíblia: “o Senhor teu Deus está no meio de ti... ele se deleitará em ti com alegria; calar-se-á por seu amor, regozijar-se-á em ti com júbilo”. Deus cantando de alegria pelo Seu povo.",
      pergunta: "Consigo imaginar Deus se alegrando por mim, e não apenas me tolerando?"
    },
    "Ageu 1": {
      texto: "O povo diz que não é tempo de edificar a casa do Senhor, mas mora em casas revestidas. Deus responde: “semeais muito, e recolheis pouco... e o que recebe salário, recebe-o num saco furado”.",
      pergunta: "O que eu tenho adiado para Deus enquanto avanço rápido no que é meu?"
    },
    "Ageu 2": {
      texto: "Aos que choravam lembrando o templo antigo, Deus promete: “a glória desta última casa será maior do que a da primeira”. E repete duas vezes: “esforça-te... porque eu sou convosco”.",
      pergunta: "Tenho desprezado o começo pequeno de algo que Deus ainda vai completar?"
    },
    "Zacarias 1": {
      texto: "“Tornai-vos para mim, e eu me tornarei para vós.” O profeta lembra que os pais ignoraram o mesmo chamado, e a primeira visão mostra Deus zeloso por Jerusalém, dizendo palavras “boas e consoladoras”.",
      pergunta: "Tenho ouvido o chamado que outros antes de mim já ignoraram?"
    },
    "Zacarias 2": {
      texto: "Um homem mede Jerusalém, e o anjo anuncia que a cidade será habitada sem muros, porque Deus será “um muro de fogo em redor”. Proteção que não depende de estrutura física.",
      pergunta: "Tenho confiado em muros visíveis mais do que na proteção de Deus?"
    },
    "Zacarias 3": {
      texto: "Josué, o sumo sacerdote, está com vestes sujas diante do anjo, e Satanás o acusa. Deus repreende o acusador, tira as roupas imundas e o veste com trajes festivos. Justificação retratada em cena.",
      pergunta: "Tenho aceitado as vestes limpas que Deus oferece, ou continuo me vendo com as sujas?"
    },
    "Zacarias 4": {
      texto: "Diante da obra que parecia pequena demais, vem a palavra: “não por força nem por violência, mas pelo meu Espírito, diz o Senhor”. E o alerta: “quem despreza o dia das coisas pequenas?”.",
      pergunta: "Tenho desprezado o dia das coisas pequenas na minha própria caminhada?"
    },
    "Zacarias 5": {
      texto: "O rolo voador e a mulher dentro do efa simbolizam a maldade sendo removida da terra e levada para longe. Deus não apenas perdoa o pecado — Ele o retira de circulação.",
      pergunta: "Existe algo que eu confessei mas continuo mantendo por perto?"
    },
    "Zacarias 6": {
      texto: "Uma coroa é colocada na cabeça de Josué, e a profecia fala do “Renovo”, que será “sacerdote no seu trono” — alguém que unirá os dois ofícios, algo que nenhum rei ou sacerdote de Israel podia fazer.",
      pergunta: "Reconheço em Cristo o Rei e Sacerdote que o AT anunciava sem conseguir produzir?"
    },
    "Zacarias 7": {
      texto: "Perguntados sobre jejum, Deus devolve a questão: “jejuastes verdadeiramente para mim?”. E lembra o que sempre pediu: “julgai juízo verdadeiro, executai piedade e misericórdia cada um com seu irmão”.",
      pergunta: "Minhas práticas religiosas são para Deus, ou para mim mesmo(a)?"
    },
    "Zacarias 8": {
      texto: "Deus promete que velhos voltarão a sentar nas praças e crianças brincarão nas ruas de Jerusalém. Restauração medida por normalidade cotidiana — a paz aparece na forma mais simples possível.",
      pergunta: "Tenho valorizado a normalidade cotidiana como bênção de Deus?"
    },
    "Zacarias 9": {
      texto: "“Eis que o teu rei virá a ti, justo e salvador, pobre, e montado sobre um jumento.” Quinhentos anos antes da entrada triunfal, o retrato de um Rei que chega em humildade e não em cavalo de guerra.",
      pergunta: "Tenho esperado que Deus aja com pompa, quando Ele costuma vir em humildade?"
    },
    "Zacarias 10": {
      texto: "Deus promete cuidar do rebanho e fortalecer a casa de Judá, e denuncia quem consulta ídolos: “consolam vãmente”. Ele mesmo se coloca como o pastor que faltava.",
      pergunta: "Onde tenho buscado consolo que, no fundo, consola em vão?"
    },
    "Zacarias 11": {
      texto: "O pastor rejeitado recebe trinta moedas de prata como salário, lançadas na casa do Senhor — detalhe que Mateus retomaria ao narrar a traição de Judas e o campo do oleiro.",
      pergunta: "Tenho dado valor àquilo que Deus oferece, ou negociado barato o que é precioso?"
    },
    "Zacarias 12": {
      texto: "Deus derramará “espírito de graça e de súplicas”, e olharão “para mim, a quem traspassaram, e prantearão”. João citaria esse texto ao descrever a cruz — arrependimento nascendo do olhar para quem foi ferido.",
      pergunta: "Meu arrependimento tem nascido do medo, ou de olhar para o que custou minha salvação?"
    },
    "Zacarias 13": {
      texto: "Uma fonte será aberta “para o pecado e para a impureza”, e o rebanho será provado no fogo como prata: “eles invocarão o meu nome, e eu lhes responderei; direi: é meu povo”.",
      pergunta: "Tenho permitido que Deus me refine, mesmo quando o processo é fogo?"
    },
    "Zacarias 14": {
      texto: "O livro termina com o Senhor reinando sobre toda a terra e uma imagem inesperada: até as panelas comuns de Jerusalém serão “santas ao Senhor”. Nada permanecerá dividido entre sagrado e comum.",
      pergunta: "Tenho tratado meu trabalho e minha rotina comuns como coisas que podem ser santas?"
    },
    "Malaquias 1": {
      texto: "Deus abre dizendo “eu vos amei”, e o povo responde: “em que nos amaste?”. Depois, oferecem animais cegos e doentes no altar — algo que nem ao governador ousariam levar. Amor questionado por quem oferece o refugo.",
      pergunta: "O que tenho oferecido a Deus passaria pelo teste de ser oferecido a alguém que eu quero impressionar?"
    },
    "Malaquias 2": {
      texto: "Contra sacerdotes que corromperam a aliança e homens que trataram a esposa com deslealdade: “ela é a tua companheira, e a mulher da tua aliança”. Deus se declara testemunha do casamento e diz odiar o repúdio.",
      pergunta: "Tenho tratado meus compromissos mais próximos com a lealdade que Deus espera?"
    },
    "Malaquias 3": {
      texto: "“Trazei todos os dízimos à casa do tesouro... e provai-me nisto.” E a imagem do refinador de prata, sentado, observando o metal até enxergar o próprio reflexo. Deus purifica com paciência e propósito.",
      pergunta: "Tenho confiado em Deus com o que é material, ou só com o que não me custa?"
    },
    "Malaquias 4": {
      texto: "O Antigo Testamento fecha anunciando o “sol da justiça” que trará cura em suas asas, e a promessa de um mensageiro que voltaria o coração dos pais aos filhos. Depois disso, quatrocentos anos de silêncio — até um anjo aparecer a Zacarias no templo.",
      pergunta: "Tenho esperança de que Deus fala de novo, mesmo depois de longos períodos de silêncio?"
    }
  };

