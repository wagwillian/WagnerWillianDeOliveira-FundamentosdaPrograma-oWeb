// Define o conteúdo para cada página
const pageContent = {
    'about-link': `
        <div class="space-y-4">
            <h1 class="text-3xl md:text-4xl font-bold text-center text-blue-400">Um pouco sobre mim!</h1>
            <p class="text-gray-300 text-center text-lg">
                Com 34 anos, sou o Wagner Willian de Oliveira, e minha jornada é uma mistura de duas paixões:
                 a física e a robótica. Sou formado em licenciatura em física pela Universidade Federal do Paraná,
                 e hoje, tenho a chance de ensinar o que amo. Pra completar, estou de volta à faculdade, agora fazendo
                 minha segunda graduação em Análise e Desenvolvimento de Sistemas. 
                 Pra mim, é a oportunidade perfeita pra unir o universo da física e da robótica com a área de programação,
                aplicando meus conhecimentos na prática e aprofundando minha expertise em tecnologia.
                Meu objetivo é continuar evoluindo como profissional e contribuir com o avanço tecnológico na área de educação,
                provando que o conhecimento clássico e a inovação andam de mãos dadas.
                           

            </p>            
        </div>
    `,
    'formation-link': `
        <div class="space-y-4">
            <h2 class="text-2xl md:text-3xl font-bold text-blue-400">Formação</h2>
            <p class="text-gray-300">
                Formação e Educação: <br>
                Completo: 2016-2018 <br>         
                Licenciatura em Física - Universidade Federal do Paraná (UFPR) <br>
                Em andamento - 2025 - 2027 <br>
                Análise e Desenvolvimento de Sistemas  - Uninter <br>
            </p>
            <p>    
                Idiomas: <br>
                Português - Nativo
                Inglês - Avançado
            </p>
            <p>   
                Cursos e Certificações: <br>
                Desenvolvimento de Software - Alura <br>
                .NET Framework <br>
                .NET Core <br>
                APIs RESTful <br>
                DevOps <br>
                Bootcamp End to End - DIO <br>
            </p>            
        </div>
    `,
    'portfolio-link': `
        <div class="space-y-4">
            <h2 class="text-2xl md:text-3xl font-bold text-blue-400">Links e Projetos!</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-300">
                <li><a href="https://wagwillian.github.io/fds/"> Site desenvolvido para Disciplina Fundamentos de Desenvolvimento de Sistemas  </a></li>
                <li><a href="https://wagwillian.github.io/fds/"> Perfil do Github </a></li>   
                <li><a href="https://www.linkedin.com/in/wagner-willian-de-oliveira-b13255165/">LinkedIn <a/></li>             
            </ul>
        </div>
    `,
    'contact-link': `
        <div class="space-y-4">
            <h2 class="text-2xl md:text-3xl font-bold text-blue-400">Contato:</h2>
            <p class="text-gray-300">
                
           <div class="container">
        <h1></h1>
        <form id="contactForm">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Mensagem:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <div id="status"></div>
    </div>
        </div>
    `
};

// Obtém a área de conteúdo e os links de navegação
const contentArea = document.getElementById('content-area');
const navLinks = document.querySelectorAll('.link-item');

// Função para atualizar o conteúdo
function updateContent(contentId) {
    contentArea.innerHTML = pageContent[contentId];
}

// Adiciona um listener de evento de clique a cada link de navegação
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o recarregamento da página
        updateContent(event.target.id);
    });
});

// Define o conteúdo inicial para a página inicial ao carregar a janela
window.onload = function() {
    updateContent('about-link');
};