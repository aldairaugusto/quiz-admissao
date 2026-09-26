/* ================================================================
   BANCO DE DADOS DAS PERGUNTAS (Unificado com mais de 110 questões)
   ================================================================ */
/* ================================================================
   BANCO DE QUESTÕES — QUIZ DE PROGRAMAÇÃO
   100 QUESTÕES
   ================================================================ */

const todasPerguntas = [

    // =============================================================
    // 1. FUNDAMENTOS DE PROGRAMAÇÃO
    // =============================================================

    {
        nivel: "Fundamentos",
        pergunta: "O que é um algoritmo?",
        opcoes: [
            "Um tipo de computador",
            "Uma sequência de passos para resolver um problema",
            "Um sistema operacional",
            "Uma linguagem de programação"
        ],
        correta: 1
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual destas opções representa uma variável?",
        opcoes: [
            "Uma caixa que armazena um valor que pode mudar",
            "Um computador inteiro",
            "Um programa compilado",
            "Um arquivo de texto"
        ],
        correta: 0
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual é a principal finalidade de uma estrutura condicional?",
        opcoes: [
            "Repetir código infinitamente",
            "Armazenar vários valores",
            "Executar diferentes instruções dependendo de uma condição",
            "Criar um arquivo"
        ],
        correta: 2
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual estrutura normalmente é utilizada para repetir um bloco de código enquanto uma condição for verdadeira?",
        opcoes: [
            "if",
            "while",
            "switch",
            "return"
        ],
        correta: 1
    },

    {
        nivel: "Fundamentos",
        pergunta: "O que significa depurar um programa?",
        opcoes: [
            "Compilar o programa",
            "Criar uma nova linguagem",
            "Encontrar e corrigir erros no programa",
            "Apagar o programa"
        ],
        correta: 2
    },

    {
        nivel: "Fundamentos",
        pergunta: "O que é um erro de sintaxe?",
        opcoes: [
            "Um erro causado por falta de memória",
            "Um erro na escrita que viola as regras da linguagem",
            "Um resultado matemático errado",
            "Um erro de hardware"
        ],
        correta: 1
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual é a função de uma variável booleana?",
        opcoes: [
            "Armazenar apenas números reais",
            "Armazenar textos longos",
            "Armazenar valores verdadeiro ou falso",
            "Armazenar arquivos"
        ],
        correta: 2
    },

    {
        nivel: "Fundamentos",
        pergunta: "O que significa IDE?",
        opcoes: [
            "Integrated Development Environment",
            "Internet Data Engine",
            "Internal Developer Extension",
            "Integrated Database Editor"
        ],
        correta: 0
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual destas é uma linguagem de programação?",
        opcoes: [
            "HTML",
            "CSS",
            "C++",
            "HTTP"
        ],
        correta: 2
    },

    {
        nivel: "Fundamentos",
        pergunta: "Qual é a finalidade de uma função?",
        opcoes: [
            "Organizar e reutilizar um conjunto de instruções",
            "Aumentar fisicamente a memória RAM",
            "Substituir o sistema operacional",
            "Criar necessariamente uma classe"
        ],
        correta: 0
    },


    // =============================================================
    // 2. C++
    // =============================================================

    {
        nivel: "C++",
        pergunta: "Qual função é o ponto de entrada de um programa C++ tradicional?",
        opcoes: [
            "start()",
            "main()",
            "run()",
            "program()"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual símbolo é utilizado para terminar normalmente uma instrução em C++?",
        opcoes: [
            ":",
            ".",
            ";",
            ","
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual biblioteca é normalmente utilizada para entrada e saída com cin e cout?",
        opcoes: [
            "<string>",
            "<iostream>",
            "<vector>",
            "<algorithm>"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual comando imprime dados no console em C++?",
        opcoes: [
            "print",
            "console.log",
            "cout",
            "echo"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual comando é utilizado para receber dados do utilizador em C++?",
        opcoes: [
            "cin",
            "input",
            "read",
            "scanf_only"
        ],
        correta: 0
    },

    {
        nivel: "C++",
        pergunta: "Qual tipo normalmente representa números inteiros em C++?",
        opcoes: [
            "string",
            "int",
            "bool",
            "char"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual tipo é utilizado para armazenar números com casas decimais?",
        opcoes: [
            "int",
            "bool",
            "double",
            "char"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual tipo armazena um único caractere?",
        opcoes: [
            "char",
            "string",
            "int",
            "double"
        ],
        correta: 0
    },

    {
        nivel: "C++",
        pergunta: "Qual biblioteca fornece std::vector?",
        opcoes: [
            "<queue>",
            "<vector>",
            "<array>",
            "<list>"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual é a forma correta de declarar um vetor de 5 inteiros?",
        opcoes: [
            "int vetor(5);",
            "int vetor[5];",
            "vector int[5];",
            "array int vetor;"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual operador é utilizado para comparação de igualdade em C++?",
        opcoes: [
            "=",
            "==",
            "===",
            "!="
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual operador representa 'diferente de'?",
        opcoes: [
            "<>",
            "!=",
            "!==",
            "not="
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual operador representa AND lógico em C++?",
        opcoes: [
            "||",
            "&&",
            "!",
            "&"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual operador representa OR lógico?",
        opcoes: [
            "&&",
            "||",
            "!",
            "^"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "O que o operador ++ faz?",
        opcoes: [
            "Diminui uma variável",
            "Multiplica por dois",
            "Incrementa uma unidade",
            "Zera a variável"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual palavra-chave é utilizada para retornar um valor de uma função?",
        opcoes: [
            "send",
            "return",
            "output",
            "break"
        ],
        correta: 1
    },

    {
        nivel: "C++",
        pergunta: "Qual palavra-chave é usada para declarar uma constante?",
        opcoes: [
            "fixed",
            "constant",
            "const",
            "static_value"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual estrutura é usada para escolher entre vários casos?",
        opcoes: [
            "switch",
            "repeat",
            "select_case_only",
            "choose"
        ],
        correta: 0
    },

    {
        nivel: "C++",
        pergunta: "Qual palavra-chave interrompe imediatamente um loop?",
        opcoes: [
            "stop",
            "exit_loop",
            "break",
            "end"
        ],
        correta: 2
    },

    {
        nivel: "C++",
        pergunta: "Qual palavra-chave pula para a próxima iteração de um loop?",
        opcoes: [
            "skip",
            "continue",
            "next",
            "pass"
        ],
        correta: 1
    },


    // =============================================================
    // 3. LÓGICA E ALGORITMOS
    // =============================================================

    {
        nivel: "Algoritmos",
        pergunta: "Qual será o valor de x após: int x = 5; x = x + 3;?",
        opcoes: [
            "3",
            "5",
            "8",
            "15"
        ],
        correta: 2
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual será o resultado de 10 % 3?",
        opcoes: [
            "0",
            "1",
            "3",
            "3.33"
        ],
        correta: 1
    },

    {
        nivel: "Algoritmos",
        pergunta: "O operador % representa:",
        opcoes: [
            "Divisão inteira",
            "Potência",
            "Resto da divisão",
            "Multiplicação"
        ],
        correta: 2
    },

    {
        nivel: "Algoritmos",
        pergunta: "Se x = 10 e y = 5, qual é o resultado de x > y?",
        opcoes: [
            "true",
            "false",
            "10",
            "5"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos",
        pergunta: "Quantas vezes o loop for(int i=0; i<5; i++) é executado?",
        opcoes: [
            "4",
            "5",
            "6",
            "0"
        ],
        correta: 1
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual é a finalidade de um contador em um algoritmo?",
        opcoes: [
            "Contar ocorrências ou iterações",
            "Armazenar somente textos",
            "Ordenar automaticamente um vetor",
            "Compilar o programa"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual é a finalidade de um acumulador?",
        opcoes: [
            "Guardar um valor que vai sendo atualizado, como uma soma",
            "Criar um loop infinito",
            "Comparar strings",
            "Eliminar variáveis"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual algoritmo é normalmente utilizado para encontrar o maior elemento de um vetor percorrendo seus elementos?",
        opcoes: [
            "Busca linear",
            "DFS",
            "BFS",
            "Hashing obrigatório"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos",
        pergunta: "Para verificar se um número é par, qual condição pode ser utilizada?",
        opcoes: [
            "numero % 2 == 0",
            "numero / 2 == 0",
            "numero * 2 == 0",
            "numero + 2 == 0"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos",
        pergunta: "Qual é uma característica de um algoritmo correto?",
        opcoes: [
            "Sempre precisa ser muito grande",
            "Deve produzir a solução esperada para as entradas válidas",
            "Precisa usar recursão",
            "Precisa utilizar classes"
        ],
        correta: 1
    },


    // =============================================================
    // 4. COMPLEXIDADE
    // =============================================================

    {
        nivel: "Complexidade",
        pergunta: "O que representa a notação Big-O?",
        opcoes: [
            "A quantidade exata de memória RAM do computador",
            "Uma forma de analisar o crescimento do custo de um algoritmo",
            "A linguagem usada pelo programa",
            "A quantidade de linhas do código"
        ],
        correta: 1
    },

    {
        nivel: "Complexidade",
        pergunta: "Qual é a complexidade de acessar diretamente um elemento de um array pelo índice?",
        opcoes: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        correta: 0
    },

    {
        nivel: "Complexidade",
        pergunta: "Qual é a complexidade de uma busca linear em um vetor não ordenado?",
        opcoes: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        correta: 2
    },

    {
        nivel: "Complexidade",
        pergunta: "Qual é a complexidade típica da busca binária?",
        opcoes: [
            "O(n²)",
            "O(n)",
            "O(log n)",
            "O(2ⁿ)"
        ],
        correta: 2
    },

    {
        nivel: "Complexidade",
        pergunta: "Qual destas complexidades cresce mais rapidamente para valores grandes de n?",
        opcoes: [
            "O(log n)",
            "O(n)",
            "O(n²)",
            "O(2ⁿ)"
        ],
        correta: 3
    },

    {
        nivel: "Complexidade",
        pergunta: "Qual é a complexidade de dois loops aninhados que percorrem n elementos cada?",
        opcoes: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        correta: 3
    },

    {
        nivel: "Complexidade",
        pergunta: "Um algoritmo O(n) é geralmente considerado:",
        opcoes: [
            "Linear",
            "Quadrático",
            "Logarítmico",
            "Exponencial"
        ],
        correta: 0
    },

    {
        nivel: "Complexidade",
        pergunta: "Qual estrutura permite normalmente pesquisa por chave em tempo médio O(1)?",
        opcoes: [
            "Hash table",
            "Lista encadeada",
            "Pilha",
            "Fila"
        ],
        correta: 0
    },

    {
        nivel: "Complexidade",
        pergunta: "Se um algoritmo percorre um vetor de tamanho n apenas uma vez, sua complexidade temporal normalmente é:",
        opcoes: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        correta: 2
    },

    {
        nivel: "Complexidade",
        pergunta: "Qual é a complexidade espacial de armazenar um vetor com n elementos adicionais?",
        opcoes: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n²)"
        ],
        correta: 1
    },


    // =============================================================
    // 5. ARRAYS E STRINGS
    // =============================================================

    {
        nivel: "Arrays",
        pergunta: "O que é um array?",
        opcoes: [
            "Uma coleção de elementos geralmente acessados por índice",
            "Uma função matemática",
            "Um compilador",
            "Um banco de dados"
        ],
        correta: 0
    },

    {
        nivel: "Arrays",
        pergunta: "Em C++, qual é o índice do primeiro elemento de um array?",
        opcoes: [
            "0",
            "1",
            "-1",
            "Depende do compilador"
        ],
        correta: 0
    },

    {
        nivel: "Arrays",
        pergunta: "Se int v[5] for declarado, quais índices são válidos?",
        opcoes: [
            "1 até 5",
            "0 até 4",
            "0 até 5",
            "1 até 4"
        ],
        correta: 1
    },

    {
        nivel: "Arrays",
        pergunta: "Qual estrutura de C++ possui tamanho dinâmico e é muito utilizada em programação competitiva?",
        opcoes: [
            "std::vector",
            "std::fixed",
            "std::static_array",
            "std::pointer"
        ],
        correta: 0
    },

    {
        nivel: "Arrays",
        pergunta: "Qual método de std::vector adiciona um elemento no final?",
        opcoes: [
            "addEnd()",
            "push_back()",
            "append_end()",
            "insert_last()"
        ],
        correta: 1
    },

    {
        nivel: "Arrays",
        pergunta: "Qual método retorna o número de elementos de um vector?",
        opcoes: [
            "length()",
            "count()",
            "size()",
            "amount()"
        ],
        correta: 2
    },

    {
        nivel: "Strings",
        pergunta: "Qual tipo da biblioteca padrão C++ é utilizado para strings?",
        opcoes: [
            "std::text",
            "std::string",
            "std::str",
            "std::character_array_only"
        ],
        correta: 1
    },

    {
        nivel: "Strings",
        pergunta: "Qual método de std::string retorna o tamanho da string?",
        opcoes: [
            "size()",
            "lengthOf()",
            "count()",
            "chars()"
        ],
        correta: 0
    },

    {
        nivel: "Strings",
        pergunta: "Uma string com 5 caracteres possui índices válidos de:",
        opcoes: [
            "1 a 5",
            "0 a 5",
            "0 a 4",
            "-1 a 4"
        ],
        correta: 2
    },

    {
        nivel: "Arrays",
        pergunta: "Qual técnica é útil para calcular rapidamente várias somas de intervalos de um array?",
        opcoes: [
            "Prefix sum",
            "Bubble sort",
            "DFS",
            "Backtracking"
        ],
        correta: 0
    },


    // =============================================================
    // 6. ESTRUTURAS DE DADOS
    // =============================================================

    {
        nivel: "Estruturas de Dados",
        pergunta: "Qual estrutura segue o princípio LIFO?",
        opcoes: [
            "Fila",
            "Pilha",
            "Heap mínimo",
            "Array"
        ],
        correta: 1
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Qual estrutura segue o princípio FIFO?",
        opcoes: [
            "Pilha",
            "Fila",
            "Árvore",
            "Heap"
        ],
        correta: 1
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Qual container C++ representa uma pilha?",
        opcoes: [
            "std::stack",
            "std::queue",
            "std::map",
            "std::set"
        ],
        correta: 0
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Qual container C++ representa uma fila?",
        opcoes: [
            "std::stack",
            "std::queue",
            "std::vector",
            "std::set"
        ],
        correta: 1
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Em uma pilha, qual operação adiciona um elemento?",
        opcoes: [
            "push",
            "enqueue",
            "insert_front_only",
            "append_queue"
        ],
        correta: 0
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Em uma fila, qual operação normalmente remove o primeiro elemento?",
        opcoes: [
            "pop_front",
            "dequeue",
            "push",
            "top"
        ],
        correta: 1
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Qual estrutura é especialmente adequada para representar relações hierárquicas?",
        opcoes: [
            "Árvore",
            "Fila",
            "Pilha",
            "String"
        ],
        correta: 0
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Em uma árvore binária, cada nó pode ter no máximo:",
        opcoes: [
            "1 filho",
            "2 filhos",
            "3 filhos",
            "4 filhos"
        ],
        correta: 1
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Em uma árvore binária de busca (BST), valores menores que o nó normalmente ficam:",
        opcoes: [
            "Na subárvore esquerda",
            "Na subárvore direita",
            "Sempre na raiz",
            "Fora da árvore"
        ],
        correta: 0
    },

    {
        nivel: "Estruturas de Dados",
        pergunta: "Qual estrutura é baseada em pares chave-valor?",
        opcoes: [
            "std::map",
            "std::stack",
            "std::queue",
            "std::vector"
        ],
        correta: 0
    },


    // =============================================================
    // 7. BUSCA E ORDENAÇÃO
    // =============================================================

    {
        nivel: "Busca",
        pergunta: "A busca binária exige que os dados estejam:",
        opcoes: [
            "Duplicados",
            "Ordenados",
            "Em uma pilha",
            "Em uma fila"
        ],
        correta: 1
    },

    {
        nivel: "Busca",
        pergunta: "Qual é a ideia principal da busca binária?",
        opcoes: [
            "Verificar todos os elementos",
            "Dividir repetidamente o espaço de busca pela metade",
            "Ordenar os elementos",
            "Apagar metade dos elementos"
        ],
        correta: 1
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual algoritmo de ordenação possui complexidade média O(n log n)?",
        opcoes: [
            "Bubble Sort",
            "Merge Sort",
            "Linear Search",
            "Sequential Scan"
        ],
        correta: 1
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual algoritmo utiliza a ideia de escolher um pivô e particionar os elementos?",
        opcoes: [
            "Merge Sort",
            "Quick Sort",
            "Bubble Sort",
            "Counting Search"
        ],
        correta: 1
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual algoritmo compara repetidamente elementos adjacentes?",
        opcoes: [
            "Bubble Sort",
            "Quick Sort",
            "Merge Sort",
            "Binary Search"
        ],
        correta: 0
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual algoritmo divide o array em partes, ordena as partes e depois as combina?",
        opcoes: [
            "Bubble Sort",
            "Merge Sort",
            "Linear Search",
            "Hash Sort"
        ],
        correta: 1
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual algoritmo pode ser muito eficiente quando os valores inteiros estão dentro de um intervalo pequeno conhecido?",
        opcoes: [
            "Counting Sort",
            "Binary Search",
            "DFS",
            "BFS"
        ],
        correta: 0
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual função da biblioteca <algorithm> pode ordenar um vector em C++?",
        opcoes: [
            "sort()",
            "order()",
            "organize()",
            "arrange()"
        ],
        correta: 0
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual é a complexidade média do Quick Sort?",
        opcoes: [
            "O(1)",
            "O(log n)",
            "O(n log n)",
            "O(n²) sempre"
        ],
        correta: 2
    },

    {
        nivel: "Ordenação",
        pergunta: "Qual é a complexidade do Bubble Sort no pior caso?",
        opcoes: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        correta: 3
    },


    // =============================================================
    // 8. TWO POINTERS / SLIDING WINDOW
    // =============================================================

    {
        nivel: "Técnicas de Algoritmos",
        pergunta: "A técnica Two Pointers utiliza normalmente:",
        opcoes: [
            "Dois índices ou referências para percorrer os dados",
            "Duas linguagens de programação",
            "Duas CPUs",
            "Duas bases de dados"
        ],
        correta: 0
    },

    {
        nivel: "Técnicas de Algoritmos",
        pergunta: "A técnica Sliding Window é especialmente útil para problemas envolvendo:",
        opcoes: [
            "Subarrays ou substrings contíguas",
            "Somente árvores",
            "Somente grafos",
            "Somente compiladores"
        ],
        correta: 0
    },

    {
        nivel: "Técnicas de Algoritmos",
        pergunta: "Qual técnica pode reduzir uma solução O(n²) para O(n) em determinados problemas de subarray?",
        opcoes: [
            "Sliding Window",
            "Bubble Sort",
            "Recursão ingênua",
            "Brute force adicional"
        ],
        correta: 0
    },

    {
        nivel: "Técnicas de Algoritmos",
        pergunta: "Em Two Pointers, os ponteiros podem frequentemente:",
        opcoes: [
            "Mover-se de acordo com as condições do problema",
            "Ser obrigatoriamente iguais",
            "Ser sempre aleatórios",
            "Apontar somente para o primeiro elemento"
        ],
        correta: 0
    },


    // =============================================================
    // 9. RECURSÃO
    // =============================================================

    {
        nivel: "Recursão",
        pergunta: "O que é uma função recursiva?",
        opcoes: [
            "Uma função que chama a si mesma",
            "Uma função sem parâmetros",
            "Uma função que nunca retorna",
            "Uma função que só trabalha com arrays"
        ],
        correta: 0
    },

    {
        nivel: "Recursão",
        pergunta: "O que uma função recursiva precisa normalmente possuir para terminar?",
        opcoes: [
            "Um caso base",
            "Um loop infinito",
            "Uma variável global",
            "Um ponteiro"
        ],
        correta: 0
    },

    {
        nivel: "Recursão",
        pergunta: "O que pode acontecer quando uma recursão não possui uma condição adequada de parada?",
        opcoes: [
            "O programa pode sofrer stack overflow",
            "O programa sempre fica mais rápido",
            "A memória aumenta infinitamente sem erro",
            "O compilador transforma automaticamente em loop"
        ],
        correta: 0
    },

    {
        nivel: "Recursão",
        pergunta: "Qual problema clássico pode ser resolvido com recursão?",
        opcoes: [
            "Fatorial",
            "Somente entrada de dados",
            "Somente impressão de texto",
            "Somente operações de I/O"
        ],
        correta: 0
    },

    {
        nivel: "Recursão",
        pergunta: "Qual é o resultado de 5!?",
        opcoes: [
            "25",
            "60",
            "100",
            "120"
        ],
        correta: 3
    },


    // =============================================================
    // 10. BACKTRACKING
    // =============================================================

    {
        nivel: "Backtracking",
        pergunta: "O que é Backtracking?",
        opcoes: [
            "Uma técnica que explora possibilidades e desfaz escolhas quando necessário",
            "Um algoritmo de ordenação",
            "Um banco de dados",
            "Um tipo de variável"
        ],
        correta: 0
    },

    {
        nivel: "Backtracking",
        pergunta: "Qual problema clássico pode ser resolvido com Backtracking?",
        opcoes: [
            "N-Queens",
            "Soma simples",
            "Impressão de uma variável",
            "Conversão de tipos"
        ],
        correta: 0
    },

    {
        nivel: "Backtracking",
        pergunta: "No Backtracking, o que significa desfazer uma escolha?",
        opcoes: [
            "Voltar ao estado anterior para testar outra possibilidade",
            "Apagar o programa",
            "Reiniciar o computador",
            "Ordenar novamente o array"
        ],
        correta: 0
    },


    // =============================================================
    // 11. PROGRAMAÇÃO DINÂMICA
    // =============================================================

    {
        nivel: "Programação Dinâmica",
        pergunta: "Qual é a ideia central da Programação Dinâmica?",
        opcoes: [
            "Resolver subproblemas e reutilizar seus resultados",
            "Sempre utilizar recursão infinita",
            "Evitar qualquer uso de memória",
            "Ordenar todos os dados"
        ],
        correta: 0
    },

    {
        nivel: "Programação Dinâmica",
        pergunta: "Qual característica é comum em problemas de Programação Dinâmica?",
        opcoes: [
            "Subproblemas sobrepostos",
            "Ausência total de estados",
            "Necessidade obrigatória de grafos",
            "Uso obrigatório de ponteiros"
        ],
        correta: 0
    },

    {
        nivel: "Programação Dinâmica",
        pergunta: "O que é memoization?",
        opcoes: [
            "Guardar resultados de subproblemas para evitar recalculá-los",
            "Ordenar um array",
            "Criar uma classe",
            "Eliminar a recursão sempre"
        ],
        correta: 0
    },

    {
        nivel: "Programação Dinâmica",
        pergunta: "Qual é uma forma de calcular Fibonacci de maneira eficiente usando DP?",
        opcoes: [
            "Guardar os valores anteriores",
            "Calcular tudo novamente sem guardar nada",
            "Usar apenas números aleatórios",
            "Ordenar a sequência"
        ],
        correta: 0
    },

    {
        nivel: "Programação Dinâmica",
        pergunta: "O problema da Mochila 0/1 é um exemplo clássico de:",
        opcoes: [
            "Programação Dinâmica",
            "Busca binária",
            "Bubble Sort",
            "Hashing"
        ],
        correta: 0
    },


    // =============================================================
    // 12. GRAFOS
    // =============================================================

    {
        nivel: "Grafos",
        pergunta: "O que representa um grafo?",
        opcoes: [
            "Um conjunto de vértices e arestas",
            "Apenas uma lista de números",
            "Um único número",
            "Uma função matemática somente"
        ],
        correta: 0
    },

    {
        nivel: "Grafos",
        pergunta: "Como são chamados os elementos de um grafo?",
        opcoes: [
            "Vértices e arestas",
            "Linhas e colunas",
            "Chaves e valores",
            "Pilhas e filas"
        ],
        correta: 0
    },

    {
        nivel: "Grafos",
        pergunta: "Qual algoritmo utiliza normalmente uma fila para realizar busca em largura?",
        opcoes: [
            "BFS",
            "DFS",
            "Quick Sort",
            "Merge Sort"
        ],
        correta: 0
    },

    {
        nivel: "Grafos",
        pergunta: "Qual algoritmo utiliza normalmente uma pilha ou recursão para realizar busca em profundidade?",
        opcoes: [
            "BFS",
            "DFS",
            "Binary Search",
            "Counting Sort"
        ],
        correta: 1
    },

    {
        nivel: "Grafos",
        pergunta: "O que significa BFS?",
        opcoes: [
            "Breadth-First Search",
            "Binary Fast Sort",
            "Basic File System",
            "Breadth File Structure"
        ],
        correta: 0
    },

    {
        nivel: "Grafos",
        pergunta: "O que significa DFS?",
        opcoes: [
            "Data Fast Search",
            "Depth-First Search",
            "Direct File System",
            "Dynamic Fast Sort"
        ],
        correta: 1
    },


    // =============================================================
    // 13. HASHING
    // =============================================================

    {
        nivel: "Hashing",
        pergunta: "Qual é a finalidade de uma função hash?",
        opcoes: [
            "Mapear uma chave para uma posição ou valor de hash",
            "Ordenar sempre os dados",
            "Criar uma conexão de rede",
            "Compilar o programa"
        ],
        correta: 0
    },

    {
        nivel: "Hashing",
        pergunta: "O que é uma colisão em uma tabela hash?",
        opcoes: [
            "Quando duas chaves produzem a mesma posição de hash",
            "Quando a tabela fica vazia",
            "Quando uma chave é removida",
            "Quando o computador desliga"
        ],
        correta: 0
    },

    {
        nivel: "Hashing",
        pergunta: "Qual container C++ implementa uma tabela hash?",
        opcoes: [
            "std::unordered_map",
            "std::stack",
            "std::queue",
            "std::vector"
        ],
        correta: 0
    },


    // =============================================================
    // 14. BANCO DE DADOS
    // =============================================================

    {
        nivel: "Banco de Dados",
        pergunta: "O que significa SQL?",
        opcoes: [
            "Structured Query Language",
            "Simple Question Language",
            "System Query Logic",
            "Structured Queue Language"
        ],
        correta: 0
    },

    {
        nivel: "Banco de Dados",
        pergunta: "Qual comando SQL é utilizado para consultar dados?",
        opcoes: [
            "SELECT",
            "GET",
            "READ",
            "FETCH_ALL"
        ],
        correta: 0
    },

    {
        nivel: "Banco de Dados",
        pergunta: "Qual comando SQL adiciona novos registros?",
        opcoes: [
            "ADD",
            "INSERT",
            "CREATE_ROW",
            "PUSH"
        ],
        correta: 1
    },

    {
        nivel: "Banco de Dados",
        pergunta: "Qual comando SQL altera registros existentes?",
        opcoes: [
            "CHANGE",
            "MODIFY",
            "UPDATE",
            "EDIT"
        ],
        correta: 2
    },

    {
        nivel: "Banco de Dados",
        pergunta: "Qual comando SQL remove registros?",
        opcoes: [
            "REMOVE",
            "DELETE",
            "DROP_ROW",
            "CLEAR"
        ],
        correta: 1
    },

    {
        nivel: "Banco de Dados",
        pergunta: "Para que serve uma chave primária?",
        opcoes: [
            "Identificar unicamente um registro",
            "Armazenar imagens",
            "Executar consultas automaticamente",
            "Criar uma senha"
        ],
        correta: 0
    },

    {
        nivel: "Banco de Dados",
        pergunta: "Qual cláusula SQL é usada para filtrar registros?",
        opcoes: [
            "FILTER",
            "WHERE",
            "WHEN",
            "HAVING_ONLY"
        ],
        correta: 1
    },

    {
        nivel: "Banco de Dados",
        pergunta: "Qual cláusula SQL é usada para ordenar resultados?",
        opcoes: [
            "SORT BY",
            "ORDER BY",
            "ARRANGE",
            "GROUP SORT"
        ],
        correta: 1
    },


    // =============================================================
    // 15. JAVASCRIPT / WEB
    // =============================================================

    {
        nivel: "JavaScript",
        pergunta: "Qual palavra-chave pode declarar uma variável em JavaScript cujo valor pode ser reatribuído?",
        opcoes: [
            "let",
            "constant",
            "define",
            "variable_only"
        ],
        correta: 0
    },

    {
        nivel: "JavaScript",
        pergunta: "Qual método imprime informações no console do navegador?",
        opcoes: [
            "console.log()",
            "print.console()",
            "echo()",
            "terminal.write()"
        ],
        correta: 0
    },

    {
        nivel: "JavaScript",
        pergunta: "Qual método adiciona um elemento ao final de um array em JavaScript?",
        opcoes: [
            "push()",
            "append()",
            "addLast()",
            "insertEnd()"
        ],
        correta: 0
    },

    {
        nivel: "JavaScript",
        pergunta: "Qual método remove o último elemento de um array JavaScript?",
        opcoes: [
            "remove()",
            "deleteLast()",
            "pop()",
            "lastDelete()"
        ],
        correta: 2
    },

    {
        nivel: "JavaScript",
        pergunta: "O que o método fetch() é usado para fazer?",
        opcoes: [
            "Fazer requisições a recursos, como APIs",
            "Criar um banco de dados automaticamente",
            "Compilar JavaScript",
            "Criar classes CSS"
        ],
        correta: 0
    },

    {
        nivel: "JavaScript",
        pergunta: "Qual formato é muito utilizado para trocar dados entre frontend e API?",
        opcoes: [
            "JPEG",
            "JSON",
            "MP3",
            "PNG"
        ],
        correta: 1
    },

    {
        nivel: "Web",
        pergunta: "Qual linguagem é usada principalmente para estruturar páginas web?",
        opcoes: [
            "HTML",
            "CSS",
            "SQL",
            "PHP"
        ],
        correta: 0
    },

    {
        nivel: "Web",
        pergunta: "Qual linguagem é usada principalmente para estilizar páginas web?",
        opcoes: [
            "HTML",
            "CSS",
            "SQL",
            "JSON"
        ],
        correta: 1
    },

    {
        nivel: "Web",
        pergunta: "Qual tecnologia normalmente adiciona comportamento e interatividade às páginas web?",
        opcoes: [
            "JavaScript",
            "HTML",
            "CSS",
            "SQL"
        ],
        correta: 0
    },

    {
        nivel: "Web",
        pergunta: "O que significa API?",
        opcoes: [
            "Application Programming Interface",
            "Advanced Programming Internet",
            "Application Process Integration",
            "Automated Program Instruction"
        ],
        correta: 0
    },


    // =============================================================
    // 16. GIT E DESENVOLVIMENTO
    // =============================================================

    {
        nivel: "Git",
        pergunta: "Para que serve o Git?",
        opcoes: [
            "Controle de versão",
            "Criar bancos de dados",
            "Editar imagens",
            "Executar código C++ automaticamente"
        ],
        correta: 0
    },

    {
        nivel: "Git",
        pergunta: "Qual comando inicializa um repositório Git?",
        opcoes: [
            "git start",
            "git init",
            "git create",
            "git begin"
        ],
        correta: 1
    },

    {
        nivel: "Git",
        pergunta: "Qual comando mostra o estado atual do repositório?",
        opcoes: [
            "git state",
            "git status",
            "git check",
            "git info"
        ],
        correta: 1
    },

    {
        nivel: "Git",
        pergunta: "Qual comando cria um commit?",
        opcoes: [
            "git save",
            "git commit",
            "git record",
            "git snapshot"
        ],
        correta: 1
    },

    {
        nivel: "Git",
        pergunta: "Qual comando baixa alterações de um repositório remoto e integra essas alterações?",
        opcoes: [
            "git pull",
            "git download",
            "git receive",
            "git sync-only"
        ],
        correta: 0
    },

    {
        nivel: "Git",
        pergunta: "Qual comando envia commits para um repositório remoto?",
        opcoes: [
            "git send",
            "git upload",
            "git push",
            "git transfer"
        ],
        correta: 2
    },


    // =============================================================
    // 17. ORIENTAÇÃO A OBJETOS
    // =============================================================

    {
        nivel: "Programação Orientada a Objetos",
        pergunta: "O que é uma classe?",
        opcoes: [
            "Um modelo para criar objetos",
            "Uma variável inteira",
            "Um banco de dados",
            "Uma função global obrigatória"
        ],
        correta: 0
    },

    {
        nivel: "Programação Orientada a Objetos",
        pergunta: "O que é um objeto?",
        opcoes: [
            "Uma instância de uma classe",
            "Sempre uma função",
            "Um arquivo executável",
            "Um tipo de loop"
        ],
        correta: 0
    },

    {
        nivel: "Programação Orientada a Objetos",
        pergunta: "Qual conceito permite esconder detalhes internos de implementação?",
        opcoes: [
            "Encapsulamento",
            "Ordenação",
            "Recursão",
            "Iteração"
        ],
        correta: 0
    },

    {
        nivel: "Programação Orientada a Objetos",
        pergunta: "Qual conceito permite que uma classe herde características de outra?",
        opcoes: [
            "Polimorfismo",
            "Herança",
            "Recursão",
            "Composição obrigatória"
        ],
        correta: 1
    },

    {
        nivel: "Programação Orientada a Objetos",
        pergunta: "Qual conceito permite que uma mesma interface tenha comportamentos diferentes?",
        opcoes: [
            "Polimorfismo",
            "Compilação",
            "Iteração",
            "Hashing"
        ],
        correta: 0
    },


    // =============================================================
    // 18. PONTEIROS E MEMÓRIA — C++
    // =============================================================

    {
        nivel: "C++ — Memória",
        pergunta: "O que é um ponteiro em C++?",
        opcoes: [
            "Uma variável que armazena um endereço de memória",
            "Uma variável que só armazena strings",
            "Um tipo de loop",
            "Um arquivo executável"
        ],
        correta: 0
    },

    {
        nivel: "C++ — Memória",
        pergunta: "Qual operador obtém o endereço de uma variável?",
        opcoes: [
            "*",
            "&",
            "#",
            "@"
        ],
        correta: 1
    },

    {
        nivel: "C++ — Memória",
        pergunta: "Qual operador é usado para acessar o valor apontado por um ponteiro?",
        opcoes: [
            "&",
            "*",
            "%",
            "->>"
        ],
        correta: 1
    },

    {
        nivel: "C++ — Memória",
        pergunta: "O que significa nullptr em C++ moderno?",
        opcoes: [
            "Um ponteiro que não aponta para um objeto válido",
            "Um número inteiro positivo",
            "Uma string vazia obrigatoriamente",
            "Um array vazio"
        ],
        correta: 0
    },


    // =============================================================
    // 19. QUESTÕES DE RACIOCÍNIO
    // =============================================================

    {
        nivel: "Raciocínio Computacional",
        pergunta: "Se um algoritmo precisa verificar todos os elementos de um vetor para encontrar um valor, qual estratégia básica pode ser usada?",
        opcoes: [
            "Busca linear",
            "Busca binária obrigatoriamente",
            "DFS",
            "Quick Sort"
        ],
        correta: 0
    },

    {
        nivel: "Raciocínio Computacional",
        pergunta: "Se um vetor ordenado possui 1.000.000 de elementos, qual busca é normalmente mais eficiente para procurar um valor?",
        opcoes: [
            "Busca linear",
            "Busca binária",
            "Bubble Sort",
            "DFS"
        ],
        correta: 1
    },

    {
        nivel: "Raciocínio Computacional",
        pergunta: "Qual estratégia divide um problema em partes menores, resolve essas partes e combina os resultados?",
        opcoes: [
            "Divisão e conquista",
            "Busca linear",
            "Hashing",
            "Força bruta sempre"
        ],
        correta: 0
    },

    {
        nivel: "Raciocínio Computacional",
        pergunta: "Qual é o principal objetivo de otimizar um algoritmo?",
        opcoes: [
            "Reduzir recursos como tempo ou memória mantendo a solução correta",
            "Aumentar o número de linhas",
            "Tornar o código sempre maior",
            "Eliminar todas as variáveis"
        ],
        correta: 0
    },

    {
        nivel: "Raciocínio Computacional",
        pergunta: "O que caracteriza uma solução brute force?",
        opcoes: [
            "Explorar diretamente todas ou muitas possibilidades",
            "Usar obrigatoriamente programação dinâmica",
            "Usar somente busca binária",
            "Nunca testar possibilidades"
        ],
        correta: 0
    },


    // =============================================================
    // 20. QUESTÕES AVANÇADAS
    // =============================================================

    {
        nivel: "Algoritmos Avançados",
        pergunta: "Qual algoritmo é utilizado para encontrar caminhos mínimos a partir de uma origem em um grafo com pesos não negativos?",
        opcoes: [
            "Dijkstra",
            "Bubble Sort",
            "Kruskal somente",
            "Binary Search"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "Qual algoritmo é conhecido por encontrar uma árvore geradora mínima usando uma estratégia baseada em arestas?",
        opcoes: [
            "Kruskal",
            "Binary Search",
            "Floyd-Warshall somente",
            "Bubble Sort"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "Qual algoritmo encontra distâncias mínimas entre todos os pares de vértices?",
        opcoes: [
            "Floyd-Warshall",
            "Quick Sort",
            "DFS somente",
            "Counting Sort"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "O que é um grafo direcionado?",
        opcoes: [
            "Um grafo em que as arestas possuem direção",
            "Um grafo sem vértices",
            "Um grafo sem arestas",
            "Um grafo que só possui ciclos"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "O que é um grafo ponderado?",
        opcoes: [
            "Um grafo cujas arestas ou vértices possuem valores associados",
            "Um grafo que só possui números pares",
            "Um grafo sem conexões",
            "Um grafo sem memória"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "O que é uma árvore geradora mínima?",
        opcoes: [
            "Uma árvore que conecta os vértices com custo total mínimo",
            "Uma árvore com o maior número possível de ciclos",
            "Uma árvore sem vértices",
            "Uma árvore usada somente para strings"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "Qual estrutura é frequentemente usada para implementar uma Priority Queue eficiente?",
        opcoes: [
            "Heap",
            "String",
            "Fila simples obrigatoriamente",
            "Matriz"
        ],
        correta: 0
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "Em um Min Heap, o elemento na raiz é normalmente:",
        opcoes: [
            "O maior elemento",
            "O menor elemento",
            "Sempre zero",
            "Sempre negativo"
        ],
        correta: 1
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "Em um Max Heap, o elemento na raiz é normalmente:",
        opcoes: [
            "O menor elemento",
            "O maior elemento",
            "Sempre zero",
            "Sempre positivo"
        ],
        correta: 1
    },

    {
        nivel: "Algoritmos Avançados",
        pergunta: "Qual é uma aplicação comum de uma fila de prioridade?",
        opcoes: [
            "Processar elementos de acordo com sua prioridade",
            "Armazenar somente strings",
            "Substituir o compilador",
            "Criar arquivos HTML"
        ],
        correta: 0
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