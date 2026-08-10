/* ================================================================
   BANCO DE DADOS DAS PERGUNTAS (Unificado com mais de 55 questões)
   ================================================================ */
const todasPerguntas = [
    // --- LÍNGUA PORTUGUESA (14 questões) ---
    { nivel: "Língua Portuguesa", pergunta: "Qual das palavras abaixo possui ditongo nasal?", opcoes: ["Mão", "Pai", "Herói", "Céu"], correta: 0 },
    { nivel: "Língua Portuguesa", pergunta: "Assinale a opção correta quanto ao uso de diacríticos (acentos):", opcoes: ["Avó (mãe do pai) e Avô (pai da mãe)", "Pára (verbo) e Para (preposição)", "Tem (singular) e Têm (plural)", "Pôde (pretérito) e Pode (presente)"], correta: 3 },
    { nivel: "Língua Portuguesa", pergunta: "Assinale a opção em que a palavra destacada é um verbo irregular:", opcoes: ["Eles **cantaram** na festa", "Eu **trouxe** o livro para aula", "Nós **falaremos** com o professor", "Tu **estudaste** para o teste"], correta: 1 },
    { nivel: "Língua Portuguesa", pergunta: "Qual das palavras abaixo é um substantivo?", opcoes: ["Floresta", "Correr", "Bonito", "Rapidamente"], correta: 0 },
    { nivel: "Língua Portuguesa", pergunta: "Assinale a alternativa com a classe gramatical correta:", opcoes: ["Casa (advérbio)", "Andar (substantivo)", "Verde (adjetivo)", "Quando (substantivo)"], correta: 2 },
    { nivel: "Língua Portuguesa", pergunta: "Na frase 'Os mais velhos falam palavras sábias', qual a função sintática do termo destacado?", opcoes: ["Predicativo do sujeito", "Complemento direto", "Complemento indireto", "Complemento circunstancial de modo"], correta: 1 },
    { nivel: "Língua Portuguesa", pergunta: "Complete com 'vêm, vem, vêem ou vejam': Ele ___ de uma família humilde.", opcoes: ["vêm", "vem", "vêem", "vejam"], correta: 1 },
    { nivel: "Língua Portuguesa", pergunta: "Complete: 'Quero que todos ___ a prova.'", opcoes: ["vêm", "vem", "vêem", "vejam"], correta: 3 },
    { nivel: "Língua Portuguesa", pergunta: "Na frase 'As cartas foram enviadas pelo diretor', o sujeito da frase é:", opcoes: ["As cartas", "pelo diretor", "enviadas", "Oculto"], correta: 0 },
    { nivel: "Língua Portuguesa", pergunta: "Distinga a classe morfológica de: 'Floresta', 'Maiombe'", opcoes: ["Pronomes", "Adjectivos", "Substantivos", "Interjeições"], correta: 2 },
    { nivel: "Língua Portuguesa", pergunta: "Na frase 'Os alunos estudaram bastante', o termo 'bastante' é:", opcoes: ["Adjetivo", "Advérbio de intensidade", "Substantivo", "Pronome"], correta: 1 },
    { nivel: "Língua Portuguesa", pergunta: "Em 'O livro cujo autor é famoso', o pronome relativo expressa:", opcoes: ["Posse", "Lugar", "Tempo", "Modo"], correta: 0 },
    { nivel: "Língua Portuguesa", pergunta: "A palavra 'guarda-chuva' é formada pelo processo de:", opcoes: ["Derivação sufixal", "Derivação prefixal", "Composição por aglutinação", "Composição por justaposição"], correta: 3 },
    { nivel: "Língua Portuguesa", pergunta: "No modo conjuntivo (subjuntivo), a forma correta do verbo 'ser' na 1ª pessoa do singular é:", opcoes: ["Sou", "Era", "Seja", "Fui"], correta: 2 },

    // --- MATEMÁTICA (21 questões) ---
    { nivel: "Matemática", pergunta: "Calcule 6a³b² - 5a²b³ + 9a⁴b para a=2/3 e b=-3/2.", opcoes: ["2", "-4", "6", "-2"], correta: 2 },
    { nivel: "Matemática", pergunta: "Resolva o sistema: 2x - y = 1 e y - 3x = -1", opcoes: ["x=1, y=4", "x=4, y=1", "x=3, y=2", "x=2, y=3"], correta: 3 },
    { nivel: "Matemática", pergunta: "Qual é a representação do número 0,2 em forma de fração?", opcoes: ["1/2", "1/4", "1/5", "2/5"], correta: 2 },
    { nivel: "Matemática", pergunta: "A solução da equação 3x - 5y + 11 = 0 e 8x - y - 8 = 0 é:", opcoes: ["(-1; 2)", "(1; 2)", "(-2; -1)", "(1; 3)"], correta: 0 },
    { nivel: "Matemática", pergunta: "Calcule a média aritmética de 4, 9 e 3,5:", opcoes: ["39/4", "29/13", "7/3", "13/4"], correta: 1 },
    { nivel: "Matemática", pergunta: "Qual é o resultado de (2a + x² - a²) : (x + a) - (x² - 2a²)/(x-a)?", opcoes: ["4", "2a", "2x", "0"], correta: 1 },
    { nivel: "Matemática", pergunta: "Dados A = 6x³+3x²+2y²+5, B=-5x²+2y²+1. Qual a soma A+B-C, sendo C=x³-2x²+y²?", opcoes: ["5x³ - 3y² + 6", "5x³ - 3x² + 3y² + 6", "5x³ - 3x² + y² + 6", "6x³ - 3x² + 2y² + 6"], correta: 2 },
    { nivel: "Matemática", pergunta: "Se A = [1; 3] e B = [2; 9], qual o conjunto de A ∩ B?", opcoes: ["[1; 9]", "]2; 3[", "]1; 2[", "[2; 3]"], correta: 3 },
    { nivel: "Matemática", pergunta: "Calcule o resultado de: (1 + 1/2)^-10 : [(2 - 1/3)^-5]^-5.", opcoes: ["(2/3)^10 ; 2", "(1/2)^10 ; 4", "(2/3)^-10 ; -4", "(4/9)^10 ; 2"], correta: 0 },
    { nivel: "Matemática", pergunta: "Resolva a equação: x²/2 = (3x-1)/5 + 1/9 + 4/9 + (x-3)(x+3)/4.", opcoes: ["Duas raízes negativas.", "Duas raízes positivas.", "Uma única raiz nula.", "Raízes simétricas."], correta: 1 },
    { nivel: "Matemática", pergunta: "Um agricultor gasta 81.000 kz/dia. Homem recebe 3.000 e mulher 2.500. Quantos homens e mulheres trabalham?", opcoes: ["(14; 12)", "(12; 19)", "(12; 18)", "(12; 17)"], correta: 2 },
    { nivel: "Matemática", pergunta: "Um menino de 1,30 m vê o topo de uma montanha de 500 m distante. Qual a altura da montanha? (tg 20º = 0,36)", opcoes: ["188,3 m", "184,3 m", "198,3 m", "181,3 m"], correta: 3 },
    { nivel: "Matemática", pergunta: "Qual o resultado de 165,45 ÷ 5,5?", opcoes: ["30,080", "30,081", "30,081", "30,090"], correta: 1 },
    { nivel: "Matemática", pergunta: "Simplifique o monômio: 3x²y * 2xy².", opcoes: ["5x²y²", "6x³y³", "5x³y²", "6x²y³"], correta: 1 },
    { nivel: "Matemática", pergunta: "Calcule o valor da potência: (-3)² + (-2)³.", opcoes: ["17", "1", "-1", "-17"], correta: 1 },
    { nivel: "Matemática", pergunta: "Se você dividir o polinômio (x² - 9) por (x - 3), qual será o quociente?", opcoes: ["x + 3", "x - 3", "x² + 3", "x + 9"], correta: 0 },
    { nivel: "Matemática", pergunta: "A solução da equação 2x - 4 = 3x + 2 é:", opcoes: ["x = -2", "x = -6", "x = 2", "x = 6"], correta: 1 },
    { nivel: "Matemática", pergunta: "Qual a área de um círculo cujo raio mede 2 cm?", opcoes: ["4π", "2π", "π", "8π"], correta: 0 },
    { nivel: "Matemática", pergunta: "Na equação do 2º grau x² - 4x + 4 = 0, o discriminante (Δ) é igual a:", opcoes: ["4", "8", "0", "-4"], correta: 2 },
    { nivel: "Matemática", pergunta: "Qual o valor de x que satisfaz x² - 5x + 6 = 0?", opcoes: ["x=2 ou x=3", "x=-2 ou x=-3", "x=1 ou x=6", "x=4 ou x=2"], correta: 0 },
    { nivel: "Matemática", pergunta: "Resolva o sistema linear: 2x + y = 5 e 3x - y = 10", opcoes: ["x=2, y=1", "x=3, y=-1", "x=4, y=-3", "x=5, y=-5"], correta: 1 },

    // --- FÍSICA (21 questões) ---
    { nivel: "Física", pergunta: "Dois comboios A (25 km/h) e B (35 km/h, sai 2h depois). Após 6h de A, qual distância separa os comboios?", opcoes: ["150 Km e 140 km; 7 h", "150 Km e 160 km; 7 h", "120 Km e 150 km; 7 h", "140 Km e 170 km; 7 h"], correta: 0 },
    { nivel: "Física", pergunta: "Sob ação de uma força, carrinho percorre 40 cm. Com carga de 200g, percorre 25 cm. Qual a massa do carrinho?", opcoes: ["111 g", "444 g", "333 g", "222 g"], correta: 2 },
    { nivel: "Física", pergunta: "A resistência elétrica de um fio de constantina de 200 m, ρ=0,50 Ω.mm²/m, seção 0,25 mm² é:", opcoes: ["300 Ω", "350 Ω", "450 Ω", "400 Ω"], correta: 3 },
    { nivel: "Física", pergunta: "Dois resistores de 4 Ω em paralelo + 0,25 Ω em série. Tensão total 180V. Calcule a corrente total.", opcoes: ["2,25 Ω; 80 A", "2,25 Ω; 90 A", "4,25 Ω; 80 A", "4,25 Ω; 80 A"], correta: 0 },
    { nivel: "Física", pergunta: "Dois comboios A (30km/h) e B (40km/h sai 2h depois). Após 5h de A, qual a distância que os separa?", opcoes: ["120 Km e 150 km; 8 h", "140 Km e 150 km; 8 h", "120 Km e 150 km; 8h; 240 Km", "130 Km e 170 km; 10h"], correta: 0 },
    { nivel: "Física", pergunta: "Carrinho percorre 20 cm. Com carga de 180g, percorre 10 cm. Qual a massa?", opcoes: ["180 g", "190 g", "170 g", "200 g"], correta: 0 },
    { nivel: "Física", pergunta: "Qual a velocidade de uma pessoa de 100kg com energia mecânica de 20.000 J?", opcoes: ["20 m/s", "20 m/s", "15 m/s", "25 m/s"], correta: 0 },
    { nivel: "Física", pergunta: "Uma carga de 2 toneladas é levantada por um guindaste a 4 m de altura. Qual o trabalho realizado? (g=10 m/s²)", opcoes: ["4234 J", "4634 J", "4090 J", "80000 J"], correta: 3 },
    { nivel: "Física", pergunta: "Resistores R1=R2=5Ω (paralelo) + R3=0,25Ω (série). A resistência equivalente é:", opcoes: ["3,75 Ω", "1,75 Ω", "2,75 Ω", "5,75 Ω"], correta: 2 },
    { nivel: "Física", pergunta: "Fio de alumínio de 200m, ρ=0,028, seção 2mm². A tensão nos extremos com corrente de 5A é:", opcoes: ["14 V", "16 V", "20 V", "18 V"], correta: 0 },
    { nivel: "Física", pergunta: "4 Resistores (R1=4Ω, R2=6Ω, R3=12Ω em paralelo + 2Ω em série) com bateria de 12V. Qual a corrente total?", opcoes: ["2 A", "3 A", "4 A", "5 A"], correta: 1 },
    { nivel: "Física", pergunta: "Ciclista C (8 m/s constante) e D (0 m/s com aceleração 4 m/s²). As funções horárias são:", opcoes: ["Sc=4t; Sd=2t²; t=4s", "Sc=8t; Sd=2t²; t=4s", "Sc=8t; Sd=4t²; t=4s", "Sc=8t; Sd=2t²; t=2s"], correta: 1 },
    { nivel: "Física", pergunta: "Martelo hidráulico de 20t levanta 120cm. Qual o trabalho realizado?", opcoes: ["240.000 J", "24.000.000 J", "240.000.000 J", "240 J"], correta: 1 },
    { nivel: "Física", pergunta: "Qual a aceleração da gravidade usada nos exercícios?", opcoes: ["9,8 m/s²", "10 m/s²", "9 m/s²", "11 m/s²"], correta: 1 },
    { nivel: "Física", pergunta: "Qual destas é uma grandeza física fundamental?", opcoes: ["Força", "Velocidade", "Massa", "Trabalho"], correta: 2 },
    { nivel: "Física", pergunta: "No fenômeno eletrostático, ao atritarmos um bastão de vidro com lã, o vidro fica com carga:", opcoes: ["Nula", "Negativa", "Positiva", "Alternada"], correta: 2 },
    { nivel: "Física", pergunta: "Uma máquina simples (alavanca) levanta 100N com força de 20N. Qual a vantagem mecânica?", opcoes: ["2", "4", "5", "8"], correta: 2 },
    { nivel: "Física", pergunta: "Num movimento uniforme, a função horária da posição é:", opcoes: ["S = S₀ + at²/2", "S = S₀ + vt", "v = v₀ + at", "S = S₀ + v₀t + at²/2"], correta: 1 },
    { nivel: "Física", pergunta: "Se a distância entre duas cargas elétricas for reduzida à metade, a força eletrostática irá:", opcoes: ["Reduzir à metade", "Dobrar", "Quadruplicar", "Permanecer igual"], correta: 2 },
    { nivel: "Física", pergunta: "Um corpo de 10kg cai de 20m de altura. Desprezando resistência, a velocidade ao solo é:", opcoes: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"], correta: 1 },
    { nivel: "Física", pergunta: "Qual a potência média de uma pessoa que realiza 600 J de trabalho em 20 segundos?", opcoes: ["30 W", "120 W", "600 W", "12000 W"], correta: 0 }
];


/* ================================================================
   LÓGICA DO QUIZ
   ================================================================ */
let perguntasSelecionadas = [];
let perguntaAtualIndex = 0;
let acertos = 0;
let nomeAluno = "";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function iniciarQuiz() {
    const nomeInput = document.getElementById('nome-aluno').value.trim();
    if (!nomeInput) { alert("Por favor, digite o seu nome!"); return; }
    nomeAluno = nomeInput;
    
    let todasEmbaralhadas = shuffleArray([...todasPerguntas]);
    perguntasSelecionadas = todasEmbaralhadas.slice(0, 40);

    document.getElementById('tela-inicio').classList.remove('active');
    document.getElementById('tela-quiz').classList.add('active');
    document.getElementById('nome-exibido').innerText = `Aluno: ${nomeAluno}`;
    document.getElementById('total-final').innerText = perguntasSelecionadas.length;
    mostrarPergunta();
}

function mostrarPergunta() {
    if (perguntaAtualIndex >= perguntasSelecionadas.length) { finalizarQuiz(); return; }
    let pergunta = perguntasSelecionadas[perguntaAtualIndex];
    
    document.getElementById('progresso').innerText = `Pergunta ${perguntaAtualIndex + 1} / ${perguntasSelecionadas.length}`;
    document.getElementById('nivel-atual').innerText = `Nível: ${pergunta.nivel}`;
    document.getElementById('pergunta-texto').innerText = pergunta.pergunta;

    let containerOpcoes = document.getElementById('opcoes-container');
    containerOpcoes.innerHTML = '';
    document.getElementById('btn-proximo').style.display = 'none';

    pergunta.opcoes.forEach((opcao, index) => {
        let btn = document.createElement('button');
        btn.className = 'opcao-btn';
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(index, btn, pergunta.correta);
        containerOpcoes.appendChild(btn);
    });
}

function verificarResposta(selecionado, btnElement, corretaIndex) {
    let botoes = document.querySelectorAll('.opcao-btn');
    botoes.forEach(b => b.disabled = true);
    if (selecionado === corretaIndex) {
        btnElement.classList.add('correct'); acertos++;
    } else {
        btnElement.classList.add('wrong'); botoes[corretaIndex].classList.add('correct');
    }
    document.getElementById('btn-proximo').style.display = 'block';
}

function proximaPergunta() { perguntaAtualIndex++; mostrarPergunta(); }

function finalizarQuiz() {
    document.getElementById('tela-quiz').classList.remove('active');
    document.getElementById('tela-resultado').classList.add('active');

    let total = perguntasSelecionadas.length;
    let percentual = (acertos / total) * 100;
    
    document.getElementById('resultado-nome').innerText = `Aluno: ${nomeAluno}`;
    document.getElementById('acertos-final').innerText = acertos;
    document.getElementById('percentual-final').innerText = percentual.toFixed(1) + "%";
    document.getElementById('classificacao-final').innerText = (percentual >= 70) ? "Bom!" : (percentual >= 50) ? "Razoável" : "Insuficiente";

    let statusExame = document.getElementById('status-exame');
    if (percentual >= 50) {
        statusExame.className = "status-box aprovado";
        statusExame.innerText = "PARABÉNS! Você está apto(a) a realizar o Exame de Admissão.";
    } else {
        statusExame.className = "status-box reprovado";
        statusExame.innerText = "ATENÇÃO! Seu aproveitamento foi baixo. Recomendamos estudar mais.";
    }

    // SALVAR NO BANCO POSTGRESQL (NEON) ATRAVÉS DA API DA VERCEL
    salvarNoBancoNeon(nomeAluno, acertos, total, percentual.toFixed(1));
}


/* ================================================================
   CONEXÃO COM O BANCO DE DADOS POSTGRESQL (NEON) PELA VERCEL
   ================================================================ */

async function salvarNoBancoNeon(nome, acertos, total, percentual) {
    try {
        // Envia os dados para o servidor da Vercel (pasta /api)
        const resposta = await fetch('/api/salvar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, acertos, total, percentual })
        });

        if (!resposta.ok) {
            console.error("Erro ao enviar para o servidor.");
        }
    } catch (erro) {
        console.error("Erro de rede ao salvar no Neon:", erro);
    }
}


