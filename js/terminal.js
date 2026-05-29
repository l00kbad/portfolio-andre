/**
 * Terminal Interactive Widget
 * Simulates a live terminal with typing commands
 */

const terminalCommands = [
    { cmd: 'docker ps', output: 'CONTAINER ID   IMAGE              STATUS          PORTS\nabc123         nginx:latest       Up 45d          80/tcp, 443/tcp\ndef456         postgres:15        Up 90d          5432/tcp\nghi789         grafana/grafana    Up 30d          3000/tcp' },
    { cmd: 'kubectl get pods -n production', output: 'NAME                              READY   STATUS    RESTARTS\napi-gateway-7c9f4b8f5-x2k9m       1/1     Running   0\nauth-service-5d8a2c1b9-y4p7n      1/1     Running   1\nprometheus-0                      1/1     Running   0\ngrafana-6b4f9d2a8-z1w3q           1/1     Running   0' },
    { cmd: 'terraform plan', output: 'Terraform will perform the following actions:\n  + aws_ecs_cluster.main\n  + aws_ecs_service.api\n  ~ aws_security_group.alb        # forces replace\nPlan: 2 to add, 1 to change, 0 to destroy.' },
    { cmd: 'ansible-playbook deploy.yml', output: 'PLAY [Deploy Application]\nTASK [Gathering Facts]     ok=[web01, web02, web03]\nTASK [Pull Docker image]   changed=[web01, web02, web03]\nTASK [Restart container]   changed=[web01, web02, web03]\nPLAY RECAP: ok=6 changed=3 failed=0' },
    { cmd: 'systemctl status zabbix-server', output: '● zabbix-server.service - Zabbix Server\n   Loaded: loaded (/lib/systemd/system/zabbix-server.service)\n   Active: active (running) since Mon 2026-01-12 08:30:00 BRT\n   Main PID: 1842 (zabbix_server)\n   CGroup: /system.slice/zabbix-server.service\n           └─1842 /usr/sbin/zabbix_server -c /etc/zabbix/zabbix_server.conf' },
    { cmd: 'aws ec2 describe-instances --filters Name=tag:Env,Values=prod', output: 'RESERVATIONS    123456789012    r-0abc123def4567890\nINSTANCES       i-0abc123def4567890    t3.medium    running    prod-web-01\nINSTANCES       i-0def456abc7890123    t3.large     running    prod-api-01\nINSTANCES       i-0ghi789abc0123456    t3.small     running    prod-db-01' },
    { cmd: 'ping -c 3 8.8.8.8', output: 'PING 8.8.8.8 (8.8.8.8): 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=117 time=12.4 ms\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=11.8 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=12.1 ms\n--- 8.8.8.8 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss' },
    { cmd: 'git log --oneline -5', output: 'a1b2c3d feat: add monitoring dashboards\ne4f5g6h fix: resolve memory leak in Prometheus\ni7j8k9l refactor: optimize CI/CD pipeline\nm0n1o2p chore: update Terraform modules\nq3r4s5t docs: add runbook for incident response' }
];

document.addEventListener('DOMContentLoaded', () => {
    initTerminalLoop();
});

function initTerminalLoop() {
    const body = document.getElementById('terminal-body');
    if (!body) return;
    
    let cmdIdx = 0;
    
    function runNextCommand() {
        const data = terminalCommands[cmdIdx];
        const cmdLine = document.getElementById('current-cmd');
        if (!cmdLine) return;
        
        // Type command
        let charIdx = 0;
        cmdLine.textContent = '';
        
        function typeChar() {
            if (charIdx < data.cmd.length) {
                cmdLine.textContent += data.cmd[charIdx];
                charIdx++;
                setTimeout(typeChar, 40 + Math.random() * 60);
            } else {
                // Show output after brief pause
                setTimeout(() => {
                    showOutput(data.output);
                }, 300);
            }
        }
        typeChar();
    }
    
    function showOutput(output) {
        const body = document.getElementById('terminal-body');
        const cmdLine = document.getElementById('current-cmd');
        
        // Create output element
        const outEl = document.createElement('div');
        outEl.className = 'terminal-output';
        outEl.innerHTML = output.replace(/\n/g, '<br>');
        
        // Insert before the typing line
        const typingLine = cmdLine.closest('.terminal-line');
        body.insertBefore(outEl, typingLine);
        
        // Scroll to bottom
        body.scrollTop = body.scrollHeight;
        
        // Clear command and move to next after delay
        setTimeout(() => {
            cmdLine.textContent = '';
            cmdIdx = (cmdIdx + 1) % terminalCommands.length;
            
            // Remove old outputs if too many
            const outputs = body.querySelectorAll('.terminal-output');
            if (outputs.length > 6) {
                for (let i = 0; i < outputs.length - 6; i++) {
                    outputs[i].remove();
                }
            }
            
            runNextCommand();
        }, 3000);
    }
    
    // Start after initial delay
    setTimeout(runNextCommand, 2000);
}
