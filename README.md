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