/* ================================================================
   SISTEMA DO ADMIN (Com senha e buscando os dados online)
   ================================================================ */
const SENHA_ADMIN = "admin123"; 
let sequenciaTeclas = "";

// 1. DETECTA SE O USUÁRIO ACESSOU O LINK SECRETO (/admin)
window.onload = function() {
    const url = window.location.pathname;
    // Se o final da url for "/admin", abre o painel automaticamente
    if (url === "/admin") {
        // Espera um pouquinho para a página carregar direito e chama o login
        setTimeout(abrirLoginAdmin, 300);
    }
};

// 2. MANTÉM O CÓDIGO DA TECLA 'A' (para acesso pelo computador)
document.addEventListener('keydown', function(e) {
    if (e.key === 'a' || e.key === 'A') {
        sequenciaTeclas += 'a';
        if (sequenciaTeclas === 'aaaaa') { 
            sequenciaTeclas = "";
            abrirLoginAdmin(); 
        }
        setTimeout(() => { sequenciaTeclas = ""; }, 2000);
    }
});

// 3. FUNÇÃO DE LOGIN (Agora com um visual melhor para celular)
function abrirLoginAdmin() {
    let senha = prompt("🔐 Acesso restrito. Digite a senha do Administrador:");
    if (senha === SENHA_ADMIN) {
        document.getElementById('tela-inicio').classList.remove('active');
        document.getElementById('tela-admin').classList.add('active');
        carregarDashboardNeon(); 
    } else if (senha !== null) {
        alert("Senha incorreta! Acesso negado.");
    }
}

