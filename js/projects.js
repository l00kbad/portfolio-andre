//**
 * Projects Data & Rendering + Modal Logic
 */

const projectsData = [
    {
        id: 'oxydb',
        name: 'OxyDB',
        subtitle: 'Sistema de Gerenciamento de Banco de Dados',
        shortDesc: 'Plataforma para gerenciamento e monitoramento de bancos de dados com interface web e automações.',
        fullDesc: `OxyDB é uma plataforma desenvolvida para centralizar o gerenciamento e monitoramento de bancos de dados em ambientes corporativos. O sistema permite visualizar status de conexões, análise de performance, gerenciamento de permissões e schemas, além de oferecer automações para rotinas de backup e manutenção. Foi construído visando reduzir o tempo de troubleshooting e padronizar o acesso aos bancos de dados da infraestrutura.`,
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
        highlights: [
            'Dashboard unificado para múltiplos bancos de dados',
            'Automação de backups e rotinas de manutenção',
            'Controle granular de permissões e acessos',
            'Interface web responsiva para operações DBA'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/oxydb',
        lastActivity: '2026-05-29',
        icon: '🗄️'
    },
    {
        id: 'tunnel-lease-panel',
        name: 'Tunnel Lease Panel',
        subtitle: 'Acesso SSH com TTL, Túnel e Auditoria',
        shortDesc: 'Painel web (FastAPI) para gerenciar acessos temporários via SSH túnel com TTL, limite de sessão e auditoria completa.',
        fullDesc: `O Tunnel Lease Panel é uma solução completa para concessão de acessos temporários via SSH de forma segura e auditada. Desenvolvido com FastAPI, o painel permite que administradores gerem chaves SSH com tempo de vida (TTL), limitem sessões, definam catálogos de destinos permitidos (host:porta) e entreguem chaves privadas de forma one-time (download ou e-mail). Todo acesso é logado em auditoria legível. Ideal para ambientes que exigem compliance e controle rigoroso de acessos privilegiados.`,
        stack: ['Python', 'FastAPI', 'OpenSSH', 'Nginx', 'Systemd', 'PowerShell', 'Bash', 'AWS SES'],
        highlights: [
            'Geração de chaves SSH com TTL automático',
            'Catálogo de destinos permitidos via PermitOpen',
            'Entrega one-time de chave privada (download ou e-mail)',
            'Auditoria completa de sessões e comandos',
            'Scripts cliente para Windows (PowerShell) e Linux (Bash)'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/tunnel-lease-panel',
        lastActivity: '2026-02-16',
        icon: '🔐'
    },
    {
        id: 'windows-user-profile-manager',
        name: 'Windows User Profile Manager',
        subtitle: 'Gerenciamento Avançado de Perfis de Usuário',
        shortDesc: 'Aplicação PowerShell com GUI para remoção completa e segura de perfis de usuários do Windows.',
        fullDesc: `O Windows User Profile Manager é uma ferramenta gráfica desenvolvida em PowerShell que permite a remoção completa e segura de perfis de usuários do Windows. O aplicativo realiza um processo de exclusão em várias etapas: encerra sessões ativas, remove registros do perfil (SID), exclui a pasta de perfil completa (C:\\Users\\<Usuário>) e, no modo forçado, utiliza takeown e icacls para assumir controle de arquivos bloqueados. Ideal para administradores de TI que precisam limpar perfis corrompidos ou liberar espaço em disco.`,
        stack: ['PowerShell', 'Windows Forms', '.NET Framework'],
        highlights: [
            'Interface gráfica intuitiva para gestão de perfis',
            'Encerramento forçado de sessões ativas',
            'Remoção completa de registros (SID) e pastas de perfil',
            'Modo forçado com takeown/icacls para arquivos bloqueados',
            'Executável compilado (.exe) disponível'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/windows-user-profile-manager',
        lastActivity: '2025-12-09',
        icon: '👤'
    },
    {
        id: 'gerenciadorhorarioad',
        name: 'Gerenciador de Horários AD',
        subtitle: 'Controle de LogonHours no Active Directory',
        shortDesc: 'Ferramenta GUI em PowerShell para gerenciar horários de logon (logonHours) de usuários e grupos no AD.',
        fullDesc: `O Gerenciador de Horários de Logon para Active Directory é uma ferramenta gráfica desenvolvida em PowerShell que simplifica o gerenciamento dos horários de logon (atributo logonHours) de usuários e membros de grupos no Active Directory. O aplicativo permite aplicar regras de horário para usuários individuais ou em massa através de grupos de segurança, com busca flexível por nome, SamAccountName ou e-mail. Inclui visualização clara em grade, ações rápidas (permitir/bloquear todos os horários) e configuração persistida em XML protegida por senha administrativa.`,
        stack: ['PowerShell', 'Windows Forms', 'Active Directory', 'RSAT'],
        highlights: [
            'Gerenciamento por usuário individual ou grupos de segurança',
            'Busca flexível por nome, login ou e-mail',
            'Visualização em grade de dias/horários permitidos',
            'Aplicação em massa com um clique',
            'Configuração persistida protegida por senha'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/gerenciadorhorarioad',
        lastActivity: '2025-09-22',
        icon: '⏰'
    },
    {
        id: 'grafana-lambda-mattermost',
        name: 'Grafana → Lambda → Mattermost',
        subtitle: 'Integração de Alertas e Notificações',
        shortDesc: 'Pipeline de alertas do Grafana via AWS Lambda para notificações no Mattermost com webhooks.',
        fullDesc: `Este projeto implementa uma integração completa entre Grafana, AWS Lambda e Mattermost para notificações de alertas em tempo real. Quando um alerta é disparado no Grafana (ex: alta latência, erro 5xx, uso de memória), o webhook do Grafana invoca uma função AWS Lambda que formata a mensagem e a envia para um canal específico no Mattermost. A solução permite personalização de templates, filtros de severidade e enriquecimento de contexto (ex: adicionar runbooks ou links para dashboards diretamente na notificação).`,
        stack: ['AWS Lambda', 'Python', 'Grafana', 'Mattermost', 'API Gateway', 'CloudWatch'],
        highlights: [
            'Alertas em tempo real do Grafana para Mattermost',
            'Formatação customizada de mensagens por severidade',
            'Enriquecimento com links para runbooks e dashboards',
            'Serverless com AWS Lambda (custo zero quando ocioso)',
            'Fácil deploy e configuração via variáveis de ambiente'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/grafana-lambda-mattermost',
        lastActivity: '2025-05-23',
        icon: '🔔'
    },
    {
        id: 'check-ip',
        name: 'Check-IP',
        subtitle: 'Verificador de Endereço IP Público',
        shortDesc: 'Serviço web simples e rápido para verificar o endereço IP público do visitante, com suporte a JSON e visualização clean.',
        fullDesc: `O Check-IP é um serviço web minimalista para verificação de endereço IP público. Ao acessar a página, o usuário visualiza seu IP externo de forma imediata, com opção de retorno em formato JSON para integração com scripts e automações. O projeto foi desenvolvido pensando em simplicidade e baixo consumo de recursos, ideal para deploy em containers ou serverless.`,
        stack: ['Python', 'Flask/FastAPI', 'Docker', 'Nginx'],
        highlights: [
            'Resposta instantânea do IP público',
            'Suporte a output em JSON para automações',
            'Design minimalista e responsivo',
            'Deploy fácil via Docker'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/check-ip',
        lastActivity: '2025-08-27',
        icon: '🌐'
    },
    {
        id: 'traefikv3',
        name: 'Traefik v3 Lab',
        subtitle: 'Laboratório de Configuração e Testes',
        shortDesc: 'Ambiente de laboratório para testes e validação de configurações do Traefik v3 com Docker Compose.',
        fullDesc: `O Traefik v3 Lab é um ambiente controlado para experimentação com o Traefik v3, reverse proxy e load balancer moderno. O projeto inclui configurações de exemplo para roteamento dinâmico, certificados SSL/TLS automáticos (Let's Encrypt), middlewares de segurança (rate limit, IP whitelist, basic auth) e integração com Docker Compose para descoberta automática de serviços. Serve como base para padronização de deploys de aplicações web em ambientes de produção.`,
        stack: ['Traefik v3', 'Docker Compose', 'Nginx', 'SSL/TLS', 'Let's Encrypt'],
        highlights: [
            'Configurações prontas para roteamento dinâmico',
            'Certificados SSL automáticos via Let\'s Encrypt',
            'Middlewares de segurança (rate limit, whitelist, auth)',
            'Descoberta automática de containers Docker',
            'Templates para replicação em produção'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/traefikv3',
        lastActivity: '2025-08-07',
        icon: '🚦'
    },
    {
        id: 'python-ingresso',
        name: 'Python Ingresso',
        subtitle: 'Automação para Gestão de Ingressos',
        shortDesc: 'Scripts Python para automação de processos relacionados à gestão e controle de ingressos/eventos.',
        fullDesc: `O Python Ingresso é um conjunto de scripts e utilitários desenvolvidos em Python para automatizar processos de gestão de ingressos e controle de acesso a eventos. Inclui funcionalidades para geração de ingressos com QR code, validação de entrada, relatórios de presença e integração com sistemas de pagamento. O projeto foi construído com foco em simplicidade e extensibilidade, permitindo adaptação para diferentes tipos de eventos.`,
        stack: ['Python', 'Pandas', 'QR Code', 'SQLite/PostgreSQL'],
        highlights: [
            'Geração automática de ingressos com QR code',
            'Validação rápida de entrada em eventos',
            'Relatórios de presença e estatísticas',
            'Base de dados leve e portátil'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/python-ingresso',
        lastActivity: '2025-07-02',
        icon: '🎫'
    },
    {
        id: 'site-roott',
        name: 'Site Roott',
        subtitle: 'Website e Landing Page',
        shortDesc: 'Website institucional desenvolvido para a marca Roott, com foco em presença digital e conversão.',
        fullDesc: `O Site Roott é um website institucional completo desenvolvido para a marca Roott. O projeto inclui landing page otimizada para SEO, páginas de serviços, formulário de contato integrado e design responsivo. Foi construído com foco em performance, acessibilidade e conversão de leads, utilizando boas práticas de desenvolvimento web e hospedagem otimizada.`,
        stack: ['HTML', 'CSS', 'JavaScript', 'Nginx', 'Cloudflare'],
        highlights: [
            'Design responsivo e otimizado para mobile',
            'SEO técnico implementado desde a base',
            'Performance otimizada com cache e CDN',
            'Formulário de contato integrado'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/site-roott',
        lastActivity: '2026-05-08',
        icon: '🌐'
    },
    {
        id: 'portal-rh',
        name: 'Portal RH',
        subtitle: 'Portal de Recursos Humanos com Docker',
        shortDesc: 'Aplicação web de RH containerizada com Tomcat, JRE 8 e PostgreSQL, incluindo pipeline CI/CD no GitLab.',
        fullDesc: `O Portal RH é uma aplicação web de Recursos Humanos containerizada para deploy simplificado. Utiliza imagem base Tomcat 9.0.91 com JRE 8, banco de dados PostgreSQL e configuração via properties externo. O projeto inclui pipeline CI/CD completo no GitLab (pré-build, build, deploy) e docker-compose para orquestração local. O arquivo WAR da aplicação é versionado e deployado automaticamente via registry do GitLab.`,
        stack: ['Java', 'Tomcat', 'JRE 8', 'PostgreSQL', 'Docker', 'GitLab CI/CD', 'Docker Compose'],
        highlights: [
            'Containerização completa com Docker e Docker Compose',
            'Pipeline CI/CD automatizado no GitLab',
            'Configuração externa via properties (elotech.jdbc.properties)',
            'Logging controlado com rotação (json-file, 50MB max)',
            'Deploy simplificado via registry GitLab'
        ],
        visibility: 'private',
        gitlabUrl: 'https://gitlab.com/andrehbpinho/portal-rh',
        lastActivity: '2025-08-27',
        icon: '👥'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initModal();
});

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    
    grid.innerHTML = projectsData.map(p => `
        <article class="project-card" data-project="${p.id}">
            <div class="project-header">
                <div class="project-icon">${p.icon}</div>
                <span class="project-badge ${p.visibility}">${p.visibility.toUpperCase()}</span>
            </div>
            <h3 class="project-title">${p.name}</h3>
            <p class="project-desc">${p.shortDesc}</p>
            <div class="project-stack">
                ${p.stack.slice(0, 4).map(s => `<span>${s}</span>`).join('')}
                ${p.stack.length > 4 ? `<span>+${p.stack.length - 4}</span>` : ''}
            </div>
            <div class="project-actions">
                <span class="project-btn project-btn-primary">Ver detalhes</span>
                <span class="project-btn project-btn-secondary" onclick="event.stopPropagation(); openAccessRequest('${p.id}')">Solicitar acesso</span>
            </div>
        </article>
    `).join('');
    
    // Add click handlers
    grid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open modal if clicking the access button
            if (e.target.closest('.project-btn-secondary')) return;
            const id = card.dataset.project;
            openModal(id);
        });
    });
}

function initModal() {
    const modal = document.getElementById('project-modal');
    const backdrop = modal.querySelector('.modal-backdrop');
    const closeBtn = document.getElementById('modal-close');
    
    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function openModal(projectId) {
    const p = projectsData.find(x => x.id === projectId);
    if (!p) return;
    
    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-subtitle').textContent = p.subtitle;
    document.getElementById('modal-desc').textContent = p.fullDesc;
    document.getElementById('modal-visibility').textContent = p.visibility === 'private' ? 'Privado (requer acesso)' : 'Público';
    document.getElementById('modal-visibility').style.color = p.visibility === 'private' ? 'var(--accent-red)' : 'var(--accent-green)';
    document.getElementById('modal-activity').textContent = p.lastActivity;
    document.getElementById('modal-link').href = p.gitlabUrl;
    document.getElementById('modal-access-btn').href = generateGitLabIssueUrl(p);
    
    const stackEl = document.getElementById('modal-stack');
    stackEl.innerHTML = p.stack.map(s => `<span>${s}</span>`).join('');
    
    const highlightsEl = document.getElementById('modal-highlights');
    highlightsEl.innerHTML = p.highlights.map(h => `<li>${h}</li>`).join('');
    
    const badge = document.getElementById('modal-badge');
    badge.className = 'modal-badge ' + p.visibility;
    badge.textContent = p.visibility.toUpperCase();
    
    const modal = document.getElementById('project-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function openAccessRequest(projectId) {
    const p = projectsData.find(x => x.id === projectId);
    if (!p) return;
    window.open(generateGitLabIssueUrl(p), '_blank');
}
