# app_resposta-certa

## Como iniciar

Instale as dependencias:

```bash
npm install
```

Em um terminal, inicie o backend local com o banco `backend_app/bd.json`
na porta `3010`:

```bash
npm run server
```

Em outro terminal, inicie o app Expo na porta `8090`:

```bash
npm start
```

Para abrir direto no navegador:

```bash
npm run web
```

Login de teste:

- Email: `aluno@respostacerta.com`
- Senha: `123456`

Se for testar no celular pelo Expo Go, troque o `localhost` do arquivo `.env`
pelo IP do computador na mesma rede. Exemplo:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.10:3010
```
