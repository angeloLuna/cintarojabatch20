'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: "EAAcjZCSoKVoABADwS0h2f2k7wCUdvIz3Cf94rvtnX1iK1lM7AbA6VlZBYTZATdnNkNzMMbiWZB2qsVc14ijrVJgSNjTyXywWRZAZCnHsOrtvyEr2TtpdJCCLkmYY6ZAeZAvfCepUJ3ZCZCTiOqQy0IKGvew3AGu9G1eZA73o3kSCUKRUo8hgqeEW70G",
  verifyToken: 'miToken',
  appSecret: "7b5f772c42ab8a6c96c77f82cfb0e9dd",
});

// bot.on('message', (payload, chat) => {
//   const text = payload.message.text;
//   chat.say(`El Huescas dice: ${text}`);
// });

// bot.hear (['info'], (payload, chat) =>{
//   let id = payload.sender.id;
//   console.log(id);
//   axios.get ('https://graph.facebook.com/${id}?user_id?fields=name').then((response)=>{
//     console.log(response);
//     chat say("acabe peticion");
//   })
// })

bot.hear(['hello', 'hi', 'holi', 'hola'], (payload, chat) => {
  const text = payload.message.text;
  console.log(payload)
  chat.say(`Hola. ¿Cómo estas?`);
});

bot.hear(['Camara', 'adios', 'nos vemos', 'bye'], (payload, chat) => {
  const text = payload.message.text;
  console.log(payload)
  chat.say(`Te la lavas`, {typing: true});
});

bot.hear(['imagen'], (payload, chat) => {
    chat.say({
        attachment: 'image',
        url: 'https://prod.media.wapa.pe/670x376/wapa/imagen/2017/07/03/Nota-19205-emily_ratajkowski_revela_la_razon_por_varias_firmas_evitan_trabajar_con_ella.jpg'
    });
});

bot.hear(['menu'], (payload, chat)=>{
    chat.say({
        text: 'Qué quieres?',
        quickReplies: ['Dormir', 'Comer', 'Beber']
    });
});

bot.hear('convo', (payload, chat) => {

  const askName = (convo) => {
    convo.ask(`What's your name?`, (payload, convo) => {
      const text = payload.message.text;
      convo.set('name', text);
      convo.say(`Oh, your name is ${text}`).then(() => askFavoriteFood(convo));
    });
  };

  const askFavoriteFood = (convo) => {
    convo.ask(`What's your favorite food?`, (payload, convo) => {
      const text = payload.message.text;
      convo.set('food', text);
      convo.say(`Got it, your favorite food is ${text}`).then(() => sendSummary(convo));
    });
  };

  const sendSummary = (convo) => {
    convo.say(`Ok, here's what you told me about you:
        - Name: ${convo.get('name')}
        - Favorite Food: ${convo.get('food')}`);
      convo.end();
  };

  chat.conversation((convo) => {
    askName(convo);
  });
});

bot.start();