CIDADEACESSÍVEL | GLOBAL SOLUTION 2 – 2026
FIAP — Atividade substitutiva | CitizenTech
Autores: Bruna Fazan e Giovanni Canella

1. PROPOSTA
CidadeAcessível é um protótipo mobile voltado ao registro e acompanhamento de barreiras de acessibilidade urbana. O objetivo é facilitar a identificação de problemas de infraestrutura por cidadãos, especialmente pessoas com deficiência, idosos e pessoas com mobilidade reduzida. Não é um canal oficial de atendimento público.

2. EXECUÇÃO
Pré-requisitos: Node.js 22 LTS, npm e Expo Go compatível com SDK 54 (ou emulador Android com ambiente configurado). Em um terminal, na raiz do projeto:
  npm install
  npx expo start
Leia o QR Code com Expo Go em um dispositivo conectado à mesma rede. Para Android emulado, pressione a. Para navegador, pressione w ou execute npm run web. Caso a versão instalada do Expo Go não seja compatível com SDK 54, utilize um cliente compatível ou atualize o projeto seguindo a documentação do Expo. Para verificar dependências: npx expo install --check.
Testes da lógica: npm test (dispensa instalação das dependências).

3. TECNOLOGIAS E JUSTIFICATIVAS
React Native com Expo SDK 54 e JavaScript: desenvolvimento multiplataforma com componentes nativos e configuração simplificada. AsyncStorage: persistência local assíncrona, suficiente para um protótipo sem servidor. Node.js Test Runner: validação da lógica de negócio sem bibliotecas adicionais. Navegação por estado React, sem dependência de roteador externo.

4. FUNCIONALIDADES
Registro: categoria, endereço ou referência textual, descrição e gravidade; validação antes da gravação. Consulta: lista persistida com filtros combináveis por categoria e situação. Acompanhamento: detalhes, data e alteração local da situação para Resolvida. Painel: indicadores de total, abertas e resolvidas calculados sobre registros locais. Dois registros de exemplo são identificados na interface. Não há login ou cadastro.

5. ESTRUTURA
App.js: interface, navegação, estado e integração com armazenamento.
src/domain.js: validação, filtragem, indicadores e atualização imutável da situação.
tests/domain.test.cjs: testes unitários da lógica.
app.json e package.json: configuração e dependências.
docs/DOCUMENTACAO_TECNICA.pdf: fundamentação e arquitetura detalhada.

6. ARQUITETURA
Implementação atual: interface React Native -> funções de domínio -> AsyncStorage. O aplicativo funciona localmente sem API ou sincronização. Arquitetura futura proposta: API Gateway direciona requisições a serviços independentes de Ocorrências, Localização e Indicadores. Ocorrências mantém registros; Localização normaliza referências; Indicadores consome eventos de criação e alteração de status para manter projeções agregadas. Cada serviço administra seus próprios dados. Não há microsserviços implantados nesta versão.

7. MEMÓRIA E EFICIÊNCIA
FlatList virtualiza a lista, com janela de renderização limitada e carregamento inicial de oito itens. useMemo evita recalcular filtros e indicadores quando as dependências não mudam. O efeito de leitura inicial invalida atualizações após desmontagem. Limites de caracteres reduzem o volume dos registros. Gravação ocorre somente em ações explícitas, com bloqueio contra operações concorrentes. Para escala, recomenda-se paginação e banco local indexado, pois AsyncStorage serializa a coleção inteira. Não foram realizadas medições instrumentadas de memória.

8. ODS E IMPACTO
ODS 11 (meta 11.7): espaços públicos seguros, inclusivos e acessíveis. ODS 10 (meta 10.2): promoção da inclusão social. O aplicativo favorece a organização de informações sobre barreiras urbanas; o impacto comunitário dependerá de futura integração com serviços e compartilhamento autorizado.

9. VALIDAÇÃO
Oito testes unitários passaram no Node.js 22.16.0. A execução do aplicativo em Expo Go e a persistência no dispositivo ainda requerem teste manual, pois as dependências não estavam disponíveis no cache do ambiente de desenvolvimento. Consulte o roteiro de validação na documentação. Não há declaração de homologação mobile.


IDENTIFICAÇÃO ACADÊMICA E LINKS
FIAP — GLOBAL SOLUTION 2 | 2026
Atividade Substitutiva — CitizenTech
Projeto: CidadeAcessível

Integrantes:
Bruna Fazan — RM564463
Giovanni Canella — RM564462

Repositório GitHub:
https://github.com/BrunaFazan/Cidade-Acess-vel

Vídeo técnico:
https://youtu.be/cfW2g8BOw_0
