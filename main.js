const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()
const TOKEN = process.env.TOKEN

const bot = new TelegramBot(TOKEN, {polling: true});
const fs = require('fs');


const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send("Bot is alive")
})
const port = 3000;
app.listen(port, () => {
        console.log(`server running https://localhost:${port}`);
})

bot.on('message',msg =>{
    console.log(msg);
})
// Kalit so'zlar
const keywords = ['sultan taxi ofis','yunusobod','yunusobot', 'chilonzor', 'ttz', 'olmazor', 'kadisheva', 'bektimir', 'sergeli', 'admin', 'admn', 'pul yechish', 'pul chiqarish', 'brend', 'qarz berib', 'qarz tashlab', 'limit','юнусобод', 'чилонзор', 'ттз', 'олмазор', 'кадишева', 'бектимир', 'сергели', 'админ', 'адмн', 'пул ечиш', 'пул чиқариш', 'бренд'];

// Habardagi kalit so'zlarni aniqlash uchun funksiya
function findKeywords(message) {
    const foundKeywords = [];
    keywords.forEach(keyword => {
        if (message.toLowerCase().includes(keyword)) {
            foundKeywords.push(keyword);
        }
    });
    return foundKeywords;
} 

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.toString().toLowerCase();
    const foundKeywords = findKeywords(messageText);
    
    const userId = msg.from.id;
    const username = msg.from.username;
    const text = msg.text;
    
    const messageData = {
        userId: userId,
        username: username,
        messageText: text,
    };
    
    let replay = {reply_to_message_id: msg.message_id};
    let htmlTeg = { parse_mode: 'HTML'}
    
    // JSON ma'lumotlarini faylga qo'shish
    // fs.appendFile('messages.json', JSON.stringify(messageData) + '\n', (err) => {
        //     if (err) {
    //         console.error('Xatolik yuz berdi:', err);
    //         return;
    //     }
    //     console.log('Ma\'lumotlar faylga saqlandi.');
    // });
    
    
    // Avtomatik javoblar
    if (messageText === 'salom') {
        const messageText = 'Salom, qanday yordam bera olishim mumkin?'; 
        bot.sendMessage(chatId, messageText);
    } 
    else if (messageText === '/start') {
        bot.sendMessage(chatId, ' ASSALOMU ALAYKUM SULTAN TAXI YORDAMCHI BOTGA XUSH KELIBSIZ ', `@SULTANTAXITASHKENT TELEGRAM GURUHGA A'ZO BULING`);
    } 
    else if (foundKeywords.length > 0 && foundKeywords[0] === "yunusobod" || foundKeywords[0] === "yunusobot" || foundKeywords[0] === "юнусобод" || messageText === '/yunusobod') {
        const options = {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Lokatsiya', url: 'https://yandex.uz/maps/-/CDsVAOl3' }]
                ]
            }
        };
        bot.sendMessage(chatId,
            `<b> YUNUSOBOD 14KV-21D </b> \n` +
            `💠  ISH VAQTI 24/7 \n` +
            `☎️ +998931174422 \n` +
            `☎️ +998781130848 \n` +
            `📝 @SULTANTAXI \n\n` + 
            
            `🔘 OFISNING IMKONYATLARI \n `+
            `🔴 Taximetrdagi muammolaringizni bartaraf etish \n ` +
            `🔴 Hisobingizni to'ldirganingizda +20% Bonus \n ` +
            `🔴 Hisobdan pul yechish 24/7 (T/g bot) \n ` +
            `🔴 Avto Sug'irta \n ` +
            `🔴 Litsenziya taxi \n ` +
            `🔴 Oynalar tusini o'zgartrish (ruxsatnoma) \n ` +
            'Lokatsiya uchun tugmani bosing: ', {...replay ,...htmlTeg, ...options});
        }
        else if (foundKeywords.length > 0 &&  foundKeywords[0] === "olmazor" || foundKeywords[0] === "олмазор" || messageText === '/olmazor') {
            const options = {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/4AgGy4zHUPosBmb86' }]
                    ]
                },
            };
            bot.sendMessage(chatId,
                `<b> OLMAZOR </b> \n` +
                `💠 ISH VAQTI  (08:00-23:00) \n` +
                `☎️ +998939728844 \n` +
                `☎️ +998781130848 \n` +
                `📝 @SULTANTAXI_OLMAZOR \n\n` + 
                
                `🔘 OFISNING IMKONYATLARI \n `+
                `🔴 Taximetrdagi muammolaringizni bartaraf etish \n ` +
                `🔴 Hisobingizni to'ldirganingizda +20% Bonus \n ` +
                `🔴 Hisobdan pul yechish 24/7 (T/g bot) \n ` +
                `🔴 Avto Sug'irta \n ` +
                `🔴 Litsenziya taxi \n ` +
                `🔴 Oynalar tusini o'zgartrish (ruxsatnoma) \n ` +
                'Lokatsiya uchun tugmani bosing: ', {...replay ,...htmlTeg, ...options});
                
            }
            else if (foundKeywords.length > 0 && foundKeywords[0] === "chilonzor" || foundKeywords[0] === "чилонзор" || messageText === '/chilonzor') {
                const options = {
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/P6aSdprfa8Mrw1yv6' }]
                        ]
                    }
                };
                bot.sendMessage(chatId,
                    `<b> Chilonzor Tumani, 18-Mavze ,16-Uy </b> \n` +
                    `💠 ISH VAQTI 24/7 \n` +
                    `☎️ +998939317550 \n` +
                    `☎️ +998781130848 \n` +
                    `📝 @SULTANTAXICHILONZOR \n\n` + 
                    
                    `🔘 OFISNING IMKONYATLARI \n `+
                    `🔴 Taximetrdagi muammolaringizni bartaraf etish \n ` +
                    `🔴 Hisobingizni to'ldirganingizda +20% Bonus \n ` +
                    `🔴 Hisobdan pul yechish 24/7 (T/g bot) \n ` +
                    `🔴 Avto Sug'irta \n ` +
                    `🔴 Litsenziya taxi \n ` +
                    `🔴 Oynalar tusini o'zgartrish (ruxsatnoma) \n ` +
                    'Lokatsiya uchun tugmani bosing: ', {...replay ,...htmlTeg, ...options});
                }
                else if (foundKeywords.length > 0 && foundKeywords[0] === "kadisheva" || foundKeywords[0] === "кадишева" || messageText === '/kadisheva') {
                    const options = {
                        parse_mode: 'HTML',
                        reply_markup: {
                            inline_keyboard: [
                                [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/ruHCZcwPKU8sAbzUA' }]
                            ]
                        }
                    };
                    bot.sendMessage(chatId,
                        `<b> KADISHEVA </b> \n` +
                        `💠 ISH VAQTI  (09:00-21:00) \n` +
                        `☎️ +998948763337 \n` +
                        `📝 @SULTANTAXI_KADISHEVA \n\n` + 
                        
                        `🔘 OFISNING IMKONYATLARI \n `+
                        `🔴 Taximetrdagi muammolaringizni bartaraf etish \n ` +
                        `🔴 Hisobingizni to'ldirganingizda +20% Bonus \n ` +
                        `🔴 Hisobdan pul yechish 24/7 (T/g bot) \n ` +
                        `🔴 Avto Sug'irta \n ` +
                        `🔴 Litsenziya taxi \n ` +
                        `🔴 Oynalar tusini o'zgartrish (ruxsatnoma) \n ` +
                        'Lokatsiya uchun tugmani bosing: ', {...replay ,...htmlTeg, ...options});
                    } 
                    else if (foundKeywords.length > 0 && foundKeywords[0] === "ttz" || foundKeywords[0] === "ттз" || messageText === '/ttz') {
                        const options = {
                            parse_mode: 'HTML',
                            reply_markup: {
                                inline_keyboard: [
                                    [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/7rNzVxQE5SvzXsfW6' }]
                                ]
                            }
                        };
                        bot.sendMessage(chatId,
                            `<b> TTZ DIADORA </b> \n` +
                            `💠 ISH VAQTI  (08:00-00:00) \n` +
                            `☎️ +998930714335 \n` +
                            `📝 @SULTANTAXI_TTZ \n\n` + 
                            
                            `🔘 OFISNING IMKONYATLARI \n `+
                            `🔴 Taximetrdagi muammolaringizni bartaraf etish \n ` +
                            `🔴 Hisobingizni to'ldirganingizda +20% Bonus \n ` +
                            `🔴 Hisobdan pul yechish 24/7 (T/g bot) \n ` +
                            `🔴 Avto Sug'irta \n ` +
                            `🔴 Litsenziya taxi \n ` +
                            `🔴 Oynalar tusini o'zgartrish (ruxsatnoma) \n ` +
                            'Lokatsiya uchun tugmani bosing: ', {...replay ,...htmlTeg, ...options});
                        } 
                        else if (foundKeywords.length > 0 && foundKeywords[0] === "bektimir" || foundKeywords[0] === "бектимир" || messageText === '/bektimir') {
                            const options = {
                                parse_mode: 'HTML',
                                reply_markup: {
                                    inline_keyboard: [
                                        [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/hKt7r2nC2hWVhHTo8' }]
                                    ]
                                }
                            };
                            bot.sendMessage(chatId,
                                `<b> BEKTEMIR </b> \n` +
                                `💠 ISH VAQTI (08:00 - 23:00) \n` +
                                `☎️ +998948793337 \n` +
                                `📝 @SULTANTAXI_BEKTEMIR \n\n` + 
                                
                                `🔘 OFISNING IMKONYATLARI \n `+
                                `🔴 Taximetrdagi muammolaringizni bartaraf etish \n ` +
                                `🔴 Hisobingizni to'ldirganingizda +20% Bonus \n ` +
                                `🔴 Hisobdan pul yechish 24/7 (T/g bot) \n ` +
                                `🔴 Avto Sug'irta \n ` +
                                `🔴 Litsenziya taxi \n ` +
                                `🔴 Oynalar tusini o'zgartrish (ruxsatnoma) \n ` +
                                'Lokatsiya uchun tugmani bosing: ', {...replay ,...htmlTeg, ...options});
                            } 
                            else if (foundKeywords.length > 0 && foundKeywords[0] === "sergeli" || foundKeywords[0] === "сергели" || messageText === '/sergeli') {
                                const options = {
                                    parse_mode: 'HTML',
                                    reply_markup: {
                                        inline_keyboard: [
                                            [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/7rNzVxQE5SvzXsfW6' }]
                                        ]
                                    }
                                };
                                bot.sendMessage(chatId,
                                    `<b> SERGELI </b> \n` +
                                    `💠 ISH VAQTI  (08:00-00:00) \n` +
                                    `☎️ +998947918883 \n` +
                                    `📝 @SULTANTAXISERGELI \n\n` + 
                                    
                                    `🔘 OFISNING IMKONYATLARI \n `+
                                    `🔴 Taximetrdagi muammolaringizni bartaraf etish \n ` +
                                    `🔴 Hisobingizni to'ldirganingizda +20% Bonus \n ` +
                                    `🔴 Hisobdan pul yechish 24/7 (T/g bot) \n ` +
                                    `🔴 Avto Sug'irta \n ` +
                                    `🔴 Litsenziya taxi \n ` +
                                    `🔴 Oynalar tusini o'zgartrish (ruxsatnoma) \n ` +
                                    'Lokatsiya uchun tugmani bosing: ', {...replay ,...htmlTeg, ...options});
                                } 
                                else if (foundKeywords.length > 0 && foundKeywords[0] === "pul yechish" || foundKeywords[0] === "pul chiqarish" || foundKeywords[0] === "пул чиқариш" || foundKeywords[0] === "пул ечиш") {
                                    bot.sendMessage(chatId,
                                        ` ASSALOMU ALAYKUM  PUL YECHISH ''SULTAN TAXI''NING MAXSUS BOTI ORQALI 24/7 YECHIB OLISHINGIZ MUMKIN \n` +
                                        ` https://t.me/multidriver_sultantaxibot \n` + 
                                        `  \n\n`,
                                        {...replay ,...htmlTeg})
                                    } 
                                    else if (foundKeywords.length > 0 && foundKeywords[0] === 'admin' || foundKeywords[0] === 'admn' || foundKeywords[0] === 'админ' || foundKeywords[0] === 'адмн' || foundKeywords[0] === 'qarz berib' || foundKeywords[0] === 'qarz tashlab' || foundKeywords[0] === 'limit') {
                                        bot.sendMessage(chatId, 
                                            `👋Assalomu alaykum \n`+
                                            `🧐Sizga qanday yordam bera olaman ? \n`+
                                            `🙋‍♂️ Iltimos operator javobini kuting \n`+
                                            `✈️@SULTANTAXICHILONZOR  \n `+
                                            `✈️@SULTANTAXI \n `+
                                            `✈️@SULTANTAXI_TTZ \n `+
                                            `✈️@SULTANTAXISERGELI \n `+
                                            `✈️@SULTANTAXI_BEKTEMIR \n `+
                                            `✈️@SULTANTAXI_OLMAZOR \n `+
                                            `✈️@SULTANTAXI_KADISHEVA yoki \n ` +
                                            `📱+998781130848 biz bilan bog'laning \n`,
                                            {...replay ,...htmlTeg})
                                        }
                                        else if(foundKeywords.length > 0 && foundKeywords[0] === 'sultan taxi ofis' || messageText === '/malumot@sultantaxiyordamchi_bot' || messageText === '/malumot'){
                                            const servicesMessage = `👨🏻‍💻  ASSALOMU ALAYKUM HAYDOVCHILAR SIZNI OFFICEMIZDA KUTIB QOLAMIZ VA TURLI XIL XIZMATLARIMIZNI TAKLIF QILAMIZ\n\n`
                                            +
                                            `❇️ LITSENZIYA \n`+
                                            `❇️ ISHONCHNOMA (DAVERNOS) \n`+
                                            `❇️ OYNALAR TUSINI O'ZGARTIRISH \n`+
                                            `❇️ SUG'URTA \n`+
                                            `❇️ HAYDOVCHILIK GUVOHNOMASINI ALMASHTIRISH \n`+
                                            `❇️ BUNDAY IMKONIYAT FAQAT SULTAN TAXIDA \n\n`
                                            + 
                                            `1.🔔 YUNUSOBOD 14KV-21D \n`+
                                            `💠   ISH VAQTI 24/7 \n`+
                                            `☎️  +998931174422 \n`+
                                            `📝 @SULTANTAXI \n\n`
                                            +
                                            `2.🔔Chilonzor Tumani, 18-Mavze ,16-Uy,2x \n `+
                                            `💠 ISH VAQTI 24/7 \n `+
                                            `☎️ +998939317550 \n `+
                                            `📝 @SULTANTAXICHILONZOR \n\n`
                                            +
                                            ` 3.🔔 TTZ DIADORA \n`+
                                            `💠  ISH VAQTI (08:00-00:00) \n`+
                                            `☎️ +998930714335 \n`+
                                            `📝 @SultanTaxi_TTZ \n\n` 
                                            +
                                            `4.🔔 OLMAZOR \n ` +
                                            `💠  ISH VAQTI  (08:00-00:00) \n ` +
                                            `☎️ +998939728844 \n ` +
                                            `📝 @SULTANTAXI_OLMAZOR \n\n`
                                            +
                                            `5.🔔 KADISHEVA \n `+
                                            `💠   ISH VAQTI (08:00-00:00)\n `+
                                            `☎️  +998948763337 \n `+
                                            `📝  @SULTANTAXI_KADISHEVA \n\n`
                                            +
                                            ` 6.🔔 BEKTEMIR \n ` +
                                            `💠  ISH VAQTI (08:00 - 23:00) \n ` +
                                            `☎️ +998948793337 \n ` +
                                            `📝  @SULTANTAXI_BEKTEMIR \n\n`
                                            +
                                            `7 .🔔 SERGELI \n `+
                                            `💠  ISH VAQTI (08:00-00:00) \n `+
                                            `☎️  +998947918883 \n `+
                                            `📝 @SULTANTAXISERGELI \n\n`+
                                            
                                            `<b> Оfisimiz orqali  taksometr balansini to'ldirsangiz +20% BONUSga ega bo'lasiz! </b> \n\n`+
                                            `<b> Click va Payme orqali  taksometr balansini to'ldirsangiz +20% BONUSga ega bo'lasiz! </b> \n\n` +
                                            `<b> Endi karta orqali qilingan to'lov va bonuslarni TELEGRAM BOT @multidriver_sultantaxibot da foizsiz yechvolishingiz mumkin </b> \n\n` +
                                            
                                            `☎️ Ma'lumotlar:  \n `+
                                            `☎️ +998781130848 \n `+
                                            `⌨️ 24/7  \n `+
                                            `📝 @sultantaxitashkent \n `
                                            ;
                                            bot.sendMessage(chatId, servicesMessage, {...replay, ...htmlTeg});
                                        } else {
                                            const data = ``
                                            // bot.sendMessage(chatId, data);
                                        }
                                    });