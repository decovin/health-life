# Fitness Vinicius

App simples para consultar dieta e treino, com foco em acesso rápido pelo celular.

## Rodar localmente

```bash
cd /Users/viniciusdeco/Documents/Fitness
python3 -m http.server 5173
```

Depois abra `http://localhost:5173`.

## Supabase

1. Crie um projeto no Supabase.
2. Rode o SQL de `supabase.sql` no SQL Editor.
3. Copie `config.example.js` para `config.js`.
4. Preencha `SUPABASE_URL` e `SUPABASE_ANON_KEY`.

Sem Supabase configurado, o app salva tudo no navegador via `localStorage`.

## Vercel

Este projeto é estático. Na Vercel, publique a pasta raiz do projeto.

Se for usar Supabase no deploy, mantenha um `config.js` com as chaves públicas do projeto. A anon key do Supabase foi feita para ser pública; as regras de acesso ficam nas policies do banco.

## Revisão local do treino

A base foi comparada com `https://health-life-taupe.vercel.app`: os arquivos
principais eram idênticos antes desta revisão. Nenhum push ou deploy faz parte
da entrega local; o push para o GitHub pode disparar a publicação da Vercel.

Em localhost, loopback e endereços privados de rede, o app usa somente
`localStorage`, mesmo com o `config.js` de produção. Os dados são separados
por origem do navegador e por perfil. Para revisar, execute `npm run dev`
ou `python3 -m http.server 5173` e abra `http://localhost:5173`.

- Escolha programas no seletor da tela de treino; editar é uma ação separada.
- O ícone de gráfico abre/fecha a evolução no cartão e mantém a expansão
  durante alterações da ficha. Cada gráfico pode ser aberto separadamente.
- Segure uma caixa de dia por 400 ms e arraste até outra posição. As setas
  movem o dia selecionado; no teclado também há Alt + seta esquerda/direita.
- Excluir retira o programa das opções. Selecione a data e o nome do treino
  registrado para consultar sua ficha, mesmo depois da exclusão.
- Cargas e máquinas anteriores são procuradas pelo nome exato do exercício,
  dentro do perfil. Não há associação automática pelo número da máquina.

### Persistência e futura publicação

O JSON de programas passa a ter `schemaVersion: 2`, `sessions` por data e
ID de treino, além de `deletedAt` nos programas excluídos. O arquivo diário
preserva a ficha, os campos e as marcações sem depender da definição vigente.
Os programas excluídos permanecem como arquivo interno e não são apagados
fisicamente. O primeiro carregamento mantém uma cópia local do JSON legado
em `fitness:<perfil>:workout-plans:backup-v1`.

No Supabase, a fonte principal é `profile_settings.workout_plans`, coluna
já prevista em `supabase.sql`. O campo legado `workout_names.__workout_plans`
continua sendo escrito para compatibilidade. Abas antigas não escrevem na
coluna principal. Antes da publicação futura, conferir a existência dessa
coluna ou aplicar o `ADD COLUMN IF NOT EXISTS` já incluído no SQL. Nenhuma
alteração de banco foi aplicada nesta revisão local.

Os registros antigos não guardavam a ficha histórica completa. Antes de
editar ou excluir programas, o app reconstrói os dias disponíveis com seus
logs e a definição conhecida, sem inventar vínculos a partir da máquina.
Esses dias recebem a indicação “ficha reconstruída dos registros antigos”.
Nomes, prescrição e máquina que já tinham mudado antes desta revisão não
podem ser recuperados com exatidão; os registros novos preservam esses dados.

### Testes

Com Node.js disponível, execute `npm test`. A suíte usa armazenamento e
Supabase simulados, sem chamadas ao banco real. A prévia também foi verificada
no navegador para carga, expansão de gráfico, data retroativa, exclusão,
consulta do histórico e persistência da ordem.
