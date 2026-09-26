/* ================================================================
   BANCO DE DADOS DAS PERGUNTAS (Unificado com mais de 110 questões)
   ================================================================ */
/* ================================================================
   BANCO DE QUESTÕES — QUIZ DE PROGRAMAÇÃO
   100 QUESTÕES
   ================================================================ */

const todasPerguntas = [

    // =============================================================
    // 1. FUNDAMENTOS E LÓGICA
    // =============================================================

    {
        nivel: "Fundamentos",
        pergunta: "Qual será o valor de x após executar: x = 7; x = x + 5?",
        opcoes: [
            "2",
            "12",
            "35",
            "7"
        ],
        correta: 1
    },

    {
        nivel: "Fundamentos",
        pergunta: "O que é uma variável?",
        opcoes: [
            "Um espaço usado para armazenar um valor",
            "Um tipo de computador",
            "Um programa compilado",
            "Um erro de programação"
        ],
        correta: 0
    },

    {
        nivel: "Fundamentos",
        pergunta: "Se x = 10 e y = 3, qual será o resultado de x % y?",
        opcoes: [
            "3",
            "0",
            "1",
            "3.33"
        ],
        correta: 2
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual será o resultado de 4 + 3 * 2?",
        opcoes: [
            "14",
            "10",
            "8",
            "7"
        ],
        correta: 1
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual estrutura é utilizada para tomar uma decisão baseada em uma condição?",
        opcoes: [
            "for",
            "if",
            "array",
            "return"
        ],
        correta: 1
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual destes valores representa normalmente uma condição verdadeira?",
        opcoes: [
            "true",
            "null",
            "false",
            "void"
        ],
        correta: 0
    },

    {
        nivel: "Fundamentos",
        pergunta: "O que acontece normalmente quando uma condição de um if é falsa?",
        opcoes: [
            "O computador desliga",
            "O programa obrigatoriamente dá erro",
            "O bloco associado ao if não é executado",
            "O programa reinicia"
        ],
        correta: 2
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual é a principal finalidade de um loop?",
        opcoes: [
            "Repetir instruções",
            "Criar um sistema operacional",
            "Apagar variáveis",
            "Compilar HTML"
        ],
        correta: 0
    },


    // =============================================================
    // 2. PYTHON
    // =============================================================

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = [1, 2, 3]; x.insert(1, 10); print(x)`",
        opcoes: [
            "[10, 1, 2, 3]",
            "[1, 10, 2, 3]",
            "[1, 2, 10, 3]",
            "Error"
        ],
        correta: 1
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = 10; def teste(): x = 5; teste(); print(x)`",
        opcoes: [
            "5",
            "15",
            "Error",
            "10"
        ],
        correta: 3
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `print(2 ** 3)`",
        opcoes: [
            "6",
            "8",
            "9",
            "5"
        ],
        correta: 1
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = [10, 20, 30]; print(x[1])`",
        opcoes: [
            "10",
            "20",
            "30",
            "Error"
        ],
        correta: 1
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = [1, 2, 3]; print(x[-1])`",
        opcoes: [
            "1",
            "2",
            "3",
            "Error"
        ],
        correta: 2
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = 5; y = 2; print(x // y)`",
        opcoes: [
            "2",
            "2.5",
            "3",
            "1"
        ],
        correta: 0
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = 10; print(x > 5 and x < 20)`",
        opcoes: [
            "False",
            "10",
            "True",
            "Error"
        ],
        correta: 2
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `for i in range(3): print(i)`",
        opcoes: [
            "1 2 3",
            "0 1 2",
            "0 1 2 3",
            "3 2 1"
        ],
        correta: 1
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = [1, 2, 3]; x.append(4); print(len(x))`",
        opcoes: [
            "3",
            "4",
            "5",
            "Error"
        ],
        correta: 1
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `def f(n): if n == 0: return 1; return n * f(n-1); print(f(3))`",
        opcoes: [
            "3",
            "6",
            "9",
            "1"
        ],
        correta: 1
    },

    {
        nivel: "Python",
        pergunta: "O que será impresso? `x = 5; if x > 3: print(\"A\"); else: print(\"B\")`",
        opcoes: [
            "A",
            "B",
            "AB",
            "Error"
        ],
        correta: 0
    },

    {
        nivel: "Python",
        pergunta: "Qual função converte uma string para um número inteiro em Python?",
        opcoes: [
            "str()",
            "float()",
            "int()",
            "number()"
        ],
        correta: 2
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `print(len(\"Python\"))`",
        opcoes: [
            "5",
            "6",
            "7",
            "Python"
        ],
        correta: 1
    },

    {
        nivel: "Python",
        pergunta: "Qual será a saída? `x = [1, 2, 3, 4]; print(x[1:3])`",
        opcoes: [
            "[1, 2]",
            "[2, 3]",
            "[2, 3, 4]",
            "[1, 2, 3]"
        ],
        correta: 1
    },


    // =============================================================
    // 3. C
    // =============================================================

    {
        nivel: "C",
        pergunta: "Qual função é normalmente o ponto de entrada de um programa em C?",
        opcoes: [
            "start()",
            "main()",
            "begin()",
            "run()"
        ],
        correta: 1
    },

    {
        nivel: "C",
        pergunta: "Qual será a saída? `int x = 5; printf(\"%d\", x + 3);`",
        opcoes: [
            "5",
            "3",
            "8",
            "53"
        ],
        correta: 2
    },

    {
        nivel: "C",
        pergunta: "Qual especificador é usado com printf para imprimir um inteiro?",
        opcoes: [
            "%s",
            "%f",
            "%d",
            "%c"
        ],
        correta: 2
    },

    {
        nivel: "C",
        pergunta: "Qual será o resultado de `10 % 4` em C?",
        opcoes: [
            "2",
            "2.5",
            "4",
            "1"
        ],
        correta: 0
    },

    {
        nivel: "C",
        pergunta: "Qual biblioteca é necessária para utilizar printf()?",
        opcoes: [
            "<math.h>",
            "<stdio.h>",
            "<string.h>",
            "<stdlib.cpp>"
        ],
        correta: 1
    },

    {
        nivel: "C",
        pergunta: "Qual será a saída? `int x = 3; x++; printf(\"%d\", x);`",
        opcoes: [
            "2",
            "3",
            "4",
            "6"
        ],
        correta: 2
    },

    {
        nivel: "C",
        pergunta: "Qual operador obtém o endereço de uma variável em C?",
        opcoes: [
            "*",
            "&",
            "#",
            "%"
        ],
        correta: 1
    },

    {
        nivel: "C",
        pergunta: "Qual operador é utilizado para acessar o valor armazenado no endereço apontado por um ponteiro?",
        opcoes: [
            "&",
            "*",
            "->",
            "#"
        ],
        correta: 1
    },

    {
        nivel: "C",
        pergunta: "Qual será a saída? `int x = 10; if(x % 2 == 0) printf(\"Par\"); else printf(\"Impar\");`",
        opcoes: [
            "Impar",
            "Par",
            "10",
            "Error"
        ],
        correta: 1
    },


    // =============================================================
    // 4. C++
    // =============================================================

    {
        nivel: "C++",
        pergunta: "Qual será a saída? `int x = 4; cout << x * 2;`",
        opcoes: [
            "4",
            "6",
            "8",
            "16"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual biblioteca fornece `cout` e `cin`?",
        opcoes: [
            "<vector>",
            "<iostream>",
            "<string>",
            "<algorithm>"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual será a saída? `int x = 5; cout << ++x;`",
        opcoes: [
            "4",
            "5",
            "6",
            "7"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual será a saída? `vector<int> v = {1,2,3}; v.push_back(4); cout << v.size();`",
        opcoes: [
            "3",
            "4",
            "5",
            "Error"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual será a saída? `int x = 10; int y = 3; cout << x / y;`",
        opcoes: [
            "3",
            "3.33",
            "1",
            "4"
        ],
        correta: 0
    },

    {
        nivel: "C++",
        pergunta: "Qual será a saída? `string s = \"Code\"; cout << s[0];`",
        opcoes: [
            "C",
            "o",
            "Code",
            "0"
        ],
        correta: 0
    },

    {
        nivel: "C++",
        pergunta: "Qual container segue o princípio LIFO?",
        opcoes: [
            "queue",
            "vector",
            "stack",
            "map"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual container segue o princípio FIFO?",
        opcoes: [
            "stack",
            "queue",
            "set",
            "map"
        ],
        correta: 1
    },


    // =============================================================
    // 5. HTML
    // =============================================================

    {
        nivel: "HTML",
        pergunta: "Qual linguagem é usada principalmente para estruturar uma página web?",
        opcoes: [
            "CSS",
            "HTML",
            "Python",
            "SQL"
        ],
        correta: 1
    },

    {
        nivel: "HTML",
        pergunta: "Qual tag representa o maior título normalmente utilizado em HTML?",
        opcoes: [
            "<title>",
            "<h6>",
            "<header>",
            "<h1>"
        ],
        correta: 3
    },

    {
        nivel: "HTML",
        pergunta: "Qual tag cria um link para outra página?",
        opcoes: [
            "<link>",
            "<a>",
            "<url>",
            "<href>"
        ],
        correta: 1
    },

    {
        nivel: "HTML",
        pergunta: "Qual atributo define o destino de um link criado com `<a>`?",
        opcoes: [
            "src",
            "href",
            "link",
            "target-url"
        ],
        correta: 1
    },

    {
        nivel: "HTML",
        pergunta: "Qual tag é utilizada para inserir uma imagem?",
        opcoes: [
            "<image>",
            "<picture>",
            "<img>",
            "<src>"
        ],
        correta: 2
    },

    {
        nivel: "HTML",
        pergunta: "Qual tag é utilizada para criar um campo de entrada de texto?",
        opcoes: [
            "<input>",
            "<text>",
            "<field>",
            "<textbox>"
        ],
        correta: 0
    },

    {
        nivel: "HTML",
        pergunta: "Qual será o texto exibido pelo navegador? `<p>Olá mundo!</p>`",
        opcoes: [
            "p",
            "Olá mundo!",
            "<p>Olá mundo!</p>",
            "Nada"
        ],
        correta: 1
    },

    {
        nivel: "HTML",
        pergunta: "Qual atributo fornece um texto alternativo para uma imagem?",
        opcoes: [
            "title",
            "src",
            "alt",
            "text"
        ],
        correta: 2
    },


    // =============================================================
    // 6. CSS
    // =============================================================

    {
        nivel: "CSS",
        pergunta: "Qual é a principal finalidade do CSS?",
        opcoes: [
            "Criar bancos de dados",
            "Estruturar algoritmos",
            "Estilizar elementos de uma página",
            "Compilar JavaScript"
        ],
        correta: 2
    },

    {
        nivel: "CSS",
        pergunta: "Qual propriedade altera a cor do texto?",
        opcoes: [
            "background",
            "font-color",
            "color",
            "text-style"
        ],
        correta: 2
    },

    {
        nivel: "CSS",
        pergunta: "Qual propriedade altera a cor de fundo de um elemento?",
        opcoes: [
            "background-color",
            "color-background",
            "bg",
            "background-style"
        ],
        correta: 0
    },

    {
        nivel: "CSS",
        pergunta: "Qual propriedade aumenta o espaço interno de um elemento?",
        opcoes: [
            "margin",
            "padding",
            "spacing",
            "border-space"
        ],
        correta: 1
    },

    {
        nivel: "CSS",
        pergunta: "Qual propriedade controla o espaço externo de um elemento?",
        opcoes: [
            "padding",
            "border",
            "margin",
            "gap-only"
        ],
        correta: 2
    },

    {
        nivel: "CSS",
        pergunta: "Qual seletor seleciona um elemento com `id=\"menu\"`?",
        opcoes: [
            ".menu",
            "#menu",
            "menu",
            "*menu"
        ],
        correta: 1
    },

    {
        nivel: "CSS",
        pergunta: "Qual seletor seleciona elementos que possuem a classe `card`?",
        opcoes: [
            "#card",
            "card",
            ".card",
            "@card"
        ],
        correta: 2
    },

    {
        nivel: "CSS",
        pergunta: "Qual propriedade transforma um elemento em um container flexível?",
        opcoes: [
            "position: flex",
            "display: flex",
            "flex: display",
            "layout: flex"
        ],
        correta: 1
    },

    {
        nivel: "CSS",
        pergunta: "Qual será a largura final do conteúdo se um elemento tiver `width: 200px` e `padding: 20px` em cada lado, usando box-sizing padrão?",
        opcoes: [
            "200px",
            "220px",
            "240px",
            "160px"
        ],
        correta: 2
    },


    // =============================================================
    // 7. MATEMÁTICA
    // =============================================================

    {
        nivel: "Matemática",
        pergunta: "Quanto é 15 + 27?",
        opcoes: [
            "32",
            "40",
            "42",
            "45"
        ],
        correta: 2
    },

    {
        nivel: "Matemática",
        pergunta: "Quanto é 12 × 8?",
        opcoes: [
            "86",
            "96",
            "108",
            "92"
        ],
        correta: 1
    },

    {
        nivel: "Matemática",
        pergunta: "Quanto é 144 ÷ 12?",
        opcoes: [
            "10",
            "11",
            "12",
            "14"
        ],
        correta: 2
    },

    {
        nivel: "Matemática",
        pergunta: "Qual é o resultado de 2⁵?",
        opcoes: [
            "10",
            "16",
            "25",
            "32"
        ],
        correta: 3
    },

    {
        nivel: "Matemática",
        pergunta: "Se x + 7 = 15, qual é o valor de x?",
        opcoes: [
            "7",
            "8",
            "9",
            "22"
        ],
        correta: 1
    },

    {
        nivel: "Matemática",
        pergunta: "Qual é a média de 10, 20 e 30?",
        opcoes: [
            "15",
            "20",
            "25",
            "30"
        ],
        correta: 1
    },

    {
        nivel: "Matemática",
        pergunta: "Um produto custa 20.000 Kz e recebe um desconto de 10%. Qual será o novo preço?",
        opcoes: [
            "18.000 Kz",
            "19.000 Kz",
            "17.000 Kz",
            "10.000 Kz"
        ],
        correta: 0
    },

    {
        nivel: "Matemática",
        pergunta: "Qual é o próximo número da sequência: 2, 4, 8, 16, ...?",
        opcoes: [
            "20",
            "24",
            "32",
            "30"
        ],
        correta: 2
    },

    {
        nivel: "Matemática",
        pergunta: "Qual é a área de um quadrado com lado igual a 6 cm?",
        opcoes: [
            "12 cm²",
            "24 cm²",
            "36 cm²",
            "42 cm²"
        ],
        correta: 2
    },

    {
        nivel: "Matemática",
        pergunta: "Se um carro percorre 120 km em 2 horas, qual é sua velocidade média?",
        opcoes: [
            "40 km/h",
            "50 km/h",
            "60 km/h",
            "80 km/h"
        ],
        correta: 2
    },


    // =============================================================
    // 8. LÓGICA MATEMÁTICA / PROGRAMAÇÃO
    // =============================================================

    {
        nivel: "Lógica",
        pergunta: "Se x = 8, qual será o resultado de `x % 2 == 0`?",
        opcoes: [
            "False",
            "8",
            "True",
            "0"
        ],
        correta: 2
    },

    {
        nivel: "Lógica",
        pergunta: "Qual número completa a sequência: 3, 6, 9, 12, ?",
        opcoes: [
            "14",
            "15",
            "16",
            "18"
        ],
        correta: 1
    },

    {
        nivel: "Lógica",
        pergunta: "Se A é maior que B e B é maior que C, então:",
        opcoes: [
            "C é maior que A",
            "A é maior que C",
            "A é igual a C",
            "Não podemos comparar A e C"
        ],
        correta: 1
    },

    {
        nivel: "Lógica",
        pergunta: "Qual será o valor de x? `x = 2; x = x * 3; x = x + 4`",
        opcoes: [
            "10",
            "12",
            "8",
            "6"
        ],
        correta: 0
    },

    {
        nivel: "Lógica",
        pergunta: "Um algoritmo começa com x = 10. A cada passo x é dividido por 2. Após dois passos, qual será o valor de x?",
        opcoes: [
            "2.5",
            "5",
            "10",
            "20"
        ],
        correta: 0
    },

    {
        nivel: "Lógica",
        pergunta: "Se um programa executa `x = 5`, depois `x = x + 5`, e finalmente `x = x * 2`, qual será o resultado?",
        opcoes: [
            "15",
            "20",
            "25",
            "10"
        ],
        correta: 1
    },

    {
        nivel: "Lógica",
        pergunta: "Qual condição verifica se x está entre 10 e 20, incluindo os extremos?",
        opcoes: [
            "x > 10 || x < 20",
            "x >= 10 && x <= 20",
            "x > 10 && x > 20",
            "x == 10 || x == 20"
        ],
        correta: 1
    },

    {
        nivel: "Lógica",
        pergunta: "Qual será o resultado de `!(5 > 2)` em uma linguagem que utiliza ! como NOT lógico?",
        opcoes: [
            "True",
            "5",
            "False",
            "2"
        ],
        correta: 2
    },


    // =============================================================
    // 9. ALGORITMOS
    // =============================================================

    {
        nivel: "Algoritmos",
        pergunta: "Um vetor contém [4, 7, 2, 9]. Qual é o maior elemento?",
        opcoes: [
            "2",
            "4",
            "7",
            "9"
        ],
        correta: 3
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual será o resultado de uma busca linear pelo número 7 no vetor [3, 5, 7, 9], considerando índices começando em 0?",
        opcoes: [
            "0",
            "1",
            "2",
            "3"
        ],
        correta: 2
    },

    {
        nivel: "Algoritmos",
        pergunta: "Para realizar busca binária, o vetor normalmente precisa estar:",
        opcoes: [
            "Invertido",
            "Ordenado",
            "Vazio",
            "Duplicado"
        ],
        correta: 1
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual será a saída conceitual de um algoritmo que soma todos os valores de [2, 4, 6]?",
        opcoes: [
            "8",
            "10",
            "12",
            "14"
        ],
        correta: 2
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual técnica é especialmente útil para encontrar uma soma ou propriedade de uma janela contígua de elementos?",
        opcoes: [
            "Sliding Window",
            "Bubble Sort",
            "DFS",
            "Hash Sort"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual estrutura utiliza o princípio LIFO?",
        opcoes: [
            "Fila",
            "Pilha",
            "Heap",
            "Grafo"
        ],
        correta: 1
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual estrutura utiliza o princípio FIFO?",
        opcoes: [
            "Pilha",
            "Árvore",
            "Fila",
            "Hash"
        ],
        correta: 2
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual é a complexidade típica de uma busca linear?",
        opcoes: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        correta: 2
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual é a complexidade típica da busca binária?",
        opcoes: [
            "O(n)",
            "O(log n)",
            "O(n²)",
            "O(2ⁿ)"
        ],
        correta: 1
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual técnica consiste em explorar uma possibilidade e voltar atrás quando ela não funciona?",
        opcoes: [
            "Hashing",
            "Backtracking",
            "Sorting",
            "Casting"
        ],
        correta: 1
    },


    // =============================================================
    // 10. QUESTÕES DE CÓDIGO — MISTURADAS
    // =============================================================

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída? `int x = 2; for(int i = 0; i < 3; i++) x += i;`",
        opcoes: [
            "2",
            "3",
            "5",
            "6"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída em Python? `x = 1; for i in range(1, 4): x *= i; print(x)`",
        opcoes: [
            "3",
            "4",
            "6",
            "10"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída em C? `int x = 2; int y = 3; printf(\"%d\", x + y * 2);`",
        opcoes: [
            "10",
            "8",
            "7",
            "12"
        ],
        correta: 1
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída em C++? `int a = 10; int b = 3; cout << a % b;`",
        opcoes: [
            "3",
            "1",
            "0",
            "3.33"
        ],
        correta: 1
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída em Python? `a = 3; b = 4; print(a < b)`",
        opcoes: [
            "3",
            "4",
            "True",
            "False"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída? `x = [10, 20, 30]; x[0] = 99; print(x[0])`",
        opcoes: [
            "10",
            "20",
            "30",
            "99"
        ],
        correta: 3
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será o resultado? `2 + 3 * 4 - 5`",
        opcoes: [
            "15",
            "9",
            "12",
            "7"
        ],
        correta: 1
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída? `x = 10; if x > 5: x = x + 2; print(x)`",
        opcoes: [
            "5",
            "10",
            "12",
            "15"
        ],
        correta: 2
    },


    // =============================================================
    // 11. QUESTÕES DE "O QUE ACONTECE?"
    // =============================================================

    {
        nivel: "Desafio",
        pergunta: "O que acontece se um programa tentar acessar uma posição inexistente de um array?",
        opcoes: [
            "Sempre retorna zero",
            "Pode ocorrer um erro ou comportamento indefinido, dependendo da linguagem",
            "O array aumenta automaticamente",
            "O computador reinicia"
        ],
        correta: 1
    },

    {
        nivel: "Desafio",
        pergunta: "O que acontece com uma variável criada dentro de uma função em relação ao seu escopo local?",
        opcoes: [
            "Normalmente ela só pode ser acessada diretamente dentro daquele escopo",
            "Ela automaticamente vira global",
            "Ela é salva no banco de dados",
            "Ela substitui todas as outras variáveis"
        ],
        correta: 0
    },

    {
        nivel: "Desafio",
        pergunta: "Se um loop possui a condição `i < 5` e começa com `i = 0`, quantas iterações ocorrerão se i for incrementado em 1?",
        opcoes: [
            "4",
            "5",
            "6",
            "0"
        ],
        correta: 1
    },

    {
        nivel: "Desafio",
        pergunta: "Qual é o problema de um loop cuja condição de parada nunca se torna verdadeira?",
        opcoes: [
            "Ele pode se tornar um loop infinito",
            "Ele sempre executa apenas uma vez",
            "Ele transforma-se em uma função",
            "Ele ordena automaticamente os dados"
        ],
        correta: 0
    },


    // =============================================================
    // 12. WEB + LÓGICA
    // =============================================================

    {
        nivel: "Web",
        pergunta: "HTML, CSS e JavaScript possuem funções diferentes. Qual combinação está correta?",
        opcoes: [
            "HTML estrutura, CSS estiliza e JavaScript adiciona comportamento",
            "HTML estiliza, CSS programa e JavaScript cria bancos",
            "HTML cria APIs, CSS cria bancos e JavaScript apenas desenha",
            "Os três possuem exatamente a mesma função"
        ],
        correta: 0
    },

    {
        nivel: "Web",
        pergunta: "Qual código HTML cria um botão?",
        opcoes: [
            "<button>Clique</button>",
            "<btn>Clique</btn>",
            "<click>Clique</click>",
            "<input-button>Clique</input-button>"
        ],
        correta: 0
    },

    {
        nivel: "Web",
        pergunta: "Qual CSS deixa um texto centralizado horizontalmente?",
        opcoes: [
            "font-align: center;",
            "text-align: center;",
            "align-text: middle;",
            "center: true;"
        ],
        correta: 1
    },

    {
        nivel: "Web",
        pergunta: "Qual propriedade CSS altera o tamanho da fonte?",
        opcoes: [
            "font-size",
            "text-size",
            "size-font",
            "font-height-only"
        ],
        correta: 0
    },

    {
        nivel: "Web",
        pergunta: "Qual tag HTML representa normalmente uma lista não ordenada?",
        opcoes: [
            "<ol>",
            "<list>",
            "<ul>",
            "<li>"
        ],
        correta: 2
    },

    {
        nivel: "Web",
        pergunta: "Dentro de uma lista `<ul>`, qual tag normalmente representa cada item?",
        opcoes: [
            "<item>",
            "<li>",
            "<list-item>",
            "<ul-item>"
        ],
        correta: 1
    },


    // =============================================================
    // 13. MATEMÁTICA + PROGRAMAÇÃO
    // =============================================================

    {
        nivel: "Matemática + Programação",
        pergunta: "Um programa recebe n = 7. Qual condição verifica corretamente se n é ímpar?",
        opcoes: [
            "n % 2 == 0",
            "n / 2 == 0",
            "n % 2 != 0",
            "n * 2 != 0"
        ],
        correta: 2
    },

    {
        nivel: "Matemática + Programação",
        pergunta: "Qual será o valor final de soma? `soma = 0; soma += 5; soma += 10; soma += 15`",
        opcoes: [
            "20",
            "25",
            "30",
            "35"
        ],
        correta: 2
    },

    {
        nivel: "Matemática + Programação",
        pergunta: "Qual é o fatorial de 4?",
        opcoes: [
            "8",
            "12",
            "16",
            "24"
        ],
        correta: 3
    },

    {
        nivel: "Matemática + Programação",
        pergunta: "Qual é o valor de 10²?",
        opcoes: [
            "20",
            "50",
            "100",
            "1000"
        ],
        correta: 2
    },

    {
        nivel: "Matemática + Programação",
        pergunta: "Se uma variável começa com 100 e é reduzida em 25%, qual será seu novo valor?",
        opcoes: [
            "25",
            "50",
            "75",
            "80"
        ],
        correta: 2
    },

    {
        nivel: "Matemática + Programação",
        pergunta: "Qual número é primo?",
        opcoes: [
            "21",
            "27",
            "29",
            "35"
        ],
        correta: 2
    },


    // =============================================================
    // 14. DESAFIOS MAIS DIFÍCEIS
    // =============================================================

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída em Python? `x = [1, 2, 3]; y = x; y.append(4); print(x)`",
        opcoes: [
            "[1, 2, 3]",
            "[4, 1, 2, 3]",
            "[1, 2, 3, 4]",
            "Error"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída? `x = 0; for i in range(1, 5): x += i; print(x)`",
        opcoes: [
            "5",
            "10",
            "15",
            "4"
        ],
        correta: 1
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será a saída? `int x = 1; for(int i=0; i<4; i++) x *= 2;`",
        opcoes: [
            "4",
            "8",
            "16",
            "32"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Qual será o resultado de uma função que retorna `n * (n - 1)` quando recebe n = 5?",
        opcoes: [
            "10",
            "15",
            "20",
            "25"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Um algoritmo percorre um vetor de 100 elementos uma única vez. Qual é sua complexidade típica?",
        opcoes: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Dois loops aninhados percorrem cada um n elementos. Qual é a complexidade típica?",
        opcoes: [
            "O(n)",
            "O(log n)",
            "O(n²)",
            "O(1)"
        ],
        correta: 2
    },

    {
        nivel: "Desafio",
        pergunta: "Qual estrutura seria mais adequada para verificar rapidamente se um elemento já apareceu, em média?",
        opcoes: [
            "Hash Set",
            "Stack",
            "Queue",
            "Array não ordenado"
        ],
        correta: 0
    },

    {
        nivel: "Desafio",
        pergunta: "Qual algoritmo é adequado para encontrar o menor caminho a partir de uma origem em um grafo com pesos não negativos?",
        opcoes: [
            "Bubble Sort",
            "Dijkstra",
            "Binary Search",
            "Counting Sort"
        ],
        correta: 1
    },


    // =============================================================
    // 15. QUESTÕES CONCEITUAIS FINAIS
    // =============================================================

    {
        nivel: "Programação",
        pergunta: "Qual é a principal diferença entre HTML e CSS?",
        opcoes: [
            "HTML estrutura o conteúdo e CSS define sua apresentação",
            "HTML é usado para bancos e CSS para APIs",
            "CSS estrutura algoritmos e HTML faz cálculos",
            "Não existe diferença"
        ],
        correta: 0
    },

    {
        nivel: "Programação",
        pergunta: "Qual destas opções é uma linguagem de programação?",
        opcoes: [
            "HTML",
            "CSS",
            "Python",
            "HTTP"
        ],
        correta: 2
    },

    {
        nivel: "Programação",
        pergunta: "Qual destas opções é uma linguagem de marcação?",
        opcoes: [
            "C",
            "Python",
            "HTML",
            "C++"
        ],
        correta: 2
    },

    {
        nivel: "Programação",
        pergunta: "Qual destas opções é usada principalmente para estilização de páginas web?",
        opcoes: [
            "C",
            "CSS",
            "Python",
            "SQL"
        ],
        correta: 1
    },

    {
        nivel: "Programação",
        pergunta: "Qual destas situações representa melhor um algoritmo?",
        opcoes: [
            "Uma sequência organizada de passos para resolver um problema",
            "Um cabo de rede",
            "Uma placa gráfica",
            "Uma pasta do computador"
        ],
        correta: 0
    },

    {
        nivel: "Programação",
        pergunta: "Qual é uma boa característica de uma solução de programação?",
        opcoes: [
            "Ser necessariamente a maior possível",
            "Resolver corretamente o problema e usar os recursos de forma adequada",
            "Ter sempre mais de 100 linhas",
            "Usar obrigatoriamente recursão"
        ],
        correta: 1
    }

];

/* ================================================================
   LÓGICA DO QUIZ (Sortear 40 de forma aleatória)
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
    if (!nomeInput) { alert("Por favor, digite o seu nome para avançar!"); return; }
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
    document.getElementById('classificacao-final').innerText = (percentual >= 40) ? "Bom!" : (percentual >= 50) ? "Razoável" : "Insuficiente";

    let statusExame = document.getElementById('status-exame');
   if (percentual >= 50) {
    statusExame.className = "status-box aprovado";
    statusExame.innerText =
        "Quiz concluído. Continue praticando para aperfeiçoar suas habilidades de programação.";
} else {
    statusExame.className = "status-box reprovado";
    statusExame.innerText =
        "Quiz concluído. Continue estudando e praticando programação.";
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
   SISTEMA DO ADMIN (Link Secreto /admin + Senha)
   ================================================================ */
const SENHA_ADMIN = "admin123"; 
let sequenciaTeclas = "";

// 1. DETECTA SE O USUÁRIO ACESSOU O LINK SECRETO (/admin)
window.onload = function() {
    const url = window.location.pathname;
    // Se o final da url for "/admin", abre o painel automaticamente
    if (url === "/admin") {
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

// 3. FUNÇÃO DE LOGIN
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
            document.getElementById('total-alunos-count').innerText = "0";
            document.getElementById('media-geral-count').innerText = "0%";
            return;
        }

        // Cálculo do Total e Média
        document.getElementById('total-alunos-count').innerText = historico.length;
        let soma = 0;
        historico.forEach(aluno => { soma += parseFloat(aluno.percentual); });
        let media = (soma / historico.length).toFixed(1);
        document.getElementById('media-geral-count').innerText = media + "%";

        // Montagem da Tabela
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