async function carregarDashboardNeon() {
    let container = document.getElementById('lista-alunos');
    container.innerHTML = `<p style="text-align: center;">Carregando alunos do servidor Neon...</p>`;

    try {
        // Puxa os dados da API da Vercel (pasta /api)
        const resposta = await fetch('/api/listar');
        const historico = await resposta.json();

        if (historico.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: #888;">Nenhum aluno realizou o teste ainda.</p>`;
            // Se não houver alunos, zera os indicadores
            document.getElementById('total-alunos-count').innerText = "0";
            document.getElementById('media-geral-count').innerText = "0%";
            return;
        }

        // =========================================================
        // CÁLCULOS DOS CARDS (Total de Alunos e Média Geral)
        // =========================================================
        
        // 1. Total de alunos (quantidade de registros na tabela)
        document.getElementById('total-alunos-count').innerText = historico.length;

        // 2. Média Geral (Calcula a soma de todas as percentagens e divide pelo total)
        let somaPercentagens = 0;
        historico.forEach(aluno => {
            // Converte a string "86.4%" para número 86.4 para poder somar
            let perc = parseFloat(aluno.percentual); 
            somaPercentagens += perc;
        });
        
        let mediaGeral = (somaPercentagens / historico.length).toFixed(1);
        document.getElementById('media-geral-count').innerText = mediaGeral + "%";

        // =========================================================
        // MONTAGEM DA TABELA
        // =========================================================
        let html = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Aluno</th>
                        <th>Acertos / Total</th>
                        <th>Percentagem</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
        `;
        historico.forEach(aluno => {
            // Converte a data do banco para um formato legível
            let dataFormatada = new Date(aluno.data_realizacao).toLocaleDateString('pt-BR');
            
            html += `
                <tr>
                    <td>${aluno.id}</td>
                    <td>${aluno.nome}</td>
                    <td>${aluno.acertos} / ${aluno.total_perguntas}</td>
                    <td>${aluno.percentual}%</td>
                    <td>${dataFormatada}</td>
                </tr>
            `;
        });
        html += `</tbody></table>`;
        container.innerHTML = html;

    } catch (erro) {
        container.innerHTML = `<p style="text-align: center; color: red;">Erro ao conectar com o servidor Neon.</p>`;
        console.error(erro);
        document.getElementById('total-alunos-count').innerText = "0";
        document.getElementById('media-geral-count').innerText = "0%";
    }
}