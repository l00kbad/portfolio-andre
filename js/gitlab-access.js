/**
 * GitLab Access Request Integration
 * 
 * Gera links diretos para criação de Issues no GitLab com template preenchido.
 * Isso permite que visitantes solicitem acesso aos projetos privados de forma
 * estruturada, e o mantenedor (André) aprova ou nega via GitLab.
 */

function generateGitLabIssueUrl(project) {
    const title = encodeURIComponent(`Solicitação de Acesso: ${project.name}`);
    const description = encodeURIComponent(
`## Solicitação de Acesso ao Repositório

**Projeto:** [${project.name}](${project.gitlabUrl})
**Solicitante:** _(preencha seu nome/e-mail)_

### Motivo do Acesso
_(Descreva brevemente por que deseja acessar este projeto)_

### Tipo de Uso
- [ ] Estudo / Aprendizado
- [ ] Contribuição / Colaboração
- [ ] Uso profissional
- [ ] Outro: ___________

### Informações de Contato
- Nome: 
- E-mail: 
- LinkedIn / GitLab: 

---
> Esta solicitação será avaliada pelo mantenedor do projeto. Você receberá uma notificação por e-mail quando o acesso for concedido ou negado.`
    );
    
    return `${project.gitlabUrl}/-/issues/new?issue[title]=${title}&issue[description]=${description}`;
}

/**
 * Alternative: Direct API-based request (requires backend/proxy)
 * 
 * If a backend is available, this function could be used to create
 * issues directly via GitLab API without redirecting the user.
 * For security, the token must NEVER be exposed in frontend code.
 */
async function createAccessRequestViaAPI(project, requesterInfo) {
    // WARNING: This requires a backend proxy to keep the token secure.
    // Do NOT call GitLab API directly from browser with a real token.
    
    const endpoint = `/api/gitlab-proxy/projects/${encodeURIComponent(project.gitlabUrl.replace('https://gitlab.com/', ''))}/issues`;
    
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: `Solicitação de Acesso: ${project.name}`,
                description: `Solicitante: ${requesterInfo.name} (${requesterInfo.email})\nMotivo: ${requesterInfo.reason}`,
                labels: 'access-request'
            })
        });
        return await response.json();
    } catch (err) {
        console.error('Failed to create access request:', err);
        throw err;
    }
}

// Expose for global access
window.generateGitLabIssueUrl = generateGitLabIssueUrl;
window.createAccessRequestViaAPI = createAccessRequestViaAPI;
window.openAccessRequest = function(projectId) {
    const p = (window.projectsData || []).find(x => x.id === projectId);
    if (!p) return;
    window.open(generateGitLabIssueUrl(p), '_blank');
};
